import { NavLink } from 'react-router-dom';
import  '../work/WorkDetail.css'
import img1 from './img1.svg'
import img2 from './img2.svg'
import img3 from './img3.svg'
import Footer from '../../components/Footer';

export default function WorkDetail (){
    return(
        <div className="wrapper-work" >
        <div className="header">
                <div>
                <NavLink to={`/blog`}>Blog</NavLink>
                <NavLink to={`/work`}>Works</NavLink>
                <NavLink to={`/login`}>Contacts</NavLink>
                </div>              
          </div>
          <div className="work-detail">
                <h1>Designing Dashboards with usability in mind</h1>
                <div className="titel">
                    <div className="year-work">
                        2020
                    </div>
                    <h4 style={{fontWeight:'100'}}>Dashboard, User Experience Design</h4>
                </div>
                    <span>
                    Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia
                     consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.
                    </span>
                    <img alt='alt' src={img1}/>
                    <h2>Heading 1</h2>
                    <h3>Heading 2</h3>
                    <span>
                    Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. 
                    Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.
                    </span>
                    <img alt='alt' src={img2}/>
                    <img alt='alt' src={img3}/>
          </div>
        <Footer/>
        </div>
    )
}