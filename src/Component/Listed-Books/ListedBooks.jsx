import React, { useEffect, useState } from 'react'
import { getjob } from '../Uid/Uid'
import { useLoaderData } from 'react-router-dom'
import Booklis from './Booklis'

export default function ListedBooks() {
  const [storedata, setstoredata] = useState([])
  const [disstoredata, setdisplaystoredata] = useState([])


  const databook = useLoaderData()
  console.log('kebol aslo', databook);

  const hendelfilterdisplay = filter => {
    if (filter === 'all') {
      setdisplaystoredata(storedata)

    }
    else if (filter === 'normal') {
      const storenormaldata = storedata.filter(data => data.status === 'normal')
      setdisplaystoredata(storenormaldata)
    }
    else if (filter === 'popular') {
      const storpopulardata = storedata.filter(data => data.status === 'popular')
      setdisplaystoredata(storpopulardata)
    }
  }

  useEffect(() => {
    const getid = getjob()
    if (databook.length > 0) {
      const jobfilter = databook.filter(b => getid.includes(b.bookId.toString()))
      console.log('filter kore paoya', jobfilter);
      setstoredata(jobfilter)
      setdisplaystoredata(jobfilter)

    }


  }, [])
  console.log("dekhae aita ui er jonn ", storedata);

  return (
    <div>
      <h1>asse agula : {storedata.length}</h1>
      <div className='flex items-center justify-center'>
        <div className="dropdown dropdown-hover ">
          <div tabIndex={0} role="button" className="btn m-1">Hover</div>
          <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
            <li onClick={()=>hendelfilterdisplay('all')}><a>All</a></li>
            <li onClick={()=>hendelfilterdisplay('normal')}><a>Normal</a></li>
            <li onClick={()=>hendelfilterdisplay('popular')}><a>Popular</a></li>
          </ul>
        </div>
      </div>
      {
        disstoredata.map(data => <Booklis data={data}></Booklis>)
      }
    </div>
  )
}
