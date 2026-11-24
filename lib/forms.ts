import { budgetRanges, projectTypes } from "./content";

export type Errors = Record<string, string>;
export type Inquiry = {
  name: string;
  company: string;
  email: string;
  projectType: string;
  budget: string;
  description: string;
};

const EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

export function validateInquiry(values: Inquiry): Errors {
  const errors: Errors = {};
  if (values.name.trim().length < 2) errors.name = "Please enter your full name.";
  if (values.company.trim().length < 2) errors.company = "Please enter your company name.";
  if (!EMAIL.test(values.email.trim())) errors.email = "Please enter a valid email address.";
  if (!projectTypes.includes(values.projectType as (typeof projectTypes)[number])) errors.projectType = "Please choose a project type.";
  if (!budgetRanges.includes(values.budget as (typeof budgetRanges)[number])) errors.budget = "Please choose a budget range.";
  if (values.description.trim().length < 20) errors.description = "Please describe the project in at least 20 characters.";
  else if (values.description.length > 1200) errors.description = "Please keep the description under 1,200 characters.";
  return errors;
}

export function validateNewsletter(email: string) {
  return EMAIL.test(email.trim()) ? null : "Please enter a valid email address.";
}

export function persistDemo(key: string, record: unknown) {
  const raw = localStorage.getItem(key);
  const parsed = raw ? (JSON.parse(raw) as unknown[]) : [];
  const list = Array.isArray(parsed) ? parsed : [];
  list.push(record);
  localStorage.setItem(key, JSON.stringify(list));
}

export function reference() {
  return `NL-${Date.now().toString(36).toUpperCase().slice(-5)}`;
}
