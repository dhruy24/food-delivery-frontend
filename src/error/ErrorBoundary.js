function ErrorFallback({error, reserErrorBoundary}){
    return(
        <div role="alert">
            <p>Something went wrong:</p>
            <pre>{error.message}</pre>
            <button onClick={reserErrorBoundary}>Try again</button>
        </div>
    )
}

export default ErrorFallback;