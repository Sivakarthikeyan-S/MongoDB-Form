import { Header } from './Header/Header';
// import { CreateUserFn } from './CreateUserFn/CreateUser';

// export const CreateUser = () => {
//   return <div>
//       <Header />
//       <section class="">
//         <CreateUserFn />
//       </section>
//   </div>
// }

import React, { Component } from 'react';

class CreateUser extends Component  {

  render () {
    return ( 
      <div>
        <Header />
        Welcome to the Create User page 1
      </div>
    );
  }
}

export { CreateUser }