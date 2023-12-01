import { useEffect, useState } from "react";
import { db } from "../config/firebase";
import { collection, doc, getDocs, query } from "firebase/firestore";

export default function Card() {
  const [data, setData] = useState();
  const [showData, setShowData] = useState("5");

  useEffect(() => {
    // Get reference to main collection
    const mainRef = collection(db, "main-collection");

    // Get reference to specific doc
    const partyRef = doc(mainRef, "birthdays-party");

    // Get collection from doc
    const listRef = collection(partyRef, "list-party");

    // Query list collection
    const q = query(listRef);

    let result = [];
    getDocs(q).then((querySnapshot) => {
      querySnapshot.docs.forEach((doc) => {
        result.push({ id: doc.id, ...doc.data() });
      });
      setData(result);
    });
  }, []);
  return (
    <div>
      <div className="flex flex-col max-w-[70%] mx-auto p-10 bg-white rounded-xl space-y-5">
        <h1 className="font-normal text-3xl">{`${showData} Birthdays Today`}</h1>
        {data &&
          data.map((item) => (
            <div className="flex items-center" key={item.id}>
              <img
                className="w-[95px] h-[95px] rounded-full"
                src={item.img}
                alt=""
              />
              <div className="pl-4">
                <h2 className="font-medium text-2xl">{item.name}</h2>
                <h4 className="text-slate-700 font-medium">{item.age}</h4>
              </div>
            </div>
          ))}
        <button
          className="bg-primary-500 font-semibold text-white py-1 rounded-md hover:bg-primary-800 duration-300"
          onClick={() => {
            setData("");
            setShowData("0");
          }}
        >
          Clear All
        </button>
      </div>
    </div>
  );
}
