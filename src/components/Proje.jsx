import React from 'react'
import img1 from '../assets/radio.png'
import img2 from '../assets/img2.png'
import img3 from '../assets/img3.png'
import img4 from '../assets/img4.png'
const  experiences =[
        {
                id:1,
                name:"Top ten in the Erim and Jamil.net program",
                image:img1,
                lien:"https://www.linkedin.com/feed/update/urn:li:activity:7227257878133256192/"

        },
        {
                id:2,
                name:"Fondateur-President Club Dreamers ISETB ",
                image:img2,
                lien:"https://www.facebook.com/profile.php?id=100077595151104"
        },
        {
                id:3,
                name:"Media Consultant JCI Béja ",
                image:img3,
                lien:"https://www.facebook.com/photo/?fbid=216031434511295&set=pcb.216032111177894"

        },
        
]
const Proje = () => {
  return (
        <div className='bg-black text-white py-20' id='experiences'>
           <div className='container mx-auto px-8 md:px-16 lg:px-24'>
                <h2 className='text-4xl font-bold text-center mb-12'>
                My Experiences
                </h2>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
                        {experiences.map(experience=>(
                                <div key={experience.id} className='bg-gray-800 p-6 rounded-lg hover:shadow-lg
                                transform transition duration-300 hover:scale-105'>
                                        <img src={experience.image} alt="" className='rounded-lg mb-4 
                                        w-full h-48 object-cover' />
                                        <h3>{experience.name}</h3>
                                        <a href={experience.lien} className='inline-block bg-gradient-to-r from-green-400 
                                        to-blue-500 text-white px-8 py-2 rounded-full' target='_blank' rel='noopener noreferrer' >
                                                Link
                                         </a>
                                </div>
                        ))}
                </div>
           </div>     
        </div>        
             
    
  )
}

export default Proje