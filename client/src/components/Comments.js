import React, { useState, useEffect } from 'react'
import Axios from 'axios'

const Comments = () => {
  const [comments, setComments] = useState([])

  useEffect(() => {
    Axios.get(`/api/recipes/${recipe_id}/comments`)
      .then(res => {
        setComments(res.data)
      })
  },[])

  return (
    <div>
      
    </div>
  )
}

export default Comments
