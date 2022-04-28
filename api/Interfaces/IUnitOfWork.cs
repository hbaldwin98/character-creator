namespace character_creator.Interfaces
{
  public interface IUnitOfWork
  {
    ICharacterRepository CharacterRepository {get;}
    Task<bool> Update();
    bool HasChanges();
  }
}