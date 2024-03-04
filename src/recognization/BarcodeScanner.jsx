import React, { useState, useEffect } from 'react';

const BarcodeScanner = () => {
    const [scannerData, setScannerData] = useState('');
    const [connectionStatus, setConnectionStatus] = useState('Disconnected');
    const [errorOccurred, setErrorOccurred] = useState(false);
    const [isConnecting, setIsConnecting] = useState(false);

    const requestSerialPort = async () => {
        try {
            if (isConnecting || connectionStatus === 'Connected') {
                return; // Prevent multiple connections or reconnection while connecting
            }

            setIsConnecting(true);

            const port = await navigator.serial.requestPort();
            await port.open({ baudRate: 9600 });

            setConnectionStatus('Connected');
            setErrorOccurred(false);

            const decoder = new TextDecoderStream();
            const readableStreamClosed = port.readable.pipeTo(decoder.writable);
            const readableStream = decoder.readable;

            const reader = readableStream.getReader();

            const readData = async () => {
                try {
                    while (true) {
                        const { value, done } = await reader.read();

                        if (done) {
                            break;
                        }

                        setScannerData(value);
                    }
                } catch (error) {
                    console.error('Error reading data:', error);
                    setErrorOccurred(true);
                    setConnectionStatus('Disconnected');
                }
            };

            // Listen for disconnection
            port.addEventListener('disconnect', () => {
                setErrorOccurred(true);
                setConnectionStatus('Disconnected');
                setIsConnecting(false);
            });

            readData();
        } catch (error) {
            console.error('Error connecting to the serial port:', error);
            setErrorOccurred(true);
            setConnectionStatus('Disconnected');
        } finally {
            setIsConnecting(false);
        }
    };

    const handleReset = () => {
        setScannerData('');
    };

    useEffect(() => {
        if ('serial' in navigator) {
            const connectButton = document.getElementById('connectButton');

            if (connectButton) {
                // Attach the requestSerialPort function to a user gesture, like a button click
                connectButton.addEventListener('click', requestSerialPort);

                // Remove the event listener when the component is unmounted
                return () => {
                    connectButton.removeEventListener('click', requestSerialPort);
                };
            } else {
                console.error('Button element not found');
            }
        } else {
            console.error('Web Serial API not supported in this browser');
        }
    }, []);

    return (
        <div className="content bg-light">
            <div className="row m-4">
                <div className="col-lg-12">
                    <div className="card rounded-4 m-3 shadow-lg bg-body rounded">
                        <div className="card-header text-center Headingcolorcard">
                            <h2>FSL Scanner </h2>
                        </div>
                        <div className="card-body text-center Headingcolor">
                            <div className="row">
                                <div className="col-4">
                                    <button id="connectButton" className='btn btn-primary'>Connect to Serial Port</button>
                                    {errorOccurred && <p style={{ color: 'red' }}>Error: The device has been lost.</p>}
                                </div>
                                {connectionStatus === 'Disconnected' && !errorOccurred && !isConnecting && <p>Device Disconnected</p>}
                            </div>
                            <div className="row mt-3">
                                {connectionStatus === 'Connected' && !errorOccurred &&
                                    <div className="col-4">
                                        <input
                                            type="text"
                                            value={scannerData}
                                            readOnly={true}
                                            className="form-control"
                                            disabled
                                        />
                                    </div>
                                }
                                <div className="col-4">
                                    <button className="btn btn-primary" onClick={handleReset}>
                                        Clear
                                    </button>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BarcodeScanner;
