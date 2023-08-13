import './App.css';
import Header from './components/Header';
import Main from './components/Main';
import Grid from '@mui/material/Grid';
import Left from './components/Left';
import Bottom from './components/Bottom';

function App() {
  return (
    <div className="App">
      <Header />
      <Grid container>
        <Grid item xs={8}><Main /></Grid>
        <Grid item xs={4}><Left /></Grid>
      </Grid>
      <Grid container spacing={2}>
        <Grid item xs={4}><Bottom image={1}
          title={'Reviving Retro PCs'}
          article={`What happens when old PCs are given modern upgrades?`}
        /></Grid>
        <Grid item xs={4}><Bottom image={2}
          title={'Top 10 Laptops of 2022'}
          article={` Our best picks for various needs and budgets.`}
        /></Grid>
        <Grid item xs={4}><Bottom image={3}
          title={'The Growth of Gaming'}
          article={`How the pandemic has sparked fresh opportunities.`} /></Grid>
      </Grid>
    </div>
  );
}

export default App;
