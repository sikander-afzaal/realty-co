import React from "react";

const TestimonialMedia = () => {
  return (
    <div className="wrapper gap-6 sm:gap-10 px-6 sm:px-8 xl:px-12 mt-[40px] sm:mt-[60px]">
      <h2 className="testimonial-heading text-3xl sm:text-4xl">Media</h2>

      <div className="grid sm:grid-cols-3 xl:grid-cols-6 gap-5 bg-silver p-0 sm:px-[20px] xl:px-[40px] sm:py-[55px]">
        <img src="/orange-flowers.png" alt="orange flowers" />
        <img src="/wall-paintings.png" alt="wall paintings" />
        <img src="/door.png" alt="door" />
        <img src="/orange-wall.png" alt="orange wall" />
        <img src="/wall-paintings.png" alt="wall paintings" />
        <img src="/paint.png" alt="paint" />
        <img src="/war-is-over.png" alt="war is over" />
        <img
          src="/girl-painting.png"
          alt="girl looking at a painting"
          className="col-span-2 row-span-2"
        />
        <img src="/war-is-over.png" alt="war is over" />
        <img src="/war-is-over.png" alt="war is over" />
        <img src="/staircase.png" alt="staircase" />
        <img src="/yellow-flowers.png" alt="yellow flowers" />
        <img src="/yellow-flowers.png" alt="yellow flowers" />
        <img src="/yellow-flowers.png" alt="yellow flowers" />
        <img src="/yellow-flowers.png" alt="yellow flowers" />
      </div>
    </div>
  );
};

export default TestimonialMedia;
