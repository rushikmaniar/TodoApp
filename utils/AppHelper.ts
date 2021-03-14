export function toggleItemInList(list:any[],row:any) {
    if(list.find(row)){
        return list.filter((item:any) => item !== row)
    }
    return [...list,row];
}