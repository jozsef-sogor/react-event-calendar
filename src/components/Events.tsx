import type { FC } from 'react'
import Event from "../types/Event"
import { VStack } from '@chakra-ui/react'
import EventCard from "./EventCard"


type Props = {
  events: Event[],
  deleteEvent: (eventId: string) => void
}

const Events: FC<Props> = ({ events, deleteEvent }) => {

  return (
    <VStack 
      w='500px'
      spacing='3'
    >

      {events.map((event:Event) => (
        <EventCard 
          key={event.id} 
          event={event} 
          deleteEvent={deleteEvent} 
        />
      ))}
    
    </VStack>
  )
}

export default Events
