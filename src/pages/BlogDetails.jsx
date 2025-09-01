import React from 'react'
import { useParams } from 'react-router-dom'

function BlogDetails() {
    const {blogid} = useParams();
    
  return (
    <div>BlogDetails {blogid}</div>
  )
}

export default BlogDetails