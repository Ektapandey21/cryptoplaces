// import React from 'react';

// const features = [
//   {
//     title: "Real-Time Crypto Prices",
//     description: "Get live updates on top cryptocurrencies using the Genko API.",
//     icon: "💹",
//   },
//   {
//     title: "Secure Login System",
//     description: "Signup and login using encrypted authentication with JWT & bcrypt.",
//     icon: "🔐",
//   },
//   {
//     title: "Interactive Charts",
//     description: "Visualize market trends with dynamic line charts powered by Recharts.",
//     icon: "📈",
//   },
//   {
//     title: "User-Friendly Interface",
//     description: "Enjoy a smooth experience with responsive UI and easy navigation.",
//     icon: "🎯",
//   },
// ];

// const Features = () => {
//   return (
//     <div className="min-h-screen text-white px-6 sm:px-12 py-24 flex items-center justify-center">
//       <div className="max-w-6xl w-full bg-white/5 backdrop-blur-md rounded-3xl shadow-2xl border border-white/10 p-12 sm:p-16 relative">
//         <h1 className="text-4xl sm:text-5xl font-bold text-center mb-6 h-40"> Features</h1>

//         {/* Pull cards upward without shifting the overall height */}
//         <div className="-mt-8 grid gap-10 sm:grid-cols-2">
//           {features.map((feature, index) => (
//             <div
//               key={index}
//               className="bg-white/10 backdrop-blur-xl rounded-2xl border border-white/10 p-6 sm:p-8 hover:shadow-yellow-400/30 hover:-translate-y-1 hover:scale-[1.02] transition-all duration-300"
//             >
//               <div className="text-5xl mb-4">{feature.icon}</div>
//               <h2 className="text-2xl font-semibold mb-2">{feature.title}</h2>
//               <p className="text-gray-300">{feature.description}</p>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Features;

import React from "react";

const features = [
  {
    title: "Real-Time Crypto Prices",
    description: "Get live updates on top cryptocurrencies using the Genko API.",
    icon: "💹",
  },
  {
    title: "Secure Login System",
    description: "Signup and login using encrypted authentication with JWT & bcrypt.",
    icon: "🔐",
  },
  {
    title: "Interactive Charts",
    description: "Visualize market trends with dynamic line charts powered by Recharts.",
    icon: "📈",
  },
  {
    title: "User-Friendly Interface",
    description: "Enjoy a smooth experience with responsive UI and easy navigation.",
    icon: "🎯",
  },
];

const Features = () => {
  return (
    <div className="min-h-screen text-white px-6 sm:px-12 py-24 flex items-center justify-center">
      <div className="max-w-6xl w-full">
        <h1 className="text-4xl sm:text-5xl font-bold text-center mb-16 h-40">🚀 Features</h1>

        <div className="grid gap-12 sm:grid-cols-2">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl p-8 shadow-xl transition-all duration-300 hover:shadow-yellow-400/30 hover:scale-[1.03]"
            >
              <div className="text-5xl mb-4">{feature.icon}</div>
              <h2 className="text-2xl font-semibold mb-2">{feature.title}</h2>
              <p className="text-gray-300">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Features;

