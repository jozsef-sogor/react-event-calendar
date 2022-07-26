import { useState, useEffect } from "react"
import { Box, Center, Text } from "@chakra-ui/react"
import Calendar from "./components/Calendar"
import EventInput from "./components/EventInput"
import Events from "./components/Events"
import Event from "./types/Event"
import {v4 as uuidv4} from 'uuid'


function App() {
  const [allEvents, setAllEvents] = useState<Event[]>([{id: uuidv4(), content: 'test', date: new Date()}]);
  const [eventsToShow, setEventsToShow] = useState<Event[]>([]);
  const [selectedDay, setSelectedDay] = useState<Date>(new Date());

  //Get event with the selected date when selectedDay value changes
  useEffect(() => {
    setEventsToShow(allEvents.filter(event => event.date.toDateString() === selectedDay?.toDateString()))
  }, [selectedDay, allEvents])
  

  const handleDateChage = (selectedDate:Date) => {
    setSelectedDay(selectedDate)
  }

  const handleAddEvent = (eventContent:string) => {
    const newEvent:Event = {
      id: uuidv4(),
      content: eventContent,
      date: selectedDay
    }
    setAllEvents([...allEvents, newEvent])
  }

  const handleDeleteEvent = (eventId:string) => {
    setAllEvents(allEvents.filter(event => event.id !== eventId))
  }


  return (
    <Box
      bg='#F4F4F4'
      w='100%'
      minH='100vh'
      p='10'
    >
      <Center>
        <Box>
          <Calendar selectedDay={selectedDay} handleDateChange={handleDateChage}/>
          <Text ml='3' fontSize='3xl' fontWeight='thin'>{selectedDay.toLocaleString('default', { month: 'short', day: 'numeric' })}</Text>
          <EventInput addEvent={handleAddEvent} />
          <Events events={eventsToShow} deleteEvent={handleDeleteEvent}/>
        </Box>
      </Center>
    </Box>
  );
}

export default App;
