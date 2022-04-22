import React, { useState } from "react";
import { motion } from "framer-motion";

const Toggle = ({ children, title }) => {
  const [toggle, setToggle] = useState(false);
  return (
    <motion.div
      className="toggle-link"
      layout
      onClick={() => setToggle(!toggle)}
    >
      <motion.h2 layout>{title}</motion.h2>
      {toggle ? children : ""}
      <div className="faq-line"></div>
    </motion.div>
  );
};

export default Toggle;
