using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace Samdos.Models
{
    public class Order
    {
        public int ID { get; set; }
        public string Store { get; set; }
        public string Name { get; set; }
        public string Phone { get; set; } //keeping as a string to allow for fancy formatting
        public string Type { get; set; }
        public string Ingredients { get; set; }
        public string Comments { get; set; }
        


    }
}