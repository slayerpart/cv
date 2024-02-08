import { Button } from "../ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "../ui/tooltip";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { RESUME_DATA } from "@/data/resume-data";
import { GlobeIcon, MailIcon, PhoneIcon } from "lucide-react";

export const HeaderSection = () => {
  return (
    <div className="flex items-center justify-between">
      <div className="flex-1 space-y-1.5">
        <h1 className="text-2xl font-bold">{RESUME_DATA.name}</h1>
        <p className="max-w-md text-pretty font-mono text-sm text-muted-foreground">
          {RESUME_DATA.about}
        </p>
        <p className="max-w-md items-center text-pretty font-mono text-xs text-muted-foreground">
          <a
            className="inline-flex gap-x-1.5 align-baseline leading-none hover:underline"
            href={RESUME_DATA.locationLink}
            target="_blank"
          >
            <GlobeIcon className="size-3" />
            {RESUME_DATA.location}
          </a>
        </p>
        <TooltipProvider>
          <div className="flex gap-x-1 pt-1 font-mono text-sm text-muted-foreground print:hidden">
            {RESUME_DATA.contact.email ? (
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button
                    className="size-8"
                    variant="outline"
                    size="icon"
                    asChild
                  >
                    <a href={`mailto:${RESUME_DATA.contact.email}`}>
                      <MailIcon className="size-4" />
                    </a>
                  </Button>
                </TooltipTrigger>
                <TooltipContent>
                  <p>Email</p>
                </TooltipContent>
              </Tooltip>
            ) : null}
            {"tel" in RESUME_DATA.contact ? (
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button
                    className="size-8"
                    variant="outline"
                    size="icon"
                    asChild
                  >
                    <a href={`tel:${RESUME_DATA.contact.tel}`}>
                      <PhoneIcon className="size-4" />
                    </a>
                  </Button>
                </TooltipTrigger>
                <TooltipContent>
                  <p>Call</p>
                </TooltipContent>
              </Tooltip>
            ) : null}
            {RESUME_DATA.contact.social.map((social) => (
              <Tooltip key={social.name}>
                <TooltipTrigger asChild>
                  <Button
                    className="size-8"
                    variant="outline"
                    size="icon"
                    asChild
                  >
                    <a href={social.url}>
                      <social.icon className="size-4" />
                    </a>
                  </Button>
                </TooltipTrigger>
                <TooltipContent>
                  <p>{social.name}</p>
                </TooltipContent>
              </Tooltip>
            ))}
          </div>
        </TooltipProvider>

        <div className="hidden flex-col gap-x-1 font-mono text-sm text-muted-foreground print:flex">
          {RESUME_DATA.contact.email ? (
            <a href={`mailto:${RESUME_DATA.contact.email}`}>
              <span className="underline">{RESUME_DATA.contact.email}</span>
            </a>
          ) : null}
          {"tel" in RESUME_DATA.contact &&
          typeof RESUME_DATA.contact.tel === "string" ? (
            <a href={`tel:${RESUME_DATA.contact.tel}`}>
              <span className="underline">{RESUME_DATA.contact.tel}</span>
            </a>
          ) : null}
        </div>
      </div>

      <Avatar className="size-28">
        <AvatarImage alt={RESUME_DATA.name} src={RESUME_DATA.avatarUrl} />
        <AvatarFallback>{RESUME_DATA.initials}</AvatarFallback>
      </Avatar>
    </div>
  );
};
