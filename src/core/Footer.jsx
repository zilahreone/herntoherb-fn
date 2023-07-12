import React from 'react'
import herbLogo from '@/assets/logo.png'


function Footer() {
  return (
    <div className='bg-[#F7F7F7] w-full flex flex-col gap-4 justify-center pt-8 pb-4'>
      <div className='flex flex-col gap-8'>
        <div className='flex justify-center'>
          <div className='flex flex-row w-3/4'>
            <div className='flex flex-1 flex-col gap-6'>
              <p className='font-bold'>Quick Links</p>
              {/* <Link className='font-normal' to={'/'} /> */}
              <p className='font-semibold text-std text-gray-700'>Home</p>
              <p className='font-semibold text-std text-gray-700'>Services</p>
              <p className='font-semibold text-std text-gray-700'>FAQ</p>
            </div>
            <div className='flex flex-1 flex-col gap-6'>
              <p className='font-bold'>About Us</p>
              {/* <Link className='font-normal' to={'/'} /> */}
              <p className='font-semibold text-std text-gray-700'>Mission</p>
              <p className='font-semibold text-std text-gray-700'>Contact</p>
            </div>
            <div className='w-2/4 flex flex-col gap-4'>
              <img className='object-left-top object-contain h-10' src={herbLogo} alt="" />
              <p className='text-xl font-bold'>Innovation manager (IM) of Functional ingredient and Food</p>
              <p className='text-std'>ฝ่ายยุทธศาสตร์และติดตามประเมินผล (SME) สำนักงานพัฒนาวิทยาศาสตร์และเทคโนโลยีแห่งชาติ (สวทช.) 111 อุทยานวิทยาศาสตร์ประเทศไทย ถนนพหลโยธิน ตำบลคลองหนึ่ง อำเภอคลองหลวง จังหวัดปทุมธานี 12120 โทร. 02-564-7000 ต่อ 1471</p>
            </div>
          </div>
        </div>
        <div className='flex justify-center'>
          <p className='text-std'>© {new Date().getFullYear()} Innovation manager (IM) of Functional ingredient and Food . All Rights Reserved.</p>
        </div>
      </div>
    </div>
  )
}

export default Footer