import { GIGS } from '../assets/constants'
import EventCard from '../components/EventCard'
import '../App.css'

const Schedule = () => {
  return (
    <>
      <div className='schedule-header'>
        <p>Follow us on social media for updates! </p>
        <a href='https://www.facebook.com/delraymusic' target='_blank' rel='noopener noreferrer'>
        <i className="fa-brands fa-facebook fa-lg" style={{ color: '#fff' }}></i>
        </a>
      </div>
      <div className='card-container'>
      {GIGS.map((gig, index) => (
        <EventCard key={index} event={gig} />
      ))}
      </div>
    </>
  )
}

export default Schedule
