import './Main.scss';
import './animalspage.scss'; 
import './oceanpage.scss'; 
import './resortspage.scss'; 
import { Route, Switch } from 'react-router-dom';
import PageContainer from './PageContainer';

function App() {
  return (
    <Switch>

      <Route path="/" component={PageContainer} />

    </Switch>
    
  );
}

export default App;
