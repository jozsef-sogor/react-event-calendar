import type { FC } from 'react'
import { useState } from 'react'
import CalendarView from 'react-calendar'
import { Box, Text, HStack } from '@chakra-ui/react'
import { ChevronLeftIcon, ChevronRightIcon } from "@chakra-ui/icons"
import '../assets/css/ReactCalendar.css'


type Props = {
  handleDateChange: (date:Date) => void;
  selectedDay: Date;
}

const Calendar: FC<Props> = (props) => {
  const [dateToShow, setDateToShow] = useState(new Date())

  const getPrevMonth = () => {
    const prevMonth = (dateToShow.getMonth()-1)%12
    let newDate:Date

    prevMonth === 11
      ? newDate = new Date(dateToShow.getFullYear() - 1, prevMonth, 1)
      : newDate = new Date(dateToShow.getFullYear(), prevMonth, 1)
      
    setDateToShow(newDate)
  }  
  
  const getNextMonth = () => {
    const nextMonth = (dateToShow.getMonth()+1)%12
    let newDate:Date

    nextMonth === 0
      ? newDate = new Date(dateToShow.getFullYear() + 1, nextMonth, 1)
      : newDate = new Date(dateToShow.getFullYear(), nextMonth, 1)
      
    setDateToShow(newDate)
  }

  const getToday = () => {
    setDateToShow(new Date())
    props.handleDateChange(new Date())
  }

  return (
    <Box 
      w='500px'
      bg='white'
      h='auto'
      borderRadius='13px'
      boxShadow='0 0 99px 0px rgba(0, 0, 0, 0.04)'
      mb='10'
      display='flex'
      flexDirection='column'
      justifyContent='flex-start'
      alignItems='center'
      overflow='hidden'
    >
      <HStack
        justifyContent='flex-end'
        alignItems='center'
        w='100%'
        px='5'
        py='3'
      >
        <HStack flex='1'>
          <Text fontSize='lg' fontWeight='bold'>{dateToShow.toLocaleString('default', { month: 'short' })} </Text>
          <Text fontSize='lg' fontWeight='300'>{dateToShow.toLocaleString('default', { year: 'numeric' })} </Text>
        </HStack>
        
        <ChevronLeftIcon
          h='20px'
          w='20px'
          p='.5'
          color='white' 
          bg='blue'
          borderRadius='50%'
          cursor='pointer'
          onClick={getPrevMonth} 
        />

        <Text mx='3' cursor='pointer' color='blue' onClick={getToday}>
          Today
        </Text>

        <ChevronRightIcon 
          h='20px'
          w='20px'
          p='.5'
          color='white' 
          bg='blue'
          borderRadius='50%'
          cursor='pointer'
          onClick={getNextMonth} /
        >
      </HStack>

      <CalendarView 
        showNavigation={false}
        activeStartDate={dateToShow}
        value={props.selectedDay}
        onChange={props.handleDateChange} 
      />
    </Box>
  )
}

export default Calendar
