import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Home = () => {
  const [data, setData] = useState([]); 
  const [loading, setLoading] = useState(true);

  const fetchData = async () => {
    try {
      const res = await fetch("https://randomuser.me/api/?results=20");
      const json = await res.json();
      setData(json.results); // <-- array of users
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-100 p-6">
        <h1 className="text-3xl font-bold mb-6 text-center">Users</h1>
        <h2 className="text-xl text-center text-gray-600">Loading...</h2>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-3xl font-bold mb-6 text-center">Users</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {data.map((user, index) => (
          <div
            key={index}
            className="bg-white shadow-lg rounded-xl p-4 hover:shadow-xl transition"
          >
            <div className="flex justify-center mb-3">
              <img
                src={user.picture.large}
                alt={`${user.name.first} ${user.name.last}`}
                className="w-32 h-32 rounded-full border-4 border-indigo-500 object-cover"
              />
            </div>

            <h2 className="text-xl font-semibold text-center text-gray-800">
              {user.name.first} {user.name.last}
            </h2>

            <p className="text-center text-gray-600 mt-2">{user.email}</p>

            <p className="text-center text-gray-600 mt-1">
              {user.location.city}, {user.location.country}
            </p>

            {/* Optional: Example of a button (no real product route) */}
            <div className="mt-3 flex justify-center">
             <Link
  to={`/user/${index}`}
  state={{ user }}               // ✅ pass user object
>
  <button className="px-4 py-1 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">
    View
  </button>
</Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
