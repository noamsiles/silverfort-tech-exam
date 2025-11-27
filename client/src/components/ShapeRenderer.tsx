import "../styles/ShapeRenderer.css";
import type { ShapeRendererProps } from "../types/props";

const ShapeRenderer = ({ shape, color }: ShapeRendererProps) => {
  const renderShape = () => {
    switch (shape) {
      case "circle":
        return <circle cx="25" cy="25" r="20" fill={color} />;
      case "square":
        return <rect x="5" y="5" width="40" height="40" fill={color} />;
      case "diamond":
        return (
          <polygon points="25,5 45,25 25,45 5,25" fill={color} />
        );
      case "triangle":
        return (
          <polygon points="25,5 45,45 5,45" fill={color} />
        );
      default:
        return null;
    }
  };

  return (
    <svg className="shape-svg" viewBox="0 0 50 50">
      {renderShape()}
    </svg>
  );
};

export default ShapeRenderer;
