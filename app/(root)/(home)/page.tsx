"use client";

import MeetingTypeList from "@/components/MeetingTypeList";
import { useGetCalls } from "@/hooks/useGetCalls";
import React from "react";
import Clock from "react-live-clock";

const Home = () => {
  const now = new Date();
  const date = new Intl.DateTimeFormat("en-US", {
    dateStyle: "full",
  }).format(now);
  const { upcomingCalls } = useGetCalls();

  return (
    <section className="flex size-full flex-col gap-10 text-white">
      <div className="h-[300px] w-full rounded-[20px] bg-home bg-cover">
        <div className="flex  h-full flex-col justify-between max-lg:px-5 max-lg:py-8 lg:p-11">
          {!upcomingCalls || upcomingCalls.length === 0 ? null : (
            <h2 className="glassmorphism max-w-[290px] rounded py-2 text-center text-base font-normal">
              Upcoming Meeting at:{" "}
              {upcomingCalls?.[
                upcomingCalls?.length - 1
              ].state?.startsAt?.toLocaleString()}
            </h2>
          )}
          <div className="flex flex-col gap-2">
            <h1 className="text-4xl font-extrabold lg:text-7xl">
              <Clock format="HH:mm:ss" interval={1000} ticking={true} />
            </h1>
            <p className="text-lg font-medium text-sky-1 lg:text-2xl">{date}</p>
          </div>
        </div>
      </div>

      <MeetingTypeList />
    </section>
  );
};

export default Home;
