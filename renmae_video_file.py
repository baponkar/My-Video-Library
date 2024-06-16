import os

def rename_files(folder_path):
    try:
        # List all files in the directory
        files = os.listdir(folder_path)
        
        # Sort files based on their creation time (optional)
        files.sort(key=lambda x: os.path.getctime(os.path.join(folder_path, x)))

        # Initialize a counter for new names
        count = 1

        # Iterate over each file and rename
        for file in files:
            if file.endswith('.mp4'):
                src = os.path.join(folder_path, file)
                dst = os.path.join(folder_path, f"{count}.mp4")

                # Rename the file
                os.rename(src, dst)
                
                print(f"Renamed: {src} -> {dst}")

                # Increment the counter
                count += 1

    except Exception as e:
        print(f"Error: {e}")

# Example usage
if __name__ == "__main__":
    folder_path = "Videos/"  # Replace with your folder path
    rename_files(folder_path)
