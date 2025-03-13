import { Avatar, AvatarFallback, AvatarImage } from "../../components/ui/avatar"
import { HoverCard, HoverCardTrigger, HoverCardContent } from "../../components/ui/hover-card"

export default function Title() {
  return (
    <HoverCard>
      <HoverCardTrigger asChild>
        <h1 className="text-3xl font-bold cursor-pointer hover:underline inline-block">thoughts.jishjitsu</h1>
      </HoverCardTrigger>
      <HoverCardContent className="w-80">
        <div className="flex justify-between space-x-4">
          <Avatar>
            <AvatarImage src="/jika.NEF"  className="object-cover"/>
            <AvatarFallback>JA</AvatarFallback>
          </Avatar>
          <div className="space-y-1">
            <p className="text-sm">
              Created and maintained by{" "}
              <a
                href="https://twitter.com/jishjitsu"
                className="text-primary hover:underline font-medium"
                target="_blank"
                rel="noopener noreferrer"
              >
                @Jishnu Attanti
              </a>
            </p>
          </div>
        </div>
      </HoverCardContent>
    </HoverCard>
  )
}


