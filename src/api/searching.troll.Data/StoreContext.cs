using Microsoft.EntityFrameworkCore;
using searching.troll.Domain.Catalog;

namespace searching.troll.Data;

public class StoreContext : DbContext
{
    public StoreContext(DbContextOptions<StoreContext> options) : base(options)
    {

    }

    public DbSet<Item> Items { get; set; }
}