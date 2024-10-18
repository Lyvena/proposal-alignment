import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const ProposalList = ({ proposals }) => {
  return (
    <div>
      <h2 className="text-2xl font-semibold mb-4">Current Proposals</h2>
      <div className="space-y-4">
        {proposals.map((proposal) => (
          <Card key={proposal.id}>
            <CardHeader>
              <CardTitle>{proposal.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <Badge 
                variant="secondary"
                className={proposal.status === 'approved' ? 'bg-green-500 text-white' : ''}
              >
                {proposal.status}
              </Badge>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default ProposalList;