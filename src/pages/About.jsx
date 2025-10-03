import {useEffect} from 'react';

const About = () => {
  useEffect(() => {
    document.title = 'MATTERFUL | About'
  })

  return (
    <>
      <h1>About</h1>
    </>
  )
}

export default About