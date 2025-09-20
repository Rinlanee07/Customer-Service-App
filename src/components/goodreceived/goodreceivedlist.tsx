import React, { useState } from "react";
import { format } from "date-fns";
import { Calendar as CalendarIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Calendar } from "@/components/ui/calendar";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, useFieldArray } from "react-hook-form";
import { z } from "zod";
import axios from "axios";
import { useMutation } from "@tanstack/react-query";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  Card,
  CardContent,
} from "@/components/ui/card";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import cookie from 'cookiejs';

const formSchema = z.object({
  warehouseId: z.number().min(1, {
    message: "Warehouse field is required",
  }),
  supplierId: z.number().min(1, {
    message: "Supplier field is required",
  }),
  date: z.date(),
  credit: z.string().optional(),
  expirationDate: z.date().optional(),
  items: z.array(
    z.object({
      itemId: z.number(),
      item: z.string().min(1, {
        message: "Item field is required",
      }),
      quantity: z.number().min(1, {
        message: "Quantity field is required",
      }),
      cost: z.number().min(1, {
        message: "Price field is required",
      }),
      total: z.number(),
      unitId: z.number().min(1, {
        message: "Unit field is required",
      }),
      expire: z.date(),
    })
  ).min(1, {
    message: "At least one item is required",
  }),
});

export const GoodReceivedList = () => {
  const token = cookie.get("token");

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      warehouseId: 1,
      supplierId: 1,
      date: new Date(),
      credit: "",
      expirationDate: new Date(),
      items: [],
    },
  });

  const { fields, append, remove } = useFieldArray({
    control: form.control,
    name: "items",
  });

  const mutation = useMutation({
    mutationFn: (formData) => {
      return axios.post(
        `${process.env.NEXT_PUBLIC_HOST}/api/goodreceiveitem/`,
        formData,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
    },
    onSuccess: (data) => { },
    onError: (error) => {
      console.error("Error adding supplier:", error);
      // Handle error, e.g., display error message to the user
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema> | any) {
    try {
      await mutation.mutateAsync(values); // Call the mutation function instead of sending data directly
    } catch (error) {
      console.error("Error adding Warehouse:", error);
      // Handle error, e.g., display error message to the user
    }
  }

  const handleAddItem = () => {
    const newItem = {
      itemId: fields.length + 1,
      item: "",
      quantity: 1,
      cost: 1,
      total: 1,
      unitId: 1,
      expire: new Date(),
    };
    append(newItem);
  };

  return (
    <div className="flex mt-6 items-center justify-center text-base">
      <Card className="w-full">
        <CardContent>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
              <div className="grid grid-cols-12 mt-4">
                <div className="col-span-4">
                  <FormField
                    control={form.control}
                    name="warehouseId"
                    render={({ field }) => (
                      <FormItem className="mt-2">
                        <FormLabel className="font-light text-base text-gray-600">
                          Warehouse *
                        </FormLabel>
                        <FormControl>
                          <Select
                            onValueChange={(value) => field.onChange(Number(value))}
                            value={String(field.value)}
                          >
                            <SelectTrigger>
                              <SelectValue />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectGroup>
                                <SelectItem value="1">
                                  organization id:1 SHOP2
                                </SelectItem>
                                <SelectItem value="2">
                                  organization id:1 Main warehouse
                                </SelectItem>
                                <SelectItem value="3">
                                  organization id:1 SHOP1
                                </SelectItem>
                              </SelectGroup>
                            </SelectContent>
                          </Select>
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                <div className="col-span-4 ml-6">
                  <FormField
                    control={form.control}
                    name="supplierId"
                    render={({ field }) => (
                      <FormItem className="mt-2">
                        <FormLabel className="font-light text-base text-gray-600">
                          Supplier *
                        </FormLabel>
                        <FormControl>
                          <Select
                            onValueChange={(value) => field.onChange(Number(value))}
                            value={String(field.value)}
                          >
                            <SelectTrigger>
                              <SelectValue />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectGroup>
                                <SelectItem value="1">
                                  company:test, name:test
                                </SelectItem>
                                <SelectItem value="2">
                                  company:Macro, name:Maneger
                                </SelectItem>
                                <SelectItem value="3">
                                  company:Macro, name:Macro Staff
                                </SelectItem>
                                <SelectItem value="4">
                                  company:test1, name:Owen
                                </SelectItem>
                                <SelectItem value="5">
                                  company:Main warehouse, name:Oat
                                </SelectItem>
                              </SelectGroup>
                            </SelectContent>
                          </Select>
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                <div className="col-span-3 ml-6 flex items-center justify-end font-light text-base text-gray-600">
                  Goods Received Note
                </div>
              </div>
              <div className="grid grid-cols-12 mt-4">
                <div className="col-span-4">
                  <FormField
                    control={form.control}
                    name="date"
                    render={({ field }) => (
                      <FormItem className="flex flex-col">
                        <FormLabel className="font-light text-base text-gray-600">
                          Date *
                        </FormLabel>
                        <Popover>
                          <PopoverTrigger asChild>
                            <FormControl>
                              <Button
                                variant={"outline"}
                                className={cn(
                                  "pl-3 text-left font-light text-base text-gray-500",
                                  !field.value && "text-muted-foreground"
                                )}
                              >
                                {field.value ? (
                                  format(field.value, "PPP")
                                ) : (
                                  <span>Pick a date</span>
                                )}
                                <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                              </Button>
                            </FormControl>
                          </PopoverTrigger>
                          <PopoverContent className="w-auto p-0" align="start">
                            <Calendar
                              mode="single"
                              selected={field.value}
                              onSelect={field.onChange}
                              disabled={(date) => date < new Date("1900-01-01")}
                              initialFocus
                            />
                          </PopoverContent>
                        </Popover>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                <div className="col-span-4 ml-6">
                  <FormField
                    control={form.control}
                    name="credit"
                    render={({ field }) => (
                      <FormItem className="">
                        <FormLabel className="font-light text-base text-gray-600">
                          Credit(days)
                        </FormLabel>
                        <FormControl>
                          <Input {...field}></Input>
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                <div className="col-span-4 ml-6 font-thin">
                  <FormField
                    control={form.control}
                    name="expirationDate"
                    render={({ field }) => (
                      <FormItem className="flex flex-col">
                        <FormLabel className="font-light text-base text-gray-600">
                          Due Date
                        </FormLabel>
                        <Popover>
                          <PopoverTrigger asChild>
                            <FormControl>
                              <Button
                                variant={"outline"}
                                className={cn(
                                  "pl-3 text-left font-light text-base text-gray-500",
                                  !field.value && "text-muted-foreground"
                                )}
                              >
                                {field.value ? (
                                  format(field.value, "PPP")
                                ) : (
                                  <span>Pick a date</span>
                                )}
                                <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                              </Button>
                            </FormControl>
                          </PopoverTrigger>
                          <PopoverContent className="w-auto p-0" align="start">
                            <Calendar
                              mode="single"
                              selected={field.value}
                              onSelect={field.onChange}
                              disabled={(date) => date < new Date("1900-01-01")}
                              initialFocus
                            />
                          </PopoverContent>
                        </Popover>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
              </div>
              <div>
                <Label className="font-light text-base text-gray-600">
                  Search
                </Label>
                <Input type="search"></Input>
              </div>
              {fields.map((item, index) => (
                <div key={item.id} className="grid grid-cols-12 mt-4">
                  <div className="col-span-2">
                    <FormField
                      control={form.control}
                      name={`items.${index}.item`}
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="font-light text-base text-gray-600">
                            Item
                          </FormLabel>
                          <FormControl>
                            <Input {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                  <div className="col-span-2 ml-6">
                    <FormField
                      control={form.control}
                      name={`items.${index}.quantity`}
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="font-light text-base text-gray-600">
                            Qty
                          </FormLabel>
                          <FormControl>
                            <Input type="number" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                  <div className="col-span-2 ml-6">
                    <FormField
                      control={form.control}
                      name={`items.${index}.cost`}
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="font-light text-base text-gray-600">
                            Price
                          </FormLabel>
                          <FormControl>
                            <Input type="number" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                  <div className="col-span-2 ml-6">
                    <FormField
                      control={form.control}
                      name={`items.${index}.total`}
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="font-light text-base text-gray-600">
                            Total
                          </FormLabel>
                          <FormControl>
                            <Input type="number" {...field} readOnly value={Number(field.value) || Number(form.getValues(`items.${index}.quantity`)) * Number(form.getValues(`items.${index}.cost`))}/>
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                  <div className="col-span-1">
                    <FormField
                      control={form.control}
                      name={`items.${index}.unitId`}
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="font-light text-base text-gray-600">
                            Unit
                          </FormLabel>
                          <FormControl>
                            <Input type="number" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                  <div className="col-span-3 ml-6">
                    <FormField
                      control={form.control}
                      name={`items.${index}.expire`}
                      render={({ field }) => (
                        <FormItem className="flex flex-col">
                          <FormLabel className="font-light text-base text-gray-600">
                            Expire
                          </FormLabel>
                          <Popover>
                            <PopoverTrigger asChild>
                              <FormControl>
                                <Button
                                  variant={"outline"}
                                  className={cn(
                                    "pl-3 text-left font-light text-base text-gray-500",
                                    !field.value && "text-muted-foreground"
                                  )}
                                >
                                  {field.value ? (
                                    format(new Date(field.value), "PPP")
                                  ) : (
                                    <span>Pick a date</span>
                                  )}
                                  <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                                </Button>
                              </FormControl>
                            </PopoverTrigger>
                            <PopoverContent className="w-auto p-0" align="start">
                              <Calendar
                                mode="single"
                                selected={field.value}
                                onSelect={field.onChange}
                                disabled={(date) => date < new Date("1900-01-01")}
                                initialFocus
                              />
                            </PopoverContent>
                          </Popover>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                </div>
              ))}
              <div className="font-light text-semibold flex justify-end text-gray-500">
                Amount Total {fields.reduce((acc, item, index) => acc + (Number(form.getValues(`items.${index}.quantity`)) * Number(form.getValues(`items.${index}.cost`))), 0).toFixed(3)}
              </div>
              <div className="flex justify-between">
                <Button className="bg-cyan-500" onClick={handleAddItem}>
                  Add Item
                </Button>
              </div>
              <div className="flex justify-end">
                <Button className="bg-green-500" type="submit">
                  Save
                </Button>
              </div>
            </form>
          </Form>
        </CardContent>
      </Card>
    </div>
  );
};
