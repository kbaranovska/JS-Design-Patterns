class ChineseSocket {
    plugIn() {
        const voltage = this.getVoltage();
        const shapeType = this.getShapeType();

        return `Chinese socket was pluged in. Voltage is: ${voltage}; Shape is: ${shapeType}`;
    }

    getVoltage() {
        return "110-120V";
    }

    getShapeType() {
        return "Type A";
    }
}

export default ChineseSocket;