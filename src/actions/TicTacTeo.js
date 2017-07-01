export const AddPlayers =(userName)=>{
	return ({
 type:"ADD_PALYER",
 payload:userName

})
}
export const ChangePlayer =(CellAddr)=>{
	return ({
 type:"CHANGE_PALYER",
 payload:CellAddr
})
}

export const ResetGame =()=>{
	return ({
 type:"RESET_GAME",
 payload:{}
})
}