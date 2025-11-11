import { useState } from 'react'
import './App.css'

type Page = 'landing' | 'docs' | 'demo'

function App() {
  const [currentPage, setCurrentPage] = useState<Page>('landing')
  const [selectedFile, setSelectedFile] = useState<File | null>(null)
  const [isLoading, setIsLoading] = useState(false)
  const [resultImages, setResultImages] = useState<string[]>([])
  const [error, setError] = useState<string | null>(null)

  const handleFileUpload = async (file: File) => {
    if (!file) return

    setIsLoading(true)
    setError(null)
    setResultImages([])

    try {
      const formData = new FormData()
      formData.append('image', file)

      const response = await fetch('https://033e3304c31b.ngrok-free.app/visualize', {
        method: 'POST',
        body: formData,
      })

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`)
      }

      // Check if response is JSON (multiple images) or binary (single image)
      const contentType = response.headers.get('content-type')
      
      if (contentType?.includes('application/json')) {
        // Handle multiple images response
        const result = await response.json()
        if (result.images && Array.isArray(result.images)) {
          setResultImages(result.images)
        } else {
          throw new Error('Invalid response format')
        }
      } else {
        // Handle single image response (blob)
        const blob = await response.blob()
        const imageUrl = URL.createObjectURL(blob)
        setResultImages([imageUrl])
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Upload failed')
      console.error('Upload error:', err)
    } finally {
      setIsLoading(false)
    }
  }

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0]
    if (file) {
      setSelectedFile(file)
      handleFileUpload(file)
    }
  }

  const LandingPage = () => (
    <div className="landing-page">
      <h1 className="main-title">University of Nevada, Reno</h1>
      <p className="subtitle">
        project by: Prastik Gyawali
        </p>
      
      <div className="button-container">
        <button 
          className="nav-button docs-button" 
          onClick={() => setCurrentPage('docs')}
        >
          Read Docs
        </button>
      </div>
    </div>
  )

  const DocsPage = () => (
    <div className="docs-page">
      <button className="back-button" onClick={() => setCurrentPage('landing')}>
        ← Back to Home
      </button>
      <div className="docs-content">
        <h1>ROS2 Docker Environment Documentation</h1>
        <div className="markdown-content">
          <p>This project provides a <strong>containerized ROS2 Humble environment</strong> with essential packages for robotics development and web-based robot control.</p>
          
          <h2>Docker Configuration Overview</h2>
          
          <h2>Docker Configuration Overview</h2>
          
          <h3>Base Image</h3>
          <p>The container is built from the official <strong>ROS2 Humble</strong> minimal image (<code>ros:humble-ros-core</code>), providing a lightweight foundation for ROS2 development.</p>
          
          <h3>Environment Setup</h3>
          <p>The Dockerfile sets <code>DEBIAN_FRONTEND=noninteractive</code> to ensure smooth package installation without interactive prompts during the build process.</p>
          
          <h3>Installed Packages</h3>
          
          <h4>ROS2 Demo Nodes</h4>
          <p><strong>ros-humble-demo-nodes-cpp:</strong> Provides C++ example nodes for learning ROS2 concepts including publishers, subscribers, services, and actions.</p>
          
          <h4>Turtlesim Package</h4>
          <p><strong>ros-humble-turtlesim:</strong> The classic turtle simulation for ROS2, perfect for:</p>
          <ul>
            <li><em>Learning ROS2 basics</em> - Topics, services, and parameter concepts</li>
            <li><em>Testing robot control</em> - Movement commands and teleoperation</li>
            <li><em>Visualization</em> - Simple 2D robot simulation environment</li>
          </ul>
          
          <h4>Rosbridge Server</h4>
          <p><strong>ros-humble-rosbridge-server:</strong> Enables web-based robot control through:</p>
          <ul>
            <li><em>WebSocket communication</em> - Real-time bidirectional data exchange</li>
            <li><em>Web interface development</em> - Build robot control dashboards in browsers</li>
            <li><em>Cross-platform integration</em> - Connect web applications to ROS2 ecosystem</li>
          </ul>
          
          <h2>Container Entry Point</h2>
          
          <p>The container uses <code>/ros_entrypoint.sh</code> as the entry point, which:</p>
          <ul>
            <li>Sources the ROS2 environment automatically</li>
            <li>Sets up necessary environment variables</li>
            <li>Provides a <strong>bash shell</strong> for interactive development</li>
          </ul>
          
          <h2>Usage Scenarios</h2>
          
          <h3>Development Environment</h3>
          <p>Perfect for developers who want to:</p>
          <ul>
            <li><strong>Learn ROS2:</strong> Use turtlesim and demo nodes for hands-on learning</li>
            <li><strong>Prototype quickly:</strong> Skip local ROS2 installation complexity</li>
            <li><strong>Ensure consistency:</strong> Same environment across different machines</li>
          </ul>
          
          <h3>Web Integration</h3>
          <p>With rosbridge-server, you can:</p>
          <ul>
            <li><em>Build web UIs</em> for robot control and monitoring</li>
            <li><em>Create mobile apps</em> that communicate with robots</li>
            <li><em>Develop cloud-based</em> robotics solutions</li>
          </ul>
          
          <h2>Getting Started</h2>
          
          <p>To use this containerized environment:</p>
          
          <div className="equation">
            <p><strong>docker build -t ros2-humble .</strong></p>
          </div>
          
          <div className="equation">
            <p><strong>docker run -it --rm ros2-humble</strong></p>
          </div>
          
          <p>This setup provides a <em>complete ROS2 development environment</em> with web connectivity capabilities, making it ideal for both <strong>learning robotics concepts</strong> and <strong>building production-ready robotic applications</strong>.</p>
        </div>
      </div>
    </div>
  )

  const DemoPage = () => (
    <div className="demo-page">
      <button className="back-button" onClick={() => setCurrentPage('landing')}>
        ← Back to Home
      </button>
      <div className="demo-container">
        <div className="demo-left">
          <h2 className="demo-title">Improving Shape Awareness and Interpretability in Deep Networks Using Geometric Moments</h2>
          <div className="demo-link">
            <a href="https://openaccess.thecvf.com/content/CVPR2023W/DLGC/papers/Singh_Improving_Shape_Awareness_and_Interpretability_in_Deep_Networks_Using_Geometric_CVPRW_2023_paper.pdf" target="_blank" rel="noopener noreferrer">
              Paper Link
            </a>
          </div>
          <div className="upload-section">
            <input 
              type="file" 
              id="file-upload" 
              className="file-input"
              accept="image/*"
              onChange={handleFileChange}
            />
            <label htmlFor="file-upload" className="upload-button">
              {isLoading ? 'Uploading...' : 'Upload Image'}
            </label>
            
            {error && (
              <div className="error-message">
                Error: {error}
              </div>
            )}
          </div>
        </div>
        
        <div className="demo-right">
          {isLoading && (
            <div className="loader-container">
              <div className="loader"></div>
              <p>Processing your image...</p>
            </div>
          )}
          
          {resultImages.length > 0 && !isLoading && (
            <div className="results-container">
              <h3>Results</h3>
              <div className="images-grid">
                {resultImages.map((imageUrl, index) => (
                  <div key={index} className="result-image-container">
                    <img 
                      src={imageUrl} 
                      alt={`Result ${index + 1}`}
                      className="result-image"
                    />
                    <p>Result {index + 1}</p>
                  </div>
                ))}
              </div>
            </div>
          )}
          
          {!isLoading && resultImages.length === 0 && !error && (
            <div className="placeholder">
              <p>Upload an image to see the DGM visualization results</p>
            </div>
          )}
        </div>
      </div>
    </div>
  )

  const renderCurrentPage = () => {
    switch (currentPage) {
      case 'docs':
        return <DocsPage />
      case 'demo':
        return <DemoPage />
      default:
        return <LandingPage />
    }
  }

  return (
    <div className="app">
      {renderCurrentPage()}
    </div>
  )
}

export default App
