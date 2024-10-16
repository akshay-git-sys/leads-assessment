export const leadFormUISchema = {
	type: "VerticalLayout",
	elements: [
	  { type: "Control", scope: "#/properties/firstName" },
	  { type: "Control", scope: "#/properties/lastName" },
	  { type: "Control", scope: "#/properties/email" },
	  { type: "Control", scope: "#/properties/linkedInUrl" },
	  { type: "Control", 
		scope: "#/properties/visaType", 
		options: {
			multi: true
	  	}
	 },
	  { 
		type: "Control", 
		scope: "#/properties/resume",
		options: { format: "data-url", accept: ".pdf" }
	  },
	  { 
		type: "Control", 
		scope: "#/properties/additionalInfo", 
		options: {
			multi: true
	  	}
	   },
	],
  };
  