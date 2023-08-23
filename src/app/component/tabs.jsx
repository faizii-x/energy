"use client";
import { useState } from "react";
import { Tab } from "@headlessui/react";
import Image from "next/image";
import World from "../../../public/assets/png/world.webp";


function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Tabs() {
  let [categories] = useState({
    Impacts: [
      {
        id: 1,
        img: World,
        para: "Electricity is the driving force behind technological innovations. It powers devices, appliances, and communication systems, enabling advancements in fields like information technology, healthcare, and transportation. The impact of electricity on society has been profound and far-reaching, reshaping the way we live, work, and interact with the world around us. This versatile source of energy has brought about unprecedented advancements and benefits, but it has also introduced challenges and responsibilities that demand thoughtful consideration.Positively, electricity has enabled tremendous technological progress. It serves as the foundation for modern communication, empowering global connections through the internet, smartphones, and digital platforms. It has revolutionized industries, making production processes more efficient and enabling the automation of tasks that were once labor-intensive. Healthcare has witnessed remarkable transformations, with electricity powering medical devices, imaging technologies, and diagnostic tools that have improved patient care and outcomes.Electricity's influence extends to the realm of education and information dissemination. It has democratized access to knowledge, facilitating online learning, research, and the sharing of information on a global scale. Entertainment has also been greatly impacted, with electricity driving television, streaming services, and interactive digital media that shape cultural experiences and narratives.However, the increased reliance on electricity has brought about challenges. The demand for energy has led to the burning of fossil fuels, contributing to air pollution, greenhouse gas emissions, and climate change. Ensuring a stable and reliable supply of electricity while minimizing environmental impact requires a balance between meeting energy needs and embracing sustainable practices.Furthermore, electricity accessibility is not uniform across the globe. While many regions enjoy uninterrupted power, others face energy poverty, limiting their access to education, healthcare, and economic opportunities. Bridging this gap necessitates efforts to extend electricity infrastructure and provide affordable and reliable energy sources to underserved communities.",
      },
    ],
    Benefits: [
      {
        id: 1,
        title: "Is tech making coffee better or worse?",
        date: "Jan 7",
        commentCount: 29,
        shareCount: 16,
      },
      {
        id: 2,
        title: "The most innovative things happening in coffee",
        date: "Mar 19",
        commentCount: 24,
        shareCount: 12,
      },
    ],
    Newsfeed: [
      {
        id: 1,
        title: "Ask Me Anything: 10 answers to your questions about coffee",
        date: "2d ago",
        commentCount: 9,
        shareCount: 5,
      },
      {
        id: 2,
        title: "The worst advice we've ever heard about coffee",
        date: "4d ago",
        commentCount: 1,
        shareCount: 2,
      },
    ],
  });

  return (
    <div className="grid grid-cols-1 w-3/4 mx-auto  px-2 py-16 sm:px-0">
      <Tab.Group>
        <Tab.List className="flex space-x-1 rounded-xl bg-white p-1">
          {Object.keys(categories).map((category) => (
            <Tab
              key={category}
              className={({ selected }) =>
                classNames(
                  "w-full rounded-lg py-2.5 text-md font-medium leading-5 text-green-900",
                  "ring-green-600  border",
                  selected ? "bg-green-300 " : "text-green-600 "
                )
              }
            >
              {category}
            </Tab>
          ))}
        </Tab.List>
        <Tab.Panels className="mt-2">
          {Object.values(categories).map((posts, idx) => (
            <Tab.Panel
              key={idx}
              className={classNames(
                "rounded-xl bg-white p-3",
                "ring-white ring-opacity-60  focus:outline-none focus:ring-2"
              )}
            >
              <ul>
                {posts.map((post) => (
                  <>
                    <Image className="w-3/4 h-auto mx-auto" src={post.img} />

                    <li key={post.id} className="relative rounded-md p-3">
                      <h3 className="text-[16px] font-normal leading-6 text-center mt-4">
                        {post.para}
                      </h3>

                    </li>
                  </>
                ))}
              </ul>
            </Tab.Panel>
          ))}
        </Tab.Panels>
      </Tab.Group>
    </div>
  );
}
