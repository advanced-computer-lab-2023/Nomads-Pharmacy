import React, { useEffect, useState } from 'react';
import MedicineDetails from '../../components/Pharmacist/MedicineDetails';
import MedicineEditForm from '../../components/Pharmacist/MedicineEditForm';
import { Link } from 'react-router-dom'
import { useAuthContext } from '../../hooks/useAuthContext';

const PharmacistViewMedicines = () => {
    const [medicines, setMedicines] = useState(null);
    const [editingMedicineId, setEditingMedicineId] = useState(null);
    const [searchTerm, setSearchTerm] = useState(''); // State to hold the search input
    const [searchBy, setSearchBy] = useState('name'); // State to select whether to search by name or use

    const { user } = useAuthContext();

    useEffect(() => {
        const fetchMedicines = async () => {
            const response = await fetch('/api/medicine', {
                headers: {
                    'Authorization': `Bearer ${user.token}`
                }
            });
            const json = await response.json();

            if (response.ok) {
                setMedicines(json);
            }
        };

        if (user) {
            fetchMedicines();
        }
    }, [user]);

    const handleEditMedicine = (medicineId) => {
        setEditingMedicineId(medicineId);
    };

    // Filter the medicines based on the search term and selected search criteria
    const filteredMedicines = medicines
        ? medicines.filter((medicine) => {
              const lowerCaseSearchTerm = searchTerm.toLowerCase();
              if (searchBy === 'name') {
                  return medicine.name.toLowerCase().includes(lowerCaseSearchTerm);
              } else if (searchBy === 'use') {
                  return medicine.use.toLowerCase().includes(lowerCaseSearchTerm);
              }
              return false;
          })
        : [];

    return (
        <div className="home2">
            <div className="search-bar">
                <input
                    type="text"
                    placeholder="Search..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
                <select
                    value={searchBy}
                    onChange={(e) => setSearchBy(e.target.value)}
                >
                    <option value="name">Search by Name</option>
                    <option value="use">Search by Use</option>
                </select>
            </div>
            <div className="medicine">
                {filteredMedicines.map((medicine) => (
                    <MedicineDetails key={medicine._id} medicine={medicine} onEdit={handleEditMedicine} />
                ))}
            </div>
            {editingMedicineId && (
                <MedicineEditForm medicineId={editingMedicineId} />
            )}
            <div className='add-new-admin-button'>
                <Link to="/medicine-form">
                    <button>Add a new Medicine</button>
                </Link>
            </div>
        </div>
    );
};

export default PharmacistViewMedicines;
