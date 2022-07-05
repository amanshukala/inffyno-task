
import { Routes, Route } from "react-router-dom";

import { useEffect, useState } from "react";

import axios from "axios";
import { Edit } from './compoment/Edit';
import { View } from './compoment/View';
import { Home } from './compoment/Home';

function App() {
  const [edit, seteditdata] = useState({});
  const [apidata, setapidata] = useState([]);
  const [update, setupdate] = useState(false);

  useEffect(() => {
    const fetchdata = async () => {
      const { data, status } = await axios.get("https://reqres.in/api/users");
      console.log(status);
      if (status === 200) {
        // setEmpdata(data.data);
        setapidata(data.data);
        setupdate(true);
      }
    };
    if (apidata.length == 0) {
      fetchdata();
    }
  }, []);

  return (
    <Routes>
      <Route
        path="/"
        element={
          <Home   apidata={apidata}   setapidata={setapidata} />}
      />
      <Route
        path="/user/:id"
        element={<View   apidata={apidata}  setapidata={setapidata} />}
        />
      <Route
        path="edit/:id"
        element={
          <Edit apidata={apidata}  setapidata={setapidata}/>}
      />

      <Route
        path="add"
        element={
          <Edit apidata={apidata}  setapidata={setapidata}/>}
      />
      <Route path="*" element={<>404</>} />
      <Route path="/error" element={<>404</>} />
    </Routes>
  );
}

export default App;