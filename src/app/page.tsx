import Link from "next/link";

export default function Home() {
  return (
    <div>
      <main>
        <div>
          <h1>Ticket System</h1>
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
