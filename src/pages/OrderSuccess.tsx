import { Link } from "react-router-dom";
import { CheckCircle, Package, Truck, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const OrderSuccess = () => {
  const orderNumber = `SCW${Date.now().toString().slice(-6)}`;

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-2xl mx-auto text-center">
        {/* Success Icon */}
        <div className="w-24 h-24 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
          <CheckCircle className="h-12 w-12 text-green-600" />
        </div>

        {/* Success Message */}
        <h1 className="text-3xl font-bold mb-4">Order Placed Successfully!</h1>
        <p className="text-lg text-muted-foreground mb-8">
          Thank you for your order. We're excited to get your premium cashews to you soon!
        </p>

        {/* Order Details */}
        <Card className="mb-8">
          <CardContent className="p-6">
            <h2 className="text-xl font-semibold mb-4">Order Details</h2>
            <div className="space-y-3 text-left">
              <div className="flex justify-between">
                <span className="text-muted-foreground">Order Number:</span>
                <span className="font-semibold">{orderNumber}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Order Date:</span>
                <span>{new Date().toLocaleDateString()}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Expected Delivery:</span>
                <span>{new Date(Date.now() + 5 * 24 * 60 * 60 * 1000).toLocaleDateString()}</span>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* What's Next */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="text-center">
            <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-3">
              <Mail className="h-8 w-8 text-white" />
            </div>
            <h3 className="font-semibold mb-2">Email Confirmation</h3>
            <p className="text-sm text-muted-foreground">
              You'll receive an email confirmation shortly with your order details.
            </p>
          </div>

          <div className="text-center">
            <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-3">
              <Package className="h-8 w-8 text-white" />
            </div>
            <h3 className="font-semibold mb-2">Order Processing</h3>
            <p className="text-sm text-muted-foreground">
              We'll carefully pack your order with love and attention to detail.
            </p>
          </div>

          <div className="text-center">
            <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-3">
              <Truck className="h-8 w-8 text-white" />
            </div>
            <h3 className="font-semibold mb-2">Fast Delivery</h3>
            <p className="text-sm text-muted-foreground">
              Your order will be delivered to your doorstep within 3-5 business days.
            </p>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button variant="default" size="lg" asChild>
            <Link to="/shop">Continue Shopping</Link>
          </Button>
          <Button variant="outline" size="lg" asChild>
            <Link to="/">Back to Home</Link>
          </Button>
        </div>

        {/* Contact Information */}
        <div className="mt-12 p-6 bg-muted rounded-lg">
          <h3 className="font-semibold mb-2">Need Help?</h3>
          <p className="text-sm text-muted-foreground mb-4">
            If you have any questions about your order, feel free to contact us.
          </p>
          <div className="flex flex-col sm:flex-row gap-2 justify-center text-sm">
            <span>📞 +91 98765 43210</span>
            <span>✉️ orders@saishcashew.com</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderSuccess;