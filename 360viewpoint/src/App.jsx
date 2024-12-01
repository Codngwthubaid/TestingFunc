import React, { useState, useEffect, useRef } from 'react';
import table from "../public/table.png"

const ImageRotator3D = () => {
  const [rotation, setRotation] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef(null);

  const handleMouseDown = () => {
    setIsDragging(true);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;

    const container = containerRef.current;
    const rect = container.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;

    const deltaX = e.clientX - centerX;
    const deltaY = e.clientY - centerY;

    setRotation({
      y: (deltaX / rect.width) * 180,
      x: -(deltaY / rect.height) * 180,
    });
  };

  useEffect(() => {
    document.addEventListener('mouseup', handleMouseUp);
    document.addEventListener('mousemove', handleMouseMove);

    return () => {
      document.removeEventListener('mouseup', handleMouseUp);
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, [isDragging]);

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 p-4">
      <div 
        ref={containerRef}
        className="bg-white p-8 rounded-lg shadow-md w-64 h-64 cursor-move"
        onMouseDown={handleMouseDown}
      >
        <div className="w-full h-full perspective-1000">
          <div 
            className="w-full h-full"
            style={{ 
              transform: `rotateX(${rotation.x}deg) rotateY(${rotation.y}deg)`,
              transition: isDragging ? 'none' : 'transform 0.3s ease'
            }}
          >
            <img
              src={table}
              alt="3D Rotatable image"
              className="w-full h-full object-cover rounded-md"
              draggable="false"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImageRotator3D;

