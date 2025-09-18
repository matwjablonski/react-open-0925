import { useState } from "react"

export const Vote = ({ authorName }) => {
    const [votes, setVotes] = useState(() => Math.floor(authorName.length * 2 / 5));

    const [hasVoted, setHasVoted] = useState(false);

    const handleAddVote = () => {
        setVotes((prev) => prev + 1);
        setHasVoted(true);
    }
    return (
        <div>
            <button onClick={handleAddVote} disabled={hasVoted}>Głosuj na tę pozycję</button>
            Oddano głosów: {votes}
        </div>
    )
}