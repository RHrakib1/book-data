import React from 'react'
import { useLoaderData, useParams } from 'react-router-dom'
import { savejobdata } from '../Uid/Uid';
import { ToastContainer, toast } from 'react-toastify';

export default function BookDetails() {
    const getjob = useLoaderData()
    console.log('data paisi', getjob);
    const { bookId } = useParams()
    console.log(bookId);
    const jobmilao = getjob.find(book => book.bookId === bookId)
    console.log('job milse', jobmilao);

    const henderRead = () => {
        savejobdata(bookId)
        toast("Wow you have successfully added localstore your data!");
        console.log(bookId);
    }

    return (
        <div>
            <div className="hero bg-base-200 min-h-screen">
                <div className="hero-content flex-col lg:flex-row">
                    <img

                        src={jobmilao.image}
                        className="w-64 rounded-lg shadow-2xl"
                    />

                    <div >
                        <div className='space-y-5'>
                            <h1 className="text-5xl font-bold">{jobmilao.bookName}</h1>
                            <p className='text-sm font-bold'><span>By:{jobmilao.author}</span></p>
                            <h1 className='text-2xl'>{jobmilao.category}</h1>
                        </div>
                        <hr />
                        <p className="py-6">
                            {jobmilao.review}
                        </p>
                        <div className='space-y-1'>
                            <h3>Number of page: {jobmilao.totalPages}</h3>
                            <h3>Rating : {jobmilao.rating}</h3>
                            <h3>Publisher: {jobmilao.publisher}</h3>
                        </div>
                        <div className='flex gap-4 mt-5'>
                            <button onClick={henderRead} className="btn btn-primary">Read</button>
                            <button className="btn btn-primary">Wishlist</button>
                            <ToastContainer />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
