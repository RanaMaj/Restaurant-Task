import './style.css'
import images from '../../../images/Header/Rectangle.png'
import Btn from '../../Btn/Btn';
import PageContent from '../PageContent/PageContent';
const SeactionHeader =()=>{
    return(
        <>
        <section className="section-header">
            <div className="overlay">
            <div className="content-sec">
                <h1>Welcome To Golden View Dine </h1>
                <p>Explore the authentic vegan dishes with your friends and family</p>
                <Btn title="Read More"/>
            </div>
            </div>
            <img src={images} alt="image-header" />
        </section>
        <PageContent />
        </>
    )
}

export default SeactionHeader;