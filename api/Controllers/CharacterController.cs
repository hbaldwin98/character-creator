using character_creator.Entities;
using character_creator.Interfaces;
using Microsoft.AspNetCore.Mvc;

namespace character_creator.Controllers
{
  public class CharacterController : BaseAPIController
  {
    private readonly IUnitOfWork _unitOfWork;
    public CharacterController(IUnitOfWork unitOfWork)
    {
      _unitOfWork = unitOfWork;
    }

    [HttpGet]
    public async Task<ActionResult<Character>> GetAllCharacters() 
    {
      var characters = await _unitOfWork.CharacterRepository.GetCharactersAsync();

      return Ok(characters);
    }
  }
}