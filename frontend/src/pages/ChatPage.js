import React, { useEffect, useState } from 'react'
import axios from 'axios'

const ChatPage = () => {
    const [chats,setChats] = useState([])
    const fetchChats = async()=>{
        const data = await axios.get('/api/chat')

        setChats(data.data)
    }
    useEffect(()=>{
        fetchChats()
    },[])
  return (
    <div>
      {
        chats.map((items)=>{
            console.log(items)
           return <div key={items._id}>{items.chatName}</div>
        })
      }
    </div>
  )
}

export default ChatPage
