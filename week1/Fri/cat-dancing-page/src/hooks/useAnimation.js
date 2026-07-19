import { useCallback, useState } from 'react'

const DANCE_MOVES = [
  { id: 'groove', label: '그루브', emoji: '🕺' },
  { id: 'jump', label: '점프', emoji: '🦘' },
  { id: 'spin', label: '회전', emoji: '🌀' },
  { id: 'bounce', label: '바운스', emoji: '🎾' },
]

const SPEEDS = [
  { id: 'slow', label: '느리게', factor: 1.6 },
  { id: 'normal', label: '보통', factor: 1 },
  { id: 'fast', label: '빠르게', factor: 0.6 },
]

export function useAnimation() {
  const [isPlaying, setIsPlaying] = useState(true)
  const [move, setMove] = useState(DANCE_MOVES[0].id)
  const [speed, setSpeed] = useState('normal')

  const togglePlay = useCallback(() => {
    setIsPlaying((prev) => !prev)
  }, [])

  const speedFactor = SPEEDS.find((s) => s.id === speed)?.factor ?? 1

  return {
    isPlaying,
    togglePlay,
    move,
    setMove,
    speed,
    setSpeed,
    speedFactor,
    moves: DANCE_MOVES,
    speeds: SPEEDS,
  }
}
