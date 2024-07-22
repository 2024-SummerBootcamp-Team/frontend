import React, { useEffect, useRef, useState } from "react";

interface AudioPlayerProps {
  audioData: Uint8Array[]; // Modified to be an array of Uint8Array
}

const AudioPlayer: React.FC<AudioPlayerProps> = ({ audioData }) => {
  const audioRef = useRef<HTMLAudioElement>(null);
  const mediaSourceRef = useRef<MediaSource | null>(null);
  const sourceBufferRef = useRef<SourceBuffer | null>(null);
  const queueRef = useRef<Uint8Array[]>([]);
  const mediaSourceOpened = useRef(false);
  const [audioSet, setAudioSet] = useState(new Set<string>());

  useEffect(() => {
    if (audioRef.current) {
      mediaSourceRef.current = new MediaSource();
      audioRef.current.src = URL.createObjectURL(mediaSourceRef.current);

      mediaSourceRef.current.addEventListener("sourceopen", () => {
        mediaSourceOpened.current = true;
        try {
          sourceBufferRef.current =
            mediaSourceRef.current!.addSourceBuffer("audio/mpeg");
          sourceBufferRef.current!.mode = "sequence"; // Sequence mode to append in order
          sourceBufferRef.current!.addEventListener(
            "updateend",
            appendToBuffer,
          );
          appendToBuffer(); // Try to append the buffer when the source is opened
        } catch (error) {
          console.error("Error setting up MediaSource:", error);
        }
      });
    }

    return () => {
      if (mediaSourceRef.current) {
        mediaSourceRef.current.removeEventListener(
          "sourceopen",
          appendToBuffer,
        );
      }
    };
  }, []);

  useEffect(() => {
    if (mediaSourceOpened.current && audioData.length > 0) {
      const newAudioData = audioData.filter((data) => {
        const dataString = Array.from(data).join(",");
        if (!audioSet.has(dataString)) {
          audioSet.add(dataString);
          return true;
        }
        return false;
      });

      queueRef.current.push(...newAudioData);
      appendToBuffer();
    }
  }, [audioData]);

  const appendToBuffer = () => {
    if (
      sourceBufferRef.current &&
      !sourceBufferRef.current.updating &&
      queueRef.current.length > 0
    ) {
      const chunk = queueRef.current.shift()!;
      try {
        sourceBufferRef.current.appendBuffer(chunk);
      } catch (error) {
        console.error("Failed to append buffer:", error);
      }

      if (audioRef.current && audioRef.current.paused) {
        audioRef.current.play().catch((error) => {
          console.error("Failed to start audio playback:", error.message);
        });
      }
    }
  };

  return <audio ref={audioRef} controls hidden />;
};

export default AudioPlayer;
