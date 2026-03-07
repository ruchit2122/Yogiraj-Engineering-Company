import type React from "react"
import { useState } from "react"

interface FormData {
    firstName: string
    lastName: string
    companyName: string
    companyEmail: string
    contactNumber: string
    country: string
    streetName: string
    landmark1: string
    landmark2: string
    city: string
    state: string
    zipCode: string
}

interface EmergencyFormModalProps {
    isOpen: boolean;
    onClose: () => void;
}

export default function EmergencyFormModal({ isOpen, onClose }: EmergencyFormModalProps) {
    const [formData, setFormData] = useState<FormData>({
        firstName: "",
        lastName: "",
        companyName: "",
        companyEmail: "",
        contactNumber: "",
        country: "",
        streetName: "",
        landmark1: "",
        landmark2: "",
        city: "",
        state: "",
        zipCode: "",
    })

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = e.target
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }))
    }

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        console.log("Form submitted:", formData)
        // Handle form submission here
        onClose();
    }

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 bg-gradient-to-br from-black/80 via-gray-900/90 to-black/80 backdrop-blur-sm flex items-center justify-center p-4 z-50 animate-fadeIn" onClick={onClose}>
            <div className="bg-gradient-to-br from-white via-gray-50 to-white rounded-3xl shadow-2xl max-w-lg w-full max-h-[90vh] overflow-y-auto animate-slideIn backdrop-blur-xl border border-white/20 relative" onClick={e => e.stopPropagation()}>
                <div className="absolute inset-0 bg-gradient-to-br from-yellow-400/5 via-transparent to-yellow-400/5 rounded-3xl pointer-events-none"></div>
                <div className="flex justify-end p-6 relative z-10">
                    <button onClick={onClose} className="text-black hover:text-yellow-600 text-3xl font-bold transition-all duration-300 hover:scale-125 hover:rotate-90 w-10 h-10 flex items-center justify-center rounded-full hover:bg-yellow-400/20">×</button>
                </div>
                <div className="relative mx-6 mb-6 rounded-2xl overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-r from-yellow-400 via-black to-yellow-400 p-1 rounded-2xl">
                        <div className="bg-gradient-to-br from-white to-gray-50 rounded-xl h-full w-full"></div>
                    </div>
                    
                    <div className="relative z-10 p-8">
                        <h1 className="bg-gradient-to-r from-red-500 to-red-700 bg-clip-text text-transparent text-3xl font-bold text-center mb-8 drop-shadow-lg">ONLY EMERGENCY</h1>
                        <form onSubmit={handleSubmit} className="space-y-8">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="group">
                                    <input type="text" name="firstName" placeholder="First Name :" value={formData.firstName} onChange={handleInputChange} className="w-full p-4 border-2 border-gray-300 rounded-xl bg-gradient-to-r from-gray-50 to-white placeholder-gray-600 text-black focus:outline-none focus:border-yellow-500 focus:shadow-lg focus:shadow-yellow-400/20 transition-all duration-300 hover:border-yellow-400 hover:shadow-md group-hover:scale-[1.02]" required />
                                </div>
                                <div className="group">
                                    <input type="text" name="lastName" placeholder="Last Name :" value={formData.lastName} onChange={handleInputChange} className="w-full p-4 border-2 border-gray-300 rounded-xl bg-gradient-to-r from-gray-50 to-white placeholder-gray-600 text-black focus:outline-none focus:border-yellow-500 focus:shadow-lg focus:shadow-yellow-400/20 transition-all duration-300 hover:border-yellow-400 hover:shadow-md group-hover:scale-[1.02]" required />
                                </div>
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="group">
                                    <input type="text" name="companyName" placeholder="Company Name :" value={formData.companyName} onChange={handleInputChange} className="w-full p-4 border-2 border-gray-300 rounded-xl bg-gradient-to-r from-gray-50 to-white placeholder-gray-600 text-black focus:outline-none focus:border-yellow-500 focus:shadow-lg focus:shadow-yellow-400/20 transition-all duration-300 hover:border-yellow-400 hover:shadow-md group-hover:scale-[1.02]" required />
                                </div>
                                <div className="group">
                                    <input type="email" name="companyEmail" placeholder="Company Email :" value={formData.companyEmail} onChange={handleInputChange} className="w-full p-4 border-2 border-gray-300 rounded-xl bg-gradient-to-r from-gray-50 to-white placeholder-gray-600 text-black focus:outline-none focus:border-yellow-500 focus:shadow-lg focus:shadow-yellow-400/20 transition-all duration-300 hover:border-yellow-400 hover:shadow-md group-hover:scale-[1.02]" required />
                                </div>
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="group">
                                    <input type="tel" name="contactNumber" placeholder="Contact Number :" value={formData.contactNumber} onChange={handleInputChange} className="w-full p-4 border-2 border-gray-300 rounded-xl bg-gradient-to-r from-gray-50 to-white placeholder-gray-600 text-black focus:outline-none focus:border-yellow-500 focus:shadow-lg focus:shadow-yellow-400/20 transition-all duration-300 hover:border-yellow-400 hover:shadow-md group-hover:scale-[1.02]" required />
                                </div>
                                <div className="relative group">
                                    <select name="country" value={formData.country} onChange={handleInputChange} className="w-full p-4 border-2 border-gray-300 rounded-xl bg-gradient-to-r from-gray-50 to-white text-gray-600 focus:outline-none focus:border-yellow-500 focus:shadow-lg focus:shadow-yellow-400/20 transition-all duration-300 hover:border-yellow-400 hover:shadow-md appearance-none group-hover:scale-[1.02]" required>
                                        <option value="">Country :</option>
                                        <option value="India">India</option>
                                        <option value="USA">USA</option>
                                        <option value="UK">UK</option>
                                        <option value="Canada">Canada</option>
                                        <option value="Australia">Australia</option>
                                    </select>
                                    <div className="absolute inset-y-0 right-0 flex items-center px-4 pointer-events-none">
                                        <svg className="w-5 h-5 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                                        </svg>
                                    </div>
                                </div>
                            </div>
                            <div className="border-2 border-gray-300 rounded-2xl p-6 bg-gradient-to-br from-gray-50/80 to-white/80 backdrop-blur-sm hover:shadow-lg transition-all duration-300 hover:border-yellow-400">
                                <div className=" font-bold mb-6 text-lg bg-gradient-to-r from-gray-700 to-gray-900 bg-clip-text text-transparent">Address:</div>
                                <div className="mb-6 group">
                                    <input type="text" name="streetName" placeholder="Street Name :" value={formData.streetName} onChange={handleInputChange} className="w-full p-4 border-2 border-gray-300 rounded-xl bg-gradient-to-r from-white to-gray-50 placeholder-gray-600 text-black focus:outline-none focus:border-yellow-500 focus:shadow-lg focus:shadow-yellow-400/20 transition-all duration-300 hover:border-yellow-400 hover:shadow-md group-hover:scale-[1.01]" required />
                                </div>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                                    <div className="group">
                                        <input type="text" name="landmark1" placeholder="Landmark 1 :" value={formData.landmark1} onChange={handleInputChange} className="w-full p-4 border-2 border-gray-300 rounded-xl bg-gradient-to-r from-white to-gray-50 placeholder-gray-600 text-black focus:outline-none focus:border-yellow-500 focus:shadow-lg focus:shadow-yellow-400/20 transition-all duration-300 hover:border-yellow-400 hover:shadow-md group-hover:scale-[1.01]" />
                                    </div>
                                    <div className="group">
                                        <input type="text" name="landmark2" placeholder="Landmark 2 :" value={formData.landmark2} onChange={handleInputChange} className="w-full p-4 border-2 border-gray-300 rounded-xl bg-gradient-to-r from-white to-gray-50 placeholder-gray-600 text-black focus:outline-none focus:border-yellow-500 focus:shadow-lg focus:shadow-yellow-400/20 transition-all duration-300 hover:border-yellow-400 hover:shadow-md group-hover:scale-[1.01]" />
                                    </div>
                                </div>
                                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                                    <div className="group">
                                        <input type="text" name="city" placeholder="City :" value={formData.city} onChange={handleInputChange} className="w-full p-4 border-2 border-gray-300 rounded-xl bg-gradient-to-r from-white to-gray-50 placeholder-gray-600 text-black focus:outline-none focus:border-yellow-500 focus:shadow-lg focus:shadow-yellow-400/20 transition-all duration-300 hover:border-yellow-400 hover:shadow-md group-hover:scale-[1.01]" required />
                                    </div>
                                    <div className="group">
                                        <input type="text" name="state" placeholder="State :" value={formData.state} onChange={handleInputChange} className="w-full p-4 border-2 border-gray-300 rounded-xl bg-gradient-to-r from-white to-gray-50 placeholder-gray-600 text-black focus:outline-none focus:border-yellow-500 focus:shadow-lg focus:shadow-yellow-400/20 transition-all duration-300 hover:border-yellow-400 hover:shadow-md group-hover:scale-[1.01]" required />
                                    </div>
                                    <div className="group">
                                        <input type="text" name="zipCode" placeholder="Zip Code :" value={formData.zipCode} onChange={handleInputChange} className="w-full p-4 border-2 border-gray-300 rounded-xl bg-gradient-to-r from-white to-gray-50 placeholder-gray-600 text-black focus:outline-none focus:border-yellow-500 focus:shadow-lg focus:shadow-yellow-400/20 transition-all duration-300 hover:border-yellow-400 hover:shadow-md group-hover:scale-[1.01]" required />
                                    </div>
                                </div>
                            </div>
                            <div className="text-center bg-gradient-to-r from-gray-600 to-gray-800 bg-clip-text text-transparent font-mono text-sm font-semibold">
                                +91 85141 03344 Plot No. C/2/6, GIDC Vithal Udyognagar-388121
                            </div>
                            <div className="flex justify-center pt-6">
                                <button type="submit" className="relative bg-gradient-to-r from-yellow-400 to-yellow-500 hover:from-yellow-500 hover:to-yellow-600 text-black font-bold py-4 px-10 rounded-2xl shadow-2xl transition-all duration-500 transform hover:scale-110 hover:shadow-yellow-400/50 hover:shadow-2xl group">
                                    <span className="relative z-10">Submit Emergency Request</span>
                                    <div className="absolute inset-0 bg-gradient-to-r from-yellow-300 to-yellow-400 rounded-2xl blur opacity-0 group-hover:opacity-75 transition-opacity duration-500"></div>
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            <style>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            backdrop-filter: blur(0px);
          }
          to {
            opacity: 1;
            backdrop-filter: blur(8px);
          }
        }
        @keyframes slideIn {
          from {
            opacity: 0;
            transform: scale(0.8) translateY(-40px) rotateX(10deg);
          }
          to {
            opacity: 1;
            transform: scale(1) translateY(0) rotateX(0deg);
          }
        }
        .animate-fadeIn {
          animation: fadeIn 0.5s cubic-bezier(0.4, 0, 0.2, 1);
        }
        .animate-slideIn {
          animation: slideIn 0.6s cubic-bezier(0.34, 1.56, 0.64, 1);
        }
      `}</style>
        </div>
    )
}
