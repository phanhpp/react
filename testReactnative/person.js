export const duTuoi = n => {
    if (n <= 18 ){
        return 'chua du tuoi';
    } else {
        return 'du tuoi'
    }
}

export const kiemTra = (k,m) =>{
    
    t = k/m;
    if ( t< 18.5){
        return 'thieu can';
    } else if ( t == 18.5){
        return 'binh thuong';
    } else {
        return 'beo phi'
    }

}