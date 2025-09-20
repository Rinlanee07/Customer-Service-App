import React from "react";
import Layout from "@/components/layout";
import Stepper from "@/components/implementation/Stepper";
import { decodeJwtToken } from "@/lib/cookie";
import Head from "next/head";


export default function Index() {
  return (
    <Layout>
      <Head>
        <title>Implementation</title>
      </Head>
      <main className="font-lexend">
        {/* <Stepper /> */}
      </main>
    </Layout>
  );
}
