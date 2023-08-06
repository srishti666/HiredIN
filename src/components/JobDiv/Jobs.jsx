import React from 'react'
import {BiTimeFive} from 'react-icons/bi'
import logo1 from '../../../public/assets/logo1.jpg'
import logo2 from '../../../public/assets/logo2.jpg'
import logo3 from '../../../public/assets/logo3.png'
import logo4 from '../../../public/assets/logo4.jpg'
import logo5 from '../../../public/assets/logo5.jpg'
import logo6 from '../../../public/assets/logo6.jpg'
import logo7 from '../../../public/assets/logo7.png'
import logo8 from '../../../public/assets/logo8.png'

const Data=[
  {
  id:1,
  image:logo1,
  title:'Web Developer',
  time:'Now',
  location:'Canada',
  desc:'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis ',
  company:'Novac Linus Co.'
  },
  {
  id:2,
  image:logo2,
  title:'UI Designer',
  time:'14Hrs',
  location:'Manchester',
  desc:'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis ',
  company:'Liquid Accessments.'
  },
  {
  id:3,
  image:logo3,
  title:'Software Eng',
  time:'10Hrs',
  location:'India',
  desc:'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis ',
  company:'Unico Limited'
  },
  {
  id:4,
  image:logo4,
  title:'UX/UI Designer',
  time:'10Hrs',
  location:'Germany',
  desc:'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis ',
  company:'Government'
  },
  {
  id:5,
  image:logo5,
  title:'Product Designer',
  time:'Now',
  location:'Manchester',
  desc:'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis ',
  company:'NewCastle'
  },
  {
  id:6,
  image:logo6,
  title:'Researcher',
  time:'5Hrs',
  location:'Norway',
  desc:'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis ',
  company:'Nin Co.'
  },
  {
  id:7,
  image:logo7,
  title:'Lead Developer',
  time:'2Hrs',
  location:'Leeds',
  desc:'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis ',
  company:'Nimeloi-UK'
  },
  {
  id:8,
  image:logo8,
  title:'Data Scientist',
  time:'2Days',
  location:'Turkey',
  desc:'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis ',
  company:'Blink Co.'
  },
]
const Jobs = () => {
  return (
      <div>
    <div className='jobContainer flex gap-10 justify-center flex-wrap items-center py-10'>
    {
      Data.map(({id,image,title,time,location,desc,company})=>{
        return(
      <div key={id} className='group group/item singleJob w-[250px] p-[20px] bg-white rounded-[10px] hover:bg-blueColor shadow-lg shadow-greyIsh-400/700 hover:shadow-lg'>
      <span className='flex justify-between items-center gap-4'>
      <h1 className='text-[16px] font-semibold text-textColor group-hover:text-white'>{title}</h1>
      <span className='flex items-center text[#ccc] gap-1'>
        <BiTimeFive /> {time}
      </span>
      </span>
      <h6  className='text-[#ccc]'>{location}</h6>
      <p className='text-[13px] text-[#959595] pt-[20px] border-t-[2px] mt-[20px] group-hover:text-white '>
        {desc}
      </p>
      <div className='company flex items-center gap-2'>
        <img src={image} alt='company logo' className='w-[10%]'/>
        <span className='text-[14px] py-[1rem] block group-hover:text-white'>{company} </span>
      </div>
       <button className='border-[2px] rounded-[10px] block p-[10px] w-full text-[14px] font-semibold text-textColor hover:bg-white group-hover/item:text-textColor group-hover:text-white'>
        Apply Now
       </button>
      </div>
        )
      })
    }
     
    </div>
    </div>
    
  )
}

export default Jobs
