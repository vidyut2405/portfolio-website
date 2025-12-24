"use client";

import React from "react";
import SectionHeading from "./section-heading";
import {
    VerticalTimeline,
    VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { experiencesData } from "@/lib/data";
import { isRouteMatch } from "next/dist/server/future/route-matches/route-match";

// import { useTheme } from "@/context/theme-context";

export default function Experience() {
    return (
        <section
            id="experience"
            className="mx-auto text-center scroll-mt-[10rem]">
            <SectionHeading >My Experience</SectionHeading>
            <VerticalTimeline lineColor="gray">
                {
                    experiencesData.map((exp, index) => (
                        <React.Fragment key={index} >
                            <VerticalTimelineElement
                                visible={true}
                                contentStyle={{
                                    background: "rgba(255, 255, 255, 0.05)",
                                    boxShadow: "none",
                                    border: "1px solid rgba(0, 0, 0, 0.05)",
                                    textAlign: "left",
                                    padding: "1.3rem"
                                }}
                                date={exp.date}
                                icon={exp.icon}
                                iconStyle={{
                                    background: "rgba(255, 255, 255, 0.15)",
                                    fontSize: "1.5rem",
                                    color: "white" // Ensure icon is visible
                                }}
                                contentArrowStyle={{
                                    borderRight: "0.4rem solid rgba(255, 255, 255, 0.5)"
                                }}
                            >
                                <h3 className="font-semibold capitalize text-lg text-white">{exp.title}</h3>
                                <p className="font-normal !mt-0 text-md text-gray-300">{exp.location}</p>
                                <p className="!mt-0 text-sm text-gray-400">{exp.description}</p>
                            </VerticalTimelineElement>
                        </React.Fragment>
                    ))
                }
            </VerticalTimeline>
        </section>
    )
}
