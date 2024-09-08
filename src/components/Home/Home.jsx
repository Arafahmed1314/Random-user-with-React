import { useEffect, useState } from "react";
import Card from "../Card/Card";

export default function Home() {
  const [data, setData] = useState([]);
  const [imgData, setImgData] = useState([]);
  const [rightData, setRightData] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);

  useEffect(() => {
    fetch("https://picsum.photos/v2/list?page=1&limit=10")
      .then((res) => res.json())
      .then((data) => setImgData(data));
  }, []);

  const handleUser = (img) => {
    const data = [...rightData, img];
    setRightData(data);
    console.log("it works", img);
  };

  return (
    <div className="py-8 flex ">
      <div className="left-container md:w-[70%] border-r-2">
        <div className="card-wrapper flex flex-col md:flex-row gap-5 flex-wrap justify-center">
          {data.map((user, index) => (
            <Card
              key={index}
              user={user}
              handleUser={handleUser}
              img={imgData[index]}
            />
          ))}
        </div>
      </div>
      <div className="right-container w-[30%]">
  <h1 className="bg-gray-800 p-4 text-white text-xl rounded-lg">
    Total Salary:
    {rightData.reduce((total, img) => total + img.height, 0)}$
    <br />
    <br />
    Total People Added: {rightData.length}
  </h1>
</div>


    </div>
  );
}
