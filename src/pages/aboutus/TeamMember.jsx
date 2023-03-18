import React from "react";

const TeamMember = ({ photo, memberName, role }) => {
  return (
    <div className="wrapper flex-1 gap-6 bg-silver p-10">
      <img src={photo} alt={memberName} className="w-full max-w-[255px]" />

      <div className="text-center">
        <h2 className="bg-brownGr text-transparent bg-clip-text font-bold text-3xl">
          {memberName}
        </h2>

        <p className="text-base sm:text-lg text-darkSilver">{role}</p>
      </div>
    </div>
  );
};

export default TeamMember;
