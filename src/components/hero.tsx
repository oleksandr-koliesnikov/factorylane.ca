"use client";
import { useEffect, useRef, useState } from "react";
import { hero } from "@/lib/site";
import { Actions } from "./common";
import { Icon } from "./icons";
const filmSource = () =>
  window.matchMedia("(max-width: 767px)").matches
    ? hero.mobileSource
    : hero.source;
export function Hero() {
  const video = useRef<HTMLVideoElement>(null);
  const intent = useRef(true);
  const visible = useRef(true);
  const pendingChapter = useRef<number | null>(null);
  const [active, setActive] = useState(1);
  const [playing, setPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const [loaded, setLoaded] = useState(false);
  useEffect(() => {
    const v = video.current;
    if (!v) return;
    const motion = window.matchMedia("(prefers-reduced-motion: reduce)");
    intent.current = !motion.matches;
    const update = () => {
      if (intent.current && visible.current && !document.hidden)
        void v.play().catch(() => setPlaying(false));
      else v.pause();
    };
    const ready = () => {
      v.currentTime =
        pendingChapter.current === null
          ? hero.initialTime
          : hero.chapters[pendingChapter.current].start;
      pendingChapter.current = null;
      setLoaded(true);
      update();
    };
    const changed = () => {
      if (motion.matches) intent.current = false;
      update();
    };
    const observer = new IntersectionObserver(
      ([entry]) => {
        visible.current = entry.isIntersecting;
        update();
      },
      { threshold: 0.1 },
    );
    observer.observe(v);
    v.addEventListener("loadedmetadata", ready);
    document.addEventListener("visibilitychange", update);
    motion.addEventListener("change", changed);
    // Loading is deferred for reduced motion; a manual play still works.
    if (!motion.matches) {
      v.src = filmSource();
      v.load();
    }
    return () => {
      observer.disconnect();
      v.removeEventListener("loadedmetadata", ready);
      document.removeEventListener("visibilitychange", update);
      motion.removeEventListener("change", changed);
    };
  }, []);
  function seek(index: number) {
    const v = video.current;
    if (!v) return;
    setActive(index);
    setProgress(0);
    if (v.readyState < 1) {
      pendingChapter.current = index;
      if (!v.getAttribute("src")) {
        v.preload = "auto";
        v.src = filmSource();
        v.load();
      }
    } else v.currentTime = hero.chapters[index].start;
  }
  function toggle() {
    const v = video.current;
    if (!v) return;
    intent.current = !playing;
    if (!v.getAttribute("src")) {
      v.src = filmSource();
      v.load();
    }
    if (intent.current) void v.play().catch(() => setPlaying(false));
    else v.pause();
  }
  return (
    <section className="hero" aria-label="Factory Lane introduction">
      <img
        className="hero-poster"
        src={hero.poster}
        alt=""
        width="1600"
        height="900"
        fetchPriority="high"
      />
      <video
        ref={video}
        className="hero-video"
        muted
        playsInline
        loop
        preload="none"
        poster={hero.poster}
        aria-label="Temporary film: production, showroom and an illustrative home and backyard scene"
        onPlay={() => setPlaying(true)}
        onPause={() => setPlaying(false)}
        onTimeUpdate={() => {
          const t = video.current?.currentTime ?? 0;
          const i = hero.chapters.findIndex((c) => t >= c.start && t < c.end);
          if (i >= 0) {
            setActive(i);
            setProgress(
              (t - hero.chapters[i].start) /
                (hero.chapters[i].end - hero.chapters[i].start),
            );
          }
        }}
      />
      <div className="hero-shade" />
      <div className="hero-content container">
        <p className="eyebrow light">
          FACTORY-DIRECT WINDOWS & DOORS · TORONTO & THE GTA
        </p>
        <h1>
          Better windows.
          <br />A <em>brighter</em> home.
        </h1>
        <p className="hero-description">
          Direct from manufacturing. Chosen in our showroom.
          <br className="desktop-break" /> Made for the way you live.
        </p>
        <Actions light />
      </div>
      <div className="hero-bottom container">
        <div className="film-label">
          <span className="live-dot" />
          <span>{hero.chapters[active].caption}</span>
        </div>
        <div className="chapter-controls" aria-label="Choose a film chapter">
          {hero.chapters.map((chapter, index) => (
            <button
              key={chapter.label}
              className={`chapter ${index === active ? "active" : ""}`}
              aria-pressed={index === active}
              onClick={() => seek(index)}
            >
              <span className="chapter-number">0{index + 1}</span>
              {chapter.label}
              <span
                className="chapter-track"
                style={{
                  transform: `scaleX(${index === active ? Math.max(0.025, progress) : 0})`,
                }}
              />
            </button>
          ))}
          <button
            className="video-toggle"
            onClick={toggle}
            aria-label={playing ? "Pause video" : "Play video"}
          >
            <Icon name={playing ? "pause" : "play"} size={19} />
          </button>
        </div>
      </div>
      <span className="sr-only">{loaded ? "Film loaded" : "Film preview"}</span>
    </section>
  );
}
