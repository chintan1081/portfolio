import { FiDownload, FiExternalLink } from "react-icons/fi";

const RESUME_FILE_ID = "18d8Jp9tllKip0lZa-20s-2_Q0atXzzC7";
const DRIVE_PREVIEW = `https://drive.google.com/file/d/${RESUME_FILE_ID}/preview`;
const DRIVE_VIEW = `https://drive.google.com/uc?export=download&id=${RESUME_FILE_ID}`;

const Resume = () => {
  return (
    <div className="border-b border-neutral-200">
      <div className="max-w-2xl mx-auto border-x border-neutral-200 p-6">
        <div className="flex items-start justify-between mb-8 mt-4">
          <div>
            <h2 className="text-3xl font-semibold">Resume</h2>
            <p className="text-sm text-neutral-500">Download or preview my resume below.</p>
          </div>
          <div className="flex items-center gap-2 self-end">
            <a
              href={DRIVE_PREVIEW}
              target="_blank"
              rel="noreferrer"
              className="inline-flex bg-white items-center gap-2 px-2 py-1 border border-neutral-200 rounded-md text-sm shadow-inner inset-shadow-sm hover:inset-shadow-lg inset-shadow-gray-900/10 hover:bg-neutral-100"
            >
              <FiExternalLink />
              Open
            </a>
            <a
              href={DRIVE_VIEW}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-2 py-1 shadow-inner inset-shadow-sm bg-neutral-800 text-white rounded-md text-sm hover:opacity-90"
            >
              <FiDownload />
              Download
            </a>
          </div>
        </div>

        <div className="w-full h-[700px] border border-neutral-200 rounded-md overflow-hidden">
          <iframe
            title="Resume preview"
            src={DRIVE_PREVIEW}
            className="w-full h-full"
          />
        </div>
      </div>
    </div>
  );
};

export default Resume;
