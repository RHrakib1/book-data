import React from 'react'

export default function Booklis({ data }) {
    const { image, bookName, category, review, totalPages, publisher } = data
    return (
        <div>
            <section className="p-4 lg:p-8 dark:bg-gray-100 dark:text-gray-800">
                <div className="container mx-auto space-y-12">
                    <div className="flex flex-col overflow-hidden rounded-md shadow-sm lg:flex-row">
                        <img src={image} alt="" className="h-80 dark:bg-gray-500 aspect-video" />
                        <div className="flex flex-col justify-center flex-1 p-6 dark:bg-gray-50">
                            <span className="text-xs uppercase dark:text-gray-600">{category}</span>
                            <h3 className="text-3xl font-bold">{bookName}</h3>
                            <p className="my-6 dark:text-gray-600">{review}</p>
                            <div className='flex justify-between'>
                                <p><span className='font-bold'>Total Pages:</span> {totalPages}</p>
                                <p><span className='font-bold'>Publisher:</span> {publisher}</p>
                            </div>
                            <button type="button" className="self-start">Action</button>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}
