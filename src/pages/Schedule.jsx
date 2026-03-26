import EventCard from '../components/EventCard'

const Schedule = () => {
  const gigs = [
    {
      venue: 'The Rusty Anchor',
      date: '2025-10-31',
      time: '7:00 PM - 10:00 PM',
      location: 'Delray Beach, FL',
      link: 'http://www.google.com'
    },
    {
      venue: 'The Rusty Anchor',
      date: '2025-12-21',
      time: '7:00 PM - 10:00 PM',
      location: 'Delray Beach, FL',
      link: 'http://www.google.com'
    },
    {
      venue: 'The Rusty Anchor',
      date: '2025-12-31',
      time: '7:00 PM - 10:00 PM',
      location: 'Delray Beach, FL',
      link: 'http://www.google.com'
    }
  ]
  return (
    <div className='card-container'>
    {gigs.map((gig, index) => (
      <EventCard key={index} event={gig} />
    ))}
    </div>
  )
}

export default Schedule
