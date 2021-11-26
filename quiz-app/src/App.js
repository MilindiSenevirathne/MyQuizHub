import axios from "axios";
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home/Home';
import Quiz from './Pages/Quiz/Quiz';
import Result from './Pages/Results/Result';
import { useState } from "react";
import Form from './components/Login page/Form';
import Form1 from './components/Signup page/Form1';
import Mainpage from './components/Mainpage/Mainpage';
import CSS from './Pages/Quiz/CSS';
import JS from './Pages/Quiz/JavaScript';  
import Angular from './Pages/Quiz/Angular';
import PHP from './Pages/Quiz/PHP';
import SQL from './Pages/Quiz/SQL';
import REACT from './Pages/Quiz/React';
import Python from './Pages/Quiz/Python';

function App() {
  const [questions, setQuestions] = useState("");
  const [name, setName] = useState();
  const [score, setScore] = useState(0);
  const fetchQuestions= () => async (category = "", difficulty = "") => {
    const { data } = await axios.get(
      `https://opentdb.com/api.php?amount=10${
        category && `&category=${category}`
      }${difficulty && `&difficulty=${difficulty}`}&type=multiple`
    );
    setQuestions(data.results);
    };
 
  return (
    <BrowserRouter>
    <div className="App" style={{backgroundImage:"url(./background2.2.jpg)", backgroundRepeat:"no-repeat",backgroundSize:"90% 90%", backgroundPosition:"bottom"}}>
      <Header/>

       <Switch>

       <Route path='/' exact>
           <Home />
         </Route>
         <Route path='/login' exact>
           <Form />
         </Route>
         <Route path='/signup' exact>
           <Form1 />
         </Route>
         <Route path='/mainpage'>
           <Mainpage />
         </Route>
         <Route path='/quiz' exact>
           <Quiz 
             name={name}
             questions={questions}
             score={score}
             setScore={setScore}
             setQuestions={setQuestions}
             />
         </Route>
         <Route path='/css'>
           <CSS />
         </Route>
         <Route path='/js'>
           <JS />
         </Route>
         <Route path='/angular'>
           <Angular />
         </Route>
         <Route path='/php'>
           <PHP />
         </Route>
         <Route path='/sql'>
           <SQL />
         </Route>
         <Route path='/react'>
           <REACT />
         </Route>
         <Route path='/python'>
           <Python />
         </Route>


       </Switch>


    </div>
    <Footer />
    </BrowserRouter>
  );
}

export default App;
