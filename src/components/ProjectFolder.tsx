import React from 'react';
import { FolderGit2, ExternalLink } from 'lucide-react';

interface ProjectFolderProps {
  title: string;
  description: string;
  tech: string[];
  link: string;
  type: string;
}

const ProjectFolder: React.FC<ProjectFolderProps> = ({
  title,
  description,
  tech,
  link,
  type,
}) => {
  return (
    <div className="group bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300">
      <div className="p-6">
        <div className="flex items-start gap-4">
          <div className="p-2 bg-blue-100 dark:bg-blue-900 rounded-lg">
            <FolderGit2 className="text-blue-500" size={24} />
          </div>
          <div className="flex-1">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-semibold">{title}</h3>
              <a
                href={link}
                className="opacity-0 group-hover:opacity-100 transition-opacity"
                target="_blank"
                rel="noopener noreferrer"
              >
                <ExternalLink size={16} />
              </a>
            </div>
            <span className="text-sm text-blue-500 dark:text-blue-400">{type}</span>
            <p className="mt-2 text-gray-600 dark:text-gray-400">{description}</p>
          </div>
        </div>
        <div className="mt-4 flex flex-wrap gap-2">
          {tech.map((item, index) => (
            <span
              key={index}
              className="px-3 py-1 bg-gray-100 dark:bg-gray-700 rounded-full text-sm"
            >
              {item}
            </span>
          ))}
        </div>
      </div>
      <div className="h-1 w-full bg-gradient-to-r from-blue-500 to-purple-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
    </div>
  );
};

export default ProjectFolder;