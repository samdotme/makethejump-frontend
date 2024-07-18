import * as React from 'react'

export function Header() {
  return (
    <header className="sticky top-0 z-50 flex items-center justify-between w-full h-16 px-4 border-b shrink-0 bg-sky-600 bg-gradient-to-b from-background/10 via-background/10 to-background/20 backdrop-blur-xl">
      <div className="flex items-center">
        <React.Suspense
          fallback={<div className="flex-1 overflow-auto" />}
        ></React.Suspense>
      </div>
      <div className="flex items-center justify-end space-x-2"></div>
    </header>
  )
}
