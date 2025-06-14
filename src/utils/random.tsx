function random(min: number, max: number) {
	return ((Math.random() * (max - min + 1)) | 0) + min;
}

export default random;
