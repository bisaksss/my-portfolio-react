import "./testimonials.scss";
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import YouTubeIcon from '@material-ui/icons/YouTube';

export default function Testimonials() {

    const data =[
        {
            id:"1",
            name:"Hashini Nishika",
            title:"Mannager of Comapany",
            image:"assets/person.jpg",
            description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda excepturi sed, amet, incidunt iure accusantium"

        },
        {
            id:"2",
            name:"Sampath Bandara",
            title:"Mannager of Comapany",
            image:"assets/person.jpg",
            description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda excepturi sed, amet, incidunt iure accusantium",
            feached:true

        },
        {
            id:"3",
            name:"Alex Devil",
            title:"Mannager of Comapany",
            image:"assets/person.jpg",
            description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda excepturi sed, amet, incidunt iure accusantium"

        },
    ];
    return (
        <div className="testimonials" id="testimonials">
            <h1>Testimonials</h1>
            <div className="container">

                {data.map((d)=>(

             

                    <div className={d.feached ? "card active" : "card"}>
                    <div className="top">
                        <ArrowForwardIcon className="arrow"/>
                        <img src={d.image} alt=""  className="person"/>
                        <YouTubeIcon className="icon"/>
                    </div>
                    <div className="center">
                        {d.description}
                    </div>
                    <div className="bottom">
                        <h3>{d.name}</h3>
                        <h4>{d.title}</h4>
                    </div>
                    </div>

                ))}
         
            </div>
            
        </div>
    )
}
