using System.ComponentModel.DataAnnotations;

namespace CRUD_Application.Models
{
    public class User
    {
        [Key]
        [Required]
        public int      Id          { get; set; }

        [StringLength(50,ErrorMessage = "Allowed number of characters 50")]
        [Required(ErrorMessage = "please fill out 'Name' field")]
        public string   FirstName   { get; set; } = string.Empty;

        [StringLength(50,ErrorMessage = "Allowed number of characters 50")]
        [Required(ErrorMessage = "please fill out 'Name' field")]
        public string   LastName    { get; set; } = string.Empty;

        [Required(ErrorMessage = "please fill out 'Age' field")]
        public int      Age         { get; set; }

        [StringLength(50,ErrorMessage = "Allowed number of characters 50")]
        [Required(ErrorMessage = "please fill out 'Proffesion' field")]
        public string   Profession  { get; set; } = string.Empty;
    }
}
