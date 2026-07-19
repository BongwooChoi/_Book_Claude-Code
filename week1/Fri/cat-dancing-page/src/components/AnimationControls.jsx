function AnimationControls({
  isPlaying,
  togglePlay,
  move,
  setMove,
  speed,
  setSpeed,
  moves,
  speeds,
}) {
  return (
    <div className="controls" role="group" aria-label="애니메이션 제어">
      <button
        type="button"
        className={`play-toggle ${isPlaying ? 'is-playing' : ''}`}
        onClick={togglePlay}
      >
        {isPlaying ? '⏸ 정지' : '▶ 춤추기'}
      </button>

      <fieldset className="control-group">
        <legend>춤 동작</legend>
        <div className="button-row">
          {moves.map((m) => (
            <button
              key={m.id}
              type="button"
              className={`chip ${move === m.id ? 'active' : ''}`}
              onClick={() => setMove(m.id)}
              aria-pressed={move === m.id}
            >
              <span aria-hidden="true">{m.emoji}</span> {m.label}
            </button>
          ))}
        </div>
      </fieldset>

      <fieldset className="control-group">
        <legend>속도</legend>
        <div className="button-row">
          {speeds.map((s) => (
            <button
              key={s.id}
              type="button"
              className={`chip ${speed === s.id ? 'active' : ''}`}
              onClick={() => setSpeed(s.id)}
              aria-pressed={speed === s.id}
            >
              {s.label}
            </button>
          ))}
        </div>
      </fieldset>
    </div>
  )
}

export default AnimationControls
