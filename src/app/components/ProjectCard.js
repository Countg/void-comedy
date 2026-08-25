'use client';

import { supabase } from "@/lib/SuperBaseClient";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";

export default function ProjectCard() {
  const [projects, setProjects] = useState([]);
  const [featuredProject, setFeaturedProject] = useState(null);

  useEffect(() => {
    const fetchProjects = async () => {
      const { data, error } = await supabase.from("projects").select();

      if (error) {
        console.error("Error fetching projects:", error);
        return;
      }

      const cleanData = data.map((project) => ({
        ...project,
        image: project.image?.trim(),
        url: project.url?.trim(),
        featured: Boolean(project.featured),
      }));

      setFeaturedProject(cleanData.find((p) => p.featured) || null);
      setProjects(cleanData.filter((p) => !p.featured));
    };

    fetchProjects();
  }, []);

  if (!featuredProject && projects.length === 0) return null;

  return (
    <section id="projects" className="pbo-section">
      {featuredProject && (
        <>
          <div className="pbo-kicker">Glitch On The Grind</div>

          <div className="pbo-feature">
            <Link href={featuredProject.url} target="_blank" className="pbo-featureimg">
              <Image
                src={featuredProject.image}
                alt={featuredProject.title}
                fill
                sizes="(max-width: 860px) 100vw, 50vw"
              />
            </Link>

            <div>
              <h2>{featuredProject.title}</h2>
              <p>{featuredProject.description}</p>
              <Link href={featuredProject.url} target="_blank" className="pbo-link">
                View Project →
              </Link>
            </div>
          </div>
        </>
      )}

      {projects.length > 0 && (
        <>
          <div className="pbo-kicker">Projects</div>

          <div className="pbo-grid">
            {projects.map((project) => (
              <Link
                key={project.id}
                href={project.url}
                target="_blank"
                className="pbo-card"
              >
                <div className="pbo-thumb">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    sizes="(max-width: 520px) 100vw, (max-width: 860px) 50vw, 33vw"
                  />
                </div>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <span className="more">View Project →</span>
              </Link>
            ))}
          </div>
        </>
      )}
    </section>
  );
}
