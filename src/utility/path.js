class Path
{
    static root()
    {
        return Path.get("..");
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
        const paths = Path.getAll(dir);
        paths.sort();
        return dir + "\\" + paths[paths.length - 1];
    }
}