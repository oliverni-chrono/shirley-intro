export const theme = {
  colors: {
    // Base
    background: '#000000',
    backgroundElevated: '#0A0A0A',
    surface: '#111111',
    surfaceElevated: '#1A1A1A',
    
    // Text
    textPrimary: '#FFFFFF',
    textSecondary: '#A0A0A0',
    textMuted: '#666666',
    
    // Brand
    hinge: {
      primary: '#F55276',
      light: '#FF6B8A',
      dark: '#D9465F',
    },
    tinder: {
      primary: '#FF6B6B',
      light: '#FF8585',
      dark: '#E65555',
    },
    
    // Semantic
    success: '#22C55E',
    warning: '#F59E0B',
    error: '#EF4444',
    info: '#3B82F6',
    
    // UI
    border: '#222222',
    borderHover: '#333333',
    accent: '#6366F1',
  },
  
  borderRadius: {
    sm: '8px',
    md: '12px',
    lg: '16px',
    xl: '24px',
    full: '9999px',
  },
  
  spacing: {
    section: '100vh',
    containerPadding: '24px',
    cardPadding: '24px',
    gridGap: '16px',
  },
};

export type Theme = typeof theme;

