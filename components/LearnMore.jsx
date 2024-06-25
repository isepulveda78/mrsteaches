'use client'

const LearnMore = () => {
  return (
    <div className="card p-3 shadow bg-success">
        <div className="card-title">
            <h4 className="text-center text-white">Learn more about our classes</h4>
        </div>
        <div className="card-body bg-light rounded">
            <form>

                <div className="mb-3">
                    <label htmlFor="name" className="form-label fw-bold">Full Name</label>
                    <input type="text" className="form-control" id="name" placeholder="John Smith" />
                </div>

                <div className="mb-3">
                    <label htmlFor="name" className="form-label fw-bold">E-mail</label>
                    <input type="email" className="form-control"  placeholder="john.smith@example.com" />
                </div>
            
                <div className="mb-3 text-center">
                    <label htmlFor="subject" className="form-label"><small className="fw-bold">What subjects does your child need help with?</small></label>
                    <textarea className="form-control text-start" id="subject" rows="3"></textarea>
                </div>
                
                <div className="mb-3">
                    <div className="d-grid">
                        <button className="btn btn-secondary btn-lg shadow" type="button">Submit</button>
                    </div>
                </div>

            </form>
        </div>
    </div> 
  )
}

export default LearnMore