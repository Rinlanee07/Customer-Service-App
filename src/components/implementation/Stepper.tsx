import React, { useEffect, useState } from "react";
import { CheckIcon } from "lucide-react";
import { Button } from "../ui/button";
import { Calendar as CalendarIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import { format } from "date-fns";
import { Input } from "@/components/ui/input";
import { Calendar } from "@/components/ui/calendar";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { Label } from "@radix-ui/react-label";
import { Checkbox } from "@/components/ui/checkbox";
import { PlusCircleIcon, Trash2Icon } from "lucide-react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useFieldArray, useForm } from "react-hook-form";
import { z } from "zod";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Form,
  FormControl,
  FormDescription,
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
import {
  backEnd,
  cloneSite,
  deliver,
  frontEnd,
  newSite,
  note,
  testApp,
  zone,
} from "@/constant/checkbox.constant";
import { useToast } from "@/components/ui/use-toast";
import { postImplementation } from "@/lib/axios";
import { ToastAction } from "@/components/ui/toast";
import { TransactionCustomer } from "@/datatype/post.datatype";
import { useRouter } from "next/navigation";
import { useUserInfoStore } from "@/store/user.store";
import useFormPersist from 'react-hook-form-persist'

const formSchema = z.object({
  shopType: z.string().optional(),
  siteType: z.string().optional(),
  branchType: z.string().optional(),
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
  siteDetail: z
    .array(z.string().optional())
    .refine((value) => value.some((item) => item))
    .optional(),
  branchDetail: z
    .array(z.string())
    .refine((value) => value.some((item) => item))
    .optional(),
  note: z
    .array(z.string())
    .refine((value) => value.some((item) => item))
    .optional(),
  testAppDetail: z
    .array(z.string())
    .refine((value) => value.some((item) => item))
    .optional(),
  frontEndDetail: z
    .array(z.string())
    .refine((value) => value.some((item) => item))
    .optional(),
  backEndDetail: z
    .array(z.string())
    .refine((value) => value.some((item) => item))
    .optional(),
  dateTrain: z.date().optional(),
  deliverDetail: z
    .array(z.string())
    .refine((value) => value.some((item) => item))
    .optional(),
  dateDeliver: z.date().optional(),
});

// const validateSchema = [
//   z.object({
//     shopType: z.string().optional(),
//     customization: z.boolean().optional(),
//     customDetail: z.string().optional(),
//     shopName: z.string().min(1, {
//       message: "Shop Name field is required",
//     }),
//     siteName: z.string().min(1, {
//       message: "Size Name field is required",
//     }),
//     contactPort: z.string().min(1, {
//       message: "Contact Port field is required",
//     }),
//     package: z.string().min(1, {
//       message: "Package field is required",
//     }),
//     printer: z
//       .array(
//         z.object({
//           model: z.string().min(1, {
//             message: "Model field is required",
//           }),
//           serial: z.string().min(1, {
//             message: "S/N field is required",
//           }),
//           warrantyShop: z.date().optional(),
//           warrantyVendor: z.date().optional(),
//         })
//       )
//       .optional(),
//     addOn: z
//       .array(
//         z.object({
//           device: z.string().optional(),
//           serial: z.string().optional(),
//         })
//       )
//       .optional(),
//     device: z
//       .array(
//         z.object({
//           device: z.string().optional(),
//           model: z.string().min(1, {
//             message: "Model field is required",
//           }),
//           serial: z.string().min(1, {
//             message: "S/N field is required",
//           }),
//         })
//       )
//       .optional(),
//   }),
//   z.object({
//     siteType: z.string().optional(),
//     siteDetail: z
//       .array(z.string().optional())
//       .refine((value) => value.some((item) => item))
//       .optional(),
//   }),
//   z.object({
//     branchType: z.string().optional(),
//     branchDetail: z
//       .array(z.string())
//       .refine((value) => value.some((item) => item))
//       .optional(),
//     note: z
//       .array(z.string())
//       .refine((value) => value.some((item) => item))
//       .optional(),
//   }),
//   z.object({
//     testAppDetail: z
//       .array(z.string())
//       .refine((value) => value.some((item) => item))
//       .optional(),
//   }),
//   z.object({
//     frontEndDetail: z
//       .array(z.string())
//       .refine((value) => value.some((item) => item))
//       .optional(),
//     backEndDetail: z
//       .array(z.string())
//       .refine((value) => value.some((item) => item))
//       .optional(),
//     dateTrain: z.date().optional(),
//   }),
//   z.object({
//     deliverDetail: z
//       .array(z.string())
//       .refine((value) => value.some((item) => item))
//       .optional(),
//     dateDeliver: z.date().optional(),
//   }),
// ]


const Stepper = () => {
  const [open, setOpen] = useState<boolean>(false);
  const [currentStep, setCurrentStep] = useState(1);
  const [complete, setComplete] = useState(false);
  const queryClient = useQueryClient();
  const router = useRouter();
  const { toast } = useToast();
  const { userInfo } = useUserInfoStore();
  // const currentValidationSchema = [currentStep];

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    // defaultValues: {
    //   shopType: "",
    //   siteType: "",
    //   branchType: "",
    //   customization: false,
    //   customDetail: "",
    //   shopName: "",
    //   siteName: "",
    //   contactPort: "",
    //   package: "",
    //   printer: [],
    //   addOn: [],
    //   device: [],
    //   dateTrain: new Date(),
    //   dateDeliver: new Date(),
    // },
  });
  const {
    control,
    watch,
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = form;

  // useFormPersist("form", { watch, setValue, storage: typeof window !== "undefined" ? window.localStorage : undefined, });

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

  const steps = [
    "Shop Information",
    "Setup System",
    "Branch",
    "Test Application",
    "Train",
    "Deliver",
  ];

  const mutation = useMutation({
    mutationFn: (format: TransactionCustomer) => postImplementation(format),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["categoryData"] });
      setOpen(false);
      router.refresh();

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

  async function onSubmit(values: z.infer<typeof formSchema> | any) {
    try {
      const formatData = { ...values, createdBy: userInfo.id }
      console.log(formatData);
      await mutation.mutateAsync(formatData);
    } catch (error) {
      console.error("Error adding Implementation:", error);
    }
  }

  const handlePrevStep = () => {
    setCurrentStep((prevStep) => prevStep - 1);
  };

  const [selectedOption, setSelectedOption] = useState("");

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
    <div className="h-full">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <div className="flex flex-col md:flex-row justify-start overflow-x-auto">
            {steps?.map((step, i) => (
              <div
                key={i}
                className={`step-item ${currentStep === i + 1 && "active"} ${(i + 1 < currentStep || complete) && "complete"
                  } `}
              >
                <div className="step">
                  {i + 1 < currentStep || complete ? (
                    <CheckIcon size={24} />
                  ) : (
                    i + 1
                  )}
                </div>
                <p className="text-gray-500">{step}</p>
              </div>
            ))}
          </div>

          {currentStep === 1 && (
            <Card className="w-full">
              <CardContent>
                <div className="flex justify-end mt-4">
                  <div className="mr-4">
                    {/* <FormField
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
                            <PopoverContent
                              className="w-auto p-0"
                              align="start"
                            >
                              <Calendar
                                mode="single"
                                selected={field.value}
                                onSelect={field.onChange}
                                disabled={(date) =>
                                  date < new Date("1900-01-01")
                                }
                                initialFocus
                              />
                            </PopoverContent>
                          </Popover>
                          <FormMessage />
                        </FormItem>
                      )}
                    /> */}
                  </div>
                </div>
                <div>
                  <FormField
                    control={form.control}
                    name="shopType"
                    render={({ field }) => (
                      <FormItem className="flex flex-row space-x-24 space-y-0">
                        <FormLabel className="font-light text-base text-gray-600">
                          Type
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
                <div className="grid grid-cols-12">
                  <div className="col-span-8">
                    <FormField
                      control={form.control}
                      name="shopName"
                      render={({ field }) => (
                        <FormItem className="mt-4 flex items-center space-x-16 space-y-0">
                          <FormLabel className="flexs flex-shrink-0 font-light text-base text-gray-600">
                            Shop Name *
                          </FormLabel>
                          <FormControl>
                            <Input {...field}></Input>
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                </div>
                <div className="grid grid-cols-12">
                  <div className="col-span-8">
                    <FormField
                      control={form.control}
                      name="siteName"
                      render={({ field }) => (
                        <FormItem className="mt-4 flex items-center space-x-16 space-y-0">
                          <FormLabel className="font-light flex-shrink-0 text-base text-gray-600">
                            Site Name *
                          </FormLabel>
                          <FormControl>
                            <Input {...field}></Input>
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                </div>
                <div className="grid grid-cols-12">
                  <div className="col-span-8">
                    <FormField
                      control={form.control}
                      name="contactPort"
                      render={({ field }) => (
                        <FormItem className="mt-4 flex items-center space-x-16 space-y-0">
                          <FormLabel className="font-light flex-shrink-0 text-base text-gray-600">
                            Contact Port *
                          </FormLabel>
                          <FormControl>
                            <Input {...field}></Input>
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                </div>
                <div className="grid grid-cols-12">
                  <div className="col-span-8">
                    <FormField
                      control={form.control}
                      name="package"
                      render={({ field }) => (
                        <FormItem className="mt-4 flex items-center space-x-16 space-y-0">
                          <FormLabel className="font-light flex-shrink-0 text-base text-gray-600">
                            Package *
                          </FormLabel>
                          <FormControl>
                            <Input {...field}></Input>
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                </div>

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
                  <div key={field.id} className="grid grid-cols-12 mt-4 ml-8">
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
                  <div key={field.id} className="grid grid-cols-12 mt-4 ml-8">
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
                  <div key={field.id} className="grid grid-cols-12 mt-4 ml-8">
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
              </CardContent>
            </Card>
          )}

          {currentStep === 2 && (
            <Card className="w-full">
              <CardContent>
                <div className="flex justify-end mt-4"></div>
                <div>
                  <FormField
                    control={form.control}
                    name="siteType"
                    render={({ field }) => (
                      <FormItem className="flex flex-row space-x-24 space-y-0">
                        <FormControl className="font-light text-base text-gray-500">
                          <RadioGroup
                            onValueChange={(value) => {
                              setSelectedOption(value);
                              {
                                field.onChange(value);
                              }
                            }}
                            defaultValue={field.value}
                            className="flex flex-col md:flex-row items-start md:items-center space-y-1"
                          >
                            <FormItem className="flex items-center space-x-3 space-y-1">
                              <FormControl className="mt-1">
                                <RadioGroupItem value="newSite" />
                              </FormControl>
                              <FormLabel className="font-light text-base text-gray-500">
                                New Site
                              </FormLabel>
                            </FormItem>
                            <FormItem className="flex items-center space-x-3 space-y-0">
                              <FormControl>
                                <RadioGroupItem value="cloneSite" />
                              </FormControl>
                              <FormLabel className="font-light text-base text-gray-500">
                                Clone Site
                              </FormLabel>
                            </FormItem>
                          </RadioGroup>
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  {selectedOption === "newSite" && (
                    <FormField
                      control={form.control}
                      name="siteDetail"
                      render={() => (
                        <FormItem>
                          <div className="mb-4"></div>
                          {newSite.map((item) => (
                            <FormField
                              key={item.id}
                              control={form.control}
                              name="siteDetail"
                              render={({ field }) => {
                                return (
                                  <FormItem
                                    key={item.id}
                                    className="flex flex-row items-start space-x-3 space-y-0"
                                  >
                                    <FormControl className="font-light text-base text-gray-500">
                                      <Checkbox
                                        checked={
                                          Array.isArray(field.value) &&
                                          field.value.includes(item.id)
                                        }
                                        onCheckedChange={(checked) => {
                                          return checked
                                            ? field.onChange([
                                              ...(field.value || []),
                                              item.id,
                                            ])
                                            : field.onChange(
                                              (field.value || []).filter(
                                                (value) => value !== item.id
                                              )
                                            );
                                        }}
                                      />
                                    </FormControl>
                                    <FormLabel className="font-light text-base text-gray-500">
                                      {item.label}
                                    </FormLabel>
                                  </FormItem>
                                );
                              }}
                            />
                          ))}
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  )}
                  {selectedOption === "cloneSite" && (
                    <FormField
                      control={form.control}
                      name="siteDetail"
                      render={() => (
                        <FormItem>
                          <div className="mb-4"></div>
                          {cloneSite.map((item) => (
                            <FormField
                              key={item.id}
                              control={form.control}
                              name="siteDetail"
                              render={({ field }) => {
                                return (
                                  <FormItem
                                    key={item.id}
                                    className="flex flex-row items-start space-x-3 space-y-0"
                                  >
                                    <FormControl className="font-light text-base text-gray-500">
                                      <Checkbox
                                        checked={
                                          Array.isArray(field.value) &&
                                          field.value.includes(item.id)
                                        }
                                        onCheckedChange={(checked) => {
                                          return checked
                                            ? field.onChange([
                                              ...(field.value || []),
                                              item.id,
                                            ])
                                            : field.onChange(
                                              (field.value || []).filter(
                                                (value) => value !== item.id
                                              )
                                            );
                                        }}
                                      />
                                    </FormControl>
                                    <FormLabel className="font-light text-base text-gray-500">
                                      {item.label}
                                    </FormLabel>
                                  </FormItem>
                                );
                              }}
                            />
                          ))}
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  )}
                </div>
              </CardContent>
            </Card>
          )}

          {currentStep === 3 && (
            <Card className="w-full">
              <CardContent>
                <div className="space-y-8 mt-4">
                  <FormField
                    control={form.control}
                    name="branchType"
                    render={({ field }) => (
                      <FormItem className="flex flex-row space-x-24 space-y-0">
                        <FormControl className="font-light text-base text-gray-500">
                          <RadioGroup
                            onValueChange={(value) => {
                              setSelectedOption(value);
                              {
                                field.onChange(value);
                              }
                            }}
                            defaultValue={field.value}
                            className="flex flex-col md:flex-row items-start md:items-center space-y-1"
                          >
                            <FormItem className="flex items-center space-x-3 space-y-1">
                              <FormControl className="mt-1">
                                <RadioGroupItem value="singleSite" />
                              </FormControl>
                              <FormLabel className="font-light text-base text-gray-500">
                                Single Site
                              </FormLabel>
                            </FormItem>
                            <FormItem className="flex items-center space-x-3 space-y-0">
                              <FormControl>
                                <RadioGroupItem value="branch" />
                              </FormControl>
                              <FormLabel className="font-light text-base text-gray-500">
                                Branch
                              </FormLabel>
                            </FormItem>
                          </RadioGroup>
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  {selectedOption === "branch" && (
                    <FormField
                      control={form.control}
                      name="branchDetail"
                      render={() => (
                        <FormItem>
                          <div className="mt-4 mb-4 text-gray-600">Zone</div>
                          {zone.map((item) => (
                            <FormField
                              key={item.id}
                              control={form.control}
                              name="branchDetail"
                              render={({ field }) => {
                                return (
                                  <FormItem
                                    key={item.id}
                                    className="flex flex-row items-start space-x-3 space-y-0"
                                  >
                                    <FormControl className="font-light text-base text-gray-500">
                                      <Checkbox
                                        checked={
                                          Array.isArray(field.value) &&
                                          field.value.includes(item.id)
                                        }
                                        onCheckedChange={(checked) => {
                                          return checked
                                            ? field.onChange([
                                              ...(field.value || []),
                                              item.id,
                                            ])
                                            : field.onChange(
                                              (field.value || []).filter(
                                                (value) => value !== item.id
                                              )
                                            );
                                        }}
                                      />
                                    </FormControl>
                                    <FormLabel className="font-light text-base text-gray-500">
                                      {item.label}
                                    </FormLabel>
                                  </FormItem>
                                );
                              }}
                            />
                          ))}
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  )}
                </div>
                <FormField
                  control={form.control}
                  name="note"
                  render={() => (
                    <FormItem>
                      <div className="mb-4 text-gray-600">Note</div>
                      {note.map((item) => (
                        <FormField
                          key={item.id}
                          control={form.control}
                          name="note"
                          render={({ field }) => {
                            return (
                              <FormItem
                                key={item.id}
                                className="flex flex-row items-start space-x-3 space-y-0"
                              >
                                <FormControl className="font-light text-base text-gray-500">
                                  <Checkbox
                                    checked={
                                      Array.isArray(field.value) &&
                                      field.value.includes(item.id)
                                    }
                                    onCheckedChange={(checked) => {
                                      return checked
                                        ? field.onChange([
                                          ...(field.value || []),
                                          item.id,
                                        ])
                                        : field.onChange(
                                          (field.value || []).filter(
                                            (value) => value !== item.id
                                          )
                                        );
                                    }}
                                  />
                                </FormControl>
                                <FormLabel className="font-light text-base text-gray-500">
                                  {item.label}
                                </FormLabel>
                              </FormItem>
                            );
                          }}
                        />
                      ))}
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </CardContent>
            </Card>
          )}

          {currentStep === 4 && (
            <Card className="w-full">
              <CardContent>
                <div className="mt-4">
                  <FormField
                    control={form.control}
                    name="testAppDetail"
                    render={() => (
                      <FormItem>
                        <div className="mb-4"></div>
                        {testApp.map((item) => (
                          <FormField
                            key={item.id}
                            control={form.control}
                            name="testAppDetail"
                            render={({ field }) => {
                              return (
                                <FormItem
                                  key={item.id}
                                  className="flex flex-row items-start space-x-3 space-y-0"
                                >
                                  <FormControl className="font-light text-base text-gray-500">
                                    <Checkbox
                                      checked={
                                        Array.isArray(field.value) &&
                                        field.value.includes(item.id)
                                      }
                                      onCheckedChange={(checked) => {
                                        return checked
                                          ? field.onChange([
                                            ...(field.value || []),
                                            item.id,
                                          ])
                                          : field.onChange(
                                            (field.value || []).filter(
                                              (value) => value !== item.id
                                            )
                                          );
                                      }}
                                    />
                                  </FormControl>
                                  <FormLabel className="font-light text-base text-gray-500">
                                    {item.label}
                                  </FormLabel>
                                </FormItem>
                              );
                            }}
                          />
                        ))}
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
              </CardContent>
            </Card>
          )}

          {currentStep === 5 && (
            <Card className="w-full">
              <CardContent>
                <div className="grid grid-cols-12">
                  <div className="col-span-6  text-center grid-cols-12 grid mt-4">
                    <div className="col-span-12 text-gray-500">
                      Front-End
                      <div className="mt-4">
                        <FormField
                          control={form.control}
                          name="frontEndDetail"
                          render={() => (
                            <FormItem>
                              <div className="mb-4"></div>
                              {frontEnd.map((item) => (
                                <FormField
                                  key={item.id}
                                  control={form.control}
                                  name="frontEndDetail"
                                  render={({ field }) => {
                                    return (
                                      <FormItem
                                        key={item.id}
                                        className="flex flex-row items-start space-x-3 space-y-0"
                                      >
                                        <FormControl className="font-light text-base text-gray-500">
                                          <Checkbox
                                            checked={
                                              Array.isArray(field.value) &&
                                              field.value.includes(item.id)
                                            }
                                            onCheckedChange={(checked) => {
                                              return checked
                                                ? field.onChange([
                                                  ...(field.value || []),
                                                  item.id,
                                                ])
                                                : field.onChange(
                                                  (field.value || []).filter(
                                                    (value) =>
                                                      value !== item.id
                                                  )
                                                );
                                            }}
                                          />
                                        </FormControl>
                                        <FormLabel className="font-light text-base text-gray-500">
                                          {item.label}
                                        </FormLabel>
                                      </FormItem>
                                    );
                                  }}
                                />
                              ))}
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="col-span-6  text-center grid-cols-12 grid mt-4">
                    <div className="col-span-12 text-gray-500">
                      Back-End
                      <div className="mt-4">
                        <FormField
                          control={form.control}
                          name="backEndDetail"
                          render={() => (
                            <FormItem>
                              <div className="mb-4"></div>
                              {backEnd.map((item) => (
                                <FormField
                                  key={item.id}
                                  control={form.control}
                                  name="backEndDetail"
                                  render={({ field }) => {
                                    return (
                                      <FormItem
                                        key={item.id}
                                        className="flex flex-row items-start space-x-3 space-y-0"
                                      >
                                        <FormControl className="font-light text-base text-gray-500">
                                          <Checkbox
                                            checked={
                                              Array.isArray(field.value) &&
                                              field.value.includes(item.id)
                                            }
                                            onCheckedChange={(checked) => {
                                              return checked
                                                ? field.onChange([
                                                  ...(field.value || []),
                                                  item.id,
                                                ])
                                                : field.onChange(
                                                  (field.value || []).filter(
                                                    (value) =>
                                                      value !== item.id
                                                  )
                                                );
                                            }}
                                          />
                                        </FormControl>
                                        <FormLabel className="font-light text-base text-gray-500">
                                          {item.label}
                                        </FormLabel>
                                      </FormItem>
                                    );
                                  }}
                                />
                              ))}
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-12 text-gray-500">
                  <div className="justify-self-end col-span-12 text-center mr-12">
                    <div>
                      <div>..............................</div>
                      <div>(..............................)</div>
                      <div>Trainer</div>
                      {/* <div>Trigger Plus co.,Itd</div> */}
                      <div>
                        <FormField
                          control={form.control}
                          name="dateTrain"
                          render={({ field }) => (
                            <FormItem className="mt-1">
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
                                        <span>
                                          ........./.........../..........
                                        </span>
                                      )}
                                    </Button>
                                  </FormControl>
                                </PopoverTrigger>
                                <PopoverContent
                                  className="w-auto p-0"
                                  align="start"
                                >
                                  <Calendar
                                    mode="single"
                                    selected={field.value}
                                    onSelect={field.onChange}
                                    disabled={(date) =>
                                      date < new Date("1900-01-01")
                                    }
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
                  </div>
                </div>
              </CardContent>
            </Card>
          )}

          {currentStep === 6 && (
            <Card className="w-full">
              <CardContent>
                <div className="mt-4">
                  <FormField
                    control={form.control}
                    name="deliverDetail"
                    render={() => (
                      <FormItem>
                        <div className="mb-4"></div>
                        {deliver.map((item) => (
                          <FormField
                            key={item.id}
                            control={form.control}
                            name="deliverDetail"
                            render={({ field }) => {
                              return (
                                <FormItem
                                  key={item.id}
                                  className="flex flex-row items-start space-x-3 space-y-0"
                                >
                                  <FormControl className="font-light text-base text-gray-500">
                                    <Checkbox
                                      checked={
                                        Array.isArray(field.value) &&
                                        field.value.includes(item.id)
                                      }
                                      onCheckedChange={(checked) => {
                                        return checked
                                          ? field.onChange([
                                            ...(field.value || []),
                                            item.id,
                                          ])
                                          : field.onChange(
                                            (field.value || []).filter(
                                              (value) => value !== item.id
                                            )
                                          );
                                      }}
                                    />
                                  </FormControl>
                                  <FormLabel className="font-light text-base text-gray-500">
                                    {item.label}
                                  </FormLabel>
                                </FormItem>
                              );
                            }}
                          />
                        ))}
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <div className="grid grid-cols-12 text-gray-500">
                  <div className="justify-self-end col-span-12 text-center mr-12">
                    <div>
                      <div>..............................</div>
                      <div>(..............................)</div>
                      <div>Support</div>
                      {/* <div>Trigger Plus co.,Itd</div> */}
                      <div>
                        <FormField
                          control={form.control}
                          name="dateDeliver"
                          render={({ field }) => (
                            <FormItem className="mt-1">
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
                                        <span>
                                          ........./.........../..........
                                        </span>
                                      )}
                                    </Button>
                                  </FormControl>
                                </PopoverTrigger>
                                <PopoverContent
                                  className="w-auto p-0"
                                  align="start"
                                >
                                  <Calendar
                                    mode="single"
                                    selected={field.value}
                                    onSelect={field.onChange}
                                    disabled={(date) =>
                                      date < new Date("1900-01-01")
                                    }
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
                  </div>
                </div>
              </CardContent>
            </Card>
          )}

          <div
            className={`${currentStep > 1 ? "flex justify-between" : "flex justify-end"
              }`}
          >
            {currentStep > 1 && (
              <Button
                type="button"
                className="bg-gray-400"
                onClick={handlePrevStep}
              >
                Previous
              </Button>
            )}

            <Button
              type={currentStep === steps.length + 1 ? "submit" : "button"}
              className="bg-cyan-700"
              onClick={() => {
                if (currentStep === steps.length + 1) {
                  setComplete(true);
                } else {
                  setCurrentStep((prev) => prev + 1);
                }
              }}
            >
              {currentStep === steps.length ? "Finish" : "Next"}
            </Button>
          </div>
        </form>
      </Form>
    </div>
  );
};

export default Stepper;
