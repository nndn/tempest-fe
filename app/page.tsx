"use client";

import { Button } from "@/components/ui/button";
import Spline from "@splinetool/react-spline";

export default function Home() {
  return (
    <div>
      <div className="max-w-2xl p-5">
        <div className="m-10 background-wave">
          <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
            {"/* Project Tempest */"}
          </h1>
          <blockquote className="mt-6 border-l-2 pl-6 italic max-w-md ">
            Fuel open source ideas, share knowledge, and shape the future
            together. Join the movement
          </blockquote>

          <div className="flex items-center mt-8">
            <Button>Interested?</Button>
            <p className="italic font-light ml-4 animate-pulse">
              Let us know and get on our early access list !!
            </p>
          </div>
        </div>
      </div>
      <Spline
        className="hidden lg:flex"
        scene="https://prod.spline.design/BDhMpA6SFsxH0SOi/scene.splinecode"
      />
    </div>
  );
}
