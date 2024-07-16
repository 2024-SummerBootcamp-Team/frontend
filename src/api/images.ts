import axiosInstance from "./axios";

// 발췌 이미지 데이터의 타입 정의
interface getAllImages {
  id: number;
  imageUrl: string;
  description: string;
  createdAt: string;
}

// 모든 발췌이미지 목록 조회
const getAllImages = async () => {
  try {
    const response = await axiosInstance.get(`/images`);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

// 채팅방 별 발췌이미지 목록 조회
const getChatroomImages = async (chatroomId: number) => {
  try {
    const response = await axiosInstance.get(`/chatrooms/${chatroomId}/images`);
    return response.data;
  } catch (error) {
    console.error(
      `Error fetching extracted images for chatroom ${chatroomId}:`,
      error
    );
    throw error;
  }
};

// 발췌이미지 상세 조회
const getChatroomImageById = async (chatroomId: number, imageId: number) => {
  try {
    const response = await axiosInstance.get(
      `/chatrooms/${chatroomId}/images/${imageId}`
    );
    return response.data;
  } catch (error) {
    console.error(
      `Error fetching extracted image ${imageId} for chatroom ${chatroomId}:`,
      error
    );
    throw error;
  }
};

// 발췌이미지 저장
const saveChatroomImage = async (chatroomId: number, imageData: number) => {
  try {
    const response = await axiosInstance.post(
      `/chatrooms/${chatroomId}/images`,
      imageData
    );
    return response.data;
  } catch (error) {
    console.error(
      `Error saving extracted image for chatroom ${chatroomId}:`,
      error
    );
    throw error;
  }
};

//발췌이미지 소프트 삭제
const softDeleteImage = async (imageId: number) => {
  try {
    const response = await axiosInstance.put(`/images/${imageId}`, {
      deleted: true,
    });
    return response.data;
  } catch (error) {
    console.error(`Error soft deleting extracted image ${imageId}:`, error);
    throw error;
  }
};

//발췌이미지 하드 삭제
const hardDeleteImage = async (imageId: number) => {
  try {
    const response = await axiosInstance.delete(`/extracted-images/${imageId}`);
    return response.data;
  } catch (error) {
    console.error(`Error hard deleting extracted image ${imageId}:`, error);
    throw error;
  }
};

export {
  getAllImages,
  getChatroomImages,
  getChatroomImageById,
  saveChatroomImage,
  softDeleteImage,
  hardDeleteImage,
};
