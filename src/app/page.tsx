import Link from "next/link";

export default function Home() {
  return (
    <div className="bg-black bg-home-img bg-cover bg-center">
      <main className="flex flex-col justify-center text-center max-w-5xl mx-auto h-dvh">
        <div className="flex flex-col hap-6 p-12 rounded-xl bg-black/90 w-4/5 sm:max-w-96 mx-auto text-white sm:text-2xl">
          <h1 className="text-4xl font-bold">Ticket System</h1>
          <address>
            777 Lucky Street
            <br />
            Las Vegas, NV 89101
          </address>
          <p>Open Daily: 9am to 5pm</p>
          <Link href="tel:7777777777" className="hover:underline">
            777-77777-777
          </Link>
        </div>
      </main>
    </div>
  );
}
