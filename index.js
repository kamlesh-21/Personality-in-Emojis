const myEmojis = ["👨‍💻", "⛷", "🍲"];
const emojiContainer = document.getElementById("emoji-container")
const emojiInput = document.getElementById("emoji-input")

function render() {
    emojiContainer.innerHTML = ""
    for (let i = 0; i < myEmojis.length; i++) {
        const emojis = document.createElement('span')
        emojis.textContent = myEmojis[i]
        emojiContainer.append(emojis)
    }
}
render()

const pushBtn = document.getElementById("push-btn")
pushBtn.addEventListener("click", function(){
    if (emojiInput.value) {
        myEmojis.push(emojiInput.value)
        emojiInput.value = ""
        render()
    }
})

const unshiftBtn = document.getElementById("unshift-btn")
unshiftBtn.addEventListener("click", function(){
    if (emojiInput.value) {
        myEmojis.unshift(emojiInput.value)
        emojiInput.value = ""
        render()
    }
})

const popBtn = document.getElementById("pop-btn")
popBtn.addEventListener("click", function(){
    myEmojis.pop()
    render()
    
})

const shiftBtn = document.getElementById("shift-btn")
shiftBtn.addEventListener("click", function(){
    myEmojis.shift()
    render()
    
})
