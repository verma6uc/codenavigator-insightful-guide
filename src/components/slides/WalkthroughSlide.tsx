interface WalkthroughSlideProps {
  image: string;
  title?: string;
}

export const WalkthroughSlide = ({ image, title }: WalkthroughSlideProps) => {
  return (
    <div className="flex flex-col items-center justify-center min-h-[80vh] p-8">
      {title && (
        <h2 className="text-3xl font-bold mb-8 text-center text-foreground">
          {title}
        </h2>
      )}
      <div className="w-full max-w-6xl rounded-lg overflow-hidden border border-border shadow-2xl">
        <img 
          src={image} 
          alt={title || "Product walkthrough screenshot"} 
          className="w-full h-auto"
        />
      </div>
    </div>
  );
};
