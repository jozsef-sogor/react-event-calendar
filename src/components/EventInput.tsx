import type { FC } from 'react'
import React, { useState } from 'react'
import { Input, InputRightElement, InputGroup } from '@chakra-ui/react'
import { AddIcon } from '@chakra-ui/icons'


type Props = {
  addEvent: (eventContent:string) => void,
}

const EventInput: FC<Props> = ({ addEvent }) => {
  const [inputValue, setInputValue] = useState<string>('')

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    //Prevent page reload
    e.preventDefault()

    //Add events to allEvents
    handleAddEvent()
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value)
  }

  const handleAddEvent = () => {
    //Add events to allEvents
    addEvent(inputValue)
    //Empty input after adding event
    setInputValue('')
  }

  return (
    <form onSubmit={handleSubmit}>
    <InputGroup
        mb='3'
        bg='white'
        borderRadius='13px'
        boxShadow='0 0 99px 0px rgba(0, 0, 0, 0.04)'
    >
        <Input 
        h='64px' 
        size={'lg'}
        borderRadius='13px'
        name="content" 
        placeholder='Add new event'  
        value={inputValue} 
        onChange={handleInputChange} 
        />
        <InputRightElement 
        h='100%' 
        p='1'
        children={
            <AddIcon 
            w='25px'
            h='auto'
            p='1'
            mr='2'
            borderRadius='50%'
            color='white'
            bg='blue' 
            cursor='pointer'
            onClick={() => handleAddEvent()}
            />
        }  
    />
    </InputGroup>
    </form>
  )
}

export default EventInput
