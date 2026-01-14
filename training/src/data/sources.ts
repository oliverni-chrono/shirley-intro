export interface DataSource {
  name: string;
  url: string;
  category: string;
}

export const dataSources: DataSource[] = [
  {
    name: 'IndMoney - Dating App Statistics 2024',
    url: 'https://www.indmoney.com/blog/us-stocks/dating-app-statistics-2024',
    category: 'MARKET DATA',
  },
  {
    name: 'Global Dating Insights - Tinder vs Hinge Trends',
    url: 'https://www.globaldatinginsights.com',
    category: 'INDUSTRY ANALYSIS',
  },
  {
    name: 'Wikipedia - Hinge (App)',
    url: 'https://en.wikipedia.org/wiki/Hinge_(app)',
    category: 'APP INFORMATION',
  },
  {
    name: 'Wikipedia - Tinder (App)',
    url: 'https://en.wikipedia.org/wiki/Tinder_(app)',
    category: 'APP INFORMATION',
  },
  {
    name: 'MakeUseOf - Hinge vs Tinder Comparison',
    url: 'https://www.makeuseof.com/hinge-vs-tinder/',
    category: 'FEATURE COMPARISON',
  },
  {
    name: 'Cosmopolitan - Hinge vs Tinder Dating App Guide',
    url: 'https://sex.cosmopolitan.com/sex-love/a61986993/hinge-vs-tinder-dating-app/',
    category: 'USER EXPERIENCE',
  },
];

export const lastUpdated = 'JANUARY 2026';
export const dataFreshness = 'Q4 2024 / Q1 2025';

export default dataSources;

