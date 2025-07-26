import React, { useEffect, useState } from 'react'
import Book from '../Book/Book'

export default function AllBooks() {
    const [books, setbooks] = useState([])
    useEffect(() => {
        fetch('book.json')
            .then(res => res.json())
            .then(data => setbooks(data))
    }, [])
    return (
        <div >
            <h1 className='text-center font-bold text-4xl text-blue-600 my-10 mt-10'>AllBooks: {books.length}</h1>
            <div className='grid grid-cols-3 gap-4'>
                {
                    books.map(data => <Book book={data}></Book>)
                }
            </div>
        </div>
    )
}
