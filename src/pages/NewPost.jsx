import { useNavigate } from "react-router-dom";

import NewPostForm from "../components/NewPostForm";
import { savePost } from "../util/api";

function NewPostPage() {
  const navigate = useNavigate();

  function cancelHandler() {
    navigate("/blog");
  }

  return (
    <section>
      {error && <p>{error.message}</p>}
      <NewPostForm onCancel={cancelHandler} submitting={isSubmitting} />
    </section>
  );
}

export default NewPostPage;
