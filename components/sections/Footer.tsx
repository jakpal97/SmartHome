const Footer = () => {
	return (
		<footer className="footer-dark text-primary-dark pt-16 pb-8">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
					<div>
						<h4 className="text-lg font-semibold mb-4 text-primary-dark">Synetiq</h4>
						<p className="text-secondary-dark">
						Sprawiamy, że domy stają się inteligentniejsze, bezpieczniejsze i bardziej energooszczędne dzięki innowacyjnej technologii.
						</p>
						<div className="flex space-x-4 mt-4">
							<a href="#" className="text-secondary-dark hover:text-primary-dark transition-colors duration-300">
								<i className="fab fa-facebook-f"></i>
							</a>
							<a href="#" className="text-secondary-dark hover:text-primary-dark transition-colors duration-300">
								<i className="fab fa-twitter"></i>
							</a>
							<a href="#" className="text-secondary-dark hover:text-primary-dark transition-colors duration-300">
								<i className="fab fa-instagram"></i>
							</a>
							<a href="#" className="text-secondary-dark hover:text-primary-dark transition-colors duration-300">
								<i className="fab fa-linkedin-in"></i>
							</a>
						</div>
					</div>
					<div>
						
						<ul className="space-y-2">
							<li>
								<a href="#" className="text-secondary-dark hover:text-primary-dark transition-colors duration-300">
									Home
								</a>
							</li>
							<li>
								<a href="#" className="text-secondary-dark hover:text-primary-dark transition-colors duration-300">
									Funkcje
								</a>
							</li>
							<li>
								<a href="#" className="text-secondary-dark hover:text-primary-dark transition-colors duration-300">
								Usługi
								</a>
							</li>
							<li>
								<a href="#" className="text-secondary-dark hover:text-primary-dark transition-colors duration-300">
								Opinie
								</a>
							</li>
							<li>
								<a href="#" className="text-secondary-dark hover:text-primary-dark transition-colors duration-300">
								Kontakt
								</a>
							</li>
						</ul>
					</div>
					
				</div>
				<div className="border-t border-card-border pt-8 flex flex-col md:flex-row justify-between items-center">
					<p className="text-secondary-dark text-sm mb-4 md:mb-0">© 2023 NexusHomes. All rights reserved.</p>
					<div className="flex space-x-6">
						<a href="#" className="text-secondary-dark hover:text-primary-dark text-sm transition-colors duration-300">
							Privacy Policy
						</a>
						<a href="#" className="text-secondary-dark hover:text-primary-dark text-sm transition-colors duration-300">
							Terms of Service
						</a>
						<a href="#" className="text-secondary-dark hover:text-primary-dark text-sm transition-colors duration-300">
							Cookie Policy
						</a>
					</div>
				</div>
			</div>
		</footer>
	)
}

export default Footer
