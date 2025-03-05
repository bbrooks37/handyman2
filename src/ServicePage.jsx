import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import "./App.css";

function ServicePage() {
  const { serviceName } = useParams(); // Get the serviceName from the route
  const [services, setServices] = useState(); // Initialize as an empty array
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    console.log("Service Name:", serviceName); // Log the service name

    const fetchServices = async () => {
      try {
        let apiEndpoint = "";
        let property = "";

        // Determine the API endpoint and property based on serviceName
        switch (serviceName) {
          case "Yard Work":
            apiEndpoint = "/api/services";
            property = "servicename";
            break;
          case "Mulching":
            apiEndpoint = "/api/mulching";
            property = "material";
            break;
          case "Moving":
            apiEndpoint = "/api/moving";
            property = "service_type";
            break;
          case "Handy Services":
            apiEndpoint = "/api/handy_services";
            property = "service_type";
            break;
          default:
            throw new Error("Invalid service name");
        }

        console.log("API Endpoint:", apiEndpoint); // Log the API endpoint

        const response = await axios.get(apiEndpoint);
        console.log("API Response:", response.data); // Log the API response

        setServices(response.data); // Set only the relevant services
      } catch (error) {
        console.error("Error fetching services:", error);
        setError("Error fetching services");
      } finally {
        setLoading(false);
      }
    };

    fetchServices();
  }, [serviceName]); // Add serviceName to the dependency array

  if (loading) {
    return <div>Loading service details...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="service-page">
      <h2>Our Services</h2>
      <ul>
        {Array.isArray(services) && services.map((service, index) => { // Check if services is an array
          // Generate a unique key based on available properties
          const key = service.id || service[property] || index;

          return (
            <li key={key}>
              <button
                className="quote-button"
                onClick={() => {
                  // Access id based on the service type
                  const serviceId = service.id || "unknown";
                  alert(`Request a quote for ${serviceId}`);
                }}
              >
                Request a Quote
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default ServicePage;