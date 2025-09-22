import { useState, useEffect } from "react";
import React from "react";
import { MagnifyingGlassIcon } from "@radix-ui/react-icons";
import { Input } from "@/components/ui/input";
import { TrashIcon } from "@radix-ui/react-icons";
import { TriangleAlertIcon } from "lucide-react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
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
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
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
import { AddSupplier } from "../modal/AddSupplier";
import { EditSupplier } from "../modal/EditSupplier";
import { CategoryData, SupplierData } from "@/datatype/fetch.datatype";
import { deleteSupplier } from "@/lib/axios";

interface TableSupplierProps {
  dataSupplier: SupplierData[];
  isLoadSupplier: boolean;
  dataCategory: CategoryData[];
  isLoadCategory: boolean;
}

export function TableSupplier(props: TableSupplierProps) {
  const { dataSupplier, isLoadSupplier, dataCategory, isLoadCategory } = props;
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState('All');
  const queryClient = useQueryClient();

  // if (supplierLoading && categoryLoading) return 'Loading...'

  // if (supllierError && categoryError) return 'An error has occurred: ' + supllierError.message

  const getCategoryName = (categoryId: number) => {
    const category =
      dataCategory &&
      dataCategory.find((category: CategoryData) => category.id === categoryId);
    return category ? category.name : "Unknown Category";
  };

  const mutationSupplier = useMutation({
    mutationFn: (id: number) => deleteSupplier(id),
    onError: (error) => {
      console.error("Error deleteing Supplier:", error);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["supplierData"] });
    },
  });
  async function handleDelete(id: number) {
    try {
      await mutationSupplier.mutateAsync(id); // Call the mutation function instead of sending data directly
    } catch (error) {
      console.error("Error delete supplier:", error);
    }
  }

  const filteredData =
    !isLoadSupplier && dataSupplier
      ? dataSupplier.filter((item: SupplierData) =>
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
    const fileName = "Supplier_data";

    const ws = XLSX.utils.json_to_sheet(filteredData);
    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, "Inventory");

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
    <div className="flex flex-col font-lexend font-light text-base text-gray-500">
      <div className="flex justify-end pb-4">
        <AddSupplier
          dataCategory={dataCategory}
          isLoadCategory={isLoadCategory}
        />
      </div>
      <div className="items-center text-sm ">
        <div className="flex justify-end pb-4">
          <Button
            className="mr-4 font-lexend bg-green-500 hover:bg-green-600"
            onClick={exportToExcel}
          >
            Export
          </Button>
          <span className="flex items-center justify-center mr-2">Status</span>
          <Select>
            <SelectTrigger className="w-32">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectItem value="All">All</SelectItem>
                <SelectItem value="Active" >Active</SelectItem>
                <SelectItem value="Inactive">Inactive</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
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
            <TableHeader className="font-semibold text-gray-600">
              <TableRow>
                <TableHead className="w-[50px]">ID</TableHead>
                <TableHead>Company Name</TableHead>
                <TableHead>Item Category</TableHead>
                <TableHead>Address</TableHead>
                <TableHead>Contact Name</TableHead>
                <TableHead>Contact Tel</TableHead>
                <TableHead>Contact Email</TableHead>
                <TableHead>Last Update</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Action</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody className="text-base font-light text-gray-500">
              {filteredData &&
                filteredData.map((inventory: SupplierData) => (
                  <TableRow key={inventory.id}>
                    <TableCell>{inventory.id}</TableCell>
                    <TableCell>{inventory.companyName}</TableCell>
                    <TableCell>
                      {getCategoryName(inventory.categoryId)}
                    </TableCell>
                    <TableCell>{inventory.address}</TableCell>
                    <TableCell>{inventory.contactName}</TableCell>
                    <TableCell>{inventory.contactTel}</TableCell>
                    <TableCell>{inventory.contactEmail}</TableCell>
                    <TableCell>{inventory.updatedAt.toString()}</TableCell>
                    <TableCell>
                      <Button
                        className={
                          inventory.status === "Inactive"
                            ? "outline outline-red-500 text-red-500  shadow-md shadow-red-500/50 size-6 w-fit hover:outline hover:outline-red-600 hover:text-red-600 hover:bg-white bg-white"
                            : "outline outline-green-500 text-green-500  shadow-md shadow-green-500/50 size-6 w-fit hover:outline hover:outline-green-600 hover:text-green-600 hover:bg-white bg-white"
                        }
                      >
                        {inventory.status}
                      </Button>
                    </TableCell>
                    <TableCell className="flex justify-center items-center">
                      <EditSupplier
                        inventory={inventory}
                        dataCategory={dataCategory}
                        isLoadCategory={isLoadCategory}
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
                              onClick={() => handleDelete(inventory.id)}
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
