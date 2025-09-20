"use client";
import { MagnifyingGlassIcon } from "@radix-ui/react-icons";
import { useState } from "react";
import * as XLSX from "xlsx";
import React from "react";
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import Layout from '../../components/layout'
import { Button } from "../../components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../../components/ui/dialog";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "../../components/ui/table";
import {
  Card,
  CardContent,
} from "../../components/ui/card";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../../components/ui/select";

export default function WarehouseInfo() {

  // const exportToExcel = () => {
  //   const fileType =
  //     "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8";
  //   const fileExtension = ".xlsx";
  //   const fileName = "inventory_data";

  //   const ws = XLSX.utils.json_to_sheet(data);
  //   const wb = XLSX.utils.book_new();
  //   XLSX.utils.book_append_sheet(wb, ws, "Inventory");

  //   const excelBuffer = XLSX.write(wb, { bookType: "xlsx", type: "array" });
  //   const blob = new Blob([excelBuffer], { type: fileType });
  //   const url = URL.createObjectURL(blob);
  //   const link = document.createElement("a");
  //   link.href = url;
  //   link.download = fileName + fileExtension;
  //   document.body.appendChild(link);
  //   link.click();
  //   document.body.removeChild(link);
  // };
  return (
    <Layout>
      <div className="h-screen w-full font-lexend font-light text-gray-500">

        <div className="flex justify-end m-5">
          <Button className="bg-orange-500 mr-4" >
            Edit Warehouse
          </Button>
          {/* <Button className="bg-green-500 " onClick={exportToExcel}>
            Export
          </Button> */}
        </div>
        <div>
          <Table className="bg-white rounded-xl">
            <TableHeader>
              <TableRow>
                <TableHead className="w-[100px]">Itemcode</TableHead>
                <TableHead>Stock Level</TableHead>
                <TableHead>Minimum Level</TableHead>
                <TableHead>Name</TableHead>
                <TableHead>Description</TableHead>
                <TableHead>Category</TableHead>
                <TableHead>Unit</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Last Update</TableHead>
                <TableHead>Adjust</TableHead>
                <TableHead>Adjust Minimum Level</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody className="font-light text-base text-gray-500">
              {/* {filteredData.map((inventory) => (
                <TableRow key={inventory.itemcode}>
                  <TableCell>{inventory.itemcode}</TableCell>
                  <TableCell className="font-medium">
                    {inventory.stocklevel}
                  </TableCell>
                  <TableCell>{inventory.minimumlevel}</TableCell>
                  <TableCell>{inventory.name}</TableCell>
                  <TableCell>{inventory.description}</TableCell>
                  <TableCell>{inventory.category}</TableCell>
                  <TableCell>{inventory.unit}</TableCell>
                  <TableCell>{inventory.status}</TableCell>
                  <TableCell>{inventory.lastupdate}</TableCell>
                  <TableCell>
                    <Dialog>
                      <DialogTrigger asChild>
                        <Button
                          variant="outline"
                          onClick={() =>
                            setSelectedItem({
                              item_code: inventory.itemcode,
                              unit: inventory.unit,
                            })
                          }
                        >
                          Adjust
                        </Button>
                      </DialogTrigger>
                      <DialogContent className="sm:max-w-[425px]">
                        <DialogHeader>
                          <DialogTitle>Adjust</DialogTitle>
                          <DialogDescription>
                            Adjust item: {selectedItem?.item_code} on
                            warehouse: DEFAULT
                          </DialogDescription>
                        </DialogHeader>
                        <div className="grid gap-4 py-4">
                          <div className="grid grid-cols-4 items-center gap-4">
                            <Label htmlFor="name" className="text-right">
                              Item Lot ID
                            </Label>
                            <Select>
                              <SelectTrigger className="w-[180px]">
                                <SelectValue placeholder="Select" />
                              </SelectTrigger>
                              <SelectContent>
                                <SelectGroup>
                                  <SelectItem value="29">29</SelectItem>
                                </SelectGroup>
                              </SelectContent>
                            </Select>
                          </div>
                          <div className="grid grid-cols-4 items-center gap-4">
                            <Label htmlFor="note" className="text-right">
                              Note
                            </Label>
                            <Input id="note" className="col-span-3" />
                          </div>
                          <div className="grid grid-cols-4 items-center justify-between gap-4">
                            <div className="col-span-3">
                              <Label
                                htmlFor="quantity"
                                className="text-right"
                              >
                                Quantity
                              </Label>
                              <Input id="quantity" />
                            </div>
                            <div className="flex flex-col text-center">
                              <Label htmlFor="unit">Unit</Label>
                              {selectedItem?.unit}
                            </div>
                          </div>
                        </div>
                        <DialogFooter>
                          <Button type="submit">Save changes</Button>
                        </DialogFooter>
                      </DialogContent>
                    </Dialog>
                  </TableCell>
                  <TableCell>
                    <Dialog>
                      <DialogTrigger asChild>
                        <Button variant="outline">Adjust</Button>
                      </DialogTrigger>
                      <DialogContent className="sm:max-w-[425px]">
                        <DialogHeader>
                          <DialogTitle>Adjust</DialogTitle>
                          <DialogDescription>
                            Adjust item minimum level: item_code:name on
                            warehouse: branch
                          </DialogDescription>
                        </DialogHeader>
                        <div className="grid gap-4 py-4">
                          <Label>Minimum Level</Label>
                          <Input
                            type="number"
                            min={0}
                            value={adjustMinimumLevel}
                            onChange={(e) =>
                              setAdjustMinimumLevel(
                                parseInt(e.target.value)
                              )
                            }
                          />
                        </div>
                        <DialogFooter>
                          <Button
                            onClick={() => {
                              const updatedData = data.map((item) => {
                                if (item.itemcode === inventory.itemcode) {
                                  return {
                                    ...item,
                                    minimumlevel: adjustMinimumLevel,
                                  };
                                }
                                return item;
                              });
                              setData(updatedData);
                              setIsEditOpen(false); // ปิด Dialog หลังจากแก้ไขเรียบร้อย
                            }}
                          >
                            Save changes
                          </Button>
                        </DialogFooter>
                      </DialogContent>
                    </Dialog>
                  </TableCell>
                </TableRow>
              ))} */}
            </TableBody>
          </Table>

        </div>
      </div>
    </Layout>
  );
}
