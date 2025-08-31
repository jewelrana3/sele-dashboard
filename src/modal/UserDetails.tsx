import React from 'react';
import Modal from './Modal';
import { imgUrl } from '../redux/api/baseApi';

interface UserDetailsModalProps {
    isOpen: boolean;
    onClose: () => void;
    data: {
        drivingLicense: string | string[];
        name: string;
        email: string;
        location: string;
        createdAt: string;
        yourID: string;
        image: string;
    };
}

const UserDetailsModal: React.FC<UserDetailsModalProps> = ({ isOpen, onClose, data }) => {
    const agencyDetails = [
        { label: 'User name', value: data?.name },
        { label: 'Email', value: data?.email },
        { label: 'Address', value: data?.location },
        { label: 'Joining Date', value: data?.createdAt?.slice(0, 10) },
    ];
    return (
        <Modal isOpen={isOpen} onClose={onClose}>
            <div className="bg-[#E6F2FF] p-5 rounded-lg">
                <h2 className="text-2xl font-semibold mb-4">User Details</h2>
                <section className="flex gap-6 mb-4  ">
                    <div className="border rounded-lg">
                        {/* <span>User Image :</span> */}
                        <img src={data?.image} alt={data?.name} className="w-40 object-cover h-40 rounded-full mt-4" />
                    </div>

                    <div className="space-y-2 mt-">
                        {agencyDetails?.map((detail, index) => (
                            <div key={index} className="flex gap-5">
                                <strong>{detail.label} : </strong>
                                <p className="text-start">{detail.value}</p>
                            </div>
                        ))}
                    </div>
                </section>

                <section className=" ">
                    <span className="">Driving License:</span>
                    <div className="grid grid-cols-2 gap-3 mt-3">
                        {Array.isArray(data?.drivingLicense) && data?.drivingLicense.length > 0
                            ? data?.drivingLicense?.map((item: any, index: number) => {
                                  const imageUrl = item.startsWith('https') ? item : `${imgUrl}${item}`;
                                  return (
                                      <a key={index} href={imageUrl} target="_blank" rel="noopener noreferrer">
                                          <img
                                              src={imageUrl}
                                              alt={`Driving License ${index + 1}`}
                                              className="border rounded-lg w-full h-40 object-cover"
                                          />
                                      </a>
                                  );
                              })
                            : 'No License'}
                    </div>
                </section>

                <section className="mt-4 ">
                    <span className="my-2">ID Card:</span>
                    <div className="grid grid-cols-2 gap-3 mt-3">
                        {Array.isArray(data?.yourID) && data.yourID.length > 0
                            ? data.yourID.map((item: any, index: number) => {
                                  const imageUrl = item.startsWith('https') ? item : `${imgUrl}${item}`;
                                  return (
                                      <a key={index} href={imageUrl} target="_blank" rel="noopener noreferrer">
                                          <img
                                              src={imageUrl}
                                              alt={`Driving License ${index + 1}`}
                                              className="border rounded-lg w-full h-40 object-cover mt-1"
                                          />
                                      </a>
                                  );
                              })
                            : 'No License'}
                    </div>
                </section>
            </div>
        </Modal>
    );
};

export default UserDetailsModal;
