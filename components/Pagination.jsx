import Link from "next/link"

const Pagination = ({ currentPage, numPages }) => {

    const isFirst = currentPage === 1
    const isLast = currentPage === numPages
    const prevPage = `/lessons/page/${currentPage - 1}`
    const nextPage = `/lessons/page/${currentPage + 1}`
  
    if (numPages === 1) return <></>
  return (
    <nav aria-label="Page navigation example">
        <ul className="pagination pagination-blog justify-content-center">
           
            {!isFirst && (
                <Link href={prevPage} className="page-link" aria-label="Previous">
                     <li className="page-item disabled"><span aria-hidden="true">«</span></li>
                </Link>
             )}

            {Array.from({ length: numPages }, (_, i) => (
            <Link href={`/lessons/page/${i + 1}`} key={`page-${i}`} className="page-link">
                <li className="page-item active">
                {i + 1}
                </li>
            </Link>
            ))}   
              {!isLast && (
                <Link href={nextPage} className="page-link" aria-label="Next">
                    <li className="page-item">
                        <span aria-hidden="true">»</span>
                    </li>
                </Link>
                )}
        </ul>
    </nav>
  )
}

export default Pagination