"use client";

import React, { useState } from 'react';
import axios from 'axios';
import { JsonForms } from '@jsonforms/react';
import { materialRenderers, materialCells } from '@jsonforms/material-renderers';
import { leadFormSchema } from './leadFormSchema';
import { leadFormUISchema } from './leadFormUISchema';
import { Button, Typography, Container, CircularProgress } from '@mui/material';
import styled from 'styled-components';

const LeadForm: React.FC = () => {
  const [formData, setFormData] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);  // State to handle loading
  const [error, setError] = useState<string | null>(null); // State to handle errors

  const CenteredDiv = styled.div`
  margin: 50px 0;
  text-align: center;
  max-width: 800px;
  padding: 0 20px;

  h2 {
    font-size: 36px;
    margin-bottom: 20px;

    @media (max-width: 768px) {
      font-size: 28px;
    }

    @media (max-width: 480px) {
      font-size: 24px;
    }
  }

  p {
    font-size: 18px;
    color: #666;

    @media (max-width: 768px) {
      font-size: 16px;
    }

    @media (max-width: 480px) {
      font-size: 14px;
    }
  }
`;

  const handleSubmit = async () => {
    setLoading(true);
    setError(null);

    try {
      await axios.post('/api/leads', formData);
      setSubmitted(true);
    } catch (error) {
      console.error(error);
      setError("There was an issue submitting the form. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Container maxWidth="sm">
      {!submitted ? (
        <>
          <JsonForms
            schema={leadFormSchema}
            uischema={leadFormUISchema}
            data={formData}
            renderers={materialRenderers}
            cells={materialCells}
            onChange={({ data }) => setFormData(data)}
          />
          
          {error && (
            <Typography color="error" variant="body2" gutterBottom>
              {error}
            </Typography>
          )}
          
          <Button
            variant="contained"
            color="primary"
            onClick={handleSubmit}
            style={{ marginTop: '20px' }}
            disabled={loading} // Disable button while loading
            fullWidth
          >
            {loading ? <CircularProgress size={24} /> : "Submit"} {/* Show loading spinner */}
          </Button>
        </>
      ) : (        
        <CenteredDiv>
          <Typography variant="h6" gutterBottom>
            Thank you for submitting the form!
          </Typography>
          <Button
            variant="contained"
            color="primary"
            onClick={() => {
              setFormData({}); // Reset form data
              setSubmitted(false); // Allow resubmission
            }}
          >
            Go back to homepage
          </Button>
      </CenteredDiv>
      )}
    </Container>
  );
};

export default LeadForm;
