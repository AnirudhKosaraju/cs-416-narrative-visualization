# cs-416-narrative-visualization

## Overview
Welcome to the cs-416-narrative-visualization project! This project is designed to provide a robust framework for creating meaningful and interactive narrative visualizations. The repository is built with scalability and user-friendliness in mind, demonstrating different investment strategies through S&P 500 data visualization.

## Contents
- **index.html**: The main visualization application built with D3.js.
- **data/**: Contains historical S&P 500 data (SPX.csv) used for the visualization.
- **README.md**: This documentation file.

## Installation
To get started with the project, follow these steps:

1. Clone the repository:
   ```bash
   git clone https://github.com/AnirudhKosaraju/cs-416-narrative-visualization.git
   ```
2. Navigate into the project directory:
   ```bash
   cd cs-416-narrative-visualization
   ```
3. Since this is a static web application, you can either:
   - Open `index.html` directly in your web browser, or
   - Serve it using a local HTTP server (recommended):
   ```bash
   # Using Python 3
   python -m http.server 8000
   
   # Using Python 2
   python -m SimpleHTTPServer 8000
   
   # Using Node.js (if you have it installed)
   npx serve .
   ```
4. If using a local server, open your browser and navigate to:
   ```
   http://localhost:8000
   ```

## Usage
After opening the application in your browser, you can:

1. **Explore Interactive Views**: Use the navigation buttons to switch between different visualization views:
   - View 1: S&P 500 performance over time
   - View 2: S&P 500 + Worst Speculator portfolio
   - View 3: S&P 500 + Best Speculator portfolio  
   - View 4: S&P 500 + Dollar-Cost Averaging (DCA) strategy

2. **Interactive Elements**: Hover over data points to see detailed annotations with investment information.

## Features
- Interactive narrative visualization demonstrating investment strategies
- Responsive D3.js-based charts with smooth transitions
- Multiple comparative views showing different market timing approaches
- Built-in annotations and tooltips for enhanced user understanding
- Clean, modern interface optimized for educational purposes

## Contributing
We welcome contributions! To contribute, please follow these steps:
- Fork the repository.
- Create a new branch (e.g., `feature/your-feature`).
- Commit your changes with clear messages.
- Submit a pull request for review.

Please refer to our detailed [Contributing Guidelines](CONTRIBUTING.md) for more information.

## License
This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.