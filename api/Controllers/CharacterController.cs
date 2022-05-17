using Core.Entities;
using Core.Interfaces;
using Microsoft.AspNetCore.Mvc;

namespace API.Controllers
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