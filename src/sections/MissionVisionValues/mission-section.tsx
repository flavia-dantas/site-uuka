"use client";

export function MissionSection() {
  return (
    <section id="missao" className="h-screen w-full bg-black text-white">
      <div className="h-[calc(100vh-72px)] w-full flex flex-col justify-between p-6 md:p-12 lg:p-10">
        <div className="max-w-sm pt-16">
          <p className="text-sm md:text-base lg:text-lg xl:text-xl 2xl:text-2xl mb-4">
            Impulsionar e empoderar pessoas negras a serem protagonistas de suas
            carreiras, ocupando lugares de destaque.
          </p>
        </div>

        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-medium text-[#F59F23]">
          missão
        </h2>
      </div>
    </section>
  );
}
