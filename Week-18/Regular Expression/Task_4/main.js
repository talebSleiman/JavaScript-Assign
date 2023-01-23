let re = /https?:\/\/(?:[-\w]+\.)?([-\w]+)\.\w+(?:\.\w+)?\/?.*/i;

// https? => can be http or https
// (?:[-\w]+\.)? => can be - or any word characters repeatet one or more times then dot(.) all repeatet zero or one times
// ([-\w]+) => can be - or any word characters repeatet one or more times
// (?:\.\w+)? => dot(.) the any word characters repeatet one or more times, all repeatet zero or one times
// \/?.* => can be / or no / then any characters repeatet zero or more times