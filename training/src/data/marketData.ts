// Verified market research data for Hinge vs Tinder comparison
// Sources: IndMoney, Global Dating Insights, Wikipedia, MakeUseOf, Cosmopolitan
// Last updated: Q4 2024 / Q1 2025

export const marketData = {
  overview: {
    marketSize: 10.87, // Billion USD
    growthRate: 7.8, // CAGR %
    projectedSize2029: 15.9, // Billion USD
    totalUsers: 400, // Million
    lastUpdated: '2024-Q4',
  },
  
  tinder: {
    revenue: 1.79, // Billion USD (2024)
    marketShare: 28.9, // %
    userCount: 78.6, // Million globally
    usersUSA: 7.86, // Million
    dauGrowth: -10, // % YoY decline
    brandAwareness: 86, // % in US
    dailySwipes: 1600, // Million
    avgLoginsPerDay: 4,
    
    demographics: {
      ageRange: '18-34',
      malePercentage: 76,
      femalePercentage: 24,
      genderRatio: '3.2:1',
      primaryIntent: 'MIXED (CASUAL & SERIOUS)',
    },
    
    features: [
      'SWIPE-BASED INTERFACE',
      'EXPLORE PAGE',
      'LOCATION-BASED MATCHING',
      '1.6B DAILY SWIPES',
      'TOP PICKS',
      'BOOSTS',
    ],
    
    pricing: {
      free: {
        name: 'FREE',
        price: 0,
        features: ['Limited swipes per day', 'Basic matching'],
      },
      plus: {
        name: 'TINDER PLUS',
        price: 10,
        period: 'month',
        features: ['Unlimited swipes', 'Rewind', 'Passport (location change)'],
      },
      gold: {
        name: 'TINDER GOLD',
        price: 18.99,
        period: 'week',
        features: ['Unlimited swipes', 'See who likes you', 'Top picks', 'Monthly Boost'],
      },
      platinum: {
        name: 'TINDER PLATINUM',
        price: 24.99,
        period: 'week',
        features: ['Priority likes', 'Message before matching', 'See who likes you', 'All Gold features'],
      },
    },
    
    strengths: [
      'LARGEST USER BASE (78.6M)',
      'STRONG BRAND RECOGNITION (86%)',
      'ESTABLISHED MARKET LEADER',
      'EXTENSIVE GLOBAL REACH',
      '1.6B DAILY SWIPES',
    ],
    
    weaknesses: [
      'DECLINING DAUs (-10% YOY)',
      'PERCEPTION AS "HOOKUP APP"',
      'POOR GENDER RATIO (3:1)',
      'USER FATIGUE & SWIPE BURNOUT',
      'YOUNGER USER DISILLUSIONMENT',
    ],
  },
  
  hinge: {
    revenue: 0.55, // Billion USD (2024)
    marketShare: 8.9, // %
    paidSubscribers: 1.4, // Million
    subscriberGrowth: 31, // % YoY
    dauGrowth: 17, // % YoY growth
    
    demographics: {
      ageRange: '24-35',
      malePercentage: 64,
      femalePercentage: 36,
      genderRatio: '1.8:1',
      primaryIntent: 'SERIOUS RELATIONSHIPS',
      targetAudience: 'MILLENNIALS & GEN Z',
    },
    
    features: [
      'PROFILE-BASED INTERACTION',
      '6 PHOTOS + 3 PROMPTS',
      'COMMENT ON PHOTOS/PROMPTS',
      'VOICE MESSAGES',
      'ADVANCED FILTERING',
      'MINIMALIST UI (WHITE/BLACK)',
    ],
    
    pricing: {
      free: {
        name: 'FREE',
        price: 0,
        features: ['Limited likes per day', 'Basic matching'],
      },
      plus: {
        name: 'HINGE+',
        price: 16.98,
        period: 'week',
        features: ['Unlimited likes', 'Advanced filters', 'See who likes you'],
      },
      x: {
        name: 'HINGEX',
        price: 24.99,
        period: 'week',
        features: ['Priority likes', 'Enhanced matching', 'See who likes you', 'All Hinge+ features'],
      },
    },
    
    strengths: [
      'RAPID USER GROWTH (+17% DAUs)',
      'STRONG PAID CONVERSION (+31%)',
      'BETTER GENDER BALANCE (1.8:1)',
      'APPEALS TO GEN Z',
      'DIFFERENTIATED EXPERIENCE',
      '"DESIGNED TO BE DELETED" POSITIONING',
    ],
    
    weaknesses: [
      'SMALLER USER BASE (vs TINDER)',
      'LOWER MARKET SHARE (8.9%)',
      'LIMITED GLOBAL REACH',
      'PREMIUM REQUIRED FOR FULL EXPERIENCE',
    ],
  },
  
  marketPlayers: [
    { name: 'TINDER', share: 28.9, color: '#FF6B6B' },
    { name: 'BUMBLE', share: 13.2, color: '#F7C948' },
    { name: 'HINGE', share: 8.9, color: '#F55276' },
    { name: 'OTHERS', share: 49.0, color: '#666666' },
  ],
};

export default marketData;

