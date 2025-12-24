"use client"

import React from 'react'
import { useState, useEffect } from 'react'
import { motion } from "framer-motion"
import { links } from '@/lib/data'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function Header() {
  const pathname = usePathname()

  return (
    <header className='z-[999] relative'>
      <motion.div className='fixed top-0 left-1/2 -translate-x-1/2 
        h-[6rem] w-full rounded-none border border-white/10 border-opacity-40
         bg-black bg-opacity-30 shadow-lg shadow-black/[0.03] 
         backdrop-blur-[0.5rem] sm:top-6 sm:h-[3.25rem] sm:w-[45rem] 
         sm:rounded-full lg:w-[50rem]'
        initial={{ y: -100, x: "-50%", opacity: 0 }}
        animate={{ y: 0, x: "-50%", opacity: 1 }} >
      </motion.div>

      <nav className='flex fixed top-[0.15rem] left-1/2 h-12 -translate-x-1/2 py-2 sm:top-[1.7rem] sm:h-[initial] sm:py-0'>
        <ul className='flex w-full flex-wrap items-center justify-center gap-y-1 text-[0.85rem] font-medium text-gray-400 sm:w-[initial] sm:flex-nowrap sm:gap-4 lg:gap-5 lg:text-[0.9rem]'>
          {links.map(link => {
            // For Home link, use different href based on current page
            const href = link.name === "Home" && pathname === "/" ? "#home" : link.hash

            return (
              <motion.li
                key={link.hash} className="h-3/4 flex items-center justify-center"
                initial={{ y: -100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}>
                <Link href={href} className="flex w-full items-center justify-center px-2 py-3 hover:text-gray-50 transition sm:px-3" >
                  {link.name}
                </Link>
              </motion.li>
            )
          })}
        </ul>
      </nav>
    </header>
  )
}