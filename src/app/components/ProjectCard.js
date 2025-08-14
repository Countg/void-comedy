import CardContainer from "./CardContainer";
import { supabase } from "@/lib/SuperBaseClient";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";


export default function ProjectCard() {
  const [projects, setProjects] = useState([]);
  const [error, setError] = useState(null);


useEffect(() => {
  const fetchProjects = async () => {
    const { data, error } = await supabase.from('projects').select();

    if (error) {
      console.error("Error fetching projects:", error); // See full object
    } else {
      const cleanData = data.map(project => ({
  ...project,
  image: project.image?.trim(),
  url: project.url?.trim(),
}));
      setProjects(cleanData);
    }
  };

  fetchProjects();
}, []);



  return (
    <CardContainer>
      <div
        className="text-accent-orange font-bold text-2xl mb-6 font-mono tracking-wide"
        id="projects"
      >
        FEATURED PROJECTS
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
            <p className="text-white/70 text-sm mt-2">
              {project.description}
            </p>
              </Link>
          </motion.div>
        ))}
      </div>
    </CardContainer>
  );
}

