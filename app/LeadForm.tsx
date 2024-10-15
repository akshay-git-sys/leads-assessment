// app/leadForm.tsx
"use client";

import React, { useState } from 'react';
import { JsonForms } from '@jsonforms/react';
import { materialRenderers, materialCells } from '@jsonforms/material-renderers';
import { leadFormSchema } from './leadFormSchema';
import { leadFormUISchema } from './leadFormUISchema';
import { Button, Typography, Container } from '@mui/material';

const LeadForm: React.FC = () => {
  const [formData, setFormData] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = () => {
    console.log('Submitted Data:', formData);
    setSubmitted(true);
  };

  return (
    <Container maxWidth="sm">
      <Typography variant="h4" gutterBottom>
        Lead Form
      </Typography>

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
          <Button
            variant="contained"
            color="primary"
            onClick={handleSubmit}
            style={{ marginTop: '20px' }}
          >
            Submit
          </Button>
        </>
      ) : (
        <>
          <Typography variant="h6" gutterBottom>
            Thank you for submitting the form!
          </Typography>
          <Button
            variant="contained"
            color="primary"
            onClick={() => setSubmitted(false)}
          >
            Go back to homepage
          </Button>
        </>
      )}
    </Container>
  );
};

export default LeadForm;
