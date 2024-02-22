'use client';

import { AuthUpdater } from "@/components/AuthUpdater";
import { ReduxProvider } from "@/redux-provider";

import dynamic from "next/dynamic";

const AuthViewerDinamic = dynamic(() => import("@/components/AuthView"), { ssr: false });

export default function Home() {
  return (
    <ReduxProvider>
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <h1>Hola mundo</h1>
        <p>
          This a demo for nextjs
        </p>
        <h2>State with redux</h2>
        <div>

          <h3>AuthViewer</h3>

          <AuthViewerDinamic />

          <h3>AuthUpdater</h3>

          <AuthUpdater />

        </div>
      </main>
    </ReduxProvider>
  );
}
