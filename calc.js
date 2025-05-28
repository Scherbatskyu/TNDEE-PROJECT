export function calculateTND(Vnom, Dsheath, Dcore, n) {
    // Convert diameters to radii
    const R = Dsheath / 2; // Outer sheath radius
    const r = Dcore / 2; // Inner core radius
  
    // Calculate optimal radius ratio for equal stress distribution
    const alpha = Math.pow(R / r, 1 / (n + 1));
  
    // Calculate intersheath radii (including core radius at index 0)
    const radii = [r];
    for (let i = 1; i <= n; i++) {
      radii.push(r * Math.pow(alpha, i));
    }
  
    // Calculate voltages at each intersheath
    const voltages = [];
    const logRatio = Math.log(R / r);
  
    for (let i = 1; i <= n; i++) {
      // Logarithmic voltage distribution for optimal stress
      const Vi = (Vnom * Math.log(radii[i] / r)) / logRatio;
      voltages.push(Vi);
    }
  
    // Calculate maximum stress gradient at conductor surface with intersheaths
    const gMaxWith = Vnom / (r * Math.log(radii[1] / r) * (n + 1));
  
    // Calculate maximum stress gradient at conductor surface without intersheaths
    const gMaxWithout = Vnom / (r * Math.log(R / r));
  
    // Calculate diameters from radii (for output)
    const diameters = radii.slice(1).map((radius) => radius * 2);
  
    return {
      alpha: alpha,
      radii: radii.slice(1),
      voltages: voltages,
      gMax: gMaxWithout,
    };
  } // Operating voltages for each int