import subprocess
import json
import os
from typing import List, Dict, Any

def run_query(sql: str) -> List[Dict[str, Any]]:
    """
    Run a SQL query using the team-db CLI to ensure Turso sync.
    """
    try:
        # Using shell=True to handle potential complex SQL with quotes
        # but being careful with the input.
        result = subprocess.run(
            ["team-db", sql],
            capture_output=True,
            text=True,
            check=True
        )
        return json.loads(result.stdout)
    except subprocess.CalledProcessError as e:
        print(f"Error executing query: {e}")
        print(f"Stdout: {e.stdout}")
        print(f"Stderr: {e.stderr}")
        raise Exception(f"Database error: {e.stderr}")
    except json.JSONDecodeError as e:
        print(f"Error decoding JSON: {e}")
        print(f"Stdout: {result.stdout}")
        return []

def execute_many(sqls: List[str]):
    """
    Execute multiple SQL statements.
    Since team-db handles one at a time, we loop.
    """
    results = []
    for sql in sqls:
        results.append(run_query(sql))
    return results
