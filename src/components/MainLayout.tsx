import React from "react";
import { Navbar } from "./Navbar";
import { Footer } from "./Footer";
import { ConfirmationDialog } from "./ConfirmationDialog";

interface MainLayoutProps {
  children: React.ReactNode;
}

export const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col bg-background font-body">
      <Navbar />
      <main className="flex-1 pt-[70px]">{children}</main>
      <Footer />
      <ConfirmationDialog />
    </div>
  );
};
