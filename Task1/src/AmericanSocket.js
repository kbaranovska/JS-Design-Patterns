class AmericanSocket {
    plugIn() {
        const voltage = this.getVoltage();
        const shapeType = this.getShapeType();

        return `American socket was pluged in. Voltage is: ${voltage}; Shape is: ${shapeType}`;
    }

    getVoltage() {
        return "120V";
    }

    getShapeType() {
        return "Type C";
    }
}

export default AmericanSocket;