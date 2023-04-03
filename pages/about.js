import React from 'react'

export default function about() {
    const user = process.env.DB_USER
    const password = process.env.DB_PASSWORD
    console.log(user,password)
  return (
    <div>
      About Pagfe
     <h1>{process.env.NEXT_PUBLIC_ANALYTICE_ID} </h1>
    </div>
  )
}
