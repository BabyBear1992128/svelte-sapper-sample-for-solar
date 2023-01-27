import { S as SvelteComponentDev, i as init, s as safe_not_equal, d as dispatch_dev, v as validate_slots, a as space, e as element, t as text, h as head_selector, b as detach_dev, c as claim_space, f as claim_element, g as children, j as claim_text, m as src_url_equal, k as attr_dev, l as add_location, n as insert_hydration_dev, o as append_hydration_dev, u as set_data_dev, p as noop } from './client.630baa59.js';

/* src\routes\converter\[id].svelte generated by Svelte v3.55.1 */

const file = "src\\routes\\converter\\[id].svelte";

function create_fragment(ctx) {
	let title_value;
	let t0;
	let div4;
	let div3;
	let div0;
	let img;
	let img_src_value;
	let t1;
	let div2;
	let h1;
	let t2_value = /*post*/ ctx[0].title + "";
	let t2;
	let t3;
	let div1;
	let raw_value = /*post*/ ctx[0].html + "";
	document.title = title_value = "" + (/*post*/ ctx[0].title + " | Converter | ProfitFlow");

	const block = {
		c: function create() {
			t0 = space();
			div4 = element("div");
			div3 = element("div");
			div0 = element("div");
			img = element("img");
			t1 = space();
			div2 = element("div");
			h1 = element("h1");
			t2 = text(t2_value);
			t3 = space();
			div1 = element("div");
			this.h();
		},
		l: function claim(nodes) {
			const head_nodes = head_selector('svelte-ip4si0', document.head);
			head_nodes.forEach(detach_dev);
			t0 = claim_space(nodes);
			div4 = claim_element(nodes, "DIV", { class: true });
			var div4_nodes = children(div4);
			div3 = claim_element(div4_nodes, "DIV", { class: true });
			var div3_nodes = children(div3);
			div0 = claim_element(div3_nodes, "DIV", { class: true });
			var div0_nodes = children(div0);
			img = claim_element(div0_nodes, "IMG", { src: true, alt: true, class: true });
			div0_nodes.forEach(detach_dev);
			t1 = claim_space(div3_nodes);
			div2 = claim_element(div3_nodes, "DIV", { class: true });
			var div2_nodes = children(div2);
			h1 = claim_element(div2_nodes, "H1", {});
			var h1_nodes = children(h1);
			t2 = claim_text(h1_nodes, t2_value);
			h1_nodes.forEach(detach_dev);
			t3 = claim_space(div2_nodes);
			div1 = claim_element(div2_nodes, "DIV", {});
			var div1_nodes = children(div1);
			div1_nodes.forEach(detach_dev);
			div2_nodes.forEach(detach_dev);
			div3_nodes.forEach(detach_dev);
			div4_nodes.forEach(detach_dev);
			this.h();
		},
		h: function hydrate() {
			if (!src_url_equal(img.src, img_src_value = "/converter.png")) attr_dev(img, "src", img_src_value);
			attr_dev(img, "alt", "Converter Image");
			attr_dev(img, "class", "svelte-zqivt3");
			add_location(img, file, 32, 3, 742);
			attr_dev(div0, "class", "photo col-xs-4");
			add_location(div0, file, 31, 2, 710);
			add_location(h1, file, 35, 3, 840);
			add_location(div1, file, 37, 3, 866);
			attr_dev(div2, "class", "description col-xs-8 svelte-zqivt3");
			add_location(div2, file, 34, 2, 802);
			attr_dev(div3, "class", "row");
			add_location(div3, file, 30, 1, 690);
			attr_dev(div4, "class", "container converter-page svelte-zqivt3");
			add_location(div4, file, 29, 0, 650);
		},
		m: function mount(target, anchor) {
			insert_hydration_dev(target, t0, anchor);
			insert_hydration_dev(target, div4, anchor);
			append_hydration_dev(div4, div3);
			append_hydration_dev(div3, div0);
			append_hydration_dev(div0, img);
			append_hydration_dev(div3, t1);
			append_hydration_dev(div3, div2);
			append_hydration_dev(div2, h1);
			append_hydration_dev(h1, t2);
			append_hydration_dev(div2, t3);
			append_hydration_dev(div2, div1);
			div1.innerHTML = raw_value;
		},
		p: function update(ctx, [dirty]) {
			if (dirty & /*post*/ 1 && title_value !== (title_value = "" + (/*post*/ ctx[0].title + " | Converter | ProfitFlow"))) {
				document.title = title_value;
			}

			if (dirty & /*post*/ 1 && t2_value !== (t2_value = /*post*/ ctx[0].title + "")) set_data_dev(t2, t2_value);
			if (dirty & /*post*/ 1 && raw_value !== (raw_value = /*post*/ ctx[0].html + "")) div1.innerHTML = raw_value;		},
		i: noop,
		o: noop,
		d: function destroy(detaching) {
			if (detaching) detach_dev(t0);
			if (detaching) detach_dev(div4);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_fragment.name,
		type: "component",
		source: "",
		ctx
	});

	return block;
}

async function preload({ params }) {
	// the `slug` parameter is available because
	// this file is called [slug].svelte
	const res = await this.fetch(`converter/${params.id}.json`);

	const data = await res.json();

	if (res.status === 200) {
		return { post: data };
	} else {
		this.error(res.status, data.message);
	}
}

function instance($$self, $$props, $$invalidate) {
	let { $$slots: slots = {}, $$scope } = $$props;
	validate_slots('U5Bidu5D', slots, []);
	let { post } = $$props;

	$$self.$$.on_mount.push(function () {
		if (post === undefined && !('post' in $$props || $$self.$$.bound[$$self.$$.props['post']])) {
			console.warn("<U5Bidu5D> was created without expected prop 'post'");
		}
	});

	const writable_props = ['post'];

	Object.keys($$props).forEach(key => {
		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== '$$' && key !== 'slot') console.warn(`<U5Bidu5D> was created with unknown prop '${key}'`);
	});

	$$self.$$set = $$props => {
		if ('post' in $$props) $$invalidate(0, post = $$props.post);
	};

	$$self.$capture_state = () => ({ preload, post });

	$$self.$inject_state = $$props => {
		if ('post' in $$props) $$invalidate(0, post = $$props.post);
	};

	if ($$props && "$$inject" in $$props) {
		$$self.$inject_state($$props.$$inject);
	}

	return [post];
}

class U5Bidu5D extends SvelteComponentDev {
	constructor(options) {
		super(options);
		init(this, options, instance, create_fragment, safe_not_equal, { post: 0 });

		dispatch_dev("SvelteRegisterComponent", {
			component: this,
			tagName: "U5Bidu5D",
			options,
			id: create_fragment.name
		});
	}

	get post() {
		throw new Error("<U5Bidu5D>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set post(value) {
		throw new Error("<U5Bidu5D>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}
}

export { U5Bidu5D as default, preload };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiX2lkXy40ZTAwOWI1Ni5qcyIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL3JvdXRlcy9jb252ZXJ0ZXIvW2lkXS5zdmVsdGUiXSwic291cmNlc0NvbnRlbnQiOlsiPHNjcmlwdCBjb250ZXh0PVwibW9kdWxlXCI+XG5cdGV4cG9ydCBhc3luYyBmdW5jdGlvbiBwcmVsb2FkKHsgcGFyYW1zIH0pIHtcblx0XHQvLyB0aGUgYHNsdWdgIHBhcmFtZXRlciBpcyBhdmFpbGFibGUgYmVjYXVzZVxuXHRcdC8vIHRoaXMgZmlsZSBpcyBjYWxsZWQgW3NsdWddLnN2ZWx0ZVxuXHRcdGNvbnN0IHJlcyA9IGF3YWl0IHRoaXMuZmV0Y2goYGNvbnZlcnRlci8ke3BhcmFtcy5pZH0uanNvbmApO1xuXHRcdGNvbnN0IGRhdGEgPSBhd2FpdCByZXMuanNvbigpO1xuXG5cdFx0aWYgKHJlcy5zdGF0dXMgPT09IDIwMCkge1xuXHRcdFx0cmV0dXJuIHsgcG9zdDogZGF0YSB9O1xuXHRcdH0gZWxzZSB7XG5cdFx0XHR0aGlzLmVycm9yKHJlcy5zdGF0dXMsIGRhdGEubWVzc2FnZSk7XG5cdFx0fVxuXHR9XG48L3NjcmlwdD5cblxuPHNjcmlwdD5cblx0ZXhwb3J0IGxldCBwb3N0O1xuPC9zY3JpcHQ+XG5cbjxzdHlsZT5cblx0LmNvbnZlcnRlci1wYWdle3BhZGRpbmc6IDQwcHggMTAwcHg7fVxuXHQuY29udmVydGVyLXBhZ2UgLnBob3RvIGltZ3t3aWR0aDogMTAwJTt9XG5cdC5jb252ZXJ0ZXItcGFnZSAuZGVzY3JpcHRpb257cGFkZGluZy1sZWZ0OiA0MHB4O31cbjwvc3R5bGU+XG5cbjxzdmVsdGU6aGVhZD5cblx0PHRpdGxlPntwb3N0LnRpdGxlfSB8IENvbnZlcnRlciB8IFByb2ZpdEZsb3c8L3RpdGxlPlxuPC9zdmVsdGU6aGVhZD5cblxuPGRpdiBjbGFzcz1cImNvbnRhaW5lciBjb252ZXJ0ZXItcGFnZVwiPlxuXHQ8ZGl2IGNsYXNzPVwicm93XCI+XG5cdFx0PGRpdiBjbGFzcz1cInBob3RvIGNvbC14cy00XCI+XG5cdFx0XHQ8aW1nIHNyYz1cIi9jb252ZXJ0ZXIucG5nXCIgYWx0PVwiQ29udmVydGVyIEltYWdlXCI+XG5cdFx0PC9kaXY+XG5cdFx0PGRpdiBjbGFzcz1cImRlc2NyaXB0aW9uIGNvbC14cy04XCI+XG5cdFx0XHQ8aDE+e3Bvc3QudGl0bGV9PC9oMT5cblxuXHRcdFx0PGRpdj5cblx0XHRcdFx0e0BodG1sIHBvc3QuaHRtbH1cblx0XHRcdDwvZGl2PlxuXHRcdDwvZGl2PlxuXHQ8L2Rpdj5cbjwvZGl2PlxuIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBbUNRLENBQUEsSUFBQSxRQUFBLFlBQUEsR0FBSSxJQUFDLEtBQUssR0FBQSxFQUFBLENBQUE7Ozs7QUFHUCxDQUFBLElBQUEsU0FBQSxZQUFBLEdBQUksSUFBQyxJQUFJLEdBQUEsRUFBQSxDQUFBO0FBWlgsQ0FBQSxRQUFBLENBQUEsS0FBQSxHQUFBLFdBQUEsR0FBQSxFQUFBLGFBQUEsR0FBSSxJQUFDLEtBQUssR0FBQSwyQkFBQSxDQUFBLENBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztHQUduQixvQkFhTSxDQUFBLE1BQUEsRUFBQSxJQUFBLEVBQUEsTUFBQSxDQUFBLENBQUE7R0FaTCxvQkFXTSxDQUFBLElBQUEsRUFBQSxJQUFBLENBQUEsQ0FBQTtHQVZMLG9CQUVNLENBQUEsSUFBQSxFQUFBLElBQUEsQ0FBQSxDQUFBO0dBREwsb0JBQWdELENBQUEsSUFBQSxFQUFBLEdBQUEsQ0FBQSxDQUFBOztHQUVqRCxvQkFNTSxDQUFBLElBQUEsRUFBQSxJQUFBLENBQUEsQ0FBQTtHQUxMLG9CQUFxQixDQUFBLElBQUEsRUFBQSxFQUFBLENBQUEsQ0FBQTs7O0dBRXJCLG9CQUVNLENBQUEsSUFBQSxFQUFBLElBQUEsQ0FBQSxDQUFBOzs7O0FBYkEsR0FBQSxJQUFBLEtBQUEsWUFBQSxDQUFBLElBQUEsV0FBQSxNQUFBLFdBQUEsR0FBQSxFQUFBLGFBQUEsR0FBSSxJQUFDLEtBQUssR0FBQSwyQkFBQSxDQUFBLENBQUEsRUFBQTs7OztBQVNYLEdBQUEsSUFBQSxLQUFBLFlBQUEsQ0FBQSxJQUFBLFFBQUEsTUFBQSxRQUFBLFlBQUEsR0FBSSxJQUFDLEtBQUssR0FBQSxFQUFBLENBQUEsRUFBQSxZQUFBLENBQUEsRUFBQSxFQUFBLFFBQUEsQ0FBQSxDQUFBO0FBR1AsR0FBQSxJQUFBLEtBQUEsWUFBQSxDQUFBLElBQUEsU0FBQSxNQUFBLFNBQUEsWUFBQSxHQUFJLElBQUMsSUFBSSxHQUFBLEVBQUEsQ0FBQSxFQUFBLElBQUEsQ0FBQSxTQUFBLEdBQUEsU0FBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFyQ0csZUFBQSxPQUFPLEdBQUcsTUFBTSxFQUFBLEVBQUE7OztBQUcvQixDQUFBLE1BQUEsR0FBRyxTQUFTLElBQUksQ0FBQyxLQUFLLENBQWMsQ0FBQSxVQUFBLEVBQUEsTUFBTSxDQUFDLEVBQUUsQ0FBQSxLQUFBLENBQUEsQ0FBQSxDQUFBOztPQUM3QyxJQUFJLEdBQUEsTUFBUyxHQUFHLENBQUMsSUFBSSxFQUFBLENBQUE7O0tBRXZCLEdBQUcsQ0FBQyxNQUFNLEtBQUssR0FBRyxFQUFBO0FBQ1osRUFBQSxPQUFBLEVBQUEsSUFBSSxFQUFFLElBQUksRUFBQSxDQUFBOztFQUVuQixJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxNQUFNLEVBQUUsSUFBSSxDQUFDLE9BQU8sQ0FBQSxDQUFBOzs7Ozs7O09BTTFCLElBQUksRUFBQSxHQUFBLE9BQUEsQ0FBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzsifQ==
