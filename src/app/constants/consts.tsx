import { BotMessageSquare } from "lucide-react";
import { BatteryCharging } from "lucide-react";
import { Fingerprint } from "lucide-react";
import { ShieldHalf } from "lucide-react";
import { PlugZap } from "lucide-react";
import { GlobeLock } from "lucide-react";

import { FaDiscord } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { RxFileText } from "react-icons/rx";
import { IoIosHelpCircle } from "react-icons/io";

export const BaseUrl = process.env.NEXT_PUBLIC_BASE_URL

export const GITHUB_REPO_CLONE = "https://github.com/phylogeny-lab/phylogeny-lab.git"

export const backgroundURLs = [
  `${BaseUrl}/assets/blast_screenshot.png`,
  `${BaseUrl}/assets/alignment_background.png`,
]

export const navItems = [
  { label: "Docs", href: "/docs", icon: <RxFileText /> },
  { label: "Tutorials", href: "/tutorials", icon: <IoIosHelpCircle /> },
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
    name: "Run with Docker",
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

export const Tools = [
  { name: 'Mr Bayes', href: '#', description: '' },
  { name: 'Clustal', href: '#', description: '' },
  { name: 'Muscle', href: '#', description: '' },
  { name: 'Biopython', href: '#', description: '' },
  { name: 'Biomart', href: '#', description: '' },
  { name: 'NCBI Blast', href: '#', description: '' },
]

export const DocsLinks = [
  { href: "#", text: "Getting Started" },
  { href: "#", text: "Documentation" },
  { href: "#", text: "Tutorials" },
  { href: "#", text: "API Reference" },
];

export const PlatformLinks = [
  { href: "#", text: "Features" },
  { href: "#", text: "System Requirements" },
  { href: "#", text: "Release Notes" },
];

export const CommunityLinks = [
  { href: "https://discord.gg/ZmVn9Kzc9f", text: "Discord" },
  { href: "#", text: "Contributing" },
  { href: "https://patreon.com/GenomeLab?utm_medium=unknown&utm_source=join_link&utm_campaign=creatorshare_creator&utm_content=copyLink", text: "Donate" },
];
