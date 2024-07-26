import React from "react";

const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      {/* AuthLayout header */}

      {/* AuthLayout content child pages Login/Register */}
      {children}
    </div>
  );
};

export default AuthLayout;
