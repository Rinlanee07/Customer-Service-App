import StepperBar from "@/components/implementation/StepperBar";
import Layout from "@/components/layout";
import Head from "next/head";
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { useFieldArray, useForm } from "react-hook-form"
import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Checkbox } from "@/components/ui/checkbox";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { CalendarIcon, PlusCircleIcon, Trash2Icon } from "lucide-react";
import { Calendar } from "@/components/ui/calendar";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useState } from "react";
import { cn } from "@/lib/utils";
import { format } from "date-fns";
import { useRouter } from "next/router";
import { ToastAction } from "@/components/ui/toast";
import { useToast } from "@/components/ui/use-toast";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { TransactionCustomer } from "@/datatype/post.datatype";
import { postImplementation } from "@/lib/axios";
import { useUserInfoStore } from "@/store/user.store";
import { Textarea } from "@/components/ui/textarea";

const formSchema = z.object({
  shopType: z.string().min(1, {
    message: "Shop Type field is required",
  }),
  customization: z.boolean().optional(),
  customDetail: z.string().optional(),
  shopName: z.string().min(1, {
    message: "Shop Name field is required",
  }),
  siteName: z.string().min(1, {
    message: "Size Name field is required",
  }),
  contactPort: z.string().min(1, {
    message: "Contact Port field is required",
  }),
  package: z.string().min(1, {
    message: "Package field is required",
  }),
  noteShop: z.string().optional(),
  printer: z
    .array(
      z.object({
        model: z.string().min(1, {
          message: "Model field is required",
        }),
        serial: z.string().min(1, {
          message: "S/N field is required",
        }),
        warrantyShop: z.date().optional(),
        warrantyVendor: z.date().optional(),
      })
    )
    .optional(),
  addOn: z
    .array(
      z.object({
        device: z.string().optional(),
        serial: z.string().optional(),
      })
    )
    .optional(),
  device: z
    .array(
      z.object({
        device: z.string().optional(),
        model: z.string().min(1, {
          message: "Model field is required",
        }),
        serial: z.string().min(1, {
          message: "S/N field is required",
        }),
      })
    )
    .optional(),
})

export default function ShopInformation() {
  const router = useRouter();
  const queryClient = useQueryClient();
  const { toast } = useToast();
  const { userInfo } = useUserInfoStore();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      shopType: "",
      customization: false,
      customDetail: "",
      shopName: "",
      siteName: "",
      contactPort: "",
      package: "",
      noteShop: "",
      printer: [],
      addOn: [],
      device: [],
    },
  })

  const mutation = useMutation({
    mutationFn: (format: TransactionCustomer) => postImplementation(format),
    onSuccess: (res) => {
      queryClient.invalidateQueries({ queryKey: ["categoryData"] });
      console.log(res);

      router.push({
        pathname: "setupsystem", query: {
          id: res.data.createdTransactionCustomer
            .id
        }
      });
    },
    onError: (error) => {
      toast({
        variant: "destructive",
        title: "Uh oh! Something went wrong.",
        description: "There was a problem with your request.",
        action: <ToastAction altText="Try again">Try again</ToastAction>,
      });
    },
  });


  async function onSubmit(values: z.infer<typeof formSchema>) {
    try {
      const formatData = { ...values, createdBy: userInfo.id };
      await mutation.mutateAsync(formatData);
    } catch (error) {
      console.error("Error adding Implementation:", error);
    }
  }

  const {
    control,
    watch,
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = form;

  const {
    fields: printerFields,
    append: appendPrinter,
    remove: removePrinter,
  } = useFieldArray({
    name: "printer",
    control,
  });

  const {
    fields: addOnFields,
    append: appendAddOn,
    remove: removeAddOn,
  } = useFieldArray({
    name: "addOn",
    control,
  });
  const {
    fields: deviceFields,
    append: appendDevice,
    remove: removeDevice,
  } = useFieldArray({
    name: "device",
    control,
  });

  const [calendarSelectedDateShop, setCalendarSelectedDateShop] =
    useState<Date>();
  const [calendarSelectedDateVendor, setCalendarSelectedDateVendor] =
    useState<Date>();

  const handleDateSelectWarrantyVendor = (
    index: number,
    value: Date | undefined
  ) => {
    setCalendarSelectedDateVendor(value);
    setValue(`printer.${index}.warrantyVendor`, value);
  };

  const handleDateSelectWarrantyShop = (
    index: number,
    value: Date | undefined
  ) => {
    setCalendarSelectedDateShop(value);
    setValue(`printer.${index}.warrantyShop`, value);
  };

  return (
    <Layout>
      <Head>
        <title>Implementation</title>
      </Head>
      <main className="font-lexend">
        <StepperBar canclick={false} />
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8 mt-4">
            <Card className="w-full p-6">
              <CardContent>
                <div>
                  <FormField
                    control={form.control}
                    name="shopType"
                    render={({ field }) => (
                      <FormItem className="flex flex-row space-x-24 space-y-0">
                        <FormLabel className="font-light text-base text-gray-600">
                          Type <span className="text-red-500">*</span>
                        </FormLabel>
                        <FormControl className="font-light text-base text-gray-500">
                          <RadioGroup
                            onValueChange={field.onChange}
                            defaultValue={field.value}
                            className="flex flex-col md:flex-row items-start md:items-center space-y-1"
                          >
                            <FormItem className="flex items-center space-x-3 space-y-0">
                              <FormControl>
                                <RadioGroupItem value="restaurant" />
                              </FormControl>
                              <FormLabel className="font-normal">
                                Restaurant
                              </FormLabel>
                            </FormItem>
                            <FormItem className="flex items-center space-x-3 space-y-0">
                              <FormControl>
                                <RadioGroupItem value="buffet" />
                              </FormControl>
                              <FormLabel className="font-normal">
                                Buffet
                              </FormLabel>
                            </FormItem>
                            <FormItem className="flex items-center space-x-3 space-y-0">
                              <FormControl>
                                <RadioGroupItem value="hotel" />
                              </FormControl>
                              <FormLabel className="font-normal">
                                Hotel
                              </FormLabel>
                            </FormItem>
                            <FormItem className="flex items-center space-x-3 space-y-0">
                              <FormControl>
                                <RadioGroupItem value="cashcard" />
                              </FormControl>
                              <FormLabel className="font-normal">
                                Cash Card
                              </FormLabel>
                            </FormItem>
                          </RadioGroup>
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                <div className="flex flex-row">
                  <FormField
                    control={form.control}
                    name="customization"
                    render={({ field }) => (
                      <FormItem className="flex items-start space-x-5 space-y-0 mt-4">
                        <FormLabel className="font-light text-base text-gray-600">
                          Customization
                        </FormLabel>
                        <FormControl className="font-light text-base text-gray-500">
                          <Checkbox
                            checked={field.value}
                            onCheckedChange={field.onChange}
                          />
                        </FormControl>
                        <div className="space-y-1 ">
                          <FormLabel className="font-light text-base text-gray-500">
                            {field.value === true ? "Yes" : "No"}
                          </FormLabel>
                          {field.value === true && (
                            <FormField
                              control={form.control}
                              name="customDetail"
                              render={({ field }) => (
                                <FormItem>
                                  <FormControl className="mt-4">
                                    <Input {...field}></Input>
                                  </FormControl>
                                  <FormMessage />
                                </FormItem>
                              )}
                            />
                          )}
                        </div>
                      </FormItem>
                    )}
                  />
                </div>
                <FormField
                  control={form.control}
                  name="shopName"
                  render={({ field }) => (
                    <FormItem className="mt-4 flex items-center md:space-x-16 space-y-0">
                      <FormLabel className="flexs flex-shrink-0 font-light text-base text-gray-600">
                        Shop Name <span className="text-red-500">*</span>
                      </FormLabel>
                      <FormControl>
                        <Input {...field}></Input>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="siteName"
                  render={({ field }) => (
                    <FormItem className="mt-4 flex items-center md:space-x-16 space-y-0">
                      <FormLabel className="font-light flex-shrink-0 text-base text-gray-600">
                        Site Name <span className="text-red-500">*</span>
                      </FormLabel>
                      <FormControl>
                        <Input {...field}></Input>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="contactPort"
                  render={({ field }) => (
                    <FormItem className="mt-4 flex items-center md:space-x-16 space-y-0">
                      <FormLabel className="font-light flex-shrink-0 text-base text-gray-600">
                        Contact Port <span className="text-red-500">*</span>
                      </FormLabel>
                      <FormControl>
                        <Input {...field}></Input>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="package"
                  render={({ field }) => (
                    <FormItem className="mt-4 flex items-center md:space-x-16 space-y-0">
                      <FormLabel className="font-light flex-shrink-0 text-base text-gray-600">
                        Package <span className="text-red-500">*</span>
                      </FormLabel>
                      <FormControl>
                        <Input {...field}></Input>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="noteShop"
                  render={({ field }) => (
                    <FormItem className="mt-4 flex items-center md:space-x-16 space-y-0">
                      <FormLabel className="font-light flex-shrink-0 text-base text-gray-600">
                        NoteShop
                      </FormLabel>
                      <FormControl>
                        <Textarea {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <div className="mt-8 flex items-center">
                  <Label className="text-gray-600 text-base font-light">
                    Printer
                  </Label>
                  <PlusCircleIcon
                    className="ml-1 text-cyan-500 cursor-pointer"
                    onClick={() =>
                      appendPrinter({
                        model: "",
                        serial: "",
                        warrantyShop: new Date(),
                        warrantyVendor: new Date(),
                      })
                    }
                  />
                </div>
                {printerFields.map((field, index) => (
                  <div key={field.id} className="grid grid-cols-1 lg:grid-cols-12 mt-4 ml-8">
                    <div className="col-span-3">
                      <FormItem>
                        <FormLabel className="font-light text-base text-gray-600">
                          Model *
                        </FormLabel>
                        <Input
                          {...register(`printer.${index}.model`)}
                          defaultValue={field.model}
                          className="font-light text-base text-gray-500"
                        />
                      </FormItem>
                    </div>
                    <div className="col-span-2 ml-4">
                      <FormItem>
                        <FormLabel className="font-light text-base text-gray-600">
                          S/N *
                        </FormLabel>
                        <Input
                          {...register(`printer.${index}.serial`)}
                          defaultValue={field.serial}
                          className="font-light text-base text-gray-500"
                        />
                      </FormItem>
                    </div>
                    <div className="col-span-3 ml-4">
                      <FormItem className="flex flex-col">
                        <FormLabel className="font-light text-base text-gray-600">
                          Warranty Shop
                        </FormLabel>
                        <Popover>
                          <PopoverTrigger asChild>
                            <Button
                              variant={"outline"}
                              className={cn(
                                "pl-3 text-left font-light text-base text-gray-500",
                                !calendarSelectedDateShop &&
                                "text-muted-foreground"
                              )}
                            >
                              {calendarSelectedDateShop ? (
                                format(calendarSelectedDateShop, "PPP")
                              ) : (
                                <span>Pick a date</span>
                              )}
                              <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                            </Button>
                          </PopoverTrigger>
                          <PopoverContent className="w-auto p-0" align="start">
                            <Calendar
                              mode="single"
                              selected={field.warrantyShop}
                              onSelect={(value) =>
                                handleDateSelectWarrantyShop(index, value)
                              }
                            />
                          </PopoverContent>
                        </Popover>
                      </FormItem>
                    </div>
                    <div className="col-span-3 ml-4">
                      <FormItem className="flex flex-col">
                        <FormLabel className="font-light text-base text-gray-600">
                          Warranty Vendor
                        </FormLabel>
                        <Popover>
                          <PopoverTrigger asChild>
                            <Button
                              variant={"outline"}
                              className={cn(
                                "pl-3 text-left font-light text-base text-gray-500",
                                !calendarSelectedDateVendor &&
                                "text-muted-foreground"
                              )}
                            >
                              {calendarSelectedDateVendor ? (
                                format(calendarSelectedDateVendor, "PPP")
                              ) : (
                                <span>Pick a date</span>
                              )}
                              <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                            </Button>
                          </PopoverTrigger>
                          <PopoverContent className="w-auto p-0" align="start">
                            <Calendar
                              mode="single"
                              selected={field.warrantyVendor}
                              onSelect={(value) =>
                                handleDateSelectWarrantyVendor(index, value)
                              }
                            />
                          </PopoverContent>
                        </Popover>
                        <FormMessage />
                      </FormItem>
                    </div>
                    <div className="col-span-1 flex justify-center items-center">
                      <Trash2Icon
                        className="mt-9 mb-4 text-gray-500 items-center cursor-pointer"
                        onClick={() => removePrinter(index)}
                      />
                    </div>
                  </div>
                ))}

                <div className="mt-8 flex items-center">
                  <Label className="text-gray-600 text-base font-light">
                    Add On
                  </Label>
                  <PlusCircleIcon
                    className="ml-1 text-cyan-500 cursor-pointer"
                    onClick={() =>
                      appendAddOn({
                        device: "",
                        serial: "",
                      })
                    }
                  />
                </div>
                {addOnFields.map((field, index) => (
                  <div key={field.id} className="grid grid-cols-1 lg:grid-cols-12 mt-4 ml-8">
                    <div className="col-span-3">
                      <FormField
                        control={form.control}
                        name="addOn"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="font-light text-base text-gray-600">
                              Device
                            </FormLabel>
                            <FormControl>
                              <Input
                                {...register(`addOn.${index}.device`)}
                                className="font-light text-base text-gray-500"
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>
                    <div className="col-span-2 ml-6">
                      <FormField
                        control={form.control}
                        name="addOn"
                        render={({ field }) => (
                          <FormItem className="">
                            <FormLabel className="font-light text-base text-gray-600">
                              S/N
                            </FormLabel>
                            <FormControl>
                              <Input
                                {...register(`addOn.${index}.serial`)}
                                className="font-light text-base text-gray-500"
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>
                    <div className="flex justify-center items-center">
                      <Trash2Icon
                        className="mt-9 mb-4 text-gray-500 items-center cursor-pointer"
                        onClick={() => removeAddOn(index)}
                      />
                    </div>
                  </div>
                ))}

                <div className="mt-8 flex items-center">
                  <Label className="text-gray-600 text-base font-light">
                    Device
                  </Label>
                  <PlusCircleIcon
                    className="ml-1 text-cyan-500 cursor-pointer"
                    onClick={() =>
                      appendDevice({
                        device: "",
                        model: "",
                        serial: "",
                      })
                    }
                  />
                </div>
                {deviceFields.map((field, index) => (
                  <div key={field.id} className="grid grid-cols-1 lg:grid-cols-12 mt-4 ml-8">
                    <div className="col-span-3">
                      <FormField
                        control={form.control}
                        name="device"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="font-light text-base text-gray-600">
                              Device
                            </FormLabel>
                            <Select
                              onValueChange={(value) =>
                                setValue(`device.${index}.device`, value)
                              }
                            >
                              <FormControl className="font-light text-base text-gray-500">
                                <SelectTrigger>
                                  <SelectValue />
                                </SelectTrigger>
                              </FormControl>
                              <SelectContent className="font-light text-base text-gray-500">
                                <SelectItem value="ipad">iPad</SelectItem>
                                <SelectItem value="android">Android</SelectItem>
                              </SelectContent>
                            </Select>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>
                    <div className="col-span-3 ml-6">
                      <FormField
                        control={form.control}
                        name="device"
                        render={({ field }) => (
                          <FormItem className="">
                            <FormLabel className="font-light text-base text-gray-600">
                              Model *
                            </FormLabel>
                            <FormControl>
                              <Input
                                {...register(`device.${index}.model`)}
                                className="font-light text-base text-gray-500"
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>
                    <div className="col-span-3 ml-6">
                      <FormField
                        control={form.control}
                        name="device"
                        render={({ field }) => (
                          <FormItem className="">
                            <FormLabel className="font-light text-base text-gray-600">
                              S/N *
                            </FormLabel>
                            <FormControl>
                              <Input
                                {...register(`device.${index}.serial`)}
                                className="font-light text-base text-gray-500"
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>

                    <div className="flex justify-center items-center">
                      <Trash2Icon
                        className="mt-9 mb-4 text-gray-500 items-center cursor-pointer"
                        onClick={() => removeDevice(index)}
                      />
                    </div>
                  </div>
                ))}
                <div className={`flex justify-end`}>
                  <Button
                    type='submit'
                    className="bg-cyan-700"
                  >
                    Next
                  </Button>
                </div>
              </CardContent>
            </Card>
          </form>
        </Form>
      </main>
    </Layout>
  )
}