namespace character_creator.Entities
{
  public class Character
  {
    public int Id { get; set; }
    public string Name { get; set; }
    public Race Race { get; set; }
    public Class Class { get; set; }
    public int Level { get; set; }

  }
}