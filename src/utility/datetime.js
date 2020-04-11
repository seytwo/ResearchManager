class DateTime
{
    static toString(datetime, time = true)
    {
        let str = ("0000" + datetime[0]).slice(-4) + "-"
            + ("00" + datetime[1]).slice(-2) + "-"
            + ("00" + datetime[2]).slice(-2);
        if (time)
        {
            str += " " + ("00" + datetime[3]).slice(-2) + ":"
                + ("00" + datetime[4]).slice(-2) + ":"
                + ("00" + datetime[5]).slice(-2);
        }
        return str;
    }

    static now()
    {
        const date = new Date(Date.now());
        return [
            date.getFullYear(),
            date.getMonth(),
            date.getDate(),
            date.getHours(),
            date.getMinutes(),
            date.getSeconds()
        ];
    }
}