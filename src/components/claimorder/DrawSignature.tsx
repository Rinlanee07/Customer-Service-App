import React, { useEffect, useRef } from 'react';
import SignaturePad from 'signature_pad';
import { Button } from '../ui/button';

interface SignatureCanvasProps {
    onSave: (signatureDataURL: string) => void;
    onClear: () => void;
    value?: string; // Added to accept the initial value (signature data URL)
}

const SignatureCanvas: React.FC<SignatureCanvasProps> = ({ onSave, onClear, value }) => {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const signaturePadRef = useRef<SignaturePad | null>(null);
    const timeoutRef = useRef<NodeJS.Timeout | null>(null);

    useEffect(() => {
        // Initialize SignaturePad when component mounts
        if (canvasRef.current) {
            signaturePadRef.current = new SignaturePad(canvasRef.current);
        }

        // Clean up SignaturePad when component unmounts
        return () => {
            if (signaturePadRef.current) {
                signaturePadRef.current.off(); // Unbind all event handlers
                signaturePadRef.current.clear(); // Clear the canvas
            }
            if (timeoutRef.current) {
                clearTimeout(timeoutRef.current); // Clear any pending save timeout
            }
        };
    }, []);

    // Load the signature from the value prop (data URL) when it changes
    useEffect(() => {
        if (signaturePadRef.current && value) {
            const image = new Image();
            image.src = value;
            image.onload = () => {
                if (canvasRef.current) {
                    const canvas = canvasRef.current;
                    const context = canvas.getContext('2d');
                    if (context) {
                        context.clearRect(0, 0, canvas.width, canvas.height); // Clear the canvas before drawing
                        context.drawImage(image, 0, 0, canvas.width, canvas.height); // Draw the image
                    }
                }
            };
        }
    }, [value]);

    useEffect(() => {
        const canvas = canvasRef.current;

        const checkIfDrawingStopped = () => {
            if (signaturePadRef.current && !signaturePadRef.current.isEmpty()) {
                timeoutRef.current = setTimeout(() => {
                    handleSave();
                }, 1000); // Adjust timeout duration as needed
            }
        };

        const handleMouseMove = () => {
            if (timeoutRef.current) {
                clearTimeout(timeoutRef.current);
            }
            checkIfDrawingStopped();
        };

        if (canvas) {
            canvas.addEventListener('mousemove', handleMouseMove);
            canvas.addEventListener('touchmove', handleMouseMove);
            canvas.addEventListener('mouseup', handleMouseMove);
            canvas.addEventListener('touchend', handleMouseMove);
        }

        return () => {
            if (timeoutRef.current) {
                clearTimeout(timeoutRef.current);
            }
            if (canvas) {
                canvas.removeEventListener('mousemove', handleMouseMove);
                canvas.removeEventListener('touchmove', handleMouseMove);
                canvas.removeEventListener('mouseup', handleMouseMove);
                canvas.removeEventListener('touchend', handleMouseMove);
            }
        };
    }, []);

    const handleClear = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        event.preventDefault();
        if (signaturePadRef.current) {
            signaturePadRef.current.clear();
            onClear();
            if (timeoutRef.current) {
                clearTimeout(timeoutRef.current); // Clear any pending save timeout when clearing
            }
        }
    };

    const handleSave = () => {
        if (signaturePadRef.current) {
            const signatureDataURL: string = signaturePadRef.current.toDataURL();
            onSave(signatureDataURL);
        }
    };

    return (
        <div className='flex justify-center flex-col space-y-2'>
            <div className='border rounded-md'>
                <canvas ref={canvasRef}></canvas>
            </div>
            <div className='flex justify-center'>
                <Button onClick={handleClear}>Clear</Button>
            </div>
        </div>
    );
};

export default SignatureCanvas;
