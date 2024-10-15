export const leadFormSchema = {
	type: "object",
	properties: {
	  firstName: {
		type: "string",
		minLength: 1,
		title: "First Name"
	  },
	  lastName: {
		type: "string",
		minLength: 1,
		title: "Last Name"
	  },
	  email: {
		type: "string",
		format: "email",
		title: "Email"
	  },
	  linkedin: {
		type: "string",
		format: "url",
		title: "Linkedin Profile"
	  },
	  visasInterested: {
		type: "array",
		title: "Visas You're Interested",
		items: {
		  type: "string",
		  enum: ["-1", "EB-1A", "EB-2-NIW", "I don't know"]
		},
		uniqueItems: true
	  },
	  resume: {
		type: "string",
		format: "data-url",
		title: "Resume/CV (Upload)"
	  },
	  comments: {
		type: "string",
		title: "Additional Comments"
	  }
	},
	required: ["firstName", "lastName", "email", "linkedin", "visasInterested", "resume"]
  };
  