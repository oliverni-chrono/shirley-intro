import React from 'react';
import { motion } from 'framer-motion';
import { scaleIn } from '../../styles/animations';

interface BentoCardProps {
  title?: string;
  children: React.ReactNode;
  span?: 1 | 2 | 3;
  variant?: 'default' | 'highlight' | 'large';
  animated?: boolean;
  className?: string;
}

const BentoCard: React.FC<BentoCardProps> = ({ 
  title, 
  children, 
  span = 1, 
  variant = 'default',
  animated = true,
  className = '' 
}) => {
  const spanClasses = {
    1: '',
    2: 'md:col-span-2',
    3: 'md:col-span-2 lg:col-span-3',
  };

  const variantClasses = {
    default: 'bg-surface border-border',
    highlight: 'bg-surface-elevated border-hinge/30',
    large: 'bg-surface-elevated border-border p-8',
  };

  const cardContent = (
    <div 
      style={{ borderRadius: '24px' }}
      className={`
        border 
        p-6 
        transition-all 
        duration-300 
        hover:scale-[1.02] 
        hover:border-border-hover 
        hover:shadow-xl 
        hover:shadow-hinge/10
        ${variantClasses[variant]}
        ${spanClasses[span]}
        ${className}
      `}
    >
      {title && (
        <h3 className="text-2xl font-semibold text-text-primary mb-4 uppercase tracking-wide">
          {title}
        </h3>
      )}
      <div className="text-text-secondary text-base">
        {children}
      </div>
    </div>
  );

  if (animated) {
    return (
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={scaleIn}
      >
        {cardContent}
      </motion.div>
    );
  }

  return cardContent;
};

export default BentoCard;

