import { S as SvelteComponentDev, i as init, s as safe_not_equal, d as dispatch_dev, v as validate_slots, y as stores$1, z as validate_store, A as component_subscribe, B as goto, a as space, e as element, t as text, h as head_selector, b as detach_dev, c as claim_space, f as claim_element, g as children, j as claim_text, l as add_location, k as attr_dev, n as insert_hydration_dev, o as append_hydration_dev, C as set_input_value, D as listen_dev, E as prevent_default, p as noop, F as run_all, G as set_store_value, u as set_data_dev } from './client.630baa59.js';

/* src\routes\login.svelte generated by Svelte v3.55.1 */
const file = "src\\routes\\login.svelte";

// (91:28) {#if error}
function create_if_block(ctx) {
	let p;
	let t;

	const block = {
		c: function create() {
			p = element("p");
			t = text(/*error*/ ctx[2]);
			this.h();
		},
		l: function claim(nodes) {
			p = claim_element(nodes, "P", { class: true });
			var p_nodes = children(p);
			t = claim_text(p_nodes, /*error*/ ctx[2]);
			p_nodes.forEach(detach_dev);
			this.h();
		},
		h: function hydrate() {
			attr_dev(p, "class", "error-messages");
			add_location(p, file, 91, 32, 3027);
		},
		m: function mount(target, anchor) {
			insert_hydration_dev(target, p, anchor);
			append_hydration_dev(p, t);
		},
		p: function update(ctx, dirty) {
			if (dirty & /*error*/ 4) set_data_dev(t, /*error*/ ctx[2]);
		},
		d: function destroy(detaching) {
			if (detaching) detach_dev(p);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_if_block.name,
		type: "if",
		source: "(91:28) {#if error}",
		ctx
	});

	return block;
}

function create_fragment(ctx) {
	let t0;
	let div11;
	let div10;
	let div2;
	let div0;
	let h10;
	let t1;
	let t2;
	let div1;
	let p0;
	let t3;
	let t4;
	let div3;
	let t5;
	let div9;
	let div8;
	let div4;
	let h11;
	let t6;
	let t7;
	let form;
	let fieldset0;
	let label0;
	let i0;
	let t8;
	let input0;
	let t9;
	let fieldset1;
	let label1;
	let i1;
	let t10;
	let input1;
	let t11;
	let fieldset2;
	let label2;
	let t12;
	let div5;
	let t13;
	let div6;
	let button;
	let t14;
	let t15;
	let div7;
	let p1;
	let t16;
	let br;
	let t17;
	let a;
	let t18;
	let mounted;
	let dispose;
	let if_block = /*error*/ ctx[2] && create_if_block(ctx);

	const block = {
		c: function create() {
			t0 = space();
			div11 = element("div");
			div10 = element("div");
			div2 = element("div");
			div0 = element("div");
			h10 = element("h1");
			t1 = text("Welcome to ProfitFlow");
			t2 = space();
			div1 = element("div");
			p0 = element("p");
			t3 = text("Lorem imsum dolor sit amet\r\n                    Lorem imsum dolor sit amet\r\n                    Lorem imsum dolor sit amet\r\n                    Lorem imsum dolor sit amet\r\n                    Lorem imsum dolor sit amet\r\n                    Lorem imsum dolor sit amet\r\n                    Lorem imsum dolor sit amet\r\n                    Lorem imsum dolor sit amet");
			t4 = space();
			div3 = element("div");
			t5 = space();
			div9 = element("div");
			div8 = element("div");
			div4 = element("div");
			h11 = element("h1");
			t6 = text("Login");
			t7 = space();
			form = element("form");
			fieldset0 = element("fieldset");
			label0 = element("label");
			i0 = element("i");
			t8 = space();
			input0 = element("input");
			t9 = space();
			fieldset1 = element("fieldset");
			label1 = element("label");
			i1 = element("i");
			t10 = space();
			input1 = element("input");
			t11 = space();
			fieldset2 = element("fieldset");
			label2 = element("label");
			t12 = space();
			div5 = element("div");
			if (if_block) if_block.c();
			t13 = space();
			div6 = element("div");
			button = element("button");
			t14 = text("Sign in");
			t15 = space();
			div7 = element("div");
			p1 = element("p");
			t16 = text("Don't have an account?");
			br = element("br");
			t17 = space();
			a = element("a");
			t18 = text("Create one!");
			this.h();
		},
		l: function claim(nodes) {
			const head_nodes = head_selector('svelte-g6l3m8', document.head);
			head_nodes.forEach(detach_dev);
			t0 = claim_space(nodes);
			div11 = claim_element(nodes, "DIV", { class: true });
			var div11_nodes = children(div11);
			div10 = claim_element(div11_nodes, "DIV", { class: true });
			var div10_nodes = children(div10);
			div2 = claim_element(div10_nodes, "DIV", { class: true });
			var div2_nodes = children(div2);
			div0 = claim_element(div2_nodes, "DIV", { class: true });
			var div0_nodes = children(div0);
			h10 = claim_element(div0_nodes, "H1", {});
			var h10_nodes = children(h10);
			t1 = claim_text(h10_nodes, "Welcome to ProfitFlow");
			h10_nodes.forEach(detach_dev);
			div0_nodes.forEach(detach_dev);
			t2 = claim_space(div2_nodes);
			div1 = claim_element(div2_nodes, "DIV", { class: true });
			var div1_nodes = children(div1);
			p0 = claim_element(div1_nodes, "P", {});
			var p0_nodes = children(p0);
			t3 = claim_text(p0_nodes, "Lorem imsum dolor sit amet\r\n                    Lorem imsum dolor sit amet\r\n                    Lorem imsum dolor sit amet\r\n                    Lorem imsum dolor sit amet\r\n                    Lorem imsum dolor sit amet\r\n                    Lorem imsum dolor sit amet\r\n                    Lorem imsum dolor sit amet\r\n                    Lorem imsum dolor sit amet");
			p0_nodes.forEach(detach_dev);
			div1_nodes.forEach(detach_dev);
			div2_nodes.forEach(detach_dev);
			t4 = claim_space(div10_nodes);
			div3 = claim_element(div10_nodes, "DIV", { class: true });
			children(div3).forEach(detach_dev);
			t5 = claim_space(div10_nodes);
			div9 = claim_element(div10_nodes, "DIV", { class: true });
			var div9_nodes = children(div9);
			div8 = claim_element(div9_nodes, "DIV", { class: true });
			var div8_nodes = children(div8);
			div4 = claim_element(div8_nodes, "DIV", { class: true });
			var div4_nodes = children(div4);
			h11 = claim_element(div4_nodes, "H1", { class: true });
			var h11_nodes = children(h11);
			t6 = claim_text(h11_nodes, "Login");
			h11_nodes.forEach(detach_dev);
			div4_nodes.forEach(detach_dev);
			t7 = claim_space(div8_nodes);
			form = claim_element(div8_nodes, "FORM", { method: true });
			var form_nodes = children(form);
			fieldset0 = claim_element(form_nodes, "FIELDSET", { class: true });
			var fieldset0_nodes = children(fieldset0);
			label0 = claim_element(fieldset0_nodes, "LABEL", { class: true });
			var label0_nodes = children(label0);
			i0 = claim_element(label0_nodes, "I", { class: true });
			children(i0).forEach(detach_dev);
			label0_nodes.forEach(detach_dev);
			t8 = claim_space(fieldset0_nodes);

			input0 = claim_element(fieldset0_nodes, "INPUT", {
				class: true,
				name: true,
				type: true,
				placeholder: true
			});

			fieldset0_nodes.forEach(detach_dev);
			t9 = claim_space(form_nodes);
			fieldset1 = claim_element(form_nodes, "FIELDSET", { class: true });
			var fieldset1_nodes = children(fieldset1);
			label1 = claim_element(fieldset1_nodes, "LABEL", { class: true });
			var label1_nodes = children(label1);
			i1 = claim_element(label1_nodes, "I", { class: true });
			children(i1).forEach(detach_dev);
			label1_nodes.forEach(detach_dev);
			t10 = claim_space(fieldset1_nodes);

			input1 = claim_element(fieldset1_nodes, "INPUT", {
				class: true,
				name: true,
				type: true,
				placeholder: true
			});

			fieldset1_nodes.forEach(detach_dev);
			t11 = claim_space(form_nodes);
			fieldset2 = claim_element(form_nodes, "FIELDSET", { class: true });
			var fieldset2_nodes = children(fieldset2);
			label2 = claim_element(fieldset2_nodes, "LABEL", { class: true });
			children(label2).forEach(detach_dev);
			t12 = claim_space(fieldset2_nodes);
			div5 = claim_element(fieldset2_nodes, "DIV", {});
			var div5_nodes = children(div5);
			if (if_block) if_block.l(div5_nodes);
			div5_nodes.forEach(detach_dev);
			fieldset2_nodes.forEach(detach_dev);
			t13 = claim_space(form_nodes);
			div6 = claim_element(form_nodes, "DIV", { class: true });
			var div6_nodes = children(div6);
			button = claim_element(div6_nodes, "BUTTON", { class: true, type: true });
			var button_nodes = children(button);
			t14 = claim_text(button_nodes, "Sign in");
			button_nodes.forEach(detach_dev);
			div6_nodes.forEach(detach_dev);
			t15 = claim_space(form_nodes);
			div7 = claim_element(form_nodes, "DIV", {});
			var div7_nodes = children(div7);
			p1 = claim_element(div7_nodes, "P", { class: true });
			var p1_nodes = children(p1);
			t16 = claim_text(p1_nodes, "Don't have an account?");
			br = claim_element(p1_nodes, "BR", {});
			t17 = claim_space(p1_nodes);
			a = claim_element(p1_nodes, "A", { href: true });
			var a_nodes = children(a);
			t18 = claim_text(a_nodes, "Create one!");
			a_nodes.forEach(detach_dev);
			p1_nodes.forEach(detach_dev);
			div7_nodes.forEach(detach_dev);
			form_nodes.forEach(detach_dev);
			div8_nodes.forEach(detach_dev);
			div9_nodes.forEach(detach_dev);
			div10_nodes.forEach(detach_dev);
			div11_nodes.forEach(detach_dev);
			this.h();
		},
		h: function hydrate() {
			document.title = "Login ??? ProfitFlow";
			add_location(h10, file, 37, 16, 939);
			attr_dev(div0, "class", "svelte-s3t5nn");
			add_location(div0, file, 36, 12, 916);
			add_location(p0, file, 40, 16, 1026);
			attr_dev(div1, "class", "svelte-s3t5nn");
			add_location(div1, file, 39, 12, 1003);
			attr_dev(div2, "class", "col-xs-7 svelte-s3t5nn");
			add_location(div2, file, 35, 8, 880);
			attr_dev(div3, "class", "spliter svelte-s3t5nn");
			add_location(div3, file, 52, 8, 1441);
			attr_dev(h11, "class", "text-xs-center");
			add_location(h11, file, 57, 20, 1576);
			attr_dev(div4, "class", " svelte-s3t5nn");
			add_location(div4, file, 56, 16, 1540);
			attr_dev(i0, "class", "far fa-user-circle");
			add_location(i0, file, 63, 28, 1832);
			attr_dev(label0, "class", "svelte-s3t5nn");
			add_location(label0, file, 62, 24, 1795);
			attr_dev(input0, "class", "form-control form-control-lg svelte-s3t5nn");
			attr_dev(input0, "name", "email");
			attr_dev(input0, "type", "email");
			input0.required = true;
			attr_dev(input0, "placeholder", "Email");
			add_location(input0, file, 65, 24, 1926);
			attr_dev(fieldset0, "class", "form-group svelte-s3t5nn");
			add_location(fieldset0, file, 61, 20, 1740);
			attr_dev(i1, "class", "fas fa-lock");
			add_location(i1, file, 75, 28, 2383);
			attr_dev(label1, "class", "svelte-s3t5nn");
			add_location(label1, file, 74, 24, 2346);
			attr_dev(input1, "class", "form-control form-control-lg svelte-s3t5nn");
			attr_dev(input1, "name", "password");
			attr_dev(input1, "type", "password");
			input1.required = true;
			attr_dev(input1, "placeholder", "Password");
			add_location(input1, file, 77, 24, 2470);
			attr_dev(fieldset1, "class", "form-group svelte-s3t5nn");
			add_location(fieldset1, file, 73, 20, 2291);
			attr_dev(label2, "class", "svelte-s3t5nn");
			add_location(label2, file, 87, 24, 2904);
			add_location(div5, file, 89, 24, 2947);
			attr_dev(fieldset2, "class", "form-group svelte-s3t5nn");
			add_location(fieldset2, file, 86, 20, 2849);
			attr_dev(button, "class", "btn btn-lg btn-primary pull-xs-right svelte-s3t5nn");
			attr_dev(button, "type", "submit");
			add_location(button, file, 98, 24, 3239);
			attr_dev(div6, "class", "btn-group svelte-s3t5nn");
			add_location(div6, file, 97, 20, 3190);
			add_location(br, file, 103, 50, 3483);
			attr_dev(a, "href", "/register");
			add_location(a, file, 104, 28, 3517);
			attr_dev(p1, "class", "text-xs-center");
			add_location(p1, file, 102, 24, 3405);
			add_location(div7, file, 101, 20, 3374);
			attr_dev(form, "method", "post");
			add_location(form, file, 60, 16, 1657);
			attr_dev(div8, "class", " svelte-s3t5nn");
			add_location(div8, file, 55, 12, 1508);
			attr_dev(div9, "class", " svelte-s3t5nn");
			add_location(div9, file, 54, 8, 1480);
			attr_dev(div10, "class", "row svelte-s3t5nn");
			add_location(div10, file, 34, 4, 853);
			attr_dev(div11, "class", "auth-page container-fluid svelte-s3t5nn");
			add_location(div11, file, 33, 0, 808);
		},
		m: function mount(target, anchor) {
			insert_hydration_dev(target, t0, anchor);
			insert_hydration_dev(target, div11, anchor);
			append_hydration_dev(div11, div10);
			append_hydration_dev(div10, div2);
			append_hydration_dev(div2, div0);
			append_hydration_dev(div0, h10);
			append_hydration_dev(h10, t1);
			append_hydration_dev(div2, t2);
			append_hydration_dev(div2, div1);
			append_hydration_dev(div1, p0);
			append_hydration_dev(p0, t3);
			append_hydration_dev(div10, t4);
			append_hydration_dev(div10, div3);
			append_hydration_dev(div10, t5);
			append_hydration_dev(div10, div9);
			append_hydration_dev(div9, div8);
			append_hydration_dev(div8, div4);
			append_hydration_dev(div4, h11);
			append_hydration_dev(h11, t6);
			append_hydration_dev(div8, t7);
			append_hydration_dev(div8, form);
			append_hydration_dev(form, fieldset0);
			append_hydration_dev(fieldset0, label0);
			append_hydration_dev(label0, i0);
			append_hydration_dev(fieldset0, t8);
			append_hydration_dev(fieldset0, input0);
			set_input_value(input0, /*email*/ ctx[1]);
			append_hydration_dev(form, t9);
			append_hydration_dev(form, fieldset1);
			append_hydration_dev(fieldset1, label1);
			append_hydration_dev(label1, i1);
			append_hydration_dev(fieldset1, t10);
			append_hydration_dev(fieldset1, input1);
			set_input_value(input1, /*password*/ ctx[0]);
			append_hydration_dev(form, t11);
			append_hydration_dev(form, fieldset2);
			append_hydration_dev(fieldset2, label2);
			append_hydration_dev(fieldset2, t12);
			append_hydration_dev(fieldset2, div5);
			if (if_block) if_block.m(div5, null);
			append_hydration_dev(form, t13);
			append_hydration_dev(form, div6);
			append_hydration_dev(div6, button);
			append_hydration_dev(button, t14);
			append_hydration_dev(form, t15);
			append_hydration_dev(form, div7);
			append_hydration_dev(div7, p1);
			append_hydration_dev(p1, t16);
			append_hydration_dev(p1, br);
			append_hydration_dev(p1, t17);
			append_hydration_dev(p1, a);
			append_hydration_dev(a, t18);

			if (!mounted) {
				dispose = [
					listen_dev(input0, "input", /*input0_input_handler*/ ctx[5]),
					listen_dev(input1, "input", /*input1_input_handler*/ ctx[6]),
					listen_dev(form, "submit", prevent_default(/*handleLogin*/ ctx[4]), false, true, false)
				];

				mounted = true;
			}
		},
		p: function update(ctx, [dirty]) {
			if (dirty & /*email*/ 2 && input0.value !== /*email*/ ctx[1]) {
				set_input_value(input0, /*email*/ ctx[1]);
			}

			if (dirty & /*password*/ 1 && input1.value !== /*password*/ ctx[0]) {
				set_input_value(input1, /*password*/ ctx[0]);
			}

			if (/*error*/ ctx[2]) {
				if (if_block) {
					if_block.p(ctx, dirty);
				} else {
					if_block = create_if_block(ctx);
					if_block.c();
					if_block.m(div5, null);
				}
			} else if (if_block) {
				if_block.d(1);
				if_block = null;
			}
		},
		i: noop,
		o: noop,
		d: function destroy(detaching) {
			if (detaching) detach_dev(t0);
			if (detaching) detach_dev(div11);
			if (if_block) if_block.d();
			mounted = false;
			run_all(dispose);
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

function instance($$self, $$props, $$invalidate) {
	let $session;
	let { $$slots: slots = {}, $$scope } = $$props;
	validate_slots('Login', slots, []);
	const { session } = stores$1();
	validate_store(session, 'session');
	component_subscribe($$self, session, value => $$invalidate(7, $session = value));
	let password = "";
	let email = "";
	let error;

	const handleLogin = async () => {
		const response = await fetch("/login", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
				Accept: "application/json"
			},
			body: JSON.stringify({ email, password })
		});

		const parsed = await response.json();

		if (parsed.error) {
			$$invalidate(2, error = parsed.error);
		} else {
			set_store_value(session, $session.token = parsed.token, $session);
			location.href = '/converter';
		}
	};

	const writable_props = [];

	Object.keys($$props).forEach(key => {
		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== '$$' && key !== 'slot') console.warn(`<Login> was created with unknown prop '${key}'`);
	});

	function input0_input_handler() {
		email = this.value;
		$$invalidate(1, email);
	}

	function input1_input_handler() {
		password = this.value;
		$$invalidate(0, password);
	}

	$$self.$capture_state = () => ({
		goto,
		stores: stores$1,
		session,
		password,
		email,
		error,
		handleLogin,
		$session
	});

	$$self.$inject_state = $$props => {
		if ('password' in $$props) $$invalidate(0, password = $$props.password);
		if ('email' in $$props) $$invalidate(1, email = $$props.email);
		if ('error' in $$props) $$invalidate(2, error = $$props.error);
	};

	if ($$props && "$$inject" in $$props) {
		$$self.$inject_state($$props.$$inject);
	}

	return [
		password,
		email,
		error,
		session,
		handleLogin,
		input0_input_handler,
		input1_input_handler
	];
}

class Login extends SvelteComponentDev {
	constructor(options) {
		super(options);
		init(this, options, instance, create_fragment, safe_not_equal, {});

		dispatch_dev("SvelteRegisterComponent", {
			component: this,
			tagName: "Login",
			options,
			id: create_fragment.name
		});
	}
}

export { Login as default };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9naW4uNWMyNDM4M2YuanMiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9yb3V0ZXMvbG9naW4uc3ZlbHRlIl0sInNvdXJjZXNDb250ZW50IjpbIjxzY3JpcHQ+XHJcbiAgICBpbXBvcnQgeyBnb3RvLCBzdG9yZXMgfSBmcm9tIFwiQHNhcHBlci9hcHBcIjtcclxuICAgIGNvbnN0IHsgc2Vzc2lvbiB9ID0gc3RvcmVzKCk7XHJcblxyXG4gICAgbGV0IHBhc3N3b3JkID0gXCJcIjtcclxuICAgIGxldCBlbWFpbCA9IFwiXCI7XHJcbiAgICBsZXQgZXJyb3I7XHJcblxyXG4gICAgY29uc3QgaGFuZGxlTG9naW4gPSBhc3luYyAoKSA9PiB7XHJcbiAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChcIi9sb2dpblwiLCB7XHJcbiAgICAgICAgICAgIG1ldGhvZDogXCJQT1NUXCIsXHJcbiAgICAgICAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgICAgICAgIFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiLFxyXG4gICAgICAgICAgICAgICAgQWNjZXB0OiBcImFwcGxpY2F0aW9uL2pzb25cIixcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoeyBlbWFpbCwgcGFzc3dvcmQgfSksXHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIGNvbnN0IHBhcnNlZCA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcclxuXHJcbiAgICAgICAgaWYgKHBhcnNlZC5lcnJvcikge1xyXG4gICAgICAgICAgICBlcnJvciA9IHBhcnNlZC5lcnJvcjtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAkc2Vzc2lvbi50b2tlbiA9IHBhcnNlZC50b2tlbjtcclxuICAgICAgICAgICAgbG9jYXRpb24uaHJlZiA9ICcvY29udmVydGVyJztcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG48L3NjcmlwdD5cclxuXHJcbjxzdmVsdGU6aGVhZD5cclxuICAgIDx0aXRsZT5Mb2dpbiDigKIgUHJvZml0RmxvdzwvdGl0bGU+XHJcbjwvc3ZlbHRlOmhlYWQ+XHJcblxyXG48ZGl2IGNsYXNzPVwiYXV0aC1wYWdlIGNvbnRhaW5lci1mbHVpZFwiPlxyXG4gICAgPGRpdiBjbGFzcz1cInJvd1wiPlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJjb2wteHMtN1wiPlxyXG4gICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgPGgxPldlbGNvbWUgdG8gUHJvZml0RmxvdzwvaDE+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgPHA+TG9yZW0gaW1zdW0gZG9sb3Igc2l0IGFtZXRcclxuICAgICAgICAgICAgICAgICAgICBMb3JlbSBpbXN1bSBkb2xvciBzaXQgYW1ldFxyXG4gICAgICAgICAgICAgICAgICAgIExvcmVtIGltc3VtIGRvbG9yIHNpdCBhbWV0XHJcbiAgICAgICAgICAgICAgICAgICAgTG9yZW0gaW1zdW0gZG9sb3Igc2l0IGFtZXRcclxuICAgICAgICAgICAgICAgICAgICBMb3JlbSBpbXN1bSBkb2xvciBzaXQgYW1ldFxyXG4gICAgICAgICAgICAgICAgICAgIExvcmVtIGltc3VtIGRvbG9yIHNpdCBhbWV0XHJcbiAgICAgICAgICAgICAgICAgICAgTG9yZW0gaW1zdW0gZG9sb3Igc2l0IGFtZXRcclxuICAgICAgICAgICAgICAgICAgICBMb3JlbSBpbXN1bSBkb2xvciBzaXQgYW1ldFxyXG5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJzcGxpdGVyXCI+PC9kaXY+XHJcblxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cIlwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIlwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxoMSBjbGFzcz1cInRleHQteHMtY2VudGVyXCI+TG9naW48L2gxPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgPGZvcm0gb246c3VibWl0fHByZXZlbnREZWZhdWx0PVwie2hhbmRsZUxvZ2lufVwiIG1ldGhvZD1cInBvc3RcIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZmllbGRzZXQgY2xhc3M9XCJmb3JtLWdyb3VwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzPVwiZmFyIGZhLXVzZXItY2lyY2xlXCI+PC9pPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cImZvcm0tY29udHJvbCBmb3JtLWNvbnRyb2wtbGdcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJlbWFpbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cImVtYWlsXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXF1aXJlZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiRW1haWxcIiBiaW5kOnZhbHVlPXtlbWFpbH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICA8L2ZpZWxkc2V0PlxyXG4gICAgICAgICAgICAgICAgICAgIDxmaWVsZHNldCBjbGFzcz1cImZvcm0tZ3JvdXBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3M9XCJmYXMgZmEtbG9ja1wiPjwvaT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJmb3JtLWNvbnRyb2wgZm9ybS1jb250cm9sLWxnXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwicGFzc3dvcmRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJwYXNzd29yZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVxdWlyZWRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIlBhc3N3b3JkXCIgYmluZDp2YWx1ZT17cGFzc3dvcmR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9maWVsZHNldD5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgPGZpZWxkc2V0IGNsYXNzPVwiZm9ybS1ncm91cFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWw+PC9sYWJlbD5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7I2lmIGVycm9yfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzPVwiZXJyb3ItbWVzc2FnZXNcIj57ZXJyb3J9PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgey9pZn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIDwvZmllbGRzZXQ+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJidG4tZ3JvdXBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cImJ0biBidG4tbGcgYnRuLXByaW1hcnkgcHVsbC14cy1yaWdodFwiIHR5cGU9XCJzdWJtaXRcIj5TaWduIGluPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzPVwidGV4dC14cy1jZW50ZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIERvbid0IGhhdmUgYW4gYWNjb3VudD88YnI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiL3JlZ2lzdGVyXCI+Q3JlYXRlIG9uZSE8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICA8L2Zvcm0+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcblxyXG48L2Rpdj5cclxuXHJcbjxzdHlsZT5cclxuICAgIGRpdi5hdXRoLXBhZ2U+ZGl2LnJvdz5kaXYuc3BsaXRlcntcclxuICAgICAgICB3aWR0aDogMXB4O1xyXG4gICAgICAgIHBhZGRpbmc6IDA7XHJcbiAgICAgICAgYmFja2dyb3VuZDogIzMzMztcclxuICAgIH1cclxuICAgIGRpdi5hdXRoLXBhZ2U+ZGl2LnJvdz5kaXZ7cGFkZGluZzogNDBweCAxMDBweDt9XHJcbiAgICBkaXYuYXV0aC1wYWdlPmRpdi5yb3c+ZGl2Om50aC1jaGlsZCgxKT5kaXY6bnRoLWNoaWxkKDEpe21hcmdpbi1ib3R0b206IDQwcHg7fVxyXG4gICAgZGl2LmF1dGgtcGFnZT5kaXYucm93PmRpdjpudGgtY2hpbGQoMSk+ZGl2Om50aC1jaGlsZCgyKXtmb250LXNpemU6IDIwcHg7fVxyXG4gICAgZGl2LmF1dGgtcGFnZT5kaXYucm93PmRpdjpudGgtY2hpbGQoMyk+ZGl2PmRpdjpudGgtY2hpbGQoMSl7bWFyZ2luLWJvdHRvbTogNDBweH1cclxuICAgIGRpdi5hdXRoLXBhZ2U+ZGl2LnJvdz5kaXY6bnRoLWNoaWxkKDMpe2ZsZXgtZ3JvdzogMTt9XHJcbiAgICBkaXYuYXV0aC1wYWdlPmRpdi5yb3c+ZGl2Om50aC1jaGlsZCgzKT5kaXY+ZGl2Om50aC1jaGlsZCgxKXt9XHJcbiAgICBkaXYuYXV0aC1wYWdlPmRpdi5yb3c+ZGl2Om50aC1jaGlsZCgzKSBkaXYuYnRuLWdyb3Vwe1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogNDBweDtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG4gICAgfVxyXG4gICAgZGl2LmF1dGgtcGFnZT5kaXYucm93PmRpdjpudGgtY2hpbGQoMykgZGl2LmJ0bi1ncm91cD5idXR0b257XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzMzMztcclxuICAgICAgICBib3JkZXItY29sb3I6ICMzMzM7XHJcbiAgICAgICAgd2lkdGg6IDE1MHB4O1xyXG4gICAgfVxyXG5cclxuICAgIGRpdi5hdXRoLXBhZ2U+ZGl2LnJvdz5kaXY6bnRoLWNoaWxkKDMpIGZvcm0gZmllbGRzZXR7ZGlzcGxheTogZmxleDt9XHJcbiAgICBkaXYuYXV0aC1wYWdlPmRpdi5yb3c+ZGl2Om50aC1jaGlsZCgzKSBmb3JtIGZpZWxkc2V0PmxhYmVse1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDA7XHJcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGZvbnQtc2l6ZTogNDBweDtcclxuICAgICAgICB3aWR0aDogODBweDtcclxuICAgIH1cclxuICAgIGRpdi5hdXRoLXBhZ2U+ZGl2LnJvdz5kaXY6bnRoLWNoaWxkKDMpIGZvcm0gZmllbGRzZXQ+aW5wdXR7fVxyXG48L3N0eWxlPlxyXG4iXSwibmFtZXMiOlsic3RvcmVzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O3NCQTJGMkQsR0FBSyxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUE7Ozs7OztxQ0FBTCxHQUFLLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQTs7Ozs7Ozs7O0dBQWhDLG9CQUFxQyxDQUFBLE1BQUEsRUFBQSxDQUFBLEVBQUEsTUFBQSxDQUFBLENBQUE7Ozs7c0RBQVYsR0FBSyxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7MEJBRC9CLEdBQUssQ0FBQSxDQUFBLENBQUEsSUFBQSxlQUFBLENBQUEsR0FBQSxDQUFBLENBQUE7Ozs7Ozs7Ozs7YUFyRGxCLHVCQUFxQixDQUFBLENBQUE7Ozs7YUFHdEIsMFhBU1AsQ0FBQSxDQUFBOzs7Ozs7OzthQVFtQyxPQUFLLENBQUEsQ0FBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Y0F5Q3VDLFNBQU8sQ0FBQSxDQUFBOzs7O2NBSWhELHdCQUNBLENBQUEsQ0FBQTs7OztjQUNGLGFBQVcsQ0FBQSxDQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs4QkFuRXZDLHVCQUFxQixDQUFBLENBQUE7Ozs7Ozs7OzZCQUd0QiwwWEFTUCxDQUFBLENBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7OEJBUW1DLE9BQUssQ0FBQSxDQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7a0NBeUN1QyxTQUFPLENBQUEsQ0FBQTs7Ozs7Ozs7OEJBSWhELHdCQUNBLENBQUEsQ0FBQTs7Ozs7NkJBQ0YsYUFBVyxDQUFBLENBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0dBdkUzRCxvQkFnRk0sQ0FBQSxNQUFBLEVB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
