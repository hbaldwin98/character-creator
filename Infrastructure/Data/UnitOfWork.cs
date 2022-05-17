using Core.Interfaces;

namespace Infrastructure.Data
{
  public class UnitOfWork : IUnitOfWork
  {
    private readonly DataContext _context;
    public UnitOfWork(DataContext context)
    {
      _context = context;
    }

    public ICharacterRepository CharacterRepository => new CharacterRepository(_context);

    public bool HasChanges()
    {
      return _context.ChangeTracker.HasChanges();
    }

    public async Task<bool> Update()
    {
      return await _context.SaveChangesAsync() > 0;
    }
  }
}