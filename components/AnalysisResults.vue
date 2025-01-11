<template>
	<div
		class="bg-background-light rounded-2xl p-8 shadow-lg relative group hover:shadow-primary/20 transition-all border border-gray-800"
	>
		<div
			class="absolute inset-0 bg-gradient-to-r from-primary/5 to-purple-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity"
		></div>
		<h2
			class="text-2xl font-bold mb-6 bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent"
		>
			{{ isAnalyzing ? 'Analysis Results' : 'How It Works' }}
		</h2>
		<div class="space-y-6 relative z-10">
			<template v-if="isAnalyzing">
				<!-- Ranking Indicator with animation -->
				<div class="flex flex-col sm:flex-row sm:items-center gap-3">
					<div class="text-lg">Credibility Score:</div>
					<div class="flex">
						<div
							v-for="i in 5"
							:key="i"
							class="w-8 h-8 text-primary transform hover:scale-110 transition-transform cursor-pointer"
						>
							<svg
								class="w-full h-full"
								viewBox="0 0 24 24"
								fill="currentColor"
							>
								<path
									d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"
								/>
							</svg>
						</div>
					</div>
				</div>

				<!-- Score with pulse animation -->
				<div
					class="text-lg p-4 bg-background rounded-xl border border-gray-800"
				>
					Likelihood of being fake:
					<span class="text-primary font-semibold animate-pulse"
						>Analysis pending</span
					>
				</div>

				<!-- Info Cards -->
				<div class="grid sm:grid-cols-2 gap-4 mt-6">
					<div
						class="p-4 bg-background rounded-xl border border-gray-800 hover:border-primary/50 transition-colors"
					>
						<h3 class="font-medium text-primary mb-2">Source Analysis</h3>
						<p class="text-sm text-gray-400">
							We verify the credibility of the news source and its history.
						</p>
					</div>
					<div
						class="p-4 bg-background rounded-xl border border-gray-800 hover:border-primary/50 transition-colors"
					>
						<h3 class="font-medium text-primary mb-2">Content Check</h3>
						<p class="text-sm text-gray-400">
							Our AI analyzes writing style and cross-references facts.
						</p>
					</div>
				</div>
			</template>

			<template v-else>
				<!-- Tool description content -->
				<div class="text-center space-y-6">
					<p class="text-lg text-gray-300">
						Welcome to our News Credibility Checker! We help you verify the
						authenticity and reliability of news articles through comprehensive
						analysis.
					</p>

					<div class="grid sm:grid-cols-3 gap-4">
						<div
							class="p-4 bg-background rounded-xl border border-gray-800 hover:border-primary/50 transition-colors"
						>
							<h3 class="font-medium text-primary mb-2">1. Paste Article</h3>
							<p class="text-sm text-gray-400">
								Share the article URL you'd like to verify in the input box
								above
							</p>
						</div>
						<div
							class="p-4 bg-background rounded-xl border border-gray-800 hover:border-primary/50 transition-colors"
						>
							<h3 class="font-medium text-primary mb-2">2. Analysis</h3>
							<p class="text-sm text-gray-400">
								We examine the content, verify sources, and check facts
							</p>
						</div>
						<div
							class="p-4 bg-background rounded-xl border border-gray-800 hover:border-primary/50 transition-colors"
						>
							<h3 class="font-medium text-primary mb-2">3. Get Results</h3>
							<p class="text-sm text-gray-400">
								Receive a detailed credibility score and fact-checking report
							</p>
						</div>
					</div>

					<div
						class="mt-6 p-4 bg-primary/10 rounded-xl border border-primary/20"
					>
						<p class="text-sm text-gray-300">
							Our tool uses comprehensive fact-checking methods and trusted
							databases to help you make informed decisions about news
							credibility.
						</p>
					</div>
				</div>
			</template>
		</div>
	</div>
</template>

<script setup>
defineProps({
	isAnalyzing: {
		type: Boolean,
		default: false,
	},
});
</script>
