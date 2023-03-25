import React from 'react'
import backgroundImage from '../images/home.png'
import footerBackgroundImage from '../images/Footer-bg.png'
import apple from '../images/apple.jpg'
import Calendry from './Calendar'
import BarGraph from './Graph'

const Home = () => {
  const styles = {
    backgroundImage: `url('http://www.agrilearner.com/kharif-crops/sugarcane-cultivation/attachment/suagarcane-field-600x330/')`,
    height: '100vh',
    width: '100vw',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
  };
  return (
//     <div
//     className="h-screen object-cover"
//     style={{ backgroundImage: `url(${backgroundImage})` }}
//   >
//     Your component's content here
//   </div>
  
  <div>
      <div className="relative h-screen" style={styles}>
      
      <div className="absolute top-0 left-0 w-full h-full bg-gray-900 opacity-0"></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
        <h1 className="text-5xl font-bold text-white mb-8">WE VALUE OUR FARMERS</h1>
        <p className='text-white mb-8'>You can book a date to deliver your sugarcanes to our factory.</p>
        <button className="px-8 py-4 bg-[#5F9EA0]  text-white font-bold rounded hover:bg-green-500 hover:text-white">Book Delivery!</button>
      </div>
      </div>
      <div className="bg-white rounded-lg shadow-md p-4 m-8">
        <Calendry/>
      </div>

    <div className="flex justify-center">
      <BarGraph/>
    </div>


      <div className='bg-[#5F9EA0] flex justify-evenly'>
        <div className="rounded-lg p-4 m-8">
            <h2 className="text-lg font-bold mb-2 text-white">Athletes </h2>
            <p className="text-white">Opportunity Assessment</p>
            <p className="text-white">Requirements</p>
            <p className="text-white">Awesome N ame</p>
        </div>
        <div className="rounded-lg p-4 m-8">
            <h2 className="text-lg font-bold mb-2 text-white">3. Acceptance</h2>
            <p className="text-white">Our Story</p>
            <p className="text-white">Our Team</p>
            <p className="text-white">Our Process</p>
            <p className="text-white">Our Packages</p>
            <p className="text-white">Sports Scholarships in the U.S.A</p>
        </div>
        <div className="rounded-lg p-4 m-8">
            <h2 className="text-lg font-bold mb-2 text-white">3. Acceptance</h2>
            <p className="text-white">View Prosects</p>
            <div class="flex justify-center mt-4">
                <svg
                    class="w-6 h-6 text-blue-300 fill-current m-2"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24">
                    <path
                        d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"
                    />
                </svg>
                <svg
                    class="w-6 h-6 text-blue-500 fill-current m-2"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 448 512">
                    <path
                        d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z"
                    ></path>
                </svg>
                <svg
                    class="w-6 h-6 text-blue-600 fill-current m-2"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24">
                    <path
                        d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"
                    />
                </svg>
            </div>
            
            

        </div>
        
      </div>
  </div>


  )
}

export default Home