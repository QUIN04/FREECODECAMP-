import MeetupItem from './MeetupItem';
import classes from './MeetupList.module.css';

function MeetupList(props){
    return(
        <ul className={class.list}>
            {props.meetups.map((meetup) =>(
                <MeetupItem
                key={meetupItem.id}
                id={meetupItem.id}
                image={meetupimage}
                title={MeetupItem.title}
                 address={MeetupItem.address}
                />
            ))

            }

        </ul>
    );
}