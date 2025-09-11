import asyncHandler from 'express-async-handler';

// @desc    Get all goals
// @route   GET /api/goals
// @access  Private
const getGoals = asyncHandler(async (req, res) => {
    res.status(200).json({ message: 'getting goals' });
});

// @desc    Create a goal
// @route   POST /api/goals
// @access  Private
const setGoal = asyncHandler(async (req, res) => {
    if (!req.body.text) {
        res.status(400);
        throw new Error('please add a goal');
    } else {
        res.status(201).json({ message: 'goal created' });
    }
});

// @desc    Update a goal
// @route   PUT /api/goals/:id
// @access  Private
const updateGoal = asyncHandler(async (req, res) => {
    res.status(200).json({ message: `goal ${req.params.id} updated` });
});

// @desc    Delete a goal
// @route   DELETE /api/goals/:id
// @access  Private
const deleteGoal = asyncHandler(async (req, res) => {
    res.status(200).json({ message: `goal ${req.params.id} deleted` });
});

export { getGoals, setGoal, updateGoal, deleteGoal };
