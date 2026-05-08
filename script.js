/* ============================================================
   15-THEME SHOWCASE — BATCH 1
   Themes 01-03 functionality.
   ============================================================ */

(function() {

    /* ============================================================
       GLOBAL JUMP NAVIGATION
       Toggle button opens slide-in panel.
       ============================================================ */
    var navToggle = document.getElementById('globalNavToggle');
    var navClose = document.getElementById('globalNavClose');
    var navPanel = document.getElementById('globalNav');

    function openNav() {
        navPanel.classList.add('open');
        navPanel.setAttribute('aria-hidden', 'false');
    }
    function closeNav() {
        navPanel.classList.remove('open');
        navPanel.setAttribute('aria-hidden', 'true');
    }

    if (navToggle) navToggle.addEventListener('click', openNav);
    if (navClose) navClose.addEventListener('click', closeNav);

    // Close nav when a link is clicked
    var navLinks = document.querySelectorAll('.global-nav-list a');
    navLinks.forEach(function(link) {
        link.addEventListener('click', closeNav);
    });

    // Close nav with Escape key
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && navPanel.classList.contains('open')) {
            closeNav();
        }
    });


    /* ============================================================
       INITIAL HERO REVEALS (Theme 01)
       Elements with .reveal animate in on page load with delays.
       ============================================================ */
    var initialReveals = document.querySelectorAll('.reveal');
    initialReveals.forEach(function(el) {
        var delay = parseInt(el.getAttribute('data-delay') || 0, 10);
        setTimeout(function() {
            el.classList.add('visible');
        }, delay);
    });


    /* ============================================================
       SCROLL-TRIGGERED REVEALS
       Elements with .reveal-on-scroll animate when entering viewport.
       Uses IntersectionObserver (modern Web API).
       ============================================================ */
    var scrollReveals = document.querySelectorAll('.reveal-on-scroll');
    if ('IntersectionObserver' in window) {
        var revealObserver = new IntersectionObserver(function(entries) {
            entries.forEach(function(entry, idx) {
                if (entry.isIntersecting) {
                    // Stagger reveals slightly for visual rhythm
                    setTimeout(function() {
                        entry.target.classList.add('visible');
                    }, idx * 60);
                    revealObserver.unobserve(entry.target);
                }
            });
        }, {
            threshold: 0.15,
            rootMargin: '0px 0px -60px 0px'
        });
        scrollReveals.forEach(function(el) {
            revealObserver.observe(el);
        });
    } else {
        // Fallback: just show everything
        scrollReveals.forEach(function(el) {
            el.classList.add('visible');
        });
    }


    /* ============================================================
       STAT COUNTER ANIMATION (Theme 03)
       Numbers count up from 0 to their target value when in view.
       ============================================================ */
    var statNums = document.querySelectorAll('.t03-stat-num[data-target]');
    if ('IntersectionObserver' in window && statNums.length) {
        var statObserver = new IntersectionObserver(function(entries) {
            entries.forEach(function(entry) {
                if (entry.isIntersecting) {
                    animateCounter(entry.target);
                    statObserver.unobserve(entry.target);
                }
            });
        }, { threshold: 0.5 });

        statNums.forEach(function(stat) {
            statObserver.observe(stat);
        });
    }

    function animateCounter(el) {
        var target = parseInt(el.getAttribute('data-target'), 10);
        var suffix = el.getAttribute('data-suffix') || '';
        var duration = 1600;
        var start = 0;
        var startTime = null;

        function tick(timestamp) {
            if (!startTime) startTime = timestamp;
            var progress = Math.min((timestamp - startTime) / duration, 1);
            // Ease out cubic
            var eased = 1 - Math.pow(1 - progress, 3);
            var current = Math.round(start + (target - start) * eased);
            el.textContent = current + suffix;
            if (progress < 1) {
                requestAnimationFrame(tick);
            } else {
                el.textContent = target + suffix;
            }
        }
        requestAnimationFrame(tick);
    }


    /* ============================================================
       FORM HANDLERS
       Each theme has its own form. They all do the same thing:
       prevent default, show the success message, reset.
       ============================================================ */
    window.t01HandleSubmit = function(event) {
        event.preventDefault();
        var success = document.getElementById('t01-form-success');
        if (success) {
            success.classList.add('visible');
            event.target.reset();
            setTimeout(function() {
                success.classList.remove('visible');
            }, 5000);
        }
    };

    window.t02HandleSubmit = function(event) {
        event.preventDefault();
        var success = document.getElementById('t02-form-success');
        if (success) {
            success.classList.add('visible');
            event.target.reset();
            setTimeout(function() {
                success.classList.remove('visible');
            }, 5000);
        }
    };

    window.t03HandleSubmit = function(event) {
        event.preventDefault();
        var success = document.getElementById('t03-form-success');
        if (success) {
            success.classList.add('visible');
            event.target.reset();
            setTimeout(function() {
                success.classList.remove('visible');
            }, 5000);
        }
    };


    /* ============================================================
       SMOOTH SCROLL OFFSET HANDLING
       Account for sticky navs when scrolling to anchors within
       a theme so the section header isn't hidden behind the nav.
       ============================================================ */
    document.querySelectorAll('a[href^="#"]').forEach(function(link) {
        link.addEventListener('click', function(e) {
            var href = this.getAttribute('href');
            if (href === '#' || href.length < 2) return;
            var target = document.querySelector(href);
            if (!target) return;
            // Let CSS scroll-behavior: smooth handle it; the offset
            // is small and the look-and-feel is fine on Themes 01-03
        });
    });

})();


/* ============================================================
   BATCH 2 — Themes 04, 05, 06
   Form handlers + Theme 06 neural network canvas animation.
   Wrapped in their own IIFE so they don't pollute Batch 1.
   ============================================================ */

(function() {

    /* Form handlers — same pattern as Batch 1 */
    window.t04HandleSubmit = function(event) {
        event.preventDefault();
        var success = document.getElementById('t04-form-success');
        if (success) {
            success.classList.add('visible');
            event.target.reset();
            setTimeout(function() {
                success.classList.remove('visible');
            }, 5000);
        }
    };

    window.t05HandleSubmit = function(event) {
        event.preventDefault();
        var success = document.getElementById('t05-form-success');
        if (success) {
            success.classList.add('visible');
            event.target.reset();
            setTimeout(function() {
                success.classList.remove('visible');
            }, 5000);
        }
    };

    window.t06HandleSubmit = function(event) {
        event.preventDefault();
        var success = document.getElementById('t06-form-success');
        if (success) {
            success.classList.add('visible');
            event.target.reset();
            setTimeout(function() {
                success.classList.remove('visible');
            }, 5000);
        }
    };


    /* ============================================================
       THEME 06 NEURAL NETWORK ANIMATION
       Canvas in the hero with four layers, pulses traveling
       through random paths from input to output.
       ============================================================ */
    var canvas = document.getElementById('t06Network');
    if (canvas) {
        var ctx = canvas.getContext('2d');
        var dpr = window.devicePixelRatio || 1;
        var W = 0, H = 0;
        var nodes = [];
        var connections = [];
        var pulses = [];
        var lastSpawn = 0;
        var animationId = null;

        var reduced = window.matchMedia &&
            window.matchMedia('(prefers-reduced-motion: reduce)').matches;

        function resize() {
            var rect = canvas.getBoundingClientRect();
            W = rect.width;
            H = rect.height;
            canvas.width = W * dpr;
            canvas.height = H * dpr;
            ctx.scale(dpr, dpr);
            buildNetwork();
        }

        function buildNetwork() {
            nodes = [];
            connections = [];
            var layers = [
                { count: 5, x: 0.10 },
                { count: 8, x: 0.35 },
                { count: 8, x: 0.65 },
                { count: 4, x: 0.90 }
            ];
            layers.forEach(function(layer, layerIdx) {
                var spacing = H / (layer.count + 1);
                for (var i = 0; i < layer.count; i++) {
                    nodes.push({
                        layer: layerIdx,
                        x: layer.x * W,
                        y: spacing * (i + 1),
                        glow: 0
                    });
                }
            });
            for (var l = 0; l < layers.length - 1; l++) {
                var fromN = nodes.filter(function(n) { return n.layer === l; });
                var toN = nodes.filter(function(n) { return n.layer === l + 1; });
                fromN.forEach(function(f) {
                    toN.forEach(function(t) {
                        connections.push({ from: f, to: t });
                    });
                });
            }
        }

        function spawnPulse() {
            var starts = nodes.filter(function(n) { return n.layer === 0; });
            if (starts.length === 0) return;
            var path = [starts[Math.floor(Math.random() * starts.length)]];
            for (var l = 1; l < 4; l++) {
                var nl = nodes.filter(function(n) { return n.layer === l; });
                if (nl.length === 0) continue;
                path.push(nl[Math.floor(Math.random() * nl.length)]);
            }
            pulses.push({
                path: path,
                segment: 0,
                t: 0,
                speed: 0.014 + Math.random() * 0.008
            });
        }

        function tick(now) {
            ctx.clearRect(0, 0, W, H);

            // Draw connections
            ctx.strokeStyle = 'rgba(93,202,165,0.06)';
            ctx.lineWidth = 0.5;
            connections.forEach(function(c) {
                ctx.beginPath();
                ctx.moveTo(c.from.x, c.from.y);
                ctx.lineTo(c.to.x, c.to.y);
                ctx.stroke();
            });

            // Spawn new pulses
            if (now - lastSpawn > 350) {
                spawnPulse();
                lastSpawn = now;
            }

            // Update + draw pulses
            pulses.forEach(function(p) {
                p.t += p.speed;
                if (p.t >= 1) {
                    p.t = 0;
                    p.segment++;
                    if (p.segment < p.path.length - 1) {
                        p.path[p.segment].glow = 1;
                    }
                }
                if (p.segment < p.path.length - 1) {
                    var f = p.path[p.segment];
                    var t = p.path[p.segment + 1];
                    var x = f.x + (t.x - f.x) * p.t;
                    var y = f.y + (t.y - f.y) * p.t;

                    ctx.strokeStyle = 'rgba(93,202,165,0.5)';
                    ctx.lineWidth = 1;
                    ctx.beginPath();
                    ctx.moveTo(f.x, f.y);
                    ctx.lineTo(x, y);
                    ctx.stroke();

                    ctx.fillStyle = '#5DCAA5';
                    ctx.beginPath();
                    ctx.arc(x, y, 2.5, 0, Math.PI * 2);
                    ctx.fill();

                    ctx.fillStyle = 'rgba(93,202,165,0.2)';
                    ctx.beginPath();
                    ctx.arc(x, y, 7, 0, Math.PI * 2);
                    ctx.fill();
                }
            });

            // Remove finished pulses
            pulses = pulses.filter(function(p) {
                return p.segment < p.path.length - 1;
            });

            // Draw nodes
            nodes.forEach(function(n) {
                n.glow *= 0.94;
                if (n.glow > 0.05) {
                    ctx.fillStyle = 'rgba(93,202,165,' + (n.glow * 0.25) + ')';
                    ctx.beginPath();
                    ctx.arc(n.x, n.y, 3 + 7 * n.glow, 0, Math.PI * 2);
                    ctx.fill();
                }
                ctx.fillStyle = n.glow > 0.05
                    ? 'rgba(180,240,210,1)'
                    : 'rgba(232,234,236,0.55)';
                ctx.beginPath();
                ctx.arc(n.x, n.y, 2.5, 0, Math.PI * 2);
                ctx.fill();
            });

            animationId = requestAnimationFrame(tick);
        }

        function start() {
            resize();
            if (reduced) {
                // Draw a single static frame
                ctx.clearRect(0, 0, W, H);
                ctx.strokeStyle = 'rgba(93,202,165,0.1)';
                ctx.lineWidth = 0.5;
                connections.forEach(function(c) {
                    ctx.beginPath();
                    ctx.moveTo(c.from.x, c.from.y);
                    ctx.lineTo(c.to.x, c.to.y);
                    ctx.stroke();
                });
                nodes.forEach(function(n) {
                    ctx.fillStyle = 'rgba(232,234,236,0.55)';
                    ctx.beginPath();
                    ctx.arc(n.x, n.y, 2.5, 0, Math.PI * 2);
                    ctx.fill();
                });
            } else {
                if (animationId) cancelAnimationFrame(animationId);
                animationId = requestAnimationFrame(tick);
            }
        }

        // Initial start
        start();

        // Pause when off-screen for performance
        if ('IntersectionObserver' in window) {
            var heroSection = canvas.closest('.t06-hero');
            if (heroSection) {
                var pauseObserver = new IntersectionObserver(function(entries) {
                    entries.forEach(function(entry) {
                        if (entry.isIntersecting) {
                            if (!reduced && !animationId) {
                                animationId = requestAnimationFrame(tick);
                            }
                        } else {
                            if (animationId) {
                                cancelAnimationFrame(animationId);
                                animationId = null;
                            }
                        }
                    });
                }, { threshold: 0 });
                pauseObserver.observe(heroSection);
            }
        }

        // Handle resize with debounce
        var resizeTimer;
        window.addEventListener('resize', function() {
            clearTimeout(resizeTimer);
            resizeTimer = setTimeout(start, 200);
        });
    }

})();


/* ============================================================
   THEME 08 — CULINARY GEOMETRY JAVASCRIPT
   The original main.js, transformed for integration as Theme 8.
   Wrapped in an IIFE; functions exposed on window with t08 prefix.
   ============================================================ */
(function() {
// Data: 20 High-End Culinary Concepts with Unique Instructions and Fixed Local/Cloud Asset Links
const recipes = [
    { 
        title: "Smoked Wagyu Tartare", 
        time: "25 Min", 
        difficulty: "Expert", 
        img: "https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?auto=format&fit=crop&w=600&q=80", 
        ingredients: ["A5 Wagyu Beef", "Quail Egg", "Truffle Oil", "Capers"],
        instructions: "<p>1. Finely dice the A5 Wagyu beef using a chilled carbon-steel knife to prevent fat rendering.</p><p>2. Fold in the truffle oil, finely minced capers, and sea salt to taste.</p><p>3. Pack the mixture into a ring mold and gently release it in the center of the plate.</p><p>4. Carefully separate the quail egg yolk and rest it atop the tartare before serving with crisp brioche crostini.</p>"
    },
    { 
        title: "Pan-Seared Scallops", 
        time: "15 Min", 
        difficulty: "Medium", 
        img: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&w=600&q=80", 
        ingredients: ["King Scallops", "Cauliflower Purée", "Pancetta", "Microgreens"],
        instructions: "<p>1. Pat the king scallops completely dry and season with salt and white pepper.</p><p>2. Sear in a smoking-hot cast-iron skillet with clarified butter for 90 seconds per side until a deep crust forms.</p><p>3. Plate over a warm bed of silky cauliflower purée.</p><p>4. Garnish with crispy rendered pancetta bits and fresh microgreens.</p>"
    },
    { 
        title: "Miso Glazed Black Cod", 
        time: "40 Min", 
        difficulty: "Hard", 
        img: "https://images.unsplash.com/photo-1580476262798-bddd9f4b7369?auto=format&fit=crop&w=600&q=80", 
        ingredients: ["Black Cod", "White Miso", "Mirin", "Sake"],
        instructions: "<p>1. Whisk the white miso, mirin, and sake together in a saucepan until smooth and slightly reduced.</p><p>2. Marinate the black cod fillets in the mixture for 24 hours under refrigeration.</p><p>3. Scrape off the excess marinade and roast in a preheated oven at 400°F (200°C) for 8 to 10 minutes until it flakes perfectly.</p><p>4. Finish under the broiler for 1 minute to caramelize the sugars.</p>"
    },
    { 
        title: "Deconstructed Tiramisu", 
        time: "45 Min", 
        difficulty: "Medium", 
        img: "https://images.unsplash.com/photo-1517180102446-f3ece451e9d8?auto=format&fit=crop&w=600&q=80", 
        ingredients: ["Mascarpone Espuma", "Espresso Caviar", "Ladyfinger Crumble", "Cocoa Dust"],
        instructions: "<p>1. Prepare the mascarpone base and charge it in an ISI siphon with two chargers to create the espuma.</p><p>2. Use the reverse spherification method with espresso and calcium chloride to make the caviar pearls.</p><p>3. Toast ladyfinger crumbles with espresso-infused simple syrup.</p><p>4. Layer artfully in a wide bowl and dust heavily with premium Valrhona cocoa powder just before presenting.</p>"
    },
    { 
        title: "Venison Loin", 
        time: "35 Min", 
        difficulty: "Expert", 
        img: "https://images.unsplash.com/photo-1600891964092-4316c288032e?auto=format&fit=crop&w=600&q=80", 
        ingredients: ["Venison Loin", "Blackberry Jus", "Parsnip Purée", "Juniper"],
        instructions: "<p>1. Trim the venison loin and season aggressively with crushed juniper berries, cracked black pepper, and sea salt.</p><p>2. Pan-sear the loin with thyme and a whole head of garlic until medium-rare, then let rest for 10 minutes.</p><p>3. Swirl blackberry reduction and butter into the jus for a rich, glossy finish.</p><p>4. Serve over a pool of whipped parsnip purée.</p>"
    },
    { 
        title: "Saffron Risotto", 
        time: "30 Min", 
        difficulty: "Medium", 
        img: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?auto=format&fit=crop&w=600&q=80", 
        ingredients: ["Arborio Rice", "Saffron Threads", "Bone Marrow", "Parmigiano"],
        instructions: "<p>1. Bloom saffron threads in warm bone marrow stock for 20 minutes before beginning the cooking process.</p><p>2. Toast the arborio rice in a wide saucepan, then deglaze with a dry white wine.</p><p>3. Slowly ladle in the saffron-infused stock while continuously stirring over medium heat until the rice is al dente.</p><p>4. Off the heat, vigorously beat in cold butter and aged parmigiano-reggiano.</p>"
    },
    { 
        title: "Charred Octopus", 
        time: "60 Min", 
        difficulty: "Hard", 
        img: "https://images.unsplash.com/photo-1493612276216-ee3925520721?auto=format&fit=crop&w=600&q=80", 
        ingredients: ["Spanish Octopus", "Romesco Sauce", "Fingerling Potatoes", "Smoked Paprika"],
        instructions: "<p>1. Braise the octopus tentacles in a court-bouillon with a wine cork until tender, roughly 45 to 55 minutes.</p><p>2. Let the octopus cool slightly, then char over a smoking-hot binchotan or gas grill for 60 seconds per side.</p><p>3. Smear a generous spoonful of Romesco sauce on the base of the serving plate.</p><p>4. Lay the charred octopus over the sauce and accompany with blistered fingerling potatoes.</p>"
    },
    { 
        title: "Duck Confit", 
        time: "120 Min", 
        difficulty: "Hard", 
        img: "https://images.unsplash.com/photo-1580476262798-bddd9f4b7369?auto=format&fit=crop&w=600&q=80", 
        ingredients: ["Duck Legs", "Duck Fat", "Thyme", "Garlic Confit"],
        instructions: "<p>1. Cure duck legs overnight in a mixture of coarse sea salt, cracked black pepper, and fresh thyme sprigs.</p><p>2. Submerge the legs in a deep baking dish entirely covered with duck fat.</p><p>3. Bake at a gentle 250°F (120°C) for up to 3 hours until the meat is fork-tender and falling off the bone.</p><p>4. Broil the cooked legs for 5 minutes just before service to crisp the skin.</p>"
    },
    { 
        title: "Oyster Emulsion", 
        time: "20 Min", 
        difficulty: "Expert", 
        img: "https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=600&q=80", 
        ingredients: ["Kumamoto Oysters", "Yuzu Kosho", "Cucumber Foam", "Dill Oil"],
        instructions: "<p>1. Shuck the oysters, reserving all the liquor, butter and juices for the emulsion base.</p><p>2. Blend the oysters and their liquor with a touch of yuzu kosho and neutral oil until a creamy mayonnaise-like consistency is achieved.</p><p>3. Create cucumber foam with a hand blender and soy lecithin.</p><p>4. Plate the fresh oyster, top with a small quenelle of the emulsion, and drop the foam alongside.</p>"
    },
    { 
        title: "Truffle Tagliatelle", 
        time: "25 Min", 
        difficulty: "Medium", 
        img: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&w=600&q=80", 
        ingredients: ["Fresh Pasta", "White Truffle", "Butter Emulsion", "Pecorino"],
        instructions: "<p>1. Roll and cut the fresh tagliatelle dough to an exact 2mm thickness.</p><p>2. Cook the pasta in heavily salted, boiling water for precisely 90 seconds.</p><p>3. Toss the pasta into a hot pan with a small amount of the pasta water and cultured butter to build a luscious emulsion.</p><p>4. Plate the pasta, shave fresh white truffles over the top, and finish with freshly grated Pecorino Romano.</p>"
    },
    { 
        title: "Beetroot Salad", 
        time: "50 Min", 
        difficulty: "Medium", 
        img: "https://images.unsplash.com/photo-1559028012-481c04fa702d?auto=format&fit=crop&w=600&q=80", 
        ingredients: ["Heirloom Beets", "Fetta Cheese", "Pistachio Sand", "Balsamic Caviar"],
        instructions: "<p>1. Roast heirloom beets in their skins until fully tender, then peel and cube or slice them into geometric shapes.</p><p>2. Create the fetta cheese snow by piping a mixture of fetta cheese and cream through an iSi whipping siphon and freezing it in liquid nitrogen.</p><p>3. Construct balsamic pearls through reverse spherification and sprinkle toasted pistachio sand on the plate.</p>"
    },
    { 
        title: "Pork Belly Bao", 
        time: "90 Min", 
        difficulty: "Hard", 
        img: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=600&q=80", 
        ingredients: ["Braised Pork Belly", "Lotus Bun", "Hoisin Glaze", "Pickled Daikon"],
        instructions: "<p>1. Braise the pork belly in a mixture of soy sauce, Shaoxing wine, and five-spice for 2.5 hours until tender.</p><p>2. Steam the lotus buns in a bamboo steamer for 4 minutes until warm and fluffy.</p><p>3. Brush the pork belly with hoisin glaze and sear on a flat-top grill until sticky.</p><p>4. Assemble with the pork, pickled daikon, and cilantro inside the steamed bun.</p>"
    },
    { 
        title: "Matcha Mille-Feuille", 
        time: "180 Min", 
        difficulty: "Expert", 
        img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=600&q=80", 
        ingredients: ["Puff Pastry", "Matcha Cream", "Adzuki Bean", "Gold Leaf"],
        instructions: "<p>1. Roll out the puff pastry, dock with a fork, and bake at 375°F (190°C) with weights until crisp and golden.</p><p>2. Prepare a pastry cream and gently fold in ceremonial grade matcha powder.</p><p>3. Pipe the matcha cream between layers of the pastry, interlacing with lines of sweet adzuki bean paste.</p><p>4. Dust the top with powdered sugar and place a small piece of gold leaf in the center.</p>"
    },
    { 
        title: "Lobster Thermidor", 
        time: "45 Min", 
        difficulty: "Hard", 
        img: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=600&q=80", 
        ingredients: ["Maine Lobster", "Gruyère", "Cognac", "Dijon Mustard"],
        instructions: "<p>1. Blanch the lobster in boiling water for 4 minutes; split it in half and remove the meat from the shell.</p><p>2. Create a rich Thermidor sauce using a velouté base, cream, cognac, and Dijon mustard.</p><p>3. Toss the lobster meat into the sauce and place the mixture back into the clean shell halves.</p><p>4. Top with Gruyère cheese and broil until bubbling and golden-brown.</p>"
    },
    { 
        title: "King Crab Legs", 
        time: "30 Min", 
        difficulty: "Medium", 
        img: "https://images.unsplash.com/photo-1483058712412-4245e9b90334?auto=format&fit=crop&w=600&q=80", 
        ingredients: ["Alaskan King Crab", "Clarified Butter", "Lemon Ash", "Chives"],
        instructions: "<p>1. Carefully crack open the King Crab legs using kitchen shears to extract the pristine meat.</p><p>2. Warm the meat in a gentle sous-vide bath or steamer at 140°F (60°C) with a brush of clarified butter.</p><p>3. Plate the warm crab meat and sprinkle a pinch of bright lemon ash over it for a citrus-infused earthy note.</p><p>4. Garnish with minced chives.</p>"
    },
    { 
        title: "Foie Gras Torchon", 
        time: "24 Hrs", 
        difficulty: "Expert", 
        img: "https://images.unsplash.com/photo-1600891964092-4316c288032e?auto=format&fit=crop&w=600&q=80", 
        ingredients: ["Duck Liver", "Sauternes", "Fig Jam", "Brioche Toast"],
        instructions: "<p>1. Devein the foie gras lobe at room temperature and marinate it in Sauternes wine and sea salt for 2 hours.</p><p>2. Shape into a tight cylinder using cheesecloth and plastic wrap, then poach in a simmering water bath at 130°F (55°C) for 10 minutes.</p><p>3. Chill in an ice bath overnight to set the fats into a perfect torchon.</p><p>4. Slice with a hot knife and serve with fig jam and toasted brioche.</p>"
    },
    { 
        title: "Hamachi Crudo", 
        time: "15 Min", 
        difficulty: "Medium", 
        img: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=600&q=80", 
        ingredients: ["Yellowtail", "Ponzu", "Serrano Chili", "Radish"],
        instructions: "<p>1. Slice the hamachi fillet into extremely thin, uniform strips using a sharp Yanagiba knife.</p><p>2. Arrange the slices decoratively in a circle on a chilled white ceramic plate.</p><p>3. Drizzle with a thin, clear ponzu reduction.</p><p>4. Place a razor-thin slice of serrano chili and a translucent disc of watermelon radish on each piece of fish before serving.</p>"
    },
    { 
        title: "Pigeon Pithivier", 
        time: "120 Min", 
        difficulty: "Expert", 
        img: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=600&q=80", 
        ingredients: ["Squab", "Puff Pastry", "Cabbage", "Mushroom Duxelles"],
        instructions: "<p>1. Roast the squab breasts until just undercooked, and prepare a dense mushroom duxelles with caramelized shallots.</p><p>2. Wrap the squab meat along with the duxelles in puff pastry to form a classical Pithivier dome.</p><p>3. Brush with an egg wash and score the top of the pastry in an elegant curved pattern.</p><p>4. Bake at 425°F (220°C) for 25 minutes until the pastry is highly puffed and flaky.</p>"
    },
    { 
        title: "Squid Ink Chitarra", 
        time: "35 Min", 
        difficulty: "Hard", 
        img: "https://images.unsplash.com/photo-1531403009284-440f080d1e12?auto=format&fit=crop&w=600&q=80", 
        ingredients: ["Squid Ink Dough", "Sea Urchin", "Chili Flakes", "Bottarga"],
        instructions: "<p>1. Mix durum wheat with squid ink until a dark dough is formed; pass it over the chitarra strings.</p><p>2. Cook the pasta in boiling, salted water for 2 minutes until perfectly al dente.</p><p>3. Toss in a pan with extra virgin olive oil, chili flakes, and the fresh sea urchin tongues.</p><p>4. Serve immediately, shaving cured bottarga over the dark pasta.</p>"
    },
    { 
        title: "Yuzu Soufflé", 
        time: "40 Min", 
        difficulty: "Expert", 
        img: "https://images.unsplash.com/photo-1504384764586-bb4cdc1707b0?auto=format&fit=crop&w=600&q=80", 
        ingredients: ["Yuzu Juice", "Egg Whites", "Caster Sugar", "Vanilla Bean"],
        instructions: "<p>1. Whisk yuzu juice with an egg yolk pastry cream base until well combined.</p><p>2. Whip the egg whites to medium peaks while slowly adding the caster sugar until a glossy meringue forms.</p><p>3. Gently fold the meringue into the yuzu base to preserve the volume, then pour into buttered, sugar-dusted ramekins.</p><p>4. Bake at 390°F (200°C) for 12 minutes until risen, and serve straight away.</p>"
    }
];

document.addEventListener('DOMContentLoaded', () => {
    const gridContainer = document.getElementById('t08-recipe-grid');
    const modal = document.getElementById('t08-recipe-modal');
    const closeBtn = document.getElementById('t08-close-modal');
    const overlay = document.getElementById('t08-modal-overlay');

    // 1. Generate and inject the 20 cards
    recipes.forEach((recipe, index) => {
        const article = document.createElement('article');
        article.classList.add('t08-card');
        
        const ingredientsList = recipe.ingredients
            .map(ing => `<li>${ing}</li>`)
            .join('');

        article.innerHTML = `
            <div class="t08-card-inner">
                <div class="t08-card-front">
                    <img src="${recipe.img}" alt="${recipe.title}" class="t08-card-image" loading="lazy">
                    <h2 class="card-title-front">${recipe.title}</h2>
                </div>
                
                <div class="t08-card-back">
                    <h2 class="recipe-title">${recipe.title}</h2>
                    <div class="t08-recipe-meta">
                        <span>⏱ ${recipe.time}</span>
                        <span>🔥 ${recipe.difficulty}</span>
                    </div>
                    <ul class="t08-recipe-ingredients">
                        ${ingredientsList}
                    </ul>
                    <button class="t08-btn-view" data-index="${index}" aria-label="View full recipe for ${recipe.title}">View Recipe</button>
                </div>
            </div>
        `;
        
        gridContainer.appendChild(article);
    });

    // 2. Intersection Observer for Cinematic Geometry Mask Reveal
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };

    const cardObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                setTimeout(() => {
                    entry.target.classList.add('is-visible');
                }, index * 100); 
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    document.querySelectorAll('.t08-card').forEach(card => {
        cardObserver.observe(card);
    });

    // 3. Modal Logic
    const openModal = (index) => {
        const recipe = recipes[index];
        
        // Populate modal data
        document.getElementById('t08-modal-title').textContent = recipe.title;
        document.getElementById('t08-modal-img').src = recipe.img;
        document.getElementById('t08-modal-img').alt = recipe.title;
        document.getElementById('t08-modal-time').textContent = `⏱ ${recipe.time}`;
        document.getElementById('t08-modal-difficulty').textContent = `🔥 ${recipe.difficulty}`;
        
        // Populate ingredients
        document.getElementById('t08-modal-ingredients').innerHTML = recipe.ingredients
            .map(ing => `<li>${ing}</li>`)
            .join('');
            
        // Populate specific instructions
        document.getElementById('t08-modal-instructions').innerHTML = recipe.instructions;

        // Show modal & prevent body scroll
        modal.classList.add('is-open');
        modal.setAttribute('aria-hidden', 'false');
        document.body.style.overflow = 'hidden';
        
        // Focus management
        closeBtn.focus();
    };

    const closeModal = () => {
        modal.classList.remove('is-open');
        modal.setAttribute('aria-hidden', 'true');
        document.body.style.overflow = '';
    };

    // Event Delegation for dynamically created buttons
    gridContainer.addEventListener('click', (e) => {
        if (e.target.classList.contains('t08-btn-view')) {
            const index = e.target.getAttribute('data-index');
            openModal(index);
        }
    });

    // Close Event Listeners
    closeBtn.addEventListener('click', closeModal);
    overlay.addEventListener('click', closeModal);

    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && modal.classList.contains('is-open')) {
            closeModal();
        }
    });
});
// Newsletter form handler
function t08HandleNewsletter(e) {
    e.preventDefault();
    document.querySelector('.t08-newsletter-form').style.display = 'none';
    document.getElementById('t08NewsletterThanks').style.display = 'block';
}

// ── BOOKING CARD ──
function t08OpenBookingCard() {
    const wrap = document.getElementById('t08BookingCardWrap');
    const card = document.getElementById('t08BookingCard');
    document.getElementById('t08EventCardWrap').style.display = 'none';
    wrap.style.display = 'block';
    wrap.scrollIntoView({ behavior: 'smooth', block: 'center' });
    // spin animation on the front, then flip
    const front = card.querySelector('.t08-flip-card-front');
    front.style.transition = 'transform 0.6s cubic-bezier(0.4,0,0.2,1)';
    front.style.transform = 'rotateY(360deg)';
    setTimeout(() => {
        front.style.transform = '';
        front.style.transition = '';
        card.classList.add('is-flipped');
    }, 650);
}

function t08CloseBookingCard() {
    const wrap = document.getElementById('t08BookingCardWrap');
    const card = document.getElementById('t08BookingCard');
    card.classList.remove('is-flipped');
    setTimeout(() => {
        wrap.style.display = 'none';
        const form = document.getElementById('t08BookingForm');
        const thanks = document.getElementById('t08BookingThanks');
        if (form) { form.style.display = ''; form.reset(); }
        if (thanks) thanks.style.display = 'none';
    }, 500);
}

function t08SubmitBooking(e) {
    e.preventDefault();
    document.getElementById('t08BookingForm').style.display = 'none';
    document.getElementById('t08BookingThanks').style.display = 'block';
}

// ── EVENT CALENDAR ──
const bookedDates = new Set([3, 7, 8, 14, 15, 21, 22, 28]);
const availableSlots = {
    1:  ['6:00 PM', '7:00 PM', '8:00 PM'],
    2:  ['6:30 PM', '8:00 PM'],
    4:  ['6:00 PM', '7:30 PM'],
    5:  ['7:00 PM', '8:30 PM'],
    6:  ['6:00 PM', '7:00 PM', '8:00 PM'],
    9:  ['6:30 PM', '7:30 PM'],
    10: ['6:00 PM', '8:00 PM'],
    11: ['7:00 PM', '8:30 PM'],
    12: ['6:00 PM', '7:00 PM'],
    13: ['7:30 PM'],
    16: ['6:00 PM', '7:00 PM', '8:00 PM'],
    17: ['6:30 PM', '8:30 PM'],
    18: ['7:00 PM'],
    19: ['6:00 PM', '7:30 PM'],
    20: ['6:00 PM', '7:00 PM', '8:00 PM'],
    23: ['7:00 PM', '8:00 PM'],
    24: ['6:00 PM', '7:30 PM'],
    25: ['6:30 PM', '8:00 PM'],
    26: ['7:00 PM'],
    27: ['6:00 PM', '7:00 PM', '8:30 PM'],
};

let currentMonth = new Date().getMonth();
let currentYear = new Date().getFullYear();
let selectedDay = null;
let selectedTime = null;

function t08OpenEventCard() {
    const wrap = document.getElementById('t08EventCardWrap');
    const card = document.getElementById('t08EventCard');
    document.getElementById('t08BookingCardWrap').style.display = 'none';
    wrap.style.display = 'block';
    wrap.scrollIntoView({ behavior: 'smooth', block: 'center' });
    const front = card.querySelector('.t08-flip-card-front');
    front.style.transition = 'transform 0.6s cubic-bezier(0.4,0,0.2,1)';
    front.style.transform = 'rotateY(360deg)';
    setTimeout(() => {
        front.style.transform = '';
        front.style.transition = '';
        card.classList.add('is-flipped');
        renderCalendar();
    }, 650);
}

function t08CloseEventCard() {
    const wrap = document.getElementById('t08EventCardWrap');
    const card = document.getElementById('t08EventCard');
    card.classList.remove('is-flipped');
    setTimeout(() => {
        wrap.style.display = 'none';
        const ef = document.getElementById('t08EventForm');
        const et = document.getElementById('t08EventThanks');
        const ea = document.getElementById('t08EventFormActions');
        const ts = document.getElementById('t08TimeSlotsWrap');
        if (ef) ef.style.display = 'none';
        if (et) et.style.display = 'none';
        if (ea) ea.style.display = 'none';
        if (ts) ts.style.display = 'none';
        selectedDay = null;
        selectedTime = null;
    }, 500);
}

function t08ChangeMonth(dir) {
    currentMonth += dir;
    if (currentMonth > 11) { currentMonth = 0; currentYear++; }
    if (currentMonth < 0)  { currentMonth = 11; currentYear--; }
    selectedDay = null;
    selectedTime = null;
    document.getElementById('t08TimeSlotsWrap').style.display = 'none';
    document.getElementById('t08EventFormActions').style.display = 'none';
    renderCalendar();
}

function renderCalendar() {
    const monthNames = ['January','February','March','April','May','June','July','August','September','October','November','December'];
    document.getElementById('t08CalMonthLabel').textContent = `${monthNames[currentMonth]} ${currentYear}`;
    const grid = document.getElementById('t08CalGrid');
    grid.innerHTML = '';
    const dayNames = ['Su','Mo','Tu','We','Th','Fr','Sa'];
    dayNames.forEach(d => {
        const el = document.createElement('div');
        el.className = 'cal-day-name';
        el.textContent = d;
        grid.appendChild(el);
    });
    const firstDay = new Date(currentYear, currentMonth, 1).getDay();
    const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();
    const today = new Date();
    for (let i = 0; i < firstDay; i++) {
        const el = document.createElement('div');
        el.className = 't08-cal-day empty';
        grid.appendChild(el);
    }
    for (let d = 1; d <= daysInMonth; d++) {
        const el = document.createElement('div');
        const thisDate = new Date(currentYear, currentMonth, d);
        const isPast = thisDate < new Date(today.getFullYear(), today.getMonth(), today.getDate());
        const isBooked = bookedDates.has(d);
        el.className = 't08-cal-day';
        el.textContent = d;
        if (isPast) {
            el.classList.add('past');
        } else if (isBooked) {
            el.classList.add('booked');
            el.title = 'Fully booked';
        } else {
            el.classList.add('available');
            if (selectedDay === d) el.classList.add('selected');
            el.addEventListener('click', () => selectDay(d, el));
        }
        grid.appendChild(el);
    }
}

function selectDay(day, el) {
    selectedDay = day;
    selectedTime = null;
    document.querySelectorAll('.t08-cal-day').forEach(d => d.classList.remove('selected'));
    el.classList.add('selected');
    const monthNames = ['January','February','March','April','May','June','July','August','September','October','November','December'];
    const slotsWrap = document.getElementById('t08TimeSlotsWrap');
    const slotsLabel = document.getElementById('t08TimeSlotsLabel');
    const slots = document.getElementById('t08TimeSlots');
    const actions = document.getElementById('t08EventFormActions');
    slotsLabel.textContent = `Available times — ${monthNames[currentMonth]} ${day}`;
    slots.innerHTML = '';
    const times = availableSlots[day] || [];
    if (times.length === 0) {
        slots.innerHTML = '<span style="font-size:0.75rem;color:#555;">No times available for this date.</span>';
    } else {
        times.forEach(t => {
            const btn = document.createElement('button');
            btn.className = 'time-slot';
            btn.textContent = t;
            btn.addEventListener('click', () => {
                document.querySelectorAll('.t08-time-slot').forEach(s => s.classList.remove('selected'));
                btn.classList.add('selected');
                selectedTime = t;
                actions.style.display = 'flex';
            });
            slots.appendChild(btn);
        });
    }
    slotsWrap.style.display = 'block';
    actions.style.display = 'none';
}

function t08ShowEventForm() {
    document.getElementById('t08EventFormActions').style.display = 'none';
    document.getElementById('t08EventForm').style.display = 'block';
}

function t08SubmitEvent(e) {
    e.preventDefault();
    document.getElementById('t08EventForm').style.display = 'none';
    document.getElementById('t08EventThanks').style.display = 'block';
}


// Expose functions that the HTML's onclick handlers need
window.t08OpenBookingCard = t08OpenBookingCard;
window.t08CloseBookingCard = t08CloseBookingCard;
window.t08SubmitBooking = t08SubmitBooking;
window.t08OpenEventCard = t08OpenEventCard;
window.t08CloseEventCard = t08CloseEventCard;
window.t08SubmitEvent = t08SubmitEvent;
window.t08ShowEventForm = t08ShowEventForm;
window.t08ChangeMonth = t08ChangeMonth;
window.t08HandleNewsletter = t08HandleNewsletter;
})();



/* ============================================================
   THEMES 7 & 9 — form handlers
   ============================================================ */
(function() {
    window.t07HandleSubmit = function(event) {
        event.preventDefault();
        var success = document.getElementById('t07-form-success');
        if (success) {
            success.classList.add('visible');
            event.target.reset();
            setTimeout(function() {
                success.classList.remove('visible');
            }, 5000);
        }
    };

    window.t09HandleSubmit = function(event) {
        event.preventDefault();
        var success = document.getElementById('t09-form-success');
        if (success) {
            success.classList.add('visible');
            event.target.reset();
            setTimeout(function() {
                success.classList.remove('visible');
            }, 5000);
        }
    };
})();


/* ============================================================
   THEMES 13, 14, 15 — form handlers
   ============================================================ */
(function() {
    window.t13HandleSubmit = function(event) {
        event.preventDefault();
        var success = document.getElementById('t13-form-success');
        if (success) {
            success.classList.add('visible');
            event.target.reset();
            setTimeout(function() {
                success.classList.remove('visible');
            }, 5000);
        }
    };

    window.t14HandleSubmit = function(event) {
        event.preventDefault();
        var success = document.getElementById('t14-form-success');
        if (success) {
            success.classList.add('visible');
            event.target.reset();
            setTimeout(function() {
                success.classList.remove('visible');
            }, 5000);
        }
    };

    window.t15HandleSubmit = function(event) {
        event.preventDefault();
        var success = document.getElementById('t15-form-success');
        if (success) {
            success.classList.add('visible');
            event.target.reset();
            setTimeout(function() {
                success.classList.remove('visible');
            }, 5000);
        }
    };
})();


/* ============================================================
   THEMES 10, 11, 12 — form handlers + Theme 10 stat counter
   ============================================================ */
(function() {
    window.t10HandleSubmit = function(event) {
        event.preventDefault();
        var success = document.getElementById('t10-form-success');
        if (success) {
            success.classList.add('visible');
            event.target.reset();
            setTimeout(function() {
                success.classList.remove('visible');
            }, 6000);
        }
    };

    window.t11HandleSubmit = function(event) {
        event.preventDefault();
        var success = document.getElementById('t11-form-success');
        if (success) {
            success.classList.add('visible');
            event.target.reset();
            setTimeout(function() {
                success.classList.remove('visible');
            }, 6000);
        }
    };

    window.t12HandleSubmit = function(event) {
        event.preventDefault();
        var success = document.getElementById('t12-form-success');
        if (success) {
            success.classList.add('visible');
            event.target.reset();
            setTimeout(function() {
                success.classList.remove('visible');
            }, 6000);
        }
    };

    /* Theme 10 stat counter — same pattern as Theme 3
       Counts up from 0 to the data-target value when scrolled into view. */
    var t10StatNums = document.querySelectorAll('.theme-10 .t10-stat-num[data-target]');
    if ('IntersectionObserver' in window && t10StatNums.length) {
        var t10Observer = new IntersectionObserver(function(entries) {
            entries.forEach(function(entry) {
                if (entry.isIntersecting) {
                    t10AnimateCounter(entry.target);
                    t10Observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.5 });

        t10StatNums.forEach(function(stat) {
            t10Observer.observe(stat);
        });
    }

    function t10AnimateCounter(el) {
        var target = parseInt(el.getAttribute('data-target'), 10);
        var suffix = el.getAttribute('data-suffix') || '';
        var duration = 1800;
        var startTime = null;

        // Special case: if target is 0, just write "$0"
        if (target === 0) {
            el.textContent = '$0';
            return;
        }

        function tick(timestamp) {
            if (!startTime) startTime = timestamp;
            var progress = Math.min((timestamp - startTime) / duration, 1);
            var eased = 1 - Math.pow(1 - progress, 3);
            var current = Math.round(target * eased);
            el.textContent = current + suffix;
            if (progress < 1) {
                requestAnimationFrame(tick);
            } else {
                el.textContent = target + suffix;
            }
        }
        requestAnimationFrame(tick);
    }
})();
