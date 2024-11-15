'use client'
import React from 'react'
import Resources from './Resources';
import WhatsDue from './WhatsDue';
import UpNext from './UpNext';
import { useUser } from '@clerk/nextjs';

export default function Dashboard() {
  const {user} = useUser();
  const firstName = user?.firstName || "Explorer"// This will be replaced with actual auth later

  // Sample data for the calendar
  const calendarEvents = [
    { date: "2023-11-15", title: "Team Meeting" },
    { date: "2023-11-16", title: "Project Deadline" },
    { date: "2023-11-18", title: "Presentation" },
  ]

  // Sample data for What's Due
  const dueItems = [
    { assignment: "Research Paper", date: "2023-11-20", status: "In Progress" },
    { assignment: "Math Problem Set", date: "2023-11-22", status: "Not Started" },
    { assignment: "History Essay", date: "2023-11-25", status: "Completed" },
  ]

  // Sample data for Resources
  const resources = [
    { title: "Library", url: "#", icon: "📚" },
    { title: "Study Guide", url: "#", icon: "📖" },
    { title: "Calculator", url: "#", icon: "🧮" },
    { title: "Writing Center", url: "#", icon: "✍️" },
  ]

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header with gradient */}
      <header className="bg-gradient-to-b from-white to-black p-6 text-center h-48 flex items-center justify-center">
        <h1 className="text-3xl font-bold text-white">Welcome, {firstName}</h1>
      </header>

      {/* Main content */}
      <main className="container mx-auto p-6">
        <div className="flex flex-col md:flex-row gap-6">
          {/* Resources sidebar */}
          <aside className="md:w-1/4">
            <Resources resources={resources} />
          </aside>

          {/* What's Due section */}
          <section className="md:w-1/2">
            <WhatsDue dueItems={dueItems} />
          </section>

          {/* Up Next sidebar */}
          <aside className="md:w-1/4">
            <UpNext calendarEvents={calendarEvents} />
          </aside>
        </div>
      </main>
    </div>
  )
}