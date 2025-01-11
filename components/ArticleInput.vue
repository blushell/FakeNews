<template>
	<div
		class="bg-background-light rounded-2xl p-8 shadow-lg mb-8 hover:shadow-primary/20 transition-shadow border border-gray-800"
	>
		<label
			for="article-url"
			class="block text-lg font-medium mb-3 text-primary"
		>
			Enter a news article link:
		</label>
		<div class="flex flex-col sm:flex-row gap-4">
			<input
				id="article-url"
				type="url"
				class="flex-1 bg-background border border-gray-700 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
				placeholder="https://example.com/article"
			/>
			<button
				class="bg-primary hover:bg-primary-dark px-8 py-3 rounded-xl transition-all transform hover:scale-105 hover:shadow-lg hover:shadow-primary/20 font-medium text-center flex items-center justify-center"
			>
				<span class="flex items-center gap-2 whitespace-nowrap">
					Check Validity

					<font-awesome-icon :icon="['fas', 'chevron-right']" />
				</span>
			</button>
		</div>
	</div>
</template>
