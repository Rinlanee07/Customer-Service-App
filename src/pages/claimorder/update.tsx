import React from "react";
import Layout from "@/components/layout";
import Head from "next/head";
import UpdateClaimOrder from "@/components/claimorder/UpdateClaimOrder";

export default function UpdateClaimOrderPage() {
  return (
    <Layout>
      <Head>
        <title>Claim Order Page</title>
      </Head>
      <UpdateClaimOrder />
    </Layout>
  );
};
