{ pkgs, ... }: {

  # Which nixpkgs channel to use.
  channel = "stable-24.05"; # or "unstable"

  # Use https://search.nixos.org/packages to find packages
  packages = [
    pkgs.nodejs_22
    pkgs.bun
  ];

  # Search for the extensions you want on https://open-vsx.org/ and use "publisher.id"
  idx.extensions = [
    "astro-build.astro-vscode"
    "esbenp.prettier-vscode"
    "bradlc.vscode-tailwindcss"
    "streetsidesoftware.code-spell-checker"
    "davidanson.vscode-markdownlint"
  ];

  idx.workspace.onCreate = {
    npm-install = "bun install";
  };

  # Enable previews and customize configuration
  idx.previews = {
    enable = true;
    previews = {
      web = {
        command = [
          "bun"
          "dev"
        ];
        manager = "web";
      };
    };
  };
}
