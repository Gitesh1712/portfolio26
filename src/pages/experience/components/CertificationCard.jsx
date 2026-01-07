import React from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';

const CertificationCard = ({ certification }) => {
  return (
    <div className="bg-card rounded-lg border border-border p-4 hover:shadow-purple transition-all duration-300 md:p-6">
      <div className="flex items-start gap-3 mb-3 md:gap-4">
        <div className="w-12 h-12 rounded-lg overflow-hidden bg-muted flex-shrink-0 md:w-14 md:h-14 lg:w-16 lg:h-16">
          <Image
            src={certification?.logo}
            alt={certification?.logoAlt}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="flex-1 min-w-0">
          <h4 className="text-sm font-semibold text-foreground mb-1 md:text-base lg:text-lg">
            {certification?.name}
          </h4>
          <p className="text-xs text-primary font-medium md:text-sm">
            {certification?.issuer}
          </p>
        </div>
      </div>
      <div className="flex items-center gap-2 text-xs text-muted-foreground mb-2 md:text-sm">
        <Icon name="Calendar" size={12} className="md:w-3 md:h-3" />
        <span>{certification?.date}</span>
      </div>
      {certification?.credentialId && (
        <div className="flex items-center gap-2 text-xs text-muted-foreground md:text-sm">
          <Icon name="Shield" size={12} className="md:w-3 md:h-3" />
          <span className="truncate">ID: {certification?.credentialId}</span>
        </div>
      )}
    </div>
  );
};

export default CertificationCard;