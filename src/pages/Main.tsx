import Navbar from "../components/Navbar";
import CharacterCard from "../components/CharacterCard";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const CharacterSelect = () => {
  return (
    <div
      className="flex w-full flex-col items-center justify-center h-full text-white"
      data-aos="zoom-in"
      data-aos-duration="1000"
      data-aos-easing="linear"
    >
      <div className="w-[80%] h-[60%] px-6 py-12 sm:px-10 sm:py-16 rounded-3xl shadow-xl backdrop-filter backdrop-blur bg-gradient-to-t from-[#7a7a7a1e] to-[#e0e0e024] bg-opacity-10">
        <div className="grid gap-8 h-full">
          <div className="text-center my-auto">
            <h1 className="text-3xl font-bold">
              따끔한 말로 정신 좀 차리세요!
            </h1>
            <p className="text-muted-foreground text-lg mt-2">
              캐릭터를 선택하세요
            </p>
          </div>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
            <CharacterCard
              name={"Andrew"}
              description={"특징설명"}
              image={"https://i.ibb.co/hFy5Cbz/2024-07-02-4-08-52.png"}
            />
            <CharacterCard
              name={"현우진"}
              description={"특징설명"}
              image={"https://i.ibb.co/yBFH4tY/2024-07-02-2-53-32.png"}
            />
            <CharacterCard
              name={"전한길"}
              description={"특징설명"}
              image={"https://i.ibb.co/mhx194f/2024-07-02-2-51-19-1.png"}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

const Onboarding = () => {
  return (
    <div className="w-screen h-[90%] flex flex-col text-white items-start px-[10%] justify-around">
      <div
        className="flex flex-col w-[30%] space-y-4"
        data-aos="fade-down-right"
        data-aos-duration="1000"
        data-aos-delay="500"
        data-aos-easing="ease-in-out"
      >
        <h2 className="text-[4rem] m-0 font-bold">BrainWasher</h2>
        <h2 className="text-[2rem] m-0">
          여행가서 낭비할 시간에 밤새서 개발하고 자소서 준비하고 대충 서비스
          소개하는 내용
        </h2>
      </div>
      <div
        className="flex flex-row w-full self-end text-end space-x-10"
        data-aos="fade-up-left"
        data-aos-duration="1000"
        data-aos-delay="1000"
        data-aos-easing="ease-in-out"
      >
        <div className="flex flex-col space-y-4 justify-center w-[30%] ml-auto">
          <h2 className="text-[3rem] m-0 font-bold">독한말 솔루션</h2>
          <h2 className="text-[2rem] m-0">
            대충 특정인의 목소리로 독한말을 들을 수 있고 다운로드 하여 사용 할
            수 있다는 내용
          </h2>
        </div>
        <CharacterCard
          name="Andrew"
          description="특징설명"
          image="https://i.ibb.co/hFy5Cbz/2024-07-02-4-08-52.png"
          className="w-fit-content h-fit-content px-[5%] py-[2%]"
          imageSizeClass="w-24 h-24 lg:w-32 lg:h-32 xl:w-48 xl:h-48 2xl:w-48 2xl:h-48"
        />
      </div>
      <div
        className="flex flex-row self-center space-x-4 animate-bounce"
        data-aos="zoom-in"
        data-aos-duration="1000"
        data-aos-delay="2000"
        data-aos-easing="linear"
      >
        <p className="my-auto text-2xl">Scroll Down</p>
        <img
          src="https://i.ibb.co/cN37MBb/chevron-down.png"
          alt="Scroll Down"
          className="self-center size-10"
        />
      </div>
    </div>
  );
};

export default function Main() {
  useEffect(() => {
    AOS.init();
  });
  return (
    <div className="flex flex-col w-screen min-h-[200vh]">
      <div className="fixed top-0 left-0 w-screen h-screen bg-[url(https://i.ibb.co/s3QC5vr/3.jpg)] bg-cover bg-fixed z-10" />
      <div className="h-screen relative z-10">
        <Navbar />
        <Onboarding />
      </div>
      <div className="h-screen relative overflow-auto z-10">
        <CharacterSelect />
      </div>
    </div>
  );
}