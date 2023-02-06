using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace Mission04_cj433.Models
{
    public class CalculatorModel
    {
        // Varaibles w/ Validations
        [Required]
        [RangeAttribute(0,100)]
        public float Assignment { get; set; }

        [Required]
        [RangeAttribute(0, 100)]
        public float Group { get; set; }

        [Required]
        [RangeAttribute(0, 100)]
        public float Quiz { get; set; }

        [Required]
        [RangeAttribute(0, 100)]
        public float Midterm { get; set; }

        [Required]
        [RangeAttribute(0, 100)]
        public float Final { get; set; }

        [Required]
        [RangeAttribute(0, 100)]
        public float Intex { get; set; }
    }
}