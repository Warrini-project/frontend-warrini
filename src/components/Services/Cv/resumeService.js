const API_BASE_URL = "http://127.0.0.1:8080/api/resume/generate";

export const generateResume = async (formData, templateIndex, profileImage) => {
    const formDataToSend = new FormData();
    
    if (profileImage) {
        formDataToSend.append("profilePicture", profileImage);
    }
    
    formDataToSend.append("templateIndex", templateIndex);
    
    // Convert formData to a JSON string and set the content type explicitly
    const resumeDtoBlob = new Blob([JSON.stringify(formData)], {
        type: 'application/json'
    });
    formDataToSend.append("resumeDto", resumeDtoBlob);

    const token = localStorage.getItem("accessToken");
    if (!token) {
        console.error("No access token found. Please log in.");
        throw new Error("Unauthorized: No access token found.");
    }

    try {
        const response = await fetch(API_BASE_URL, {
            method: "POST",
            headers: {
                'Authorization': `Bearer ${token}`
            },
            body: formDataToSend
        });

        if (!response.ok) {
            const errorText = await response.text();
            throw new Error(`HTTP error! status: ${response.status}, message: ${errorText}`);
        }
        //console.log("Resume created successfully", response);
        
        return await response.blob();
    } catch (error) {
        console.error("Error generating resume:", error);
        throw error;
    }
}