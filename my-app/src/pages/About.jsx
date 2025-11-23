import Delray from '../assets/Delray.png'

const About = () => (
  <div>
    <img src={Delray} alt="Jim and Julie of Delray" className="band-photo" />
    <p style={{ textAlign: 'center', maxWidth: '600px', margin: 'auto', padding: '1rem' }}>
      Delray is Julie and Jim Schultz, playing a variety of classics from the 70s through today. 
      From country to rock to alternative, Delray puts their own unique spin on the music you love.
    </p>
  </div>
)

export default About