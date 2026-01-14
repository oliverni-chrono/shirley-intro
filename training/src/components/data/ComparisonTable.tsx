import React from 'react';
import { Check } from 'lucide-react';
import { comparisonMetrics, type ComparisonRow } from '../../data/comparisonMetrics';
import { motion } from 'framer-motion';

const ComparisonTable: React.FC = () => {
  return (
    <div className="w-full overflow-x-auto">
      <table className="w-full border-separate border-spacing-0">
        <thead>
          <tr className="text-left">
            <th className="p-4 bg-surface-elevated text-text-muted uppercase tracking-wider text-sm font-semibold rounded-tl-lg">
              METRIC
            </th>
            <th className="p-4 bg-surface-elevated text-hinge uppercase tracking-wider text-sm font-semibold">
              HINGE
            </th>
            <th className="p-4 bg-surface-elevated text-tinder uppercase tracking-wider text-sm font-semibold rounded-tr-lg">
              TINDER
            </th>
          </tr>
        </thead>
        <tbody>
          {comparisonMetrics.map((row: ComparisonRow, index: number) => (
            <motion.tr
              key={row.metric}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className={`${index % 2 === 0 ? 'bg-surface' : 'bg-surface-elevated/50'} hover:bg-surface-elevated transition-colors`}
            >
              <td className="p-4 text-text-primary font-medium">
                {row.metric}
              </td>
              <td className="p-4 text-text-secondary relative">
                <div className="flex items-center space-x-2">
                  {row.winner === 'HINGE' && (
                    <Check size={18} className="text-success flex-shrink-0" />
                  )}
                  <span className={row.winner === 'HINGE' ? 'text-hinge font-semibold' : ''}>
                    {row.hingeValue}
                  </span>
                </div>
              </td>
              <td className="p-4 text-text-secondary relative">
                <div className="flex items-center space-x-2">
                  {row.winner === 'TINDER' && (
                    <Check size={18} className="text-success flex-shrink-0" />
                  )}
                  <span className={row.winner === 'TINDER' ? 'text-tinder font-semibold' : ''}>
                    {row.tinderValue}
                  </span>
                </div>
              </td>
            </motion.tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ComparisonTable;

