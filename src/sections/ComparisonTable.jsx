import React from "react";
import Check from '../assets/check.svg'
import Close from '../assets/close.svg'
import Uniswap from '../assets/uniswap-img.png'
import Moonex from '../assets/moonex-img.png'

const ComparisonTable = () => {
  const data = [
    { feature: "Point no one", moonex: true, uniswap: false },
    { feature: "Point no two this", moonex: true, uniswap: false },
    { feature: "Point no two this", moonex: true, uniswap: false },
    { feature: "Point no two this", moonex: true, uniswap: false },
    { feature: "Point no two this", moonex: true, uniswap: false },
  ];

  return (
    <section className="bg-primary py-10">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-white font-mono font-bold text-3xl mb-6 px-5"> Why <span className="text-yellow-300">MoonEX ? </span> </h2>

        <div className="bg-white/5 rounded-lg p-8 max-w-6xl mx-auto">
          <table className="w-full border-collapse">

            <thead>
              <tr className="text-yellow-300 text-left text-lg">
                <th className="py-4 border-r border-gray-600 font-mono font-bold">Comparison</th>
                <th className="py-4 border-r border-gray-600">
                  <div className="flex items-center justify-center">
                    <span className="text-yellow-400"><img src={Moonex} width={100} height={100} alt="Moonex" /></span>
                  </div>
                </th>
                <th className="py-4 text-pink-600 border-r border-gray-600">
                  <div className="flex items-center justify-center">
                    <img src={Uniswap} width={100} height={100} alt="Uniswap" />
                  </div>
                </th>
              </tr>
            </thead>
            <tbody>
              {data.map((item, index) => (
                <tr key={index} className="text-white border-t border-gray-600">
                  <td className="py-4 pl-4 text-sm border-r border-gray-600">{`${index + 1}. ${item.feature}`}</td>
                  <td className="text-center border-r border-gray-600">
                    {item.moonex ? (
                      <img src={Check} width={30} height={30} alt="Checked" />
                    ) : (
                      <img src={Close} width={30} height={30} alt="Closed" />)}
                  </td>
                  <td className="text-center">
                    {item.uniswap ? (
                      <img src={Check} width={30} height={30} alt="Checked" />
                    ) : (
                      <img src={Close} width={30} height={30} alt="Closed" />)}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

export default ComparisonTable;
