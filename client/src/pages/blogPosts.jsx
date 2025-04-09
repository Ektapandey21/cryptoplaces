import React from "react";

const blogPosts = [
  {
    title: "Understanding Cryptocurrency Basics",
    description:
      "New to crypto? Learn about blockchain, wallets, tokens, and how this digital economy works.",
    date: "April 8, 2025",
  },
  {
    title: "Top 5 Coins to Watch in 2025",
    description:
      "Explore the most promising cryptocurrencies based on current trends and expert analysis.",
    date: "April 5, 2025",
  },
  {
    title: "How to Keep Your Crypto Safe",
    description:
      "A quick guide on best practices to secure your digital assets from hacks and fraud.",
    date: "March 30, 2025",
  },
  {
    title: "Crypto Charts: Reading Like a Pro",
    description:
      "Get the edge in trading by understanding candlestick patterns, trends, and volume analysis.",
    date: "March 20, 2025",
  },
];

const Blog = () => {
  return (
    <div className="min-h-screen text-white px-6 sm:px-12 py-24 flex items-center justify-center">
      <div className="max-w-6xl w-full">
        <h1 className="text-4xl sm:text-5xl font-bold text-center mb-16 h-40">📝 Blog</h1>

        <div className="grid gap-12 sm:grid-cols-2">
          {blogPosts.map((post, index) => (
            <div
              key={index}
              className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl p-8 shadow-xl transition-all duration-300 hover:shadow-yellow-400/30 hover:scale-[1.03]"
            >
              <h2 className="text-2xl font-semibold mb-3">{post.title}</h2>
              <p className="text-gray-300 mb-4">{post.description}</p>
              <span className="text-sm text-gray-500">{post.date}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blog;
