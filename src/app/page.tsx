import Loading from "@/components/Loading";
import UsersList from "@/components/UsersList";
import { Suspense } from "react";

export default function Home() {
  return (
    <div className="grid place-items-center p-4 md:p-10">
      <main className="w-full">
        <h1 className="text-3xl font-semibold text-center">Drizzle ORM</h1>
        <div className="w-full md:w-[400px] mt-4 mx-auto">
          <Suspense fallback={<Loading />}>
            <UsersList />
          </Suspense>
        </div>
      </main>
    </div>
  );
}
