import { useState } from "react";
import React from "react";
import { MagnifyingGlassIcon } from "@radix-ui/react-icons";
import { Input } from "@/components/ui/input";
import { TrashIcon } from "@radix-ui/react-icons";
import { TriangleAlertIcon } from "lucide-react";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Card,
  CardContent,
} from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import * as XLSX from "xlsx";
import { AddStock } from "../modal/AddStock";
import { EditStock } from "../modal/EditStock";
import {
  CategoryData,
  Fetch,
  StockData,
  UnitData,
} from "@/datatype/fetch.datatype";
import { deleteItem, fetchData } from "@/lib/axios";
interface TableStockProps {
  dataStock: StockData[];
  isLoadStock: boolean;
  dataCategory: CategoryData[];
  isLoadCategory: boolean;
  dataUnit: UnitData[];
  isLoadUnit: boolean;
}

export function TableStock(props: TableStockProps) {
  const {
    dataStock,
    isLoadStock,
    dataCategory,
    isLoadCategory,
    dataUnit,
    isLoadUnit,
  } = props;
  const [searchTerm, setSearchTerm] = useState("");
  const queryClient = useQueryClient();

  const getCategoryName = (categoryId: number) => {
    const category =
      dataCategory &&
      dataCategory.find((category: CategoryData) => category.id === categoryId);
    return category ? category.name : "Unknown Category";
  };

  const getUnitName = (unitId: number) => {
    const unit =
      dataUnit && dataUnit.find((unit: UnitData) => unit.id === unitId);
    return unit ? unit.name : "Unknown Unit";
  };

  const mutationStock = useMutation({
    mutationFn: (id: number) => deleteItem(id),
    onError: (error) => {
      console.error("Error deleting Stock Item:", error);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["stockData"] });
    },
  });

  async function handleDelete(id: number) {
    try {
      await mutationStock.mutateAsync(id); // Call the mutation function instead of sending data directly
    } catch (error) {
      console.error("Error delete supplier:", error);
    }
  }
  const filteredData =
    !isLoadStock && dataStock
      ? dataStock.filter((item: StockData) =>
          Object.values(item).some(
            (value) =>
              value &&
              value.toString().toLowerCase().includes(searchTerm.toLowerCase())
          )
        )
      : [];

  const exportToExcel = () => {
    const fileType =
      "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8";
    const fileExtension = ".xlsx";
    const fileName = "inventory_data";

    // สร้าง Workbook และ Worksheet
    const ws = XLSX.utils.json_to_sheet(filteredData);
    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, "Stock");

    // สร้างไฟล์ Excel และดาวน์โหลด
    const excelBuffer = XLSX.write(wb, { bookType: "xlsx", type: "array" });
    const blob = new Blob([excelBuffer], { type: fileType });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = fileName + fileExtension;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="flex flex-col font-lexend font-light">
      <div className="flex justify-end pb-4">
        <AddStock
          dataCategory={dataCategory}
          isLoadCategory={isLoadCategory}
          dataUnit={dataUnit}
          isLoadUnit={isLoadUnit}
        />
      </div>

      <div className="items-center text-sm ">
        <div className="flex justify-end pb-4">
          <Button
            className="mr-4 font-prompt bg-green-500 hover:bg-green-600"
            onClick={exportToExcel}
          >
            Export
          </Button>

          <MagnifyingGlassIcon className="size-6 m-2" />
          <Input
            className="w-350"
            type="text"
            value={searchTerm}
            onChange={(event) => {
              setSearchTerm(event.target.value);
            }}
          />
        </div>
      </div>

      <Card>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="w-[50px]">ID</TableHead>
                <TableHead>Code</TableHead>
                <TableHead>Name</TableHead>
                <TableHead>Item Category</TableHead>
                <TableHead>Description</TableHead>
                <TableHead>Stock Level</TableHead>
                <TableHead>Display Unit</TableHead>
                <TableHead>Base Unit</TableHead>
                <TableHead>Action</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody className="font-light text-base text-gray-500">
              {filteredData.map((stock: StockData) => (
                <TableRow key={stock.id}>
                  <TableCell>{stock.id}</TableCell>
                  <TableCell>{stock.code}</TableCell>
                  <TableCell>{stock.name}</TableCell>
                  <TableCell>{getCategoryName(stock.categoryId)}</TableCell>
                  <TableCell>{stock.description}</TableCell>
                  <TableCell>{stock.stockLevel}</TableCell>
                  <TableCell>{getUnitName(stock.displayUnitId)}</TableCell>
                  <TableCell>{getUnitName(stock.baseUnitId)}</TableCell>
                  
                  <TableCell className="flex justify-center items-center">
                    <EditStock
                      stock={stock}
                      dataCategory={dataCategory}
                      isLoadCategory={isLoadCategory}
                      dataUnit={dataUnit}
                      isLoadUnit={isLoadUnit}
                    />
                    <Dialog>
                      <DialogTrigger asChild>
                        <TrashIcon className="mx-2 cursor-pointer size-5" />
                      </DialogTrigger>
                      <DialogContent className="sm:max-w-[425px]">
                        <DialogHeader className="flex justify-center items-center text-center">
                          <TriangleAlertIcon
                            className="justify-center text-yellow-500"
                            size={72}
                          />
                          <DialogTitle className="text-3xl">
                            Are you sure?
                          </DialogTitle>
                          <DialogDescription>
                            You wont be able to revert this!
                          </DialogDescription>
                        </DialogHeader>

                        <DialogFooter>
                          <Button
                            onClick={() => handleDelete(stock.id)}
                            type="submit"
                            className="bg-red-600 hover:bg-red-700"
                          >
                            Delete
                          </Button>
                        </DialogFooter>
                      </DialogContent>
                    </Dialog>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
}
