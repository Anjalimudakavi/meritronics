 static async updateChecklistItem(itemId: string, updates: Partial<ChecklistItem>): Promise<ChecklistItem> {
    console.log("Updating checklist item:", itemId, updates)

    const response = await fetch(`${API_BASE_URL}/checklist-items/${itemId}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updates),
    })

    if (!response.ok) {
      const errorText = await response.text()
      console.error("Failed to update checklist item:", response.status, errorText)
      throw new Error(`Failed to update checklist item: ${response.status} ${errorText}`)
    }

    const result = await response.json()
    console.log("Updated checklist item result:", result)
    return result
  }