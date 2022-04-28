using character_creator.Entities;
using character_creator.Interfaces;
using Microsoft.EntityFrameworkCore;

namespace character_creator.Data
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
      _context.Character.Add(character);
    }

    public void DeleteCharacter(Character character)
    {
      _context.Character.Remove(character);
    }

    public async Task<Character> GetCharacter(int id)
    {
      return await _context.Character
        .Where(i => i.Id == id)
        .SingleOrDefaultAsync();
    }

    public async Task<IEnumerable<Character>> GetCharactersAsync()
    {
      return await _context.Character
        .ToListAsync();
    }
  }
}