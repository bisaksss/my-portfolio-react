import "./works.scss";
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';

export default function Works() {

    const data=[
        {
            id:"1",
            icon:"assets/smartphone.png",
            title:"Web Development",
            discription:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempore eligendi, est voluptatem eos optio asperiores ",
            image:"assets/download.jpg"
        },
        {
            id:"2",
            icon:"assets/smartphone.png",
            title:"Mobile Development",
            discription:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempore eligendi, est voluptatem eos optio asperiores ",
            image:"assets/download.jpg"
        },
        {
            id:"3",
            icon:"assets/smartphone.png",
            title:"Video editing",
            discription:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempore eligendi, est voluptatem eos optio asperiores ",
            image:"assets/download.jpg"
        },
    ];
    return (
        <div className="works" id="works">
            <div className="slider">
                
                {data.map((d)=>(
                        <div className="container">
                        <div className="item">
                                            
                        <div className="left">
                            <div className="leftCOntainer">
                                <div className="imgContainer">
                                    <img src={d.icon} alt="" />
                                </div>
                                <h2>{d.title}</h2>
                                <p> 
                                   {d.discription} 
                                </p>
                                <span>Project</span>
                            </div>

                        </div>
                        <div className="right">
                            <img src={d.image} alt="" />
                        </div>
                        </div>
                        </div>


                ))}
              
               
            </div>

            <ArrowForwardIosIcon className="arrow right"/>
            <ArrowBackIosIcon className="arrow left"/>
            
        </div>
    )
}
