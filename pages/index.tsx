import type { NextPage } from "next";
import Head from "next/head";
import Navbar from "../components/Navbar";
import { motion } from "framer-motion";
import {
  riseWithFade,
  staggerChildren,
  videoAnimation,
  wordAnimation,
} from "../utils/animations";

const Home: NextPage = () => {
  return (
    <motion.div
      className="min-h-screen px-12 bg-sky"
      initial="initial"
      animate="animate"
    >
      <Head>
        <title>Home | Discover SF</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <main className="grid grid-cols-[2fr_1fr] py-11">
        <h1 className="text-7xl font-bold w-[44rem] leading-[96%] tracking-[-2px]">
          <AnimatedWords title="Where culture, cuisine, and natural beauty unite!" />
        </h1>
        <motion.div
          className="text-base leading-[150%] self-end"
          variants={riseWithFade}
        >
          Explore San Francisco's iconic Golden Gate Bridge, Alcatraz Island, Fisherman's Wharf, and eclectic neighborhoods like the Mission and Haight-Ashbury. 
          <br /><br />Immerse yourself in the city's vibrant arts, culture, and culinary scene. Discover the natural beauty of this vibrant city today!
        </motion.div>
      </main>
      <motion.video
        className="w-full py-12"
        loop
        autoPlay
        muted
        playsInline
        variants={videoAnimation}
      >
        <source src="/assets/hero-video.mp4" type="video/mp4" />
      </motion.video>
      <footer className="flex justify-center text-sm text-zinc-400 py-12">
        <p>Created by <a href="https://sahejtuli.com">Sahej Tuli</a>. Stock videos were used under fair use.</p>
      </footer>
    </motion.div>
  );
};

type AnimatedWordsProps = {
  title: string;
};

const AnimatedWords: React.FC<AnimatedWordsProps> = ({ title }) => {
  return (
    <motion.span variants={staggerChildren}>
      {title.split(" ").map((word, idx) => (
        <div key={idx} className="inline-block overflow-hidden">
          <motion.span
            className="inline-block overflow-hidden"
            variants={wordAnimation}
          >
            {word + "\u00A0"}
          </motion.span>
        </div>
      ))}
    </motion.span>
  );
};

export default Home;
