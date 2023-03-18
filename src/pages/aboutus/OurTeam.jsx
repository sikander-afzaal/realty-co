import React from "react";
import TeamMember from "./TeamMember";

const members = [
  {
    photo: "/sean-kim.png",
    memberName: "Sean Kim",
    role: "Technical",
  },
  {
    photo: "/sung-choi.png",
    memberName: "Sung Choi",
    role: "General Management",
  },
  {
    photo: "/jenny-hu.png",
    memberName: "Jennu Hu",
    role: "Mortgage",
  },
  {
    photo: "/jonathan-kim.png",
    memberName: "Jonathan Kim",
    role: "Something",
  },
];

const OurTeam = () => {
  return (
    <div className="wrapper px-4 sm:px-8 xl:px-16 gap-16 mt-[70px]">
      <div className="wrapper max-w-[1400px] gap-6">
        <h2 className="testimonial-heading text-3xl sm:text-4xl">Our Team</h2>
        <p className="text-lg sm:text-xl text-center text-blogPara">
          At Top Realty Co., we take pride in being a team of highly experienced
          individuals, each with 10+ years of expertise in real estate,
          mortgage, and law. We understand the importance of trust when it comes
          to property management, which is why we promise to deliver the best
          services to our clients. Our commitment to providing fast and
          responsive services has helped us build long-term relationships with
          our clients, and we strive to continue offering trustworthy and
          reliable services in the future.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6">
        {members.map(({ photo, memberName, role }, index) => (
          <TeamMember
            key={index}
            photo={photo}
            memberName={memberName}
            role={role}
          />
        ))}
      </div>
    </div>
  );
};

export default OurTeam;
