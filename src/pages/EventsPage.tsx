import React from "react";
import { MainLayout } from "@/components/MainLayout";

const EventsPage: React.FC = () => (
  <MainLayout>
    <section className="py-16 md:py-20">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <h1 className="mutcu-section-title">Upcoming Events</h1>
        <p className="text-center text-muted-foreground max-w-3xl mx-auto">Join us for worship, fellowship, and outreach!</p>
      </div>
    </section>
  </MainLayout>
);

export default EventsPage;
