import React from 'react';
import { useForm } from 'react-hook-form';
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { useToast } from "@/components/ui/use-toast"

const ProposalForm = () => {
  const { register, handleSubmit, reset } = useForm();
  const { toast } = useToast();

  const onSubmit = (data) => {
    console.log(data);
    toast({
      title: "Proposal Submitted",
      description: "Your proposal has been submitted for review.",
    });
    reset();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <h2 className="text-2xl font-semibold mb-4">Submit a Proposal</h2>
      <Input {...register('title')} placeholder="Proposal Title" />
      <Textarea {...register('description')} placeholder="Proposal Description" />
      <Input {...register('fundingAmount')} type="number" placeholder="Funding Amount ($)" />
      <Button type="submit">Submit Proposal</Button>
    </form>
  );
};

export default ProposalForm;