import { BotMessageSquare } from "lucide-react";
import { BatteryCharging } from "lucide-react";
import { Fingerprint } from "lucide-react";
import { ShieldHalf } from "lucide-react";
import { PlugZap } from "lucide-react";
import { GlobeLock } from "lucide-react";

import { FaDiscord } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { IoIosPaper } from "react-icons/io";
import { IoIosHelpCircle } from "react-icons/io";

export const BaseUrl = process.env.NEXT_PUBLIC_BASE_URL

export const navItems = [
  { label: "Docs", href: "#", icon: <IoIosPaper /> },
  { label: "Tutorials", href: "#", icon: <IoIosHelpCircle /> },
  { label: "Github", href: "https://github.com/Phylogeny-lab/Phylogeny-lab", icon: <FaGithub /> },
  { label: "Community", href: "https://discord.gg/ZmVn9Kzc9f", icon: <FaDiscord /> },
];

export const DownloadData = [
  {
    id: 1,
    name: "Phylogeny lab server",
    background: "/assets/Downloads/card-1.svg",
    description:
      "Deploy Phylogeny lab's backend server on a device such as a Raspberry Pi. Recommended if you want to create a home server.",
  },
  {
    id: 2,
    name: "Phylogeny lab desktop",
    background: "/assets/Downloads/card-2.svg",
    description:
      "A desktop client which can connect to a Phylogeny lab server.",
  },
  {
    id: 3,
    name: "Full stack",
    background: "/assets/Downloads/card-3.svg",
    description:
      "Run a full stack locally and access in a web browser.",
  },
];

export const checklistItems = [
  {
    title: "100% open source codebase",
    description:
      "Phylogeny lab will always be free to download, no signup or license agreement required.",
  },
  {
    title: "Preinstalled tools ready to go!",
    description:
      "Get access to popular command-line tools like Mr Bayes, Muscle, Clustalw, Blast, PAML and more!",
  },
  {
    title: "Great UI",
    description:
      "Easy-to-navigate pages and nice on the eyes.",
  },
  {
    title: "Flexible deployment",
    description:
      "Host locally or deploy the backend on a home server such as a Raspberry Pi.",
  },
  {
    title: "Open to contributors",
    description:
      "Want to see a new feature or fix a bug? Make a PR!",
  },
];

export const resourcesLinks = [
  { href: "#", text: "Getting Started" },
  { href: "#", text: "Documentation" },
  { href: "#", text: "Tutorials" },
  { href: "#", text: "API Reference" },
  { href: "#", text: "Community Forums" },
];

export const platformLinks = [
  { href: "#", text: "Features" },
  { href: "#", text: "Supported Devices" },
  { href: "#", text: "System Requirements" },
  { href: "#", text: "Downloads" },
  { href: "#", text: "Release Notes" },
];

export const communityLinks = [
  { href: "#", text: "Events" },
  { href: "#", text: "Meetups" },
  { href: "#", text: "Conferences" },
  { href: "#", text: "Hackathons" },
  { href: "#", text: "Jobs" },
];
