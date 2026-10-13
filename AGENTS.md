<!-- LOVABLE:BEGIN -->
> [!IMPORTANT]
> This project is connected to [Lovable](https://lovable.dev). Avoid rewriting
> published git history — force pushing, or rebasing/amending/squashing commits
> that are already pushed — as it rewrites history on Lovable's side and the
> user will likely lose their project history.
>
> Commits you push to the connected branch sync back to Lovable and show up in
> the editor, so keep the branch in a working state.
<!-- LOVABLE:END -->

- Catalog detail views share `CatalogDetailHeader` so navigation, hierarchy, and primary actions stay visually consistent.
- Catalog photos share `ZoomableImage` with Radix Dialog and react-zoom-pan-pinch so touch gestures, zoom bounds, and accessible modal behavior stay consistent.
