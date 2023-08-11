// At some point this should load a model so that we aren't driving a rectangle
class Car {
    scene: THREE.Scene
    CarObject: THREE.Group
    constructor(scene: THREE.Scene) {
        this.scene = scene
        this.init()
    }

    init() {
        this.CarObject = new THREE.Group()

        const body = new THREE.Mesh(
            new THREE.BoxGeometry(10, 3, 5),
            new THREE.MeshStandardMaterial({ "color": "red" })
        )
        body.name = 'CarBody'
        body.position.y = 7
        this.CarObject.add(body)

        const backWheel = this.createWheels()
        backWheel.name = 'BackWheel'
        backWheel.position.y = 6
        backWheel.position.x = 3
        backWheel.position.z = 0
        this.CarObject.add(backWheel)

        const frontWheel = this.createWheels()
        frontWheel.name = 'FrontWheel'
        frontWheel.position.y = 6
        frontWheel.position.x = -3
        frontWheel.position.z = 0
        this.CarObject.add(frontWheel)

        this.scene.add(this.CarObject)
    }

    createWheels() {
        const geometry = new THREE.BoxGeometry(3, 3, 7)
        const material = new THREE.MeshLambertMaterial({ color: 0x333333 })
        const wheel = new THREE.Mesh(geometry, material)
        return wheel
    }
}
