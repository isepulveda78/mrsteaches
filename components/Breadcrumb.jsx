import Link from "next/link"

const Breadcrumb = ({page}) => {
  return (
    <nav aria-label="breadcrumb">
      <ol className="breadcrumb">
        <li className="breadcrumb-item"><Link href="/" className="breadcrumb-link">Home</Link></li>
        <li className="breadcrumb-item active breadcrumb-link" aria-current="page">{page}</li>
      </ol>
    </nav>
  )
}

export default Breadcrumb