import './Particles.css'

const Particles = () => {
  const particles = Array.from({ length: 20 }, (_, i) => i)

  return (
    <div className="particles-container">
      {particles.map((particle) => (
        <div
          key={particle}
          className="particle"
          style={{
            left: `${-5 + Math.random() * 110}%`,
            animationDelay: `${Math.random() * 5}s`,
            animationDuration: `${5 + Math.random() * 5}s`
          }}
        />
      ))}
    </div>
  )
}

export default Particles

