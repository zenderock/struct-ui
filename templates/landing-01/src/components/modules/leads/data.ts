import { createServerFn } from "@tanstack/react-start";
import { faker } from "@faker-js/faker";
import { leadSchema, type Lead } from "./schema";
import { z } from "zod";

// Mock database
const leads: Lead[] = Array.from({ length: 50 }).map(() => ({
  id: faker.string.uuid(),
  name: faker.person.fullName(),
  email: faker.internet.email(),
  avatar: faker.image.avatar(),
  subject: faker.company.catchPhrase(),
  activity_type: faker.helpers.arrayElement(["call", "email", "meeting", "task", "note", "message"]),
  activity_date: faker.date.recent().toISOString(),
  status: faker.helpers.arrayElement(["Cold Lead", "Hot Lead", "Warm Lead"]),
  created_at: faker.date.past().toISOString(),
  source: faker.helpers.arrayElement(["Dribbble", "Instagram", "Facebook"]),
}));

export const fetchLeads = createServerFn({ method: "GET" })
  .inputValidator((d: unknown) => z.object({ 
        page: z.number().default(1),
        pageSize: z.number().default(10), 
    }).parse(d))
  .handler(async ({ data }) => {
    const { page, pageSize } = data;
    const start = (page - 1) * pageSize;
    const end = start + pageSize;
    const pageData = leads.slice(start, end);

    return {
      data: pageData,
      total: leads.length,
      totalPages: Math.ceil(leads.length / pageSize),
      page,
      pageSize
    };
  });
