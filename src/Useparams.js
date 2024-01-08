import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Link,
  Routes,
  useParams,
} from "react-router-dom";
function Useparams() {
  //gives only one value of object
  // const UserId = () => {
  //   let { id } = useParams();
  //   console.log({ id });
  //   return <li>{"User id :" + id}</li>;
  // };
  //const array of object
  const User = [
    {
      id: 1,
      name: "anujsir",
      workon: "ruby",
    },
    {
      id: 2,
      name: "nirmalsir",
      workon: "fullstack",
    },
  ];
  console.log(User[0].id)
  function Developer() {
    let { id } = useParams();

    return User.filter((d) => d.id === parseInt(id)).map((data) => {
      console.log(typeof(data.id));
      return (
        <ul>
          <li>{"id: "+data.id}</li>
          <li>{"Workon: "+data.workon}</li>
          <li>{"Name: "+data.name}</li>
        </ul>
      );
    });
  }

  return (
    <div>
      <Router>
        <div>
          <nav>
            <ul>
              {User.map((e) => {
                return (
                  <div>
                    <li>
                  
                      <Link to={`/user/${e.id}`}>user {e.id}</Link>
                    </li>
                  </div>
                );
              })}
            </ul>
          </nav>
        </div>
        <Routes>
          <Route path="/" element={<h1>Home Page</h1>} />
          <Route path="/user/:id" element={<Developer />} />
          <Route path="*" element={<h1>404 Page not Found</h1>} />
        </Routes>
      </Router>
    </div>
  );
}

export default Useparams;
