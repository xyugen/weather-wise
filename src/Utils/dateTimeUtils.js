export const formatTime = (datetime) => {
    const date = new Date(datetime);
    return date.toLocaleTimeString([], {hour: '2-digit', minute: '2-digit'});
}

export const formatDate = (datetime) => {
    const date = new Date(datetime);
    return date.toLocaleDateString('en-US', {weekday: 'short', day: 'numeric', month: 'short', year: 'numeric'});
}