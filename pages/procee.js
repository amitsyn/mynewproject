import React from 'react'

export default function Process() {
    const user = process.env.DB_USER
    const password = process.env.DB_PASSWORD
    console.log(user,password)
  return (
    <div>
       <h1>{ process.env.DB_USER}</h1>
       <h1>{process.env.NEXT_PUBLIC_ANALYTICE_ID} </h1>
    </div>
  )
}
