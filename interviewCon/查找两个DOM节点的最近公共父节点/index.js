function findCommonParent(oNode1,oNode2){
        if(oNode1.contains(oNode2)){
            return oNode1
        }else if(oNode2.contains(oNode1)){
            return oNode2
        }else {
            return findCommonParent(oNode1.parentNode,oNode2)
        }
}


function findCommonParent2(oNode1,oNode2){
        while(!oNode1.contains(oNode2)){
            oNode1 = oNode1.parentNode
        }
        return oNode1
}
