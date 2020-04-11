class IO
{
    static read(path, callback)
    {
        return require("fs").readFileSync(path, "utf8", callback);
    }

    static readJson(path, callback)
    {
        return JSON.parse(IO.read(path, callback));
    }

    static write(path, data, callback)
    {
        require("fs").writeFileSync(path, data, callback);
    }

    static writeJson(path, data, callback)
    {
        const _data = {};
        for (const [key, value] of data)
        {
            _data[key] = value;
        }
        IO.write(path, JSON.stringify(_data, null , "\t"), callback);
    }
    
    static mkdir(path, callback)
    {
        require("fs").mkdir(path, callback);
    }
}