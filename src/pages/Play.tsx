import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { getTtsById } from "../api/voices.ts";

const Play: React.FC = () => {
    const location = useLocation();
    const [voice, setVoice] = useState<string | null>(null);
    const [content, setContent] = useState<string | null>(null);
    const [characterImage, setCharacterImage] = useState<string | null>(null); // character_image 추가
    const [isPlaying, setIsPlaying] = useState<boolean>(false);

    const queryParams = new URLSearchParams(location.search);
    const voiceId = parseInt(queryParams.get('v') || '', 10);

    useEffect(() => {
        const fetchVoice = async () => {
            try {
                const data = await getTtsById(voiceId);
                setVoice(data.data.audio_url); // 응답 데이터의 audio_url 설정
                setContent(data.data.content); // 응답 데이터의 content 설정
                setCharacterImage(data.data.character_image); // 응답 데이터의 character_image 설정
            } catch (error) {
                console.error("Error fetching voices:", error);
            }
        };

        fetchVoice();
    }, [voiceId]);

    const handlePlayClick = () => {
        setIsPlaying(true);
    };

    useEffect(() => {
        const interBubble = document.querySelector<HTMLDivElement>('.interactive');
        let curX = 0;
        let curY = 0;
        let tgX = 0;
        let tgY = 0;
    
        function move() {
          curX += (tgX - curX) / 20;
          curY += (tgY - curY) / 20;
          if (interBubble) {
            interBubble.style.transform = `translate(${Math.round(curX)}px, ${Math.round(curY)}px)`;
          }
          requestAnimationFrame(move);
        }
    
        function onMouseMove(event: MouseEvent) {
          tgX = event.clientX;
          tgY = event.clientY;
        }
    
        window.addEventListener('mousemove', onMouseMove);
        move();
    
        return () => {
          window.removeEventListener('mousemove', onMouseMove);
        };
      }, []);

    return (

<div className="relative flex flex-col items-center justify-center p-6" style={{ backgroundImage: "url('https://i.ibb.co/s3QC5vr/3.jpg')" }}>
  <svg xmlns="http://www.w3.org/2000/svg" className="h-0 w-0">
    <defs>
      <filter id="goo">
        <feGaussianBlur in="SourceGraphic" stdDeviation="10" result="blur" />
        <feColorMatrix
          in="blur"
          mode="matrix"
          values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -8"
          result="goo"
        />
        <feBlend in="SourceGraphic" in2="goo" />
      </filter>
    </defs>
  </svg>

  <div className="gradient-bg fixed top-0 left-0 w-screen h-screen bg-cover bg-fixed z-0 overflow-hidden bg-gradient-to-tr from-bg1 to-bg2">
    <div className="gradients-container filter-goo-blur w-full h-full">
      <div className="g1 absolute bg-[radial-gradient(circle_at_center,_rgba(theme(colors.color1),0.8)_0%,_rgba(theme(colors.color1),0)_50%)] mix-blend-hard-light w-[theme(spacing.circle-size)] h-[theme(spacing.circle-size)] top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 animate-move-vertical opacity-100"></div>
      <div className="g2 absolute bg-[radial-gradient(circle_at_center,_rgba(theme(colors.color2),0.8)_0%,_rgba(theme(colors.color2),0)_50%)] mix-blend-hard-light w-[theme(spacing.circle-size)] h-[theme(spacing.circle-size)] top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 origin-center animate-move-in-circle opacity-100"></div>
      <div className="g3 absolute bg-[radial-gradient(circle_at_center,_rgba(theme(colors.color3),0.8)_0%,_rgba(theme(colors.color3),0)_50%)] mix-blend-hard-light w-[theme(spacing.circle-size)] h-[theme(spacing.circle-size)] top-[calc(50%-40%+200px)] left-[calc(50%-40%-500px)] transform -translate-x-1/2 -translate-y-1/2 origin-[calc(50%+400px)] animate-move-in-circle opacity-100"></div>
      <div className="g4 absolute bg-[radial-gradient(circle_at_center,_rgba(theme(colors.color4),0.8)_0%,_rgba(theme(colors.color4),0)_50%)] mix-blend-hard-light w-[theme(spacing.circle-size)] h-[theme(spacing.circle-size)] top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 origin-[calc(50%-200px)] animate-move-horizontal opacity-70"></div>
      <div className="g5 absolute bg-[radial-gradient(circle_at_center,_rgba(theme(colors.color5),0.8)_0%,_rgba(theme(colors.color5),0)_50%)] mix-blend-hard-light w-[calc(80%*2)] h-[calc(80%*2)] top-[calc(50%-80%)] left-[calc(50%-80%)] transform -translate-x-1/2 -translate-y-1/2 origin-[calc(50%-800px)_calc(50%+200px)] animate-move-in-circle opacity-100"></div>
      <div className="interactive absolute bg-[radial-gradient(circle_at_center,_rgba(theme(colors.color-interactive),0.8)_0%,_rgba(theme(colors.color-interactive),0)_50%)] mix-blend-hard-light w-full h-full top-[-50%] left-[-50%] opacity-70"></div>
    </div>
  </div>

  <div className="text-container z-10 text-center mb-6 relative">
    {characterImage ? (
      <img
        src={characterImage}
        alt="Character"
        className="w-48 h-48 object-cover rounded-full shadow-lg mb-4 mx-auto"
      />
    ) : (
      <p className="text-white mb-4">캐릭터 이미지가 없습니다.</p>
    )}
    {content && <p className="text-lg text-white max-w-[70rem] mx-auto mt-10 mb-5">{content}</p>}
  </div>

  <div className="z-10 relative">
    {voice ? (
      <div>
        {!isPlaying ? (
          <button
            onClick={handlePlayClick}
            className="bg-gradient-to-r from-violet-900 to-pink-950 text-white font-bold text-xl py-4 px-10 rounded-full shadow-lg transform hover:scale-110 transition-transform duration-200 ease-in-out"
          >
            PLAY
          </button>
        ) : (
          <audio controls autoPlay>
            <source src={voice} type="audio/mpeg" />
            Your browser does not support the audio element.
          </audio>
        )}
      </div>
    ) : (
      <p className="text-white">음성 파일을 불러오는 중...</p>
    )}
  </div>
</div>
    );
};

export default Play;
