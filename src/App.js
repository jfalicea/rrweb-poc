import {record} from 'rrweb'
import rrwebPlayer from 'rrweb-player';
import 'rrweb-player/dist/style.css';
import events from './events'

/*
**------------------------------------------------------------------------------------
** Record
**------------------------------------------------------------------------------------
*/
// let events = []

// record({
// emit(event) {
//     // push event into the events array
//     console.log('add event')
//     console.log(events)
//     events.push(event);
// },
// });

// this function will send events to the backend and reset the events array
// async function save() {
//   const body = JSON.stringify({ events });
//   console.log('body', body)
//   events = [];
//   await fetch('http://localhost:3001/', {
//   method: 'POST',
//   headers: {
//     'Content-Type': 'application/json',
//   },
//   body,
// });
//}

//saves every 10 seconds
// setInterval(save, 10 * 1000);

/*
**------------------------------------------------------------------------------------
** Replayer
**------------------------------------------------------------------------------------
*/
if(events.length < 2){
  console.log('nothing to replay')
  console.log(events)
}else{
  new rrwebPlayer({
    target: document.getElementById('root2'), // customizable root element
    props: {
      events,
    },
  });
}
function App() {
  return (
   <div>
     <form>
       <label htmlFor="username"> username: 
        <input type='text' name='username'/>
       </label>
       <br />
       <label htmlFor="password"> password: 
         <input type="password" name='password' />
       </label>
     </form>
   </div>
  );
}

export default App;
