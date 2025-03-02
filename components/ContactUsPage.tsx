import ContactMe from "./ContactMe";

export default function ContactUSPage() {
  return (
    <div className="w-[99vw] h-[100vh] bg-black text-white flex flex-col justify-between gap-10 relative">
      <div className="abt-me text-[2.5vw] leading-tight w-[55%] pt-12 text-center h-[30vh] text-white">
        I’m Currently a 3rd Year Computer Science Student,but I can still free up some time for Opportunities. Feel free to contact me if you want to collaborate or have a little chat.
      </div>

      <ContactMe />
    </div>
  );
}
