import React from 'react'
import shipping from '../images/shipping.jpeg'

function Hero() {
  return (
    <div className="flex h-screen">
        <div className="flex-1 justify-center items-center h-screen">
            <div className="text-8xl font-bold">
                <div>Unleash the</div>
                <div>Power of</div>
            </div>
            <div className="text-4xl font-bold">Reliable Logistics</div>
            <div>Experience fast, secure deliveries with global reach, real-time tracking,</div>
            <div>and flexible shipping options tailored to your needs.</div>      
        </div>

        <div className="flex-1">
            <img
            src={shipping}
            alt="Placeholder"
            className="w-full h-full object-cover"
            />
        </div>
    </div>
  )
}

export default Hero
