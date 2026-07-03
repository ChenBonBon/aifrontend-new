import { Component, type ReactNode } from "react";

type RemoteErrorBoundaryProps = {
  children: ReactNode;
  remoteName: string;
};

type RemoteErrorBoundaryState = {
  error: unknown;
};

const getErrorMessage = (error: unknown) => {
  if (error instanceof Error) {
    return error.message;
  }

  if (typeof error === "string") {
    return error;
  }

  return "The remote application could not be loaded.";
};

export class RemoteErrorBoundary extends Component<
  RemoteErrorBoundaryProps,
  RemoteErrorBoundaryState
> {
  state: RemoteErrorBoundaryState = {
    error: null,
  };

  static getDerivedStateFromError(error: unknown): RemoteErrorBoundaryState {
    return { error };
  }

  render() {
    if (this.state.error) {
      return (
        <section
          aria-live="polite"
          className="rounded-lg border border-red-200 bg-red-50 p-6 shadow-sm"
          role="alert"
        >
          <p className="text-sm font-medium uppercase tracking-wide text-red-700">Remote failed</p>
          <h2 className="mt-3 text-2xl font-semibold text-red-950">
            {this.props.remoteName} is unavailable
          </h2>
          <p className="mt-3 max-w-2xl text-red-800">{getErrorMessage(this.state.error)}</p>
          <button
            className="mt-5 rounded-md border border-red-300 bg-white px-4 py-2 text-sm font-medium text-red-800 hover:border-red-500"
            onClick={() => window.location.reload()}
            type="button"
          >
            Reload shell
          </button>
        </section>
      );
    }

    return this.props.children;
  }
}
