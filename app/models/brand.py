from .db import db


class Brand(db.Model):
  __tablename__ = 'brands'

  id = db.Column(db.Integer, primary_key = True)
  brand = db.Column(db.String(50), nullable = False)

  discs = db.relationship("Disc")

  def to_dict(self):
    return {
      "id": self.id,
      "brand": self.brand,
    }
