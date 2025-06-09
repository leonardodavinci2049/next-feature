'use server'

import { cookies } from 'next/headers'
import React from 'react'

const SetCookie2 = async (key: string, value: string) => {

const cookieStore = await cookies();
cookieStore.set({
  name: key,
  value: value,
  httpOnly: true, // Ensures the cookie is not accessible via JavaScript
  secure: true
});


  return (
    <div>SetCookie</div>
  )
}

export default SetCookie2