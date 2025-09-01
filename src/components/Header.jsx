import React from "react";

const Header = () => {
  return (
    <header className="select-none py-5 text-center mb-8 relative overflow-hidden bg-transparent">
      {/* Glow circles */}
      <div className="absolute -top-4 -left-4 w-24 h-24 rounded-full bg-violet-600/10 blur-xl"></div>
      <div className="absolute -bottom-4 -right-4 w-24 h-24 rounded-full bg-blue-600/10 blur-xl"></div>
      <div className="absolute top-1/2 right-1/4 w-16 h-16 rounded-full bg-indigo-600/5 blur-lg"></div>

      {/* Title */}
      <h1 className="text-5xl font-bold tracking-tight mb-4 bg-gradient-to-r from-violet-300 to-blue-300 bg-clip-text text-transparent">
        Profile Registration Form
      </h1>

      {/* Subtitle */}
      <p className="text-violet-200/80 text-lg font-medium">
        Complete your profile in a few simple steps
      </p>
    </header>
  );
};

export default Header;
