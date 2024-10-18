import React from 'react';
import { useQuery } from '@tanstack/react-query';
import { Button } from "@/components/ui/button"
import { useToast } from "@/components/ui/use-toast"
import { Toaster } from "@/components/ui/toaster"
import ProposalForm from '@/components/ProposalForm';
import ProposalList from '@/components/ProposalList';
import Layout from '@/components/Layout';

const fetchProposals = async () => {
  // This is a mock API call. Replace with actual API endpoint when available.
  return new Promise(resolve => setTimeout(() => resolve([
    { id: 1, title: 'AI Ethics Research', status: 'pending' },
    { id: 2, title: 'Machine Learning for Climate Change', status: 'approved' },
  ]), 1000));
};

const Index = () => {
  const { toast } = useToast();
  const { data: proposals, isLoading, error } = useQuery({
    queryKey: ['proposals'],
    queryFn: fetchProposals,
  });

  const handleNewProposal = () => {
    toast({
      title: "New Proposal",
      description: "Create a new proposal for AI-PGF funding.",
    });
    // TODO: Implement new proposal creation logic
  };

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>An error occurred: {error.message}</div>;

  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-8">AI-PGF Proposal Alignment</h1>
        <Button onClick={handleNewProposal} className="mb-8">New Proposal</Button>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <ProposalForm />
          <ProposalList proposals={proposals} />
        </div>
      </div>
      <Toaster />
    </Layout>
  );
};

export default Index;