import '../styles/Blog.css';
import { NavLink } from 'react-router-dom';
import Card from '../components/Card';
import Footer from '../components/Footer';


const data = [
    {header: ' UI Interactions of the week',
     time: '12 Feb 2020',
     body: ' Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.'
},
    {
        header: ' UI Interactions of the week',
        time: '12 Feb 2020',
        body: ' Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.'

    }
    ,
    {
        header: 'UI Interactions of the week',
        time: '12 Feb 2020',
        body: ' Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.'

    }
   
    
]
function Blog() {
 


    return (
        <div class="wrapper-blog">
          <div className="header">
                <NavLink to={`/login`}>Sigi in</NavLink>
                <div>
                <NavLink to={`/work`}>Works</NavLink>
                <NavLink to={`/blog`}>Blog</NavLink>
                <NavLink to={`/login`}>Contacts</NavLink>
                </div>
              
          </div>
          <div className="wrapper-body">
                <h1>Blog</h1>
                {data.map((item)=><Card item={item} />)}
          </div>
        <Footer/>
        </div>
    
    ) 
  }
  
  export default Blog;