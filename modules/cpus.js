import os from 'os';
export const cpus = () => {
    try {
        const cpusAll = os.cpus();
        const cpus = cpusAll.map((cpu) => {
            return {
                model: cpu.model,
                speed: cpu.speed > 1000 ?
                    cpu.speed / 1000 + ' GHz' : cpu.speed / 10 + ' GHz',
            };
        });
        console.log('Number of CPU: ' + os.cpus().length);
        console.log('Model CPU: ' + os.cpus()[0].model);
        console.log(cpus);
    } catch (e) {
        console.log('Operation failed');
    }
};