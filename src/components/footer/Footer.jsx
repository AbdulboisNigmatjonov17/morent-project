import { useState, useEffect } from "react";
import axios from "axios";
import Logo from "../logo/logo";

const Footer = () => {
  const [footerData, setFooter] = useState([]);

  useEffect(() => {
    const getFooter = async () => {
      try {
        const ftData = await axios.get("/footer");
        setFooter(ftData.data);
      } catch (error) {
        console.log(error);
      }
    };
    getFooter();
  }, []);

  return (
    <footer className="bg-white p-10 mt-[50px]">
      <div className="flex justify-between items-start">
        <div>
          <Logo />
          <p className="text-lg pt-3 w-[300px] text-[#7bbad1]">
            Our vision is to provide convenience and help increase your sales
            business.
          </p>
        </div>

        <div className="ml-auto flex gap-3">
          {footerData.map((item) => (
            <ul key={item.id} className="flex flex-col pr-8 gap-3">
              <h1 className="text-xl font-semibold">{item.title}</h1>
              <li className="text-lg pt-3 font-medium text-[#7bbad1]">
                {item.p}
              </li>
              <li className="text-lg font-medium text-[#7bbad1]">{item.p1}</li>
              <li className="text-lg font-medium text-[#7bbad1]">{item.p2}</li>
              <li className="pb-8 text-lg font-medium text-[#7bbad1]">
                {item.p3}
              </li>
            </ul>
          ))}
        </div>
      </div>
      <hr />
      <div className="pt-7 font-semibold pb-11">
        <ul className="flex justify-between">
          <div className="flex gap-[55px] pl-11">
            <li>Privacy & Policy</li>
            <li>Terms & Condition</li>
          </div>
          <div>
            <li className="text-lg pr-8">©2022 MORENT. All rights reserved</li>
          </div>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
