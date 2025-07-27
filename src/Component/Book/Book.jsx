import { FaRegStar } from "react-icons/fa6";
import { NavLink } from "react-router-dom";


export default function Book({ book }) {
    const { bookId, bookName, author, image, review, rating, totalPages, tags, category } = book
    return (
        <div>
            <NavLink to={`/bookdetails/${bookId}`}>
                <div className="card bg-green-200  shadow-xl">
                    <figure>
                        <img className="w-96 p-7"
                            src={image}
                            alt="Shoes" />
                    </figure>
                    <div className="card-body">
                        <div className="flex gap-2">
                            {
                                tags.map(d => <p className='font-bold text-green-500 '>{d}</p>)
                            }
                        </div>
                        <h1 className="text-3xl font-semibold">{bookName}</h1>
                        <p className="text-xs"><span className="font-bold">By:</span> {author}</p>
                        <div className="flex justify-between">
                            <p className="text-xl">{category}</p>
                            <div className="flex justify-between items-center gap-2">
                                <p>{rating}</p>
                                <FaRegStar />
                            </div>
                        </div>
                    </div>
                </div>
            </NavLink>
        </div>
    )
}
