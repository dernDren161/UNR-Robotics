# UNR Robotics - ROS2 Web Interface

**University of Nevada, Reno Robotics Project**  
*Project by: Prastik Gyawali*

A modern React-based web interface for ROS2 robotics applications, featuring containerized ROS2 Humble environment with web connectivity capabilities.

## 🎥 Demo Video


<video src="https://github.com/user-attachments/assets/d906e229-d62c-4949-8571-f438cd3befe2" controls width="600">
 Demo Video
</video>


> **Note**: To add the demo video to this repository, copy your screen recording:
> ```bash
> cp "/Users/prastik/Documents/Screen Recording 2025-11-11 at 9.52.18 PM.mov" "./assets/demo-video.mov"
> ```

![Demo Preview](https://img.shields.io/badge/Demo-Video_Available-brightgreen?style=for-the-badge&logo=play-circle)

## 🚀 Features

- **Interactive Web Interface**: Modern React application with TypeScript
- **ROS2 Integration**: Containerized ROS2 Humble environment
- **Web Robotics**: Rosbridge server for web-based robot control
- **Educational Tools**: Turtlesim and demo nodes for learning
- **Responsive Design**: Mobile-friendly interface with beautiful UI

## 🐳 Docker Environment

This project provides a **containerized ROS2 Humble environment** with essential packages for robotics development and web-based robot control.

### Base Configuration

- **Base Image**: `ros:humble-ros-core` - Official minimal ROS2 Humble image
- **Environment**: Non-interactive Debian frontend for smooth installation
- **Entry Point**: Automatic ROS2 environment sourcing with bash shell

### Installed ROS2 Packages

#### 🎯 ROS2 Demo Nodes (`ros-humble-demo-nodes-cpp`)
C++ example nodes for learning ROS2 concepts:
- Publishers and subscribers
- Services and actions
- Parameter handling
- Node lifecycle management

#### 🐢 Turtlesim (`ros-humble-turtlesim`)
The classic turtle simulation for ROS2, perfect for:
- **Learning ROS2 basics** - Topics, services, and parameter concepts
- **Testing robot control** - Movement commands and teleoperation
- **Visualization** - Simple 2D robot simulation environment

#### 🌐 Rosbridge Server (`ros-humble-rosbridge-server`)
Enables web-based robot control through:
- **WebSocket communication** - Real-time bidirectional data exchange
- **Web interface development** - Build robot control dashboards in browsers
- **Cross-platform integration** - Connect web applications to ROS2 ecosystem

## 🛠️ Quick Start

### Using Docker

1. **Build the container:**
   ```bash
   docker build -t unr-robotics .
   ```

2. **Run the container:**
   ```bash
   docker run -it --rm unr-robotics
   ```

3. **For web connectivity (rosbridge):**
   ```bash
   docker run -it --rm -p 9090:9090 unr-robotics
   ```

### Development Setup

1. **Install dependencies:**
   ```bash
   npm install
   # or
   pnpm install
   ```

2. **Start development server:**
   ```bash
   npm run dev
   # or
   pnpm dev
   ```

3. **Build for production:**
   ```bash
   npm run build
   # or
   pnpm build
   ```

## 📚 Project Structure

```
├── src/
│   ├── App.tsx          # Main application component
│   ├── App.css          # Styling and themes
│   └── assets/          # Static assets
├── Dockerfile           # ROS2 container configuration
├── package.json         # Node.js dependencies
└── README.md           # Project documentation
```

## 🎯 Usage Scenarios

### Educational Use
- **ROS2 Learning**: Use turtlesim and demo nodes for hands-on experience
- **Concept Demonstration**: Visualize robotics concepts through web interface
- **Rapid Prototyping**: Skip complex local ROS2 installation

### Development Applications
- **Web UIs**: Build robot control and monitoring dashboards
- **Mobile Apps**: Create mobile applications for robot interaction
- **Cloud Robotics**



cs**: Develop cloud-based robotics solutions
- **Research Projects**: Academic robotics research and development

## 🔧 Technology Stack

- **Frontend**: React 19 with TypeScript
- **Build Tool**: Vite for fast development and building
- **Robotics**: ROS2 Humble with rosbridge-server
- **Containerization**: Docker for consistent deployment
- **Styling**: Modern CSS with responsive design

## 📖 Documentation

The application includes comprehensive documentation covering:
- ROS2 Docker environment setup
- Package explanations and usage
- Container entry point configuration
- Development and deployment guides

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is part of the University of Nevada, Reno robotics program.

## 🔗 Links

- [ROS2 Documentation](https://docs.ros.org/en/humble/)
- [React Documentation](https://react.dev/)
- [Vite Documentation](https://vite.dev/)
- [TypeScript Documentation](https://www.typescriptlang.org/)

---

*Built with ❤️ at University of Nevada, Reno*
