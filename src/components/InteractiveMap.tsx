import { MapPin } from 'lucide-react';

const InteractiveMap = () => {
  // Key attractions in Namsai with coordinates
  const attractions = [
    { name: 'Golden Pagoda', lat: 27.8488, lng: 95.9828 },
    { name: 'Parasuram Kund', lat: 27.9667, lng: 96.1333 },
    { name: 'Namsai Lake', lat: 27.8400, lng: 95.9900 },
  ];

  // Center of Namsai
  const mapCenter = { lat: 27.8488, lng: 95.9828 };
  
  // Generate Google Maps embed URL with multiple markers
  const markers = attractions
    .map(a => `markers=color:red%7Clabel:${a.name[0]}%7C${a.lat},${a.lng}`)
    .join('&');
  
  const mapUrl = `https://www.google.com/maps/embed/v1/view?key=YOUR_API_KEY&center=${mapCenter.lat},${mapCenter.lng}&zoom=12&${markers}`;

  return (
    <section id="map" className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4 text-foreground">Explore Namsai</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Interactive map showing key attractions and important locations in Namsai
          </p>
        </div>

        <div className="bg-card rounded-lg shadow-lg overflow-hidden">
          {/* Map Container - Using embedded Google Maps view */}
          <div className="relative w-full h-[500px] bg-muted">
            <iframe
              width="100%"
              height="100%"
              style={{ border: 0 }}
              loading="lazy"
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
              src={`https://www.google.com/maps?q=Namsai,Arunachal+Pradesh&output=embed&z=12`}
              title="Namsai Map"
            />
          </div>

          {/* Legend */}
          <div className="p-6 bg-card">
            <h3 className="font-semibold mb-4 flex items-center gap-2">
              <MapPin className="h-5 w-5 text-primary" />
              Key Locations
            </h3>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {attractions.map((attraction) => (
                <div key={attraction.name} className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-destructive rounded-full" />
                  <span className="text-sm text-muted-foreground">{attraction.name}</span>
                </div>
              ))}
            </div>
            <p className="text-sm text-muted-foreground mt-4">
              Click on the map to open in Google Maps for directions and more details
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InteractiveMap;
