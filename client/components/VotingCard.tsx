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
        <div className="w-20 h-20 bg-gray-200 rounded-full mx-auto mb-2 flex items-center justify-center overflow-hidden">
          <img src={image} alt={title} className="w-full h-full object-cover" />
        </div>
      )}
      {children}
      <h3 className="text-lg font-bold text-black mb-2 text-center">{title}</h3>

      {subtitle && (
        <p className="text-gray-600 text-center mb-1 font-medium">{subtitle}</p>
      )}

      {description && (
        <p className="text-gray-700 text-center text-sm leading-relaxed">
          {description.length > 30
            ? description.slice(0, 30) + "..."
            : description}
        </p>
      )}
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
