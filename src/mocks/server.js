import { setupServer } from "msw/node";

// Mock server for Integration testing
export const server = setupServer(
  rest.get(process.env.REACT_APP_API_URL, (req, res, ctx) => {
    return res(
      ctx.json([
        {
          name: "Adam Wright",
          email: "adam@megacorp.com",
          phone: "(555)123-1234",
          profileImage:
            "https://s3-ap-southeast-1.amazonaws.com/he-public-data/Richard%20Mathew3350914.jpg",
          education: [
            {
              institution: "NC State University",
              startYear: 2001,
              endYear: 2004,
              degree: "Bachelor's, Computer Science",
            },
          ],

          workExperience: [
            {
              institution: "Megacorp",
              startYear: 2001,
              title: "Software Developer",
            },
            {
              institution: "Food Inc.",
              startYear: 1998,
              endYear: 2001,
              title: "Software Developer",
            },
          ],
        },
        {
          name: "Joe Manfrey",
          email: "joe@food.com",
          phone: "(555)987-6543",
          profileImage:
            "https://s3-ap-southeast-1.amazonaws.com/he-public-data/Richard_Davies_Hansons_27b0aae3.jpeg",
          education: [
            {
              institution: "Clemson University",
              startYear: 1990,
              endYear: 1995,
              degree: "Bachelor's, Computer Science",
            },
          ],

          workExperience: [
            {
              institution: "Food Inc.",
              startYear: 1998,
              title: "Software Developer",
            },
          ],
        },
      ])
    );
  })
);
