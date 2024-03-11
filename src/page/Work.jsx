import CardMedia from '../components/CardMedia';
import '../styles/Work.css'
import { NavLink } from 'react-router-dom';
import img1 from '../img/media/img1.svg'
import img2 from '../img/media/img2.svg'
import img3 from '../img/media/img3.svg'
import img4 from '../img/media/img4.svg'
import Footer from '../components/Footer';



const data = [
  {
    titel: 'Designing Dashboards',
    img: img1,
    year: 2020,
    type: 'Dashboard',
    body:'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.',
    path: '1'
  },
  {
    titel: 'Vibrant Portraits of 2020',
    img: img2,
    year: 2018,
    type: 'Illustration',
    body:'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.',
    path: '/#'

  },
  {
    titel: '36 Days of Malayalam type',
    img: img3,
    year: 2018,
    type: 'Typography',
    body:'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.',
    path: '/#'
  },
  {
    titel: 'Components',
    img: img4,
    year: 2018,
    type: 'Components, Design',
    body:'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.',
    path: '/#'
  },

]

function Work() {
  return (
    <div className="wrapper-work" >
        <div className="header">
                <div>
                <NavLink to={`/work`}>Works</NavLink>
                <NavLink to={`/blog`}>Blog</NavLink>
                <NavLink to={`/login`}>Contacts</NavLink>
                </div>
              
          </div>
          <div className="work-body">
                <h1>Work</h1>
              {data.map((item)=><CardMedia item={item}/>)}
          </div>
          <Footer/>
    </div>
  );
}

export default Work;
