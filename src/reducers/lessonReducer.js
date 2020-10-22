

const lessonReducer = (
    state = {lessons: []}, action) => {
    switch (action.type) {
        case "UPDATE_LESSON":
            return {
                lessons: state.lessons.map(lesson => lesson.id === action.lesson.id ? action.lesson : lesson)
            }
        case "DELETE_LESSON":
            return {
                lessons: state.lessons.filter(lesson => lesson.id !== action.lessonId)
            }
        case "CREATE_LESSON":
            return {
                lessons: [
                    ...state.lessons,
                    action.lesson
                ]
            }
        case "FIND_LESSONS_FOR_MODULE":
            return {
                lessons: action.lessons
            }
        case "FIND_LESSON":
            return {
                lessons: action.lessons
            }
        default:
            return state
    }
}

export default lessonReducer