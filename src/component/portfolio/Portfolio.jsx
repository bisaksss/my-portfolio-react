import { useState } from "react";
import PortfolioList from "../portfolioList/PortfolioList";
import "./portfolio.scss";
import {featuredData,webData,mobileData} from "../../data";
import { useEffect } from "react";

export default function Portfolio() {
    const [selected,setSelected]=useState("featured");
    const [data,setData]=useState([]);
    const list =[
        {
            id:"featured",
            title:"Featured"
        },
        {
            id:"web",
            title:"Web"
        },
        {
            id:"mobile",
            title:"Mobile"
        }
    ];

    useEffect(()=>{
        switch(selected){
            case "featured":
                setData(featuredData);
                break;
            case "web":
                setData(webData);
                break;
            case "mobile":
                setData(mobileData);
                break;
            default:   
                setData(featuredData); 
        }
    },[selected]);
    return (
        <div className="portfolio" id="portfolio"> 

        <h1>Portfolio</h1>
        <ul>
        {list.map((item)=>(
            <PortfolioList title={item.title} active={selected===item.id} setSelected={setSelected} id={item.id}/>
        ))}
        </ul>
        <div className="conatiner">

            {data.map((itemData)=>(
                
                    <div className="items">

                      <img src={itemData.img} alt="" />
                      <h3>{itemData.title}</h3>
      
                    </div>

            ))}
      

          
        </div>
        
           
        </div>
    )
}
