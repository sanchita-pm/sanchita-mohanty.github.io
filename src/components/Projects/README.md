# Projects Section Documentation

## Overview
The Projects section showcases Sanchita's portfolio of strategic analysis and product development work, featuring interactive presentation viewing capabilities.

## Components

### 1. Projects.js (Main Component)
- **Purpose**: Main container component that manages project display modes
- **Features**:
  - Grid view for project overview
  - Presentation view for detailed project viewing
  - Navigation between projects
  - Responsive design

### 2. ProjectCard.js
- **Purpose**: Individual project card component
- **Features**:
  - Project overview with description
  - Technology tags and highlights
  - Download functionality for presentations
  - Interactive hover effects

### 3. PPTViewer.js
- **Purpose**: PowerPoint presentation viewer component
- **Features**:
  - Tabbed interface (Viewer + Details)
  - Download and open-in-browser functionality
  - Project details display
  - Additional resources section

## Project Structure
```
Projects/
├── Projects.js              # Main component
├── ProjectCard.js           # Project card component
├── PPTViewer.js            # Presentation viewer
├── index.js                # Component exports
├── README.md               # This documentation
├── BOAT INC(Company STrategy)/
│   └── boAt .pptx
├── KALAKSHETRA (SaaS Product)/
│   ├── PBMA KalaKshetra.pptx
│   └── Kalakshetra (PBM) Final Project Report.pdf
└── LuvNimbus(SaaS Product)/
    └── DIPM Final (LuvNimbus)S.pptx
```

## Features

### Interactive Project Cards
- Hover effects with scaling animation
- Technology badges with custom styling
- Key highlights display
- Multiple action buttons (View, Download)

### Presentation Viewer
- **Browser Viewing**: Opens PPT files in new tab
- **Download Option**: Direct download of presentation files
- **Project Details Tab**: Comprehensive project information
- **Additional Resources**: PDF reports and supplementary materials

### Responsive Design
- Mobile-optimized layout
- Adaptive button sizing
- Flexible grid system
- Touch-friendly interactions

## Technical Implementation

### File Handling
- PowerPoint files are imported as static assets
- Download functionality uses browser's native download API
- Files open in new tabs for better user experience

### Styling
- Custom CSS classes for consistent theming
- Bootstrap components for responsive layout
- Purple/violet color scheme matching site theme
- Smooth transitions and hover effects

### Navigation
- Integrated with React Router
- Breadcrumb-style navigation
- Back button functionality
- Seamless transitions between views

## Usage

### Adding New Projects
1. Create project folder in `/Projects/` directory
2. Add presentation files (PPT/PDF)
3. Update `projectsData` array in `Projects.js`
4. Include project details, technologies, and highlights

### Project Data Structure
```javascript
{
  id: number,
  title: string,
  description: string,
  category: string,
  technologies: string[],
  pptFile: imported_file,
  additionalFiles: [
    { name: string, file: imported_file, type: string }
  ],
  highlights: string[]
}
```

## Browser Compatibility
- Modern browsers with ES6+ support
- File download functionality works across all major browsers
- PowerPoint viewing depends on browser's native capabilities or installed plugins

## Future Enhancements
- Slide-by-slide presentation viewer
- Auto-play presentation mode
- Presentation thumbnails
- Search and filter functionality
- Project categories and tags
- Integration with presentation APIs (Google Slides, Office 365)
