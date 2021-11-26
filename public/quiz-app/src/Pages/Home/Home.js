import "./Home.css"
import { Button, MenuItem, TextField } from "@material-ui/core";
import Categories from "../../Data/Categories"
import { useState } from 'react';
import { useHistory } from "react-router";
import ErrorMessage from "../../components/ErrorMessage/ErrorMessage";

const Home = ({ name, setName,fetchQuestions }) => {

     const [category, setCategory] = useState("");
     const [difficulty, setDifficulty] = useState("");
     const [error, setError] = useState(false);
     const history = useHistory();
     const handleSubmit = () => {
      if (!category || !difficulty || !name) {
        setError(true);
        return;
      } else {
        setError(false);
        fetchQuestions(category, difficulty);
        history.push("/quiz");
      }
    };
    return(

        <div className="content">
        <div className="settings">
          <span style={{ fontSize: 30, color:'white'}}>Quiz Settings</span>
          <div className="settings__select">
          {error && <ErrorMessage>Please Fill all the feilds</ErrorMessage>}

              <TextField className="text"
                 style={{ marginBottom: 25 ,color: 'white'}}
                 label="Enter Your name"
                 variant="outlined"
                 onChange={(e)=> setName(e.target.value)}
              />
              <TextField
            select
            label="Select Category"
            variant="outlined"
            style={{ marginBottom: 30 }}
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >
            {Categories.map((cat) => (
              <MenuItem key={cat.category} value={cat.value}>
                {cat.category}
              </MenuItem>
            ))}
          </TextField>
          <TextField
            select
            label="Select Difficulty"
            variant="outlined"
            style={{ marginBottom: 30 }}
            value={difficulty}
            onChange={(e) => setDifficulty(e.target.value)}
          >
            <MenuItem key="Easy" value="easy">
              Easy
            </MenuItem>
            <MenuItem key="Medium" value="medium">
              Medium
            </MenuItem>
            <MenuItem key="Hard" value="hard">
              Hard
            </MenuItem>
          </TextField>
       
        </div>
        <Button className="but"
            variant="contained"
            color='secondary'
            size="large"
            onClick={handleSubmit}
          >
            Start Quiz
          </Button>
        </div>
        <img src="/19629.jpg" className="banner" alt="quiz app" />
      </div>
      
    );
  };
        
        
    


export default Home;