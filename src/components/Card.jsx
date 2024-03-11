import '../components/styles/Card.css'

function Card({item}) {
    return (
      <div className="Card" style={{width:'700px'}}>
            <div className="Header">
                {item.header}
            </div>
            <div className="title">
                <span>{item.time}</span> &nbsp; | 
                <span>Design, Pattern</span>
            </div>
            <div className="body">
             {item.body}
             
            </div>
            <hr ></hr>
      </div>
    );
  }
  
  export default Card;



  
  