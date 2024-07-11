
import './App.css'

function App() {

  const handeladuser = event=>{
    event.preventDefault();
    const from = event.target;
    const name = from.name.value;
    const email = from.email.value;
    const user = {name, email};
    console.log(user)

    fetch('http://localhost:5000/user',{

    method: 'POST',
    headers:{
      'content-type': 'application/json'
    },
    body: JSON.stringify(user)
    })
    .then(res => res.json())
    .then(data =>{
       console.log(data)
       if(data.insertedId){
        alert('suksesfule')
        from.reset();
      }
      }) 
  }

  return (
    <>
      <h1>Simple Crud</h1>
      <form onSubmit={handeladuser}>
        <input type="text" name="name" id="" />
        <br></br>
        <input type="email" name="email" id="" />
        <br></br>
        <input type="submit" value="Ad User" />

      </form>
      
    </>
  )
}

export default App
