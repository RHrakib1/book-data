const getjob = () => {
    const storejob = localStorage.getItem('setNewJob')
    if (storejob) {
        return JSON.parse(storejob)
    }
    return []
}

const savejobdata = (id) => {
    const getId = getjob()
    const findId = getId.find(j => j === id)
    if (!findId) {
        getId.push(id)
        localStorage.setItem('setNewJob', JSON.stringify(getId))
    }
}
export { savejobdata, getjob }