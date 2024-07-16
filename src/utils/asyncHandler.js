const asyncHandler = (requestHandler) => {
  return (req, res, next) => {
    Promise.resolve(requestHandler(req, res, next)).catch((error) =>
      next(error)
    );
  };
};

export { asyncHandler };

// const asyncHandler=()=>{}
// const asyncHandler = (fun)=>()=>{}
// const asyncHandler = (fn)=>asyn()=>{}

// const asyncHandler = (fn) => async (req, res, next) => {
//   try {
//     await fn(req, res, next);
//   } catch (error) {
//     console.log("Error: ", error);
//     res.status(500 || error.code).json({
//       message: error.message || "Internal Server Error",
//     });
//   }
// };
