import React from 'react';
import Card from '../components/card'; 
import './OrganizationInfo.css';

export default function OrganizationInfo({ name, description }) {
  return (
      <div className="organization-info-content">
        <h3>{name}</h3>
        <p>{description}</p>
      </div>
  );
}