import './Tombol.css'
export default function Tombol({children, ...props}){
    return(
        <button className="btn" {... props}>
            {children}
        </button>
    )
}