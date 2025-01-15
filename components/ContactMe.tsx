import Profiles from "./Profiles";

export default function ContactMe() {

    interface Profile {
        name: string;
        link: string;
        img: string;
    }

    const profiles : Profile[]  = [
        {
            name: "LinkedIn",
            link: "https://https://www.linkedin.com/in/raunak-jijotia-666938252/",
            img: "/stack/icons8-linkedin (1).svg"
        },

        {
            name: "Twitter",
            link: "https://x.com/jijotiaraunak2",
            img: '/stack/icons8-twitter-bird-500 (1).png'
        },
        {
            name: "Github",
            link: "https://github.com/Raunak-1404",
            img: "/stack/icons8-github-100.png"
        },

        {
            name: "Instagram",
            link: "https://www.instagram.com/raunakkk.14/",
            img: '/stack/icons8-instagram-480.svg'
        }

    ]

    return (
        <div className=" bg-black w-[100%] h-[60vh] flex gap-5 ">
            {profiles.map((profile,index)=> (
                <Profiles key={index} profile={profile} />
            ))}
        </div>
    )
}