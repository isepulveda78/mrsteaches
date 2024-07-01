

const Button = ({children, type}) => {
  return (
    <div className="d-grid mb-2">
        <button className={`btn ${type} btn-login text-uppercase fw-bold`} type="submit">
            {children}
        </button>
    </div>
  )
}

export default Button