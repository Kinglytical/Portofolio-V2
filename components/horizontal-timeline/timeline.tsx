"use client";

import React from "react";
import { career } from "./data";
import {
  Drawer,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerDescription,
  DrawerTrigger,
} from "@/components/ui/drawer";

export default function CareerTimeline() {
  return (
    <section className="bg-[#5a5370] px-6 py-24">
      {/* Heading */}
      <div className="max-w-7xl mx-auto text-center space-y-4 mb-20">
        <h2 className="text-4xl font-bold text-white">Career Journey</h2>
        <p className="text-white/70 max-w-2xl mx-auto">
          A journey shaped by curiosity, problem-solving, and continuous
          learning — evolving from handling operational workflows to building
          digital solutions through automation and full-stack development.
        </p>
      </div>

      {/* Timeline */}
      <div className="max-w-6xl mx-auto relative">
        {/* Line */}
        <div className="hidden lg:block absolute top-7 left-0 w-full h-[3px] bg-white/20 rounded-full" />

        {/* Items */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-y-14 gap-x-8">
          {career.map((item, i) => (
            <Drawer key={i}>
              <DrawerTrigger asChild>
                <div className="group cursor-pointer text-center relative">
                  {/* Dot */}
                  <div className="w-14 h-14 mx-auto rounded-full border-4 border-white bg-[#a896e6] shadow-lg transition-all duration-300 group-hover:scale-110 group-hover:bg-[#c4b5fd]" />

                  {/* Year */}
                  <h3 className="font-semibold text-white mt-4 text-lg">
                    {item.date}
                  </h3>

                  <p className="text-white/80 text-sm font-medium mt-1">
                    {item.company}
                  </p>

                  <p className="text-white/60 text-sm">{item.role}</p>

                  <p className="text-[#c4b5fd] text-xs mt-2">
                    ★ {item.project}
                  </p>

                  <p className="bg-[#6d52d5] mt-2 p-2 rounded-xl text-sm mt-1">
                    Click to explore
                  </p>
                </div>
              </DrawerTrigger>

              {/* Drawer Content */}
              <DrawerContent className="bg-[#1f1f2e] border-none">
                <DrawerHeader className="text-center">
                  <DrawerTitle className="text-2xl text-white">
                    {item.title}
                  </DrawerTitle>
                  <DrawerDescription className="text-white/70 mt-2">
                    {item.description}
                  </DrawerDescription>

                  <p className="text-sm text-white/40 mt-4">{item.date}</p>
                </DrawerHeader>
              </DrawerContent>
            </Drawer>
          ))}
        </div>
      </div>
    </section>
  );
}
