from flask import Blueprint, request
from app.models.db import db
from app.models import Disc


api_routes = Blueprint('/api', __name__)


@api_routes.route("/discs")
def api_discs_all():
    discs = Disc.query.all()
    return {"discs": [disc.to_dict() for disc in discs]}


@api_routes.route("/discs/<int:discId>")
def api_discs_one(discId):
    disc = Disc.query.get(discId)
    return disc.to_dict()


@api_routes.route("/discs/brand/<int:typeId>")
def api_brand_discs(typeId):
    discs = Disc.query.filter_by(type_id=typeId).all()
    return {"discs": [disc.to_dict() for disc in discs]}


@api_routes.route("/discs/stability/<int:stabilityId>")
def api_stability_discs(stabilityId):
    discs = Disc.query.filter_by(stability_id=stabilityId).all()
    return {"discs": [disc.to_dict() for disc in discs]}
