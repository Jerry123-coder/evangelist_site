import React, { useState, useRef, useEffect } from 'react';
import { FaChevronLeft, FaChevronRight, FaFilePdf, FaPrint } from 'react-icons/fa';
import { useReactToPrint } from 'react-to-print';
import jsPDF from 'jspdf';
import 'jspdf-autotable';
import churchIcon from '../assets/churchicon.jpg';
import countries from '../data/countries';

const Registration = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [progress, setProgress] = useState(0);
  const [showSummary, setShowSummary] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const formRef = useRef();
  const summaryRef = useRef(null);
  const [formData, setFormData] = useState({
    // Basic Info
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    
    // Address
    location: '',
    houseNumber: '',
    region: '',
    country: 'GH', // Default to Ghana
    description: '',
    
    // Status
    maritalStatus: '',
    employmentStatus: '',
    
    // Religious Info
    baptism: false,
    firstCommunion: false,
    confirmation: false,
    matrimony: false,
    holyOrder: false,
    
    // Family Info
    fatherMember: false,
    fatherName: '',
    fatherChurch: '',
    motherMember: false,
    motherName: '',
    motherChurch: '',
    hasChildren: false
  });

  const updateFormData = (field, value) => {
    setFormData({
      ...formData,
      [field]: value
    });
  };

  const nextStep = () => {
    const newStep = currentStep + 1;
    setCurrentStep(newStep);
    setProgress(calculateProgress(newStep));
  };

  const prevStep = () => {
    const newStep = currentStep - 1;
    setCurrentStep(newStep);
    setProgress(calculateProgress(newStep));
  };

  const calculateProgress = (step) => {
    const totalSteps = 5;
    const progressPerStep = 100 / totalSteps;
    return Math.min(Math.round(step * progressPerStep), 100);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowSummary(true);
    setProgress(100);
  };

  const handlePrint = useReactToPrint({
    content: () => formRef.current,
    documentTitle: `${formData.firstName}_${formData.lastName}_Membership_Form`,
  });

  const generatePDF = () => {
    const doc = new jsPDF();
    
    // Add church logo
    const img = new Image();
    img.src = churchIcon;
    
    try {
      // Add church name and title
      doc.setFontSize(18);
      doc.text('St John the Evangelist Catholic Church, Adenta', 105, 15, { align: 'center' });
      doc.setFontSize(14);
      doc.text('MEMBERSHIP REGISTRATION FORM', 105, 25, { align: 'center' });
      
      // Try to add the logo
      img.onload = function() {
        doc.addImage(img, 'JPEG', 10, 10, 30, 30);
        
        // Continue with the rest of the PDF generation
        addPDFContent(doc);
        
        // Save the PDF
        doc.save('membership_form.pdf');
      };
      
      img.onerror = function() {
        console.error('Error loading church logo');
        // Continue without the logo
        addPDFContent(doc);
        doc.save('membership_form.pdf');
      };
      
      // Set a timeout in case the image loading takes too long
      setTimeout(() => {
        if (!img.complete) {
          console.warn('Image loading timeout, continuing without logo');
          addPDFContent(doc);
          doc.save('membership_form.pdf');
        }
      }, 3000);
      
    } catch (error) {
      console.error('Error generating PDF:', error);
      // Continue without the logo
      addPDFContent(doc);
      doc.save('membership_form.pdf');
    }
    
    function addPDFContent(doc) {
      // Personal Information
      doc.setFontSize(12);
      doc.text('PERSONAL INFORMATION:', 20, 40);
      
      doc.setFontSize(10);
      doc.text(`Full Name: ${formData.firstName} ${formData.lastName}`, 20, 50);
      doc.text(`Email: ${formData.email}`, 20, 60);
      doc.text(`Phone: ${formData.phone}`, 20, 70);
      
      // Address Information
      doc.setFontSize(12);
      doc.text('ADDRESS INFORMATION:', 20, 85);
      
      doc.setFontSize(10);
      doc.text(`Residential Location: ${formData.location}`, 20, 95);
      doc.text(`House Number: ${formData.houseNumber}`, 20, 105);
      doc.text(`Region/State: ${formData.region}`, 20, 115);
      
      // Add country with flag
      const selectedCountry = countries.find(c => c.code === formData.country);
      doc.text(`Country: ${selectedCountry ? `${selectedCountry.flag} ${selectedCountry.name}` : formData.country}`, 20, 125);
      
      if (formData.description) {
        doc.text(`Additional Description: ${formData.description}`, 20, 135);
      }
      
      // Status
      doc.setFontSize(12);
      doc.text('STATUS INFORMATION:', 20, 155);
      
      doc.setFontSize(10);
      doc.text(`Marital Status: ${formData.maritalStatus}`, 20, 165);
      doc.text(`Employment Status: ${formData.employmentStatus}`, 20, 175);
      
      // Religious Info
      doc.setFontSize(12);
      doc.text('RELIGIOUS INFORMATION:', 20, 195);
      
      doc.setFontSize(10);
      doc.text(`Baptism: ${formData.baptism ? 'Yes' : 'No'}`, 20, 205);
      doc.text(`First Communion: ${formData.firstCommunion ? 'Yes' : 'No'}`, 20, 215);
      doc.text(`Confirmation: ${formData.confirmation ? 'Yes' : 'No'}`, 20, 225);
      doc.text(`Holy Matrimony: ${formData.matrimony ? 'Yes' : 'No'}`, 20, 235);
      doc.text(`Holy Order: ${formData.holyOrder ? 'Yes' : 'No'}`, 20, 245);
      
      // Add a new page for family information
      doc.addPage();
      
      // Add the church logo to the second page as well (smaller)
      doc.addImage(img, 'JPEG', 14, 10, 15, 15);
      
      // Continue with Family Info on the new page
      doc.setFontSize(12);
      doc.text('FAMILY INFORMATION:', 40, 20);
      
      doc.setFontSize(10);
      doc.text(`Father's Name: ${formData.fatherName || 'N/A'}`, 14, 35);
      doc.text(`Father is a member: ${formData.fatherMember ? 'Yes' : 'No'}`, 14, 45);
      doc.text(`Father's Place of Worship: ${formData.fatherChurch || 'N/A'}`, 14, 55);
      
      doc.text(`Mother's Name: ${formData.motherName || 'N/A'}`, 14, 70);
      doc.text(`Mother is a member: ${formData.motherMember ? 'Yes' : 'No'}`, 14, 80);
      doc.text(`Mother's Place of Worship: ${formData.motherChurch || 'N/A'}`, 14, 90);
      
      doc.text(`Has Children: ${formData.hasChildren ? 'Yes' : 'No'}`, 14, 105);
      
      // Add footer with date
      const today = new Date();
      const dateStr = today.toLocaleDateString();
      doc.setFontSize(10);
      doc.setTextColor(100, 100, 100);
      doc.text(`Generated on: ${dateStr}`, 14, 280);
      doc.text('St John the Evangelist Catholic Church, Adenta', 105, 280, { align: 'center' });
    }
  };

  const renderStep = () => {
    switch(currentStep) {
      case 1:
        return <BasicInfo formData={formData} updateFormData={updateFormData} />;
      case 2:
        return <Address formData={formData} updateFormData={updateFormData} />;
      case 3:
        return <Status formData={formData} updateFormData={updateFormData} />;
      case 4:
        return <ReligiousInfo formData={formData} updateFormData={updateFormData} />;
      case 5:
        return <Family formData={formData} updateFormData={updateFormData} />;
      default:
        return <BasicInfo formData={formData} updateFormData={updateFormData} />;
    }
  };

  const FormSummary = () => (
    <div ref={formRef} className="space-y-6 text-gray-800">
      <h3 className="text-2xl font-bold text-center mb-6 text-gray-800">Registration Summary</h3>
      
      <div className="bg-gray-50 p-6 rounded-lg">
        <h3 className="text-xl font-semibold mb-4 text-gray-800">Basic Information</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <p className="text-gray-600">First Name:</p>
            <p className="font-medium text-gray-800">{formData.firstName}</p>
          </div>
          <div>
            <p className="text-gray-600">Last Name:</p>
            <p className="font-medium text-gray-800">{formData.lastName}</p>
          </div>
          <div>
            <p className="text-gray-600">Email Address:</p>
            <p className="font-medium text-gray-800">{formData.email}</p>
          </div>
          <div>
            <p className="text-gray-600">Phone Number:</p>
            <p className="font-medium text-gray-800">{formData.phone}</p>
          </div>
        </div>
      </div>
      
      <div className="bg-gray-50 p-6 rounded-lg">
        <h3 className="text-xl font-semibold mb-4 text-gray-800">Address Information</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="md:col-span-2">
            <p className="text-gray-600">Location/Town:</p>
            <p className="font-medium text-gray-800">{formData.location}</p>
          </div>
          <div>
            <p className="text-gray-600">House Number:</p>
            <p className="font-medium text-gray-800">{formData.houseNumber}</p>
          </div>
          <div>
            <p className="text-gray-600">Region/State:</p>
            <p className="font-medium text-gray-800">{formData.region}</p>
          </div>
          <div>
            <p className="text-gray-600">Country:</p>
            <p className="font-medium text-gray-800">{formData.country}</p>
          </div>
          {formData.description && (
            <div className="md:col-span-2">
              <p className="text-gray-600">Additional Description:</p>
              <p className="font-medium text-gray-800">{formData.description}</p>
            </div>
          )}
        </div>
      </div>
      
      <div className="bg-gray-50 p-6 rounded-lg">
        <h3 className="text-xl font-semibold mb-4 text-gray-800">Status Information</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <p className="text-gray-600">Marital Status:</p>
            <p className="font-medium text-gray-800">{formData.maritalStatus}</p>
          </div>
          <div>
            <p className="text-gray-600">Employment Status:</p>
            <p className="font-medium text-gray-800">{formData.employmentStatus}</p>
          </div>
        </div>
      </div>
      
      <div className="bg-gray-50 p-6 rounded-lg">
        <h3 className="text-xl font-semibold mb-4 text-gray-800">Religious Information</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <p className="text-gray-600">Baptism:</p>
            <p className="font-medium text-gray-800">{formData.baptism ? 'Yes' : 'No'}</p>
          </div>
          <div>
            <p className="text-gray-600">First Communion:</p>
            <p className="font-medium text-gray-800">{formData.firstCommunion ? 'Yes' : 'No'}</p>
          </div>
          <div>
            <p className="text-gray-600">Confirmation:</p>
            <p className="font-medium text-gray-800">{formData.confirmation ? 'Yes' : 'No'}</p>
          </div>
          <div>
            <p className="text-gray-600">Holy Matrimony:</p>
            <p className="font-medium text-gray-800">{formData.matrimony ? 'Yes' : 'No'}</p>
          </div>
          <div>
            <p className="text-gray-600">Holy Order:</p>
            <p className="font-medium text-gray-800">{formData.holyOrder ? 'Yes' : 'No'}</p>
          </div>
        </div>
      </div>
      
      <div className="bg-gray-50 p-6 rounded-lg">
        <h3 className="text-xl font-semibold mb-4 text-gray-800">Family Information</h3>
        <div className="space-y-6">
          <div>
            <h4 className="text-lg font-medium mb-2 text-gray-800">Father's Information</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <p className="text-gray-600">Father's Name:</p>
                <p className="font-medium text-gray-800">{formData.fatherName}</p>
              </div>
              <div>
                <p className="text-gray-600">Father is a member:</p>
                <p className="font-medium text-gray-800">{formData.fatherMember ? 'Yes' : 'No'}</p>
              </div>
              <div>
                <p className="text-gray-600">Father's Place of Worship:</p>
                <p className="font-medium text-gray-800">{formData.fatherChurch}</p>
              </div>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-medium mb-2 text-gray-800">Mother's Information</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <p className="text-gray-600">Mother's Name:</p>
                <p className="font-medium text-gray-800">{formData.motherName}</p>
              </div>
              <div>
                <p className="text-gray-600">Mother is a member:</p>
                <p className="font-medium text-gray-800">{formData.motherMember ? 'Yes' : 'No'}</p>
              </div>
              <div>
                <p className="text-gray-600">Mother's Place of Worship:</p>
                <p className="font-medium text-gray-800">{formData.motherChurch}</p>
              </div>
            </div>
          </div>
          
          <div>
            <p className="text-gray-600">Has Children:</p>
            <p className="font-medium text-gray-800">{formData.hasChildren ? 'Yes' : 'No'}</p>
          </div>
        </div>
      </div>
    </div>
  );

  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
      const currentProgress = window.scrollY;
      setScrollProgress(currentProgress / totalScroll);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const interpolateColor = (progress) => {
    // Using a blue color palette
    const startColor = { r: 239, g: 246, b: 255 }; // blue-50
    const midColor = { r: 147, g: 197, b: 253 }; // blue-300
    const endColor = { r: 30, g: 58, b: 138 }; // blue-900

    let r, g, b;
    if (progress < 0.5) {
      // Interpolate between start and mid color
      const t = progress * 2;
      r = startColor.r + (midColor.r - startColor.r) * t;
      g = startColor.g + (midColor.g - startColor.g) * t;
      b = startColor.b + (midColor.b - startColor.b) * t;
    } else {
      // Interpolate between mid and end color
      const t = (progress - 0.5) * 2;
      r = midColor.r + (endColor.r - midColor.r) * t;
      g = midColor.g + (endColor.g - midColor.g) * t;
      b = midColor.b + (endColor.b - midColor.b) * t;
    }

    return `rgb(${Math.round(r)}, ${Math.round(g)}, ${Math.round(b)})`;
  };

  return (
    <div className="min-h-screen pb-16"
      style={{ 
        backgroundColor: interpolateColor(scrollProgress),
        backgroundImage: `radial-gradient(rgba(30, 58, 138, 0.15) 0.5px, transparent 0.5px)`,
        backgroundSize: '16px 16px',
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/40 to-transparent pointer-events-none" />
      {/* Hero Section with Background Image */}
      <div 
        className="relative h-80 bg-cover bg-center"
        style={{ 
          backgroundImage: `url('/src/assets/forms-image.jpg')`,
          backgroundSize: 'cover'
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="relative z-10 text-white text-center md:text-left w-full max-w-[65rem] mx-auto px-4">
            <span className="text-lg md:text-2xl block mb-3 md:mb-2 font-semibold opacity-75">
              Join Our Community
            </span>
            <span className="text-2xl md:text-3xl lg:text-6xl font-bold block">
              Membership Registration
            </span>
          </div>
        </div>
      </div>

      {/* Form Container */}
      <div className="w-full max-w-[65rem] mx-auto px-4 md:px-8 -mt-10 relative z-20">
        <div className="bg-white rounded-lg shadow-lg p-6 md:p-8">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold text-gray-800">Welcome {formData.firstName ? formData.firstName : 'Evangelist'}!</h2>
            <p className="text-gray-600">Kindly update your profile, this wouldn't take much time.</p>
          </div>

          {!showSummary ? (
            <>
              {/* Progress Steps */}
              <div className="flex justify-center mb-8">
                <div className="flex space-x-4 md:space-x-8">
                  <button 
                    onClick={() => setCurrentStep(1)} 
                    className={`px-4 py-2 rounded-full ${currentStep === 1 ? 'bg-green-500 text-white' : 'bg-gray-200 text-gray-700'}`}
                  >
                    BASIC INFO
                  </button>
                  <button 
                    onClick={() => setCurrentStep(2)} 
                    className={`px-4 py-2 rounded-full ${currentStep === 2 ? 'bg-green-500 text-white' : 'bg-gray-200 text-gray-700'}`}
                  >
                    ADDRESS
                  </button>
                  <button 
                    onClick={() => setCurrentStep(3)} 
                    className={`px-4 py-2 rounded-full ${currentStep === 3 ? 'bg-green-500 text-white' : 'bg-gray-200 text-gray-700'}`}
                  >
                    STATUS
                  </button>
                  <button 
                    onClick={() => setCurrentStep(4)} 
                    className={`px-4 py-2 rounded-full ${currentStep === 4 ? 'bg-green-500 text-white' : 'bg-gray-200 text-gray-700'}`}
                  >
                    RELIGIOUS INFO
                  </button>
                  <button 
                    onClick={() => setCurrentStep(5)} 
                    className={`px-4 py-2 rounded-full ${currentStep === 5 ? 'bg-green-500 text-white' : 'bg-gray-200 text-gray-700'}`}
                  >
                    FAMILY
                  </button>
                </div>
              </div>

              {/* Form Content */}
              <form onSubmit={handleSubmit}>
                {renderStep()}

                {/* Navigation Buttons */}
                <div className="flex justify-between mt-8">
                  {currentStep > 1 && (
                    <button 
                      type="button"
                      onClick={prevStep}
                      className="bg-gray-300 text-gray-700 px-6 py-2 rounded-lg flex items-center"
                    >
                      <FaChevronLeft className="mr-2" /> PREVIOUS
                    </button>
                  )}
                  
                  {currentStep < 5 ? (
                    <button 
                      type="button"
                      onClick={nextStep}
                      className="bg-green-500 text-white px-6 py-2 rounded-lg flex items-center ml-auto"
                    >
                      NEXT <FaChevronRight className="ml-2" />
                    </button>
                  ) : (
                    <button 
                      type="submit"
                      className="bg-green-500 text-white px-6 py-2 rounded-lg ml-auto"
                    >
                      FINISH
                    </button>
                  )}
                </div>
              </form>
            </>
          ) : (
            <>
              <FormSummary />
              
              <div className="flex justify-center mt-8 space-x-4">
                <button 
                  onClick={handlePrint}
                  className="bg-blue-500 text-white px-6 py-2 rounded-lg flex items-center"
                >
                  <FaPrint className="mr-2" /> Print Form
                </button>
                <button 
                  onClick={generatePDF}
                  className="bg-red-500 text-white px-6 py-2 rounded-lg flex items-center"
                >
                  <FaFilePdf className="mr-2" /> Download PDF
                </button>
                <button 
                  onClick={() => {
                    setShowSummary(false);
                    setCurrentStep(1);
                  }}
                  className="bg-gray-300 text-gray-700 px-6 py-2 rounded-lg"
                >
                  Edit Form
                </button>
              </div>
            </>
          )}
        </div>
      </div>

      {/* Progress Bar */}
      <div className="fixed bottom-0 left-0 right-0 bg-blue-600 text-white p-2 z-50">
        <div className="w-full max-w-[65rem] mx-auto">
          <div className="flex items-center">
            <span className="mr-4">Completion Progress ({progress}%):</span>
            <div className="flex-1 bg-blue-300 rounded-full h-4">
              <div 
                className="bg-green-500 h-4 rounded-full" 
                style={{ width: `${progress}%` }}
              ></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Placeholder components for each form step
const BasicInfo = ({ formData, updateFormData }) => (
  <div className="space-y-6">
    <h3 className="text-xl font-semibold mb-4">Basic Information</h3>
    
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <div>
        <label htmlFor="firstName" className="block text-gray-700 mb-2">First Name</label>
        <input
          type="text"
          id="firstName"
          value={formData.firstName}
          onChange={(e) => updateFormData('firstName', e.target.value)}
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-800"
          required
        />
      </div>
      
      <div>
        <label htmlFor="lastName" className="block text-gray-700 mb-2">Last Name</label>
        <input
          type="text"
          id="lastName"
          value={formData.lastName}
          onChange={(e) => updateFormData('lastName', e.target.value)}
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-800"
          required
        />
      </div>
      
      <div>
        <label htmlFor="email" className="block text-gray-700 mb-2">Email Address</label>
        <input
          type="email"
          id="email"
          value={formData.email}
          onChange={(e) => updateFormData('email', e.target.value)}
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-800"
          required
        />
      </div>
      
      <div>
        <label htmlFor="phone" className="block text-gray-700 mb-2">Phone Number</label>
        <input
          type="tel"
          id="phone"
          value={formData.phone}
          onChange={(e) => updateFormData('phone', e.target.value)}
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-800"
          required
        />
      </div>
    </div>
  </div>
);

const Address = ({ formData, updateFormData }) => (
  <div className="space-y-6">
    <h3 className="text-xl font-semibold mb-4">Address Information</h3>
    <p className="text-gray-600 mb-4">Are you close or a bit farther from us?</p>
    
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <div className="md:col-span-2">
        <label htmlFor="location" className="block text-gray-700 mb-2">
          <span className="flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
            </svg>
            Residential Location / Town
          </span>
        </label>
        <input
          type="text"
          id="location"
          value={formData.location}
          onChange={(e) => updateFormData('location', e.target.value)}
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-800"
          required
        />
      </div>
      
      <div>
        <label htmlFor="houseNumber" className="block text-gray-700 mb-2">
          <span className="flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
              <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
            </svg>
            House Number
          </span>
        </label>
        <input
          type="text"
          id="houseNumber"
          value={formData.houseNumber}
          onChange={(e) => updateFormData('houseNumber', e.target.value)}
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-800"
        />
      </div>
      
      <div>
        <label htmlFor="region" className="block text-gray-700 mb-2">
          <span className="flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
              <path d="M3 3a1 1 0 000 2h11a1 1 0 100-2H3zM3 7a1 1 0 000 2h5a1 1 0 000-2H3zM3 11a1 1 0 100 2h4a1 1 0 100-2H3zM13 16a1 1 0 102 0v-5.586l1.293 1.293a1 1 0 001.414-1.414l-3-3a1 1 0 00-1.414 0l-3 3a1 1 0 101.414 1.414L13 10.414V16z" />
            </svg>
            Region / State
          </span>
        </label>
        <input
          type="text"
          id="region"
          value={formData.region}
          onChange={(e) => updateFormData('region', e.target.value)}
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-800"
        />
      </div>

      <div>
        <label htmlFor="country" className="block text-gray-700 mb-2">
          <span className="flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M3 6a3 3 0 013-3h10a1 1 0 01.8 1.6L14.25 8l2.55 3.4A1 1 0 0116 13H6a1 1 0 00-1 1v3a1 1 0 11-2 0V6z" clipRule="evenodd" />
            </svg>
            Country
          </span>
        </label>
        <select
          id="country"
          value={formData.country}
          onChange={(e) => updateFormData('country', e.target.value)}
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-800"
        >
          {countries.map((country) => (
            <option key={country.code} value={country.code}>
              {country.flag} {country.name}
            </option>
          ))}
        </select>
      </div>
      
      <div className="md:col-span-2">
        <label htmlFor="description" className="block text-gray-700 mb-2">Any extra description about where you live? (optional)</label>
        <textarea
          id="description"
          value={formData.description}
          onChange={(e) => updateFormData('description', e.target.value)}
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 h-24 text-gray-800"
          placeholder="Example: 'The second curve from the Mallam junction, immediately after the traffic light, the second house from the left'"
        ></textarea>
      </div>
    </div>
    
    <p className="text-red-500 text-sm mt-4">* Kindly fill all fields marked in red</p>
  </div>
);

const Status = ({ formData, updateFormData }) => (
  <div className="space-y-6">
    <h3 className="text-xl font-semibold mb-4">Status Information</h3>
    
    <div className="mb-8">
      <p className="text-gray-700 font-medium mb-4">What's your marital status?</p>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div className="flex items-center">
          <input
            type="radio"
            id="single"
            name="maritalStatus"
            value="Single"
            checked={formData.maritalStatus === 'Single'}
            onChange={(e) => updateFormData('maritalStatus', e.target.value)}
            className="mr-2"
          />
          <label htmlFor="single" className="text-gray-700">Single</label>
        </div>
        
        <div className="flex items-center">
          <input
            type="radio"
            id="married"
            name="maritalStatus"
            value="Married"
            checked={formData.maritalStatus === 'Married'}
            onChange={(e) => updateFormData('maritalStatus', e.target.value)}
            className="mr-2"
          />
          <label htmlFor="married" className="text-gray-700">Married</label>
        </div>
        
        <div className="flex items-center">
          <input
            type="radio"
            id="separated"
            name="maritalStatus"
            value="Separated"
            checked={formData.maritalStatus === 'Separated'}
            onChange={(e) => updateFormData('maritalStatus', e.target.value)}
            className="mr-2"
          />
          <label htmlFor="separated" className="text-gray-700">Separated</label>
        </div>
        
        <div className="flex items-center">
          <input
            type="radio"
            id="divorced"
            name="maritalStatus"
            value="Divorced"
            checked={formData.maritalStatus === 'Divorced'}
            onChange={(e) => updateFormData('maritalStatus', e.target.value)}
            className="mr-2"
          />
          <label htmlFor="divorced" className="text-gray-700">Divorced</label>
        </div>
        
        <div className="flex items-center">
          <input
            type="radio"
            id="widowed"
            name="maritalStatus"
            value="Widowed"
            checked={formData.maritalStatus === 'Widowed'}
            onChange={(e) => updateFormData('maritalStatus', e.target.value)}
            className="mr-2"
          />
          <label htmlFor="widowed" className="text-gray-700">Widowed</label>
        </div>
      </div>
    </div>
    
    <div>
      <p className="text-gray-700 font-medium mb-4">What's your employment status?</p>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div className="flex items-center">
          <input
            type="radio"
            id="employed"
            name="employmentStatus"
            value="Employed"
            checked={formData.employmentStatus === 'Employed'}
            onChange={(e) => updateFormData('employmentStatus', e.target.value)}
            className="mr-2"
          />
          <label htmlFor="employed" className="text-gray-700">Employed</label>
        </div>
        
        <div className="flex items-center">
          <input
            type="radio"
            id="unemployed"
            name="employmentStatus"
            value="Unemployed"
            checked={formData.employmentStatus === 'Unemployed'}
            onChange={(e) => updateFormData('employmentStatus', e.target.value)}
            className="mr-2"
          />
          <label htmlFor="unemployed" className="text-gray-700">Unemployed</label>
        </div>
        
        <div className="flex items-center">
          <input
            type="radio"
            id="student"
            name="employmentStatus"
            value="Student"
            checked={formData.employmentStatus === 'Student'}
            onChange={(e) => updateFormData('employmentStatus', e.target.value)}
            className="mr-2"
          />
          <label htmlFor="student" className="text-gray-700">Student</label>
        </div>
        
        <div className="flex items-center">
          <input
            type="radio"
            id="retired"
            name="employmentStatus"
            value="Retired"
            checked={formData.employmentStatus === 'Retired'}
            onChange={(e) => updateFormData('employmentStatus', e.target.value)}
            className="mr-2"
          />
          <label htmlFor="retired" className="text-gray-700">Retired</label>
        </div>
        
        <div className="flex items-center">
          <input
            type="radio"
            id="selfEmployed"
            name="employmentStatus"
            value="Self Employed"
            checked={formData.employmentStatus === 'Self Employed'}
            onChange={(e) => updateFormData('employmentStatus', e.target.value)}
            className="mr-2"
          />
          <label htmlFor="selfEmployed" className="text-gray-700">Self Employed</label>
        </div>
      </div>
    </div>
  </div>
);

const ReligiousInfo = ({ formData, updateFormData }) => (
  <div className="space-y-6">
    <h3 className="text-xl font-semibold mb-4">Religious Information</h3>
    <p className="text-gray-700 mb-6">Have you had any of the following sacraments?</p>
    
    <div className="space-y-4">
      <div className="flex items-center justify-between border-b pb-3">
        <span className="text-gray-700">Baptism</span>
        <label className="relative inline-flex items-center cursor-pointer">
          <input 
            type="checkbox" 
            className="sr-only peer"
            checked={formData.baptism}
            onChange={(e) => updateFormData('baptism', e.target.checked)}
          />
          <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
        </label>
      </div>
      
      <div className="flex items-center justify-between border-b pb-3">
        <span className="text-gray-700">First Communion</span>
        <label className="relative inline-flex items-center cursor-pointer">
          <input 
            type="checkbox" 
            className="sr-only peer"
            checked={formData.firstCommunion}
            onChange={(e) => updateFormData('firstCommunion', e.target.checked)}
          />
          <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
        </label>
      </div>
      
      <div className="flex items-center justify-between border-b pb-3">
        <span className="text-gray-700">Confirmation</span>
        <label className="relative inline-flex items-center cursor-pointer">
          <input 
            type="checkbox" 
            className="sr-only peer"
            checked={formData.confirmation}
            onChange={(e) => updateFormData('confirmation', e.target.checked)}
          />
          <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
        </label>
      </div>
      
      <div className="flex items-center justify-between border-b pb-3">
        <span className="text-gray-700">Holy Matrimony</span>
        <label className="relative inline-flex items-center cursor-pointer">
          <input 
            type="checkbox" 
            className="sr-only peer"
            checked={formData.matrimony}
            onChange={(e) => updateFormData('matrimony', e.target.checked)}
          />
          <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
        </label>
      </div>
      
      <div className="flex items-center justify-between border-b pb-3">
        <span className="text-gray-700">Holy Order</span>
        <label className="relative inline-flex items-center cursor-pointer">
          <input 
            type="checkbox" 
            className="sr-only peer"
            checked={formData.holyOrder}
            onChange={(e) => updateFormData('holyOrder', e.target.checked)}
          />
          <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
        </label>
      </div>
    </div>
  </div>
);

const Family = ({ formData, updateFormData }) => (
  <div className="space-y-6">
    <h3 className="text-xl font-semibold mb-4">Family Information</h3>
    <p className="text-gray-700 mb-6">Let's continue with Parents information</p>
    
    <div className="border-b pb-6 mb-6">
      <h4 className="text-lg font-medium mb-4">Father's information</h4>
      
      <div className="flex items-center justify-between mb-4">
        <span className="text-gray-700">Is your father a member of this church?</span>
        <label className="relative inline-flex items-center cursor-pointer">
          <input 
            type="checkbox" 
            className="sr-only peer"
            checked={formData.fatherMember}
            onChange={(e) => updateFormData('fatherMember', e.target.checked)}
          />
          <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
        </label>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="fatherName" className="block text-gray-700 mb-2">Father's Full Name</label>
          <input
            type="text"
            id="fatherName"
            value={formData.fatherName}
            onChange={(e) => updateFormData('fatherName', e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-800"
          />
        </div>
        
        <div>
          <label htmlFor="fatherChurch" className="block text-gray-700 mb-2">Father's Place of worship</label>
          <input
            type="text"
            id="fatherChurch"
            value={formData.fatherChurch}
            onChange={(e) => updateFormData('fatherChurch', e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-800"
          />
        </div>
      </div>
    </div>
    
    <div className="border-b pb-6 mb-6">
      <h4 className="text-lg font-medium mb-4">Mother's information</h4>
      
      <div className="flex items-center justify-between mb-4">
        <span className="text-gray-700">Is your mother a member of this church?</span>
        <label className="relative inline-flex items-center cursor-pointer">
          <input 
            type="checkbox" 
            className="sr-only peer"
            checked={formData.motherMember}
            onChange={(e) => updateFormData('motherMember', e.target.checked)}
          />
          <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
        </label>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="motherName" className="block text-gray-700 mb-2">Mother's Full Name</label>
          <input
            type="text"
            id="motherName"
            value={formData.motherName}
            onChange={(e) => updateFormData('motherName', e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-800"
          />
        </div>
        
        <div>
          <label htmlFor="motherChurch" className="block text-gray-700 mb-2">Mother's Place of worship</label>
          <input
            type="text"
            id="motherChurch"
            value={formData.motherChurch}
            onChange={(e) => updateFormData('motherChurch', e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-800"
          />
        </div>
      </div>
    </div>
    
    <div>
      <h4 className="text-lg font-medium mb-4">Let's conclude with your Children's information</h4>
      
      <div className="flex items-center justify-between mb-6">
        <span className="text-gray-700">Do you have children?</span>
        <label className="relative inline-flex items-center cursor-pointer">
          <input 
            type="checkbox" 
            className="sr-only peer"
            checked={formData.hasChildren}
            onChange={(e) => updateFormData('hasChildren', e.target.checked)}
          />
          <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
        </label>
      </div>
      
      {formData.hasChildren && (
        <div className="bg-gray-50 p-4 rounded-lg">
          <p className="text-gray-600 mb-4">You can add your children's information in the next step.</p>
        </div>
      )}
    </div>
  </div>
);

export default Registration;
