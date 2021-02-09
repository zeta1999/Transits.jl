var documenterSearchIndex = {"docs":
[{"location":"","page":"Home","title":"Home","text":"CurrentModule = Transits","category":"page"},{"location":"#Transits","page":"Home","title":"Transits","text":"","category":"section"},{"location":"","page":"Home","title":"Home","text":"(Image: GitHub) (Image: Build Status) (Image: Coverage) (Image: License)","category":"page"},{"location":"","page":"Home","title":"Home","text":"","category":"page"},{"location":"","page":"Home","title":"Home","text":"Modules = [Transits]","category":"page"},{"location":"#Transits.IntegratedLimbDark-Tuple{Transits.AbstractLimbDark}","page":"Home","title":"Transits.IntegratedLimbDark","text":"IntegratedLimbDark(limbdark; N=21, basis=:legendre)\nIntegratedLimbDark(u; kwargs...)\n\nComputes the time-averaged flux in the middle of an exposure by wrapping a limb darkening law limbdark with a quadrature scheme. For each time step t, N extra points are super-sampled from t-texp/2 to t+texp/2and the time-averaged flux is calculated via quadrature.\n\nIf a set of limb darkening coefficients, u, is provided, a PolynomialLimbDark law will be used by default.\n\nMathematical form\n\nbarF(t) = frac1Delta tint_t-Delta t  2^t+Delta t  2F(t)dt\n\nwhere F is the wrapped limb darkening law and Delta t is the exposure time.\n\nQuadrature\n\nThe integration is approximated via Guassian quadrature\n\nfrac1Delta t intF(t)dt approx frac12sum_i^Nw_i * F(fracDelta t2xi_i + t)\n\nwhere the weights w_i and nodes ξ_i are defined by the given quadrature rule. The nodes are defined by evaluating orthogonal polynomials N times between -1 and 1. Notice the change of interval required to go from the natural bounds of the orthogonal polynomial basis, -1, 1, to the range defined by the exposure time.\n\nThe following bases are available from FastGaussQuadrature.jl. In addition, a function can be passed which calculates nodes, weights = f(N).\n\n:legendre - Legendre polynomial base on the open (-1, 1)\n:radau - Legendre polynomial base on the semi-open [-1, 1) interval\n:lobatto - Legendre polynomial base on the closed [-1, 1] interval\n\n\n\n\n\n","category":"method"},{"location":"#Transits.PolynomialLimbDark-Union{Tuple{AbstractArray{T,1}}, Tuple{T}} where T","page":"Home","title":"Transits.PolynomialLimbDark","text":"PolynomialLimbDark(u::AbstractVector)\n\nPolynomial limb darkening using analytical integrals. The length of the u vector is equivalent to the order of polynomial used; e.g., [0.2, 0.3] corresponds to quadratic limb darkening.\n\nMathematical form\n\nI(mu) propto 1 - u_1(1-mu) - u_2(1-mu)^2 - dots - u_N(1-mu)^N\n\nwhich is equivalent to the series\n\nI(mu) propto -sum_i=0^Nu_i(1-mu)^i\n\nwith the definition u_0 equiv -1.\n\n\n\n\n\n","category":"method"},{"location":"#Transits.compute_Mn_coeffs!-Union{Tuple{T}, Tuple{AbstractArray{T,3},Any}} where T","page":"Home","title":"Transits.compute_Mn_coeffs!","text":"Compute the series expandsion coefficients for the M_n integrals. Need to compute from n_max - 3:n_max. Also split for the cases k^2 < 1 and k^2 ≥ 1.\n\n\n\n\n\n","category":"method"},{"location":"#Transits.compute_Nn_coeffs!-Union{Tuple{T}, Tuple{AbstractArray{T,2},Any}} where T","page":"Home","title":"Transits.compute_Nn_coeffs!","text":"Compute the series expandsion coefficients for the N_n integrals. Need to compute from n_max - 3:n_max. Only need the case k^2 < 1.\n\n\n\n\n\n","category":"method"},{"location":"#Transits.compute_gn-Tuple{AbstractArray{T,1} where T}","page":"Home","title":"Transits.compute_gn","text":"Transform the u_n coefficients to g_n, which are coefficients in Green's basis from REF.\n\n\n\n\n\n","category":"method"}]
}
