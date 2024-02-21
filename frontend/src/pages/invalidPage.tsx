import Img from "../assets/dalesImage.jpg";
import { NavLink } from "react-router-dom";

export default function InvalidPage() {
  return (
    <>
      <main className="relative isolate min-h-full">
        <img
          src={Img}
          alt=""
          className="absolute -z-20 h-screen w-full object-cover object-top"
        />

        <div className="relative z-10 mx-auto max-w-7xl px-6 py-32 text-center sm:py-40 lg:px-8">
          <p className="text-base font-semibold leading-8 text-white">404</p>
          <h1 className="mt-4 text-3xl font-bold tracking-tight text-white sm:text-5xl">Page not found</h1>
          <p className="mt-4 text-base text-white/70 sm:mt-6">Sorry, we couldn’t find the page you’re looking for.</p>
          <div className="mt-10 flex justify-center">
            <NavLink to='/' className="text-sm text-white font-semibold leading-7">
              <span aria-hidden="true">&larr;</span> Back to home
            </NavLink>
          </div>
        </div>
      </main>
    </>
  );
}
