import Profiles from "./Profiles";

export default function ContactMe() {

    interface Profile {
        name: string;
        link: string;
    }

    const profiles : Profile[]  = [
        {
            name: "LinkedIn",
            link: "https://https://www.linkedin.com/in/raunak-jijotia-666938252/"
        },

        {
            name: "Twitter",
            link: "https://x.com/jijotiaraunak2"
        },

        {
            name: "Github",
            link: "https://github.com/Raunak-1404"
        }

    ]

    return (
        <div className=" bg-black w-[100%] h-[60vh] flex flex-wrap gap-5 ">
            {profiles.map((profile,index)=> (
                <Profiles key={index} profile={profile} />
            ))}
        </div>
    )
}