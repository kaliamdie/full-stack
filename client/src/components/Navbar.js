import React from 'react'
import { Link } from "react-router-dom";
export default function Navbar() {
  return (
    <nav class="bg-gray-900 p-4">
    <div class="container mx-auto flex justify-between items-center">
      <a href="#" class="text-black font-bold text-xl">E-commerce</a>
      <ul class="flex space-x-4">
        <li> <Link to="/signup">Sign Up</Link></li>
        <li> <Link to="/login">Login</Link></li>
     
    
      </ul>
    </div>
  </nav>
  
  )
}
