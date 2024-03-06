import Consumer from "@/components/consumer";

export default function Home() {
  return (
    <main className="min-h-screen p-24">
      <p className="fixed left-0 top-0 flex w-full justify-center border-b border-gray-blue bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-blue-50 dark:from-inherit lg:static lg:w-auto  lg:rounded-lg lg:border lg:p-4 lg:dark:bg-zinc-50">
        SPLP App Consumer
      </p>

      <Consumer />
    </main>
  );
}
