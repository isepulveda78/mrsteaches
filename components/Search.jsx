import Router from 'next/router'
import { useState } from 'react'
import { useRouter } from 'next/router'

const Search = () => {
const [ term, setTerm ] = useState('')

const router = useRouter()

 const handleSubmit = (e) => {
    e.preventDefault()
    router.push(`/games/search?term=${term}`)
    setTerm('')
 }
  return (
    <form 
    onSubmit={handleSubmit}
    className="row row-cols-1 row-cols-md-auto g-3 align-items-center">
        <div className="col flex-grow-1">
            <input 
            className="form-control form-control-solid" 
            type="text" 
            onChange={(e) => setTerm(e.target.value)}
            placeholder="Search " />
        </div>
        <div className="col">
            <button className="btn btn-teal fw-500" type="submit">
                Search
            </button>
        </div>
    </form>
  )
}

export default Search