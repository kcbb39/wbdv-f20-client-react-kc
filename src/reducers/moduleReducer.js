const moduleReducer = (
    state = {modules: []}, action) => {
    switch (action.type) {
        case "UPDATE_MODULE":
            return {
                modules: state.modules.map(module => module.id === action.module.id ? action.module : module)
            }
        case "DELETE_MODULE":
            return {
                modules: state.modules.filter(module => module.id !== action.moduleId)
            }
        case "CREATE_MODULE":
            return {
                modules: [
                    ...state.modules,
                    action.module
                ]
            }
        case "FIND_MODULES_FOR_COURSE":
            return {
                modules: action.modules
            }
        case "FIND_MODULE_BY_ID":
            return {
                modules: action.modules
            }
        default:
            return state
    }
}

export default moduleReducer