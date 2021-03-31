from .db import db
from sqlalchemy.dialects import postgresql


class Disc(db.Model):
  __tablename__ = 'discs'

  id = db.Column(db.Integer, primary_key = True)
  name = db.Column(db.String(50), nullable = False)
  brand_id = db.Column(db.Integer, db.ForeignKey("brands.id"))
  speed = db.Column(db.Integer, nullable=False)
  glide = db.Column(db.Integer, nullable=False)
  turn = db.Column(db.Integer, nullable=False)
  fade = db.Column(db.Integer, nullable=False)
  flight_path = db.Column(db.Text, nullable=False)
  price = db.Column(db.Float, nullable=False)
  description = db.Column(db.Text, nullable=False)
  images = db.Column(postgresql.ARRAY(db.Text))
  type_id = db.Column(db.Integer, db.ForeignKey("types.id"), nullable=False)
  stability_id = db.Column(db.Integer, db.ForeignKey("stabilities.id"), nullable=False)
  diameter = db.Column(db.Float, nullable=False)
  height = db.Column(db.Float, nullable=False)
  rim_depth = db.Column(db.Float, nullable=False)
  rim_width = db.Column(db.Float, nullable=False)
  max_weight = db.Column(db.Float, nullable=False)

  def to_dict(self):
    return {
      "id": self.id,
      "name": self.name,
      "brand_id": self.brand_id,
      "speed": self.speed,
      "glide": self.glide,
      "turn": self.turn,
      "fade": self.fade,
      "flight-path": self.flight_path,
      "price": self.price,
      "description": self.description,
      "images": self.images,
      "type_id": self.type_id,
      "stability_id": self.stability_id,
      "diameter": self.diameter,
      "height": self.height,
      "rim_depth": self.rim_depth,
      "rim_width": self.rim_width,
      "max_weight": self.max_weight,
    }
