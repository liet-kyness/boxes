import React, { useState } from "react";
import { v4 as uuid } from "uuid";

function NewBoxForm({ createBox }) {
    const [formData, setFormData] = useState({
        height: "",
        width: "",
        backgroundColor: ""
    });

    const handleChange = evt => {
        const {name, value} = evt.target;
        setFormData(formData => ({
            ...formData,
            [name]: value
        }));
    };

    const gatherInput = evt => {
        evt.preventDefault();
        createBox({ ...formData, id: uuid() });
        setFormData({ height: "", width: "", backgroundColor: ""});
    };

    return (
        <div>
            <form onSubmit={gatherInput}>
                <div>
                    <label htmlFor="height">height</label>
                    <input
                        onChange={handleChange}
                        type="text"
                        id="height"
                        name="height"
                        value={formData.height} />
                </div>
                <div>
                    <label htmlFor="width">width</label>
                    <input
                        onChange={handleChange}
                        type="text"
                        id="width"
                        name="width"
                        value={formData.width} />
                </div>
                <div>
                    <label htmlFor="backgroundColor">background color</label>
                    <input
                        onChange={handleChange}
                        type="text"
                        id="backgroundColor"
                        name="backgroundColor"
                        value={formData.backgroundColor} />
                </div>
                <button id="newBoxButton">add box</button>
            </form>
        </div>
    );
};

export default NewBoxForm;