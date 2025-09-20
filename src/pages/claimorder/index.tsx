import React from "react";
import Layout from "@/components/layout";
import ClaimOrder from "@/components/claimorder/Checklist";
import Head from "next/head";

const Index = () => {
  const [date, setDate] = React.useState<Date | undefined>(new Date());

  return (
    <Layout>
      <Head>
        <title>Claim Order Page</title>
      </Head>
      <ClaimOrder />
    </Layout>
  );
};

export default Index;
