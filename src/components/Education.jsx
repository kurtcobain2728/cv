import React from 'react';
import { useTranslation } from 'react-i18next';
import { GraduationCap } from 'lucide-react';
import ScrollReveal from './ScrollReveal';

const Education = () => {
  const { t } = useTranslation();
  
  const education = [
    {
      title: t('education.degree1.title'),
      institution: t('education.degree1.institution'),
      status: t('education.degree1.status'),
    },
    {
      title: t('education.degree2.title'),
      institution: t('education.degree2.institution'),
      status: t('education.degree2.status'),
    },
  ];

  return (
    <section id="education" className="scroll-mt-8">
      <ScrollReveal>
        <h2 className="text-2xl sm:text-3xl font-bold text-primary mb-4 sm:mb-6 border-b-2 border-accent pb-2">
          {t('education.title')}
        </h2>
      </ScrollReveal>
      <div className="space-y-3 sm:space-y-4">
        {education.map((item, index) => (
          <ScrollReveal key={index} delay={index * 0.1}>
            <div className="bg-white rounded-lg p-4 sm:p-6 shadow-sm border border-gray-200 hover:shadow-md transition-shadow">
              <div className="flex items-start gap-3 sm:gap-4">
                <div className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 bg-accent/10 rounded-full flex items-center justify-center">
                  <GraduationCap className="w-5 h-5 sm:w-6 sm:h-6 text-accent" />
                </div>
                <div className="flex-1">
                  <h3 className="text-lg sm:text-xl font-semibold text-primary mb-1">{item.title}</h3>
                  <p className="text-sm sm:text-base text-neutral mb-1">{item.institution}</p>
                  <span className="inline-block px-3 py-1 bg-green-100 text-green-700 text-xs sm:text-sm rounded-full">
                    {item.status}
                  </span>
                </div>
              </div>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </section>
  );
};

export default Education;
