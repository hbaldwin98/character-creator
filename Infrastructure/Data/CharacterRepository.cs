using Core.Entities;
using Core.Interfaces;
using Microsoft.EntityFrameworkCore;

namespace Infrastructure.Data
{
  public class CharacterRepository : ICharacterRepository
  {
    private readonly DataContext _context;
    public CharacterRepository(DataContext context)
    {
      _context = context;
    }

    public void AddCharacter(Character character)
    {
      _context.Characters.Add(character);
    }

    public void DeleteCharacter(Character character)
    {
      _context.Characters.Remove(character);
    }

    public async Task<Character> GetCharacter(int id)
    {
      return await _context.Characters
        .Where(i => i.Id == id)
        .SingleOrDefaultAsync();
    }

    public async Task<IEnumerable<Character>> GetCharactersAsync()
    {
      return await _context.Characters
        .ToListAsync();
    }
  }
}