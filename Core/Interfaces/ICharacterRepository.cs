using Core.Entities;

namespace Core.Interfaces
{
  public interface ICharacterRepository
  {
    void AddCharacter(Character character);
    void DeleteCharacter(Character character);
    Task<Character> GetCharacter(int id);
    Task<IEnumerable<Character>> GetCharactersAsync();
  }
}