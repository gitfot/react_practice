
const Student = ({stu:{name, gender, age, address}}) => {
    return (
        <tr>
            <td>{name}</td>
            <td>{gender}</td>
            <td>{age}</td>
            <td>{address}</td>
        </tr>
    );
}

export default Student;