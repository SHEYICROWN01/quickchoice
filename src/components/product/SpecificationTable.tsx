import React from 'react';
import { ProductSpecificationGroup } from '../../types';

interface SpecificationTableProps {
  specifications: ProductSpecificationGroup[];
}

export const SpecificationTable: React.FC<SpecificationTableProps> = ({ specifications }) => {
  return (
    <div className="space-y-6">
      {specifications.map((group, groupIdx) => (
        <div
          key={groupIdx}
          className="bg-white rounded-xl border border-[#EAE7F1] overflow-hidden shadow-xs"
        >
          <div className="bg-[#F8F7FA] px-4 py-2.5 border-b border-[#EAE7F1]">
            <h4 className="text-xs font-bold text-[#211078] uppercase tracking-wider">
              {group.group}
            </h4>
          </div>
          <div className="divide-y divide-[#EAE7F1]">
            {group.items.map((item, itemIdx) => (
              <div
                key={itemIdx}
                className="grid grid-cols-1 sm:grid-cols-12 px-4 py-3 text-xs gap-1 sm:gap-4 hover:bg-[#FDFBFE] transition-colors"
              >
                <div className="sm:col-span-4 font-bold text-[#17152D]">
                  {item.label}
                </div>
                <div className="sm:col-span-8 text-[#68677A] font-medium leading-relaxed">
                  {item.value}
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};
