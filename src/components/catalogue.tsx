import Card from './card';
import '../App.css';
import React from 'react';

interface CarouselRowProps {
  images: string[];
  direction: 'left' | 'right';
  // A unique key for the row to help React with rendering lists
  rowKey: string; 
}

const CarouselRow: React.FC<CarouselRowProps> = ({ images, direction, rowKey }) => {
  const total = images.length;
  const axisClass = direction === 'right' ? 'carousel-axis-r' : 'carousel-axis-l';

  return (
    <div className='carousel-container'>
      <div className={`carousel-axis ${axisClass}`}>
        {/* Render posts, arms, and cards based on the number of images */}
        {images.map((image, index) => (
          <React.Fragment key={`${rowKey}-item-${index}`}>
            <div className='static-hanger-post' style={{ '--i': index, '--total': total } as React.CSSProperties}></div>
            <div className='hanger-arm' style={{ '--i': index, '--total': total } as React.CSSProperties}></div>
            <Card background={image} style={{ '--i': index, '--total': total } as React.CSSProperties} />
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default function Catalogue(){
    const imageNames =["image (1).jpg", "image (2).jpg", "image (3).jpg", "image (4).jpg", "image (5).jpg", "image (6).jpg", "image (7).jpg", "image (8).jpg", "image (9).jpg", "image (10).jpg", "image (11).jpg", "image (12).jpg", "image (13).jpg", "image (14).jpg", "image (15).jpg", "image (16).jpg", "image (17).jpg", "image (18).jpg", "image (19).jpg", "image (20).jpg", "image (21).jpg", "image (22).jpg", "image (23).jpg", "image (24).jpg", "image (25).jpg", "image (26).jpg", "image (27).jpg", "image (28).jpg", "image (29).jpg", "image (30).jpg", "image (31).jpg", "image (32).jpg", "image (33).jpg", "image (34).jpg", "image (35).jpg", "image (36).jpg", "image (37).jpg", "image (38).jpg", "image (39).jpg", "image (40).jpg", "image (41).jpg", "image (42).jpg", "image (43).jpg", "image (44).jpg", "image (45).jpg", "image (46).jpg", "image (47).jpg", "image (48).jpg", "image (49).jpg", "image (50).jpg"];
    
    const rows = [
      { images: imageNames.slice(0, 15), direction: 'right' as const },
      { images: imageNames.slice(15, 30), direction: 'left' as const },
      { images: imageNames.slice(30, 45), direction: 'right' as const },
    ];

    return(
        <div className='hanger-scene'>
          {rows.map((row, index) => (
            <CarouselRow key={`row-${index}`} rowKey={`row-${index}`} images={row.images} direction={row.direction} />
          ))}
        </div>
    )
}