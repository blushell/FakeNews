<template>
	<div class="min-h-screen flex flex-col">
		<div class="flex-1">
			<!-- Header with static gradient -->
			<header class="py-8 relative overflow-hidden">
				<div class="container mx-auto px-4">
					<h1 class="text-5xl md:text-6xl font-bold text-center">
						<span
							class="bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent"
						>
							FakeNews Detector
						</span>
					</h1>
					<p class="text-center mt-4 text-gray-400 text-lg">
						Uncover the truth with AI-powered news analysis
					</p>
				</div>
			</header>

			<slot />
		</div>

		<!-- Footer with hover effects -->
		<footer class="bg-background-light py-4">
			<div class="container mx-auto px-4">
				<div
					class="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4"
				>
					<!-- Logo -->
					<div class="flex-shrink-0">
						<span
							class="bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent font-bold text-xl"
						>
							FakeNews
						</span>
					</div>

					<!-- Contact and Legal Links -->
					<div class="flex gap-6 items-center">
						<a href="#" class="hover:text-primary transition-colors">Contact</a>
						<a href="#" class="hover:text-primary transition-colors"
							>Privacy Policy</a
						>
						<a href="#" class="hover:text-primary transition-colors"
							>Terms & Conditions</a
						>
					</div>

					<!-- Social Links -->
					<div class="flex items-center gap-4">
						<a href="#" class="hover:text-primary transition-colors">
							<font-awesome-icon :icon="['fab', 'x-twitter']" />
						</a>
						<a href="#" class="hover:text-primary transition-colors">
							<font-awesome-icon :icon="['fab', 'bluesky']" />
						</a>
						<a href="#" class="hover:text-primary transition-colors">
							<font-awesome-icon :icon="['fab', 'github']" />
						</a>
					</div>
				</div>
				<div class="max-w-6xl mx-auto text-gray-400 mt-2">
					© {{ new Date().getFullYear() }} FakeNews. All rights reserved.
				</div>
			</div>
		</footer>
	</div>
</template>
