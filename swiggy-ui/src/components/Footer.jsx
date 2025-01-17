import React from 'react'

const Footer = () => {
  return (
    <div className=" items-center bg-gray-300">
        <div className='max-w-[1150px]  mx-auto py-3 md:py-5 grid grid-cols-2 md:grid-cols-4 justify-items-center' >
            <div className='mb-2 md:mb-4'>
                 <h2 className='font-bold text-xl mb-1'>Company</h2>
                <ul>
                    <li>About Us</li>
                    <li>Swiggy Corporate</li>
                    <li>Careers</li>
                    <li>Team Swiggy</li>
                </ul>
            </div>

            <div>
                 <h2 className='font-bold text-xl mb-1'>Contact Us</h2>
                <ul>
                    <li>Help & Support </li>
                    <li>Partener with us</li>
                    <li>Ride with us</li>
                </ul>
            </div>

            <div>
                 <h2 className='font-bold text-xl mb-1'>Available in :</h2>
                <ul>
                    <li>Mumbai</li>
                    <li>Banglore</li>
                    <li>Pune</li>
                    <li>Delhi</li>
                    <li>Hyderabad</li>
                    <li>Gurgaon</li>
                </ul>
            </div>

            <div>
                 <h2 className='font-bold text-xl mb-1'>Legal</h2>
                <ul>
                    <li>Terms & Conditions</li>
                    <li>Cookie Policy</li>
                    <li>Privacy Policy</li>
                </ul>
            </div>


        </div>
    </div>
  )
}

export default Footer;