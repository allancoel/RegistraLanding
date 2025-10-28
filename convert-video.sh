#!/bin/bash

# Script to convert .mov video to .mp4 for better browser compatibility
# This ensures the demo video works on all browsers, especially desktop

echo "Converting video to MP4 format for better browser compatibility..."

INPUT_FILE="assets/videos/ScreenRecording_10-27-2025 17-07-27_1.mov"
OUTPUT_FILE="assets/videos/ScreenRecording_10-27-2025 17-07-27_1.mp4"

# Check if ffmpeg is installed
if ! command -v ffmpeg &> /dev/null; then
    echo "Error: ffmpeg is not installed."
    echo "Please install ffmpeg:"
    echo "  macOS: brew install ffmpeg"
    echo "  Ubuntu/Debian: sudo apt-get install ffmpeg"
    echo "  Windows: Download from https://ffmpeg.org/download.html"
    exit 1
fi

# Check if input file exists
if [ ! -f "$INPUT_FILE" ]; then
    echo "Error: Input file not found: $INPUT_FILE"
    exit 1
fi

# Convert video with optimal settings for web
# - H.264 codec for maximum compatibility
# - Optimized for web streaming
# - Maintains quality while reducing file size
ffmpeg -i "$INPUT_FILE" \
    -vcodec libx264 \
    -pix_fmt yuv420p \
    -preset medium \
    -crf 23 \
    -acodec aac \
    -b:a 128k \
    -movflags +faststart \
    "$OUTPUT_FILE"

if [ $? -eq 0 ]; then
    echo "✓ Video converted successfully!"
    echo "Output: $OUTPUT_FILE"
    
    # Show file sizes
    echo ""
    echo "File sizes:"
    ls -lh "$INPUT_FILE" | awk '{print "Original (.mov): " $5}'
    ls -lh "$OUTPUT_FILE" | awk '{print "Converted (.mp4): " $5}'
    
    echo ""
    echo "The .mp4 version will now play on all browsers, including desktop."
else
    echo "✗ Conversion failed"
    exit 1
fi

