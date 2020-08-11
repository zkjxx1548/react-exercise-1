import React from 'react';
import './Education.css';

const educations = [
  {
    year: '1990',
    title: 'I was born in Katowice',
    introduce: 'Lorem ipsum dolor sit amet,consectetur adoposicing elit. Sapiente, exercitationem, totam, dolores iste dolore est aut modi.'
  },
  {
    year: '2005',
    title: 'I was born in Katowice',
    introduce: 'Lorem ipsum dolor sit amet,consectetur adoposicing elit. Sapiente, exercitationem, totam, dolores iste dolore est aut modi.'
  },
  {
    year: '2009',
    title: 'I was born in Katowice',
    introduce: 'Lorem ipsum dolor sit amet,consectetur adoposicing elit. Sapiente, exercitationem, totam, dolores iste dolore est aut modi.'
  }, 
  {
    year: '2021',
    title: 'I was born in Katowice',
    introduce: 'Lorem ipsum dolor sit amet,consectetur adoposicing elit. Sapiente, exercitationem, totam, dolores iste dolore est aut modi.'
  }
];

const Education = () => {
  const educationList = educations.map(education => (
    <div className="education">
      <h3 className="education-year">{education.year}</h3>
      <div className="education-content">
        <h3 className="education-info">{education.title}</h3>
        <p className="education-introduce">{education.introduce}</p>
      </div>
    </div>
  ));
  return educationList;
}
export default Education;
