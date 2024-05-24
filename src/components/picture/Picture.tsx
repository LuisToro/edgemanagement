import React from 'react';
import './Picture.scss';

interface PictureProps {
  src: string;
  alt: string;
}

const Picture: React.FC<PictureProps> = (props) => {
  return (
    <div className="picture-component">
      <img className="picture-component__img" src={props.src} alt={props.alt} />
    </div>
  );
};

export default Picture;
