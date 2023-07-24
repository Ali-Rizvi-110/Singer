import { motion } from "framer-motion";

export default function EvenGridCard({
  imageUrl,
  title,
  location,
  date,
  time,
  price,
  delay,
}) {
  return (
    <motion.div
      className="flex flex-col p-3 bg-[#191919] w-fit"
      initial={{ y: 100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{
        type: "spring",
        stiffness: 200,
        damping: 20,
        delay,
      }}
    >
      <div
        className="rounded overflow-hidden"
        style={{
          aspectRatio: 1,
          minWidth: "100%",
          maxWidth: 360,
          marginInline: "auto",
        }}
      >
        <img
          style={{
            objectFit: "cover",
          }}
          alt="hello"
          src={imageUrl}
          className="hover:scale-110 transition-transform duration-300 ease-linear object-cover w-full aspect-square"
        />
      </div>
      <div className="p-5 grid gap-5">
        <h3 className="text-2xl font-medium">{title}</h3>
        <ul>
          <li className="flex justify-between">
            Location
            <span className="w-48">
              :<i className="px-1"> </i> {location}
            </span>
          </li>
          <li className="flex justify-between">
            Date{" "}
            <span className="w-48">
              :<i className="px-1"> </i> {date}
            </span>
          </li>
          <li className="flex justify-between">
            Time{" "}
            <span className="w-48">
              :<i className="px-1"> </i> {time}
            </span>
          </li>
        </ul>
        <div className="flex justify-between items-center">
          <span className="text-2xl font-medium">${price}</span>
          <button className="rounded-full bg-red-800 px-8 py-2 uppercase">
            buy ticket
          </button>
        </div>
      </div>
    </motion.div>
  );
}
