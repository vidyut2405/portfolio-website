"use client"

import React from 'react';
import SectionHeading from './section-heading';
import { delay, motion } from 'framer-motion';

export default function About() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        delay: 0.175,
      }}
      className='mb-28 max-w-[45rem] mx-2 p-2 flex justify-center items-center sm:mb-40 scroll-mt-28'
      id='about'
    >
      <div className='text-center max-w-prose mx-auto'>
        <SectionHeading>About me</SectionHeading>
        <p className='text-justify'>
          🎓 Pre-Final Year B.Tech Student & Passionate Open-Source Contributor
        </p>
        <p className='text-justify'>
          🏢 Currently interning at E-Cell IIT Bombay as a Campus Ambassador
        </p>
        <p className='text-justify'>
          💻 Full Stack Developer focused on crafting responsive, modern web interfaces        </p>
        <p className='text-justify'>
        💡 I thrive on attending conferences, meetups to connect with like-minded individuals.
        </p>
        <p className='text-justify'>
         🎥 Hosts livestream sessions for the D3 Community
        </p>
        <p className='text-justify'>
        🧠 Love building innovative projects that solve real-world problems
        </p>
      </div>
    </motion.section>
  );
}
