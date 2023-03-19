import React from "react";

const TeamMember = ({ photo, memberName, role }) => {
  return (
    <div className="wrapper flex-1 gap-6 bg-silver p-10 rounded-xl">
      <img src={photo} alt={memberName} className="w-full max-w-[255px]" />

      <div className="flex flex-col gap-1 text-center">
        <h2 className="bg-brownGr text-transparent bg-clip-text font-bold text-xl md:text-2xl xl:text-3xl">
          {memberName}
        </h2>

        <p className="text-base sm:text-lg leading-[1.2] text-darkSilver">
          {role}
        </p>
      </div>
    </div>
  );
};

export default TeamMember;
