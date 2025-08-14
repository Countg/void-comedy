'use client';

import dynamic from 'next/dynamic'
import { useRef, useEffect, useState } from 'react'
import {
  FaPlay, FaPause, FaVolumeUp,
  FaVolumeDown, FaVolumeMute, FaPodcast
} from 'react-icons/fa'
import 'react-h5-audio-player/lib/styles.css'

const AudioPlayer = dynamic(() => import('react-h5-audio-player'), { ssr: false })

const colors = {
  playerBackground: "black",
  timeColor: "#ffffff",
  progressSlider: "#FFFFFF",
  progressUsed: "#ffffff",
  progressLeft: "#151616",
  bufferLoaded: "#1f212b",
  volumeSlider: "#3e32e4",
  volumeUsed: "#ffffff",
  volumeLeft: "#151616",
};

export default function PlayerWrapper({ audioUrl }) {
  const playerRef = useRef(null)
  const [isPlaying, setIsPlaying] = useState(false)

  useEffect(() => {
    const audioEl = playerRef.current?.audio?.current
    if (!audioEl) return

    const handlePlay = () => setIsPlaying(true)
    const handlePause = () => setIsPlaying(false)

    audioEl.addEventListener('play', handlePlay)
    audioEl.addEventListener('pause', handlePause)

    return () => {
      audioEl.removeEventListener('play', handlePlay)
      audioEl.removeEventListener('pause', handlePause)
    }
  }, [])

  return (
    <div className="relative">
      {/* Glitch bar */}
      {isPlaying && (
        <div className="w-1 bg-accent-orange animate-glitchHeight">
          {[...Array(5)].map((_, i) => (
            <div
              key={i}
              className="w-1 bg-orange-500"
              style={{
                height: `${Math.random() * 16 + 8}px`,
                animation: 'glitch-height 0.3s infinite',
              }}
            />
          ))}
        </div>
      )}

      <AudioPlayer
        ref={playerRef}
        src={audioUrl}
        autoPlay={false}
        showSkipControls={false}
        showJumpControls={false}
        showDownloadProgress={false}
        showVolumeControl={true}
        className="audio-player"

        customVolumeControls={['MUTE', 'VOLUME_DOWN', 'VOLUME_UP']}
        customProgressBarSection={['MAIN_CONTROLS', 'PROGRESS_BAR', 'CURRENT_TIME', 'DURATION']}
        customTimeControls={['CURRENT_TIME', 'DURATION']}
        customTimeControlSection={['CURRENT_TIME', 'DURATION']}
        customTimeControlClassName="text-accentOrange"
        customTimeControlStyle={{
          color: colors.timeColor,
          fontSize: '0.875rem',
          fontFamily: 'monospace',
          fontWeight: '500',
        }}
        customIcons={{
          play: <FaPlay className="text-accent-orange" />,
          pause: <FaPause className="text-accent-orange" />,
          volume: <FaPodcast className="text-accent-orange" />,
          volumeMute: <FaVolumeMute className="text-accent-orange" />,
          volumeUp: <FaVolumeUp className="text-accent-orange" />,
          volumeDown: <FaVolumeDown className="text-accent-orange" />,
        }}
        customProgressSlider={{
          background: colors.progressSlider,
          used: colors.progressUsed,
          left: colors.progressLeft,
          bufferLoaded: colors.bufferLoaded,
        }}
        customVolumeSlider={{
          background: colors.volumeSlider,
          used: colors.volumeUsed,
          left: colors.volumeLeft,
        }}
        style={{
          background: colors.playerBackground,
          color: "white",
          borderRadius: '8px',
          boxShadow: '0 2px 10px rgba(0,0,0,0.2)',
        }}
      />
    </div>
  )
}

