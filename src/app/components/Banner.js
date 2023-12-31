import React from 'react'

const Banner = ({children, className}) => {

  const bannerStyle = `h-[70vh] bg-blend-overlay  bg-center bg-cover w-full flex flex-col content-center justify-center + ${className}`;

  return (
    <section className={bannerStyle}>
      {children}
    </section>
  );
}

export default Banner