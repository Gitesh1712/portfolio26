import React from "react";
import Icon from "../../../components/AppIcon";

const LocationMap = () => {
  const officeDetails = {
    address: "G5 ,Sector-3",
    city: "Noida, Uttar  Pradesh 201301",
    country: "India",
    timezone: "UTC+5:30 (or GMT+5:30)",
    workingHours: "Mon-Sat: 9:30 AM - 6:30 PM PST",
  };

  return (
    <div className="bg-card rounded-xl overflow-hidden border border-border shadow-purple">
      <div className="p-6 md:p-8">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
            <Icon name="MapPin" size={24} color="var(--color-primary)" />
          </div>
          <div>
            <h2 className="text-xl md:text-2xl font-bold text-foreground">
              Location & Hours
            </h2>
            <p className="text-sm md:text-base text-muted-foreground">
              Where to find me
            </p>
          </div>
        </div>

        <div className="space-y-4 mb-6">
          <div className="flex items-start gap-3">
            <Icon
              name="Building2"
              size={20}
              className="text-primary mt-1 flex-shrink-0"
            />
            <div>
              <p className="text-sm md:text-base text-foreground font-medium">
                {officeDetails?.address}
              </p>
              <p className="text-sm md:text-base text-muted-foreground">
                {officeDetails?.city}
              </p>
              <p className="text-sm md:text-base text-muted-foreground">
                {officeDetails?.country}
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <Icon
              name="Globe"
              size={20}
              className="text-primary mt-1 flex-shrink-0"
            />
            <div>
              <p className="text-sm md:text-base text-foreground font-medium">
                Timezone
              </p>
              <p className="text-sm md:text-base text-muted-foreground">
                {officeDetails?.timezone}
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <Icon
              name="Clock"
              size={20}
              className="text-primary mt-1 flex-shrink-0"
            />
            <div>
              <p className="text-sm md:text-base text-foreground font-medium">
                Working Hours
              </p>
              <p className="text-sm md:text-base text-muted-foreground">
                {officeDetails?.workingHours}
              </p>
            </div>
          </div>
        </div>

        <div className="bg-info/10 border border-info/20 rounded-lg p-4 flex items-start gap-3">
          <Icon
            name="Info"
            size={20}
            className="text-info mt-0.5 flex-shrink-0"
          />
          <div>
            <p className="text-sm md:text-base text-info font-medium mb-1">
              Remote Work Available
            </p>
            <p className="text-xs md:text-sm text-info/80">
              I'm available for remote collaboration worldwide and can adjust to
              your timezone for meetings and calls.
            </p>
          </div>
        </div>
      </div>
      <div className="w-full h-64 md:h-80 lg:h-96 bg-muted relative">
        <iframe
          width="100%"
          height="100%"
          loading="lazy"
          title="Noida Sector 3 Location"
          referrerPolicy="no-referrer-when-downgrade"
          src="https://www.google.com/maps?q=28.5892,77.3126&z=15&output=embed"
          className="border-0"
        />
      </div>
    </div>
  );
};

export default LocationMap;
