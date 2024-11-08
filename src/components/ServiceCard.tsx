import React from 'react';

type ServiceCardProps = {
  title: string;
  description: string;
};

const ServiceCard: React.FC<ServiceCardProps> = ({ title, description }) => {
  return (
    <div className="service-card">
      <h3 className="service-title">{title}</h3>
      <p className="service-description">{description}</p>
    </div>
  );
};

export default ServiceCard;
