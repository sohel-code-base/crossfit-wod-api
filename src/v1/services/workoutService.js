const { v4: uuid} = require("uuid");
const Workout = require("../../database/Workout");

const getAllWorkouts = () => {
    const allWorkouts = Workout.getAllWorkouts();
    return allWorkouts;
};

const getOneWorkout = (workoutId) => {
    try {
        const workout = Workout.getOneWorkout(workoutId);
        return workout;
    } catch (error) {
        throw error;
    }
};

const createNewWorkout = (newWorkout) => {
    const workoutToInsert = {
        ...newWorkout,
        id: uuid(),
        createdAt: new Date().toLocaleString("en-US", { timeZone: "UTC" }),
        updatedAt: new Date().toLocaleString("en-US", { timeZone: "UTC" }),
    };
    try{
        const createdWorkout = Workout.createNewWorkout(workoutToInsert);
        return createdWorkout;
    }catch(error){
        throw error;
    }
    
};

const updateOneWorkout = (workoutId, changes) => {
    try {
        const updateWorkout = Workout.updateOneWorkout(workoutId, changes);
        return updateWorkout;
    } catch (error) {
        throw error;
    }
};

const deleteOneWorkout = () => {
    return;
};

module.exports = {
    getAllWorkouts,
    getOneWorkout,
    createNewWorkout,
    updateOneWorkout,
    deleteOneWorkout,
};
