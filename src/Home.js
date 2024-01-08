import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Routes,
  useParams
} from 'react-router-dom';

const User = () => {
  let { id } = useParams();
  return <h2>User ID: {id}</h2>;
};

const App = () => {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/user/1">User 1</Link>
            </li>
            <li>
              <Link to="/user/2">User 2</Link>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route path="/user/:id" element={<User />} />
          <Route path="/" element={<h2>Home Page</h2>} />
          <Route path="*" element={<h2>404 Not Found</h2>} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;