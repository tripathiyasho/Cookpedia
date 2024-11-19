import React, { createContext, useEffect, useState } from 'react'
import axios from './axios'

export const ProductContext = createContext();
const Context = (props) => {
    const [recdetail, setrecdetail] = useState(null)

    const getRecipes = async (params) => {
        try {
            const {data} = await axios.get("/")
        } catch (error) {
            console.log(error);
            
        }
    }
  return (
    <div>Context</div>
  )
}

export default Context