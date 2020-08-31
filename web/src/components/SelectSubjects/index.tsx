import React, { useEffect, useState } from 'react';
import Select from '../Select';
import api from '../../services/api';

const SelectSubjects = ({ ...rest }) => {

    interface Subjects {
        id: number;
        value: string;
        cost: string;
    }

    const [subjects, setSubjects] = useState<Subjects[]>([])

    useEffect(() => {
        api.get('subjects').then(response => {

            setSubjects(response.data);
        });
  
    }, []);

    return (
        <Select name="subject" label="Matéria" {...rest}                      
        options={subjects} />
    )
}

export default SelectSubjects