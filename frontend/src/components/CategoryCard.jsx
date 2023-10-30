import React from 'react'
import { BsVectorPen, BsArrowUpRight } from 'react-icons/bs'

const CategoryCard = ({ icons, title }) => {
  return (
    <div className='category-card bg-white md:p-2 p-2 shadow-lg rounded-md flex items-center gap-4 justify-between border border-transparent hover:border-[#20B486] hover:cursor-pointer group/edit mb-4'>
      <div className='flex gap-2 mr-10'>
        <h1 className='md:max-w-[1000px] max-w-[470px] truncate md:text-2xl text-lg font-semibold absolute ml-2'>{title}</h1>
      </div>
      <div className='group-hover/edit:bg-[#0000] rounded-lg p-5'>
        <BsArrowUpRight
          size={30}
          style={{ color: '#ffff' }}
          className='arrow-icon'
        />
      </div>
    </div>
  )
}

export default CategoryCard
