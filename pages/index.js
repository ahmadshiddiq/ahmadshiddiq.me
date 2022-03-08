import Head from "next/head";
import Image from "next/image";

export default function Home() {
  return (
    <div
      className="min-h-screen bg-cover bg-top sm:bg-top"
      style={{
        backgroundImage:
          'url("https://images.unsplash.com/photo-1545972154-9bb223aac798?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=3050&q=80&exp=8&con=-15&sat=-75")',
      }}
    >
      <div className="mx-auto max-w-7xl px-4 py-16 text-center sm:px-6 sm:py-24 lg:px-8 lg:py-48">
        <p className="text-sm font-semibold uppercase tracking-wide text-black text-opacity-50">
          Sorry
        </p>
        <h1 className="mt-2 text-4xl font-extrabold tracking-tight text-white sm:text-5xl">
          Uh oh! This website is not done yet.
        </h1>
        <p className="mt-2 text-lg font-medium text-black text-opacity-50">
          It looks like the page you’re looking not finished yet.
        </p>
        <div className="mt-6">
          <a
            href="https://github.com/ahmadshiddiq/website"
            className="inline-flex items-center rounded-md border border-transparent bg-white bg-opacity-75 px-4 py-2 text-sm font-medium text-black text-opacity-75 sm:bg-opacity-25 sm:hover:bg-opacity-50"
          >
            Visit Github Repository
          </a>
        </div>
      </div>
    </div>
  );
}
