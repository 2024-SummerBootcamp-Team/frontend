import React, { useEffect, useState, useRef } from "react";
import { useLocation } from "react-router-dom";
import { getTtsById } from "../api/voices.ts";
import { Link } from "react-router-dom";

const Play: React.FC = () => {
  const location = useLocation();
  const [voice, setVoice] = useState<string | null>(null);
  const [content, setContent] = useState<string | null>(null);
  const [characterImage, setCharacterImage] = useState<string | null>(null);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const queryParams = new URLSearchParams(location.search);
  const voiceId = parseInt(queryParams.get("v") || "", 10);

  useEffect(() => {
    const fetchVoice = async () => {
      try {
        const data = await getTtsById(voiceId);
        setVoice(data.data.audio_url);
        setContent(data.data.content);
        setCharacterImage(data.data.character_image);
      } catch (error) {
        console.error("Error fetching voices:", error);
      }
    };

    fetchVoice();
  }, [voiceId]);

  const handlePlayClick = () => {
    if (audioRef.current) {
      audioRef.current.play();
    }
    setIsPlaying(true);
  };

  const handlePauseClick = () => {
    if (audioRef.current) {
      audioRef.current.pause();
    }
    setIsPlaying(false);
  };

  return (
    <div className="relative w-full h-screen flex flex-col items-center justify-center p-6">
      <div className="fixed top-0 left-0 w-screen h-screen bg-[url(https://i.ibb.co/W5LP6yn/Brain-Wahser.png)] bg-cover bg-fixed z-0 transform scale-y-[-1]" />
      <div className="absolute top-0 left-0 flex flex-col items-start px-[10%] z-10">
        <div className="flex flex-row">
          <Link to="/" className="inline-block mt-3">
            <img
              alt="Brain Washer logo"
              src="https://i.ibb.co/Mk5gYZq/brainwasher-logo-text.png"
              className="hidden xl:inline-block"
            />
          </Link>
        </div>
      </div>

      <div className="text-center mb-6 z-10">
        {characterImage ? (
          <img
            src={characterImage}
            alt="Character"
            className="w-48 h-48 object-cover rounded-full shadow-lg mb-1 xl:mb-4 mx-auto"
          />
        ) : (
          <p className="text-white mb-4">캐릭터 이미지가 없습니다.</p>
        )}
      </div>

      <div className="flex flex-col items-center space-y-4 mb-6 z-10">
        {voice ? (
          <div className="flex items-center space-x-4">
            {!isPlaying ? (
              <button
                onClick={handlePlayClick}
                className="bg-gradient-to-r from-violet-900 to-pink-950 text-white font-bold text-xl py-4 px-10 rounded-full shadow-lg transform hover:scale-110 transition-transform duration-200 ease-in-out"
              >
                PLAY
              </button>
            ) : (
              <div className="flex items-center space-x-4">
                <button
                  onClick={handlePauseClick}
                  className="bg-gradient-to-r from-red-900 to-red-950 text-white font-bold text-xl py-4 px-10 rounded-full shadow-lg transform hover:scale-110 transition-transform duration-200 ease-in-out"
                >
                  PAUSE
                </button>
                <audio ref={audioRef} autoPlay className="hidden">
                  <source src={voice} type="audio/mpeg" />
                  Your browser does not support the audio element.
                </audio>
              </div>
            )}
            <a
            href={voice}
            download={`voice_${voiceId}.mp3`}
            className="bg-gradient-to-r from-violet-900 to-pink-950 text-white font-bold text-2xl p-4 rounded-full shadow-lg flex items-center justify-center transform hover:scale-110 transition-transform duration-200 ease-in-out"
          >
            <svg
              className="w-8 h-8"
              width="45"
              height="45"
              viewBox="0 0 45 45"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g transform="scale(1.5) translate(-7.5, -7.5)">
              <path
                d="M28.4168 20.9999L23.0002 26.4166M23.0002 26.4166L17.5835 20.9999M23.0002 26.4166V11.3333M28.4168 29.6666H17.5835"
                stroke="white"
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
                transform="translate(0, 2)"
              />
            </g>
              <defs>
                <filter
                  id="filter0_d_924_519"
                  x="0"
                  y="0"
                  width="45"
                  height="45"
                  filterUnits="userSpaceOnUse"
                  colorInterpolationFilters="sRGB"
                >
                  <feFlood floodOpacity="0" result="BackgroundImageFix" />
                  <feColorMatrix
                    in="SourceAlpha"
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                    result="hardAlpha"
                  />
                  <feOffset dy="4" />
                  <feGaussianBlur stdDeviation="2" />
                  <feComposite in2="hardAlpha" operator="out" />
                  <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
                  <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_924_519" />
                  <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_924_519" result="shape" />
                </filter>
              </defs>
            </svg>
          </a>


          </div>
        ) : (
          <p className="text-white">음성 파일을 불러오는 중...</p>
        )}
      </div>

      {content && (
        <div className="mt-1 xl:mt-5 text-center max-w-[90%] xl:max-w-[70rem] mx-auto p-8 bg-white bg-opacity-10 rounded-2xl shadow-lg z-10">
          <p className="text-lg leading-relaxed xl:text-lg text-white">{content}</p>
        </div>
      )}
    </div>
  );
};

export default Play;
