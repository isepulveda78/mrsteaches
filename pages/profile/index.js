import Layout from '@/components/Layout'
import Image from 'next/image'
import Link from 'next/link'
import { useSession } from "next-auth/react"
import profileImage from "@/assets/images/f.webp"
const Profile = () => {

const { status, data: session } = useSession()
const profileSocialImage = session?.user?.image
const userName = session?.user?.name
const userId = session?.user?.id
console.log(userId)
  return (
    <Layout>
        <section className='profile page-section'>
            <div className='container'>
                <div className='row'>
                    <div className='col-md-8 mx-auto'>
                        <div className='card shadow rounded'>
                            <div className='card-header bg-primary'><h5 className='card-title text-success'>{userName}</h5></div>
                            <div className='card-img-top text-center p-3'>
                                <Image src={!profileSocialImage ? profileImage : profileSocialImage} width={150} height={150} property={true} className='img-fluid rounded-circle' alt={`${userName} Profile Photo`}/>
                                <br />
                                <Link href="/" className='btn btn-primary btn-sm mt-3' data-bs-toggle="modal" data-bs-target="#profileModal">Update</Link>
                            </div>
                           
                            <ul className='list-group list-group-flush'>
                                <li className="list-group-item text-center fw-bold fs-5">Enrolled in:</li>
                                <li className="list-group-item">An item <span className='float-end'><Link href="/" className='btn btn-danger btn-sm'>Cancel</Link></span></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            <div className="modal fade" id="profileModal"  aria-labelledby="profileModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5" id="profileModalLabel">{userName}</h1>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                        <form>
                            <div className="mb-3">
                                <label htmlFor="exampleInputEmail1" className="form-label">Username</label>
                                <input type="text" className="form-control" id="name" aria-describedby="username" />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="password" className="form-label">Password</label>
                                <input type="password" className="form-control" id="password" aria-describedby="password"/>
                            </div>
                            {userId &&  <div className="mb-3">
                                <label htmlFor="image" className="form-label">Profile Image</label>
                                <input className="form-control" type="file" id="image" />
                            </div>
                            }
                            <button type="submit" className="btn btn-primary">Update</button>
                        </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </Layout>
  )
}

export default Profile