using System;
using dotnetapp.Models;
namespace dotnetapp.Service;
public interface IPositionsService
{
    Task<IEnumerable<Position>> GetPositionsList();
    Task AddPosition(Position newPosition);

}