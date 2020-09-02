import React, { useEffect, useState, SelectHTMLAttributes } from 'react';
import Select from '../Select';
import api from '../../services/api';

interface Subjects {
    id: number;
    value: string;
    cost: string;
}

interface SelectSubjectsProps extends SelectHTMLAttributes<HTMLSelectElement>  {
    options?: Array<{
        id: number, value: string, cost: string;
    }>;
  }

const SelectSubjects: React.FC<SelectSubjectsProps> = ({ options, ...rest}) => 
{  

// const SelectSubjects = ({ ...rest }) => {

    const [subjects, setSubjects] = useState<Subjects[]>([])

    useEffect(() => {
        api.get('subjects').then(response => {

            setSubjects(response.data);
        });
  
    }, []);

    return (
        <Select name="subject" label="Matéria" {...rest}   
        options={options? options  : subjects}   />
    )
}

export default SelectSubjects