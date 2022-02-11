import React, { useEffect, useState } from "react";

const Home = () => {
  const [name, setname] = useState("");
  const getUserData = async () => {
    try {
      const res = await fetch("/getData", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = await res.json();
      if (data.err) throw new Error(data.err);
      setname(data.name);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getUserData();
  }, []);

  return (
    <div className="min-h-screen flex flex-col p-24">
      <div className="text-center text-5xl">
        <h1>Welcome {name}</h1>
        <h1>
          We are the <span className="text-cyan-400">MERN Developer</span>
        </h1>
      </div>
    </div>
  );
};

export default Home;
