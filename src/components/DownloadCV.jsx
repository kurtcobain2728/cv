import React from 'react';
import { useTranslation } from 'react-i18next';
import { Download } from 'lucide-react';
import { jsPDF } from 'jspdf';

const DownloadCV = () => {
  const { t, i18n } = useTranslation();

  const generatePDF = () => {
    const doc = new jsPDF();
    const pageWidth = doc.internal.pageSize.getWidth();
    const margin = 20;
    let yPosition = 20;

    // Helper function to add text
    const addText = (text, fontSize, isBold = false, align = 'left') => {
      doc.setFontSize(fontSize);
      doc.setFont('helvetica', isBold ? 'bold' : 'normal');
      
      if (align === 'center') {
        doc.text(text, pageWidth / 2, yPosition, { align: 'center' });
      } else {
        doc.text(text, margin, yPosition);
      }
      yPosition += fontSize / 2 + 2;
    };

    const addLine = () => {
      doc.setDrawColor(45, 74, 83);
      doc.line(margin, yPosition, pageWidth - margin, yPosition);
      yPosition += 8;
    };

    const checkPageBreak = (spaceNeeded = 20) => {
      if (yPosition + spaceNeeded > doc.internal.pageSize.getHeight() - 20) {
        doc.addPage();
        yPosition = 20;
      }
    };

    // Add profile image
    const img = new Image();
    img.src = '/img/perfil.jpg';
    img.onload = () => {
      // Add circular image
      const imgSize = 30;
      const imgX = margin;
      const imgY = yPosition;
      
      doc.addImage(img, 'JPEG', imgX, imgY, imgSize, imgSize);
      
      // Header text next to image
      const textX = imgX + imgSize + 10;
      doc.setFontSize(24);
      doc.setFont('helvetica', 'bold');
      doc.text(t('header.name'), textX, imgY + 12);
      
      doc.setFontSize(14);
      doc.setFont('helvetica', 'normal');
      doc.text(t('header.title'), textX, imgY + 22);
      
      yPosition = imgY + imgSize + 10;
      addLine();

      // About
      checkPageBreak(40);
      addText(t('about.title'), 16, true);
      yPosition += 2;
      
      const aboutText = t('about.description');
      const splitAbout = doc.splitTextToSize(aboutText, pageWidth - 2 * margin);
      doc.setFontSize(10);
      doc.text(splitAbout, margin, yPosition);
      yPosition += splitAbout.length * 5 + 10;

      // Projects
      checkPageBreak(40);
      addText(i18n.language === 'es' ? 'Experiencia / Proyectos' : 'Experience / Projects', 16, true);
      yPosition += 2;

      const projects = [
        {
          title: t('projects.project1.title'),
          tech: 'React.js, TypeScript, PostgreSQL'
        },
        {
          title: t('projects.project2.title'),
          tech: 'React Native, TypeScript, API REST'
        },
        {
          title: t('projects.project3.title'),
          tech: 'React Native, TypeScript, SQLite'
        }
      ];

      projects.forEach((project, index) => {
        checkPageBreak(25);
        addText(`${index + 1}. ${project.title}`, 12, true);
        doc.setFontSize(9);
        doc.setTextColor(100, 100, 100);
        doc.text(`${t('projects.technologies')} ${project.tech}`, margin + 5, yPosition);
        doc.setTextColor(0, 0, 0);
        yPosition += 10;
      });

      // Education
      checkPageBreak(40);
      addText(t('education.title'), 16, true);
      yPosition += 2;

      addText(t('education.degree1.title'), 12, true);
      doc.setFontSize(10);
      doc.text(t('education.degree1.institution'), margin + 5, yPosition);
      yPosition += 5;
      doc.setFontSize(9);
      doc.setTextColor(0, 128, 0);
      doc.text(t('education.degree1.status'), margin + 5, yPosition);
      doc.setTextColor(0, 0, 0);
      yPosition += 10;

      addText(t('education.degree2.title'), 12, true);
      doc.setFontSize(10);
      doc.text(t('education.degree2.institution'), margin + 5, yPosition);
      yPosition += 5;
      doc.setFontSize(9);
      doc.setTextColor(0, 128, 0);
      doc.text(t('education.degree2.status'), margin + 5, yPosition);
      doc.setTextColor(0, 0, 0);
      yPosition += 10;

      // Contact
      checkPageBreak(30);
      addText(t('contact.title'), 16, true);
      yPosition += 2;
      
      doc.setFontSize(10);
      doc.text('Email: argenistorrealba28112001@gmail.com', margin, yPosition);
      yPosition += 6;
      doc.text(`${t('contact.whatsapp')}: +58 412-081-4879`, margin, yPosition);
      yPosition += 6;
      doc.text('LinkedIn: www.linkedin.com/in/argenis-torrealba-hernández-6060b6270', margin, yPosition);
      yPosition += 6;
      doc.text('GitHub: https://github.com/kurtcobain2728', margin, yPosition);

      // Save PDF
      const fileName = `CV_${t('header.name').replace(' ', '_')}_${i18n.language.toUpperCase()}.pdf`;
      doc.save(fileName);
    };
  };

  return (
    <button
      onClick={generatePDF}
      className="flex items-center gap-2 bg-accent hover:bg-accent/90 text-white px-6 py-3 rounded-lg shadow-lg hover:shadow-xl transition-all font-medium"
    >
      <Download className="w-5 h-5" />
      <span>{i18n.language === 'es' ? 'Descargar CV' : 'Download CV'}</span>
    </button>
  );
};

export default DownloadCV;
