import React from "react";

const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="h-full w-full">
      {/* AuthLayout header */}

      {/* AuthLayout content child pages Login/Register */}
      {children}
    </div>
  );
};

export default AuthLayout;
