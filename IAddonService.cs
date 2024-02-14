using System.Collections.Generic;

namespace dotnetapp.Services
{
    public interface IAddonService
    {
        Addon AddAddon(Addon addon);
        Addon DeleteAddon(long addonId);
        List<Addon> GetAllAddons();
        Addon GetAddonById(long addonId);
        Addon UpdateAddon(Addon updatedAddon, long addonId);
    }
}
