# ghcommit

## usage

this creates a menu of commit messages based on the diff between the current branch and master.

insert the following custom command into your [lazygit](https://github.com/jesseduffield/lazygit) config file:

```yaml
customCommands:
  - key: "<c-a>"
    description: "pick AI commit"
    command: 'git commit -m "{{.Form.Msg}}"'
    context: "files"
    prompts:
      - type: "menuFromCommand"
        title: "ai Commits"
        key: "Msg"
        command: "bunx @umaidashi/ghcommit@1.0.0"
        filter: "(?P<message>.+)$"
        valueFormat: "{{ .message }}"
        labelFormat: "{{ .message | green }}"
```

## acknowledgements

- check out original project [bunnai](https://github.com/chhoumann/bunnai). check out these other projects that inspired this one:
- https://github.com/m7medVision/lazycommit
