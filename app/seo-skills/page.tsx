'use client';

import Image from 'next/image';
import { FaSearch, FaChartLine,FaArrowRight, FaCog, FaCogs } from "react-icons/fa";
import { SiGoogleanalytics, SiGooglesheets } from "react-icons/si";
export default function SEOSkillsPage() {
  return (
    <div className="min-h-screen bg-[#5a5370] text-white">
      {/* Hero Section */}
      <section className="relative pt-20 pb-20 px-6 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-white/5"></div>
        <div className="mx-auto max-w-6xl relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
                Advanced <span className="bg-gradient-to-r from-blue-300 to-cyan-300 bg-clip-text text-transparent">SEO</span> Expertise
              </h1>
              <p className="text-xl text-gray-100 mb-8 leading-relaxed">
                Data-driven search optimization using industry-leading tools and custom solutions for sustainable organic growth.
              </p>
              <div className="flex gap-4">
                <button className="flex items-center gap-2 px-6 py-3 bg-white/20 hover:bg-white/30 rounded-lg transition font-semibold backdrop-blur-md">
                  Get Started <FaArrowRight />
                </button>
                <button className="flex items-center gap-2 px-6 py-3 border border-white/30 text-white hover:bg-white/10 rounded-lg transition font-semibold">
                  Learn More
                </button>
              </div>
            </div>
            <div className="relative aspect-video rounded-2xl overflow-hidden shadow-xl flex items-center justify-center">
              <Image
                src="/ahrefs.png"
                alt="Ahrefs SEO Tool"
                fill
                className="object-contain p-6 md:p-8"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Core Tools Section */}
      <section className="py-20 px-6 border-t border-white/10">
        <div className="mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Core Tools & Capabilities</h2>
            <p className="text-gray-200 text-lg">Comprehensive suite of tools for research, analysis, and optimization</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {/* Ahrefs */}
            <div className="group rounded-2xl bg-white/10 p-8 backdrop-blur-md transition hover:bg-white/20">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 bg-white/10 rounded-lg">
                  <FaSearch className="text-2xl text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold">Ahrefs</h3>
                  <p className="text-sm text-gray-200">Research & Analysis</p>
                </div>
              </div>
              <ul className="space-y-2 text-sm text-gray-100">
                <li className="flex gap-2"><span className="text-white mt-1">✓</span> Competitive keyword research and gap analysis</li>
                <li className="flex gap-2"><span className="text-white mt-1">✓</span> Backlink profile investigation and opportunities</li>
                <li className="flex gap-2"><span className="text-white mt-1">✓</span> Content performance benchmarking</li>
                <li className="flex gap-2"><span className="text-white mt-1">✓</span> Site technical health audits</li>
                <li className="flex gap-2"><span className="text-white mt-1">✓</span> SERP position tracking and monitoring</li>
              </ul>
            </div>

            {/* Google Analytics */}
            <div className="group rounded-2xl bg-white/10 p-8 backdrop-blur-md transition hover:bg-white/20">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 bg-white/10 rounded-lg">
                  <SiGoogleanalytics className="text-2xl text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold">Google Analytics</h3>
                  <p className="text-sm text-gray-200">User Behavior & Conversion</p>
                </div>
              </div>
              <ul className="space-y-2 text-sm text-gray-100">
                <li className="flex gap-2"><span className="text-white mt-1">✓</span> User journey tracking and behavior flow analysis</li>
                <li className="flex gap-2"><span className="text-white mt-1">✓</span> Conversion funnel optimization</li>
                <li className="flex gap-2"><span className="text-white mt-1">✓</span> Traffic source attribution and ROI measurement</li>
                <li className="flex gap-2"><span className="text-white mt-1">✓</span> Event tracking and goal completion monitoring</li>
                <li className="flex gap-2"><span className="text-white mt-1">✓</span> Segmentation for targeted improvements</li>
              </ul>
            </div>

            {/* Google Search Console */}
            <div className="group rounded-2xl bg-white/10 p-8 backdrop-blur-md transition hover:bg-white/20">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 bg-white/10 rounded-lg">
                  <FaChartLine className="text-2xl text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold">Google Search Console</h3>
                  <p className="text-sm text-gray-200">Search Performance & Indexing</p>
                </div>
              </div>
              <ul className="space-y-2 text-sm text-gray-100">
                <li className="flex gap-2"><span className="text-white mt-1">✓</span> Click-through rate (CTR) and impression monitoring</li>
                <li className="flex gap-2"><span className="text-white mt-1">✓</span> Query position tracking and optimization</li>
                <li className="flex gap-2"><span className="text-white mt-1">✓</span> Indexing and crawl error management</li>
                <li className="flex gap-2"><span className="text-white mt-1">✓</span> Mobile usability and Core Web Vitals tracking</li>
                <li className="flex gap-2"><span className="text-white mt-1">✓</span> Structured data validation and enhancements</li>
              </ul>
            </div>

            {/* Looker Studio */}
            <div className="group rounded-2xl bg-white/10 p-8 backdrop-blur-md transition hover:bg-white/20">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 bg-white/10 rounded-lg">
                  <SiGooglesheets className="text-2xl text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold">Looker Studio</h3>
                  <p className="text-sm text-gray-200">Advanced Reporting & Dashboards</p>
                </div>
              </div>
              <ul className="space-y-2 text-sm text-gray-100">
                <li className="flex gap-2"><span className="text-white mt-1">✓</span> Custom dashboard creation for stakeholders</li>
                <li className="flex gap-2"><span className="text-white mt-1">✓</span> Multi-source data integration (GA, GSC, CRM)</li>
                <li className="flex gap-2"><span className="text-white mt-1">✓</span> Automated report generation and scheduling</li>
                <li className="flex gap-2"><span className="text-white mt-1">✓</span> Executive-level KPI visualization</li>
                <li className="flex gap-2"><span className="text-white mt-1">✓</span> Data-driven decision support dashboards</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Advanced Capabilities Section */}
      <section className="py-20 px-6 border-t border-white/10">
        <div className="mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Advanced Capabilities</h2>
            <p className="text-gray-200 text-lg">Custom solutions for deeper insights and automation</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Custom Dashboard */}
            <div className="rounded-2xl bg-white/10 p-8 backdrop-blur-md transition hover:bg-white/20">
              <div className="flex items-start gap-4 mb-6">
                <div className="p-3 bg-white/10 rounded-lg mt-1">
                  <FaCogs className="text-2xl text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-2">Custom Dashboard</h3>
                  <p className="text-sm text-gray-200">In-House Web-Based Monitoring</p>
                </div>
              </div>
              <p className="text-gray-100 mb-4 leading-relaxed">Build custom real-time dashboards directly on your website with tailored metrics, custom calculations, and unlimited visualizations.</p>
              <ul className="space-y-2 text-sm text-gray-100">
                <li className="flex gap-2"><span className="text-white mt-1">•</span> Real-time SEO metrics dashboard</li>
                <li className="flex gap-2"><span className="text-indigo-400 mt-1">•</span> Tailored data visualization</li>
                <li className="flex gap-2"><span className="text-indigo-400 mt-1">•</span> Custom metric calculations</li>
                <li className="flex gap-2"><span className="text-indigo-400 mt-1">•</span> Unlimited scalability</li>
              </ul>
            </div>

            {/* App Script Automation */}
            <div className="rounded-2xl bg-white/10 p-8 backdrop-blur-md transition hover:bg-white/20">
              <div className="flex items-start gap-4 mb-6">
                <div className="p-3 bg-white/10 rounded-lg mt-1">
                  <FaCog className="text-2xl text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-2">App Script Automation</h3>
                  <p className="text-sm text-gray-200">Security & Performance Workflows</p>
                </div>
              </div>
              <p className="text-gray-100 mb-4 leading-relaxed">Automate repetitive SEO tasks, monitor security, track performance, and keep your data synchronized with custom workflows.</p>
              <ul className="space-y-2 text-sm text-gray-100">
                <li className="flex gap-2"><span className="text-white mt-1">•</span> Security monitoring and threat detection</li>
                <li className="flex gap-2"><span className="text-rose-400 mt-1">•</span> Performance metrics automation</li>
                <li className="flex gap-2"><span className="text-rose-400 mt-1">•</span> Scheduled data synchronization</li>
                <li className="flex gap-2"><span className="text-rose-400 mt-1">•</span> Custom alert systems</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Expertise Summary Section */}
      <section className="py-20 px-6 border-t border-white/10">
        <div className="mx-auto max-w-6xl">
          <div className="mb-16">
            <h2 className="text-4xl font-bold mb-6 text-center">Complete Expertise</h2>
            <div className="relative aspect-video rounded-2xl overflow-hidden border border-white/20 shadow-2xl mb-12 bg-white/5 flex items-center justify-center">
              <Image
                src="/looker.png"
                alt="Looker Studio Analytics"
                fill
                className="object-contain p-6 md:p-8"
              />
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-6 rounded-2xl bg-white/10 backdrop-blur-md transition hover:bg-white/20">
              <h3 className="font-bold text-xl mb-4">Technical SEO</h3>
              <ul className="space-y-3 text-sm text-gray-100">
                <li className="flex gap-2"><span>•</span> Site architecture optimization</li>
                <li className="flex gap-2"><span>•</span> Core Web Vitals optimization</li>
                <li className="flex gap-2"><span>•</span> Crawlability enhancements</li>
                <li className="flex gap-2"><span>•</span> Schema markup implementation</li>
                <li className="flex gap-2"><span>•</span> Mobile responsiveness</li>
              </ul>
            </div>
            <div className="p-6 rounded-2xl bg-white/10 backdrop-blur-md transition hover:bg-white/20">
              <h3 className="font-bold text-xl mb-4">Data Analysis</h3>
              <ul className="space-y-3 text-sm text-gray-100">
                <li className="flex gap-2"><span>•</span> Multi-source data integration</li>
                <li className="flex gap-2"><span>•</span> Performance trend analysis</li>
                <li className="flex gap-2"><span>•</span> ROI calculation and tracking</li>
                <li className="flex gap-2"><span>•</span> Competitive benchmarking</li>
                <li className="flex gap-2"><span>•</span> Statistical insights extraction</li>
              </ul>
            </div>
            <div className="p-6 rounded-2xl bg-white/10 backdrop-blur-md transition hover:bg-white/20">
              <h3 className="font-bold text-xl mb-4">Optimization</h3>
              <ul className="space-y-3 text-sm text-gray-100">
                <li className="flex gap-2"><span>•</span> Conversion rate optimization</li>
                <li className="flex gap-2"><span>•</span> User experience improvements</li>
                <li className="flex gap-2"><span>•</span> Content strategy alignment</li>
                <li className="flex gap-2"><span>•</span> Automation workflows</li>
                <li className="flex gap-2"><span>•</span> Sustained ranking growth</li>
              </ul>
            </div>
          </div>
        </div>
      </section>


    </div>
  );
}
