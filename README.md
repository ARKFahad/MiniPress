# Matthew P Munger Website Clone

A faithful recreation of Matthew P Munger's personal website featuring a unique Macintosh-style desktop interface. This project replicates the original website's design and functionality with a modern web implementation.

## 🌟 Features

### Macintosh-Style Interface
- **Classic Menu Bar**: Apple logo with dropdown menu containing various options
- **Desktop Environment**: Grid layout with folder icons and applications
- **Window System**: Popup windows with close, minimize, and maximize controls
- **Interactive Elements**: Clickable desktop items and menu options

### Content Sections
- **Read Me**: Matthew's personal bio and background information
- **My Videos**: Collection of Webflow tutorials and features
- **My Tutorials**: Educational content and guides
- **My Articles**: Written content and blog posts
- **Webflow Weekly**: Newsletter archive and issues

### Technical Features
- **Responsive Design**: Works on desktop and mobile devices
- **Smooth Animations**: Window opening/closing animations
- **Keyboard Shortcuts**: ESC key to close windows
- **Modern CSS**: Glassmorphism effects and gradients
- **Vanilla JavaScript**: No external dependencies required

## 🚀 Getting Started

### Prerequisites
- A modern web browser (Chrome, Firefox, Safari, Edge)
- No additional software installation required

### Installation

1. **Clone or Download the Project**
   ```bash
   git clone [repository-url]
   cd MiniPress
   ```

2. **Open the Website**
   - Navigate to the `HTML` folder
   - Open `index.html` in your web browser
   - Or use a local server for better performance

3. **Using a Local Server (Optional)**
   ```bash
   # Using Python 3
   python -m http.server 8000
   
   # Using Node.js (if you have http-server installed)
   npx http-server
   
   # Then visit http://localhost:8000/HTML/
   ```

## 📁 Project Structure

```
MiniPress/
├── CSS/
│   └── styles.css          # Main stylesheet
├── HTML/
│   └── index.html          # Main HTML file
├── JS/
│   └── script.js           # JavaScript functionality
├── image/
│   └── apple-icon.png      # Apple logo image
└── README.md               # This file
```

## 🎮 How to Use

### Desktop Interface
- **Click on any folder/application icon** to open its corresponding window
- **Hover over the Apple menu** (🍎) to see the dropdown menu
- **Click menu options** to open specific content windows

### Window Controls
- **Red button (✕)**: Close the window
- **Yellow button (−)**: Minimize the window
- **Green button (□)**: Maximize/restore the window
- **Click outside windows**: Close the active window
- **ESC key**: Close all open windows

### Menu Navigation
- **Apple Menu**: Contains shortcuts to various sections
- **File, Edit, View, Window, Help**: Standard menu items (for aesthetic purposes)

## 🎨 Design Features

### Visual Elements
- **Gradient Background**: Purple-blue gradient for desktop
- **Glassmorphism Menu Bar**: Semi-transparent with blur effect
- **Window Styling**: Realistic window appearance with shadows
- **Icon System**: Emoji-based icons for folders and applications
- **Typography**: Apple system fonts for authentic look

### Responsive Design
- **Desktop**: Full grid layout with all features
- **Mobile**: Optimized layout with smaller icons and adjusted spacing
- **Tablet**: Intermediate layout between desktop and mobile

## 🔧 Customization

### Adding New Content
1. **Create a new window** in `index.html`:
   ```html
   <div class="window" id="your-window" style="display: none;">
       <div class="window-header">
           <!-- Window controls -->
       </div>
       <div class="window-content">
           <!-- Your content here -->
       </div>
   </div>
   ```

2. **Add a desktop item**:
   ```html
   <div class="desktop-item" data-folder="your-folder">
       <div class="folder-icon">📁</div>
       <div class="item-name">Your Folder</div>
   </div>
   ```

3. **Update JavaScript** to handle the new folder type in `script.js`

### Styling Changes
- **Colors**: Modify CSS variables in `styles.css`
- **Layout**: Adjust grid settings in `.desktop` class
- **Animations**: Modify keyframes in CSS

## 📱 Browser Compatibility

- ✅ Chrome 80+
- ✅ Firefox 75+
- ✅ Safari 13+
- ✅ Edge 80+
- ⚠️ Internet Explorer (not supported)

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- **Original Design**: Matthew P Munger's website design and concept
- **Inspiration**: Classic Macintosh operating system interface
- **Icons**: Emoji icons for visual elements
- **Fonts**: Apple system fonts for authentic appearance

## 📞 Support

If you encounter any issues or have questions:
1. Check the browser console for JavaScript errors
2. Ensure all files are in the correct directory structure
3. Try using a local server instead of opening the file directly

## 🎯 Future Enhancements

- [ ] Add more interactive content windows
- [ ] Implement drag-and-drop functionality
- [ ] Add sound effects for window operations
- [ ] Create additional menu dropdowns
- [ ] Add keyboard shortcuts for all operations
- [ ] Implement a dock/taskbar feature

---

**Note**: This is a recreation of Matthew P Munger's original website design. All content and design concepts belong to the original creator. This project is for educational and demonstration purposes only. 