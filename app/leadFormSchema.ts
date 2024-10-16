export const leadFormSchema = {
	type: "object",
	properties: {
	  firstName: { type: "string", format: "name", minLength: 1, title: "First Name" },
	  lastName: { type: "string", format: "name", minLength: 1, title: "Last Name" },
	  email: { type: "string", format: "email", title: "Email" },
	  linkedInUrl: { type: "string", format: "uri", title: "LinkedIn URL" },
	  visaType: {
		"type": "array",
		"uniqueItems": true,
		"items": {
			"type": "string",
			"enum": ["H1B", "F1", "L1", "Other"]
		}
		},
	  resume: {
		type: "string",
		format: "data-url",
		title: "Resume (Upload)",
	  },
	  additionalInfo: { 
		type: "string", 
		title: "Additional Information",  
		options: {
			multi: true
		  }
	},
	},
	required: ["firstName", "lastName", "email", "resume"],
  };
  