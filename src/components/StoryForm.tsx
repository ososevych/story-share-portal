
import { useState } from "react";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
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
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { toast } from "sonner";
import { offices } from "@/data/offices";

const formSchema = z.object({
  office: z.string({
    required_error: "Please select an office location",
  }),
  linkedinProfile: z
    .string()
    .url("Please enter a valid LinkedIn URL")
    .includes("linkedin.com", { message: "Must be a LinkedIn URL" }),
  outcome: z.enum(["received", "not_received"], {
    required_error: "Please select an outcome",
  }),
  description: z
    .string()
    .min(10, "Description must be at least 10 characters")
    .max(10000, "Description cannot exceed 10000 characters"),
});

type FormValues = z.infer<typeof formSchema>;

const StoryForm = () => {
  const [charCount, setCharCount] = useState(0);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      description: "",
      linkedinProfile: "",
    },
  });

  const onSubmit = async (values: FormValues) => {
    setIsSubmitting(true);
    try {
      const response = await fetch('http://localhost:8787/api/stories', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          afaOffice: values.office,
          linkedinProfileUrl: values.linkedinProfile,
          outcome: values.outcome === "received" ? "Received" : "Not received",
          story: values.description,
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to submit story');
      }

      toast.success("Story submitted successfully!");
      form.reset();
      setCharCount(0);
    } catch (error) {
      toast.error("Failed to submit story. Please try again.");
      console.error('Error submitting story:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="space-y-8 max-w-2xl mx-auto bg-white p-8 rounded-lg shadow-sm"
      >
        <FormField
          control={form.control}
          name="office"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Agentur für Arbeit Office</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Select an office location" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  {offices.map((office) => (
                    <SelectItem key={office.id} value={office.id}>
                      {office.name}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="linkedinProfile"
          render={({ field }) => (
            <FormItem>
              <FormLabel>LinkedIn Profile URL</FormLabel>
              <FormControl>
                <Input
                  placeholder="https://linkedin.com/in/your-profile"
                  {...field}
                />
              </FormControl>
              <FormDescription>
                Please provide your LinkedIn profile URL
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="outcome"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Application Outcome</FormLabel>
              <FormControl>
                <RadioGroup
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                  className="flex flex-col space-y-1"
                >
                  <FormItem className="flex items-center space-x-3 space-y-0">
                    <FormControl>
                      <RadioGroupItem value="received" />
                    </FormControl>
                    <FormLabel className="font-normal">Received</FormLabel>
                  </FormItem>
                  <FormItem className="flex items-center space-x-3 space-y-0">
                    <FormControl>
                      <RadioGroupItem value="not_received" />
                    </FormControl>
                    <FormLabel className="font-normal">
                      Did not receive
                    </FormLabel>
                  </FormItem>
                </RadioGroup>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="description"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Process Description</FormLabel>
              <FormControl>
                <Textarea
                  placeholder="Please describe your experience..."
                  className="min-h-[200px] resize-none"
                  {...field}
                  onChange={(e) => {
                    field.onChange(e);
                    setCharCount(e.target.value.length);
                  }}
                />
              </FormControl>
              <FormDescription className="flex justify-end">
                {charCount}/10000 characters
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button
          type="submit"
          className="w-full bg-neutral-900 hover:bg-neutral-800 text-white transition-all duration-200"
          disabled={isSubmitting}
        >
          {isSubmitting ? "Submitting..." : "Submit Story"}
        </Button>
      </form>
    </Form>
  );
};

export default StoryForm;
