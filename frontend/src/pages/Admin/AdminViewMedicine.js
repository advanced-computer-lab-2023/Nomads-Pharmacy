import React, { useEffect, useState } from 'react';
import MedicineDetails from '../../components/Admin/MedicineDetails';
import { useAuthContext } from '../../hooks/useAuthContext';

const AdminViewMedicine = () => {
    const [medicines, setMedicines] = useState(null);
    const {user} = useAuthContext()

    useEffect(() => {
        const fetchMedicines = async () => {
            const response = await fetch('/api/medicine',{
                headers: {
                    'Authorization': `Bearer ${user.token}`
                }
            });
            const json = await response.json();

            if (response.ok) {
                setMedicines(json);
            }
        };
        if(user){
            fetchMedicines();
        }
    
    }, [user]);

    return (
        <div className="home">
            <div className="medicines">
                {medicines && medicines.map((medicine) => (
                    <MedicineDetails key={medicine._id} medicine={medicine} />
                ))}
            </div>
        </div>
    );
};

export default AdminViewMedicine