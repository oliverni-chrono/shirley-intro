export interface ComparisonRow {
  metric: string;
  hingeValue: string;
  tinderValue: string;
  winner?: 'HINGE' | 'TINDER' | 'TIE';
  insight?: string;
}

export const comparisonMetrics: ComparisonRow[] = [
  {
    metric: 'REVENUE (2024)',
    hingeValue: '$550M',
    tinderValue: '$1.79B',
    winner: 'TINDER',
  },
  {
    metric: 'MARKET SHARE',
    hingeValue: '8.9%',
    tinderValue: '28.9%',
    winner: 'TINDER',
  },
  {
    metric: 'DAU GROWTH (YOY)',
    hingeValue: '+17%',
    tinderValue: '-10%',
    winner: 'HINGE',
    insight: 'HINGE SHOWS STRONG MOMENTUM',
  },
  {
    metric: 'PAID SUBSCRIBERS',
    hingeValue: '1.4M (+31%)',
    tinderValue: 'N/A',
    winner: 'HINGE',
    insight: 'STRONG PAID CONVERSION',
  },
  {
    metric: 'USER INTENT',
    hingeValue: 'SERIOUS RELATIONSHIPS',
    tinderValue: 'MIXED INTENT',
    winner: 'HINGE',
  },
  {
    metric: 'GENDER RATIO (M:F)',
    hingeValue: '1.8:1',
    tinderValue: '3.2:1',
    winner: 'HINGE',
    insight: 'BETTER BALANCE = BETTER MATCHES',
  },
  {
    metric: 'INTERFACE',
    hingeValue: 'PROFILE-BASED',
    tinderValue: 'SWIPE-BASED',
    winner: 'TIE',
  },
  {
    metric: 'BRAND POSITIONING',
    hingeValue: 'DESIGNED TO BE DELETED',
    tinderValue: 'IT STARTS WITH A SWIPE',
    winner: 'TIE',
  },
  {
    metric: 'TARGET AUDIENCE',
    hingeValue: 'MILLENNIALS & GEN Z',
    tinderValue: 'GEN Z & MILLENNIALS',
    winner: 'TIE',
  },
  {
    metric: 'PREMIUM PRICING',
    hingeValue: '$16.98-$24.99/WEEK',
    tinderValue: '$18.99-$24.99/WEEK',
    winner: 'TIE',
  },
  {
    metric: 'GLOBAL USER BASE',
    hingeValue: 'SMALLER (GROWING)',
    tinderValue: '78.6M USERS',
    winner: 'TINDER',
  },
  {
    metric: 'BRAND AWARENESS (US)',
    hingeValue: 'MODERATE',
    tinderValue: '86%',
    winner: 'TINDER',
  },
];

export const keyInsights = [
  {
    title: 'SHIFT TO SERIOUS DATING',
    description: 'USERS INCREASINGLY SEEK MEANINGFUL RELATIONSHIPS OVER CASUAL ENCOUNTERS. GEN Z DISILLUSIONED WITH SUPERFICIAL SWIPE CULTURE.',
    icon: '❤️',
  },
  {
    title: 'PLATFORM FATIGUE',
    description: 'TINDER EXPERIENCING "SWIPE BURNOUT" WITH DECLINING ENGAGEMENT. USERS SEEK QUALITY OVER QUANTITY.',
    icon: '😴',
  },
  {
    title: 'DEMOGRAPHICS MATTER',
    description: 'APPS WITH BETTER GENDER RATIOS SEE HIGHER ENGAGEMENT. HINGE\'S 36% FEMALE VS TINDER\'S 22-24%.',
    icon: '👥',
  },
  {
    title: 'MONETIZATION EVOLUTION',
    description: 'HINGE SEEING STRONGER PAID CONVERSION (+31% SUBS) DESPITE SMALLER USER BASE. QUALITY OVER QUANTITY PAYS.',
    icon: '💰',
  },
  {
    title: 'MARKET DYNAMICS',
    description: 'DATING APP MARKET GROWING AT 7.8% CAGR. TINDER LEADS BUT HINGE SHOWS STRONGEST GROWTH MOMENTUM.',
    icon: '📈',
  },
];

export default comparisonMetrics;

