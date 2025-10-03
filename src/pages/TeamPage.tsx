import "./TeamPage.css"

export function TeamPage() {
  const teamMembers = [
    {
      name: "Sarah Johnson",
      role: "Chief Executive Officer",
      image: "/professional-woman-ceo.png",
      bio: "Leading our vision with 15+ years of industry experience in enterprise software and digital transformation.",
    },
    {
      name: "Michael Chen",
      role: "Chief Technology Officer",
      image: "/professional-man-cto-developer.jpg",
      bio: "Driving technical innovation and architecture with expertise in cloud infrastructure and scalable systems.",
    },
    {
      name: "Emily Rodriguez",
      role: "Head of Product",
      image: "/professional-woman-product-manager.png",
      bio: "Shaping product strategy and user experience with a focus on customer-centric design and innovation.",
    },
    {
      name: "David Kim",
      role: "Engineering Lead",
      image: "/professional-man-software-engineer.jpg",
      bio: "Building robust solutions and mentoring our engineering team to deliver excellence in every release.",
    },
    {
      name: "Jessica Martinez",
      role: "Design Director",
      image: "/professional-woman-designer.png",
      bio: "Creating beautiful, intuitive experiences that delight users and drive engagement across all platforms.",
    },
    {
      name: "Alex Thompson",
      role: "Operations Manager",
      image: "/professional-person-operations-manager.jpg",
      bio: "Ensuring seamless operations and process optimization to support our growing team and customer base.",
    },
  ]

  return (
    <div className="team-page">
      <div className="team-hero">
        <h1 className="team-title">Meet Our Team</h1>
        <p className="team-subtitle">
          Talented professionals dedicated to building exceptional products and delivering outstanding results for our
          customers.
        </p>
      </div>

      <div className="team-grid">
        {teamMembers.map((member, index) => (
          <div key={index} className="team-card">
            <div className="team-card-image-wrapper">
              <img src={member.image || "/placeholder.svg"} alt={member.name} className="team-card-image" />
            </div>
            <div className="team-card-content">
              <h3 className="team-card-name">{member.name}</h3>
              <p className="team-card-role">{member.role}</p>
              <p className="team-card-bio">{member.bio}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="team-cta">
        <h2 className="team-cta-title">Want to join our team?</h2>
        <p className="team-cta-text">
          We're always looking for talented individuals who are passionate about technology and innovation.
        </p>
        <button className="team-cta-button">View Open Positions</button>
      </div>
    </div>
  )
}
