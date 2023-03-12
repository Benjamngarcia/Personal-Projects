type Options = {
  callback?: () => void
  props: Record<string, string | number | undefined>
}

interface Window {
  plausible: (event: "add_fox", option?: Options) => void
}