import os
import glob
import subprocess

issue_files = sorted(glob.glob(".scratch/portfolio/issues/*.md"))

for issue_file in issue_files:
    with open(issue_file, "r", encoding="utf-8") as f:
        content = f.read()
    
    lines = content.splitlines()
    title = lines[0].lstrip("# ").strip()
    body = "\n".join(lines[1:]).strip()
    
    print(f"Publishing issue: {title}")
    result = subprocess.run(
        ["gh", "issue", "create", "--title", title, "--body", body, "--label", "ready-for-agent"],
        capture_output=True,
        text=True
    )
    print("Output:", result.stdout.strip())
    if result.stderr:
        print("Error/Info:", result.stderr.strip())
