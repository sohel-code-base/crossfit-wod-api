const DB = require("./db.json");
const { saveToDatabase } = require("./utils");

const getAllWorkouts = () => {
    return DB.workouts;
};

const getOneWorkout = (workoutId) => {
    try {
        const workout = DB.workouts.find((workout) => workout.id === workoutId);
        if (!workout) {
            throw {
                status: 400,
                message: `Can't find workout with the id '${workoutId}'`,
            }
        }
        return workout;
    } catch (error) {
        throw {
            status: error?.status || 500,
            message: error?.message || error
        };
    }
};

const createNewWorkout = (newWorkout) => {
    const isAlreadyAdded = DB.workouts.findIndex((workout) => workout.name === newWorkout.name) > -1;

    if(isAlreadyAdded){
        throw{
            status: 400,
            message: `Workout with the same ${newWorkout.name} already exists.`,
        }
    }

    try {
        DB.workouts.push(newWorkout);
        saveToDatabase(DB);
        return newWorkout;
    } catch (error) {
        throw{
            status: 500,
            message: error?.message || error,
        }
    }
    
    

};


module.exports = { 
    getAllWorkouts,
    createNewWorkout,
    getOneWorkout,
};