import React from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';

const CertificationBadge = ({ certification }) => {
  const isExpired = new Date(certification.expiryDate) < new Date();
  
  return (
    <div className="bg-card border border-border rounded-xl p-4 md:p-6 hover:shadow-purple transition-all duration-300 group">
      <div className="flex items-start gap-4 mb-4">
        <div className="w-16 h-16 md:w-20 md:h-20 flex-shrink-0 rounded-lg overflow-hidden bg-muted">
          <Image
            src={certification?.badge}
            alt={certification?.badgeAlt}
            className="w-full h-full object-cover"
          />
        </div>
        
        <div className="flex-1 min-w-0">
          <h3 className="text-base md:text-lg font-semibold text-foreground mb-1 line-clamp-2">
            {certification?.name}
          </h3>
          <p className="text-sm text-muted-foreground mb-2">{certification?.issuer}</p>
          <div className="flex items-center gap-2 text-xs text-muted-foreground">
            <Icon name="Calendar" size={12} strokeWidth={2} />
            <span>Issued: {certification?.issueDate}</span>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          <Icon
            name={isExpired ? "AlertCircle" : "CheckCircle"}
            size={16}
            color={isExpired ? "#ef4444" : "#10b981"}
            strokeWidth={2}
          />
          <span className={`text-sm font-medium ${isExpired ? 'text-error' : 'text-success'}`}>
            {isExpired ? 'Expired' : 'Valid'}
          </span>
        </div>
        <span className="text-xs text-muted-foreground">
          {isExpired ? 'Expired' : 'Expires'}: {certification?.expiryDate}
        </span>
      </div>
      <div className="flex items-center gap-2">
        <a
          href={certification?.verificationUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-primary/10 text-primary rounded-lg hover:bg-primary/20 transition-colors duration-200 text-sm font-medium"
        >
          <Icon name="ExternalLink" size={14} strokeWidth={2} />
          <span>Verify</span>
        </a>
        <button className="p-2 bg-muted rounded-lg hover:bg-muted/80 transition-colors duration-200">
          <Icon name="Share2" size={16} strokeWidth={2} />
        </button>
      </div>
    </div>
  );
};

export default CertificationBadge;