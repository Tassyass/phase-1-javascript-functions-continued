function saturdayFun(activity= 'roller-skate'){
    return `This Saturday, I want to ${activity}!`

}

saturdayFun("bathe my dog");

function mondayWork(m = 'go to the office'){
    return `This Monday, I will ${m}.`;
}

mondayWork('work from home')

function wrapAdjective(wrapper = '*') {
    return function result(adjective = '||') {
      return `You are ${wrapper}${adjective}${wrapper}!`;
    };
  }

    
   