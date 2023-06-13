import { useState } from "react";
import Tombol from "./Tombol";
import './Mountain.css'

function Mountain(props){
    const [showMore, setShowMore] = useState(false);
    const [suka, setSuka] = useState(false);

    function handleMoreClick() {
        setShowMore(!showMore);
    }
    function handleClick(){
        setSuka(!suka);
        
    }
    return (
        <div className="container">
            <div className="content"> 
                <h2>Gunung {props.nama}</h2>
                <img src={props.gambar} className="image"  />
                <p>Ketinggian : {props.ketinggian}</p>
                {showMore && <p className="des">{props.deskripsi}</p>}
                <Tombol className="btn" onClick={handleClick} style={{backgroundColor:suka?"green":"rgb(65, 167, 219)"}}>
                    {suka?"Batal Suka":"Suka"}
                </Tombol>
                
                <Tombol  onClick={handleMoreClick}>
                    Selengkapnya
                </Tombol>
            </div>
        </div>
    )
}

export default Mountain;