

import './App.css';
import { useFetch } from './useFetch';



function App() {
  const { data, loading } = useFetch(null)
  return (
    <div className="App">
      <ul>
        {loading && <li>loading..</li>}
        {data?.map((user)=>(
          <li key={user.id}>
            {user.nome}
            </li>
        ))}
      </ul>
     
    </div>
  );
}

export default App;
