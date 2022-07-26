import { FC } from "react"
import Event from "../types/Event"
import { Box, Text } from "@chakra-ui/react"
import { SmallCloseIcon } from "@chakra-ui/icons"

type Props = {
    event: Event,
    deleteEvent: (eventId: string) => void
}

const EventCard: FC<Props> = ({ event, deleteEvent}) => {

    return (
        <Box
          display='flex'
          justifyContent='space-between'
          alignItems='center'
          w='100%'
          p='5'
          //mt='3'
          bg='white'
          borderRadius='13px'
          boxShadow='0 0 99px 0px rgba(0, 0, 0, 0.04)'
        >
            <Text fontWeight='thin'>{event.content}</Text>
            <SmallCloseIcon 
              onClick={() => deleteEvent(event.id)}
              p='0.5'
              bg='#bbb'
              color='white'
              borderRadius='50%'
              cursor='pointer'
            />
        </Box>
    )
}

export default EventCard