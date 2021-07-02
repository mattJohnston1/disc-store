from app.models import disc, watchlist
from app.models.watchlist import Watchlist
from flask import Blueprint, request
from app.models.db import db
from app.models import Disc, Brand


api_routes = Blueprint('/api', __name__)


@api_routes.route("/discs")
def api_discs_all():
    discs = Disc.query.all()
    return {"discs": [disc.to_dict() for disc in discs]}


@api_routes.route("/discs/<int:discId>")
def api_discs_one(discId):
    disc = Disc.query.get(discId)
    return disc.to_dict()


@api_routes.route("/discs/brand/<int:brandId>")
def api_brand_discs(brandId):
    discs = Disc.query.filter_by(brand_id=brandId).all()
    return {"discs": [disc.to_dict() for disc in discs]}


@api_routes.route("/discs/type/<int:typeId>")
def api_type_discs(typeId):
    discs = Disc.query.filter_by(type_id=typeId).all()
    return {"discs": [disc.to_dict() for disc in discs]}


@api_routes.route("/discs/stability/<int:stabilityId>")
def api_stability_discs(stabilityId):
    discs = Disc.query.filter_by(stability_id=stabilityId).all()
    return {"discs": [disc.to_dict() for disc in discs]}


@api_routes.route("/brands")
def api_brands():
    brands = Brand.query.all()
    return {"brands": [brand.to_dict() for brand in brands]}


@api_routes.route("/watchlist/<int:userId>/<int:discId>", methods=["POST"])
def api_add_to_watchlist(userId, discId):
    if Watchlist.query.filter_by(user_id=userId, disc_id=discId).all() == []:
        newWatch = Watchlist(user_id=userId, disc_id=discId)
        db.session.add(newWatch)
        db.session.commit()
        return newWatch.to_dict()
    # else:
    #     discs = Watchlist.query.filter_by(user_id=userId, disc_id=discId).all()
    #     for disc in discs:
    #       db.session.delete(disc)
    #       db.session.commit()
    #     return {"disc_id":-1}

@api_routes.route("/watchlist/<int:userId>/<int:discId>", methods=["DELETE"])
def api_delete_from_watchlist(userId, discId):
    if Watchlist.query.filter_by(user_id=userId, disc_id=discId).all():
        items = Watchlist.query.filter_by(user_id=userId, disc_id=discId).all()
        for item in items:
            db.session.delete(item)
            db.session.commit()
            return item.to_dict()
    else:
        return "not in watchlist"

@api_routes.route("/watchlist/<int:userId>")
def api_get_watchlist(userId):
    watchlist = Watchlist.query.filter_by(user_id=userId)
    return {"discs": [disc.to_dict() for disc in watchlist]}
