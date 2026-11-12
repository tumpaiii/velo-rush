import photoRollingRoadRide from "@/src/assets/images/rolling-road-ride.webp";
import photoRoadSprint from "@/src/assets/images/road-sprint.webp";
import photoRaceCornering from "@/src/assets/images/race-cornering.webp";
import photoPostRideCafe from "@/src/assets/images/post-ride-cafe.webp";
import photoPinningRaceBib from "@/src/assets/images/pinning-race-bib.webp";
import photoMeetupPark from "@/src/assets/images/meetup-park.webp";
import photoFinishLineRider from "@/src/assets/images/finish-line-rider.webp";
import photoFinalRoadRace from "@/src/assets/images/final-road-race.webp";
import photoEventBikeMechanic from "@/src/assets/images/event-bike-mechanic.webp";
import photoDawnCyclingMeetup from "@/src/assets/images/dawn-cycling-meetup.webp";
import guestCyclistPortrait from "@/src/assets/images/guest-cyclist-portrait.webp";
import heroGoldenHourPack from "@/src/assets/images/hero-golden-hour-pack.webp";
import heroSunsetCyclist from "@/src/assets/images/hero-sunset-cyclist.webp";
import heroLimeRacer from "@/src/assets/images/hero-lime-racer.webp";
import heroMountainPeloton from "@/src/assets/images/hero-mountain-peloton.webp";
import heroTrainingRide from "@/src/assets/images/hero-training-ride.webp";
import heroRoadPack from "@/src/assets/images/hero-road-pack.webp";
import heroRiderMeetup from "@/src/assets/images/hero-rider-meetup.webp";
import heroCityRace from "@/src/assets/images/hero-city-race.webp";
import guestAthlete from "@/src/assets/images/guest-athlete.webp";
import { readFile } from "node:fs/promises";
import { join } from "node:path";
import roadBike from "@/src/assets/images/road-bike.webp";
import roadRace from "@/src/assets/images/road-race.webp";
import venueLandscape from "@/src/assets/images/venue-landscape.webp";
import communityGuest from "@/src/assets/images/community-guest.webp";
import industryGuest from "@/src/assets/images/industry-guest.webp";
import orangeBicycle from "@/src/assets/images/orange-bicycle.webp";
import sunsetBike from "@/src/assets/images/sunset-bike.webp";
import peloton from "@/src/assets/images/peloton.webp";
import guestCoach from "@/src/assets/images/guest-coach.webp";
import racingCyclists from "@/src/assets/images/racing-cyclists.webp";

const photos: Record<string, string> = {
  "rolling-road-ride": photoRollingRoadRide.src,
  "road-sprint": photoRoadSprint.src,
  "race-cornering": photoRaceCornering.src,
  "post-ride-cafe": photoPostRideCafe.src,
  "pinning-race-bib": photoPinningRaceBib.src,
  "meetup-park": photoMeetupPark.src,
  "finish-line-rider": photoFinishLineRider.src,
  "final-road-race": photoFinalRoadRace.src,
  "event-bike-mechanic": photoEventBikeMechanic.src,
  "dawn-cycling-meetup": photoDawnCyclingMeetup.src,
  "guest-cyclist-portrait": guestCyclistPortrait.src,
  "hero-golden-hour-pack": heroGoldenHourPack.src,
  "hero-sunset-cyclist": heroSunsetCyclist.src,
  "hero-lime-racer": heroLimeRacer.src,
  "hero-mountain-peloton": heroMountainPeloton.src,
  "hero-training-ride": heroTrainingRide.src,
  "hero-road-pack": heroRoadPack.src,
  "hero-rider-meetup": heroRiderMeetup.src,
  "hero-city-race": heroCityRace.src,
  "guest-athlete": guestAthlete.src,
  "road-bike": roadBike.src,
  "road-race": roadRace.src,
  "venue-landscape": venueLandscape.src,
  "community-guest": communityGuest.src,
  "industry-guest": industryGuest.src,
  "orange-bicycle": orangeBicycle.src,
  "sunset-bike": sunsetBike.src,
  "peloton": peloton.src,
  "guest-coach": guestCoach.src,
  "racing-cyclists": racingCyclists.src,
};

export const dynamic = "force-static";

export async function GET() {
  const template = await readFile(
    join(process.cwd(), "lib", "velo-rush-preview.html"),
    "utf8",
  );
  const html = template.replace(/\{\{photo:([a-z-]+)\}\}/g, (_, name: string) => photos[name]);
  return new Response(html, { headers: { "Content-Type": "text/html; charset=utf-8" } });
}
