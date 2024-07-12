import OfxToJsonConverter from "@/components/OfxToJsonConverter";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-8 bg-gray-950 gap-4">
      <h1 className="text-gray-50">OFX to JSON</h1>
      <OfxToJsonConverter />
    </main>
  );
}
