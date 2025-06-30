'use client'

import { ArrowRightIcon, CreditCardIcon, BellIcon, CalculatorIcon, UserGroupIcon, DocumentTextIcon, ChartBarIcon, UserIcon, ChatBubbleLeftIcon } from '@heroicons/react/24/outline'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import { useState } from 'react'

export default function Home() {
  const [activeStep, setActiveStep] = useState(0)

  const scrollToHowItWorks = () => {
    const section = document.getElementById('how-it-works')
    section?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <main className="flex min-h-screen flex-col">
      {/* Navigation */}
      <nav className="fixed w-full bg-white/80 backdrop-blur-lg z-50 border-b border-gray-100">
        <div className="container-custom py-3 sm:py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-1.5 sm:gap-2.5">
              <Image
                src="/logo_icon.png" 
                alt="Splitree Logo" 
                width={32} 
                height={32}
                className="w-8 h-8 sm:w-10 sm:h-10"
              />
              <span className="text-lg sm:text-[1.75rem] font-semibold tracking-wider text-primary-black">Splitree</span>
            </div>
            <div className="hidden sm:flex items-center gap-6">
              <button 
                onClick={scrollToHowItWorks}
                className="text-gray-600 hover:text-gray-900 font-medium transition-colors"
              >
                How it Works
              </button>
              <button 
                onClick={() => {
                  const section = document.getElementById('features')
                  section?.scrollIntoView({ behavior: 'smooth', block: 'start' })
                }}
                className="text-gray-600 hover:text-gray-900 font-medium transition-colors"
              >
                Features
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-24 sm:pt-28 md:pt-32 pb-8 sm:pb-12 md:pb-16 relative overflow-hidden">
        <div className="absolute inset-0 noise-bg opacity-75"></div>
        {/* Decorative elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-1/2 -right-1/2 w-[600px] sm:w-[800px] md:w-[1000px] h-[600px] sm:h-[800px] md:h-[1000px] rounded-full bg-gradient-to-br from-green-500/10 to-green-600/5"></div>
          <div className="absolute -bottom-1/2 -left-1/2 w-[600px] sm:w-[800px] md:w-[1000px] h-[600px] sm:h-[800px] md:h-[1000px] rounded-full bg-gradient-to-tr from-green-500/10 to-green-600/5"></div>
        </div>
        <div className="container-custom relative">
          <div className="grid lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-12 items-center">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-center lg:text-left"
            >
              <div className="inline-flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-green-50 text-green-600 mb-4 sm:mb-6">
                <Image
                  src="/logo_icon.png" 
                  alt="Splitree Icon" 
                  width={16}
                  height={16}
                  className="w-4 h-4 sm:w-5 sm:h-5"
                />
                <span className="text-xs sm:text-sm font-medium">Coming Soon</span>
              </div>
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6">
                We automate the <span className="text-gradient">awkward</span> — <br className="hidden sm:block"/>
                so you can split costs, not time.
              </h1>
              <p className="text-base sm:text-lg md:text-xl text-gray-600 mb-6 sm:mb-8 max-w-2xl mx-auto lg:mx-0">
                The intelligent, real-time travel and group expense app designed to make 
                splitting costs seamless, automatic, and emotionally effortless.
              </p>
              <div className="flex items-center justify-center lg:justify-start">
                <button onClick={scrollToHowItWorks} className="btn-secondary text-sm sm:text-base">
                  Learn More
                </button>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="relative"
            >
              <div className="relative w-full aspect-[4/3] rounded-xl sm:rounded-2xl overflow-hidden bg-gradient-to-tr from-green-500/5 to-green-600/10 p-4 sm:p-6 md:p-8">
                <div className="absolute inset-0 bg-white/40 backdrop-blur-xl"></div>
                <div className="relative h-full rounded-lg sm:rounded-xl overflow-hidden shadow-xl sm:shadow-2xl border border-gray-100">
                  <div className="absolute inset-0 bg-white flex items-center justify-center">
                    <div className="space-y-6 sm:space-y-8 w-full p-4 sm:p-6">
                      {/* App Header */}
                      <div className="flex items-center justify-between border-b border-gray-100 pb-3 sm:pb-4">
                        <div className="flex items-center gap-2 sm:gap-3">
                          <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-green-100 flex items-center justify-center">
                            <UserIcon className="w-4 h-4 sm:w-6 sm:h-6 text-green-600" />
                          </div>
                          <div>
                            <div className="h-2 sm:h-3 w-16 sm:w-24 bg-gray-900 rounded"></div>
                            <div className="h-1.5 sm:h-2 w-12 sm:w-16 bg-gray-400 rounded mt-1"></div>
                          </div>
                        </div>
                        <div className="flex items-center gap-1.5 sm:gap-2">
                          <div className="w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-gray-100 flex items-center justify-center">
                            <BellIcon className="w-3 h-3 sm:w-4 sm:h-4 text-gray-600" />
                          </div>
                          <div className="w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-green-100 flex items-center justify-center">
                            <ChatBubbleLeftIcon className="w-3 h-3 sm:w-4 sm:h-4 text-green-600" />
                          </div>
                        </div>
                      </div>

                      {/* Transaction List */}
                      <div className="space-y-3 sm:space-y-4">
                        <div className="flex items-center justify-between p-2 sm:p-3 bg-green-50 rounded-md sm:rounded-lg">
                          <div className="flex items-center gap-2 sm:gap-3">
                            <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-green-100 flex items-center justify-center">
                              <CreditCardIcon className="w-4 h-4 sm:w-5 sm:h-5 text-green-600" />
                            </div>
                            <div>
                              <div className="h-2 sm:h-3 w-24 sm:w-32 bg-green-600 rounded"></div>
                              <div className="h-1.5 sm:h-2 w-16 sm:w-24 bg-green-500/50 rounded mt-1"></div>
                            </div>
                          </div>
                          <div className="text-sm sm:text-base text-green-600 font-medium">$24.50</div>
                        </div>
                        <div className="flex items-center justify-between p-2 sm:p-3 bg-gray-50 rounded-md sm:rounded-lg">
                          <div className="flex items-center gap-2 sm:gap-3">
                            <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-gray-100 flex items-center justify-center">
                              <CreditCardIcon className="w-4 h-4 sm:w-5 sm:h-5 text-gray-600" />
                            </div>
                            <div>
                              <div className="h-2 sm:h-3 w-20 sm:w-28 bg-gray-400 rounded"></div>
                              <div className="h-1.5 sm:h-2 w-14 sm:w-20 bg-gray-300 rounded mt-1"></div>
                            </div>
                          </div>
                          <div className="text-sm sm:text-base text-gray-600 font-medium">$18.75</div>
                        </div>
                      </div>

                      {/* Quick Actions */}
                      <div className="grid grid-cols-2 gap-2 sm:gap-3">
                        <button className="flex items-center justify-center gap-1.5 sm:gap-2 p-2 sm:p-3 rounded-md sm:rounded-lg bg-green-500 text-white text-sm sm:text-base font-medium">
                          <CreditCardIcon className="w-4 h-4 sm:w-5 sm:h-5" />
                          <span>Split Now</span>
                        </button>
                        <button className="flex items-center justify-center gap-1.5 sm:gap-2 p-2 sm:p-3 rounded-md sm:rounded-lg bg-gray-100 text-gray-600 text-sm sm:text-base font-medium">
                          <UserGroupIcon className="w-4 h-4 sm:w-5 sm:h-5" />
                          <span>New Group</span>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* Floating elements */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.5 }}
                className="absolute -bottom-4 sm:-bottom-6 -right-4 sm:-right-6 bg-white rounded-lg sm:rounded-xl p-3 sm:p-4 shadow-md sm:shadow-lg border border-gray-100"
              >
                <div className="flex items-center gap-2 sm:gap-3">
                  <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-green-50 flex items-center justify-center">
                    <CreditCardIcon className="w-4 h-4 sm:w-5 sm:h-5 text-green-500" />
                  </div>
                  <div>
                    <div className="text-xs sm:text-sm font-medium">Split Complete</div>
                    <div className="text-[10px] sm:text-xs text-gray-500">Automatically processed</div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="py-12 sm:py-16 md:py-20 lg:py-24 relative overflow-hidden bg-gradient-to-b from-white to-gray-50">
        <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)]"></div>
        <div className="container-custom relative">
          <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-12 lg:mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4 md:mb-6">How Splitree Works</h2>
              <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
                Experience seamless group expense management with our intelligent automation
              </p>
            </motion.div>
          </div>

          <div className="flex flex-col gap-8 sm:gap-10 lg:gap-12 2xl:grid 2xl:grid-cols-2 2xl:gap-16">
            {/* Steps Grid */}
            <div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 2xl:grid-cols-1 gap-4 sm:gap-6">
                {[
                  { 
                    number: '1',
                    title: 'Create Your Group',
                    description: 'Start by creating a group and inviting your friends'
                  },
                  {
                    number: '2',
                    title: 'Add Expenses',
                    description: 'Snap receipts or connect your card for automatic tracking'
                  },
                  {
                    number: '3',
                    title: 'Smart Split',
                    description: 'Let AI handle fair splits based on who benefited'
                  },
                  {
                    number: '4',
                    title: 'Settle Up',
                    description: 'Review optimized transfers and settle with one tap'
                  }
                ].map((step, index) => (
                  <StepSelector
                    key={index}
                    isActive={activeStep === index}
                    onClick={() => setActiveStep(index)}
                    {...step}
                  />
                ))}
              </div>
            </div>

            {/* Step Content Preview */}
            <div className="2xl:sticky 2xl:top-24">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeStep}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3 }}
                  className="bg-white rounded-xl sm:rounded-2xl border border-gray-200 shadow-lg sm:shadow-xl overflow-hidden w-full"
                >
                  {Number(activeStep) === 0 && (
                    <div className="p-3 sm:p-4 md:p-6 space-y-3 sm:space-y-4">
                      <div className="flex items-center gap-3 sm:gap-4 border-b border-gray-100 pb-3 sm:pb-4">
                        <div className="w-8 sm:w-10 h-8 sm:h-10 rounded-full bg-green-50 flex items-center justify-center">
                          <UserGroupIcon className="w-4 sm:w-5 h-4 sm:h-5 text-green-600" />
                        </div>
                        <div>
                          <h4 className="font-semibold text-sm sm:text-base">Summer Trip 2025</h4>
                          <p className="text-xs sm:text-sm text-gray-500">4 members</p>
                        </div>
                      </div>
                      <div className="grid gap-2 sm:gap-3">
                        {[
                          { name: 'Alex Kim', status: 'Admin', avatar: '👨🏻‍💻' },
                          { name: 'Sarah Chen', status: 'Joined', avatar: '👩🏻‍💼' },
                          { name: 'Mike Peters', status: 'Pending', avatar: '👨🏼‍💼' },
                        ].map((member, index) => (
                          <div key={index} className="flex items-center justify-between p-2 sm:p-3 rounded-lg bg-gray-50 hover:bg-gray-100 transition-colors duration-200">
                            <div className="flex items-center gap-2 sm:gap-3">
                              <div className="w-6 sm:w-8 h-6 sm:h-8 rounded-full bg-white flex items-center justify-center text-sm sm:text-base">
                                {member.avatar}
                              </div>
                              <span className="font-medium text-sm sm:text-base">{member.name}</span>
                            </div>
                            <span className={`text-xs sm:text-sm px-2 sm:px-3 py-0.5 sm:py-1 rounded-full ${
                              member.status === 'Pending' ? 'bg-gray-200 text-gray-600' : 'bg-green-100 text-green-600'
                            }`}>
                              {member.status}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {Number(activeStep) === 1 && (
                    <div className="p-3 sm:p-4 md:p-6 space-y-3 sm:space-y-4">
                      <div className="flex items-center gap-3 sm:gap-4 border-b border-gray-100 pb-3 sm:pb-4">
                        <div className="w-8 sm:w-10 h-8 sm:h-10 rounded-full bg-green-50 flex items-center justify-center">
                          <DocumentTextIcon className="w-4 sm:w-5 h-4 sm:h-5 text-green-600" />
                        </div>
                        <div>
                          <h4 className="font-semibold text-sm sm:text-base">Recent Expenses</h4>
                          <p className="text-xs sm:text-sm text-gray-500">Last 24 hours</p>
                        </div>
                      </div>
                      <div className="grid gap-2 sm:gap-3">
                        {[
                          { title: 'Dinner at Ocean View', amount: '$120.00', split: '4 people', icon: '🍽️' },
                          { title: 'Uber to Beach', amount: '$45.00', split: '3 people', icon: '🚗' },
                          { title: 'Groceries', amount: '$89.50', split: '4 people', icon: '🛒' },
                        ].map((expense, index) => (
                          <div key={index} className="flex items-center justify-between p-2 sm:p-3 rounded-lg bg-gray-50 hover:bg-gray-100 transition-colors duration-200">
                            <div className="flex items-center gap-2 sm:gap-3">
                              <div className="w-6 sm:w-8 h-6 sm:h-8 rounded-full bg-white flex items-center justify-center text-sm sm:text-base">
                                {expense.icon}
                              </div>
                              <div>
                                <p className="font-medium text-sm sm:text-base">{expense.title}</p>
                                <p className="text-xs sm:text-sm text-gray-500">Split between {expense.split}</p>
                              </div>
                            </div>
                            <span className="font-medium text-sm sm:text-base">{expense.amount}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {Number(activeStep) === 2 && (
                    <div className="p-3 sm:p-4 md:p-6 space-y-3 sm:space-y-4">
                      <div className="flex items-center gap-3 sm:gap-4 border-b border-gray-100 pb-3 sm:pb-4">
                        <div className="w-8 sm:w-10 h-8 sm:h-10 rounded-full bg-green-50 flex items-center justify-center">
                          <CalculatorIcon className="w-4 sm:w-5 h-4 sm:h-5 text-green-600" />
                        </div>
                        <div>
                          <h4 className="font-semibold text-sm sm:text-base">Smart Split Suggestions</h4>
                          <p className="text-xs sm:text-sm text-gray-500">AI-powered split recommendations</p>
                        </div>
                      </div>
                      <div className="grid gap-2 sm:gap-3">
                        <div className="p-3 sm:p-4 rounded-lg bg-gray-50">
                          <div className="flex items-center justify-between mb-3 sm:mb-4">
                            <div className="flex items-center gap-2 sm:gap-3">
                              <div className="w-6 sm:w-8 h-6 sm:h-8 rounded-full bg-white flex items-center justify-center text-sm sm:text-base">
                                🍽️
                              </div>
                              <div>
                                <p className="font-medium text-sm sm:text-base">Dinner at Ocean View</p>
                                <p className="text-xs sm:text-sm text-gray-500">Total: $120.00</p>
                              </div>
                            </div>
                            <button className="text-xs sm:text-sm px-2 sm:px-3 py-0.5 sm:py-1 rounded-full bg-green-100 text-green-600">
                              Accept All
                            </button>
                          </div>
                          <div className="space-y-2 sm:space-y-3">
                            {[
                              { name: 'Alex Kim', amount: '$35.00', items: 'Steak + Drinks' },
                              { name: 'Sarah Chen', amount: '$28.50', items: 'Pasta + Salad' },
                              { name: 'Mike Peters', amount: '$31.50', items: 'Fish + Wine' },
                              { name: 'You', amount: '$25.00', items: 'Pizza + Soda' },
                            ].map((split, index) => (
                              <div key={index} className="flex items-center justify-between p-2 rounded-md bg-white">
                                <div className="flex items-center gap-1.5 sm:gap-2">
                                  <span className="font-medium text-sm sm:text-base">{split.name}</span>
                                  <span className="text-xs sm:text-sm text-gray-500">({split.items})</span>
                                </div>
                                <span className="font-medium text-sm sm:text-base">{split.amount}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  )}

                  {Number(activeStep) === 3 && (
                    <div className="p-3 sm:p-4 md:p-6 space-y-3 sm:space-y-4">
                      <div className="flex items-center gap-3 sm:gap-4 border-b border-gray-100 pb-3 sm:pb-4">
                        <div className="w-8 sm:w-10 h-8 sm:h-10 rounded-full bg-green-50 flex items-center justify-center">
                          <ChartBarIcon className="w-4 sm:w-5 h-4 sm:h-5 text-green-600" />
                        </div>
                        <div>
                          <h4 className="font-semibold text-sm sm:text-base">Settlement Summary</h4>
                          <p className="text-xs sm:text-sm text-gray-500">Optimized transfers</p>
                        </div>
                      </div>
                      <div className="grid gap-3 sm:gap-4">
                        {[
                          { from: 'Sarah Chen', to: 'Alex Kim', amount: '$58.25', method: 'Venmo' },
                          { from: 'Mike Peters', to: 'Sarah Chen', amount: '$32.75', method: 'PayPal' },
                        ].map((transfer, index) => (
                          <div key={index} className="flex items-center justify-between p-2 sm:p-4 rounded-lg bg-gray-50 hover:bg-gray-100 transition-colors duration-200">
                            <div className="flex items-center gap-2 sm:gap-4">
                              <div className="flex items-center">
                                <div className="w-6 sm:w-8 h-6 sm:h-8 rounded-full bg-white flex items-center justify-center text-sm sm:text-base">
                                  👤
                                </div>
                                <ArrowRightIcon className="w-3 sm:w-4 h-3 sm:h-4 mx-1.5 sm:mx-2 text-gray-400" />
                                <div className="w-6 sm:w-8 h-6 sm:h-8 rounded-full bg-white flex items-center justify-center text-sm sm:text-base">
                                  👤
                                </div>
                              </div>
                              <div>
                                <p className="font-medium text-sm sm:text-base">{transfer.from}</p>
                                <p className="text-xs sm:text-sm text-gray-500">pays {transfer.to} via {transfer.method}</p>
                              </div>
                            </div>
                            <span className="font-medium text-sm sm:text-base text-green-600">{transfer.amount}</span>
                          </div>
                        ))}
                        <button className="btn-primary w-full mt-1 sm:mt-2 text-sm sm:text-base py-2 sm:py-2.5" disabled>
                          Settle All Balances
                        </button>
                      </div>
                    </div>
                  )}
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-16 sm:py-20 md:py-24">
        <div className="container-custom">
          <div className="text-center mb-12 sm:mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4">Smart Features</h2>
              <p className="text-base sm:text-lg md:text-xl text-gray-600">Everything you need for seamless group expenses</p>
            </motion.div>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
            {[
              {
                icon: CreditCardIcon,
                title: "Card Sync",
                description: "Add your card once and let Splitree automatically track and match transactions to your groups."
              },
              {
                icon: BellIcon,
                title: "Smart Notifications",
                description: "Get contextual prompts and gentle reminders exactly when you need them."
              },
              {
                icon: CalculatorIcon,
                title: "Quick Split",
                description: "Split expenses instantly with our intuitive interface and smart suggestions."
              },
              {
                icon: UserGroupIcon,
                title: "Group Management",
                description: "Create and manage trip or event groups effortlessly with our lightweight system."
              },
              {
                icon: DocumentTextIcon,
                title: "Receipt Scanning",
                description: "Scan receipts instantly with OCR technology for accurate expense tracking."
              },
              {
                icon: ChartBarIcon,
                title: "Trip Summaries",
                description: "Get beautiful, auto-generated summaries of your shared expenses."
              }
            ].map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="p-4 sm:p-6 rounded-lg sm:rounded-xl border border-gray-200 hover:border-green-100 group"
              >
                <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg sm:rounded-xl bg-green-50 flex items-center justify-center mb-3 sm:mb-4 group-hover:scale-110 transition-transform">
                  <feature.icon className="w-4 h-4 sm:w-5 sm:h-5 text-green-600" />
                </div>
                <h3 className="text-base sm:text-lg font-semibold mb-1 sm:mb-2">{feature.title}</h3>
                <p className="text-sm sm:text-base text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      {/* <section className="py-16 sm:py-20 md:py-24 bg-gradient-to-b from-white to-gray-50/50 relative overflow-hidden">
        <div className="absolute inset-0 noise-bg opacity-75"></div>
        <div className="container-custom relative">
          <div className="max-w-3xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4 md:mb-6">Ready to simplify group expenses?</h2>
              <p className="text-base sm:text-lg md:text-xl text-gray-600 mb-6 sm:mb-8">
                Start managing your shared expenses with Splitree today.
              </p>
              <button className="btn-primary text-sm sm:text-base">
                Get Started <ArrowRightIcon className="w-4 h-4 sm:w-5 sm:h-5 ml-1.5 sm:ml-2" />
              </button>
            </motion.div>
          </div>
        </div>
      </section> */}

      {/* Footer */}
      <footer className="bg-gray-50 border-t border-gray-100 py-4 sm:py-6">
        <div className="container-custom">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-3">
            <div className="flex items-center gap-2">
              <Image
                src="/logo_icon.png" 
                alt="Splitree Logo" 
                width={24} 
                height={24}
                className="w-6 h-6"
              />
              <span className="text-base font-semibold text-gray-900">Splitree</span>
            </div>
            <div className="text-sm text-gray-500">
              © {new Date().getFullYear()} Splitree. All rights reserved.
            </div>
          </div>
        </div>
      </footer>
    </main>
  )
}
interface StepSelectorProps {
  number: string;
  title: string;
  description: string;
  isActive: boolean;
  onClick: () => void;
}

const StepSelector: React.FC<StepSelectorProps> = ({ number, title, description, isActive, onClick }) => (
  <button
    onClick={onClick}
    className={`text-left p-3 sm:p-4 rounded-lg sm:rounded-xl border h-full transition-all duration-200 ${
      isActive 
        ? 'border-green-500 bg-green-50/50 shadow-md sm:shadow-lg shadow-green-500/10 scale-[1.02]' 
        : 'border-gray-200 hover:border-green-200 hover:bg-gray-50 hover:scale-[1.02]'
    }`}
  >
    <div className="flex items-start gap-2 sm:gap-3 h-full">
      <div className={`flex-shrink-0 flex items-center justify-center w-5 h-5 sm:w-6 sm:h-6 rounded-full text-xs sm:text-sm font-semibold ${
        isActive ? 'bg-green-500 text-white' : 'bg-gray-100 text-gray-600'
      }`}>
        {number}
      </div>
      <div className="flex-1 flex flex-col">
        <h3 className="text-sm sm:text-base font-semibold mb-0.5 sm:mb-1">{title}</h3>
        <p className="text-xs sm:text-sm text-gray-600 flex-1">{description}</p>
      </div>
    </div>
  </button>
);

