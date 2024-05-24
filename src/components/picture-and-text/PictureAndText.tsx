import React from 'react';
import './PictureAndText.scss';

interface PictureAndTextProps {
  children: React.ReactNode;
  picturePosition?: 'left' | 'right';
}

const PictureAndText: React.FC<PictureAndTextProps> = ({
  children,
  picturePosition = 'left'
}) => {
  const picturePositionClass =
    picturePosition === 'left'
      ? 'picture-and-text--left'
      : 'picture-and-text--right';
  return (
    <div className={'picture-and-text ' + picturePositionClass}>{children}</div>
  );
};

export default PictureAndText;
