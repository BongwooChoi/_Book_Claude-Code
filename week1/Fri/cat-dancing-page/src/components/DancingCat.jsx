import catSvg from '../assets/images/cat.svg?raw'

function DancingCat({ isPlaying, move, speedFactor, onToggle }) {
  return (
    <div className="stage">
      <button
        type="button"
        className={`cat-wrapper move-${move} ${isPlaying ? 'playing' : 'paused'}`}
        style={{ '--speed-factor': speedFactor }}
        onClick={onToggle}
        aria-pressed={isPlaying}
        aria-label={isPlaying ? '고양이 춤 정지' : '고양이 춤 시작'}
        title="클릭하면 춤을 시작/정지합니다"
        dangerouslySetInnerHTML={{ __html: catSvg }}
      />
      <div className="shadow" aria-hidden="true" />
    </div>
  )
}

export default DancingCat
