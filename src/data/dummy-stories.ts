
import { offices } from "./offices";

export const dummyStories = [
  {
    id: 1,
    userName: "Sarah Schmidt",
    userImage: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158",
    linkedinProfile: "https://linkedin.com/in/sarah-schmidt",
    office: offices.find((o) => o.id === "berlin_mitte")!,
    outcome: "received",
    description:
      "I had a very positive experience at the Berlin Mitte office. The process took about 4 weeks from initial consultation to receiving the Bildungsgutschein. The case worker was very supportive and helped me understand all requirements.\n\nKey steps in my process:\n1. Initial consultation with detailed discussion of my career goals\n2. Submission of required documents (CV, motivation letter)\n3. Research of suitable courses\n4. Final approval meeting\n\nTip: Come prepared with a clear plan and research about your desired course!",
    date: "March 15, 2024",
  },
  {
    id: 2,
    userName: "Michael Weber",
    userImage: "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
    linkedinProfile: "https://linkedin.com/in/michael-weber",
    office: offices.find((o) => o.id === "berlin_nord")!,
    outcome: "not_received",
    description:
      "Applied at the Berlin Nord office but unfortunately didn't receive the Bildungsgutschein. The main challenge was proving that the course would significantly improve my job prospects. Despite having good qualifications, they suggested focusing on direct job applications instead.\n\nLearnings:\n- Be very specific about how the course relates to local job market demands\n- Gather supporting documents from potential employers if possible\n- Consider appealing the decision if you have strong grounds",
    date: "March 10, 2024",
  },
  {
    id: 3,
    userName: "Lisa Müller",
    userImage: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d",
    linkedinProfile: "https://linkedin.com/in/lisa-mueller",
    office: offices.find((o) => o.id === "berlin_sued")!,
    outcome: "received",
    description:
      "Successfully received the Bildungsgutschein from the Berlin Süd office for a Web Development bootcamp. The process was straightforward but required thorough preparation.\n\nImportant aspects that helped:\n- Brought statistics showing high demand for web developers in Berlin\n- Had letters of interest from potential employers\n- Demonstrated how my previous experience in design would complement the new skills\n\nThe case worker was particularly impressed by my research into the local job market.",
    date: "March 5, 2024",
  },
  {
    id: 4,
    userName: "Thomas Bauer",
    userImage: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7",
    linkedinProfile: "https://linkedin.com/in/thomas-bauer",
    office: offices.find((o) => o.id === "berlin_tempelhof")!,
    outcome: "received",
    description:
      "Got approved for Data Analytics training at the Berlin Tempelhof-Schöneberg office. The process took 6 weeks but was worth the wait. My background in business administration helped make the case for transitioning to data analytics.\n\nKey success factors:\n- Prepared a detailed career transition plan\n- Showed examples of job postings requiring data analytics skills\n- Demonstrated basic programming knowledge through online courses\n\nAdvice: Start with some free online courses to show commitment to the field!",
    date: "March 1, 2024",
  },
  {
    id: 5,
    userName: "Anna Koch",
    userImage: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158",
    linkedinProfile: "https://linkedin.com/in/anna-koch",
    office: offices.find((o) => o.id === "berlin_lichtenberg")!,
    outcome: "not_received",
    description:
      "Applied in Berlin Lichtenberg for UX/UI Design training. While the interview went well, my application was ultimately not approved. The main feedback was that my existing graphic design experience was considered sufficient for current market demands.\n\nWhat I learned:\n- The agency prioritizes complete career changes over skill upgrades\n- Having existing experience in a related field can work against you\n- Consider focusing on more specialized or technical aspects of UX\n\nPlanning to reapply with a focus on UX Research instead.",
    date: "February 28, 2024",
  },
];
