import { Header } from './Header/Header';
// import { ExerciseListFn } from './ExerciseListFn/ExerciseList';

// export const ExerciseList = () => {
//   return <div>
//       <Header />
//       <section class="">
//         <ExerciseListFn />
//       </section>
//   </div>
// }

import React, { Component } from 'react';

class ExerciseList extends Component  {

  render () {
    return ( 
      <div>
        <Header />
        Welcome to the Exercise List page 1
      </div>
    );
  }
}

export { ExerciseList }