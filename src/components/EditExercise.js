import { Header } from './Header/Header';
// import { EditExerciseFn } from './EditExerciseFn/EditExercise';

// export const EditExercise = () => {
//   return <div>
//       <Header />
//       <section class="">
//         <EditExerciseFn />
//       </section>
//   </div>
// }

import React, { Component } from 'react';

class EditExercise extends Component  {

  render () {
    return ( 
      <div>
        <Header />
        Welcome to the Edit Exercise page 1
      </div>
    );
  }
}

export { EditExercise }