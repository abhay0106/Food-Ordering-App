import React from 'react'
import Button from './Button'

const ButtonList = () => {
  return (
    <div className="flex">
        <Button name = "All"/>
        <Button name = "Sports"/>
        <Button name = "Gaming"/>
        <Button name = "Music"/>
        <Button name = "Cricket"/>
        <Button name = "Tennis"/>
        <Button name = "Badminton"/>
        <Button name = "Cooking"/>
    </div>
  )
}

export default ButtonList