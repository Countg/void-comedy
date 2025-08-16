// lib/getProjects.js
import { supabase } from './SuperBaseClient'; // Adjust the import path as necessary

export async function getProjects() {
  const { data, error } = await supabase.from('projects').select();

  if (error) {
    console.error("Error fetching projects:", error);
    return [];
  }

  return data.map(project => ({
    ...project,
    image: project.image?.trim(),
    url: project.url?.trim(),
  }));
}
