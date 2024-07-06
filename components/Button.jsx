

const Button = ({children, style}) => {
  return (
    <div className="d-grid mb-2">
        <button type="button" className={`btn ${style} btn-login text-uppercase fw-bold`}>
            {children}
        </button>
    </div>
  )
}

export default Button