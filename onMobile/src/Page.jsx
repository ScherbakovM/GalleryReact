import React from "react"
import { Component } from "./Component"
import { motion } from "framer-motion";
import background from "./background.jpg";

export const Page = ({ content }) => {

    const variants = {
        offscreen: {
            transform: 'scaleY(0.2)',
            opacity: 0,
        },
        onscreen: {
            transform: 'scale(1)',
            opacity: 1,
            transition: {
                type: "spring",
                bounce: 0.1,
                duration: 1
            }
        }
    };

    return (
        <>
            <div className="page"
            >
                <img className="background" src={background}></img>
                <motion.div
                    initial="offscreen"
                    whileInView="onscreen"
                    variants={variants}
                    viewport={{ once: false }}
                ><Component /></motion.div>
            </div>
        </>
    )
}

