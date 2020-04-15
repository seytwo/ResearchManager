class Path
{
    static root()
    {
        return Path.get("C:\\ResearchManager");
    }

    static get(path)
    {
        return require("path").resolve(__dirname, path);
    }

    static getAll(dir)
    {
        return require("fs").readdirSync(dir, "utf8");
    }

    static getLatest(dir)
    {
        let names = Array.from(Path.getAll(dir));
        const ext = require("path").extname(names[0]);
        names = names.map((name) => Number(require("path").basename(name, ext)));
        names.sort((a, b) => a - b);
        return dir + "\\" + names[names.length - 1] + ext;
    }
}