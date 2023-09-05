import Head from 'next/head'
import About from '../components/About'
import Contact from '../components/Contact'
import Main from '../components/Main'
import Projects from '../components/Projects'
import Skills from '../components/Skills'
import Navbar from '@/components/NavBar'
import ListItem from '@/components/ListItem'
import TwoSection from '@/components/TwoSection'

export default function Home({ darkMode, setDarkMode }) {

  return (
    <>
      <Head>
        <title>Rinaldo | Full Stack Developer</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/myImage.jpg" />
      </Head>
      <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
      {/* <Main /> */}
      <About />
      <ListItem/>
      {/* <TwoSection/> */}
      {/* <Skills />
      <Projects /> */}
      {/* <Contact /> */}
    </>
  )
}
