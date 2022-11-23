import React, { useState } from "react";
import classes from "./style.module.scss";

type Synonym = {
	word: string;
	score: number;
};

const URL = ` https://api.datamuse.com`;

function App() {
	const [word, setWord] = useState("");
	const [synonyms, setSynonyms] = useState<Synonym[]>([]);

	const fetchSynonyms = (word: string) => {
		fetch(` ${URL}/words?rel_syn=${word}`)
			.then((response) => response.json())
			.then(setSynonyms);
	};

	const fetchHandler = (e: React.FormEvent) => {
		e.preventDefault();
		
		fetchSynonyms(word);
	};

	const synonymHandler = (newWord: string) => {
    fetchSynonyms(newWord);
    setWord(newWord);
	};
	return (
		<div className={classes.container}>
			<div className={classes.top__section}>
				<div className={classes.title}>
					<h1>Synonyms app</h1>
				</div>
				<form className={classes.search} onSubmit={fetchHandler}>
					<label htmlFor='search'>Your word </label>
					<input
						type='text'
						name='search'
            value={word}
						placeholder='search synonyms ...'
						onChange={(e) => setWord(e.target.value)}
					/>

					<button>Submit</button>
				</form>
			</div>
			<div className={classes.bottom__section}>
				{synonyms.map((synonym) => (
					<div className={classes.synonyms__list} key={synonym.word} onClick={() => synonymHandler(synonym.word)}>
						<li >{synonym.word}</li>
					</div>
				))}
			</div>
		</div>
	);
}

export default App;
