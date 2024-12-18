import React from 'react';
import { Github } from 'lucide-react';
const Footer = () => {
  return (
    <footer className="bg-black text-white mt-auto py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">About</h3>
            <p className="text-gray-400">
              F1 Dashboard provides comprehensive Formula 1 statistics and real-time race information
              powered by the Ergast Developer API.
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="http://ergast.com/mrd/" 
                   className="text-gray-400 hover:text-red-500 transition-colors"
                   target="_blank" 
                   rel="noopener noreferrer">
                  Ergast Developer API
                </a>
              </li>
              <li>
                <a href="https://github.com" 
                   className="text-gray-400 hover:text-red-500 transition-colors flex items-center gap-2"
                   target="_blank" 
                   rel="noopener noreferrer">
                  <Github className="h-4 w-4" />
                  GitHub Repository
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <p className="text-gray-400">
              Have questions or feedback? Reach out to us at{' '}
              <a href="mailto:contact@f1dashboard.com" 
                 className="text-red-500 hover:text-red-400 transition-colors">
                contact@f1dashboard.com
              </a>
            </p>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-gray-800 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} F1 Dashboard. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
export default Footer;
