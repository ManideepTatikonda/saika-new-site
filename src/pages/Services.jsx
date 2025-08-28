import { Link } from "react-router-dom";


const SERVICES = [
    {
      id: "iot",
      iconSrc: "/IS.svg", 
      title: "IOT Solutions",
      overview:
        "Enable businesses to seamlessly connect, manage, and scale IoT (Internet of Things) devices to enhance operational efficiency, automate processes, and gather real-time insights across various touchpoints in their ecosystem.",
      leftTitle: "Core Offerings",
      leftBullets: [
        "IoT device integration",
        "Centralized device management",
        "Custom IoT platform development",
        "Data collection & analytics",
        "Security & compliance",
        "Scalability & extensibility",
      ],
      leftSubBullets: [
        [
          "Connect sensors, actuators, wearables, and smart appliances.",
          "Interoperability across multi-vendor ecosystems.",
          "MQTT, CoAP, HTTP, Zigbee, LoRaWAN, NB-IoT, Bluetooth LE.",
        ],
        [
          "Onboarding, provisioning, and monitoring.",
          "Remote firmware updates & diagnostics.",
          "Role-based access control and policy management.",
          "Identity management & encryption protocols.",
        ],
        [
          "Dashboards for real-time monitoring & analytics.",
          "Rule-based automation and alerts.",
          "Integrations with AWS IoT Core / Azure IoT Hub / GCP.",
          "APIs with CRMs/ERPs & other enterprise tools.",
        ],
        [
          "Real-time streams from connected devices.",
          "AI/ML for predictive maintenance & anomaly detection.",
          "Customizable reports and alerts.",
        ],
        [
          "End-to-end encryption & secure data transmission.",
          "Device authentication and access control.",
          "Compliance: GDPR, HIPAA (as applicable).",
        ],
        [
          "Architected to support thousands to millions of devices.",
          "Modular systems for future adaptation and growth.",
        ],
      ],
      rightTitle: "Use Cases by Industry",
      rightBullets: [
        "Healthcare: remote patient monitoring, asset tracking, smart beds.",
        "Manufacturing: predictive maintenance, telemetry, quality control.",
        "Retail: smart shelves & real-time inventory, personalized experiences.",
        "Smart Cities: traffic & waste monitoring, energy optimization.",
      ],
      // keep array-of-arrays; add items if you need sub-points under each use case
      rightSubBullets: [[], [], [], []],
      benefits: [
        "Reduced operational costs through automation.",
        "Improved asset utilization and uptime.",
        "Better decisions from real-time data.",
      ],
    },
    {
      id: "devops",
      iconSrc: "/DO.svg", 
      title: "DevOps",
      overview:
        "DevOps is a set of practices that bridges the gap between software development and IT operations. It enables businesses to build, test, release, and deploy applications faster and more reliably by automating workflows, enhancing collaboration, and ensuring continuous integration and delivery (CI/CD).",
      leftTitle: "Core Offerings",
      leftBullets: [
        "CI/CD Pipeline Implementation",
        "Infrastructure as Code (IaC)",
        "Cloud Infrastructure Management",
        "Containerization & Orchestration",
        "Monitoring & Logging",
        "Security & Compliance (DevSecOps)",
        "Release & Deployment Automation",
        "Collaboration & Culture Enablement",
      ],
      leftSubBullets: [
        [
          "Automate the entire software delivery process from code commit to deployment.",
          "Tools: Jenkins, GitLab CI, GitHub Actions, CircleCI, Azure DevOps, ArgoCD.",
          "Benefits: Faster releases, lower risk of bugs, improved deployment frequency.",
        ],
        [
          "Provision and manage infrastructure using code for consistency and version control.",
          "Tools: Terraform, Ansible, AWS CloudFormation, Pulumi.",
          "Benefits: Repeatable, scalable, and auditable infrastructure management.",
        ],
        [
          "Deploy and manage applications across AWS, Azure, Google Cloud, or hybrid environments.",
          "Auto-scaling, load balancing, failover, and cloud cost optimization.",
          "Secure and resilient cloud-native architectures.",
        ],
        [
          "Package and deploy applications using containers for portability and scalability.",
          "Tools: Docker, Kubernetes, Helm, OpenShift.",
          "Benefits: Consistent environments, simplified deployments, microservices support.",
        ],
        [
          "Real-time visibility into infrastructure, application performance, and user behavior.",
          "Tools: Prometheus, Grafana, ELK Stack (Elasticsearch, Logstash, Kibana), Datadog, New Relic.",
          "Benefits: Faster incident detection, improved root cause analysis, proactive troubleshooting.",
        ],
        [
          "Integrate security checks early in the development pipeline.",
          "Tools: Snyk, SonarQube, Aqua, HashiCorp Vault.",
          "Benefits: Shift-left security, vulnerability scanning, and compliance enforcement.",
        ],
        [
          "Automate blue/green deployments, canary releases, and rollbacks.",
          "Reduce downtime and ensure smooth, error-free deployments.",
        ],
        [
          "Align development, operations, QA, and security teams.",
          "Implement best practices and continuous feedback loops.",
        ],
      ],
      rightTitle: "Use Cases by Industry",
      rightBullets: [
        "Fintech: High-frequency deployment with compliance and rollback strategies.",
        "Healthcare: Secure CI/CD pipelines for HIPAA-compliant apps.",
        "E-commerce: Zero-downtime deployments and performance scaling.",
        "SaaS Platforms: Rapid prototyping, feature toggles, and multi-tenant deployment.",
        "IoT & Edge: Continuous delivery to distributed nodes/devices.",
      ],
      // keep array-of-arrays; add items if you need sub-points under each use case
      rightSubBullets: [[], [], [], []],
      benefits: [
        "Shorter development cycles and faster time-to-market.",
        "Higher product quality and reduced deployment risks.",
        "Enhanced collaboration and transparency.",
        "Greater operational efficiency and lower costs.",
        "Continuous innovation through automation."
      ],
    },
    {
      id: "ifs",
      iconSrc: "/ISS.svg", 
      title: "Infrastructure Services",
      overview:
        "Infrastructure services encompass the foundational technologies and systems—physical, virtual, or cloud-based—that power business operations. These services ensure that your IT backbone is robust, high-performing, secure, and aligned with your evolving business needs.",
      leftTitle: "Core Offerings",
      leftBullets: [
        "IT infrastructure design & consulting",
        "Cloud infrastructure services",
        "Hybrid & multi-cloud architecture",
        "Network infrastructure management",
        "Server & storage management",
        "Virtualization & container infrastructure",
        "Infrastructure monitoring & automation",
        "Security & compliance infrastructure",
        "Disaster recovery & business continuity",
      ],
      leftSubBullets: [
        [
          "Assess current infrastructure and provide strategic roadmaps.",
          "Plan high-availability architectures and network topologies.",
          "Vendor-neutral guidance tailored to business goals (on-prem, cloud, hybrid).",
        ],
        [
          "Design, deploy, and manage cloud environments (AWS, Azure, GCP, Oracle Cloud).",
          "Enable elasticity, scalability, and global availability.",
          "Cloud migration, optimization, and cost governance.",
        ],
        [
          "Seamlessly integrate on-prem systems with multiple cloud platforms.",
          "Unified control planes for visibility and governance.",
          "Avoid vendor lock-in and improve redundancy.",
        ],
        [
          "Set up and manage LAN, WAN, SD-WAN, VPN, firewalls, and load balancers.",
          "Network performance tuning, traffic analysis, and segmentation.",
          "Secure remote access and zero-trust network architectures.",
        ],
        [
          "Provision physical or virtual servers, hyper-converged systems.",
          "Implement scalable storage (NAS, SAN, object storage, cloud storage).",
          "Backup, archival, and disaster recovery solutions.",
        ],
        [
          "Deploy VMs using VMware, Hyper-V, KVM.",
          "Set up container platforms with Kubernetes, Docker, OpenShift.",
          "Reduce hardware dependency and improve resource utilization.",
        ],
        [
          "Real-time performance monitoring and alerting systems.",
          "Automate provisioning, scaling, patching, and failover.",
          "Tools: Nagios, Zabbix, Prometheus, Ansible, Chef, Puppet.",
        ],
        [
          "Perimeter defense (firewalls, IDS/IPS), endpoint protection.",
          "IAM, data encryption, and security audits.",
          "Compliance with ISO 27001, GDPR, HIPAA, PCI-DSS, etc.",
        ],
        [
          "Design and implement DR strategies (hot/warm/cold sites).",
          "Ensure uptime and data protection during outages or disasters.",
          "Regular testing and validation of DR plans.",
        ],
      ],
    
      rightTitle: "Use Cases by Industry",
      rightBullets: [
        "Fintech: high-frequency deployment with compliance and rollback strategies.",
        "Healthcare: secure CI/CD pipelines for HIPAA-compliant apps.",
        "E-commerce: zero-downtime deployments and performance scaling.",
        "SaaS Platforms: rapid prototyping, feature toggles, multi-tenant deployments.",
        "IoT & Edge: continuous delivery to distributed nodes/devices.",
      ],
    
      benefits: [
        "Reliable and high-performing IT backbone.",
        "Reduced downtime and operational risk.",
        "Faster provisioning and scalability of resources.",
        "Improved cost-efficiency and resource utilization.",
        "Strengthened security posture and compliance readiness.",
      ],
    },
  ];
  

/* ---------- shared section renderer ---------- */
/* ---------- shared section renderer (with sub-bullets) ---------- */
function ServiceSection({
    id,
    iconSrc,
    title,
    overview,
  
    leftTitle,
    leftBullets = [],
    leftSubBullets = [],     // NEW: array-of-arrays, aligns by index with leftBullets
  
    rightTitle,
    rightBullets = [],
    rightSubBullets = [],    // NEW: array-of-arrays, aligns by index with rightBullets
  
    benefits = [],
  }) {
    return (
      <section id={id} className="mx-auto w-full max-w-[1350px] px-8 lg:px-24 py-12">
        {/* Title row */}
        <div className="flex items-start gap-3">
          {iconSrc && (
            <img
              src={iconSrc}
              alt=""
              className="mt-1 h-28 w-28 flex-shrink-0"
              loading="lazy"
            />
          )}
          <div className="ml-6">
            <h2 className="text-2xl md:text-[28px] font-extrabold tracking-tight">
              {title}
            </h2>
  
            {overview && (
              <>
                <h3 className="mt-2 text-[15px] font-semibold">Service Overview</h3>
                <p className="mt-1.5 text-[15px] leading-7 text-slate-700">{overview}</p>
              </>
            )}
          </div>
        </div>
  
        {/* Two columns */}
        <div className="mt-6 grid gap-12 md:grid-cols-2">
          {/* Left column */}
          <div>
            <h4 className="text-lg font-semibold">{leftTitle}</h4>
  
            <ul className="mt-2 list-disc pl-5 space-y-2 text-[15px] leading-7 text-slate-700">
              {leftBullets.map((text, i) => (
                <li key={`l-${i}`}>
                  <span className="font-semibold">{text}</span>
  
                  {Array.isArray(leftSubBullets[i]) && leftSubBullets[i].length > 0 && (
                    <ul className="mt-1 list-disc pl-5 space-y-1.5 font-normal">
                      {leftSubBullets[i].map((sub, j) => (
                        <li key={`l-${i}-${j}`}>{sub}</li>
                      ))}
                    </ul>
                  )}
                </li>
              ))}
            </ul>
          </div>
  
          {/* Right column */}
          <div>
            <h4 className="text-lg font-semibold">{rightTitle}</h4>
  
            <ul className="mt-2 list-disc pl-5 space-y-2 text-[15px] leading-7 text-slate-700">
              {rightBullets.map((text, i) => (
                <li key={`r-${i}`}>
                  {text}
  
                  {Array.isArray(rightSubBullets[i]) && rightSubBullets[i].length > 0 && (
                    <ul className="mt-1 list-disc pl-5 space-y-1.5 font-normal">
                      {rightSubBullets[i].map((sub, j) => (
                        <li key={`r-${i}-${j}`}>{sub}</li>
                      ))}
                    </ul>
                  )}
                </li>
              ))}
            </ul>
  
            {!!benefits.length && (
              <>
                <h4 className="mt-6 text-lg font-semibold">Business Benefits</h4>
                <ul className="mt-2 list-disc pl-5 space-y-1.5 text-[15px] leading-7 text-slate-700">
                  {benefits.map((b, i) => (
                    <li key={`b-${i}`}>{b}</li>
                  ))}
                </ul>
              </>
            )}
          </div>
        </div>
      </section>
    );
  }
  

export default function Services() {
    return (
        <div className="min-h-screen bg-white text-slate-900">
            {/* Hero */}
            <section className="relative isolate min-h-[72vh] grid items-end">
                {/* Background */}
                <div className="absolute inset-0 -z-10 bg-[url('/Services.png')] bg-cover bg-center" />
                <div className="absolute inset-0 -z-10 bg-slate-900/0" />
                <div className="mx-auto w-full max-w-[1350px] px-8 lg:px-24 pb-8" />
            </section>


            {/* Breadcrumb */}
            <nav className="mx-auto max-w-[1440px] px-8 lg:px-24 py-6">
                <ol className="flex items-center gap-3 text-sm md:text-base">
                    <li>
                        <Link
                            to="/"
                            className="text-teal-500 font-semibold hover:text-teal-400 focus:outline-none focus-visible:ring-2 focus-visible:ring-teal-400"
                        >
                            Home
                        </Link>
                    </li>
                    <li aria-hidden className="text-slate-400 select-none">›</li>
                    <li className="text-slate-400">Services</li>
                </ol>
            </nav>

            {/* Page heading */}
            <header className="mx-auto max-w-[1350px] px-8 lg:px-24 py-1 text-center">
                <h1 className="text-3xl md:text-4xl font-style-[Segeo UI] font-extrabold tracking-tight ">
                    OUR SERVICES
                </h1>
            </header>


            {/* Quick jump (simple inline TOC) */}
            <div className="mx-auto max-w-[1350px] px-8 lg:px-24 py-6">
                <div className="flex flex-wrap gap-3 text-sm">
                    <a href="#iot" className="rounded-full border px-3 py-1 hover:bg-slate-50">IoT Solutions</a>
                    <a href="#devops" className="rounded-full border px-3 py-1 hover:bg-slate-50">DevOps</a>
                    <a href="#ifs" className="rounded-full border px-3 py-1 hover:bg-slate-50">Infrastructure Services</a>
                    {/* add more chips below matching your ids */}
                    {/* <a href="#cloud" ...>Cloud Apps</a> ... */}
                </div>
            </div>

            {/* IoT Solutions */}
            <div className="min-h-screen bg-white">
                {SERVICES.map((s) => (
                    <ServiceSection key={s.id} {...s} />
                ))}
            </div>


        </div>
    );
}