import React, { useEffect, useState } from 'react'
import { getjob } from '../Uid/Uid'
import { useLoaderData } from 'react-router-dom'
import Booklis from './Booklis'

export default function ListedBooks() {
  const [storedata, setstoredata] = useState([])
  const databook = useLoaderData()
  console.log('kebol aslo', databook);
  useEffect(() => {
    const getid = getjob()
    if (databook.length > 0) {
      const jobfilter = databook.filter(b => getid.includes(b.bookId.toString()))
      console.log('filter kore paoya', jobfilter);
      setstoredata(jobfilter)

    }


  }, [])
  console.log("dekhae aita ui er jonn ", storedata);

  return (
    <div>
      <h1>asse agula : {storedata.length}</h1>
      {
        storedata.map(data => <Booklis data={data}></Booklis>)
      }
    </div>
  )
}
