import StepperBar from "@/components/implementation/StepperBar";
import Layout from "@/components/layout";
import Head from "next/head";
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import {
  note,
  zone,
} from "@/constant/checkbox.constant";
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
import { Card, CardContent } from "@/components/ui/card";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Checkbox } from "@/components/ui/checkbox";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useToast } from "@/components/ui/use-toast";
import { convertQueryToInt } from "@/lib/utils";
import { patchData } from "@/lib/axios";
import { ToastAction } from "@/components/ui/toast";
import { BranchStep } from "@/datatype/patch.datatype";

const formSchema = z.object({
  branchType: z.string().optional(),
  branchDetail: z.array(z.string()).optional(),
  note: z.array(z.string()).optional(),
});

export default function Branch() {
  const router = useRouter();
  const query = router.query;
  const [selectedOption, setSelectedOption] = useState<string>("");
  const queryClient = useQueryClient();
  const { toast } = useToast();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      branchType: "",
      branchDetail: [],
      note: []
    },
  })

  useEffect(() => {

    if (Object.keys(query).length > 0) {
      form.reset({
        branchType: query.branchType as string,
        branchDetail: query.branchDetail ? JSON.parse(query.branchDetail as string) : [],
        note: query.note ? JSON.parse(query.note as string) : []
      });
      setSelectedOption(query.branchType as string)
    }
  }, [query, form]);


  const mutation = useMutation({
    mutationFn: (format: BranchStep) => {
      const numericId = convertQueryToInt(query.id);
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
        branchType: data.data.branchType,
        branchDetail: JSON.stringify(data.data.branchDetail),
        note: JSON.stringify(data.data.note)
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
                            value={field.value}
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
                      onClick={() => router.push({ pathname: "setupsystem", query: query })}
                    >
                      Back
                    </Button>
                    <Button
                      type='button'
                      className="bg-cyan-700"
                      onClick={() => router.push({ pathname: "testapp", query: query })}
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