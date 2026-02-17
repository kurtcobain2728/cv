import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Maximize2 } from 'lucide-react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import { useTranslation } from 'react-i18next';
import TechBadge from './TechBadge';
import ImageViewer from './ImageViewer';

const ProjectCard = ({ project }) => {
  const { t } = useTranslation();
  const [currentImage, setCurrentImage] = useState(0);
  const [isViewerOpen, setIsViewerOpen] = useState(false);

  const nextImage = () => {
    setCurrentImage((prev) => (prev + 1) % project.images.length);
  };

  const prevImage = () => {
    setCurrentImage((prev) => (prev - 1 + project.images.length) % project.images.length);
  };

  const openViewer = () => {
    setIsViewerOpen(true);
  };

  const closeViewer = () => {
    setIsViewerOpen(false);
  };

  const viewerNext = () => {
    setCurrentImage((prev) => (prev + 1) % project.images.length);
  };

  const viewerPrev = () => {
    setCurrentImage((prev) => (prev - 1 + project.images.length) % project.images.length);
  };

  return (
    <>
      <div className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-200 hover:shadow-lg transition-shadow">
        <div className="p-4 sm:p-6">
          <h3 className="text-xl sm:text-2xl font-bold text-primary mb-2">{project.title}</h3>
          <p className="text-sm text-muted mb-4">{project.subtitle}</p>
          
          {/* Carousel */}
          <div className="relative bg-gray-100 rounded-lg overflow-hidden mb-4 sm:mb-6 group cursor-pointer" onClick={openViewer}>
            <div className="aspect-video flex items-center justify-center bg-gray-100">
              <LazyLoadImage
                src={project.images[currentImage]} 
                alt={`${project.title} - ${currentImage + 1}`}
                className="w-full h-full object-contain"
                effect="blur"
                wrapperClassName="w-full h-full flex items-center justify-center"
              />
            </div>

            <button
              className="absolute top-2 right-2 bg-white/90 hover:bg-white p-2 rounded-full shadow-lg opacity-0 group-hover:opacity-100 transition-opacity z-10"
              onClick={(e) => {
                e.stopPropagation();
                openViewer();
              }}
              aria-label="Ver en grande"
            >
              <Maximize2 className="w-4 h-4 text-primary" />
            </button>
            
            {project.images.length > 1 && (
              <>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    prevImage();
                  }}
                  className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white p-2 rounded-full shadow-lg sm:opacity-0 sm:group-hover:opacity-100 transition-opacity"
                  aria-label="Imagen anterior"
                >
                  <ChevronLeft className="w-5 h-5 text-primary" />
                </button>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    nextImage();
                  }}
                  className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white p-2 rounded-full shadow-lg sm:opacity-0 sm:group-hover:opacity-100 transition-opacity"
                  aria-label="Siguiente imagen"
                >
                  <ChevronRight className="w-5 h-5 text-primary" />
                </button>
              
              <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-2">
                {project.images.map((_, index) => (
                  <button
                    key={index}
                    onClick={(e) => {
                      e.stopPropagation();
                      setCurrentImage(index);
                    }}
                    className={`w-2 h-2 rounded-full transition-all ${
                      index === currentImage ? 'bg-white w-6' : 'bg-white/60'
                    }`}
                    aria-label={`Ir a imagen ${index + 1}`}
                  />
                ))}
              </div>
            </>
          )}
        </div>

        <p className="text-base sm:text-lg text-neutral leading-relaxed mb-4 sm:mb-6">{project.description}</p>
        
        <div>
          <h4 className="text-sm font-semibold text-primary mb-3">{t('projects.technologies')}</h4>
          <div className="flex flex-wrap gap-2 sm:gap-3">
            {project.technologies.map((tech) => (
              <TechBadge key={tech} tech={tech} />
            ))}
          </div>
        </div>
      </div>
    </div>

    {isViewerOpen && (
      <ImageViewer
        images={project.images}
        currentIndex={currentImage}
        onClose={closeViewer}
        onNext={viewerNext}
        onPrev={viewerPrev}
        projectTitle={project.title}
      />
    )}
  </>
  );
};

export default ProjectCard;
