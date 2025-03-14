import React from 'react';

interface SkillCardProps {
  category: string;
  items: string[];
}

const SkillCard: React.FC<SkillCardProps> = ({ category, items }) => {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg">
      <h3 className="text-xl font-semibold mb-4">{category}</h3>
      <div className="flex flex-wrap gap-2">
        {items.map((item, index) => (
          <span
            key={index}
            className="px-3 py-1 bg-gray-100 dark:bg-gray-700 rounded-full text-sm"
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  );
};

export default SkillCard;