import { Header } from './components/Header'
import { Board } from './components/Board'
import style from './App.module.css'
import { CreateBoard } from './components/utils/generateCells'
import { useState } from 'react'

function App() {
	const [board, setBoard] = useState(CreateBoard())

	function newBoard() {
		// setBoard(CreateBoard)
		setBoard('Сделал всё, что смог за 2 дня, прошу строго не судить и дать шанс проявить себя на собеседовании. С уважением, Азамат!')
		setTimeout(() => {
			setBoard(CreateBoard)
		}, 0)
	}
	return (
		<div className={style.PlayArea}>
			<Header clickSmile={newBoard} />
			<Board createBoard={board} />
		</div>
	)
}

export default App
