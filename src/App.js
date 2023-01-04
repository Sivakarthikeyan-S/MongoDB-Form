import React from 'react';
import { Routes, Route } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";
import ExerciseList from './components/ExerciseList';
import CreateUser from './components/CreateUser';
import CreateExercise from './components/CreateExercise';
import EditExercise from './components/EditExercise';

function App() {
  return (
    <Routes>
      <Route path='/' element={<ExerciseList />}></Route>
      <Route path='/edit/:id' element={<EditExercise />}></Route>
      <Route path='/user' element={<CreateUser />}></Route>
      <Route path='/create' element={<CreateExercise />}></Route>
    </Routes>
  )
}

export default App;