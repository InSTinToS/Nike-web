'use client'

import { useEffect } from 'react'
import { IErrorProps } from '../types/next.types'

export default function Error({ error, reset }: IErrorProps) {
  useEffect(() => {
    console.log(error)
  }, [error])

  return (
    <div>
      <p>Something went wrong!</p>

      <button type='button' onClick={() => reset()}>
        Reset
      </button>
    </div>
  )
}
