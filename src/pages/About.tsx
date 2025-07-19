import { Users, Award, Leaf, Heart } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import heroImage from "@/assets/hero-cashews.jpg";

const About = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-[50vh] bg-cover bg-center" style={{ backgroundImage: `url(${heroImage})` }}>
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative container mx-auto px-4 h-full flex items-center">
          <div className="text-white max-w-2xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">About Saish Cashew</h1>
            <p className="text-xl opacity-90">
              Three generations of excellence in bringing you the finest cashews from farm to table.
            </p>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-8">Our Story</h2>
            <div className="prose prose-lg max-w-none text-muted-foreground">
              <p className="text-lg leading-relaxed mb-6">
                Founded in 1985 by Mr. Saish Patel, Saish Cashew began as a small family business with a simple vision: 
                to bring the finest quality cashews from the coastal regions of India directly to customers' homes. 
                What started as a local venture has grown into one of India's most trusted cashew brands.
              </p>
              <p className="text-lg leading-relaxed mb-6">
                Our journey began in the lush cashew groves of Goa and Karnataka, where we established direct 
                relationships with farmers who shared our commitment to quality. Over the decades, we've maintained 
                these partnerships, ensuring that every cashew that bears our name meets the highest standards of 
                taste, texture, and nutritional value.
              </p>
              <p className="text-lg leading-relaxed">
                Today, under the leadership of the second and third generations of the Patel family, Saish Cashew 
                continues to innovate while honoring traditional processing methods. We've expanded our product line 
                to include a variety of flavored and specialty cashews, but our core commitment remains unchanged: 
                delivering premium quality nuts that bring families together.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 bg-cashew-cream">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="text-center">
              <CardContent className="p-6">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="h-8 w-8 text-white" />
                </div>
                <h3 className="font-semibold text-lg mb-2">Quality Excellence</h3>
                <p className="text-muted-foreground text-sm">
                  Every cashew is hand-selected and processed to meet our rigorous quality standards.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardContent className="p-6">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <Leaf className="h-8 w-8 text-white" />
                </div>
                <h3 className="font-semibold text-lg mb-2">Sustainable Farming</h3>
                <p className="text-muted-foreground text-sm">
                  We support eco-friendly farming practices that protect the environment for future generations.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardContent className="p-6">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="h-8 w-8 text-white" />
                </div>
                <h3 className="font-semibold text-lg mb-2">Community Partnership</h3>
                <p className="text-muted-foreground text-sm">
                  We work directly with farming communities, ensuring fair trade and mutual growth.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardContent className="p-6">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <Heart className="h-8 w-8 text-white" />
                </div>
                <h3 className="font-semibold text-lg mb-2">Family Tradition</h3>
                <p className="text-muted-foreground text-sm">
                  Three generations of expertise and passion in every package we deliver.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Our Process</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-r from-primary to-cashew-gold rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-white">1</span>
              </div>
              <h3 className="font-semibold text-lg mb-3">Careful Selection</h3>
              <p className="text-muted-foreground">
                Our experts hand-pick only the finest cashews from partner farms, ensuring uniformity and quality.
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-r from-primary to-cashew-gold rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-white">2</span>
              </div>
              <h3 className="font-semibold text-lg mb-3">Traditional Processing</h3>
              <p className="text-muted-foreground">
                Using time-tested methods combined with modern technology to preserve natural flavor and nutrients.
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-r from-primary to-cashew-gold rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-white">3</span>
              </div>
              <h3 className="font-semibold text-lg mb-3">Quality Assurance</h3>
              <p className="text-muted-foreground">
                Multiple quality checks ensure that only the best cashews reach your table, fresh and delicious.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8">Meet Our Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="w-32 h-32 bg-gradient-to-r from-primary to-cashew-gold rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-4xl font-bold text-white">SP</span>
              </div>
              <h3 className="font-semibold text-lg">Saish Patel</h3>
              <p className="text-muted-foreground text-sm">Founder & Chairman</p>
            </div>

            <div className="text-center">
              <div className="w-32 h-32 bg-gradient-to-r from-primary to-cashew-gold rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-4xl font-bold text-white">RP</span>
              </div>
              <h3 className="font-semibold text-lg">Rajesh Patel</h3>
              <p className="text-muted-foreground text-sm">Managing Director</p>
            </div>

            <div className="text-center">
              <div className="w-32 h-32 bg-gradient-to-r from-primary to-cashew-gold rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-4xl font-bold text-white">AP</span>
              </div>
              <h3 className="font-semibold text-lg">Arjun Patel</h3>
              <p className="text-muted-foreground text-sm">Operations Manager</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;