import { ReactNode } from 'react';
import { Link } from 'react-router-dom';

interface VotingCardProps {
  title: string;
  subtitle?: string;
  description?: string;
  image?: string;
  href?: string;
  onClick?: () => void;
  children?: ReactNode;
}

export default function VotingCard({ 
  title, 
  subtitle, 
  description, 
  image, 
  href, 
  onClick, 
  children 
}: VotingCardProps) {
  const cardContent = (
    <div className="bg-white rounded-lg p-4 shadow-sm hover:shadow-lg transition-all duration-300 hover:scale-105 cursor-pointer">
      {image && (
        <div className="w-full h-40 bg-gray-200 rounded-lg mb-3 flex items-center justify-center">
          <span className="text-gray-400 text-sm">Зображення</span>
        </div>
      )}

      <h3 className="text-lg font-bold text-black mb-2 text-center">
        {title}
      </h3>

      {subtitle && (
        <p className="text-gray-600 text-center mb-1 font-medium">
          {subtitle}
        </p>
      )}

      {description && (
        <p className="text-gray-700 text-center text-sm leading-relaxed">
          {description}
        </p>
      )}

      {children}
    </div>
  );

  if (href) {
    return <Link to={href}>{cardContent}</Link>;
  }

  if (onClick) {
    return <div onClick={onClick}>{cardContent}</div>;
  }

  return cardContent;
}
