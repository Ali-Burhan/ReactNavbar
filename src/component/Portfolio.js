import React from 'react';
import { Link } from 'react-router-dom';

const Portfolio = () => {
  const portfolioItems = [
    { id: 1, title: "Project 1", image: "path/to/image", category: "Web Development" },
    { id: 2, title: "Project 2", image: "path/to/image", category: "Graphic Design" },
    { id: 3, title: "Project 3", image: "path/to/image", category: "Photography" },
  ];

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-8">
      <h1 className="text-4xl font-medium text-center">My Portfolio</h1>
      <div className="flex flex-wrap justify-center my-12">
        {portfolioItems.map(item => (
          <div key={item.id} className="w-1/3 mx-4 my-4">
            <Link to={`/portfolio/${item.id}`}>
              <img src={item.image} alt={item.title} className="w-full rounded-lg hover:shadow-lg"/>
            </Link>
            <div className="p-4">
              <h2 className="text-lg font-medium text-center">{item.title}</h2>
              <p className="text-sm text-gray-600 text-center">{item.category}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Portfolio;
