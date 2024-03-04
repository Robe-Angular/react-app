//User.jsx
const MainUser = (props) => (
    <section>
      <img src={props.img} alt={props.name}/>
      <h3>Hobbies: 
        {props.hobbies.map((hobbie) => (
          <ul key={hobbie}>
            {hobbie}
          </ul>
        ))}
      </h3>
      <h4>Age: {props.age}</h4>
      {props.children}
    </section>
);

export default MainUser;

