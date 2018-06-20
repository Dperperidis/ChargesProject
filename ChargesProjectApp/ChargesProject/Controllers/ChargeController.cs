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

        [Route("new")]
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

        [Route("details")]
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



        
        [Route("delete/{id}")]
        [HttpDelete]
        public IActionResult Delete(string id)
        {

            try
            {
                var original = _ctx.Charges.Find(id);
                var result = _ctx.Charges.Remove(original);

                _ctx.SaveChanges();

                return Ok("Σβηστηκε!");

            }
            catch (Exception ex)
            {
                return BadRequest("Κάτι πήγε στραβά");
            }


        }
    }
}
