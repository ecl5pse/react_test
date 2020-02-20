import React from 'react';
import UserCard from './componets/UserCard'


const  testUser = {
  firstName :'Test',
  lastName:'Test',
  email:"test@test.com",
  profileImage:'https://image.shutterstock.com/image-vector/male-silhouette-avatar-profile-picture-260nw-199246382.jpg'
};


function App() {

  return <UserCard user = {testUser}/>

}

export default App;