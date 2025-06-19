import { Card, CardHeader, CardBody, CardFooter, Divider, Link, Image, Chip } from "@nextui-org/react";
import { Project, Tech } from "@/app/data/projects";

function TechCard({ tech }: { tech: Tech }) {
    return (
        <div className="w-fit flex flex-row gap-1">
            <tech.logo className={`col-span-4 text-xl ${tech.logoColor}`} />
            <p className="col-span-8 text-default-600 text-sm">
                {tech.name}
            </p>
        </div>
    );
}

const PhoneMockUp: any = ({ project }: { project: Project }) => {
    return (
        <div className="mockup-phone">
            <div className="camera"></div>
            <div className="display">
                <img src={project.image} alt={project.name} />
            </div>
        </div>
    )
}

const DesktopMockUp: any = ({ project }: { project: Project }) => {
    return (
        <div className="mockup-window bg-base-300 border">
            <img className="" src={project.image} alt={project.name} />
        </div>
    )
}

export default function ProjectCard({ project, desc, lang }: { project: any; desc: string; lang: any }) {
    return (
        <Card isHoverable shadow="none" isFooterBlurred className="max-w-[400px] h-full bg-transparent border-0" isPressable onPress={() => window.open(project.url, "_blank")}>
            <CardHeader className="flex gap-3 items-center justify-center">
                {project.isDesktop ? <DesktopMockUp project={project} /> :
                    <PhoneMockUp project={project} />
                }
            </CardHeader>
            <CardBody>
                <div className="flex flex-col gap-3">
                    <div className="flex flex-row justify-between px-5 items-center">
                        <p className="text-default-800 font-semibold text-xl">
                            {project.name}
                        </p>
                        <Chip size="lg" color={project.finished ? "success" : "warning"} variant="flat">
                            {project.finished ? lang.misc.finished : lang.misc.inProgress}
                        </Chip>
                    </div>
                    <p className="text-default-600 text-sm px-5">
                        {desc}
                    </p>
                </div>
            </CardBody>
            <CardFooter>
                <div className="flex flex-wrap gap-5">
                    {project.technologies.map((tech: Tech, index: number) => (
                        <TechCard key={index} tech={tech} />
                    ))}
                </div>
            </CardFooter>
        </Card>
    );
}
