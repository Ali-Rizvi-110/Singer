import { v4 as uuid } from "uuid";
import { motion } from "framer-motion";
import EvenGridCard from "../component/EventGridCard";
import { useEffect, useState } from "react";
import axios from "axios";

export default function EventGrid() {
  const [events, setEvents] = useState([{}]);
  const fetchData = async () => {
    try {
      const response = await axios.get("http://localhost:4500/api/admin/showEvents");
      setEvents(response.data);
	  console.log(response.data);
      console.log("this is my data -->", response.data);
    } catch (error) {
      console.log("Something error In Asxios and Url", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);


  return (
    <>
      <div className="pt-32 text-light bg-dark">
        <motion.h1
          className="text-5xl uppercase text-center mb-9"
          initial={{
            y: 200,
            opacity: 0,
            scale: 0.8,
          }}
          animate={{
            y: 0,
            opacity: 1,
            scale: 1.1,
          }}
          transition={{
            type: "spring",
            stiffness: 200,
            damping: 20,
          }}
        >
          {"Event Grid View".split("").map((char, i) => (
            <motion.span
              initial={{
                opacity: 0,
                scale: 0.8,
              }}
              animate={{
                opacity: 1,
                scale: 1,
              }}
              transition={{
                duration: 0.2,
                type: "smooth",
                delay: i / 20,
              }}
            >
              {char}
            </motion.span>
          ))}
        </motion.h1>
        <motion.div
          className="bg-[#0d0d0d] grid lg:grid-cols-3 gap-5 items-start w-fit justify-center mx-auto p-5 rounded-md h-min"
          initial={{ y: 300, scale: 0.8, opacity: 0.3 }}
          animate={{ y: 0, scale: 1, opacity: 1 }}
          transition={{
            type: "spring",
            stiffness: 200,
            damping: 20,
          }}
        >
          {events?.map((event, i) => (
            <EvenGridCard
              key={i}
              imageUrl={`http://localhost:4500/api/uploads/${event.image}`}
              title={event.name}
              date={event.startDate}
              location={event.location}
              time={event.startDate}
              price={event.price}
              delay={i / 10 + 0.3}
            />
          ))}
        </motion.div>
      </div>
    </>
  );
}