﻿using System;
using System.Collections.Generic;
using System.Data;
using System.Data.Entity;
using System.Data.Entity.Infrastructure;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.Http.Description;
using Samdos.Models;

namespace Samdos.Controllers
{
    public class TestimonialsController : ApiController
    {
        private DataContext db = new DataContext();

        // GET: api/Testimonials
        public IQueryable<Testimonial> GetTestimonials()
        {
            return db.Testimonials;
        }

        // GET: api/Testimonials/5
        [ResponseType(typeof(Testimonial))]
        public IHttpActionResult GetTestimonial(int id)
        {
            Testimonial testimonial = db.Testimonials.Find(id);
            if (testimonial == null)
            {
                return NotFound();
            }

            return Ok(testimonial);
        }

        // PUT: api/Testimonials/5
        [ResponseType(typeof(void))]
        public IHttpActionResult PutTestimonial(int id, Testimonial testimonial)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != testimonial.ID)
            {
                return BadRequest();
            }

            db.Entry(testimonial).State = EntityState.Modified;

            try
            {
                db.SaveChanges();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!TestimonialExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return StatusCode(HttpStatusCode.NoContent);
        }

        // POST: api/Testimonials
        [ResponseType(typeof(Testimonial))]
        public IHttpActionResult PostTestimonial(Testimonial testimonial)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            db.Testimonials.Add(testimonial);
            db.SaveChanges();

            return CreatedAtRoute("DefaultApi", new { id = testimonial.ID }, testimonial);
        }

        // DELETE: api/Testimonials/5
        [ResponseType(typeof(Testimonial))]
        public IHttpActionResult DeleteTestimonial(int id)
        {
            Testimonial testimonial = db.Testimonials.Find(id);
            if (testimonial == null)
            {
                return NotFound();
            }

            db.Testimonials.Remove(testimonial);
            db.SaveChanges();

            return Ok(testimonial);
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }

        private bool TestimonialExists(int id)
        {
            return db.Testimonials.Count(e => e.ID == id) > 0;
        }
    }
}