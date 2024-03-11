import '../styles/Home.css'
import logo from '../img/avatar.svg'
import Card from '../components/Card';
import { NavLink } from 'react-router-dom';
import img1 from '../img/media/img1.svg'
import img2 from '../img/media/img2.svg'
import img3 from '../img/media/img3.svg'
import CardMedia from '../components/CardMedia';
import Footer from '../components/Footer';
    const data = [
        {
        id: 1,
        header: ' Making a design system from scratch',
        time: '12 Feb 2020',
        body: ' Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.'
        },
        {
        id: 2,
        header: ' Making a design system from scratch',
        time: '12 Feb 2020',
        body: ' Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.'
  
        }
    ]

    const data2 = [
        {
            titel: 'Designing Dashboards',
            img: img1,
            year: 2020,
            type: 'Dashboard',
            body:'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.'
          },
          {
            titel: 'Vibrant Portraits of 2020',
            img: img2,
            year: 2018,
            type: 'Illustration',
            body:'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.'
        
          },
          {
            titel: '36 Days of Malayalam type',
            img: img3,
            year: 2018,
            type: 'Typography',
            body:'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.'
          },
    ]

    function Home() {
    
 
 
    return (
    <div className="Home">
        <div className="header">
                <NavLink to={`/login`}>Sigi in</NavLink>
                <div>
                <NavLink to={`/work`}>Works</NavLink>
                <NavLink to={`/blog`}>Blog</NavLink>
                <NavLink to={`/login`}>Contacts</NavLink>
                </div>
              
        </div>
        <div className="header-content">
            <div className="avatar-content">
            <h1>Hi, I am John, Creative Technologist</h1>  
            <h4>Amet minim mollit non deserunt ullamco est sit 
            aliqua dolor do amet sint. Velit officia consequat 
            duis enim velit mollit. Exercitation veniam consequat 
            sunt nostrud amet.</h4>
            <button className='btn_download'>Download Resume</button>
            </div>
            
            <img alt='avatar' src={logo} className='avatar'/>
            
            
        </div> 
        <div className="recept_post">
            <div className="recept_heder">
                <span>Recent posts</span>
                <a  href='#'>View all</a>
               
            </div>
            <div className='card'>
                   {data.map((item,index) => <Card item={item} key={index}/>)}                    
            </div>
           
        </div> 
        <div className="card-media">
            <h3>Featured works</h3>
            {data2.map((item,index)=><CardMedia item={item} key={index}/>)}
        </div>
        <Footer/>      
    </div>
  );
}

export default Home;