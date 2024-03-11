import instargam from '../img/social/instagram.svg'
import facebook from '../img/social/facebook.svg'
import twitter from '../img/social/twitter.svg'
import likedin from '../img/social/likedin.svg'



export default function Footer () {
   
    return(
        <div className="wrapper-footer" style={{marginTop:'50px'}}>
        <div className="social">
        <img alt='insta' src={facebook}/>  
        <img alt='insta' src={instargam}/>
        <img alt='insta' src={twitter}/>
        <img alt='insta' src={likedin}/>
        </div>
        <h3>Copyright ©2020 All rights reserved</h3>
        </div>
    )
}