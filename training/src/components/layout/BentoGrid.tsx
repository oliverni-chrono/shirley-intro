import React from 'react';

interface BentoGridProps {
  children: React.ReactNode;
  columns?: 2 | 3 | 4;
  gap?: 'sm' | 'md' | 'lg';
  className?: string;
}

const gapSizes = {
  sm: 'gap-3',
  md: 'gap-4',
  lg: 'gap-6',
};

const BentoGrid: React.FC<BentoGridProps> = ({ 
  children, 
  columns = 3, 
  gap = 'md',
  className = '' 
}) => {
  const gridCols = {
    2: 'grid-cols-1 md:grid-cols-2',
    3: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3',
    4: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-4',
  };

  return (
    <div className={`grid ${gridCols[columns]} ${gapSizes[gap]} w-full ${className}`}>
      {children}
    </div>
  );
};

export default BentoGrid;

