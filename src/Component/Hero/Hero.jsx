import React from 'react'

export default function Hero() {
    return (
        <div>
            <div className="hero bg-base-200 min-h-screen">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <img
                        src="https://i.ibb.co/b53BfPch/101468-OLVPK5-304.jpg"
                        className="max-w-sm rounded-lg shadow-2xl"
                    />
                    <div>
                        <h1 className='text-7xl  font-bold '>a RAKIB tok Filter somporke jante hbe bujhsis </h1>
                        <h1 className="text-5xl font-bold">Open a Book, Open Your Mind</h1>
                        <p className="py-6">
                            Unleash the magic of storytelling — from timeless classics to today's bestsellers.
                            Explore, Imagine, and Be Inspired.
                        </p>
                        <button className="btn btn-primary">Get Started</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
