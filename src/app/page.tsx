'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { 
  BellIcon, 
  UserGroupIcon, 
  CreditCardIcon, 
  SparklesIcon,
  CheckCircleIcon,
  ArrowRightIcon
} from '@heroicons/react/24/outline'

export default function Home() {
  const [formSubmitted, setFormSubmitted] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)

  const scrollToSection = (id: string) => {
    const section = document.getElementById(id)
    if (section) {
      // Responsive offset: smaller on mobile (to show form better), larger on desktop
      const isMobile = window.innerWidth < 768
      const offset = isMobile ? 90 : 80 // 0px on mobile (form at top), 80px on desktop
      
      const elementPosition = section.getBoundingClientRect().top
      const offsetPosition = elementPosition + window.pageYOffset - offset

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      })
    }
  }

  const handleFormSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)

    const form = e.currentTarget
    const formData = new FormData(form)

    try {
      // Convert FormData to URLSearchParams for Netlify form submission
      const params = new URLSearchParams()
      formData.forEach((value, key) => {
        params.append(key, value.toString())
      })

      const response = await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: params.toString(),
      })

      if (response.ok) {
        setFormSubmitted(true)
        form.reset()
      } else {
        console.error('Form submission failed')
        alert('Something went wrong. Please try again.')
      }
    } catch (error) {
      console.error('Form submission error:', error)
      alert('Something went wrong. Please try again.')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <main className="flex min-h-screen flex-col overflow-x-hidden">
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
                onClick={() => scrollToSection('features')}
                className="text-brand-text-secondary hover:text-brand-primary font-medium transition-colors"
              >
                Features
              </button>
              <button 
                onClick={() => scrollToSection('features')}
                className="text-brand-text-secondary hover:text-brand-primary font-medium transition-colors"
              >
                How It Works
              </button>
              <button 
                onClick={() => {
                  // On mobile, scroll to form section; on desktop, scroll to card top
                  const isMobile = window.innerWidth < 768
                  scrollToSection(isMobile ? 'ready-to-get-started' : 'beta-signup-form')
                }}
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
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-icon-bg-light border border-brand-border-subtle mb-6">
            <SparklesIcon className="w-5 h-5 text-brand-primary" />
            <span className="text-sm font-semibold text-brand-primary">Beta Now Available • Join Early Access</span>
              </div>
              
              <h1 className="heading-xl mb-6 text-brand-primary">
                <span className="inline-block whitespace-nowrap">Automate Expenses</span>{' '}
                with <span className="text-gradient inline-block whitespace-nowrap">AI</span>
              </h1>
              
              <p className="text-xl md:text-2xl text-brand-text-secondary mb-8 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
                We&apos;re building the first hands-free OS for expense management, automating tracking, 
                splitting, and settlement for everyday users.
              </p>
              
              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
                <button 
                  onClick={() => {
                    // On mobile, scroll to form section; on desktop, scroll to card top
                    const isMobile = window.innerWidth < 768
                    scrollToSection(isMobile ? 'ready-to-get-started' : 'beta-signup-form')
                  }}
                  className="btn-primary w-full sm:w-auto group"
                >
                  Join the Beta
                  <ArrowRightIcon className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </button>
                <button 
                  onClick={() => scrollToSection('features')}
                  className="btn-secondary w-full sm:w-auto"
                >
                  See How It Works
                </button>
              </div>

              {/* Stats */}
              <div className="mt-12 grid grid-cols-3 gap-6 max-w-md mx-auto lg:mx-0">
                <div className="text-center lg:text-left">
                  <div className="text-3xl font-bold text-brand-primary">Beta</div>
                  <div className="text-sm text-brand-text-secondary mt-1">Live Now</div>
                </div>
                <div className="text-center lg:text-left">
                  <div className="text-3xl font-bold text-brand-primary">2s</div>
                  <div className="text-sm text-brand-text-secondary mt-1">Avg Split Time</div>
                </div>
                <div className="text-center lg:text-left">
                  <div className="text-3xl font-bold text-brand-primary">4</div>
                  <div className="text-sm text-brand-text-secondary mt-1">Simple Steps</div>
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

      {/* Beta Signup Section */}
      <section id="beta-signup" className="py-18 md:py-24 bg-gradient-to-br from-brand-primary via-pine to-brand-success-soft relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
            backgroundSize: '40px 40px'
          }}></div>
        </div>
        
        <div className="container-custom relative">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-center mb-12"
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/20 backdrop-blur-sm border border-white/30 mb-6">
                <SparklesIcon className="w-5 h-5 text-white" />
                <span className="text-sm font-semibold text-white">Limited Beta Access</span>
              </div>
              
              <h2 className="heading-lg text-white mb-6">
                Join the Handl Beta
              </h2>
              <p className="text-xl text-white/90 max-w-2xl mx-auto mb-12">
                Be among the first to experience the future of expense splitting. 
                Get early access, help shape the product, and never worry about splitting bills again.
              </p>
            </motion.div>

            <motion.div
              id="beta-signup-form"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-white rounded-3xl p-6 sm:p-8 md:p-12 shadow-2xl scroll-mt-20"
            >
              <div className="grid md:grid-cols-2 gap-6 sm:gap-8 mb-6 sm:mb-8">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-primary-100 flex items-center justify-center">
                    <CheckCircleIcon className="w-6 h-6 text-primary-600" />
                  </div>
                  <div>
                    <h3 className="font-bold text-brand-primary mb-2 font-nunito">Early Access Features</h3>
                    <p className="text-sm text-brand-text-secondary">Get all features before public launch</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-accent-teal/10 flex items-center justify-center">
                    <UserGroupIcon className="w-6 h-6 text-accent-teal" />
                  </div>
                  <div>
                    <h3 className="font-bold text-brand-primary mb-2 font-nunito">Shape the Product</h3>
                    <p className="text-sm text-brand-text-secondary">Your feedback directly impacts development</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-brand-accent/10 flex items-center justify-center">
                    <SparklesIcon className="w-6 h-6 text-brand-accent" />
                  </div>
                  <div>
                    <h3 className="font-bold text-brand-primary mb-2 font-nunito">Priority Support</h3>
                    <p className="text-sm text-brand-text-secondary">Direct line to our team for help</p>
                  </div>
          </div>

                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-purple-100 flex items-center justify-center">
                    <svg className="w-6 h-6 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-bold text-brand-primary mb-2 font-nunito">Exclusive Perks</h3>
                    <p className="text-sm text-brand-text-secondary">Special benefits for early adopters</p>
                  </div>
                </div>
              </div>

              <div id="ready-to-get-started" className="border-t border-gray-200 pt-8 mt-8 scroll-mt-20 sm:scroll-mt-24">
                <div className="text-center">
                  <h3 className="text-xl sm:text-2xl font-bold text-brand-primary mb-3 sm:mb-4 font-nunito">Ready to Get Started?</h3>
                    <p className="text-sm sm:text-base text-brand-text-secondary mb-4 sm:mb-6 px-4">
                      Sign up now and we&apos;ll send you an invite to join the beta
                  </p>
                  
                  <div className="max-w-md mx-auto px-4 sm:px-0">
                    {formSubmitted ? (
                      <div className="bg-brand-icon-bg-light rounded-2xl p-6 sm:p-8 border border-brand-border">
                        <CheckCircleIcon className="w-12 h-12 sm:w-16 sm:h-16 text-brand-primary mx-auto mb-4" />
                        <h4 className="text-xl sm:text-2xl font-bold text-brand-primary mb-2 font-nunito">Thanks for joining the Handl beta!</h4>
                        <p className="text-sm sm:text-base text-brand-text-secondary">
                          We&apos;ll be in touch soon with your invite.
                        </p>
                      </div>
                    ) : (
                      <form
                        name="beta-signup"
                        method="POST"
                        data-netlify="true"
                        onSubmit={handleFormSubmit}
                        className="space-y-3 sm:space-y-4"
                      >
                        <input type="hidden" name="form-name" value="beta-signup" />
                        <div>
                          <label htmlFor="name" className="sr-only">
                            Name
                          </label>
                          <input
                            type="text"
                            id="name"
                            name="name"
                            required
                            placeholder="Your name"
                            className="w-full px-4 sm:px-6 py-3 sm:py-4 rounded-2xl border-2 border-brand-border text-brand-text-primary placeholder-brand-text-tertiary focus:outline-none focus:border-brand-primary focus:ring-2 focus:ring-brand-primary/20 transition-all duration-200 font-nunito text-base"
                          />
                        </div>
                        <div>
                          <label htmlFor="email" className="sr-only">
                            Email
                          </label>
                          <input
                            type="email"
                            id="email"
                            name="email"
                            required
                            placeholder="Your email"
                            className="w-full px-4 sm:px-6 py-3 sm:py-4 rounded-2xl border-2 border-brand-border text-brand-text-primary placeholder-brand-text-tertiary focus:outline-none focus:border-brand-primary focus:ring-2 focus:ring-brand-primary/20 transition-all duration-200 font-nunito text-base"
                          />
                        </div>
                        <button
                          type="submit"
                          disabled={isSubmitting}
                          className="inline-flex items-center justify-center w-full px-6 sm:px-8 py-3 sm:py-4 rounded-2xl bg-brand-primary text-white font-bold text-base sm:text-lg hover:bg-pine-alt transition-all duration-200 transform hover:scale-[1.02] shadow-lg hover:shadow-xl group disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none active:scale-[0.98]"
                        >
                          {isSubmitting ? (
                            'Submitting...'
                          ) : (
                            <>
                      Join the Beta Waitlist
                              <ArrowRightIcon className="w-5 h-5 sm:w-6 sm:h-6 ml-2 group-hover:translate-x-1 transition-transform" />
                            </>
                          )}
                        </button>
                        <p className="text-xs text-brand-text-tertiary mt-3 sm:mt-4 px-2">
                      By signing up, you agree to our{" "}
                      <a href="/terms" className="underline hover:text-brand-primary">
                        Terms of Service
                      </a>{" "}
                      and{" "}
                      <a href="/privacy" className="underline hover:text-brand-primary">
                        Privacy Policy
                      </a>
                    </p>
                      </form>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Stats */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="mt-12 grid grid-cols-3 gap-6 max-w-2xl mx-auto"
            >
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-white mb-2">100+</div>
                <div className="text-sm text-white/80">Beta Testers</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-white mb-2">iOS</div>
                <div className="text-sm text-white/80">TestFlight Ready</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-white mb-2">⭐️</div>
                <div className="text-sm text-white/80">Early Feedback</div>
                </div>
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
                onClick={() => {
                  // On mobile, scroll to form section; on desktop, scroll to card top
                  const isMobile = window.innerWidth < 768
                  scrollToSection(isMobile ? 'ready-to-get-started' : 'beta-signup-form')
                }}
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
              © {new Date().getFullYear()} Handl. All rights reserved.
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
