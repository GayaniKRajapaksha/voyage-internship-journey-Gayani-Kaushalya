import React from 'react'
import { Link } from 'react-router-dom'
import projects from '../data/projects'

export default function Projects() {
  return (
    <section>
      <h1>Projects</h1>
      <ul>
        {projects.map(p => (
          <li key={p.id}>
            <h3><Link to={`/projects/${p.id}`}>{p.title}</Link></h3>
            <p>{p.short}</p>
          </li>
        ))}
      </ul>
    </section>
  )
}
