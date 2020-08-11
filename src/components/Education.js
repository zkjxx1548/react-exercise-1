import React from 'react';

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
    <div>
      <h3>{education.year}</h3>
      <h3>{education.title}</h3>
      <p>{education.introduce}</p>
    </div>
  ));
  return educationList;
}
export default Education;
