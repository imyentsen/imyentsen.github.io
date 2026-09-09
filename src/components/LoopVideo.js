import React, { useEffect, useRef, useState } from "react";
import { GatsbyImage } from "gatsby-plugin-image";

// 判斷使用者當下是否應該看到自動循環影片：
// 尊重「減少動態」的作業系統設定，以及瀏覽器回報的省流量模式（Data Saver）。
// 兩者只要有一個成立，就永遠只顯示靜態圖片，不載入影片。
function shouldPlayVideo() {
  if (typeof window === "undefined") return false;

  const prefersReducedMotion =
    window.matchMedia &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  const saveData =
    typeof navigator !== "undefined" &&
    navigator.connection &&
    navigator.connection.saveData;

  return !prefersReducedMotion && !saveData;
}

/**
 * LoopVideo
 *
 * 圖片一律先渲染（作為 poster / fallback，沿用 gatsby-plugin-image 的 blur placeholder）。
 * 有提供 videoUrl 且使用者允許動態內容時，會在容器捲動到接近可視範圍時才掛載
 * <video>（IntersectionObserver + rootMargin，達成真正的 lazy load），開始播放後淡入蓋在圖片上；
 * 離開可視範圍會暫停播放（省電、省頻寬），但已載入的 <source> 不會被移除，
 * 所以再次進入可視範圍時是直接 resume，不會重新下載。
 *
 * 沒有 videoUrl、或使用者偏好減少動態 / 開啟省流量模式時，完全等同原本只顯示圖片的行為。
 */
export default function LoopVideo({
  image,
  videoUrl,
  alt,
  className = "",
  imgStyle = { objectFit: "cover" },
}) {
  const containerRef = useRef(null);
  const videoRef = useRef(null);
  const [shouldLoad, setShouldLoad] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [canUseVideo, setCanUseVideo] = useState(false);

  // shouldPlayVideo() 依賴 window/matchMedia，只能在 client 端判斷，避免 SSR 時 hydrate mismatch
  useEffect(() => {
    if (videoUrl && shouldPlayVideo()) {
      setCanUseVideo(true);
    }
  }, [videoUrl]);

  const playVideo = () => {
    const el = videoRef.current;
    if (!el) return;
    // React 的 `muted` JSX 屬性有時不會同步反映到 DOM property，
    // 部分瀏覽器的自動播放限制是檢查 property 而非 attribute，這裡明確補設一次確保萬無一失。
    el.muted = true;
    el.play().catch(() => {
      // 部分瀏覽器在特定情況仍會擋自動播放，靜默失敗即可，畫面會停在 poster 圖
    });
  };

  useEffect(() => {
    if (!canUseVideo || !containerRef.current) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // 第一次進入可視範圍時 <video> 還沒掛載到 DOM（shouldLoad 的 state 更新是非同步的），
            // 這裡呼叫 play() 當下 videoRef.current 必為 null，所以只負責觸發掛載；
            // 真正的播放交給下面依賴 shouldLoad 的 effect，等 <video> 確定存在於 DOM 後再呼叫
            setShouldLoad(true);
            playVideo();
          } else {
            videoRef.current?.pause();
          }
        });
      },
      { rootMargin: "300px 0px" }
    );

    observer.observe(containerRef.current);
    return () => observer.disconnect();
  }, [canUseVideo]);

  // 保證 <video> 第一次掛載到 DOM 後一定會嘗試播放一次（修正上面 race condition 的關鍵）
  useEffect(() => {
    if (shouldLoad) {
      playVideo();
    }
  }, [shouldLoad]);

  if (!image) return null;

  return (
    <div ref={containerRef} className="relative w-full">
      <GatsbyImage
        image={image}
        alt={alt}
        loading="eager"
        imgStyle={imgStyle}
        className={className}
      />

      {canUseVideo && shouldLoad && (
        <video
          ref={videoRef}
          muted
          loop
          playsInline
          preload="none"
          aria-hidden="true"
          onPlaying={() => setIsPlaying(true)}
          className={`absolute inset-0 w-full h-full transition-opacity duration-500 ${
            isPlaying ? "opacity-100" : "opacity-0"
          }`}
          style={{ objectFit: imgStyle.objectFit || "cover" }}
        >
          <source src={videoUrl} type="video/mp4" />
        </video>
      )}
    </div>
  );
}
