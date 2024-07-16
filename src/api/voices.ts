import axiosInstance from "./axios";

// 모든 TTS 목록 조회
const getAllTts = async () => {
  try {
    const response = await axiosInstance.get(`/voices`);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

// 채팅방 별 목소리 목록 조회
const getTtsByChatId = async (chatId: number) => {
  try {
    const response = await axiosInstance.get(`/voices/chat/${chatId}`);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

// 저장한 목소리 상세 조회
const getTtsById = async (voiceId: number) => {
  try {
    const response = await axiosInstance.get(`/voices/${voiceId}`);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

// 저장한 목소리 소프트 삭제
const softDeleteTts = async (voiceId: number) => {
  try {
    const response = await axiosInstance.put(`/voices/${voiceId}`, {
      deleted: true,
    });
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

// 저장한 목소리 하드 삭제
const deleteTts = async (voiceId: number) => {
  try {
    const response = await axiosInstance.delete(`/voices/${voiceId}`);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

// 사용자가 선택한 목소리 저장
const saveSelectedTts = async (bubbleId: number, selectedTtsData: string) => {
  try {
    const response = await axiosInstance.post(
      `/voices/${bubbleId}`,
      selectedTtsData,
    );
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

// 특정 TTS 저장
const postTts = async (bubble_id: string | undefined) => {
  try {
    const response = await axiosInstance.post(`/voices/${bubble_id}`, {});
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

// 채팅방별 TTS 목록 조회
const getRoomTts = async (chat_id: number | null) => {
  try {
    const response = await axiosInstance.get(`/voices/chat/${chat_id}`);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

export {
  getAllTts,
  postTts,
  getRoomTts,
  getTtsByChatId,
  getTtsById,
  softDeleteTts,
  deleteTts,
  saveSelectedTts,
};
