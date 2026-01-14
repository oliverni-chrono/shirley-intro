import { useState } from 'react';
import { motion } from 'framer-motion';
import BottomNavigation from './components/layout/BottomNavigation';
import BentoGrid from './components/layout/BentoGrid';
import BentoCard from './components/layout/BentoCard';
import MetricCard from './components/data/MetricCard';
import ComparisonTable from './components/data/ComparisonTable';
import marketData from './data/marketData';
import { keyInsights } from './data/comparisonMetrics';
import { dataSources, dataFreshness } from './data/sources';
import { fadeInUp, staggerContainer } from './styles/animations';
import { Sparkles, TrendingUp, Users, Target, Zap } from 'lucide-react';

function App() {
  const [activeSection, setActiveSection] = useState('hero');

  return (
    <div className="flex flex-row h-screen w-max bg-bg-primary text-text-primary overflow-x-auto">
      {/* Hero Section */}
      <section id="hero" className="w-screen h-screen flex-shrink-0 flex items-center justify-center px-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-hinge/10 via-transparent to-tinder/10" />
        
        {/* Decorative floating elements */}
        <div className="absolute top-20 left-20 text-8xl opacity-20 animate-pulse">❤️</div>
        <div className="absolute top-40 right-32 text-7xl opacity-15 animate-pulse delay-100">💘</div>
        <div className="absolute bottom-32 left-1/4 text-9xl opacity-10 animate-pulse delay-200">💕</div>
        <div className="absolute bottom-20 right-20 text-8xl opacity-20 animate-pulse delay-300">💖</div>
        
        <motion.div 
          className="text-center space-y-6 relative z-10 max-w-5xl"
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
        >
          <motion.div variants={fadeInUp} className="space-y-3">
            <div className="text-9xl mb-6">💘</div>
            <h1 className="text-6xl md:text-8xl font-bold bg-gradient-to-r from-hinge via-tinder to-hinge bg-clip-text text-transparent uppercase tracking-tight">
              HINGE VS TINDER
            </h1>
            <p className="text-2xl md:text-3xl text-text-secondary uppercase tracking-wider">
              MARKET RESEARCH COMPARISON 2024-2026
            </p>
          </motion.div>
          <motion.div variants={fadeInUp} className="flex justify-center space-x-4 text-base text-text-muted">
            <span>DATA-DRIVEN ANALYSIS</span>
            <span>•</span>
            <span>FACT-CHECKED</span>
            <span>•</span>
            <span>{dataFreshness}</span>
          </motion.div>
          <motion.div variants={fadeInUp}>
            <Sparkles className="mx-auto text-hinge animate-pulse" size={28} />
          </motion.div>
        </motion.div>
      </section>

      {/* Market Overview */}
      <section id="market" className="w-screen h-screen flex-shrink-0 px-6 py-12 flex items-center">
        <div className="max-w-7xl mx-auto w-full space-y-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-6xl font-bold text-center mb-3 uppercase">
              MARKET LANDSCAPE
            </h2>
            <p className="text-center text-text-secondary uppercase tracking-wide text-base">
              GLOBAL DATING APP INDUSTRY OVERVIEW
            </p>
          </motion.div>

          <BentoGrid columns={3}>
            <BentoCard title="MARKET SIZE" variant="highlight">
              <div className="text-center">
                <div className="text-6xl mb-4">💰</div>
                <MetricCard 
                  label="2024 VALUE"
                  value={`$${marketData.overview.marketSize}B`}
                  large
                />
              </div>
            </BentoCard>

            <BentoCard title="GROWTH RATE">
              <div className="text-center">
                <div className="text-6xl mb-4">📈</div>
                <MetricCard 
                  label="CAGR 2024-2029"
                  value={`${marketData.overview.growthRate}%`}
                  trend="up"
                  change={marketData.overview.growthRate}
                />
              </div>
            </BentoCard>

            <BentoCard title="PROJECTED 2029">
              <div className="text-center">
                <div className="text-6xl mb-4">🚀</div>
                <MetricCard 
                  label="ESTIMATED VALUE"
                  value={`$${marketData.overview.projectedSize2029}B`}
                />
              </div>
            </BentoCard>

            <BentoCard title="TOTAL USERS" span={2}>
              <div className="text-center">
                <div className="text-7xl mb-4">👥</div>
                <MetricCard 
                  label="GLOBAL ACTIVE USERS"
                  value={`${marketData.overview.totalUsers}M+`}
                  large
                />
              </div>
            </BentoCard>

            <BentoCard title="MARKET LEADERS">
              <div className="space-y-3">
                {marketData.marketPlayers.map((player) => (
                  <div key={player.name} className="space-y-1">
                    <div className="flex justify-between items-center text-sm">
                      <span className="font-medium uppercase">{player.name}</span>
                      <span className="text-text-muted">{player.share}%</span>
                    </div>
                    <div className="h-2 bg-surface-elevated rounded-full overflow-hidden">
                      <div 
                        className="h-full rounded-full transition-all duration-1000"
                        style={{ 
                          width: `${player.share}%`,
                          backgroundColor: player.color 
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </BentoCard>
          </BentoGrid>
        </div>
      </section>

      {/* Tinder Analysis */}
      <section id="tinder" className="w-screen h-screen flex-shrink-0 px-6 py-12 bg-surface/30 flex items-center overflow-y-auto">
        <div className="max-w-7xl mx-auto w-full space-y-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-6xl font-bold text-center mb-3 text-tinder uppercase">
              TINDER ANALYSIS
            </h2>
            <p className="text-center text-text-secondary uppercase tracking-wide text-base">
              MARKET LEADER PERFORMANCE & TRENDS
            </p>
          </motion.div>

          <BentoGrid columns={3}>
            <BentoCard title="REVENUE (2024)" variant="highlight">
              <div className="relative p-6 rounded-2xl bg-gradient-to-br from-tinder/20 to-tinder/5 text-center">
                <div className="text-7xl mb-4">🔥</div>
                <MetricCard 
                  label="ANNUAL REVENUE"
                  value={`$${marketData.tinder.revenue}B`}
                  platform="tinder"
                  large
                />
              </div>
            </BentoCard>

            <BentoCard title="MARKET SHARE">
              <div className="text-center">
                <div className="text-6xl mb-4">👑</div>
                <MetricCard 
                  label="GLOBAL SHARE"
                  value={`${marketData.tinder.marketShare}%`}
                  platform="tinder"
                />
              </div>
            </BentoCard>

            <BentoCard title="DAU TREND">
              <div className="text-center">
                <div className="text-6xl mb-4">📉</div>
                <MetricCard 
                  label="YEAR-OVER-YEAR"
                  value={`${marketData.tinder.dauGrowth}%`}
                  trend="down"
                  change={marketData.tinder.dauGrowth}
                />
              </div>
            </BentoCard>

            <BentoCard title="USER BASE" span={2}>
              <div className="space-y-4">
                <div className="text-center text-7xl mb-4">🌍</div>
                <MetricCard 
                  label="GLOBAL USERS"
                  value={`${marketData.tinder.userCount}M`}
                  platform="tinder"
                />
                <div className="text-sm text-text-muted uppercase text-center">
                  1.6B DAILY SWIPES • 4 AVG LOGINS/DAY
                </div>
              </div>
            </BentoCard>

            <BentoCard title="DEMOGRAPHICS">
              <div className="space-y-3 text-sm">
                <div className="flex justify-between">
                  <span className="text-text-muted uppercase">Age Range</span>
                  <span className="font-medium">{marketData.tinder.demographics.ageRange}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-text-muted uppercase">Gender Ratio</span>
                  <span className="font-medium">{marketData.tinder.demographics.genderRatio}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-text-muted uppercase">Intent</span>
                  <span className="font-medium">{marketData.tinder.demographics.primaryIntent}</span>
                </div>
              </div>
            </BentoCard>
          </BentoGrid>
        </div>
      </section>

      {/* Hinge Analysis */}
      <section id="hinge" className="w-screen h-screen flex-shrink-0 px-6 py-12 flex items-center overflow-y-auto">
        <div className="max-w-7xl mx-auto w-full space-y-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-6xl font-bold text-center mb-3 text-hinge uppercase">
              HINGE ANALYSIS
            </h2>
            <p className="text-center text-text-secondary uppercase tracking-wide text-base">
              THE CHALLENGER MOMENTUM & GROWTH
            </p>
          </motion.div>

          <BentoGrid columns={3}>
            <BentoCard title="REVENUE (2024)" variant="highlight">
              <div className="relative p-6 rounded-2xl bg-gradient-to-br from-hinge/20 to-hinge/5 text-center">
                <div className="text-7xl mb-4">💝</div>
                <MetricCard 
                  label="ANNUAL REVENUE"
                  value={`$${marketData.hinge.revenue}B`}
                  platform="hinge"
                  large
                />
              </div>
            </BentoCard>

            <BentoCard title="DAU GROWTH">
              <div className="text-center">
                <div className="text-6xl mb-4">📊</div>
                <MetricCard 
                  label="YEAR-OVER-YEAR"
                  value={`+${marketData.hinge.dauGrowth}%`}
                  trend="up"
                  change={marketData.hinge.dauGrowth}
                />
              </div>
            </BentoCard>

            <BentoCard title="PAID SUBSCRIBERS">
              <div className="text-center">
                <div className="text-6xl mb-4">💎</div>
                <MetricCard 
                  label="SUBSCRIBER GROWTH"
                  value={`+${marketData.hinge.subscriberGrowth}%`}
                  trend="up"
                  change={marketData.hinge.subscriberGrowth}
                />
              </div>
            </BentoCard>

            <BentoCard title="MARKET SHARE" span={2}>
              <div className="text-center">
                <div className="text-7xl mb-4">🎯</div>
                <MetricCard 
                  label="GLOBAL SHARE"
                  value={`${marketData.hinge.marketShare}%`}
                  platform="hinge"
                  large
                />
              </div>
            </BentoCard>

            <BentoCard title="DEMOGRAPHICS">
              <div className="space-y-3 text-sm">
                <div className="flex justify-between">
                  <span className="text-text-muted uppercase">Age Range</span>
                  <span className="font-medium">{marketData.hinge.demographics.ageRange}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-text-muted uppercase">Gender Ratio</span>
                  <span className="font-medium">{marketData.hinge.demographics.genderRatio}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-text-muted uppercase">Intent</span>
                  <span className="font-medium">{marketData.hinge.demographics.primaryIntent}</span>
                </div>
              </div>
            </BentoCard>
          </BentoGrid>
        </div>
      </section>

      {/* Comparison Section */}
      <section id="comparison" className="w-screen h-screen flex-shrink-0 px-6 py-12 bg-surface/30 flex items-center overflow-y-auto">
        <div className="max-w-6xl mx-auto w-full space-y-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-6xl font-bold text-center mb-3 uppercase">
              HEAD-TO-HEAD COMPARISON
            </h2>
            <p className="text-center text-text-secondary uppercase tracking-wide text-base">
              DIRECT METRIC ANALYSIS
            </p>
          </motion.div>

          <BentoCard variant="large" span={3}>
            <ComparisonTable />
          </BentoCard>
        </div>
      </section>

      {/* Insights Section */}
      <section id="insights" className="w-screen h-screen flex-shrink-0 px-6 py-12 flex items-center overflow-y-auto">
        <div className="max-w-7xl mx-auto w-full space-y-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-6xl font-bold text-center mb-3 uppercase">
              KEY INSIGHTS
            </h2>
            <p className="text-center text-text-secondary uppercase tracking-wide text-base">
              MARKET TRENDS & TAKEAWAYS
            </p>
          </motion.div>

          <BentoGrid columns={2}>
            {keyInsights.map((insight, index) => (
              <BentoCard key={insight.title} title={insight.title}>
                <div className="space-y-4">
                  <div className="text-6xl text-center">{insight.icon}</div>
                  <p className="text-text-secondary leading-relaxed text-center">
                    {insight.description}
                  </p>
                </div>
              </BentoCard>
            ))}
          </BentoGrid>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="mt-8 p-6 bg-surface border border-border"
            style={{ borderRadius: '24px' }}
          >
            <h3 className="text-xl font-semibold mb-3 uppercase tracking-wide">DATA SOURCES</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {dataSources.map((source) => (
                <div key={source.name} className="text-sm">
                  <span className="text-text-muted uppercase block mb-1">{source.category}</span>
                  <a 
                    href={source.url} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-hinge hover:text-hinge-light transition-colors"
                  >
                    {source.name}
                  </a>
                </div>
              ))}
            </div>
            <div className="mt-4 text-center text-text-muted text-sm uppercase tracking-wider">
              LAST UPDATED: {dataFreshness}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Bottom Navigation */}
      <BottomNavigation activeId={activeSection} onNavigate={setActiveSection} />
    </div>
  );
}

export default App;
