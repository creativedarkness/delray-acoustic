import { createEvent } from 'ics'

const AddToCalendar = ({ title, startDate, endDate, location, description }) => {
  const downloadICS = () => {
    const event = {
      start: [
        startDate.getFullYear(),
        startDate.getMonth() + 1,
        startDate.getDate(),
        startDate.getHours(),
        startDate.getMinutes()
      ],
      end: [
        endDate.getFullYear(),
        endDate.getMonth() + 1,
        endDate.getDate(),
        endDate.getHours(),
        endDate.getMinutes()
      ],
      title,
      description,
      location
    }

    createEvent(event, (error, value) => {
      if (error) {
        console.error(error)
        return
      }
      const blob = new Blob([value], { type: 'text/calendar;charset=utf-8' })
      const link = document.createElement('a')
      link.href = URL.createObjectURL(blob)
      link.download = `${title}.ics`
      link.click()
    })
  }

  return <button onClick={downloadICS}>Add to Calendar</button>
}

export default AddToCalendar
