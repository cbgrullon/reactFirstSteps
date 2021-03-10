function ShowIf({isVisible,children}){

    if(!isVisible)
        return null;
    return (
        {...children}
    );
}
export default ShowIf;