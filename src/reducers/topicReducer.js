
const topicReducer = (
    state = {topics: []}, action) => {
    switch (action.type) {
        case "UPDATE_TOPIC":
            return {
                topics: state.topics.map(topic => topic.id === action.topic.id ? action.topic : topic)
            }
        case "DELETE_TOPIC":
            return {
                topics: state.topics.filter(topic => topic.id !== action.topicId)
            }
        case "CREATE_TOPIC":
            return {
                topics: [
                    ...state.topics,
                    action.topics
                ]
            }
        case "FIND_TOPICS_FOR_LESSON":
            return {
                topics: action.topics
            }
        case "FIND_TOPIC":
            return {
                topics: action.topics
            }
        default:
            return state
    }
}

export default topicReducer