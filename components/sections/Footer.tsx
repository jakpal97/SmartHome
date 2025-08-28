const Footer = () => {
	return (
		<footer className="footer-dark text-primary-dark pt-16 pb-8">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
					<div>
						<h4 className="text-lg font-semibold mb-4 text-primary-dark">NexusHomes</h4>
						<p className="text-secondary-dark">
							Making homes smarter, safer, and more efficient through innovative technology.
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
									Opienie
								</a>
							</li>
							<li>
								<a href="#" className="text-secondary-dark hover:text-primary-dark transition-colors duration-300">
									kontakt
								</a>
							</li>
						</ul>
					</div>
					{/* <div>
						<h4 className="text-lg font-semibold mb-4 text-primary-dark">Resources</h4>
						<ul className="space-y-2">
							<li>
								<a href="#" className="text-secondary-dark hover:text-primary-dark transition-colors duration-300">
									Blog
								</a>
							</li>
							<li>
								<a href="#" className="text-secondary-dark hover:text-primary-dark transition-colors duration-300">
									Guides
								</a>
							</li>
							<li>
								<a href="#" className="text-secondary-dark hover:text-primary-dark transition-colors duration-300">
									Support
								</a>
							</li>
							<li>
								<a href="#" className="text-secondary-dark hover:text-primary-dark transition-colors duration-300">
									API Docs
								</a>
							</li>
							<li>
								<a href="#" className="text-secondary-dark hover:text-primary-dark transition-colors duration-300">
									Community
								</a>
							</li>
						</ul>
					</div>
					<div>
						<h4 className="text-lg font-semibold mb-4 text-primary-dark">Company</h4>
						<ul className="space-y-2">
							<li>
								<a href="#" className="text-secondary-dark hover:text-primary-dark transition-colors duration-300">
									About Us
								</a>
							</li>
							<li>
								<a href="#" className="text-secondary-dark hover:text-primary-dark transition-colors duration-300">
									Careers
								</a>
							</li>
							<li>
								<a href="#" className="text-secondary-dark hover:text-primary-dark transition-colors duration-300">
									Press
								</a>
							</li>
							<li>
								<a href="#" className="text-secondary-dark hover:text-primary-dark transition-colors duration-300">
									Partners
								</a>
							</li>
							<li>
								<a href="#" className="text-secondary-dark hover:text-primary-dark transition-colors duration-300">
									Contact
								</a>
							</li>
						</ul>
					</div> */}
				</div>
				<div className="border-t border-card-border pt-8 flex flex-col md:flex-row justify-between items-center">
					<p className="text-secondary-dark text-sm mb-4 md:mb-0">©Created by AppLIke. All rights reserved.</p>
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
