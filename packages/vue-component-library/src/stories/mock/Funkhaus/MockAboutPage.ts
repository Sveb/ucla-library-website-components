// Mock data for About page sections
export const mockAboutPage = {
  missionSection: {
    title: 'Our Mission',
    content: 'The UCLA Digital Library Program works collaboratively within the UCLA Library, across campus, and with a broad range of partners to preserve and provide enhanced access to local and global cultural heritage materials in support of the University\'s teaching, learning, research and service mission.',
    additionalContent: 'UCLA Digital Library Collections follow ethical and inclusive approaches to descriptive practices as outlined in Toward Ethical and Inclusive Descriptive Practices in UCLA Library Special Collections.',
    image: {
      id: 'digital-library-001',
      src: 'https://static.library.ucla.edu/craftassetsprod/images/_1280xAUTO_crop_center-center_none/digital-library-program_2025-01-15-120000_efgh.jpg',
      height: 1200,
      width: 1920,
      alt: 'UCLA Digital Library Program workspace and technology',
      focalPoint: [0.5, 0.5],
    },
  },

  aboutSection: {
    title: 'About UCLA Library',
    content: 'The library system of the University of California, Los Angeles, is one of the largest academic research libraries in North America, with a collection of over twelve million books and 100,000 serials. The UCLA Library System is spread over 12 libraries, 12 other archives, reading rooms, research centers and the Southern Regional Library Facility, which serves as a remote storage facility for southern UC campuses. It is among the ten largest academic research library systems in the United States, and its annual budget allocates $10 million for the procurement of digital and print material. It is a Federal Depository Library, California State Depository Library, and United Nations Depository Library.',
    image: {
      id: 'ucla-library-001',
      src: 'https://static.library.ucla.edu/craftassetsprod/images/_1280xAUTO_crop_center-center_none/ucla-library-exterior_2025-01-15-120000_abcd.jpg',
      height: 1200,
      width: 1920,
      alt: 'UCLA Library exterior view showing the main building',
      focalPoint: [0.5, 0.5],
    },
  },

  contactSection: {
    title: 'Have Further Questions?',
    content: 'We\'re here to help. Chat with a librarian 24/7, schedule a research consultation or email us your quick questions.',
    buttons: [
      {
        label: 'Click Here for UCLA Library Locations',
        to: '/locations',
        iconName: 'location',
        variant: 'outlined',
      },
      {
        label: 'Contact Us',
        to: '/contact',
        iconName: 'email',
        variant: 'outlined',
      },
    ],
    image: {
      id: 'library-help-001',
      src: 'https://static.library.ucla.edu/craftassetsprod/images/_1280xAUTO_crop_center-center_none/library-help-desk_2025-01-15-120000_ijkl.jpg',
      height: 1200,
      width: 1920,
      alt: 'UCLA Library help desk and assistance area',
      focalPoint: [0.5, 0.5],
    },
  },
}