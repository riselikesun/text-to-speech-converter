import LoadingButton from "@mui/lab/LoadingButton";
import RecordVoiceOverIcon from "@mui/icons-material/RecordVoiceOver";

interface IProps {
  loading?: boolean;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

const TransformButtonUI = (props: IProps) => {
  const { loading, onClick } = props;

  return (
    <>
      <LoadingButton
        variant="contained"
        sx={{ textTransform: "none" }}
        loading={loading}
        loadingPosition="start"
        startIcon={<RecordVoiceOverIcon />}
        onClick={onClick}
      >
        Transform into speech
      </LoadingButton>
    </>
  );
};

export default TransformButtonUI;
