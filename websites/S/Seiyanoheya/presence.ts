const presence = new Presence({
  clientId: "812909969657298945"
});

var browsingStamp = Math.floor(Date.now() / 1000);

presence.on("UpdateData", async () => {
  if (document.location.pathname.startsWith("/game")) {
    const title = document.title.replace("誠也の部屋【", "").replace(" 攻略】", "");

    const presenceData: PresenceData = {
      details: `${title} を攻略中`,
      largeImageKey: "logo",
      startTimestamp: browsingStamp
    };

    if (presenceData.details == null) {
      presence.setTrayTitle()
      presence.setActivity();
    } else {
      presence.setActivity(presenceData);
    }
  }
});
