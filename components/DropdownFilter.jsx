import { MdFilterList } from "react-icons/md"
import { useState } from "react"
import { useRouter } from "next/router"

const DropdownFilter = () => {
    const [ gradeLevel, setGradeLevel ] = useState()

    const router = useRouter()

    const handleSubmit = (e) => {
        e.preventDefault()
        if(gradeLevel === ''){
            router.push('/lessons')
        }else{
            router.push(`/lessons/filter?term=${gradeLevel}`)
        }
    }
    return (
     <form
     onSubmit={handleSubmit}
     >
         <div className="row gx-2">
            <div className="col-md-3 mb-3">
                <select 
                 value={gradeLevel}
                 onChange={(e) => setGradeLevel(e.target.value)}
                className="form-select" aria-label="Default select example">
                     <option value="Grade Level & Subject" selected>Grade Level & Subject</option>
                    <option value="Elementary Math">K-5 Math</option>
                    <option value="Elementary Language">K-5 Language Arts</option>
                    <option value="Elementary Science">K-5 Science</option>
                    <option value="Elementary Social Studies">K-5 Social Studies</option>

                    {/* <option value="Middle Math">6-8 Math</option>
                    <option value="Middle Language Arts">6-8 Language Arts</option>
                    <option value="Middle Science">6-8 Science</option>
                    <option value="Middle Social Studies">6-8 Social Studies</option> */}

                    {/* <option value="High Math">9-12 Math</option>
                    <option value="High Language Arts">9-12 Language Arts</option>
                    <option value="High Science">9-12 Science</option>
                    <option value="High Social Social Studies">9-12 Social Studies</option> */}
                </select>
            </div>
            <div className="col-md-3 mb-3">
                <button type="submit" className="btn btn-outline-primary">
                    Filter
                </button>
            </div>
        </div>
     </form>
    )
  }
  
  export default DropdownFilter