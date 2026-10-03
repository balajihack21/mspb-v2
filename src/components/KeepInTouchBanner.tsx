import React from 'react';

export const KeepInTouchBanner: React.FC = () => {
  return (
    <section className="relative py-20 bg-[#1a1a1a] overflow-hidden text-center select-none">
      {/* Background Image with Dark Overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-30"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=2000&q=80')",
        }}
      />
      <div className="absolute inset-0 bg-black/60" />

      {/* Centered Heading */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white uppercase drop-shadow-md">
          Keep In Touch With Us
        </h2>
      </div>
    </section>
  );
};
