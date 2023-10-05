import ArtPieces from "../../components/ArtPieces";


export default function artPiecesPage({
  data,
  handleToggleFavorite,
  artPiecesInfo,
}) {
  return (
    <>
      <ArtPieces
        data={data}
        artPiecesInfo={artPiecesInfo}
        handleToggleFavorite={handleToggleFavorite}
      />
      <p>Art Pieces Page TBD</p>
    </>
  );
}
