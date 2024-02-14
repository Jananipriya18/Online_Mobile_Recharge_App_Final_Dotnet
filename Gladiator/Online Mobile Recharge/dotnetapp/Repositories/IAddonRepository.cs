using System.Collections.Generic;

namespace dotnetapp.Repositories
{
    public interface IAddonRepository
    {
        Addon Add(Addon addon);
        Addon Delete(long addonId);
        List<Addon> GetAll();
        Addon GetById(long addonId);
        Addon Update(Addon updatedAddon, long addonId);
    }
}
