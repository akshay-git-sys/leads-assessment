import React, { useState } from 'react';
import { withJsonFormsControlProps } from '@jsonforms/react';
import { Input, FormControl, FormHelperText, InputLabel, TextField, Button } from '@mui/material';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const FileUploadControl = (props: any) => {
  const { handleChange, path, visible, label, required, description, errors } = props;
  const [fileName, setFileName] = useState<string | null>(null);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files ? event.target.files[0] : null;
    if (file) {
      setFileName(file.name);
      const reader = new FileReader();
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      reader.onload = (e: any) => {
        handleChange(path, e.target.result); // Store the file content as base64 string
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <FormControl 
      fullWidth 
      margin="normal" 
      error={!!errors} 
      style={{ display: visible === false ? 'none' : 'block' }}
    >
      <InputLabel shrink htmlFor={path}>
        {label}{required ? " *" : ""}
      </InputLabel>
      
      <TextField
        value={fileName || ''}
        placeholder="Choose a file"
        InputProps={{
          readOnly: true,
          endAdornment: (
            <Button 
              variant="contained" 
              component="label" 
              sx={{ ml: 1 }}
            >
              Browse
              <Input
                type="file"
                inputProps={{ accept: '.pdf,.doc,.docx' }}
                onChange={handleFileChange}
                style={{ display: 'none' }} // Hide the default input
              />
            </Button>
          )
        }}
        fullWidth
      />

      {description && <FormHelperText>{description}</FormHelperText>}
      {errors && <FormHelperText error>{errors}</FormHelperText>}
    </FormControl>
  );
};

export default withJsonFormsControlProps(FileUploadControl);
