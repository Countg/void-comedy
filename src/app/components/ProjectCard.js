import CardContainer from "./CardContainer";
import { supabase } from "@/lib/SuperBaseClient";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

import { useState, useEffect } from "react";


export default function ProjectCard() {
const [projects, setProjects] = useState([]); // always array for mapping
const [featuredProject, setFeaturedProject] = useState(null); // explicit null

  const [error, setError] = useState(null);
// Log the projects state






useEffect(() => {
  const fetchProjects = async () => {
    const { data, error } = await supabase.from("projects").select();

    if (error) {
      console.error("Error fetching projects:", error);
    } else {
      const cleanData = data.map((project) => ({
        ...project,
        image: project.image?.trim(),
        url: project.url?.trim(),
        featured: Boolean(project.featured), // ensure boolean
      }));
      

      const featured = cleanData.find((p) => p.featured);
      setFeaturedProject(featured || null);


      const otherProjects = cleanData.filter((p) => !p.featured);
      setProjects(otherProjects);
   
    }


  };

  fetchProjects();
}, []);



  return (
    <CardContainer>
 {/* Featured Project Section */}

{featuredProject && (
  <div className="mb-12" id="projects">
    <div className="text-accent-orange font-bold text-2xl mb-6 font-mono tracking-wide">
      GLITCH ON THE GRIND
    </div>

    <motion.div
      className="flex flex-col md:flex-row items-center border border-accent-orange/30 rounded-2xl overflow-hidden shadow-md bg-background/40 backdrop-blur-md p-6 gap-6 group"
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
    >
      {/* Image with glitch hover */}
      <div className="flex-shrink-0 w-full md:w-1/2 overflow-hidden rounded-xl relative group">
        <Image
          src={featuredProject.image}
          alt={featuredProject.title}
          width={800}
          height={450}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
        />

        {/* Glitch layers */}
        <div className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 mix-blend-screen">
          <Image
            src={featuredProject.image}
            alt=""
            width={800}
            height={450}
            className="w-full h-full object-cover transform translate-x-1 -translate-y-1 opacity-70 blur-sm"
          />
          <Image
            src={featuredProject.image}
            alt=""
            width={800}
            height={450}
            className="w-full h-full object-cover transform -translate-x-1 translate-y-1 opacity-70 blur-sm"
          />
        </div>
      </div>

      {/* Details */}
      <div className="w-full md:w-1/2 flex flex-col">
        <h2 className="text-accent-orange font-bold text-3xl mb-4">
          {featuredProject.title}
        </h2>
        <p className="text-white/80 mb-4">{featuredProject.description}</p>
        <Link
          href={featuredProject.url}
          target="_blank"
          className="mt-auto inline-block text-accent-orange font-semibold hover:underline"
        >
          View Project →
        </Link>
      </div>
    </motion.div>
  </div>
)}

{/* Projects Grid */}
{projects.length > 0 && (
  <>
    <div className="text-accent-orange font-bold text-2xl mb-6 font-mono tracking-wide" >
    PROJECTS
    </div>

    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
      {projects.map((project) => (
        <motion.div
          key={project.id}
          className="border border-accent-orange/30 rounded-2xl overflow-hidden shadow-md bg-background/40 backdrop-blur-md p-4 transition-all"
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.98 }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
        >
          <Link href={project.url} target="_blank">
            <div className="overflow-hidden rounded-lg">
              <Image
                src={project.image}
                alt={project.title}
                width={500}
                height={300}
                className="w-full h-48 object-cover transition-transform duration-300 hover:scale-105"
              />
            </div>
            <h3 className="text-accent-orange font-semibold text-lg mt-4">
              {project.title}
            </h3>
            <p className="text-white/70 text-sm mt-2">{project.description}</p>
          </Link>
        </motion.div>
      ))}
    </div>
  </>
)}




    </CardContainer>
  );
}

