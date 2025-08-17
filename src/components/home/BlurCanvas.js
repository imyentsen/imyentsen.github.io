import React, { useEffect } from 'react';

const blobsConfig = [
  {
    key: 'big',
    width: '38vw',
    height: '38vw',
    left: '-12vw',
    top: '-10vh',
    blur: 32,
    opacity: 0.9,
    color: 'rgba(255, 248, 167, 0.95)',
    colorMid: 'rgba(255, 255, 255, 0.94)',
    anim: `
      @keyframes bigBlobMove {
        0%   { transform: translate(0, 0) scale(1);}
        25%  { transform: translate(5vw, -19vh) scale(1.5);}
        50%  { transform: translate(2vw, 17vh) scale(0.9);}
        75%  { transform: translate(7vw, -6vh) scale(1.25);}
        100% { transform: translate(0, 0) scale(1);}
      }
    `,
    animation: 'bigBlobMove 21s cubic-bezier(0.6,0.2,0.4,0.9) infinite',
  },
  {
    key: 'small',
    width: '280px',
    height: '280px',
    left: '-5vw',
    top: '-12vh',
    blur: 22,
    opacity: 0.94,
    color: 'rgba(255, 255, 255, 0.93)',
    colorMid: 'rgba(255, 255, 255, 0.9)',
    anim: `
      @keyframes smallBlobMove {
        0%   { transform: translate(0, 0) scale(1);}
        18%  { transform: translate(7vw, -7vh) scale(1.05);}
        41%  { transform: translate(-9vw, 9vh) scale(0.97);}
        69%  { transform: translate(10vw, -5vh) scale(1.04);}
        93%  { transform: translate(-8vw, 6vh) scale(0.99);}
        100% { transform: translate(0, 0) scale(1);}
      }
    `,
    animation: 'smallBlobMove 23s cubic-bezier(0.6,0.2,0.4,0.8) infinite',
  },
];

const BlurCanvas = () => {
  useEffect(() => {
    const style = document.createElement('style');
    style.setAttribute('data-blurcanvas-keyframes', 'true');
    style.textContent = blobsConfig.map((blob) => blob.anim).join('\n');
    document.head.appendChild(style);
    return () => {
      document.head.removeChild(style);
    };
  }, []);

  return (
    <div className="relative w-full h-0">
      {/* 只在 lg 以上顯示 */}
      {blobsConfig.map((blob) => (
        <div
          key={blob.key}
          className="absolute rounded-full hidden lg:block pointer-events-none"
          style={{
            width: blob.width,
            height: blob.height,
            left: blob.left,
            top: blob.top,
            background: `radial-gradient(circle, ${blob.color} 0%, ${blob.colorMid} 50%, transparent 88%)`,
            filter: `blur(${blob.blur}px)`,
            opacity: blob.opacity,
            animation: blob.animation,
            zIndex: -1,
          }}
        />
      ))}
    </div>
  );
};

export default BlurCanvas;
