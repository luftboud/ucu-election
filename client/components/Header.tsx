import { Link, useLocation } from 'react-router-dom';

export default function Header() {
  const location = useLocation();

  const navLinks = [
    { href: '/', label: 'Податись' },
    { href: '/voting', label: 'Голосування' },
    { href: '/results', label: 'Результати' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-ivory border-b border-gray-200">
      <div className="container mx-auto px-4 py-3">
        <nav className="flex justify-center">
          <ul className="flex space-x-8">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  to={link.href}
                  className={`text-lg font-medium transition-colors hover:text-dark-blue ${
                    location.pathname === link.href
                      ? 'text-dark-blue border-b-2 border-dark-blue pb-1'
                      : 'text-black'
                  }`}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
