import React from 'react';
import { useTranslation } from 'react-i18next';
import ScrollReveal from './ScrollReveal';

const About = () => {
  const { t } = useTranslation();
  
  return (
    <section id="about" className="scroll-mt-8">
      <ScrollReveal>
        <h2 className="text-2xl sm:text-3xl font-bold text-primary mb-4 sm:mb-6 border-b-2 border-accent pb-2">
          {t('about.title')}
        </h2>
      </ScrollReveal>
      <ScrollReveal delay={0.2}>
        <div className="bg-gray-50 rounded-lg p-5 sm:p-8 shadow-sm border border-gray-200">
          <p className="text-base sm:text-lg text-neutral leading-relaxed">
            {t('about.description')}
          </p>
        </div>
      </ScrollReveal>
    </section>
  );
};

export default About;
