import Layout from '@/components/Layout'
import Image from 'next/image'
import Link from 'next/link'
import { useSession } from "next-auth/react"
import profileImage from "@/assets/images/f.webp"
import { toast } from 'react-toastify'
import { useState } from 'react'
import axios from 'axios'

const Profile = () => {

const { data: session, update } = useSession()

const profileSocialImage = session?.user?.image
const userName = session?.user?.name
const userId = session?.user?.id

const [ name, setName ] = useState('')
const [ password, setPassword ] = useState('')
const [ image, setImage ] = useState('')

const uploadHandler = async (e) => {
    const url = `https://api.cloudinary.com/v1_1/${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME}/upload`;
    try {
      const {
        data: { signature, timestamp },
      } = await axios('/api/user/cloudinary-sign');
      const file = e.target.files[0];
      const formData = new FormData();
      formData.append('file', file);
      formData.append('signature', signature);
      formData.append('timestamp', timestamp);
      formData.append('api_key', process.env.NEXT_PUBLIC_CLOUDINARY_API_KEY);
      const { data } = await axios.post(url, formData)
      setImage(data.secure_url)

      await update({
        ...session,
        user: {
            ...session?.user,
            image: data.secure_url
        }
    })
    console.log(data.secure_url)
    toast.success('Image Uploaded')
    } catch (err) {
      toast.error(err)
      console.log(err)
    }
  }
 
const submitHandler = async () => {
    try {
        await axios.put(`/api/user/${userId}`, {
            image,
            name,
            password
        })
        toast.success('Profile Updated')
    } catch (error) {
        toast.error(error);
    }
}
  return (
    <Layout>
        <section className='profile page-section'>
            <div className='container'>
                <div className='row'>
                    <div className='col-md-8 mx-auto'>
                        <div className='card shadow rounded'>
                            <div className='card-header bg-primary'><h5 className='card-title text-success'>{userName}</h5></div>
                            <div className='card-img-top text-center p-3'>
                                <Image src={!profileSocialImage ? profileImage : profileSocialImage} width={150} height={150} priority="true" className='img-fluid rounded-circle profile-image' alt={`${userName} Profile Photo`}/>
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
                        <form
                        onSubmit={submitHandler}
                        encType='multipart/form-data'>

                            <div className="mb-3">
                                <label htmlFor="exampleInputEmail1" className="form-label">Username</label>
                                <input 
                                type="text" 
                                className="form-control" 
                                id="name"
                                name="name"
                                aria-describedby="username" 
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                />
                            </div>

                            <div className="mb-3">
                                <label htmlFor="password" className="form-label">Password</label>
                                <input 
                                type="password" 
                                className="form-control" 
                                id="password" 
                                aria-describedby="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                />
                            </div>

                            <div className="mb-3">
                                <input 
                                className="form-control" 
                                type="text" 
                                id="image"
                                name="image"
                                value={image}
                        
                                />
                            </div>

                            <div className="mb-3">
                                <label htmlFor="image" className="form-label">Upload Profile Image</label>
                                <input 
                                className="form-control" 
                                type="file" 
                                id="imageFile"
                                name="imageFile" 
                                accept='image/*'
                                onChange={uploadHandler} 
                                />
                            </div>
                            
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