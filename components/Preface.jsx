"use client"
import SocialMedia from "./SocialMedia";
import useMediaQuery from "@/hooks/useMediaQuery";
import { motion } from "framer-motion";
import Image from "next/image";
import AnchorLink from "react-anchor-link-smooth-scroll";

export default function Preface({ setSelectedPage }) {
  const isAboveLarge = useMediaQuery("(min-width: 1060px)");
  return (
    <section
      id="home"
      className="md:flex md:justify-between md:items-center gap-16 md:h-full py-10"
    >
      {/* IMAGE SECTION */}
      <div
       className="basis-3/5 z-10 mt-16 md:mt-32 flex justify-center md:order-2"
       >
        {isAboveLarge ? (
          <div
            className="relative z-0 ml-20 before:absolute before:-top-20 before:-left-20 before:rounded-t-[400px]
            before:w-full before:max-w-[400px] md:before:max-w-[600px] before:h-full before:border-2 before:border-blue before:z-[-1]"
          >
           
              <Image
                alt="profile"
                className="hover:filter hover:saturate-200 transition duration-500 z-10 w-full max-w-[400px] md:max-w-[600px]"
                src="/assets/profile-image.png"
                 width={500}
                 height={500}
              />
            
          </div>
        ) : (
          
            <Image
              alt="profile"
              className="z-10 w-full max-w-[400px] md:max-w-[600px]"
              src="/assets/profile-image.png"
               width={500}
               height={500}
            />
          
        )}
      </div>

      {/* MAIN TEXT */}
      <div className="z-30 mt-12 basis-2/5 md:mt-32">
        {/* HEADINGS */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <p className="z-10 text-6xl text-center font-playfair md:text-start">
            Jack {""}
            <span
              className="xs:relative xs:text-deep-blue xs:font-semibold z-20 xs:before:content-brush
              before:absolute before:-left-[25px] before:-top-[70px] before:z-[-1]"
            >
              Migwambo
            </span>
          </p>

          <p className="mt-10 text-sm text-center mb-7 md:text-start">
            Adipiscing arcu, in aliquam fringilla cursus. Elit arcu elementum
            viverra malesuada sem ac faucibus dolor. Sagittis scelerisque.
          </p>
        </motion.div>

        {/* CALL TO ACTIONS */}
        <motion.div
          className="flex justify-center mt-5 md:justify-start"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <AnchorLink
            className="py-3 font-semibold transition duration-500 rounded-sm bg-gradient-rainblue text-deep-blue px-7 hover:bg-blue hover:text-white"
            onClick={() => setSelectedPage("contact")}
            href="#contact"
          >
            Contact Me
          </AnchorLink>
          <AnchorLink
            className="rounded-r-sm bg-gradient-rainblue py-0.5 pr-0.5"
            onClick={() => setSelectedPage("contact")}
            href="#contact"
          >
            <div className="flex items-center justify-center w-full h-full px-10 transition duration-500 bg-deep-blue hover:text-red font-playfair">
              Let&apos;s talk
            </div>
          </AnchorLink>
        </motion.div>

        <motion.div
          className="flex justify-center mt-5 md:justify-start"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <SocialMedia />
        </motion.div>
      </div>
    </section>
  );
}
