document.addEventListener('DOMContentLoaded', function() {
    // Desktop item click handlers
    const desktopItems = document.querySelectorAll('.desktop-item');
    
    desktopItems.forEach(item => {
        item.addEventListener('click', function() {
            const folderType = this.getAttribute('data-folder');
            openWindow(folderType);
        });
    });

    // Menu option click handlers
    const menuOptions = document.querySelectorAll('.menu-option');
    menuOptions.forEach(option => {
        option.addEventListener('click', function() {
            const menuText = this.querySelector('span:last-child').textContent;
            const folderType = getFolderTypeFromMenuText(menuText);
            openWindow(folderType);
        });
    });

    // Window close button handlers
    const closeButtons = document.querySelectorAll('.close-btn');
    closeButtons.forEach(button => {
        button.addEventListener('click', function() {
            const window = this.closest('.window');
            closeWindow(window);
        });
    });

    // Window minimize button handlers
    const minimizeButtons = document.querySelectorAll('.minimize-btn');
    minimizeButtons.forEach(button => {
        button.addEventListener('click', function() {
            const window = this.closest('.window');
            minimizeWindow(window);
        });
    });

    // Window maximize button handlers
    const maximizeButtons = document.querySelectorAll('.maximize-btn');
    maximizeButtons.forEach(button => {
        button.addEventListener('click', function() {
            const window = this.closest('.window');
            maximizeWindow(window);
        });
    });

    // Close window when clicking outside
    document.addEventListener('click', function(e) {
        if (e.target.classList.contains('window')) {
            closeWindow(e.target);
        }
    });

    // Menu item hover effects
    const menuItems = document.querySelectorAll('.menu-item');
    menuItems.forEach(item => {
        item.addEventListener('mouseenter', function() {
            this.style.backgroundColor = 'rgba(0, 0, 0, 0.1)';
        });
        
        item.addEventListener('mouseleave', function() {
            this.style.backgroundColor = 'transparent';
        });
    });
});

function getFolderTypeFromMenuText(menuText) {
    const menuToFolderMap = {
        'Read Me': 'readme',
        'Preferences': 'preferences',
        'Empty Trash': 'trash',
        'Logout': 'logout',
        'Restart': 'restart',
        'Shutdown': 'shutdown',
        'Work': 'work',
        'Open Recent': 'recent',
        'View All': 'view-all',
        'Recent Video': 'videos',
        'My Videos': 'my-videos',
        'Recent Tutorial': 'tutorials'
    };
    
    return menuToFolderMap[menuText] || menuText.toLowerCase().replace(/\s+/g, '-');
}

function openWindow(folderType) {
    // Close any existing windows first
    const existingWindows = document.querySelectorAll('.window');
    existingWindows.forEach(window => {
        window.style.display = 'none';
    });

    // Open the appropriate window
    const windowId = folderType + '-window';
    const window = document.getElementById(windowId);
    
    if (window) {
        window.style.display = 'block';
        window.style.zIndex = getNextZIndex();
        
        // Add click outside to close functionality
        window.addEventListener('click', function(e) {
            if (e.target === window) {
                closeWindow(window);
            }
        });
    } else {
        // For folders without specific windows, show a default message
        showDefaultWindow(folderType);
    }
}

function closeWindow(window) {
    if (window) {
        window.style.display = 'none';
    }
}

function minimizeWindow(window) {
    if (window) {
        window.style.display = 'none';
        // In a real implementation, you might want to add it to a dock or taskbar
    }
}

function maximizeWindow(window) {
    if (window) {
        if (window.classList.contains('maximized')) {
            window.classList.remove('maximized');
            window.style.width = '';
            window.style.height = '';
            window.style.top = '50%';
            window.style.left = '50%';
            window.style.transform = 'translate(-50%, -50%)';
        } else {
            window.classList.add('maximized');
            window.style.width = '90vw';
            window.style.height = '90vh';
            window.style.top = '5vh';
            window.style.left = '5vw';
            window.style.transform = 'none';
        }
    }
}

function showDefaultWindow(folderType) {
    // Create a default window for folders without specific content
    const defaultWindow = document.createElement('div');
    defaultWindow.className = 'window';
    defaultWindow.style.display = 'block';
    defaultWindow.style.zIndex = getNextZIndex();
    
    const folderName = folderType.replace('-', ' ').replace(/\b\w/g, l => l.toUpperCase());
    
    defaultWindow.innerHTML = `
        <div class="window-header">
            <div class="window-controls">
                <span class="close-btn">✕</span>
                <span class="minimize-btn">−</span>
                <span class="maximize-btn">□</span>
            </div>
            <div class="window-title">${folderName}</div>
        </div>
        <div class="window-content">
            <h2>${folderName}</h2>
            <p>This folder contains content related to ${folderName.toLowerCase()}.</p>
            <p>Content coming soon...</p>
        </div>
    `;
    
    document.body.appendChild(defaultWindow);
    
    // Add event listeners to the new window
    const closeBtn = defaultWindow.querySelector('.close-btn');
    const minimizeBtn = defaultWindow.querySelector('.minimize-btn');
    const maximizeBtn = defaultWindow.querySelector('.maximize-btn');
    
    closeBtn.addEventListener('click', () => closeWindow(defaultWindow));
    minimizeBtn.addEventListener('click', () => minimizeWindow(defaultWindow));
    maximizeBtn.addEventListener('click', () => maximizeWindow(defaultWindow));
    
    // Click outside to close
    defaultWindow.addEventListener('click', function(e) {
        if (e.target === defaultWindow) {
            closeWindow(defaultWindow);
        }
    });
}

function getNextZIndex() {
    const windows = document.querySelectorAll('.window');
    let maxZ = 2000;
    windows.forEach(window => {
        const z = parseInt(window.style.zIndex) || 2000;
        if (z > maxZ) maxZ = z;
    });
    return maxZ + 1;
}

// Add some special functionality for specific folders
function handleSpecialFolders(folderType) {
    switch(folderType) {
        case 'shutdown':
            if (confirm('Are you sure you want to shut down?')) {
                alert('Just kidding! Nothing was actually shut down.');
            }
            break;
        case 'restart':
            if (confirm('Are you sure you want to restart?')) {
                alert('Just kidding! Nothing was actually restarted.');
            }
            break;
        case 'logout':
            if (confirm('Are you sure you want to logout?')) {
                alert('Just kidding! Nothing was actually logged out.');
            }
            break;
        case 'trash':
            if (confirm('Are you sure you want to empty the trash?')) {
                alert('Trash emptied! (Not really, this is just a demo)');
            }
            break;
    }
}

// Add keyboard shortcuts
document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
        // Close all windows
        const windows = document.querySelectorAll('.window');
        windows.forEach(window => {
            if (window.style.display === 'block') {
                closeWindow(window);
            }
        });
    }
}); 