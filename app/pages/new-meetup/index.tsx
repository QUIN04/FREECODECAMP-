


function NewMeetupPage() {
    function addMeetupHandler(enterredMeetupData){
        console.log(enterredMeetupData);
    }
return <NewMeetupForm onAddMeetup={addMeetupHandler}/>
}

export default NewMeetupPage;