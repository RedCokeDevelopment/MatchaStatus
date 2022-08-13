import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { ReactNode } from "react";
// import styles from '../styles/Home.module.css'

function getStatus(x: any) {
  let items: ReactNode[] = [];
  for (let index = 0; index < 90; index++) {
    items = [
      ...items,
      <div
        className={
          "rounded-sm bg-opacity-80 hover:bg-opacity-40 h-8 flex-1 " +
          (x.status === "up"
            ? "bg-matcha"
            : x.status === "maintenance"
            ? "bg-maintenance"
            : x.status === "down"
            ? "bg-down"
            : "bg-gray-800")
        }
        key={index}
      ></div>,
    ];
  }
  return items;
}
function getColor(x: string) {
  return x === "up"
    ? "matcha"
    : x === "maintenance"
    ? "maintenance"
    : x === "down"
    ? "down"
    : "gray-800";
}

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Matcha Status</title>
        <meta name="description" content="An open source status page" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header className="w-full bg-matcha sticky top-0">
        <div className="flex flex-row justify-between items-center container mx-auto px-4">
          <img src="/logo.svg" alt="Matcha Status Logo" className="w-16" />
          <nav className="text-white font-medium">
            <ul className="flex flex-row my-auto align-center space-x-4">
              <li>
                <a href="mailto:support@redcoke.dev">Report an issue</a>
              </li>
              {/* <li>Subscribe</li> */}
            </ul>
          </nav>
        </div>
      </header>
      <main className="w-full py-8">
        <section
          id="overall-status"
          className="px-4 container flex flex-col mx-auto"
        >
          <div className="mb-4 p-4 bg-matcha rounded-md text-white font-bold">
            All Systems Operational
          </div>
          <div className="mb-4 p-4 bg-maintenance rounded-md text-white font-bold">
            Ongoing Maintenance
          </div>
          <div className="mb-4 p-4 bg-down rounded-md text-white font-bold">
            Partial Outage
          </div>
        </section>
        <section id="monitors" className="mt-4 flex flex-col">
          <p className="mb-2 px-4 text-gray-600 text-sm container font-bold mx-auto uppercase">
            Monitors
          </p>
          {[
            {
              id: "website",
              title: "Website",
              status: "up",
            },
            {
              id: "api",
              title: "API",
              status: "up",
            },
            {
              id: "cron",
              title: "Cron",
              status: "maintenance",
            },
            {
              id: "webhooks",
              title: "Webhooks",
              status: "down",
            },
          ].map((x) => (
            <div
              className={"mt-2 bg-opacity-[15%] bg-" + getColor(x.status)}
              key={x.id}
            >
              <div className="p-4 container flex flex-col mx-auto">
                <div className="flex flex-row justify-between items-center">
                  <p className="text-xl font-semibold">{x.title}</p>
                  <p
                    className={
                      "text-sm font-semibold text-" + getColor(x.status)
                    }
                  >
                    {x.status === "up"
                      ? "Operational"
                      : x.status === "maintenance"
                      ? "Maintenance"
                      : x.status === "down"
                      ? "Down"
                      : "Unknown"}
                  </p>
                </div>
                <div className="flex flex-row justify-between items-center gap-[1px] mt-2">
                  {getStatus(x)}
                </div>
                <div className="flex flex-row justify-between items-center gap-[1px] mt-2">
                  <p className={"flex-nowrap text-" + getColor(x.status)}>
                    90 days ago
                  </p>
                  <div
                    className={
                      "border-b flex-grow mx-2 border-b-" + getColor(x.status)
                    }
                  ></div>
                  <p className={"flex-nowrap text-" + getColor(x.status)}>
                    100%
                  </p>
                  <div
                    className={
                      "border-b flex-grow mx-2 border-b-" + getColor(x.status)
                    }
                  ></div>
                  <p className={"flex-nowrap text-" + getColor(x.status)}>
                    Today
                  </p>
                </div>
              </div>
            </div>
          ))}
          <div className="hidden text-matcha text-maintenance text-down"></div>
          <div className="hidden border-b-matcha border-b-maintenance border-b-down"></div>
          {/* <div className="p-4 bg-matcha rounded-md text-white font-bold">
            All Systems Operational
          </div> */}
        </section>
        <section id="monitors" className="mt-8 flex flex-col">
          <p className="mb-2 px-4 text-gray-600 text-sm container font-bold mx-auto uppercase">
            Past Incidents (Past 2 Weeks)
          </p>
          {(() => {
            let temp = [];
            for (let i = 0; i < 14; i++) {
              temp.push(
                <div className="mt-4 container mx-auto px-4" key={i}>
                  <p className="bg-gray-100 rounded-lg py-1 px-2 text-sm font-semibold inline">
                    {(() => {
                      let d = new Date();
                      d.setDate(d.getDate() - i);
                      return d.toDateString();
                    })()}
                  </p>
                  <div className="my-2 text-gray-600">
                    No incidents reported.
                  </div>
                </div>
              );
            }
            return temp;
          })()}
        </section>
      </main>
      <footer></footer>
    </>
  );
};

export default Home;
