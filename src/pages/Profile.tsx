import React, { useState } from "react";
import { useQuery, useMutation } from "@tanstack/react-query";
import {
  TabComponent,
  TabItemDirective,
  TabItemsDirective,
} from "@syncfusion/ej2-react-navigations";
import { TextBoxComponent } from "@syncfusion/ej2-react-inputs";
import { UploaderComponent } from "@syncfusion/ej2-react-inputs";

// Mock API call - replace with your real API
const fetchUserProfile = async () => {
  // Simulating API delay
  await new Promise((resolve) => setTimeout(resolve, 800));

  // Mock data
  return {
    id: "USR12345",
    username: "johndoe",
    firstName: "John",
    lastName: "Doe",
    email: "john.doe@example.com",
    phone: "(555) 123-4567",
    position: "Loan Officer",
    department: "Underwriting",
    avatar: "https://randomuser.me/api/portraits/men/32.jpg",
    joinDate: "2021-03-15",
    recentActivities: [
      { id: 1, action: "Approved loan #5923", date: "2023-06-15 09:30 AM" },
      { id: 2, action: "Rejected loan #5924", date: "2023-06-14 02:45 PM" },
      {
        id: 3,
        action: "Updated profile information",
        date: "2023-06-10 11:15 AM",
      },
      { id: 4, action: "Created new loan record", date: "2023-06-08 10:00 AM" },
    ],
  };
};

const saveUserProfile = async (profileData: any) => {
  // Simulating API delay
  await new Promise((resolve) => setTimeout(resolve, 1000));

  // In a real app, you would send the data to the server
  console.log("Saving profile data:", profileData);
  return profileData;
};

const Profile: React.FC = () => {
  const { data: profile, isLoading } = useQuery({
    queryKey: ["userProfile"],
    queryFn: fetchUserProfile,
  });

  const [editedProfile, setEditedProfile] = useState<any>(null);

  React.useEffect(() => {
    if (profile) {
      setEditedProfile({ ...profile });
    }
  }, [profile]);

  const mutation = useMutation({
    mutationFn: saveUserProfile,
    onSuccess: () => {
      // Show success notification
    },
  });

  const handleInputChange = (e: any) => {
    const { name, value } = e.target;
    setEditedProfile((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    mutation.mutate(editedProfile);
  };

  if (isLoading || !editedProfile) {
    return (
      <div className="flex justify-center items-center h-64">
        Loading profile data...
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto">
      <div className="bg-white rounded-lg shadow-md overflow-hidden">
        <div className="bg-blue-500 p-6 flex flex-col md:flex-row items-center">
          <div className="mb-4 md:mb-0 md:mr-6">
            <img
              src={profile.avatar}
              alt="Profile"
              className="w-24 h-24 rounded-full border-4 border-white"
            />
          </div>
          <div className="text-center md:text-left text-white">
            <h1 className="text-2xl font-bold">
              {profile.firstName} {profile.lastName}
            </h1>
            <p className="opacity-90">
              {profile.position} • {profile.department}
            </p>
            <p className="text-sm opacity-80">
              Member since {new Date(profile.joinDate).toLocaleDateString()}
            </p>
          </div>
        </div>

        <TabComponent className="p-6">
          <TabItemsDirective>
            <TabItemDirective
              header={{ text: "Personal Information" }}
              content={
                <form onSubmit={handleSubmit} className="space-y-6 pt-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        First Name
                      </label>
                      <TextBoxComponent
                        name="firstName"
                        value={editedProfile.firstName}
                        change={(e) => handleInputChange(e)}
                        placeholder="First Name"
                        floatLabelType="Auto"
                        cssClass="w-full"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Last Name
                      </label>
                      <TextBoxComponent
                        name="lastName"
                        value={editedProfile.lastName}
                        change={(e) => handleInputChange(e)}
                        placeholder="Last Name"
                        floatLabelType="Auto"
                        cssClass="w-full"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Email
                      </label>
                      <TextBoxComponent
                        name="email"
                        value={editedProfile.email}
                        change={(e) => handleInputChange(e)}
                        placeholder="Email"
                        floatLabelType="Auto"
                        cssClass="w-full"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Phone
                      </label>
                      <TextBoxComponent
                        name="phone"
                        value={editedProfile.phone}
                        change={(e) => handleInputChange(e)}
                        placeholder="Phone"
                        floatLabelType="Auto"
                        cssClass="w-full"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Position
                      </label>
                      <TextBoxComponent
                        name="position"
                        value={editedProfile.position}
                        change={(e) => handleInputChange(e)}
                        placeholder="Position"
                        floatLabelType="Auto"
                        cssClass="w-full"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Department
                      </label>
                      <TextBoxComponent
                        name="department"
                        value={editedProfile.department}
                        change={(e) => handleInputChange(e)}
                        placeholder="Department"
                        floatLabelType="Auto"
                        cssClass="w-full"
                      />
                    </div>
                  </div>

                  <div className="flex justify-end">
                    <Button
                      cssClass="e-primary"
                      content="Save Changes"
                      isPrimary={true}
                      type="submit"
                    />
                  </div>
                </form>
              }
            />

            <TabItemDirective
              header={{ text: "Profile Picture" }}
              content={
                <div className="pt-4">
                  <div className="flex flex-col items-center">
                    <img
                      src={profile.avatar}
                      alt="Profile"
                      className="w-32 h-32 rounded-full mb-6"
                    />

                    <UploaderComponent
                      asyncSettings={{
                        saveUrl:
                          "https://aspnetmvc.syncfusion.com/services/api/uploadbox/Save",
                        removeUrl:
                          "https://aspnetmvc.syncfusion.com/services/api/uploadbox/Remove",
                      }}
                      multiple={false}
                      autoUpload={true}
                      allowedExtensions=".jpg,.jpeg,.png"
                      cssClass="e-primary"
                    />
                  </div>
                </div>
              }
            />

            <TabItemDirective
              header={{ text: "Recent Activity" }}
              content={
                <div className="pt-4">
                  <div className="space-y-4">
                    {profile.recentActivities.map((activity: any) => (
                      <div
                        key={activity.id}
                        className="flex items-start border-b pb-3"
                      >
                        <div className="bg-blue-100 p-2 rounded-full mr-3">
                          <svg
                            className="w-5 h-5 text-blue-500"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                            />
                          </svg>
                        </div>
                        <div>
                          <p className="font-medium">{activity.action}</p>
                          <p className="text-sm text-gray-500">
                            {activity.date}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              }
            />
          </TabItemsDirective>
        </TabComponent>
      </div>
    </div>
  );
};

export default Profile;
