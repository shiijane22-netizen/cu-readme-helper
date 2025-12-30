import React from "react";
import { Link } from "react-router-dom";
import { MainLayout } from "@/components/MainLayout";
import { Button } from "@/components/ui/button";

const NotFound: React.FC = () => {
  return (
    <MainLayout>
      <div className="flex min-h-[60vh] flex-col items-center justify-center px-4 text-center">
        <h1 className="text-7xl md:text-9xl font-heading font-bold text-secondary mb-4">404</h1>
        <h2 className="text-2xl md:text-3xl font-heading text-primary mb-4">Page Not Found</h2>
        <p className="text-muted-foreground mb-8 max-w-md">
          The page you're looking for doesn't exist or has been moved. Let's get you back on track.
        </p>
        <Link to="/">
          <Button className="bg-secondary text-primary hover:bg-secondary/90 font-heading uppercase">
            Back to Home
          </Button>
        </Link>
      </div>
    </MainLayout>
  );
};

export default NotFound;
