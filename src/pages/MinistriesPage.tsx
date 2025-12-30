import React from "react";
import { MainLayout } from "@/components/MainLayout";

const MinistriesPage: React.FC = () => (
  <MainLayout>
    <section className="py-16 md:py-20">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <h1 className="mutcu-section-title">Our Ministries</h1>
        <p className="text-center text-muted-foreground max-w-3xl mx-auto">
          Explore our various ministries and find where you can serve and grow.
        </p>
      </div>
    </section>
  </MainLayout>
);

export default MinistriesPage;
