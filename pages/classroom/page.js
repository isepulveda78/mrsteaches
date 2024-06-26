import Image from "next/image"
import Link from "next/link"
import screenshot from "@/assets/images/screenshot.png"
import Breadcrumb from "@/components/Breadcrumb"

const Subjects = () => {
  return (
    <div className="container page-section">
        <Breadcrumb page={"Minecraft"}/>
        <div className="col-lg-12">
           <div className="card shadow p-2 mb-3">
           <Image src={screenshot} width={2560} height={1600} priority={true} alt="..." className="img-fluid" />
           </div>
        </div>
        <div className="col-lg-12 mb-3">
        <div className="card bg-gray shadow">
            <div className="card-body">
                <form className="mb-4"><textarea className="form-control" rows="3" placeholder="Join the discussion and leave a comment!"></textarea>
                <div className="mt-2">
                    <button className="btn btn-lg btn-primary">Submit</button>
                </div>
                </form>
            
                <div className="d-flex mb-4">
                    <div className="flex-shrink-0"><Image className="rounded-circle" src={`https://dummyimage.com/50x50/ced4da/6c757d.jpg`} alt="..." width={50} height={50} priority={true}/></div>
                    <div className="ms-3">
                        <div className="fw-bold">Commenter Name</div>
                        If you&apos;re going to lead a space frontier, it has to be government; it&apos;ll never be private enterprise. Because the space frontier is dangerous, and it&apos;s expensive, and it has unquantified risks.
                        <br /><Link className="ms-2 small text-info" href="#">Reply</Link>
                        <div className="d-flex mt-4">
                            <div className="flex-shrink-0"><Image className="rounded-circle" src={`https://dummyimage.com/50x50/ced4da/6c757d.jpg`} alt="..." width={50} height={50} priority={true}/></div>
                            <div className="ms-3">
                                <div className="fw-bold">Commenter Name</div>
                                And under those conditions, you cannot establish a capital-market evaluation of that enterprise. You can&apos;t get investors.
                                <br /><Link className="ms-2 small text-info" href="#">Reply</Link></div>
                        </div>
                    
                        <div className="d-flex mt-4">
                            <div className="flex-shrink-0"><Image className="rounded-circle" src={`https://dummyimage.com/50x50/ced4da/6c757d.jpg`} alt="..." width={50} height={50} priority={true}/></div>
                            <div className="ms-3">
                                <div className="fw-bold">Commenter Name</div>
                                When you put money directly to a problem, it makes a good headline. <br /><Link className="ms-2 small text-info" href="#">Reply</Link>
                            </div>
                        </div>
                    </div>
                </div>
            
                <div className="d-flex">
                    <div className="flex-shrink-0"><Image className="rounded-circle" src={`https://dummyimage.com/50x50/ced4da/6c757d.jpg`} alt="..." width={50} height={50} priority={true}/></div>
                    <div className="ms-3">
                        <div className="fw-bold">Commenter Name</div>
                        When I look at the universe and all the ways the universe wants to kill us, I find it hard to reconcile that with statements of beneficence. <br /><Link className="ms-2 small text-info" href="#">Reply</Link>
                    </div>
                </div>
            </div>
        </div>
        </div>
    </div>
  )
}

export default Subjects