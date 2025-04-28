import React from 'react';
import sponsorOne from '../assets/img/sponsor_one.png';
import sponsorTwo from '../assets/img/sponsor_two.png';
import sponsorThree from '../assets/img/sponsor_three.png';
import sponsorFour from '../assets/img/sponsor_four.png';

const Sponsors = () => {
  const sponsors = [sponsorOne, sponsorTwo, sponsorThree, sponsorFour];

  return (
    <div className="sponsors">
      {sponsors.map((sponsor, index) => (
        <img 
          key={index}
          loading="lazy" 
          src={sponsor} 
          alt="Sponsor" 
          className="sponsor__img" 
        />
      ))}
    </div>
  );
};

export default Sponsors;