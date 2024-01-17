import React from 'react'
import { useIsFetching } from '@tanstack/react-query'

export default function GlobalLoadingIndicator() {
  const isFetching = useIsFetching()

  return isFetching ? (
    <>
      <div className="absolute justify-center">
        <div className="h-24 w-24 rounded-full border-t-8 border-b-8 border-gray-200"></div>
        <div className="absolute top-0 left-0 h-24 w-24 rounded-full border-t-8 border-b-8 border-blue-500 animate-spin">
        </div>
      </div>
    </>
  ) : null
}