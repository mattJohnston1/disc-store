from app.models import db, Disc

# Adds a demo user, you can add other users here if you want
def seed_discs():

    disc1 = Disc(name="Destroyer", brand_id=2, speed=12, glide=5, turn=-1, fade=3, flight_path="https://infinitediscs.com/Inf_Uploads/FlightPath_Images/2079719.png", price=13.99, description="The Destroyer is a very fast stable long distance driver. This disc is much like a faster Wraith, but with a little more high and low speed stability. Great disc for sidearm throwers and those with lots of power. Can handle headwinds and throws with off axis torque. Not suggested for beginning players.", images=["https://www.innovadiscs.com/wp-content/uploads/2014/11/Blizzard-Destroyer.jpg"], type_id=1, stability_id=2, diameter=21.1, height=1.4, rim_depth=1.2, rim_width=2.2, max_weight=178.0)
    disc2 = Disc(name="Boss", brand_id=2, speed=13, glide=5, turn=-1, fade=3, flight_path="https://infinitediscs.com/Inf_Uploads/FlightPath_Images/6049208.png", price=13.95, description="This is a fast stable driver that can handle full power throws and moderate headwinds. Advanced players and sidearm throwers will appreciate the dependable stability. The Boss has a slight high speed turn to help maximize distance with a predictable fade. David Wiggins Jr used a 154 gram R-Pro Boss to set the World Record 338 M (1108.92 feet) for the longest throw in March 2016.", images=["https://www.innovadiscs.com/wp-content/uploads/2015/02/CH-Boss.jpg"], type_id=1, stability_id=1, diameter=21.1, height=1.5, rim_depth=1.2, rim_width=2.5, max_weight=184.0)
    disc3 = Disc(name="Hades", brand_id=1, speed=12, glide=6, turn=-3, fade=2, flight_path="https://infinitediscs.com/Inf_Uploads/FlightPath_Images/2613404.png", price=24.99, description="The Hades is the newest Paul McBeth Series Driver. It's a straight to understable driver with massive amounts of glide. The Hades will be your new go-to distance driver, especially if you are intermediate to advanced. Players with bigger arms will find this to be an awesome, long bomb understable disc that will glide for days.", images=["https://static.wixstatic.com/media/b32cf7_fded1b9bb0fc41009435a0a93eb92d07~mv2.jpg", "https://images-na.ssl-images-amazon.com/images/I/71odOQea4uL._AC_SL1500_.jpg"], type_id=1, stability_id=3, diameter=21.0, height=1.6, rim_depth=1.1, rim_width=2.3, max_weight=174.0)
    disc4 = Disc(name="X Line Aveger SS", brand_id=1, speed=10, glide=5, turn=-3, fade=1, flight_path="https://infinitediscs.com/Inf_Uploads/FlightPath_Images/2613404.png", price=24.99, description="The Hades is the newest Paul McBeth Series Driver. It's a straight to understable driver with massive amounts of glide. The Hades will be your new go-to distance driver, especially if you are intermediate to advanced. Players with bigger arms will find this to be an awesome, long bomb understable disc that will glide for days.", images=["https://www.discraft.com/product/image/large/xavengerss_max-dk_1.png"], type_id=1, stability_id=3, diameter=21.0, height=1.6, rim_depth=1.1, rim_width=2.3, max_weight=174.0)
    disc5 = Disc(name="Banger GT", brand_id=1, speed=2, glide=3, turn=0, fade=1, flight_path="https://infinitediscs.com/Inf_Uploads/FlightPath_Images/2613404.png", price=24.99, description="The Hades is the newest Paul McBeth Series Driver. It's a straight to understable driver with massive amounts of glide. The Hades will be your new go-to distance driver, especially if you are intermediate to advanced. Players with bigger arms will find this to be an awesome, long bomb understable disc that will glide for days.", images=["https://www.discraft.com/product/image/large/bangergt_1.png"], type_id=3, stability_id=3, diameter=21.0, height=1.6, rim_depth=1.1, rim_width=2.3, max_weight=174.0)
    disc6 = Disc(name="Challenger SS", brand_id=1, speed=2, glide=3, turn=-1, fade=2, flight_path="https://infinitediscs.com/Inf_Uploads/FlightPath_Images/2613404.png", price=24.99, description="The Hades is the newest Paul McBeth Series Driver. It's a straight to understable driver with massive amounts of glide. The Hades will be your new go-to distance driver, especially if you are intermediate to advanced. Players with bigger arms will find this to be an awesome, long bomb understable disc that will glide for days.", images=["https://www.discraft.com/product/image/large/challengerss_1.png"], type_id=3, stability_id=3, diameter=21.0, height=1.6, rim_depth=1.1, rim_width=2.3, max_weight=174.0)
    disc7 = Disc(name="Thunder Bird", brand_id=2, speed=9, glide=5, turn=0, fade=2, flight_path="https://infinitediscs.com/Inf_Uploads/FlightPath_Images/2079719.png", price=13.99, description="The Destroyer is a very fast stable long distance driver. This disc is much like a faster Wraith, but with a little more high and low speed stability. Great disc for sidearm throwers and those with lots of power. Can handle headwinds and throws with off axis torque. Not suggested for beginning players.", images=["https://images-na.ssl-images-amazon.com/images/I/61ik5YYga3L._AC_SL1000_.jpg"], type_id=1, stability_id=2, diameter=21.1, height=1.4, rim_depth=1.2, rim_width=2.2, max_weight=178.0)
    disc9 = Disc(name="Champion Firebird", brand_id=2, speed=9, glide=3, turn=-0, fade=4, flight_path="https://infinitediscs.com/Inf_Uploads/FlightPath_Images/2079719.png", price=13.99, description="The Destroyer is a very fast stable long distance driver. This disc is much like a faster Wraith, but with a little more high and low speed stability. Great disc for sidearm throwers and those with lots of power. Can handle headwinds and throws with off axis torque. Not suggested for beginning players.", images=["https://images-na.ssl-images-amazon.com/images/I/51EnWKQSPLL._AC_SL1001_.jpg"], type_id=1, stability_id=2, diameter=21.1, height=1.4, rim_depth=1.2, rim_width=2.2, max_weight=178.0)
    disc10 = Disc(name="Harp", brand_id=3, speed=4, glide=3, turn=0, fade=3, flight_path="https://infinitediscs.com/Inf_Uploads/FlightPath_Images/2079719.png", price=13.99, description="The Destroyer is a very fast stable long distance driver. This disc is much like a faster Wraith, but with a little more high and low speed stability. Great disc for sidearm throwers and those with lots of power. Can handle headwinds and throws with off axis torque. Not suggested for beginning players.", images=["https://images-na.ssl-images-amazon.com/images/I/71CJlvHBE8L._AC_SL1500_.jpg"], type_id=3, stability_id=2, diameter=21.1, height=1.4, rim_depth=1.2, rim_width=2.2, max_weight=178.0)
    disc11 = Disc(name="Champion Valkyrie", brand_id=2, speed=9, glide=4, turn=-2, fade=2, flight_path="https://infinitediscs.com/Inf_Uploads/FlightPath_Images/2079719.png", price=13.99, description="The Destroyer is a very fast stable long distance driver. This disc is much like a faster Wraith, but with a little more high and low speed stability. Great disc for sidearm throwers and those with lots of power. Can handle headwinds and throws with off axis torque. Not suggested for beginning players.", images=["https://images-na.ssl-images-amazon.com/images/I/611WQYfty0L._AC_SL1001_.jpg"], type_id=1, stability_id=2, diameter=21.1, height=1.4, rim_depth=1.2, rim_width=2.2, max_weight=178.0)
    disc12 = Disc(name="Truth", brand_id=3, speed=5, glide=5, turn=0, fade=2, flight_path="https://infinitediscs.com/Inf_Uploads/FlightPath_Images/2079719.png", price=13.99, description="The Destroyer is a very fast stable long distance driver. This disc is much like a faster Wraith, but with a little more high and low speed stability. Great disc for sidearm throwers and those with lots of power. Can handle headwinds and throws with off axis torque. Not suggested for beginning players.", images=["https://images-na.ssl-images-amazon.com/images/I/71B4%2Bb%2BcwQL._AC_SL1500_.jpg"], type_id=3, stability_id=2, diameter=21.1, height=1.4, rim_depth=1.2, rim_width=2.2, max_weight=178.0)
    disc13 = Disc(name="Trespass", brand_id=3, speed=12, glide=5, turn=-0.5, fade=3, flight_path="https://infinitediscs.com/Inf_Uploads/FlightPath_Images/2079719.png", price=13.99, description="The Destroyer is a very fast stable long distance driver. This disc is much like a faster Wraith, but with a little more high and low speed stability. Great disc for sidearm throwers and those with lots of power. Can handle headwinds and throws with off axis torque. Not suggested for beginning players.", images=["https://images-na.ssl-images-amazon.com/images/I/5177qZhWtWL._AC_SL1000_.jpg"], type_id=1, stability_id=2, diameter=21.1, height=1.4, rim_depth=1.2, rim_width=2.2, max_weight=178.0)
    disc14 = Disc(name="Magnet", brand_id=1, speed=2, glide=3, turn=-1, fade=1, flight_path="https://infinitediscs.com/Inf_Uploads/FlightPath_Images/2613404.png", price=24.99, description="The Hades is the newest Paul McBeth Series Driver. It's a straight to understable driver with massive amounts of glide. The Hades will be your new go-to distance driver, especially if you are intermediate to advanced. Players with bigger arms will find this to be an awesome, long bomb understable disc that will glide for days.", images=["https://www.discraft.com/product/image/large/magnet_1.png"], type_id=3, stability_id=3, diameter=21.0, height=1.6, rim_depth=1.1, rim_width=2.3, max_weight=174.0)
    disc15 = Disc(name="Focus", brand_id=1, speed=2, glide=2, turn=-1, fade=2, flight_path="https://infinitediscs.com/Inf_Uploads/FlightPath_Images/2613404.png", price=24.99, description="The Hades is the newest Paul McBeth Series Driver. It's a straight to understable driver with massive amounts of glide. The Hades will be your new go-to distance driver, especially if you are intermediate to advanced. Players with bigger arms will find this to be an awesome, long bomb understable disc that will glide for days.", images=["https://www.discraft.com/product/image/large/focus_1.png"], type_id=3, stability_id=3, diameter=21.0, height=1.6, rim_depth=1.1, rim_width=2.3, max_weight=174.0)
    disc16 = Disc(name="ESP Meteor", brand_id=1, speed=5, glide=5, turn=-3, fade=1, flight_path="https://infinitediscs.com/Inf_Uploads/FlightPath_Images/2613404.png", price=24.99, description="The Hades is the newest Paul McBeth Series Driver. It's a straight to understable driver with massive amounts of glide. The Hades will be your new go-to distance driver, especially if you are intermediate to advanced. Players with bigger arms will find this to be an awesome, long bomb understable disc that will glide for days.", images=["https://www.discraft.com/product/image/large/emeteor_max-dk_1.jpg"], type_id=2, stability_id=3, diameter=21.0, height=1.6, rim_depth=1.1, rim_width=2.3, max_weight=174.0)
    disc17 = Disc(name="Jaw Breaker", brand_id=1, speed=2, glide=3, turn=0, fade=2, flight_path="https://infinitediscs.com/Inf_Uploads/FlightPath_Images/2613404.png", price=24.99, description="The Hades is the newest Paul McBeth Series Driver. It's a straight to understable driver with massive amounts of glide. The Hades will be your new go-to distance driver, especially if you are intermediate to advanced. Players with bigger arms will find this to be an awesome, long bomb understable disc that will glide for days.", images=["https://www.discraft.com/product/image/large/jchallenger_max-dk_1.jpg"], type_id=3, stability_id=3, diameter=21.0, height=1.6, rim_depth=1.1, rim_width=2.3, max_weight=174.0)
    disc18 = Disc(name="ESP Buzz", brand_id=1, speed=5, glide=4, turn=-1, fade=0, flight_path="https://infinitediscs.com/Inf_Uploads/FlightPath_Images/2613404.png", price=24.99, description="The Hades is the newest Paul McBeth Series Driver. It's a straight to understable driver with massive amounts of glide. The Hades will be your new go-to distance driver, especially if you are intermediate to advanced. Players with bigger arms will find this to be an awesome, long bomb understable disc that will glide for days.", images=["https://www.discraft.com/product/image/large/ebuzzz.brushedmandal_mando%20brush.jpg"], type_id=2, stability_id=3, diameter=21.0, height=1.6, rim_depth=1.1, rim_width=2.3, max_weight=174.0)
    disc19 = Disc(name="Challenger", brand_id=1, speed=2, glide=3, turn=0, fade=2, flight_path="https://infinitediscs.com/Inf_Uploads/FlightPath_Images/2613404.png", price=24.99, description="The Hades is the newest Paul McBeth Series Driver. It's a straight to understable driver with massive amounts of glide. The Hades will be your new go-to distance driver, especially if you are intermediate to advanced. Players with bigger arms will find this to be an awesome, long bomb understable disc that will glide for days.", images=["https://www.discraft.com/product/image/large/challenger_1.png"], type_id=3, stability_id=3, diameter=21.0, height=1.6, rim_depth=1.1, rim_width=2.3, max_weight=174.0)
    disc20 = Disc(name="x Buzz", brand_id=1, speed=5, glide=4, turn=-1, fade=0, flight_path="https://infinitediscs.com/Inf_Uploads/FlightPath_Images/2613404.png", price=24.99, description="The Hades is the newest Paul McBeth Series Driver. It's a straight to understable driver with massive amounts of glide. The Hades will be your new go-to distance driver, especially if you are intermediate to advanced. Players with bigger arms will find this to be an awesome, long bomb understable disc that will glide for days.", images=["https://www.discraft.com/product/image/large/xbuzzz_max-br_1.png"], type_id=2, stability_id=3, diameter=21.0, height=1.6, rim_depth=1.1, rim_width=2.3, max_weight=174.0)
    disc21 = Disc(name="Challenger OS", brand_id=1, speed=2, glide=3, turn=0, fade=3, flight_path="https://infinitediscs.com/Inf_Uploads/FlightPath_Images/2613404.png", price=24.99, description="The Hades is the newest Paul McBeth Series Driver. It's a straight to understable driver with massive amounts of glide. The Hades will be your new go-to distance driver, especially if you are intermediate to advanced. Players with bigger arms will find this to be an awesome, long bomb understable disc that will glide for days.", images=["https://www.discraft.com/product/image/large/challengeros_1.png"], type_id=3, stability_id=3, diameter=21.0, height=1.6, rim_depth=1.1, rim_width=2.3, max_weight=174.0)
    disc22 = Disc(name="ESP Zone", brand_id=1, speed=4, glide=3, turn=0, fade=3, flight_path="https://infinitediscs.com/Inf_Uploads/FlightPath_Images/2613404.png", price=24.99, description="The Hades is the newest Paul McBeth Series Driver. It's a straight to understable driver with massive amounts of glide. The Hades will be your new go-to distance driver, especially if you are intermediate to advanced. Players with bigger arms will find this to be an awesome, long bomb understable disc that will glide for days.", images=["https://www.discraft.com/product/image/large/ezone_max-dk_1.jpg"], type_id=2, stability_id=3, diameter=21.0, height=1.6, rim_depth=1.1, rim_width=2.3, max_weight=174.0)
    disc23 = Disc(name="Undertaker", brand_id=1, speed=9, glide=5, turn=-1, fade=2, flight_path="https://infinitediscs.com/Inf_Uploads/FlightPath_Images/2613404.png", price=24.99, description="The Hades is the newest Paul McBeth Series Driver. It's a straight to understable driver with massive amounts of glide. The Hades will be your new go-to distance driver, especially if you are intermediate to advanced. Players with bigger arms will find this to be an awesome, long bomb understable disc that will glide for days.", images=["https://www.discraft.com/product/image/large/eundertaker_max-br_1.jpg"], type_id=1, stability_id=3, diameter=21.0, height=1.6, rim_depth=1.1, rim_width=2.3, max_weight=174.0)
    disc24 = Disc(name="Z Line Raptor", brand_id=1, speed=9, glide=4, turn=0, fade=3, flight_path="https://infinitediscs.com/Inf_Uploads/FlightPath_Images/2613404.png", price=24.99, description="The Hades is the newest Paul McBeth Series Driver. It's a straight to understable driver with massive amounts of glide. The Hades will be your new go-to distance driver, especially if you are intermediate to advanced. Players with bigger arms will find this to be an awesome, long bomb understable disc that will glide for days.", images=["https://www.discraft.com/product/image/large/zraptor_max-dk_1.jpg"], type_id=1, stability_id=3, diameter=21.0, height=1.6, rim_depth=1.1, rim_width=2.3, max_weight=174.0)
    disc25 = Disc(name="Paul McBeth Malta", brand_id=1, speed=5, glide=4, turn=1, fade=3, flight_path="https://infinitediscs.com/Inf_Uploads/FlightPath_Images/2613404.png", price=24.99, description="The Hades is the newest Paul McBeth Series Driver. It's a straight to understable driver with massive amounts of glide. The Hades will be your new go-to distance driver, especially if you are intermediate to advanced. Players with bigger arms will find this to be an awesome, long bomb understable disc that will glide for days.", images=["https://www.discraft.com/product/image/large/mcbethmalta_malta1.jpg"], type_id=2, stability_id=3, diameter=21.0, height=1.6, rim_depth=1.1, rim_width=2.3, max_weight=174.0)
    disc26 = Disc(name="Paul McBeth Zeus", brand_id=1, speed=12, glide=5, turn=-1, fade=3, flight_path="https://infinitediscs.com/Inf_Uploads/FlightPath_Images/2613404.png", price=24.99, description="The Hades is the newest Paul McBeth Series Driver. It's a straight to understable driver with massive amounts of glide. The Hades will be your new go-to distance driver, especially if you are intermediate to advanced. Players with bigger arms will find this to be an awesome, long bomb understable disc that will glide for days.", images=["https://www.discraft.com/product/image/large/mcbethzeus_zeus4%20copy.jpg"], type_id=1, stability_id=3, diameter=21.0, height=1.6, rim_depth=1.1, rim_width=2.3, max_weight=174.0)
    disc27 = Disc(name="Z Line Nuke", brand_id=1, speed=13, glide=5, turn=-1, fade=3, flight_path="https://infinitediscs.com/Inf_Uploads/FlightPath_Images/2613404.png", price=24.99, description="The Hades is the newest Paul McBeth Series Driver. It's a straight to understable driver with massive amounts of glide. The Hades will be your new go-to distance driver, especially if you are intermediate to advanced. Players with bigger arms will find this to be an awesome, long bomb understable disc that will glide for days.", images=["https://www.discraft.com/product/image/large/znuke_max-br_1.jpg"], type_id=1, stability_id=3, diameter=21.0, height=1.6, rim_depth=1.1, rim_width=2.3, max_weight=174.0)
    disc28 = Disc(name="ESP Crank", brand_id=1, speed=13, glide=5, turn=-2, fade=2, flight_path="https://infinitediscs.com/Inf_Uploads/FlightPath_Images/2613404.png", price=24.99, description="The Hades is the newest Paul McBeth Series Driver. It's a straight to understable driver with massive amounts of glide. The Hades will be your new go-to distance driver, especially if you are intermediate to advanced. Players with bigger arms will find this to be an awesome, long bomb understable disc that will glide for days.", images=["https://www.discraft.com/product/image/large/ecrank.rs_1.jpg"], type_id=1, stability_id=3, diameter=21.0, height=1.6, rim_depth=1.1, rim_width=2.3, max_weight=174.0)
    disc29 = Disc(name="ESP Thrasher", brand_id=1, speed=12, glide=5, turn=-3, fade=2, flight_path="https://infinitediscs.com/Inf_Uploads/FlightPath_Images/2613404.png", price=24.99, description="The Hades is the newest Paul McBeth Series Driver. It's a straight to understable driver with massive amounts of glide. The Hades will be your new go-to distance driver, especially if you are intermediate to advanced. Players with bigger arms will find this to be an awesome, long bomb understable disc that will glide for days.", images=["https://www.discraft.com/product/image/large/ethrasher_max-br_1.jpg"], type_id=1, stability_id=3, diameter=21.0, height=1.6, rim_depth=1.1, rim_width=2.3, max_weight=174.0)
    disc30 = Disc(name="DX Invader", brand_id=2, speed=3, glide=2, turn=0, fade=1, flight_path="https://infinitediscs.com/Inf_Uploads/FlightPath_Images/2613404.png", price=24.99, description="The Hades is the newest Paul McBeth Series Driver. It's a straight to understable driver with massive amounts of glide. The Hades will be your new go-to distance driver, especially if you are intermediate to advanced. Players with bigger arms will find this to be an awesome, long bomb understable disc that will glide for days.", images=["https://www.innovadiscs.com/wp-content/uploads/2020/05/DX_Invader.jpg"], type_id=3, stability_id=3, diameter=21.0, height=1.6, rim_depth=1.1, rim_width=2.3, max_weight=174.0)

    disc31 = Disc(name="Star Daedalus", brand_id=2, speed=13, glide=6, turn=-3, fade=2, flight_path="https://infinitediscs.com/Inf_Uploads/FlightPath_Images/2613404.png", price=24.99, description="The Hades is the newest Paul McBeth Series Driver. It's a straight to understable driver with massive amounts of glide. The Hades will be your new go-to distance driver, especially if you are intermediate to advanced. Players with bigger arms will find this to be an awesome, long bomb understable disc that will glide for days.", images=["https://www.innovadiscs.com/wp-content/uploads/2015/02/Star-Daedalus.jpg"], type_id=1, stability_id=3, diameter=21.0, height=1.6, rim_depth=1.1, rim_width=2.3, max_weight=174.0)
    disc32 = Disc(name="Star Shryke", brand_id=2, speed=13, glide=6, turn=-2, fade=2, flight_path="https://infinitediscs.com/Inf_Uploads/FlightPath_Images/2613404.png", price=24.99, description="The Hades is the newest Paul McBeth Series Driver. It's a straight to understable driver with massive amounts of glide. The Hades will be your new go-to distance driver, especially if you are intermediate to advanced. Players with bigger arms will find this to be an awesome, long bomb understable disc that will glide for days.", images=["https://www.innovadiscs.com/wp-content/uploads/2016/11/Star_Shryke.jpg"], type_id=1, stability_id=3, diameter=21.0, height=1.6, rim_depth=1.1, rim_width=2.3, max_weight=174.0)
    disc33 = Disc(name="Pro Wraith", brand_id=2, speed=11, glide=5, turn=-1, fade=3, flight_path="https://infinitediscs.com/Inf_Uploads/FlightPath_Images/2613404.png", price=24.99, description="The Hades is the newest Paul McBeth Series Driver. It's a straight to understable driver with massive amounts of glide. The Hades will be your new go-to distance driver, especially if you are intermediate to advanced. Players with bigger arms will find this to be an awesome, long bomb understable disc that will glide for days.", images=["https://www.innovadiscs.com/wp-content/uploads/2015/02/Pro-Wraith.jpg"], type_id=1, stability_id=3, diameter=21.0, height=1.6, rim_depth=1.1, rim_width=2.3, max_weight=174.0)
    disc34 = Disc(name="Star Firebird", brand_id=2, speed=9, glide=3, turn=0, fade=4, flight_path="https://infinitediscs.com/Inf_Uploads/FlightPath_Images/2613404.png", price=24.99, description="The Hades is the newest Paul McBeth Series Driver. It's a straight to understable driver with massive amounts of glide. The Hades will be your new go-to distance driver, especially if you are intermediate to advanced. Players with bigger arms will find this to be an awesome, long bomb understable disc that will glide for days.", images=["https://www.innovadiscs.com/wp-content/uploads/2015/02/Star-Firebird.jpg"], type_id=1, stability_id=3, diameter=21.0, height=1.6, rim_depth=1.1, rim_width=2.3, max_weight=174.0)
    disc35 = Disc(name="Pro Thunderbird", brand_id=2, speed=9, glide=5, turn=0, fade=2, flight_path="https://infinitediscs.com/Inf_Uploads/FlightPath_Images/2613404.png", price=24.99, description="The Hades is the newest Paul McBeth Series Driver. It's a straight to understable driver with massive amounts of glide. The Hades will be your new go-to distance driver, especially if you are intermediate to advanced. Players with bigger arms will find this to be an awesome, long bomb understable disc that will glide for days.", images=["https://www.innovadiscs.com/wp-content/uploads/2015/02/Pro-Thunderbird.jpg"], type_id=1, stability_id=3, diameter=21.0, height=1.6, rim_depth=1.1, rim_width=2.3, max_weight=174.0)
    disc36 = Disc(name="Champion Valkyrie", brand_id=2, speed=9, glide=4, turn=-2, fade=2, flight_path="https://infinitediscs.com/Inf_Uploads/FlightPath_Images/2613404.png", price=24.99, description="The Hades is the newest Paul McBeth Series Driver. It's a straight to understable driver with massive amounts of glide. The Hades will be your new go-to distance driver, especially if you are intermediate to advanced. Players with bigger arms will find this to be an awesome, long bomb understable disc that will glide for days.", images=["https://www.innovadiscs.com/wp-content/uploads/2015/02/Champion-Valkyrie.jpg"], type_id=1, stability_id=3, diameter=21.0, height=1.6, rim_depth=1.1, rim_width=2.3, max_weight=174.0)

    disc37 = Disc(name="Mako3", brand_id=2, speed=5, glide=5, turn=0, fade=0, flight_path="https://infinitediscs.com/Inf_Uploads/FlightPath_Images/2613404.png", price=24.99, description="The Hades is the newest Paul McBeth Series Driver. It's a straight to understable driver with massive amounts of glide. The Hades will be your new go-to distance driver, especially if you are intermediate to advanced. Players with bigger arms will find this to be an awesome, long bomb understable disc that will glide for days.", images=["https://www.innovadiscs.com/wp-content/uploads/2015/02/Champion-Mako3.jpg"], type_id=2, stability_id=3, diameter=21.0, height=1.6, rim_depth=1.1, rim_width=2.3, max_weight=174.0)
    disc38 = Disc(name="Atlas", brand_id=2, speed=5, glide=4, turn=0, fade=1, flight_path="https://infinitediscs.com/Inf_Uploads/FlightPath_Images/2613404.png", price=24.99, description="The Hades is the newest Paul McBeth Series Driver. It's a straight to understable driver with massive amounts of glide. The Hades will be your new go-to distance driver, especially if you are intermediate to advanced. Players with bigger arms will find this to be an awesome, long bomb understable disc that will glide for days.", images=["https://www.innovadiscs.com/wp-content/uploads/2015/02/XT-Atlas.jpg"], type_id=2, stability_id=3, diameter=21.0, height=1.6, rim_depth=1.1, rim_width=2.3, max_weight=174.0)
    disc39 = Disc(name="Manta", brand_id=2, speed=5, glide=5, turn=-2, fade=1, flight_path="https://infinitediscs.com/Inf_Uploads/FlightPath_Images/2613404.png", price=24.99, description="The Hades is the newest Paul McBeth Series Driver. It's a straight to understable driver with massive amounts of glide. The Hades will be your new go-to distance driver, especially if you are intermediate to advanced. Players with bigger arms will find this to be an awesome, long bomb understable disc that will glide for days.", images=["https://www.innovadiscs.com/wp-content/uploads/2017/01/gstar-manta_green.jpg"], type_id=2, stability_id=3, diameter=21.0, height=1.6, rim_depth=1.1, rim_width=2.3, max_weight=174.0)
    disc40 = Disc(name="Star Roc3", brand_id=2, speed=5, glide=4, turn=0, fade=3, flight_path="https://infinitediscs.com/Inf_Uploads/FlightPath_Images/2613404.png", price=24.99, description="The Hades is the newest Paul McBeth Series Driver. It's a straight to understable driver with massive amounts of glide. The Hades will be your new go-to distance driver, especially if you are intermediate to advanced. Players with bigger arms will find this to be an awesome, long bomb understable disc that will glide for days.", images=["https://www.innovadiscs.com/wp-content/uploads/2015/02/Star-Roc3.jpg"], type_id=2, stability_id=3, diameter=21.0, height=1.6, rim_depth=1.1, rim_width=2.3, max_weight=174.0)
    disc41 = Disc(name="Star RocX3", brand_id=2, speed=5, glide=4, turn=0, fade=3, flight_path="https://infinitediscs.com/Inf_Uploads/FlightPath_Images/2613404.png", price=24.99, description="The Hades is the newest Paul McBeth Series Driver. It's a straight to understable driver with massive amounts of glide. The Hades will be your new go-to distance driver, especially if you are intermediate to advanced. Players with bigger arms will find this to be an awesome, long bomb understable disc that will glide for days.", images=["https://www.innovadiscs.com/wp-content/uploads/2017/04/Star_RocX3.jpg"], type_id=2, stability_id=3, diameter=21.0, height=1.6, rim_depth=1.1, rim_width=2.3, max_weight=174.0)
    disc42 = Disc(name="Champion Shark3", brand_id=2, speed=5, glide=4, turn=0, fade=2, flight_path="https://infinitediscs.com/Inf_Uploads/FlightPath_Images/2613404.png", price=24.99, description="The Hades is the newest Paul McBeth Series Driver. It's a straight to understable driver with massive amounts of glide. The Hades will be your new go-to distance driver, especially if you are intermediate to advanced. Players with bigger arms will find this to be an awesome, long bomb understable disc that will glide for days.", images=["https://www.innovadiscs.com/wp-content/uploads/2015/02/Champion-Shark3.jpg"], type_id=2, stability_id=3, diameter=21.0, height=1.6, rim_depth=1.1, rim_width=2.3, max_weight=174.0)

    disc43 = Disc(name="Pig", brand_id=2, speed=3, glide=1, turn=0, fade=3, flight_path="https://infinitediscs.com/Inf_Uploads/FlightPath_Images/2613404.png", price=24.99, description="The Hades is the newest Paul McBeth Series Driver. It's a straight to understable driver with massive amounts of glide. The Hades will be your new go-to distance driver, especially if you are intermediate to advanced. Players with bigger arms will find this to be an awesome, long bomb understable disc that will glide for days.", images=["https://www.innovadiscs.com/wp-content/uploads/2015/02/R-Pro-Pig.jpg"], type_id=3, stability_id=3, diameter=21.0, height=1.6, rim_depth=1.1, rim_width=2.3, max_weight=174.0)
    disc44 = Disc(name="Aero", brand_id=2, speed=3, glide=6, turn=0, fade=0, flight_path="https://infinitediscs.com/Inf_Uploads/FlightPath_Images/2613404.png", price=24.99, description="The Hades is the newest Paul McBeth Series Driver. It's a straight to understable driver with massive amounts of glide. The Hades will be your new go-to distance driver, especially if you are intermediate to advanced. Players with bigger arms will find this to be an awesome, long bomb understable disc that will glide for days.", images=["https://www.innovadiscs.com/wp-content/uploads/2015/02/DX-Aero.jpg"], type_id=3, stability_id=3, diameter=21.0, height=1.6, rim_depth=1.1, rim_width=2.3, max_weight=174.0)
    disc45 = Disc(name="Aviar3", brand_id=2, speed=3, glide=2, turn=0, fade=2, flight_path="https://infinitediscs.com/Inf_Uploads/FlightPath_Images/2613404.png", price=24.99, description="The Hades is the newest Paul McBeth Series Driver. It's a straight to understable driver with massive amounts of glide. The Hades will be your new go-to distance driver, especially if you are intermediate to advanced. Players with bigger arms will find this to be an awesome, long bomb understable disc that will glide for days.", images=["https://www.innovadiscs.com/wp-content/uploads/2017/03/Star-Aviar3.jpg"], type_id=3, stability_id=3, diameter=21.0, height=1.6, rim_depth=1.1, rim_width=2.3, max_weight=174.0)
    disc46 = Disc(name="XD", brand_id=2, speed=3, glide=4, turn=-1, fade=1, flight_path="https://infinitediscs.com/Inf_Uploads/FlightPath_Images/2613404.png", price=24.99, description="The Hades is the newest Paul McBeth Series Driver. It's a straight to understable driver with massive amounts of glide. The Hades will be your new go-to distance driver, especially if you are intermediate to advanced. Players with bigger arms will find this to be an awesome, long bomb understable disc that will glide for days.", images=["https://www.innovadiscs.com/wp-content/uploads/2015/02/DX-XD-.jpg"], type_id=3, stability_id=3, diameter=21.0, height=1.6, rim_depth=1.1, rim_width=2.3, max_weight=174.0)
    disc47 = Disc(name="Mirage", brand_id=2, speed=3, glide=4, turn=-3, fade=0, flight_path="https://infinitediscs.com/Inf_Uploads/FlightPath_Images/2613404.png", price=24.99, description="The Hades is the newest Paul McBeth Series Driver. It's a straight to understable driver with massive amounts of glide. The Hades will be your new go-to distance driver, especially if you are intermediate to advanced. Players with bigger arms will find this to be an awesome, long bomb understable disc that will glide for days.", images=["https://www.innovadiscs.com/wp-content/uploads/2016/05/Star-Mirage-1.jpg"], type_id=3, stability_id=3, diameter=21.0, height=1.6, rim_depth=1.1, rim_width=2.3, max_weight=174.0)
    disc48 = Disc(name="Invader", brand_id=2, speed=3, glide=2, turn=0, fade=1, flight_path="https://infinitediscs.com/Inf_Uploads/FlightPath_Images/2613404.png", price=24.99, description="The Hades is the newest Paul McBeth Series Driver. It's a straight to understable driver with massive amounts of glide. The Hades will be your new go-to distance driver, especially if you are intermediate to advanced. Players with bigger arms will find this to be an awesome, long bomb understable disc that will glide for days.", images=["https://www.innovadiscs.com/wp-content/uploads/2020/05/DX_Invader.jpg"], type_id=3, stability_id=3, diameter=21.0, height=1.6, rim_depth=1.1, rim_width=2.3, max_weight=174.0)

    disc49 = Disc(name="Justice", brand_id=3, speed=12, glide=4, turn=0, fade=4, flight_path="https://infinitediscs.com/Inf_Uploads/FlightPath_Images/2613404.png", price=24.99, description="The Hades is the newest Paul McBeth Series Driver. It's a straight to understable driver with massive amounts of glide. The Hades will be your new go-to distance driver, especially if you are intermediate to advanced. Players with bigger arms will find this to be an awesome, long bomb understable disc that will glide for days.", images=["https://infinitediscs.com/Inf_Uploads/Disc_Images/DI_d41e4de2-4eb3-4e2f-ba35-d112088536a5Dynamic_Justice.png"], type_id=1, stability_id=3, diameter=21.0, height=1.6, rim_depth=1.1, rim_width=2.3, max_weight=174.0)
    disc53 = Disc(name="Sword", brand_id=3, speed=12, glide=5, turn=0, fade=2, flight_path="https://infinitediscs.com/Inf_Uploads/FlightPath_Images/2613404.png", price=24.99, description="The Hades is the newest Paul McBeth Series Driver. It's a straight to understable driver with massive amounts of glide. The Hades will be your new go-to distance driver, especially if you are intermediate to advanced. Players with bigger arms will find this to be an awesome, long bomb understable disc that will glide for days.", images=["https://infinitediscs.com/Inf_Uploads/Disc_Images/DI_36b14ccd-eda9-401c-b67c-3f110f4d43d1Dynamic-Discs-Lucid-Warrant.jpg"], type_id=1, stability_id=3, diameter=21.0, height=1.6, rim_depth=1.1, rim_width=2.3, max_weight=174.0)

    db.session.add(disc1)
    db.session.add(disc2)
    db.session.add(disc3)
    db.session.add(disc4)
    db.session.add(disc5)
    db.session.add(disc6)
    db.session.add(disc7)
    db.session.add(disc9)
    db.session.add(disc10)
    db.session.add(disc11)
    db.session.add(disc12)
    db.session.add(disc13)
    db.session.add(disc14)
    db.session.add(disc15)
    db.session.add(disc16)
    db.session.add(disc17)
    db.session.add(disc18)
    db.session.add(disc19)
    db.session.add(disc20)
    db.session.add(disc21)
    db.session.add(disc22)
    db.session.add(disc23)
    db.session.add(disc24)
    db.session.add(disc25)
    db.session.add(disc26)
    db.session.add(disc27)
    db.session.add(disc28)
    db.session.add(disc29)
    db.session.add(disc30)
    db.session.add(disc31)
    db.session.add(disc32)
    db.session.add(disc33)
    db.session.add(disc34)
    db.session.add(disc35)
    db.session.add(disc36)
    db.session.add(disc37)
    db.session.add(disc38)
    db.session.add(disc39)
    db.session.add(disc40)
    db.session.add(disc41)
    db.session.add(disc42)
    db.session.add(disc43)
    db.session.add(disc44)
    db.session.add(disc45)
    db.session.add(disc46)
    db.session.add(disc47)
    db.session.add(disc48)
    db.session.add(disc49)
    db.session.add(disc53)

    db.session.commit()

# Uses a raw SQL query to TRUNCATE the users table.
# SQLAlchemy doesn't have a built in function to do this
# TRUNCATE Removes all the data from the table, and resets
# the auto incrementing primary key
def undo_discs():
    db.session.execute('TRUNCATE discs CASCADE;')
    db.session.commit()
