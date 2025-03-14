import React, { useEffect, useState } from 'react';
import { jsPDF } from 'jspdf';
import churchIcon from '../assets/churchicon.jpg';

const MembershipForm = () => {
  const [isGenerating, setIsGenerating] = useState(false);
  const [isGenerated, setIsGenerated] = useState(false);

  useEffect(() => {
    // Auto-generate the PDF when the page loads
    generateFillablePDF();
  }, []);

  const generateFillablePDF = () => {
    setIsGenerating(true);
    
    // Create a new PDF document
    const doc = new jsPDF();
    
    // Add church name and title
    doc.setFontSize(18);
    doc.setFont('helvetica', 'bold');
    doc.text('St John the Evangelist Catholic Church, Adenta', 105, 15, { align: 'center' });
    
    // Add subheading
    doc.setFontSize(14);
    doc.setFont('helvetica', 'italic');
    doc.text('Membership Registration Form', 105, 25, { align: 'center' });
    
    // Add church logo
    const img = new Image();
    img.src = churchIcon;
    
    // Convert the image to base64 and add it to the PDF
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');
    canvas.width = img.width;
    canvas.height = img.height;
    
    // Create a function to add the image once it's loaded
    img.onload = function() {
      // Draw image on canvas
      ctx.drawImage(img, 0, 0, img.width, img.height);
      
      // Get base64 representation
      const imgData = canvas.toDataURL('image/jpeg');
      
      // Add image to PDF (centered, with appropriate sizing)
      doc.addImage(imgData, 'JPEG', 90, 30, 25, 25);
      
      // Add divider line
      doc.setDrawColor(0, 0, 0);
      doc.setLineWidth(0.5);
      doc.line(14, 60, 196, 60);
      
      // Basic Info Section
      doc.setFontSize(14);
      doc.setFont('helvetica', 'bold');
      doc.text('Basic Information', 14, 70);
      
      doc.setFontSize(12);
      doc.setFont('helvetica', 'normal');
      
      // Add form fields
      doc.text('First Name:', 14, 80);
      doc.setDrawColor(0, 0, 0);
      doc.setLineWidth(0.1);
      doc.rect(60, 76, 130, 8);
      
      doc.text('Last Name:', 14, 90);
      doc.rect(60, 86, 130, 8);
      
      doc.text('Email:', 14, 100);
      doc.rect(60, 96, 130, 8);
      
      doc.text('Phone:', 14, 110);
      doc.rect(60, 106, 130, 8);
      
      // Address Section
      doc.setFontSize(14);
      doc.setFont('helvetica', 'bold');
      doc.text('Address Information', 14, 125);
      
      doc.setFontSize(12);
      doc.setFont('helvetica', 'normal');
      
      doc.text('Location/Town:', 14, 135);
      doc.rect(60, 131, 130, 8);
      
      doc.text('House Number:', 14, 145);
      doc.rect(60, 141, 130, 8);
      
      doc.text('Region/State:', 14, 155);
      doc.rect(60, 151, 130, 8);
      
      doc.text('Additional Description:', 14, 165);
      doc.rect(60, 161, 130, 8);
      
      // Status Section
      doc.setFontSize(14);
      doc.setFont('helvetica', 'bold');
      doc.text('Status Information', 14, 180);
      
      doc.setFontSize(12);
      doc.setFont('helvetica', 'normal');
      
      doc.text('Marital Status:', 14, 190);
      doc.rect(60, 186, 130, 8);
      
      doc.text('Employment Status:', 14, 200);
      doc.rect(60, 196, 130, 8);
      
      // Religious Info Section
      doc.setFontSize(14);
      doc.setFont('helvetica', 'bold');
      doc.text('Religious Information', 14, 215);
      
      doc.setFontSize(12);
      doc.setFont('helvetica', 'normal');
      
      // Checkboxes for sacraments
      doc.text('Baptism:', 14, 225);
      doc.rect(60, 221, 8, 8);
      
      doc.text('First Communion:', 14, 235);
      doc.rect(60, 231, 8, 8);
      
      doc.text('Confirmation:', 14, 245);
      doc.rect(60, 241, 8, 8);
      
      doc.text('Holy Matrimony:', 14, 255);
      doc.rect(60, 251, 8, 8);
      
      doc.text('Holy Order:', 14, 265);
      doc.rect(60, 261, 8, 8);
      
      // Add a new page for family information
      doc.addPage();
      
      // Add the church logo to the second page as well (smaller)
      doc.addImage(imgData, 'JPEG', 14, 10, 15, 15);
      
      // Continue with Family Info on the new page
      doc.setFontSize(14);
      doc.setFont('helvetica', 'bold');
      doc.text('Family Information', 40, 20);
      
      doc.setFontSize(12);
      doc.setFont('helvetica', 'normal');
      
      doc.text('Father\'s Name:', 14, 35);
      doc.rect(60, 31, 130, 8);
      
      doc.text('Father is a member:', 14, 45);
      doc.rect(60, 41, 8, 8); // Checkbox
      
      doc.text('Father\'s Place of Worship:', 14, 55);
      doc.rect(60, 51, 130, 8);
      
      doc.text('Mother\'s Name:', 14, 70);
      doc.rect(60, 66, 130, 8);
      
      doc.text('Mother is a member:', 14, 80);
      doc.rect(60, 76, 8, 8); // Checkbox
      
      doc.text('Mother\'s Place of Worship:', 14, 90);
      doc.rect(60, 86, 130, 8);
      
      doc.text('Has Children:', 14, 105);
      doc.rect(60, 101, 8, 8); // Checkbox
      
      // Add submission instructions
      doc.setFontSize(14);
      doc.setFont('helvetica', 'bold');
      doc.text('Submission Instructions', 14, 125);
      
      doc.setFontSize(12);
      doc.setFont('helvetica', 'normal');
      doc.text('Please complete this form and submit it to the church office in one of the following ways:', 14, 135);
      doc.text('1. Email the completed form to: stjohnevangelist@church.org', 14, 145);
      doc.text('2. Print and deliver to the church office during office hours', 14, 155);
      doc.text('3. Submit online through our website at www.stjohnevangelist.org', 14, 165);
      
      // Add footer with date
      const today = new Date();
      const dateStr = today.toLocaleDateString();
      doc.setFontSize(10);
      doc.setTextColor(100, 100, 100);
      doc.text(`Generated on: ${dateStr}`, 14, 280);
      doc.text('St John the Evangelist Catholic Church, Adenta', 105, 280, { align: 'center' });
      
      // Save the PDF
      doc.save('St_John_Evangelist_Membership_Form.pdf');
      
      setIsGenerating(false);
      setIsGenerated(true);
    };
  };

  return (
    <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-blue-50 to-blue-100">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Membership Form Download</h1>
          <p className="text-lg text-gray-600">
            Download a fillable PDF version of our membership registration form
          </p>
        </div>
        
        <div className="bg-white shadow-lg rounded-lg overflow-hidden">
          <div className="p-6 sm:p-10">
            <div className="flex items-center justify-center mb-6">
              <img src={churchIcon} alt="Church Logo" className="h-16 w-auto" />
            </div>
            
            <h2 className="text-2xl font-semibold text-gray-800 text-center mb-6">
              St John the Evangelist Catholic Church
            </h2>
            
            <div className="mb-8 text-center">
              <p className="text-gray-600 mb-4">
                Our membership form is available as a fillable PDF that you can download, 
                complete electronically, and submit to the church.
              </p>
              
              {isGenerating ? (
                <div className="flex flex-col items-center justify-center">
                  <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500 mb-4"></div>
                  <p className="text-gray-700">Generating your form...</p>
                </div>
              ) : isGenerated ? (
                <div className="text-center">
                  <div className="mb-4 text-green-600">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <p className="text-gray-700 mb-4">Your form has been generated and the download should have started automatically.</p>
                  <button
                    onClick={generateFillablePDF}
                    className="inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                  >
                    Download Again
                  </button>
                </div>
              ) : (
                <button
                  onClick={generateFillablePDF}
                  className="inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                >
                  Download Form
                </button>
              )}
            </div>
            
            <div className="border-t border-gray-200 pt-6">
              <h3 className="text-lg font-medium text-gray-900 mb-3">Submission Instructions</h3>
              <ul className="list-disc pl-5 text-gray-600 space-y-2">
                <li>Fill out all fields in the PDF form</li>
                <li>Save the completed form to your computer</li>
                <li>Email the form to <span className="text-blue-600">stjohnevangelist@church.org</span></li>
                <li>Alternatively, print and bring the completed form to the church office</li>
              </ul>
            </div>
            
            <div className="mt-8 text-center">
              <p className="text-sm text-gray-500">
                If you have any questions or need assistance, please contact the church office at (123) 456-7890
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MembershipForm;
