import Layout from '@/components/Layout'
import Image from 'next/image'
import Link from 'next/link'
import { useSession } from "next-auth/react"
import profileImage from "@/assets/images/f.webp"
const Profile = () => {

const { status, data: session } = useSession()
const profileSocialImage = session?.user?.image
  return (
    <Layout>
        <section className='profile'>
            <div className='container'>
                <div className='row'>
                    <div className='col-md-8 mx-auto'>
                        <div className='card shadow rounded'>
                            <div className='card-header bg-primary'><h5 className='card-title text-success'>Name</h5></div>
                            <div className='card-img-top text-center p-3'>
                                <Image src={!profileSocialImage ? profileImage : profileSocialImage} width={150} height={150} property={true} className='img-fluid rounded-circle'/>
                                <br />
                                <Link href="/" className='btn btn-primary btn-sm mt-3'>Update</Link>
                            </div>
                           
                            <ul className='list-group list-group-flush'>
                                <li className="list-group-item text-center fw-bold fs-5">Enrolled in:</li>
                                <li className="list-group-item">An item <span className='float-end'><Link href="/" className='btn btn-danger btn-sm'>Cancel</Link></span></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </Layout>
  )
}

export default Profile