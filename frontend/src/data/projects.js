// Project 1 - BLOOM Healthcare Facility
import p1_00 from '../assests/projects_images/1_00.png';
import p1_therapy from '../assests/projects_images/1_therapy.png';
import p1_mediation from '../assests/projects_images/1_mediation.png';
import p1_layout from '../assests/projects_images/1_layout.png';
import p1_elevation from '../assests/projects_images/1_elevation.png';
import p1_mood from '../assests/projects_images/1_mood.png';

// Project 2 - Color Core Studio
import p2_00 from '../assests/projects_images/2_00.png';
import p2_lounge from '../assests/projects_images/2_lounge.png';
import p2_hr_office from '../assests/projects_images/2_hr_office.png';
import p2_layout_floor_1 from '../assests/projects_images/2_layout_floor_1.png';
import p2_layout_floor_2 from '../assests/projects_images/2_layout_floor_2.png';
import p2_mood from '../assests/projects_images/2_mood.png';

// Project 3 - Casa Loma
import p3_00 from '../assests/projects_images/3_00.png';
import p3_reception from '../assests/projects_images/3_reception.png';
import p3_cafe from '../assests/projects_images/3_cafe.png';
import p3_ground from '../assests/projects_images/3_ground.png';
import p3_floor_2 from '../assests/projects_images/3_floor_2.png';
import p3_basement from '../assests/projects_images/3_basement.png';
import p3_mood from '../assests/projects_images/3_mood.png';

// Project 4 - FLOAT Sanctuary
import p4_00 from '../assests/projects_images/4_00.png';
import p4_livin from '../assests/projects_images/4_livin.png';
import p4_layout from '../assests/projects_images/4_layout.png';
import p4_north_elevation from '../assests/projects_images/4_north_elevation.png';
import p4_south_elevation from '../assests/projects_images/4_south_elevation.png';
import p4_assembly from '../assests/projects_images/4_assembly.png';

export const projectsData = [
  {
    id: 1,
    title: 'BLOOM Healthcare Facility',
    category: 'Healthcare',
    description: 'Healing through the charging impetus of flowers\' growth, renewal, and hope. Soft forms, natural light, and soothing colours provide a touch of nature-nurtured tranquillity upon which patients can unwind and let go.',
    year: '2023',
    area: '4,047 sq ft',
    images: {
      main: p1_00,
      renders: [p1_therapy, p1_mediation],
      layouts: [p1_layout],
      elevations: [p1_elevation],
      mood: p1_mood,
    },
    detailedDescription: {
      overview: 'BLOOM is a healthcare sanctuary that embodies the concept of "Healthy grow, happy glow, with bloomy flow." This healing-focused facility draws inspiration from the natural growth patterns of flowers to create an environment of renewal and hope. The design emphasizes the therapeutic power of nature through soft, organic forms, abundant natural light, and a carefully curated color palette that soothes the spirit. Every aspect of the space is designed to provide a consciousness of beauty and care, creating a sanctum away from the clinical hospital environment where patients and staff can truly flourish.',
      challenge: 'The primary challenge was designing a comprehensive healthcare facility that balances clinical functionality with a deeply therapeutic atmosphere. The space needed to accommodate diverse medical functions—from exam rooms to therapy spaces to a healing garden—while maintaining a cohesive aesthetic that promotes wellness and reduces the stress typically associated with medical environments. Creating privacy for individual therapy while fostering a sense of community and hope required careful spatial planning.',
      solution: 'Our solution integrated biophilic design principles throughout the 4,047 square foot facility. We organized the space into distinct zones that flow naturally from public to private areas, beginning with a welcoming entry and reception area that sets a calming tone. The layout incorporates multiple therapy rooms of varying sizes to accommodate different treatment modalities, while the central healing garden serves as a visual and spiritual anchor visible from key areas. Soft, organic forms and nature-inspired colors create continuity throughout, while strategic placement of counseling and therapy rooms ensures patient privacy and comfort.'
    },
    features: [
      'Healing garden central to design',
      'Multiple specialized therapy rooms',
      'Nature-inspired soft forms and colors',
      'Abundant natural light throughout',
      'Separate clean and dirty core areas',
      'Private counseling and meditation spaces',
      'Universal washroom accessibility',
      'Dedicated physician offices and exam rooms'
    ],
    layout: [
      '1. Entry',
      '2. Waiting Area',
      '3. Reception',
      '4. Janitor Room',
      '5. Counseling Room',
      '6. Medication Room',
      '7. Individual Therapy Room 1',
      '8. Individual Therapy Room 2',
      '9. Small Therapy Room',
      '10. Physician Office 1',
      '11. Physician Office 2',
      '12. Patient Room',
      '13. Exam Room 1',
      '14. Exam Room 2',
      '15. Exam Room 3',
      '16. Staff Room',
      '17. Large Therapy Room',
      '18. Universal Washroom',
      '19. Charting Room',
      '20. Storage Room',
      '21. Clean Core',
      '22. Dirty Core',
      '23. Healing Garden'
    ]
  },
  {
    id: 2,
    title: 'Color Core Studio',
    category: 'Corporate',
    description: 'At Color Core Studio, comfort is never an option; it must be considered a prerequisite. Intensely colored interiors breathe life into the space, while neutrals allow calm to pervade. A vibe-powered ecosystem where imagination runs the show.',
    year: '2024',
    area: '4,047 sq ft',
    images: {
      main: p2_00,
      renders: [p2_lounge, p2_hr_office],
      layouts: [p2_layout_floor_1, p2_layout_floor_2],
      elevations: [],
      mood: p2_mood,
    },
    detailedDescription: {
      overview: 'Color Core Studio reimagines the modern workplace as a dynamic, vibe-powered ecosystem where creativity and productivity flourish in harmony. This innovative workspace challenges conventional office design by embracing bold color as a functional tool rather than mere decoration. The design philosophy centers on the belief that comfort is fundamental to performance, creating an environment where intensely colored zones energize and inspire, while neutral areas provide necessary moments of calm and focus. With modular flexibility and carefully zoned circulation, the space adapts seamlessly to the evolving needs of a modern creative workforce.',
      challenge: 'The key challenge was creating a multi-floor workplace that could accommodate diverse work styles and departmental needs while maintaining a cohesive, energizing atmosphere. The design needed to balance high-energy collaborative zones with quiet focus areas, incorporate essential amenities like sleeping pods and training facilities, and ensure smooth interdepartmental communication across two floors. Additionally, the space required flexible zoning that could adapt from collaborative work to deep focus to social interaction throughout the workday.',
      solution: 'We developed a strategic two-floor layout that organizes functions by energy level and collaboration needs. The ground floor houses public-facing areas like reception and lounge, along with executive offices and core amenities. The second floor focuses on departmental work zones, with IT, software development, and support teams arranged to facilitate natural collaboration. Modular furniture and flexible partitions allow rapid reconfiguration, while the bold color strategy creates visual wayfinding and reinforces functional zoning. Innovative amenities like sleeping pods and a dedicated training room demonstrate the commitment to employee wellbeing and growth.'
    },
    features: [
      'Bold color zoning for wayfinding and energy',
      'Modular furniture for flexible configurations',
      'Dedicated sleeping pods for rest',
      'Multi-floor layout with strategic department placement',
      'Professional training and conference facilities',
      'Integrated break and servery areas',
      'Inclusive and accessible design throughout',
      'Technology-forward workspace solutions'
    ],
    layout: [
      'Floor 1:',
      '1. Reception',
      '2. Lounge',
      '3. Library',
      '4. Meeting Room',
      '5. President Office',
      '6. Marketing & Support',
      '7. Washroom',
      '8. File Room',
      '9. Printer Room',
      '10. Fax/Mail/Copy',
      '11. Coffee Area',
      '12. Finance Office',
      '',
      'Floor 2:',
      '13. VP Assistance',
      '14. VP Finance',
      '15. HR Office',
      '16. IT Department',
      '17. Software Developers',
      '18. Sales & Support',
      '19. Computer Storage',
      '20. Sleeping Pods',
      '21. Printer',
      '22. Training Room',
      '23. Conference Room',
      '24. Servery & Break Room'
    ]
  },
  {
    id: 3,
    title: 'Casa Loma',
    category: 'Hospitality',
    description: 'Light, airy, natural, and warm elements create a beautiful, open, comfortable, and inviting space. The design enhances natural light with a soft palette of off-whites, beiges, and muted greens to invoke calm and balance.',
    year: '2025',
    area: '64,700 sq ft',
    images: {
      main: p3_00,
      renders: [p3_reception, p3_cafe],
      layouts: [p3_ground, p3_floor_2, p3_basement],
      elevations: [],
      mood: p3_mood,
    },
    detailedDescription: {
      overview: 'Casa Loma represents a holistic approach to hospitality design, where luxury meets organic simplicity across an impressive 64,700 square feet. This multi-level retreat seamlessly integrates public gathering spaces, private accommodations, and comprehensive wellness facilities into a cohesive whole. The design philosophy celebrates natural materials, gentle textures, and a carefully controlled color palette that evokes the tranquility of nature while maintaining modern sophistication. From the welcoming ground-floor café and event spaces to the serene bedrooms above and the expansive wellness facilities below, every level is designed to encourage comfort, connection, and ease.',
      challenge: 'Creating a large-scale hospitality venue that feels intimate rather than institutional across three distinct levels presented significant design challenges. The space needed to serve multiple functions—from casual café dining to formal events, executive retreats to wellness experiences—while maintaining a consistent atmosphere of relaxed elegance. Balancing the operational requirements of a full-service facility with the desire for a serene, residential feel, particularly across 64,700 square feet, required thoughtful planning and restraint.',
      solution: 'Our solution organized the facility into three experiential layers, each with its own character while sharing a unified design language. The ground floor serves as the social heart, featuring café, event spaces, and administrative functions arranged around a central lounge. The second floor provides quiet refuge with various bedroom configurations and a library for contemplation. The basement level houses comprehensive wellness amenities including pool, spa, sauna, and gym, creating a self-contained retreat experience. Throughout, we employed organic materials like light woods and natural fabrics, layered lighting for depth and warmth, and a muted color palette that allows the architecture and natural light to create the atmosphere.'
    },
    features: [
      'Multi-level hospitality experience',
      'Full-service café and commercial kitchen',
      'Flexible event and conference facilities',
      'Luxury bedroom suites with varied configurations',
      'Comprehensive basement wellness center',
      'Pool, spa, sauna, and gym facilities',
      'Natural material palette throughout',
      'Layered lighting for ambiance and function',
      'Universal accessibility features',
      'Integrated lounge and social spaces on all levels'
    ],
    layout: [
      'Ground Floor:',
      '1. Reception / Waiting Area',
      '2. Cafe',
      '3. Food Storage',
      '4. Kitchen',
      '5. Staff Washroom',
      '6. Entrance',
      '7. Porch',
      '8. Coat Check',
      '9. Universal Bathroom',
      '10. Printer Room',
      '11. Admin',
      '12. Conference Room',
      '13. Computer Room',
      '14. Lounge',
      '15. Event Room',
      '',
      'Floor 2:',
      '9. Universal Bathroom',
      '16. Executive Bedroom',
      '17. Twin Bedroom',
      '18. Staff Room',
      '19. Library',
      '20. Deluxe Bedroom',
      '',
      'Basement:',
      '21. Female Changing Room',
      '22. Sauna',
      '23. Pool Area',
      '24. Pool Lounge',
      '25. Spa Rooms',
      '26. Snack / Lounge Area',
      '27. Games Room',
      '28. Family Bathroom',
      '29. Powder Room',
      '30. Laundry Room',
      '31. BOH Storage',
      '32. Gym',
      '33. Male Changing Room'
    ]
  },
  {
    id: 4,
    title: 'FLOAT Sanctuary',
    category: 'Residential',
    description: 'Embodying calm in a temporary shelter design. This compact sanctuary demonstrates how thoughtful design can create a sense of spaciousness and tranquility within minimal square footage.',
    year: '2025',
    area: '528 sq ft',
    images: {
      main: p4_00,
      renders: [p4_livin],
      layouts: [p4_layout],
      elevations: [p4_north_elevation, p4_south_elevation],
      assembly: p4_assembly,
      mood: null,
    },
    detailedDescription: {
      overview: 'FLOAT Sanctuary embodies the principle that true luxury lies in simplicity and calm, not square footage. This 528 square foot temporary shelter demonstrates masterful space planning, where every inch serves multiple purposes without feeling cramped or compromised. The design philosophy centers on creating a floating sense of lightness and ease, where clean lines, natural materials, and thoughtful details combine to provide all essential living functions within a remarkably compact footprint. Despite its small size, the sanctuary feels spacious and serene, proving that mindful design can transcend physical constraints.',
      challenge: 'The fundamental challenge was creating a complete, comfortable living environment within just 528 square feet while maintaining a sense of openness and calm. The space needed to accommodate all essential functions—sleeping, cooking, dining, bathing, and living—without feeling cluttered or compromising on quality of life. For a temporary shelter, the design also needed to be both practical and emotionally nurturing, providing residents with a true sense of home and sanctuary rather than merely basic accommodation.',
      solution: 'We employed an open-plan approach that maximizes visual connectivity and natural light flow throughout the compact space. The kitchen and dining area merge seamlessly with the living room, creating a flexible multi-use zone that adapts to different activities throughout the day. Strategic placement of the bedroom and bathroom provides necessary privacy while maintaining the overall sense of openness. Both north and south elevations are carefully designed to optimize natural light and ventilation, creating cross-flow that makes the space feel larger and more comfortable. High-quality finishes and built-in storage solutions ensure that despite the compact footprint, the sanctuary feels refined and complete.'
    },
    features: [
      'Efficient 528 sq ft footprint',
      'Open-plan living maximizing space',
      'Integrated kitchen and dining area',
      'Strategic natural light optimization',
      'Dual elevation design for cross-ventilation',
      'Built-in storage solutions',
      'High-quality finishes throughout',
      'Flexible multi-use living spaces',
      'Private bedroom and bathroom zones',
      'Temporary shelter with permanent quality'
    ],
    layout: [
      '1. Entry',
      '2. Living Room',
      '3. Kitchen / Dining Area',
      '4. Bathroom',
      '5. Bedroom'
    ]
  },
];