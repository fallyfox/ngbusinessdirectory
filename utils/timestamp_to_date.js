export const timestampToDate = (stamp) => {
    const event_ = new Date(stamp);

    const day = event_.toLocaleDateString("en-us",{day:"numeric"});
    const month = event_.toLocaleDateString("en-us",{month:"short"});
    const year = event_.getFullYear();

    const dateString = `${month} ${day}, ${year}`;

    return dateString;
}