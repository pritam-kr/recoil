import React, { useState } from 'react'
import "./reminder.css"

const Reminder = ({setFormData}) => {

  const [reminderValue, setReminderValue] =   useState({time:"", date: ""})

  return (
    <div className='reminder-box center'>
        <input type="time" className='input-time' onChange={(event) => setFormData((prev) => ({...prev, reminder: {...prev.reminder, time: event.target.value}}))}/>
        <input type="date" className='input-date' onChange={(event) => setFormData((prev) => ({...prev, reminder: {...prev.reminder, date: event.target.value}}))}/>
    </div>
  )
}

export  {Reminder}