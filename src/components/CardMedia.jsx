import '../components/styles/CardMedia.css'


export default function CardMedia ({item}){

    
    return(
        <div style={{width: '700px', marginBottom:'50px'}}>
            <div className="wrapper-card">
            <div className="rigth">
                <img alt='img' src={item.img}/>
            </div>
            <div className="left">
            <h2>{item.titel}</h2>
            <div style={{display:'flex', marginLeft:'20px'}}>
                <div className="year">
                    {item.year}    
                </div>
                <div style={{marginLeft:'20px', color:'rgba(134, 149, 164, 1)'}}>
                    {item.type}
                </div>     
            </div>
              {item.body}
            </div>
       
            </div>
            <hr></hr>

        </div>
        
          
    )
}