import { once } from "events"
import open from "open"

// Define the URL
const url = "https://kaishahero.com/"

// Function to open the browser and display the URL
async function openBrowser(): Promise<void> {
  try {
    await open(url)
    console.log(`Opened ${url} in the browser`)
  } catch (err) {
    console.error("Failed to open browser:", err)
  }
}

// Function to show welcome message in the terminal
async function showWelcomeMessage(): Promise<void> {
  console.log("================================================|")
  console.log("| Welcome! You need to log in to Kaishahero.com |")
  console.log("| press enter to proceed to kaishahero...       |")
  console.log("================================================|")

  // Wait for user input
  await once(process.stdin, "data")
  await openBrowser()
  console.log("Press Ctrl+C to close the terminal.")

  //exit
  setTimeout(() => {
    process.exit()
  }, 3000)
}

// Start the application
showWelcomeMessage()
