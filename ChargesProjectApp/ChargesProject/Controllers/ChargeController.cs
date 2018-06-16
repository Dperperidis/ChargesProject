using ChargesProject.Context;
using ChargesProject.Models;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ChargesProject.Controllers
{
    [Route("api/[controller]")]
    public class ChargeController : Controller
    {

        private SqlContext _ctx;
        public ChargeController(SqlContext ctx)
        {
            _ctx = ctx;
        }

        [Route("insert")]
        [HttpPost]
        public IActionResult Post([FromBody]Charges charges)
        {
            try
            {
                
                var result = _ctx.Charges.Add(charges);
                _ctx.SaveChanges();
                return Ok(result.Entity);
            }
            catch (Exception ex)
            {
                return BadRequest("Κάτι πήγε στραβά");
            }
        }

        [Route("all")]
        [HttpGet]
        public IActionResult GetAll()
        {
            try
            {

                var result = _ctx.Charges.ToList();

                return Ok(result);
            }
            catch (Exception ex)
            {
                return BadRequest("Κάτι πήγε στραβά");
            }
        }
    }
}
