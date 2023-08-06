class App {
    scene: THREE.Scene
    camera: THREE.Camera
    constructor() {
        this.init()
    }
    
    init() {
        this.scene = new THREE.Scene()

        // Setup camera
        this.camera = new THREE.PerspectiveCamera(
            70, // FOV
            window.innerWidth / window.innerHeight, // Aspect ratio 
            1, // Near plane
            1000  // Far plane
        )
        this.camera.position.set(10, 10, 10)
        this.camera.lookAt(0, 0, 0)

        // Setup renderer
        const renderer = new THREE.WebGLRenderer({ antialias: true })
        console.log(renderer)
        renderer.setSize(window.innerWidth, window.innerHeight)
        renderer.render(this.scene, this.camera)
        renderer.setAnimationLoop(() => renderer.render(this.scene, this.camera))
        document.body.appendChild(renderer.domElement)

        this.createLights()
        this.createEnviornment()
    }

    createLights() {
        const ambientLight = new THREE.AmbientLight(0xffffff, 0.6)
        this.scene.add(ambientLight)
        console.log(ambientLight)
    }

    createEnviornment() {
        // Eventually load a more complex scene from a json file or something
        const floor = new THREE.Mesh(
            new THREE.PlaneGeometry(100, 100),
            new THREE.MeshStandardMaterial({ "color": "grey", "side": THREE.DoubleSide })
        )
        floor.rotateX(Math.PI / 2)
        floor.position.y = 0
        console.log(floor)
        this.scene.add(floor)
    }
}

let APP = null

window.onload = () => APP = new App()