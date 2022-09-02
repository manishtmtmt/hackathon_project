import { Box, Text } from '@chakra-ui/react'
import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

const Home = () => {
    const {username,role,} = useSelector(state=>state.login)
  return (
    <Box>
        <Text>
        {username}
        </Text>
        <Text>
        {role}
        </Text>
        <Link to="/schedule" >Todays Schedule</Link>
    </Box>
  )
}

export default Home