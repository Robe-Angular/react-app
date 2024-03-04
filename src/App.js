//App.js
import Add from "./components/Add";
import Greetings from "./components/Greetings"; 
import MainUser from "./components/User";

function App() {
  const PasswordValid = () => <h2>Valid Password</h2>
  const PasswordInvalid = () => <h2>Invalid Password</h2>
  const PasswordState = ({isValidPassword}) => {
    if(isValidPassword){
      console.log("true");
      return <PasswordValid />
    }else{
      return <PasswordInvalid />
    }
  }
  const myName = "Kolodyo";
  const multiply = (a,b) => a*b;
  const specialClass = "not-simple-class";
  const numbers = [2,5,3,6,4];
  const userInfo = [{
    userName: "Fede",
    email: "fede@gmail.com",
    location: "India"
  },
  {
    userName: "Mario",
    email: "mario@gmail.com",
    location: "Mexico"
  },
  {
    userName: "Jere",
    email: "jere@gmail.com",
    location: "UK"
  }
];
  return (   
    <>
      {
        userInfo.map(user => (
          <ul key={user.userName + user.email + user.location}>
            <li>User name: {user.userName}</li>
            <li>{user.email}</li>
            <li>{user.location}</li>
          </ul>
        ))
      }
      <h1>{myName}</h1>
      <p>2 + 2 = {2 + 2}</p>
      <p>My firends list: {['Alex','John','Jordan']}</p>
      <p>4 * 4 = {multiply(4,4)}</p>
      <p className={specialClass}>This element is a special class</p>
      <Add></Add>      
      <Greetings/>
      {numbers.map((number) => (
        <ul key={number.toString()}>
          <li>
            {number}
          </li>
        </ul>
      ))}
      <PasswordState 
        isValidPassword = {true}
      />
      <MainUser 
        img = "https://avatars.githubusercontent.com/u/86603327?v=4"
        name = "Robe-Angular"
        hobbies = {["reading","programming","sleeping"]}
        age = {27}
      >
        <p>Im the children</p>
      </MainUser>
    </>

  );
}

export default App;
