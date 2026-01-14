import React from 'react';
import { TrendingUp, TrendingDown, Minus } from 'lucide-react';
import { motion } from 'framer-motion';

interface MetricCardProps {
  label: string;
  value: string | number;
  change?: number;
  trend?: 'up' | 'down' | 'neutral';
  platform?: 'hinge' | 'tinder';
  large?: boolean;
}

const MetricCard: React.FC<MetricCardProps> = ({ 
  label, 
  value, 
  change, 
  trend,
  platform,
  large = false 
}) => {
  const trendIcon = {
    up: <TrendingUp size={24} className="text-success" />,
    down: <TrendingDown size={24} className="text-error" />,
    neutral: <Minus size={24} className="text-text-muted" />,
  };

  const platformColor = {
    hinge: 'text-hinge',
    tinder: 'text-tinder',
  };

  const trendColor = {
    up: 'text-success',
    down: 'text-error',
    neutral: 'text-text-muted',
  };

  return (
    <motion.div 
      className="space-y-2"
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4 }}
    >
      <div className="text-text-muted text-sm font-medium uppercase tracking-wider">
        {label}
      </div>
      <div className={`font-bold ${large ? 'text-5xl md:text-6xl' : 'text-3xl md:text-4xl'} ${platform ? platformColor[platform] : 'text-text-primary'}`}>
        {value}
      </div>
      {change !== undefined && trend && (
        <div className={`flex items-center space-x-2 ${trendColor[trend]}`}>
          {trendIcon[trend]}
          <span className="text-lg font-semibold">
            {change > 0 ? '+' : ''}{change}%
          </span>
        </div>
      )}
    </motion.div>
  );
};

export default MetricCard;

