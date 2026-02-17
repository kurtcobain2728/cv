import React from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import SkeletonLoader from './SkeletonLoader';

const LazyImage = ({ src, alt, className, onClick, style, onMouseDown, onTouchStart, onTouchMove, onTouchEnd, draggable = false, imageRef }) => {
  return (
    <LazyLoadImage
      src={src}
      alt={alt}
      className={className}
      effect="blur"
      onClick={onClick}
      style={style}
      onMouseDown={onMouseDown}
      onTouchStart={onTouchStart}
      onTouchMove={onTouchMove}
      onTouchEnd={onTouchEnd}
      draggable={draggable}
      wrapperClassName="w-full h-full flex items-center justify-center"
      placeholder={<SkeletonLoader type="image" className="w-full h-full" />}
    />
  );
};

export default LazyImage;
