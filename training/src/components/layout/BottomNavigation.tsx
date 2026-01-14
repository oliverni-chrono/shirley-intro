import React from 'react';
import { Home, TrendingUp, Users, GitCompare, Lightbulb } from 'lucide-react';

interface NavItem {
  id: string;
  label: string;
  icon: React.ReactNode;
}

interface BottomNavigationProps {
  activeId: string;
  onNavigate: (id: string) => void;
}

const navigationItems: NavItem[] = [
  { id: 'hero', label: 'HOME', icon: <Home size={20} /> },
  { id: 'market', label: 'MARKET', icon: <TrendingUp size={20} /> },
  { id: 'tinder', label: 'TINDER', icon: <Users size={20} /> },
  { id: 'hinge', label: 'HINGE', icon: <Users size={20} /> },
  { id: 'comparison', label: 'COMPARE', icon: <GitCompare size={20} /> },
  { id: 'insights', label: 'INSIGHTS', icon: <Lightbulb size={20} /> },
];

const BottomNavigation: React.FC<BottomNavigationProps> = ({ activeId, onNavigate }) => {
  const handleClick = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      onNavigate(id);
    }
  };

  return (
    <nav 
      className="fixed bottom-4 left-1/2 transform -translate-x-1/2 z-50 px-4"
      aria-label="Main navigation"
    >
      <div className="bg-surface-elevated/80 backdrop-blur-xl border border-border px-2 py-2 shadow-2xl" style={{ borderRadius: '9999px' }}>
        <div className="flex items-center space-x-1">
          {navigationItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleClick(item.id)}
              aria-current={activeId === item.id ? 'page' : undefined}
              aria-label={`Navigate to ${item.label}`}
              className={`
                flex items-center justify-center
                px-4 py-3
                min-w-[48px] min-h-[48px]
                transition-all duration-300
                ${activeId === item.id 
                  ? 'bg-hinge text-white' 
                  : 'text-text-secondary hover:text-text-primary hover:bg-surface'
                }
              `}
              style={{ borderRadius: '9999px' }}
            >
              <span className="flex items-center space-x-2">
                {item.icon}
                <span className="hidden md:inline text-sm font-medium uppercase tracking-wider">
                  {item.label}
                </span>
              </span>
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default BottomNavigation;

