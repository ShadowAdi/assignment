import axios from "axios";
import { useEffect, useState } from "react";
import Card from "./components/Card";
import Navbar from "./components/Navbar";
import { Circles } from "react-loader-spinner";

function App() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const getUsers = async () => {
    setLoading(true)
    await axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((res) => {
        setUsers(res.data);
      })
      .catch((err) => {
        console.log(err);
      }).finally(setLoading(false))
  };
  useEffect(() => {
    getUsers();
  }, []);

  return (
    <main className="w-full  min-h-screen px-3 py-4 gap-8 flex flex-col items-start">
      <Navbar />
      {loading ? (
        <div className="container mx-auto p-4">
          {
            <Circles
              height="80"
              width="80"
              color="#000"
              ariaLabel="bars-loading"
              wrapperStyle={{}}
              wrapperClass=""
              visible={loading}
            />
          }
        </div>
      ) : (
        <div className="grid gap-3 mx-auto  sm:grid-cols-1 md:grid-cols-4 justify-between   ">
          {users.map((user, i) => {
            return <Card key={i} user={user} />;
          })}
        </div>
      )}
    </main>
  );
}

export default App;
