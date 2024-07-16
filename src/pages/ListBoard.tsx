// App.tsx
import React, { useState, useEffect } from "react";
import { getAllTts } from "../api/voices";
import { getAllImages } from "../api/images";

const App: React.FC = () => {
  // 기존 content 배열 삭제

  const [showTts, setShowTts] = useState(true);
  const [voices, setVoices] = useState([]);
  const [audio, setAudio] = useState<HTMLAudioElement | null>(null);
  const [Images, setImages] = useState([]);

  useEffect(() => {
    const fetchVoices = async () => {
      try {
        const data = await getAllTts();
        setVoices(data.data.voices); // 응답 데이터의 data 배열 설정
        console.log(data.data);
      } catch (error) {
        console.error("Error fetching voices:", error);
      }
    };

    fetchVoices();
  }, []);

  const handlePlayAudio = async (audio_url) => {
    try {
      if (audio) {
        audio.pause();
      }
      const newAudio = new Audio(audio_url);
      setAudio(newAudio);
      newAudio.play();
      console.log(audio);
    } catch (error) {
      console.error("Error playing audio:", error);
    }
  };

  useEffect(() => {
    async function fetchImages() {
      try {
        const response = await getAllImages();
        setImages(response.data.images);
        console.log(response);
      } catch (error) {
        console.error("Error fetching images:", error);
      }
    }

    fetchImages();
  }, []);

  return (
    <div
      className="relative w-full h-screen bg-cover bg-center bg-fixed"
      style={{ backgroundImage: "url('https://i.ibb.co/s3QC5vr/3.jpg')" }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-30 text-white overflow-y-auto">
        <div className="flex flex-col items-start p-6 px-[5%] ">
          <div className="flex flex-row">
            <img
              src="https://i.postimg.cc/rsr08G5r/Group-59.png"
              alt="Icon"
              className="w-16 h-16 my-auto"
            />

            <h1 className="text-4xl font-bold m-10 ">저장한 음성 및 이미지</h1>
          </div>
          <div
            role="tablist"
            className="tabs tabs-lifted bg-glass w-[100%] mt-5 flex justify-center"
          >
            <a
              role="tab"
              className={`tab h-12 w-[50%] ${
                showTts
                  ? "tab-active [--tab-bg:rgba(255,255,255,0.17)] [--tab-border:none]"
                  : " [--tab-border:none]"
              } text-white text-xl bg-glass text-center`}
              onClick={() => setShowTts(true)}
            >
              TTS
            </a>
            <a
              role="tab"
              className={`tab h-12 w-[50%] ${
                !showTts
                  ? "tab-active [--tab-bg:rgba(255,255,255,0.17)] [--tab-border:none]"
                  : " [--tab-border:none]"
              } text-white text-xl bg-glass text-center`}
              onClick={() => setShowTts(false)}
            >
              이미지
            </a>
          </div>

          <div className="bg-white bg-opacity-25 p-6 rounded-b-lg pb-[3%] mb-[10%] shadow-md w-full h-full ">
            <div className="flex justify-center space-x-8 mb-8 "></div>
            {showTts ? (
              <div className="grid grid-cols-2 gap-6 mx-[2%]">
                {voices.map((item, index) => (
                  <div
                    key={index}
                    className="bg-gradient-to-b from-[rgba(224,224,224,0.2)] to-[rgba(71,91,161,0.2)] shadow-lg shadow-black/25 backdrop-blur-[3px] rounded-[25px] bg-opacity-20  p-6 flex items-center justify-between text-white"
                  >
                    <img
                      // src={item.leftImage}
                      alt="Profile"
                      className="w-16 h-18 rounded-full"
                    />
                    <div className="flex flex-col flex-grow mx-4">
                      <span className="text-sm text-gray-300">
                        {item.created_at}
                      </span>
                      <p className="text-left mt-2">{item.content}</p>
                    </div>
                    <div className="flex space-x-2">
                      <button
                        className="w-auto h-auto text-white rounded"
                        onClick={() => handlePlayAudio(item.audio_url)}
                      >
                        <svg
                          width="45"
                          height="45"
                          viewBox="0 0 45 45"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <g filter="url(#filter0_d_599_393)">
                            <circle
                              cx="21.5"
                              cy="18.6"
                              r="18.5"
                              fill="url(#paint0_linear_599_393)"
                            />
                          </g>
                          <g filter="url(#filter1_d_599_393)">
                            <path
                              d="M18.3441 10.9871C17.2886 10.3662 15.958 11.1273 15.958 12.3519V22.6485C15.958 23.8731 17.2886 24.6341 18.3441 24.0133L27.0963 18.8649C28.137 18.2527 28.137 16.7477 27.0963 16.1355L18.3441 10.9871Z"
                              fill="white"
                            />
                          </g>
                          <defs>
                            <filter
                              id="filter0_d_599_393"
                              x="0"
                              y="0"
                              width="43"
                              height="43"
                              filterUnits="userSpaceOnUse"
                              color-interpolation-filters="sRGB"
                            >
                              <feFlood
                                flood-opacity="0"
                                result="BackgroundImageFix"
                              />
                              <feColorMatrix
                                in="SourceAlpha"
                                type="matrix"
                                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                                result="hardAlpha"
                              />
                              <feOffset dy="4" />
                              <feGaussianBlur stdDeviation="2" />
                              <feComposite in2="hardAlpha" operator="out" />
                              <feColorMatrix
                                type="matrix"
                                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
                              />
                              <feBlend
                                mode="normal"
                                in2="BackgroundImageFix"
                                result="effect1_dropShadow_599_393"
                              />
                              <feBlend
                                mode="normal"
                                in="SourceGraphic"
                                in2="effect1_dropShadow_599_393"
                                result="shape"
                              />
                            </filter>
                            <filter
                              id="filter1_d_599_393"
                              x="8"
                              y="8"
                              width="27"
                              height="27"
                              filterUnits="userSpaceOnUse"
                              color-interpolation-filters="sRGB"
                            >
                              <feFlood
                                flood-opacity="0"
                                result="BackgroundImageFix"
                              />
                              <feColorMatrix
                                in="SourceAlpha"
                                type="matrix"
                                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                                result="hardAlpha"
                              />
                              <feOffset dy="4" />
                              <feGaussianBlur stdDeviation="2" />
                              <feComposite in2="hardAlpha" operator="out" />
                              <feColorMatrix
                                type="matrix"
                                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
                              />
                              <feBlend
                                mode="normal"
                                in2="BackgroundImageFix"
                                result="effect1_dropShadow_599_393"
                              />
                              <feBlend
                                mode="normal"
                                in="SourceGraphic"
                                in2="effect1_dropShadow_599_393"
                                result="shape"
                              />
                            </filter>
                            <linearGradient
                              id="paint0_linear_599_393"
                              x1="21.5"
                              y1="0"
                              x2="21.5"
                              y2="35"
                              gradientUnits="userSpaceOnUse"
                            >
                              <stop stop-color="#631C43" />
                              <stop offset="1" stop-color="#C93988" />
                            </linearGradient>
                          </defs>
                        </svg>
                      </button>
                      <button
                        className="w-auto h-auto text-white rounded"
                        onClick={() => handlePlayAudio(voice.id)}
                      >
                        <svg
                          width="45"
                          height="45"
                          viewBox="0 0 45 45"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <g filter="url(#filter0_d_599_396)">
                            <circle
                              cx="22.5"
                              cy="18.5"
                              r="18.5"
                              fill="url(#paint0_linear_599_396)"
                            />
                          </g>
                          <g filter="url(#filter1_d_599_396)">
                            <path
                              d="M24.8752 13.75L22.5002 11.375M22.5002 11.375L20.1252 13.75M22.5002 11.375V20.875M25.6668 16.9167H26.0418C27.1464 16.9167 28.0418 17.8121 28.0418 18.9167V22.8333C28.0418 23.9379 27.1464 24.8333 26.0418 24.8333H18.9585C17.8539 24.8333 16.9585 23.9379 16.9585 22.8333V18.9167C16.9585 17.8121 17.8539 16.9167 18.9585 16.9167H19.3335"
                              stroke="white"
                              stroke-width="2"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            />
                          </g>
                          <defs>
                            <filter
                              id="filter0_d_599_396"
                              x="0"
                              y="0"
                              width="45"
                              height="45"
                              filterUnits="userSpaceOnUse"
                              color-interpolation-filters="sRGB"
                            >
                              <feFlood
                                flood-opacity="0"
                                result="BackgroundImageFix"
                              />
                              <feColorMatrix
                                in="SourceAlpha"
                                type="matrix"
                                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                                result="hardAlpha"
                              />
                              <feOffset dy="4" />
                              <feGaussianBlur stdDeviation="2" />
                              <feComposite in2="hardAlpha" operator="out" />
                              <feColorMatrix
                                type="matrix"
                                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
                              />
                              <feBlend
                                mode="normal"
                                in2="BackgroundImageFix"
                                result="effect1_dropShadow_599_396"
                              />
                              <feBlend
                                mode="normal"
                                in="SourceGraphic"
                                in2="effect1_dropShadow_599_396"
                                result="shape"
                              />
                            </filter>
                            <filter
                              id="filter1_d_599_396"
                              x="9"
                              y="9"
                              width="27"
                              height="27"
                              filterUnits="userSpaceOnUse"
                              color-interpolation-filters="sRGB"
                            >
                              <feFlood
                                flood-opacity="0"
                                result="BackgroundImageFix"
                              />
                              <feColorMatrix
                                in="SourceAlpha"
                                type="matrix"
                                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                                result="hardAlpha"
                              />
                              <feOffset dy="4" />
                              <feGaussianBlur stdDeviation="2" />
                              <feComposite in2="hardAlpha" operator="out" />
                              <feColorMatrix
                                type="matrix"
                                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
                              />
                              <feBlend
                                mode="normal"
                                in2="BackgroundImageFix"
                                result="effect1_dropShadow_599_396"
                              />
                              <feBlend
                                mode="normal"
                                in="SourceGraphic"
                                in2="effect1_dropShadow_599_396"
                                result="shape"
                              />
                            </filter>
                            <linearGradient
                              id="paint0_linear_599_396"
                              x1="22.5"
                              y1="0"
                              x2="22.5"
                              y2="37"
                              gradientUnits="userSpaceOnUse"
                            >
                              <stop stop-color="#631C43" />
                              <stop offset="1" stop-color="#C93988" />
                            </linearGradient>
                          </defs>
                        </svg>
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="grid grid-cols-5 gap-5 gap-y-9">
                {Images.slice(0, 10).map((image, index) => (
                  <div
                    key={index}
                    className=" w-[260px] bg-white bg-opacity-10  rounded-[20px] shadow-mdrounded-10g shadow-black/25 overflow-hidden mx-[10%] shadow-xl"
                  >
                    <div className="relative h-0 pb-[100%] mb-15 ">
                      <img
                        src={image.image_url} // 발췌이미지의 URL 사용
                        alt={`Image ${index + 1}`}
                        className="absolute top-0 left-0 w-full h-full  object-cover"
                      />
                    </div>
                    <div className="px-4 flex">
                      <div className="w-full h-20 p-2 text-white">
                        {image.content} {/* 발췌이미지에 대한 설명 표시 */}
                      </div>
                      <button className="w-auto h-auto text-white rounded">
                        <img
                          src="https://i.postimg.cc/J7gRw6MT/Group-60.png"
                          alt="Button Icon"
                        />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
