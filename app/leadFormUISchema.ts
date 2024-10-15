export const leadFormUISchema = {
	type: "VerticalLayout",
	elements: [
	  {
		type: "Control",
		scope: "#/properties/firstName"
	  },
	  {
		type: "Control",
		scope: "#/properties/lastName"
	  },
	  {
		type: "Control",
		scope: "#/properties/email"
	  },
	  {
		type: "Control",
		scope: "#/properties/linkedin"
	  },
	  {
		type: "Control",
		scope: "#/properties/visasInterested"
	  },
	  {
		type: "Control",
		scope: "#/properties/resume"
	  },
	  {
		type: "Control",
		scope: "#/properties/comments",
		options: {
		  multi: true
		}
	  }
	]
  };
  