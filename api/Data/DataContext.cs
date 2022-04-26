using Microsoft.EntityFrameworkCore;

namespace character_creator.Data
{
    public class DataContext : DbContext
    {
        public DataContext(DbContextOptions options) : base(options) { }
    }
}