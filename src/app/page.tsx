'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { 
  BellIcon, 
  CreditCardIcon, 
  SparklesIcon,
  CheckCircleIcon,
  ArrowRightIcon
} from '@heroicons/react/24/outline'
import { supabase } from '@/lib/supabase'

export default function Home() {
  const TESTFLIGHT_URL = 'https://testflight.apple.com/join/4rTcvRv8'
  
  // Real-time count of people interested (beta_clicks table size)
  const [interestedCount, setInterestedCount] = useState(0)
  const [showDesktopWarning, setShowDesktopWarning] = useState(false)
  const [linkCopied, setLinkCopied] = useState(false)

  useEffect(() => {
    // Fetch initial count from beta_clicks table
    const fetchCount = async () => {
      try {
        const { count, error } = await supabase
          .from('beta_clicks')
          .select('*', { count: 'exact', head: true })
        if (error) {
          console.error('Error fetching beta clicks count:', error)
        } else {
          setInterestedCount((count || 0) + 38)
        }
      } catch (error) {
        console.error('Error in fetchCount:', error)
      }
    }

    fetchCount()

    // Subscribe to real-time changes when new clicks are added
    const channel = supabase
      .channel('beta-clicks-changes')
      .on(
        'postgres_changes',
        {
          event: 'INSERT',
          schema: 'public',
          table: 'beta_clicks'
        },
        () => {
          // When a new click is added, increment the counter with animation
          setInterestedCount(prev => prev + 1)
        }
      )
      .subscribe()

    // Cleanup on unmount
    return () => {
      channel.unsubscribe()
    }
  }, [])

  // Track beta clicks with geolocation
  const trackBetaClick = async () => {
    try {
      // Fetch location data
      const location = await fetchUserLocation()
      
      // Get IP address from a simple API
      let ipAddress = null
      try {
        const ipResponse = await fetch('https://api.ipify.org?format=json')
        const ipData = await ipResponse.json()
        ipAddress = ipData.ip
      } catch (error) {
        console.error('Error fetching IP:', error)
      }

      // Insert click data into beta_clicks table
      const { error } = await supabase
        .from('beta_clicks')
        .insert([
          {
            country: location.country,
            city: location.city,
            ip_address: ipAddress,
            clicked_at: new Date().toISOString()
          }
        ])

      if (error) {
        console.error('Error tracking beta click:', error)
      }
    } catch (error) {
      console.error('Error in trackBetaClick:', error)
    }
  }

  // Handle beta button click
  const handleJoinBeta = async () => {
    // Detect if user is on mobile
    const isMobile = /iPhone|iPad|iPod/i.test(navigator.userAgent)
    
    if (isMobile) {
      // Track the click (don't await to avoid delay)
      trackBetaClick()

      
      
      // On mobile, use direct navigation for instant TestFlight launch
      // This will open TestFlight app if installed, or App Store if not
      window.location.href = TESTFLIGHT_URL
    } else {
      // On desktop, show warning modal
      setShowDesktopWarning(true)
    }
  }


  // Function to fetch user location from IP address
  const fetchUserLocation = async (): Promise<{ country: string | null, city: string | null }> => {
    // Type definitions for API responses
    interface IpWhoIsResponse {
      success?: boolean
      country?: string
      city?: string
    }

    interface IpApiCoResponse {
      error?: boolean
      country_name?: string
      city?: string
    }

    // Try multiple APIs as fallback
    const apis = [
      {
        name: 'ipwho.is',
        url: 'https://ipwho.is/',
        parseResponse: (data: IpWhoIsResponse) => {
          if (data.success !== false) {
            return { country: data.country || null, city: data.city || null }
          }
          return null
        }
      },
      {
        name: 'ipapi.co',
        url: 'https://ipapi.co/json/',
        parseResponse: (data: IpApiCoResponse) => {
          if (data.error !== true) {
            return { country: data.country_name || null, city: data.city || null }
          }
          return null
        }
      }
    ]

    for (const api of apis) {
      try {
        // Set timeout to prevent blocking (2 seconds per API)
        const controller = new AbortController()
        const timeoutId = setTimeout(() => controller.abort(), 2000)
        
        console.log(`Fetching location from ${api.name}...`)
        const response = await fetch(api.url, {
          signal: controller.signal,
          headers: {
            'Accept': 'application/json',
          }
        })
        
        clearTimeout(timeoutId)
        
        if (!response.ok) {
          console.warn(`${api.name} HTTP error:`, response.status)
          continue // Try next API
        }
        
        const data = await response.json()
        console.log(`${api.name} response:`, data)
        
        const location = api.parseResponse(data)
        if (location) {
          console.log('Location fetched successfully:', location)
          return location
        }
      } catch (error) {
        console.warn(`${api.name} failed:`, error)
        // Continue to next API
        continue
      }
    }
    
    // All APIs failed
    console.warn('All location APIs failed, proceeding without location data')
    return { country: null, city: null }
  }


  return (
    <main className="flex min-h-screen flex-col overflow-x-hidden">
      {/* Desktop Warning Modal */}
      {showDesktopWarning && (
        <div 
          className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={() => setShowDesktopWarning(false)}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            onClick={(e) => e.stopPropagation()}
            className="bg-white rounded-3xl p-6 sm:p-8 max-w-md w-full shadow-2xl border-2 border-brand-border"
          >
            <div className="text-center">
              <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-amber-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-brand-primary mb-3 font-nunito">IOS Mobile Only Beta</h3>
              <p className="text-brand-text-secondary mb-6 leading-relaxed">
                Our beta is currently available for <strong>IOS</strong> devices only. 
                Please open this link on your mobile device to download from TestFlight.
              </p>
              
              <div className="bg-gray-50 rounded-xl p-4 mb-6 border border-gray-200">
                <p className="text-xs text-brand-text-secondary mb-2 font-medium">Beta Link:</p>
                <p className="text-sm text-brand-primary font-mono break-all select-all">
                  {TESTFLIGHT_URL}
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-3">
                <button
                  onClick={() => {
                    navigator.clipboard.writeText(TESTFLIGHT_URL)
                    setLinkCopied(true)
                    setTimeout(() => setLinkCopied(false), 2000)
                  }}
                  className={`flex-1 px-6 py-3 rounded-xl font-semibold transition-all duration-200 ${
                    linkCopied 
                      ? 'bg-green-500 text-white' 
                      : 'bg-brand-primary text-white hover:bg-pine-alt'
                  }`}
                >
                  {linkCopied ? (
                    <span className="inline-flex items-center gap-2">
                      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      Copied!
                    </span>
                  ) : (
                    'Copy Link'
                  )}
                </button>
                <button
                  onClick={() => {
                    setShowDesktopWarning(false)
                    setLinkCopied(false)
                  }}
                  className="flex-1 px-6 py-3 rounded-xl border-2 border-gray-200 text-gray-700 font-semibold hover:bg-gray-50 transition-colors"
                >
                  Close
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      )}

      {/* Navigation */}
      <nav className="fixed w-full bg-white backdrop-blur-lg z-50 border-b border-brand-border shadow-sm">
        <div 
          className="block sm:hidden bg-white" 
          style={{ height: 'env(safe-area-inset-top, 0px)' }}
        ></div>
        <div className="container-custom py-3 sm:py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-1">
              <Image
                src="/logo_icon.png" 
                alt="Handl Logo" 
                width={40} 
                height={40}
                className="w-9 h-9 -translate-y-[-1px]"
              />
              <span className="text-[1.75rem] font-bold tracking-tight text-brand-primary font-nunito leading-tight">Handl</span>
            </div>
            <div className="hidden md:flex items-center gap-8">
              <button 
                onClick={() => document.getElementById('features')?.scrollIntoView({ behavior: 'smooth' })}
                className="text-brand-text-secondary hover:text-brand-primary font-medium transition-colors"
              >
                Features
              </button>
              <button 
                onClick={() => document.getElementById('steps')?.scrollIntoView({ behavior: 'smooth' })}
                className="text-brand-text-secondary hover:text-brand-primary font-medium transition-colors"
              >
                How It Works
              </button>
              <button
                onClick={handleJoinBeta}
                className="px-6 py-2.5 rounded-xl bg-brand-primary text-white font-semibold hover:bg-pine-alt transition-colors"
              >
                Join Beta
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-20 sm:pt-24 md:pt-28 pb-10 sm:pb-14 md:pb-18 relative overflow-hidden">
        {/* Background decorations */}
        <div className="absolute inset-0 gradient-mesh"></div>
        <div className="absolute inset-0 noise-bg"></div>
        
        <div className="container-custom relative">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left Column - Content */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center lg:text-left z-10"
            >
              
              <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-white border border-brand-border shadow-soft-1 mb-2">
                <div className="w-7 h-7 rounded-full bg-brand-accent/10 flex items-center justify-center text-base">🎉</div>
                <span className="text-sm text-brand-primary font-semibold">
                  First 100 users will have premium access to the app when we launch
                </span>
              </div>
              
              
              <h1 className="heading-xl mb-6 text-brand-primary leading-[1.05]">
                <span className="inline-block whitespace-normal sm:whitespace-nowrap">Automate Expenses</span>{' '}
                with <span className="text-gradient inline-block">AI</span>
              </h1>
              
              <p className="text-xl md:text-2xl text-brand-text-secondary mb-8 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
                We&apos;re building the first OS for expense management, automating tracking, 
                splitting, and settlement for everyday users.
              </p>
              
              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
                <button 
                  onClick={handleJoinBeta}
                  className="btn-primary w-full sm:w-auto group"
                >
                  Join the Beta
                  <ArrowRightIcon className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </button>
                <button 
                  onClick={() => document.getElementById('steps')?.scrollIntoView({ behavior: 'smooth' })}
                  className="btn-secondary w-full sm:w-auto"
                >
                  See How It Works
                </button>
              </div>

              {/* Stats */}
              <div className="mt-12 grid grid-cols-3 gap-6 max-w-lg mx-auto lg:mx-0">
                <div className="text-center lg:text-left">
                  <div className="text-3xl font-bold text-brand-primary">
                    {interestedCount}
                  </div>
                  <div className="text-sm text-brand-text-secondary mt-1">Interested in Handl</div>
                </div>
                <div className="text-center lg:text-left">
                  <div className="text-3xl font-bold text-brand-primary">2s</div>
                  <div className="text-sm text-brand-text-secondary mt-1">Avg Split Time</div>
                </div>
                <div className="text-center lg:text-left">
                  <div className="text-3xl font-bold text-brand-primary">100%</div>
                  <div className="text-sm text-brand-text-secondary mt-1">Free</div>
                </div>
              </div>
            </motion.div>

            {/* Right Column - iPhone Mockup */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 30 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="relative flex justify-center lg:justify-end"
            >
              {/* Floating elements behind iPhone */}
              <div className="absolute inset-0 flex items-center justify-center">
                <motion.div
                  animate={{ 
                    scale: [1, 1.1, 1],
                    rotate: [0, 5, 0]
                  }}
                  transition={{ 
                    duration: 4, 
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                className="absolute w-64 h-64 rounded-full bg-brand-primary/10 blur-3xl"
                />
                <motion.div
                  animate={{ 
                    scale: [1, 1.2, 1],
                    rotate: [0, -5, 0]
                  }}
                  transition={{ 
                    duration: 5, 
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 1
                  }}
                  className="absolute w-72 h-72 rounded-full bg-brand-success-soft/25 blur-3xl"
                />
                          </div>

              {/* iPhone Frame */}
              <div className="relative z-10">
                <div className="iphone-frame w-[280px] sm:w-[320px] lg:w-[360px] aspect-[9/19.5]">
                  {/* Notch */}
                  <div className="iphone-notch z-20"></div>
                  
                  {/* Screen Content */}
                  <div className="iphone-screen">
                    <Image
                      src="/home_screen.jpeg"
                      alt="Handl App Home Screen"
                      width={390}
                      height={844}
                      className="w-full h-full object-cover"
                      priority
                    />
                      </div>

                  {/* Side button */}
                  <div className="absolute -right-1 top-24 w-1 h-12 bg-gray-800 rounded-l-sm"></div>
                  <div className="absolute -left-1 top-20 w-1 h-8 bg-gray-800 rounded-r-sm"></div>
                  <div className="absolute -left-1 top-32 w-1 h-12 bg-gray-800 rounded-r-sm"></div>
                            </div>

                {/* Floating cards around iPhone */}
                <FloatingCard 
                  className="absolute -left-8 top-20 hidden xl:block"
                  delay={0.5}
                >
                  <div className="flex items-center gap-3 p-4 bg-white rounded-2xl shadow-soft-2 border border-brand-border">
                    <div className="w-10 h-10 rounded-xl bg-brand-success-soft/20 flex items-center justify-center">
                      <CheckCircleIcon className="w-6 h-6 text-brand-success-soft" />
                            </div>
                            <div>
                      <div className="text-sm font-semibold text-brand-primary">Split Complete</div>
                      <div className="text-xs text-brand-text-secondary">Dinner paid</div>
                    </div>
                  </div>
                </FloatingCard>

                <FloatingCard 
                  className="absolute -right-12 bottom-32 hidden xl:block"
                  delay={0.8}
                >
                  <div className="flex items-center gap-3 p-4 bg-white rounded-2xl shadow-soft-2 border border-brand-border">
                    <div className="w-10 h-10 rounded-xl bg-brand-icon-bg-light flex items-center justify-center">
                      <BellIcon className="w-6 h-6 text-brand-primary" />
                  </div>
                  <div>
                      <div className="text-sm font-semibold text-brand-primary">Smart Reminder</div>
                      <div className="text-xs text-brand-text-secondary">$45 from Sarah</div>
                    </div>
                  </div>
                </FloatingCard>
                </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-16 md:py-20 bg-white relative">
        <div className="container-custom">
          <div className="text-center max-w-4xl mx-auto mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-50 border border-primary-200 mb-6">
                <SparklesIcon className="w-5 h-5 text-primary-600" />
                <span className="text-sm font-semibold text-primary-700">Splitting Made Simple</span>
              </div>
              <h2 className="heading-lg mb-6 text-brand-primary">
                Four Simple Steps.
                <span className="text-gradient block mt-2">Split Any Expense in Seconds.</span>
              </h2>
              <p className="text-xl text-brand-text-secondary max-w-3xl mx-auto">
                Whether you&apos;re at dinner, on a trip, or sharing rent — Handl adapts to how you live. 
                No spreadsheets, no awkward texts, no math.
              </p>
            </motion.div>
          </div>

          {/* Feature Cards Grid */}
          <div className="grid md:grid-cols-2 gap-6 lg:gap-8 max-w-6xl mx-auto">
            {/* Feature 1: Link Card */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="group relative rounded-3xl p-8 lg:p-10 border-2 border-brand-border/80 hover:border-brand-primary transition-all duration-300 shadow-soft-1 hover:shadow-green flex flex-col bg-gradient-to-br from-brand-card-bg via-cream-panel/50 to-brand-icon-bg-light"
            >
              <div className="flex flex-col sm:flex-row sm:items-start gap-6 mb-6 flex-1 text-center sm:text-left">
                <div className="flex-shrink-0 flex justify-center sm:justify-start">
                  <div className="w-16 h-16 rounded-2xl bg-brand-primary flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <CreditCardIcon className="w-9 h-9 text-white" />
                  </div>
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2 justify-center sm:justify-start">
                    <span className="text-xs font-bold text-brand-primary uppercase tracking-wider">Step 1</span>
                    <div className="hidden sm:block h-px flex-1 bg-brand-border-subtle"></div>
                  </div>
                  <h3 className="text-2xl lg:text-3xl font-bold text-brand-primary mb-3 font-nunito">
                    Link Your Card Once
                  </h3>
                  <p className="text-lg text-brand-text-secondary leading-relaxed mb-4">
                    Connect your credit or debit card in seconds. Handl automatically tracks every transaction.
                  </p>
                  <div className="flex flex-wrap items-center justify-center sm:justify-start gap-2 text-sm font-semibold text-brand-primary">
                    <CheckCircleIcon className="w-5 h-5" />
                    <span>100% secure • Bank-level encryption</span>
                  </div>
                </div>
              </div>
              <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-3 border border-brand-border mt-auto flex items-center gap-4">
                <div className="flex items-center gap-3 flex-1 min-w-0">
                  <div className="w-14 h-9 rounded-lg bg-gradient-to-br from-brand-primary to-brand-primary/70 border border-brand-border flex flex-col justify-between p-2 text-white shadow-green">
                    <div className="w-5 h-2 rounded-sm bg-white/70"></div>
                    <div className="h-1 bg-white/75 rounded-full w-9"></div>
                  </div>
                  <div className="flex-1">
                    <div className="h-2 w-24 bg-brand-primary rounded mb-1"></div>
                    <div className="h-1.5 w-32 bg-brand-border-subtle rounded"></div>
                  </div>
              </div>
                <CheckCircleIcon className="w-6 h-6 text-brand-primary flex-shrink-0" />
            </div>
            </motion.div>

            {/* Feature 2: Tap Transaction */}
                <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="group relative rounded-3xl p-8 lg:p-10 border-2 border-brand-border/80 hover:border-brand-primary transition-all duration-300 shadow-soft-1 hover:shadow-green bg-gradient-to-br from-brand-card-bg via-cream-panel/50 to-brand-icon-bg-light"
            >
              <div className="flex flex-col sm:flex-row sm:items-start gap-6 mb-6 text-center sm:text-left">
                <div className="flex-shrink-0 flex justify-center sm:justify-start">
                  <div className="w-16 h-16 rounded-2xl bg-brand-primary flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <svg className="w-9 h-9 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122" />
                    </svg>
                  </div>
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2 justify-center sm:justify-start">
                    <span className="text-xs font-bold text-brand-primary uppercase tracking-wider">Step 2</span>
                    <div className="hidden sm:block h-px flex-1 bg-brand-border-subtle"></div>
                  </div>
                  <h3 className="text-2xl lg:text-3xl font-bold text-brand-primary mb-3 font-nunito">
                    Tap Any Transaction
                  </h3>
                  <p className="text-lg text-brand-text-secondary leading-relaxed mb-4">
                    See a charge that needs splitting? Just tap it. We autofill the data, making your split easy.
                  </p>
                  <div className="flex flex-wrap items-center justify-center sm:justify-start gap-2 text-sm font-semibold text-brand-primary">
                    <CheckCircleIcon className="w-5 h-5" />
                    <span>Instant automation • Zero effort</span>
                  </div>
                        </div>
                        </div>
              <div className="bg-white/70 backdrop-blur-sm rounded-2xl px-3 py-2.5 border border-brand-border flex items-center gap-4">
                <div className="flex items-center gap-3 flex-1 min-w-0">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-brand-primary/12 to-brand-primary/4 flex items-center justify-center ring-1 ring-brand-primary/10">
                      <span className="text-lg">🍽️</span>
                      </div>
                    <div>
                      <div className="h-2 w-24 bg-brand-primary rounded mb-1"></div>
                      <div className="h-1.5 w-16 bg-gray-300 rounded"></div>
                    </div>
                        </div>
                <div className="text-right whitespace-nowrap">
                    <div className="text-sm font-bold text-brand-primary">$84.50</div>
                  <div className="text-xs text-brand-primary font-semibold whitespace-nowrap">Tap to split →</div>
                      </div>
                              </div>
            </motion.div>

            {/* Feature 3: Upload Receipt */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="group relative rounded-3xl p-8 lg:p-10 border-2 border-brand-border/80 hover:border-brand-primary transition-all duration-300 shadow-soft-1 hover:shadow-green bg-gradient-to-br from-brand-card-bg via-cream-panel/50 to-brand-icon-bg-light"
            >
              <div className="flex flex-col sm:flex-row sm:items-start gap-6 mb-6 text-center sm:text-left">
                <div className="flex-shrink-0 flex justify-center sm:justify-start">
                  <div className="w-16 h-16 rounded-2xl bg-brand-primary flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <svg className="w-9 h-9 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                              </div>
                            </div>
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2 justify-center sm:justify-start">
                    <span className="text-xs font-bold text-brand-primary uppercase tracking-wider">Step 3</span>
                    <div className="h-px hidden sm:block flex-1 bg-brand-border-subtle"></div>
                          </div>
                  <h3 className="text-2xl lg:text-3xl font-bold text-brand-primary mb-3 font-nunito">
                    Snap a Receipt
                  </h3>
                  <p className="text-lg text-brand-text-secondary leading-relaxed mb-4">
                    Paid cash? No problem. Take a photo of any receipt and Handl instantly reads all the items 
                    and amounts using OCR technology.
                  </p>
                  <div className="flex flex-wrap items-center justify-center sm:justify-start gap-2 text-sm font-semibold text-brand-primary">
                    <CheckCircleIcon className="w-5 h-5" />
                    <span>OCR-powered • Works with any receipt</span>
                      </div>
                    </div>
                        </div>
              <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-4 border border-brand-border min-h-[180px] flex">
                <div className="bg-white rounded-xl px-4 py-3 space-y-3 w-full h-full flex flex-col justify-between">
                  <div className="flex flex-col sm:flex-row sm:items-center gap-2 pb-2 border-b border-gray-100 text-center sm:text-left">
                    <svg className="w-5 h-5 text-brand-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                    <span className="text-xs font-semibold text-brand-primary">Receipt</span>
                  </div>
                  <div className="space-y-2">
                    <div className="flex justify-between text-xs">
                      <span className="text-gray-600">Burger x2</span>
                      <span className="font-semibold text-brand-primary">$24.00</span>
                    </div>
                    <div className="flex justify-between text-xs">
                      <span className="text-gray-600">Fries x3</span>
                      <span className="font-semibold text-brand-primary">$12.00</span>
                    </div>
                    <div className="flex justify-between text-xs">
                      <span className="text-gray-600">Drinks x2</span>
                      <span className="font-semibold text-brand-primary">$8.00</span>
                    </div>
                      <div className="flex justify-between text-xs">
                        <span className="text-gray-600">Dessert x1</span>
                        <span className="font-semibold text-brand-primary">$6.00</span>
                      </div>
                    <div className="flex justify-between text-xs pt-2 border-t border-gray-100">
                      <span className="font-bold text-brand-primary">Total</span>
                        <span className="font-bold text-brand-primary">$50.00</span>
                    </div>
                        </div>
                      </div>
                              </div>
            </motion.div>

            {/* Feature 4: AI Prompt */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="group relative rounded-3xl p-8 lg:p-10 border-2 border-brand-border/80 hover:border-brand-primary transition-all duration-300 shadow-soft-1 hover:shadow-green bg-gradient-to-br from-brand-card-bg via-cream-panel/50 to-brand-icon-bg-light"
            >
              <div className="flex flex-col sm:flex-row sm:items-start gap-6 mb-6 text-center sm:text-left">
                <div className="flex-shrink-0 flex justify-center sm:justify-start">
                  <div className="w-16 h-16 rounded-2xl bg-brand-primary flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <SparklesIcon className="w-9 h-9 text-white" />
                              </div>
                            </div>
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2 justify-center sm:justify-start">
                    <span className="text-xs font-bold text-brand-primary uppercase tracking-wider">Step 4</span>
                    <div className="h-px hidden sm:block flex-1 bg-brand-border-subtle"></div>
                          </div>
                  <h3 className="text-2xl lg:text-3xl font-bold text-brand-primary mb-3 font-nunito">
                    Write a Prompt
                  </h3>
                  <p className="text-lg text-brand-text-secondary leading-relaxed mb-4">
                    Want a custom split? Just type what you want in plain English and Handl automatically 
                    calculates everyone&apos;s share instantly.
                  </p>
                  <div className="flex flex-wrap items-center justify-center sm:justify-start gap-2 text-sm font-semibold text-brand-primary">
                    <SparklesIcon className="w-5 h-5" />
                    <span>Natural language AI • Unlimited flexibility</span>
                          </div>
                        </div>
                      </div>
              <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-4 border border-brand-border min-h-[180px] flex">
                <div className="space-y-3 w-full h-full flex flex-col justify-between">
                  {/* Prompt Input */}
                  <div className="bg-white rounded-xl p-3 border border-gray-200">
                    <div className="flex flex-col sm:flex-row sm:items-center gap-2 mb-2 text-center sm:text-left">
                      <svg className="w-4 h-4 text-brand-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                      </svg>
                      <span className="text-xs font-semibold text-brand-text-tertiary">Your prompt:</span>
                    </div>
                    <div className="text-sm text-brand-text-secondary italic pl-6">
                      &ldquo;Split evenly but Sarah pays 30%&rdquo;
                    </div>
                  </div>
                  
                  {/* Auto-calculated Results */}
                  <div className="bg-brand-icon-bg-light rounded-xl p-3 border border-brand-border">
                    <div className="flex flex-col sm:flex-row sm:items-center gap-2 mb-2 text-center sm:text-left">
                      <CheckCircleIcon className="w-4 h-4 text-brand-primary" />
                      <span className="text-xs font-bold text-brand-primary">Auto-calculated</span>
                        </div>
                    <div className="space-y-1 pl-6">
                      <div className="flex justify-between text-xs">
                        <span className="text-brand-text-secondary">Sarah</span>
                        <span className="font-semibold text-brand-primary">$13.20</span>
                        </div>
                      <div className="flex justify-between text-xs">
                        <span className="text-brand-text-secondary">Mike</span>
                        <span className="font-semibold text-brand-primary">$15.40</span>
                      </div>
                      <div className="flex justify-between text-xs">
                        <span className="text-brand-text-secondary">You</span>
                        <span className="font-semibold text-brand-primary">$15.40</span>
                      </div>
                    </div>
                  </div>
            </div>
          </div>
            </motion.div>
                              </div>

        </div>
      </section>

      {/* Beta CTA Section */}
      <section id="beta-signup" className="py-18 md:py-24 bg-gradient-to-br from-brand-primary via-pine to-brand-success-soft relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
            backgroundSize: '40px 40px'
          }}></div>
        </div>
        
        <div className="container-custom relative">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/20 backdrop-blur-sm border border-white/30 mb-6">
                <SparklesIcon className="w-5 h-5 text-white" />
                <span className="text-sm font-semibold text-white">Now Available on TestFlight</span>
          </div>

              <h2 className="heading-lg text-white mb-6">
                Join the Handl Beta
              </h2>
              <p className="text-xl text-white/90 max-w-2xl mx-auto mb-12">
                Be among the first to experience the future of expense splitting. 
                Download TestFlight and join our beta program today.
              </p>

              <button
                onClick={handleJoinBeta}
                className="inline-flex items-center justify-center px-8 py-4 rounded-2xl bg-white text-brand-primary font-bold text-lg hover:bg-gray-50 transition-all duration-200 transform hover:scale-[1.02] shadow-lg hover:shadow-xl group"
              >
                Join the Beta on TestFlight
                <ArrowRightIcon className="w-6 h-6 ml-2 group-hover:translate-x-1 transition-transform" />
              </button>

              <p className="text-white/70 text-sm mt-6">
                Requires iOS 16 or later • Available for iPhone and iPad
              </p>
              </motion.div>
          </div>
        </div>
      </section>

      {/* Testimonial / Social Proof Section */}
      {/* <section className="py-20 md:py-28 bg-white relative">
        <div className="container-custom">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h2 className="heading-lg text-brand-primary mb-6">
              Early Users Love Handl
            </h2>
            <p className="text-xl text-brand-text-secondary mb-12">
              See what beta testers are saying about their experience
            </p>
            
            <div className="grid md:grid-cols-3 gap-6">
              {[
                {
                  quote: "Finally, an app that makes splitting bills actually enjoyable. No more awkward Venmo requests!",
                  author: "Sarah M.",
                  role: "Beta Tester"
                },
                {
                  quote: "The receipt scanning feature is a game-changer. Saves me so much time after group dinners.",
                  author: "Mike T.",
                  role: "Early Adopter"
                },
                {
                  quote: "Love how it just works. Link card, tap transaction, done. That's exactly what I needed.",
                  author: "Alex K.",
                  role: "Beta User"
                }
              ].map((testimonial, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  className="bg-cream-panel rounded-2xl p-6 border border-brand-border"
                >
                  <div className="flex gap-1 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} className="w-5 h-5 text-brand-accent" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <p className="text-brand-text-secondary italic mb-4">"{testimonial.quote}"</p>
                  <div className="text-sm">
                    <div className="font-bold text-brand-primary">{testimonial.author}</div>
                    <div className="text-brand-text-tertiary">{testimonial.role}</div>
                  </div>
                </motion.div>
              ))}
            </div>
            
            <div className="mt-12">
              <button
                onClick={handleJoinBeta}
                className="btn-primary"
              >
                Join the Beta Today
                <ArrowRightIcon className="w-5 h-5 ml-2" />
              </button>
            </div>
            </motion.div>
        </div>
      </section> */}

      {/* Footer */}
      <footer className="bg-brand-primary border-t border-pine-alt py-12">
        <div className="container-custom">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-2">
              <Image
                src="/logo_icon.png" 
                alt="Handl Logo" 
                width={32} 
                height={32}
                className="w-7 h-7 -translate-y-[1px]"
              />
              <span className="text-[1.25rem] font-bold text-white font-nunito leading-tight">Handl</span>
            </div>
            
            <div className="flex items-center gap-8">
              <a href="/privacy" className="text-white/80 hover:text-white transition-colors">
                Privacy
              </a>
              <a href="/terms" className="text-white/80 hover:text-white transition-colors">
                Terms
              </a>
              <button className="text-white/80 hover:text-white transition-colors">
                Contact
              </button>
            </div>
          </div>
          
          <div className="mt-8 pt-8 border-t border-white/10 text-center">
            <p className="text-white/60 text-sm">
              © {new Date().getFullYear()} Handl Automation Inc. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </main>
  )
}

// Floating Card Component
interface FloatingCardProps {
  children: React.ReactNode
  className?: string
  delay?: number
}

const FloatingCard: React.FC<FloatingCardProps> = ({ children, className = '', delay = 0 }) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay, duration: 0.5 }}
      className={className}
    >
      <motion.div
        animate={{ y: [0, -10, 0] }}
        transition={{ 
          duration: 3, 
          repeat: Infinity,
          ease: "easeInOut"
        }}
      >
        {children}
      </motion.div>
    </motion.div>
  )
}
