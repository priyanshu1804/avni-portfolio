import React from 'react';
import { DivideIcon as LucideIcon } from 'lucide-react';

interface ContentCardProps {
  platform: string;
  title: string;
  link: string;
  icon: LucideIcon;
  stats: string;
}

const ContentCard: React.FC<ContentCardProps> = ({
  platform,
  title,
  link,
  icon: Icon,
  stats,
}) => {
  return (
    <a
      href={link}
      className="block bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 group"
      target="_blank"
      rel="noopener noreferrer"
    >
      <div className="flex items-center gap-4 mb-4">
        <div className="p-2 bg-red-100 dark:bg-red-900 rounded-lg">
          <Icon className="text-red-500" size={24} />
        </div>
        <div>
          <h3 className="text-lg font-semibold group-hover:text-blue-500 transition-colors">{title}</h3>
          <p className="text-sm text-gray-600 dark:text-gray-400">{platform}</p>
        </div>
      </div>
      <div className="text-sm font-medium text-gray-600 dark:text-gray-400">
        {stats}
      </div>
    </a>
  );
};

export default ContentCard;