import React from 'react';
import Modal from '../../../modal/Modal';
import { imgUrl } from '../../../redux/api/baseApi';

interface AgencyModalProps {
    isOpen: boolean;
    onClose: () => void;
    data: {
        drivingLicense: string;
        name: string;
        email: string;
        location: string;
        createdAt: string;
        yourID: string;
        image: string;
    };
}

const AgencyModal: React.FC<AgencyModalProps> = ({ isOpen, onClose, data }) => {
    const agencyDetails = [
        { label: 'User name', value: data?.name },
        { label: 'Email', value: data?.email },
        { label: 'Location', value: data?.location },
        { label: 'Joining Date', value: data?.createdAt?.slice(0, 10) },
    ];
    return (
        <Modal isOpen={isOpen} onClose={onClose}>
            <div className="space-y-2 mt-6 p-5">
                <section className="flex gap-6 mt-5">
                    <div className="border rounded">
                        {/* <span>User Image :</span> */}
                        {data?.image && data.image.length > 0 ? (
                            <img
                                src={data.image.startsWith('http') ? data.image : `${imgUrl}${data.image}`}
                                alt={data?.name}
                                className="w-40 object-cover h-40 rounded-full mt-4"
                            />
                        ) : (
                            <div className="w-40 h-40 flex items-center justify-center mt-4">
                                <p className="text-center">No Image</p>
                            </div>
                        )}
                    </div>

                    <div className="space-y-2 mt-2">
                        {agencyDetails?.map((detail, index) => (
                            <div key={index} className="flex gap-5">
                                <strong>{detail.label} : </strong>
                                <p className="text-start">{detail.value}</p>
                            </div>
                        ))}
                    </div>
                </section>

                <section className="pt-8">
                    <span className="">Driving License:</span>
                    <div className="grid grid-cols-2 gap-3 mt-1">
                        {Array.isArray(data?.drivingLicense) && data?.drivingLicense.length > 0
                            ? data?.drivingLicense?.map((item: any, index: number) => (
                                  <img
                                      key={index}
                                      src={`${imgUrl}${item}`}
                                      alt={`Driving License ${index + 1}`}
                                      className="w-full h-40 object-cover"
                                  />
                              ))
                            : 'No License'}
                    </div>
                </section>

                <section className="pt-6">
                    <span className="my-2">ID Card:</span>
                    <div className="grid grid-cols-2 gap-3 mt-1">
                        {Array.isArray(data?.yourID) && data?.yourID.length > 0
                            ? data.yourID?.map((item: any, index: number) => (
                                  <img
                                      key={index}
                                      src={`${imgUrl}${item}`}
                                      alt={`Driving License ${index + 1}`}
                                      className="w-full h-40 object-cover mt-1"
                                  />
                              ))
                            : 'No License'}
                    </div>
                </section>
            </div>
        </Modal>
    );
};

export default AgencyModal;
