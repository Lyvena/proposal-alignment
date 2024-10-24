import Layout from "@/components/Layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Mail } from "lucide-react";

const Contact = () => {
  return (
    <Layout>
      <div className="container mx-auto px-4 py-8 max-w-2xl">
        <Card>
          <CardHeader>
            <CardTitle className="text-2xl">Contact Us</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-gray-600">
              We'd love to hear from you! For any inquiries about AI-PGF, please reach out to us.
            </p>
            <div className="flex items-center space-x-2 text-primary">
              <Mail size={20} />
              <a href="mailto:info@lyvena.xyz" className="hover:underline">
                info@lyvena.xyz
              </a>
            </div>
          </CardContent>
        </Card>
      </div>
    </Layout>
  );
};

export default Contact;