from .db import db


class Stability(db.Model):
  __tablename__ = 'stabilities'

  id = db.Column(db.Integer, primary_key = True)
  stability = db.Column(db.String(50), nullable = False)

  discs = db.relationship("Disc")

  def to_dict(self):
    return {
      "id": self.id,
      "stability": self.stability,
    }
