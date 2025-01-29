const TableRowItem = (props) => {

    return (
        <tr>
            <th scope='row'>{props.contact.id}</th>
            <th>{props.contact.fullName}</th>
            <th>{props.contact.telephone}</th>
            <th>{props.contact.notes}</th>
        </tr>
    );
}
export default TableRowItem;