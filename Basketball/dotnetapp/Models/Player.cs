using System;
using System.Collections.Generic;

namespace dotnetapp.Models;

public class Player
{
    public int Id { get; set; }
    public int Shirtno { get; set; }
    public string Name { get; set; }
    public int Positionid { get; set; }
    public string Position {get; set;}
    public int Appearances { get; set; }
    public int Goals { get; set; }
}
