"use client";
// import { getServerSession } from "next-auth";
import { useSession } from "next-auth/react";
import React from "react";

export default  function Home() {
  // const data = await getServerSession(authOptions)
  const { data, status } = useSession(); 
  
  // const { data: session } = useSession();
  return (
    // <SessionProvider>

    <main>
      <div>money</div>
      <div>{JSON.stringify(data)}</div>
      <div>{JSON.stringify(status)}</div>
    </main>
    // </SessionProvider>
  );
}
