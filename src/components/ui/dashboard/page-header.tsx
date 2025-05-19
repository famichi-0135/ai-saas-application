import React from 'react'

interface PageHeaderProps{
  title:string,
  desctiption:string,
  children?:React.ReactNode,
}

function PageHeader({title,desctiption,children}: PageHeaderProps) {
  return (
    <div className='flex items-center justify-between space-y-2'>
      <div className='space-y-1'>
        <h2 className='text-3xl font-bold tracking-tight '>{title}</h2>
        {desctiption && <p className='text-muted-foreground'>{desctiption}</p>}
      </div>
      {children}
    </div>
  )
}

export default PageHeader
