function recursiva(max){
    if(max >= 12000) return;
    max++;
    console.log(max)
    recursiva(max);
}

recursiva(0);