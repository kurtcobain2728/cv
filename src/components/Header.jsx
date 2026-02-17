import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import DownloadCV from './DownloadCV';

const Header = () => {
  const { t } = useTranslation();
  
  return (
    <header className="bg-gradient-to-r from-primary via-secondary to-accent text-white py-16 sm:py-24 overflow-hidden pt-24 sm:pt-32">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-center gap-8">
          <motion.div 
            className="flex-shrink-0"
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ 
              duration: 0.8,
              ease: [0.34, 1.56, 0.64, 1],
            }}
          >
            <LazyLoadImage
              src="/img/perfil.jpg" 
              alt={t('header.name')}
              className="w-32 h-32 sm:w-40 sm:h-40 rounded-full object-cover border-4 border-white shadow-xl"
              effect="blur"
            />
          </motion.div>
          <div className="text-center sm:text-left flex-1">
            <motion.h1 
              className="text-4xl sm:text-5xl font-bold mb-2"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              {t('header.name')}
            </motion.h1>
            <motion.p 
              className="text-xl sm:text-2xl text-light mb-6"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              {t('header.title')}
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
            >
              <DownloadCV />
            </motion.div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
