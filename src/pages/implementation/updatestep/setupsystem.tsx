import StepperBar from "@/components/implementation/StepperBar";
import Layout from "@/components/layout";
import Head from "next/head";
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { Button } from "@/components/ui/button"
import {
  cloneSite,
  newSite,
} from "@/constant/checkbox.constant";
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
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { ToastAction } from "@/components/ui/toast";
import { useToast } from "@/components/ui/use-toast";
import { patchData } from "@/lib/axios";
import { SetupSystemStep } from "@/datatype/patch.datatype";
import { convertQueryToInt } from "@/lib/utils";


const formSchema = z.object({
  siteType: z.string().optional(),
  siteDetail: z
    .array(z.string().optional())
    .refine((value) => value.some((item) => item))
    .optional(),
})

export default function SetupSystem() {
  const router = useRouter();
  const query = router.query;
  const queryClient = useQueryClient();
  const { toast } = useToast();
  const [selectedOption, setSelectedOption] = useState<string>("");

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      siteType: "",
      siteDetail: []
    },
  });

  useEffect(() => {

    if (Object.keys(query).length > 0) {
      form.reset({
        siteType: query.siteType as string,
        siteDetail: query.siteDetail ? JSON.parse(query.siteDetail as string) : [],
      });
      setSelectedOption(query.siteType as string)
    }
  }, [query, form]);



  const mutation = useMutation({
    mutationFn: (format: SetupSystemStep) => {
      const numericId = convertQueryToInt(query.id)
      if (!numericId) {
        throw new Error("Invalid Id")
      }
      return patchData("transactioncustomer", numericId, format);
    },
    onSuccess: (data) => {
      queryClient.invalidateQueries({ queryKey: ["categoryData"] });
      toast({
        variant: "default",
        title: "Success Updating",
        description: `TransactionCustomerId: ${query.id} was updated`,
      });

      const queryUpdate = {
        ...query,
        siteType: data.data.siteType,
        siteDetail: JSON.stringify(data.data.siteDetail)
      }
      //Update Query Params
      router.push({ pathname: router.pathname, query: queryUpdate }, undefined);
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
      await mutation.mutateAsync(values);
    } catch (error) {
      console.error("Error adding Implementation:", error);
    }
  }
  return (
    <Layout>
      <Head>
        <title>Implementation</title>
      </Head>
      <main className="font-lexend">
        <StepperBar update={true} query={query} canclick={true}/>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8 mt-4">
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
                            value={field.value}
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
                <div className={`flex justify-between mt-4`}>
                  <Button
                    type='submit'
                    className="bg-green-400 hover:bg-green-500"
                  >
                    Save
                  </Button>
                  <div className="flex space-x-4">
                    <Button
                      type='button'
                      className="bg-cyan-700"
                      onClick={() => router.push({ pathname: "shopinformation", query: query })}
                    >
                      Back
                    </Button>
                    <Button
                      type='button'
                      className="bg-cyan-700"
                      onClick={() => router.push({ pathname: "branch", query: query })}
                    >
                      Next
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </form>
        </Form>
      </main>
    </Layout>
  )
}