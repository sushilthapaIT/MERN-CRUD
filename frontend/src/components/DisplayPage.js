import React, { useState } from 'react';
import AddDataForm from './AddDataForm'; 
import './DisplayPage.css'; 

function DisplayPage() {
    const [data, setData] = useState([]);
    const [editIndex, setEditIndex] = useState(-1);
    const [editData, setEditData] = useState({});

    // Handler to add data from AddDataForm
    const addData = (newData) => {
        setData([...data, newData]);
    };

    // Handler to delete data
    const deleteData = (index) => {
        setData(data.filter((_, i) => i !== index));
    };

    // Handler to enter edit mode
    const startEditing = (index) => {
        setEditIndex(index);
        setEditData({ ...data[index] });
    };

    // Handler to save edits
    const saveEdit = () => {
        const updatedData = [...data];
        updatedData[editIndex] = editData;
        setData(updatedData);
        setEditIndex(-1);
    };

    // Handler to cancel edit mode
    const cancelEdit = () => {
        setEditIndex(-1);
        setEditData({});
    };

    return (
        <div className="display-page">
            <h2>Data Display</h2>
            {data.length === 0 ? (
                <p>No data to display. Please add some!</p>
            ) : (
                <table className="data-table">
                    <thead>
                        <tr>
                            <th>First Name</th>
                            <th>Last Name</th>
                            <th>Date of Birth</th>
                            <th>Address Line 1</th>
                            <th>Address Line 2</th>
                            <th>City</th>
                            <th>Postal Code</th>
                            <th>Country</th>
                            <th>Phone</th>
                            <th>Email</th>
                            <th>Notes</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map((item, index) => (
                            <tr key={index}>
                                {editIndex === index ? (
                                    <>
                                        <td>
                                            <input
                                                type="text"
                                                value={editData.firstName}
                                                onChange={(e) =>
                                                    setEditData({
                                                        ...editData,
                                                        firstName: e.target.value,
                                                    })
                                                }
                                            />
                                        </td>
                                        <td>
                                            <input
                                                type="text"
                                                value={editData.lastName}
                                                onChange={(e) =>
                                                    setEditData({
                                                        ...editData,
                                                        lastName: e.target.value,
                                                    })
                                                }
                                            />
                                        </td>
                                        <td>
                                            <input
                                                type="date"
                                                value={editData.dob}
                                                onChange={(e) =>
                                                    setEditData({
                                                        ...editData,
                                                        dob: e.target.value,
                                                    })
                                                }
                                            />
                                        </td>
                                        <td>
                                            <input
                                                type="text"
                                                value={editData.address1}
                                                onChange={(e) =>
                                                    setEditData({
                                                        ...editData,
                                                        address1: e.target.value,
                                                    })
                                                }
                                            />
                                        </td>
                                        <td>
                                            <input
                                                type="text"
                                                value={editData.address2}
                                                onChange={(e) =>
                                                    setEditData({
                                                        ...editData,
                                                        address2: e.target.value,
                                                    })
                                                }
                                            />
                                        </td>
                                        <td>
                                            <input
                                                type="text"
                                                value={editData.city}
                                                onChange={(e) =>
                                                    setEditData({
                                                        ...editData,
                                                        city: e.target.value,
                                                    })
                                                }
                                            />
                                        </td>
                                        <td>
                                            <input
                                                type="text"
                                                value={editData.postalCode}
                                                onChange={(e) =>
                                                    setEditData({
                                                        ...editData,
                                                        postalCode: e.target.value,
                                                    })
                                                }
                                            />
                                        </td>
                                        <td>
                                            <input
                                                type="text"
                                                value={editData.country}
                                                onChange={(e) =>
                                                    setEditData({
                                                        ...editData,
                                                        country: e.target.value,
                                                    })
                                                }
                                            />
                                        </td>
                                        <td>
                                            <input
                                                type="tel"
                                                value={editData.phoneNumber}
                                                onChange={(e) =>
                                                    setEditData({
                                                        ...editData,
                                                        phoneNumber: e.target.value,
                                                    })
                                                }
                                            />
                                        </td>
                                        <td>
                                            <input
                                                type="email"
                                                value={editData.email}
                                                onChange={(e) =>
                                                    setEditData({
                                                        ...editData,
                                                        email: e.target.value,
                                                    })
                                                }
                                            />
                                        </td>
                                        <td>
                                            <input
                                                type="text"
                                                value={editData.note}
                                                onChange={(e) =>
                                                    setEditData({
                                                        ...editData,
                                                        note: e.target.value,
                                                    })
                                                }
                                            />
                                        </td>
                                        <td>
                                            <button onClick={saveEdit}>Save</button>
                                            <button onClick={cancelEdit}>Cancel</button>
                                        </td>
                                    </>
                                ) : (
                                    <>
                                        <td>{item.firstName}</td>
                                        <td>{item.lastName}</td>
                                        <td>{item.dob}</td>
                                        <td>{item.address1}</td>
                                        <td>{item.address2}</td>
                                        <td>{item.city}</td>
                                        <td>{item.postalCode}</td>
                                        <td>{item.country}</td>
                                        <td>{item.phoneNumber}</td>
                                        <td>{item.email}</td>
                                        <td>{item.note}</td>
                                        <td>
                                            <button onClick={() => startEditing(index)}>Edit</button>
                                            <button onClick={() => deleteData(index)}>Delete</button>
                                        </td>
                                    </>
                                )}
                            </tr>
                        ))}
                    </tbody>
                </table>
            )}
            <AddDataForm onAddData={addData} />
        </div>
    );
}

export default DisplayPage;
