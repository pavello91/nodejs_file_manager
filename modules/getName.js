export const getName = () => {

    let name;
    for (let i = 0; i < process.argv.length; i++) {
        if (process.argv[i].includes("--username=")) {
            name = process.argv[i]
            break
        }
    }

    if (name) {
        return name.replace('--username=', '').trim()
    } else {
        return 'Default';
    }
};