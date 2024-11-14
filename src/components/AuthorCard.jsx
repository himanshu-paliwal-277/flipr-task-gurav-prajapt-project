import React from 'react';
import { Link } from 'react-router-dom';
import Facebook from '../assets/Client-First-icons/facebook.svg';
import Twitter from '../assets/Client-First-icons/twitter.svg';
import Instagram from '../assets/Client-First-icons/instagram.svg';
import LinkedIn from '../assets/Client-First-icons/linkedin.svg';

function AuthorCard({ AuthorsData }) {
  return (
    <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-6">
      {AuthorsData.map((Author, index) => (
        <Link
          key={index}
          to={`/author/${Author.Name}`} // Route to Author's details page
          className="p-4 bg-backgroundLight rounded shadow hover:scale-105 flex flex-col justify-center items-center transition transform hover:bg-backgroundLightYellow cursor-pointer"
        >
          <img src={Author.ImageUrl} alt={Author.Name} />
          <h2 className="text-2xl font-semibold text-primary">{Author.Name}</h2>
          <p>{Author.description}</p>
          <div className="flex space-x-4 mt-4">
            <img src={Facebook} alt="Facebook" />
            <img src={Twitter} alt="Twitter" />
            <img src={Instagram} alt="Instagram" />
            <img src={LinkedIn} alt="LinkedIn" />
          </div>
        </Link>
      ))}
    </div>
  );
}

export default AuthorCard;
