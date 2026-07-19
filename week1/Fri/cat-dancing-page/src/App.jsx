import Layout from './components/Layout.jsx'
import DancingCat from './components/DancingCat.jsx'
import AnimationControls from './components/AnimationControls.jsx'
import { useAnimation } from './hooks/useAnimation.js'
import './styles/animations.css'

function App() {
  const animation = useAnimation()

  return (
    <Layout>
      <DancingCat
        isPlaying={animation.isPlaying}
        move={animation.move}
        speedFactor={animation.speedFactor}
        onToggle={animation.togglePlay}
      />
      <AnimationControls
        isPlaying={animation.isPlaying}
        togglePlay={animation.togglePlay}
        move={animation.move}
        setMove={animation.setMove}
        speed={animation.speed}
        setSpeed={animation.setSpeed}
        moves={animation.moves}
        speeds={animation.speeds}
      />
    </Layout>
  )
}

export default App
