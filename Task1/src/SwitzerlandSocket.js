class SwitzerlandSocket {
    plugIn() {
        const voltage = this.getVoltage();
        const shapeType = this.getShapeType();

        return `Switzerland socket was pluged in. Voltage is: ${voltage}; Shape is: ${shapeType}`;
    }

    getVoltage() {
        return "230V";
    }

    getShapeType() {
        return "Type J";
    }
}

export default SwitzerlandSocket;