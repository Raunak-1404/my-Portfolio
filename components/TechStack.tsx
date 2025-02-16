'use client';
import Image from "next/image"
import { motion } from "framer-motion";

const TechStackImage : string[] = [
    '/stack/Bash.svg',
    '/stack/Bootstrap.svg',
    '/stack/CSS.png',
    '/stack/ChartJs.svg',
    '/stack/Docker.svg',
    '/stack/Express.png',
    '/stack/Git.svg',
    '/stack/HTML.png',
    '/stack/Javascript.svg',
    '/stack/K8s.svg',
    '/stack/MaterialUI.svg',
    '/stack/MongoDB.svg',
    '/stack/NextJsCircle.png',
    '/stack/NodeJs.svg',
    '/stack/React.png',
    '/stack/Redux.svg',
    '/stack/Tailwind.png',
    '/stack/Typescript.svg',
    '/stack/c-1.svg',
    '/stack/c.svg',
    '/stack/cloudflare-1.svg',
    '/stack/recoil-js.svg',
    '/stack/icons8-github-100.png',
    '/stack/java.svg',
    '/stack/prisma-2.svg',
    '/stack/python-5.svg',
    '/stack/postgresql.svg',
];

export default function TechStack() {
    return (
        <>
            {TechStackImage.map((img,index)=> {
                return (
                    <TechImage key={index} img={img}/>
                )
            })}
        </>
    )
};

type TechImageProps = {
    img: string
};

function TechImage (img:TechImageProps) {
    
    return (
        <motion.div
        whileHover={{ scale: 1.2 }}
        whileTap={{ scale: 0.95 }}
        className="object-cover">
            <Image 
                src = {img.img}
                width={90}
                height={10}
                alt="Tech Stack"
                quality={100}
            />
        </motion.div>
    )
}






