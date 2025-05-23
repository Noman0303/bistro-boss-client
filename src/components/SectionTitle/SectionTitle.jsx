import React from 'react'

const SectionTitle = ({heading,subHeading}) => {
  return (
    <div className=' mx-auto md:my-10 w-3/4 md:w-1/3 lg:w-1/4'>
        <p className='text-[#D99904] italic mb-4 border-b-2 text-center pb-4 border-[#E8E8E8]' >{subHeading}</p>
        <h3 className='text-2xl md:text-4xl text-center mt-4 border-b-2 pb-4 border-[#E8E8E8] uppercase' >{heading}</h3>
    </div>
  )
}

export default SectionTitle;