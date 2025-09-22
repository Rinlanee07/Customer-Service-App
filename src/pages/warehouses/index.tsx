import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { AddWarehouse } from "../../components/warehouse/modal/AddWarehouse";
import Layout from "@/components/layout";
import { useQuery } from "@tanstack/react-query";
import { fetchData } from "@/lib/axios";
import { WarehouseData } from "@/datatype/fetch.datatype";
import Link from "next/link";
import Head from "next/head";
export default function Index() {

  const {
    data: warehouseData,
    isLoading: warehouseLoading,
    error,
  } = useQuery({
    queryKey: ["warehouseData", "warehouse"],
    queryFn: () => fetchData("warehouse"),
  });

  if (warehouseLoading) return "Loading...";

  if (error) return "An error has occurred: " + error.message;


  return (
    <Layout>
      <Head>
        <title>Warehouse</title>
      </Head>
      <main className="flex h-screen flex-col items-center justify-between">
        <div className="w-full items-center font-mono text-sm ">
          <div className="flex justify-end pb-4">
            <AddWarehouse />
          </div>
        </div>
        <div className="h-screen w-full p-4 ">
          <div className=" grid grid-cols-1 gap-2">
            {!warehouseLoading && warehouseData ? (
              warehouseData.map((warehouse: WarehouseData, index: number) => (
                <Link
                  href={{
                    pathname: `/warehouses/${warehouse.id}`,
                    query: { warehouseId: warehouse.id }
                  }}
                  key={index}
                  className="h-fit"
                >
                  <Card className="gap-4 font-lexend font-light text-base text-gray-500">
                    <CardHeader>
                      <CardTitle className="light:invert text-gray-600">
                        Warehouse {index + 1}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div>
                        <p>Organization ID: {warehouse.organizationId}</p>
                        <p>Warehouse Name: {warehouse.name}</p>
                        <p>Address: {warehouse.location}</p>
                        <p>Contract Name: {warehouse.contactName}</p>
                        <p>Contract Email: {warehouse.contactEmail}</p>
                        <p>Contract Tel: {warehouse.contactTel}</p>
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              ))
            ) : (
              <div>No warehouses available.</div>
            )}
          </div>
        </div>
      </main>
    </Layout>
  );
}
