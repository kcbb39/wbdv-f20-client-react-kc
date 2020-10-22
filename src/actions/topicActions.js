export const CREATE_TOPIC = "CREATE_TOPIC"
export const deleteTopic = (topicId) => ({
    type: DELETE_TOPIC,
    topicId: topicId
})

export const DELETE_TOPIC = "DELETE_TOPIC"
export const createTopic = (topic) => ({
    type: CREATE_TOPIC,
    newTopic: topic
})