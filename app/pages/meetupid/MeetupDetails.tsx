import { Fragment } from "react";
import Classes from './MeetupDetails.module.css'

function MeetupDetails(props: any){
    return(
        
       <MeetupDetails>
        <img src={props.image} 
            alt={props.title} />
            <h1>{props.title}</h1>
            <address>{props.address}</address>
            <p>{props.description}</p>
        </MeetupDetails>
    );

}

export async function getStaticProps(){
    
}
export default MeetupDetails;