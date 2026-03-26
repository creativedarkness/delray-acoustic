import { MUSIC } from '../assets/constants'
import '../App.css'

const Music = () => {
  return (
    <div style={{textAlign: 'center'}}>
      <h1>Current Setlist</h1>
      <p>We play a mix of classic rock, folk, and country covers. Here are some of our favorites:</p>
      <ul className='set-list'>
        {MUSIC.map((song, index) => (
          <li key={index}>{song}</li>
        ))}
      </ul>
    </div>
  )
}

export default Music
