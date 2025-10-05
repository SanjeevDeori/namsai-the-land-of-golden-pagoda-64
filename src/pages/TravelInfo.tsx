import { MapPin, Calendar, Phone, AlertCircle, FileText } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { ThemeProvider } from '../hooks/useTheme';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

const TravelInfo = () => {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-background">
        <Navbar />
        
        <main className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <h1 className="text-4xl font-bold text-center mb-4 text-foreground">Travel Information</h1>
            <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
              Essential information to help you plan your visit to Namsai
            </p>

            <div className="grid gap-6 mb-12">
              {/* Getting There */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <MapPin className="h-5 w-5" />
                    Getting There
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h4 className="font-semibold mb-2">By Air</h4>
                    <p className="text-muted-foreground">
                      Nearest airport: Dibrugarh Airport (Assam) - 180 km away. Regular flights from major Indian cities. 
                      From the airport, hire a taxi or take a bus to Namsai (4-5 hours drive).
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">By Train</h4>
                    <p className="text-muted-foreground">
                      Nearest railway station: Tinsukia Junction (Assam) - 70 km away. Well connected to major cities. 
                      From Tinsukia, take a taxi or bus to Namsai (2-3 hours).
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">By Road</h4>
                    <p className="text-muted-foreground">
                      Well connected by NH-15. Regular bus services from Guwahati, Itanagar, and Tinsukia. 
                      Private taxis and shared cabs are also available.
                    </p>
                  </div>
                </CardContent>
              </Card>

              {/* Best Time to Visit */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Calendar className="h-5 w-5" />
                    Best Time to Visit
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h4 className="font-semibold mb-2">October to March (Peak Season)</h4>
                    <p className="text-muted-foreground">
                      Pleasant weather with temperatures between 10°C to 25°C. Ideal for sightseeing and outdoor activities. 
                      Major festivals like Buddhist celebrations occur during this period.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">April to June (Summer)</h4>
                    <p className="text-muted-foreground">
                      Warm weather (25°C to 35°C). Good for water activities at Namsai Lake. Carry light cotton clothes.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">July to September (Monsoon)</h4>
                    <p className="text-muted-foreground">
                      Heavy rainfall. Lush green landscapes but some areas may be difficult to access. Not recommended for first-time visitors.
                    </p>
                  </div>
                </CardContent>
              </Card>

              {/* Permits & Documentation */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <FileText className="h-5 w-5" />
                    Permits & Documentation
                  </CardTitle>
                  <CardDescription>
                    Important documentation required for visiting Arunachal Pradesh
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Accordion type="single" collapsible className="w-full">
                    <AccordionItem value="item-1">
                      <AccordionTrigger>For Indian Citizens</AccordionTrigger>
                      <AccordionContent className="text-muted-foreground space-y-2">
                        <p><strong>Inner Line Permit (ILP)</strong> is mandatory for all Indian citizens except residents of Arunachal Pradesh.</p>
                        <p><strong>How to obtain:</strong></p>
                        <ul className="list-disc pl-6 space-y-1">
                          <li>Online: Apply through official ILP website of Arunachal Pradesh</li>
                          <li>Offline: DC Office in Itanagar or designated counters at Tinsukia/Dibrugarh</li>
                          <li>Processing time: 1-3 days</li>
                          <li>Validity: 15 days (can be extended)</li>
                        </ul>
                        <p><strong>Required documents:</strong> Valid ID proof, recent photograph, travel details</p>
                      </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-2">
                      <AccordionTrigger>For Foreign Nationals</AccordionTrigger>
                      <AccordionContent className="text-muted-foreground space-y-2">
                        <p><strong>Protected Area Permit (PAP)</strong> is required for foreign tourists.</p>
                        <p><strong>How to obtain:</strong></p>
                        <ul className="list-disc pl-6 space-y-1">
                          <li>Apply through Ministry of Home Affairs, Government of India</li>
                          <li>Must travel in groups of minimum 2 people</li>
                          <li>Requires recognized tour operator</li>
                          <li>Processing time: 4-6 weeks (apply in advance)</li>
                        </ul>
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                </CardContent>
              </Card>

              {/* Important Contacts */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Phone className="h-5 w-5" />
                    Important Contacts
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <h4 className="font-semibold mb-2">Emergency Services</h4>
                      <p className="text-muted-foreground">Police: 100</p>
                      <p className="text-muted-foreground">Ambulance: 108</p>
                      <p className="text-muted-foreground">Fire: 101</p>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">Tourist Information</h4>
                      <p className="text-muted-foreground">Tourism Office: +91-XXXX-XXXXXX</p>
                      <p className="text-muted-foreground">District Office: +91-XXXX-XXXXXX</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Travel Tips */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <AlertCircle className="h-5 w-5" />
                    Travel Tips
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• <strong>Respect local culture:</strong> Dress modestly when visiting temples and monasteries</li>
                    <li>• <strong>Photography:</strong> Ask permission before photographing locals or religious sites</li>
                    <li>• <strong>Connectivity:</strong> Mobile networks (BSNL, Jio) work well. Carry cash as ATMs may be limited</li>
                    <li>• <strong>Health:</strong> Carry basic medicines. Drink bottled water. Consult doctor about altitude sickness if visiting high areas</li>
                    <li>• <strong>Language:</strong> Hindi and English are widely understood. Learning basic local phrases is appreciated</li>
                    <li>• <strong>Shopping:</strong> Bargain politely in local markets. Support local artisans by buying authentic handicrafts</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </main>

        <Footer />
      </div>
    </ThemeProvider>
  );
};

export default TravelInfo;
