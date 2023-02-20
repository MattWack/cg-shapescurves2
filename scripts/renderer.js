class Renderer {
    // canvas:              object ({id: __, width: __, height: __})
    // num_curve_sections:  int
    constructor(canvas, num_curve_sections, show_points_flag) {
        this.canvas = document.getElementById(canvas.id);
        this.canvas.width = canvas.width;
        this.canvas.height = canvas.height;
        this.ctx = this.canvas.getContext('2d', {willReadFrequently: true});
        this.slide_idx = 0;
        this.num_curve_sections = num_curve_sections;
        this.show_points = show_points_flag;
    }

    // n:  int
    setNumCurveSections(n) {
        this.num_curve_sections = n;
        this.drawSlide(this.slide_idx);
    }

    // flag:  bool
    showPoints(flag) {
        this.show_points = flag;
        this.drawSlide(this.slide_idx);
    }
    
    // slide_idx:  int
    drawSlide(slide_idx) {
        this.slide_idx = slide_idx;
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        let framebuffer = this.ctx.getImageData(0, 0, this.canvas.width, this.canvas.height);

        switch (this.slide_idx) {
            case 0:
                this.drawSlide0(framebuffer);
                break;
            case 1:
                this.drawSlide1(framebuffer);
                break;
            case 2:
                this.drawSlide2(framebuffer);
                break;
            case 3:
                this.drawSlide3(framebuffer);
                break;
        }

        this.ctx.putImageData(framebuffer, 0, 0);
    }

    // framebuffer:  canvas ctx image data
    drawSlide0(framebuffer) {
        let point_a = {x:  100, y:  125};
        let point_b = {x: 125, y: 225};
        let point_c = {x: 325, y: 225};
        let point_d = {x: 300, y: 125};
        let color = [255,160,122, 255];
        
        this.drawBezierCurve(point_a, point_b, point_c, point_d, this.num_curve_sections, color, framebuffer)


        point_a = {x:  100, y:  500};
        point_b = {x: 25, y: 400};
        point_c = {x: 500, y: 300};
        point_d = {x: 400, y: 350};
        this.drawBezierCurve(point_a, point_b, point_c, point_d, this.num_curve_sections, color, framebuffer)
        // TODO: draw at least 2 Bezier curves
        //   - variable `this.num_curve_sections` should be used for `num_edges`
        //   - variable `this.show_points` should be used to determine whether or not to render vertices
        
        // Following line is example of drawing a single line
        // (this should be removed after you implement the curve)
    }

    // framebuffer:  canvas ctx image data
    drawSlide1(framebuffer) {
        let center = {x: 300, y:300};
        let radius = 100;
        let color = [255,160,122, 255];
        this.drawCircle(center, radius, this.num_curve_sections, color, framebuffer);


        center = {x:400, y:400};
        radius = 150;
        this.drawCircle(center, radius, this.num_curve_sections, color, framebuffer);
        // TODO: draw at least 2 circles
        //   - variable `this.num_curve_sections` should be used for `num_edges`
        //   - variable `this.show_points` should be used to determine whether or not to render vertices
        
        
    }

    // framebuffer:  canvas ctx image data
    drawSlide2(framebuffer) {
        // TODO: draw at least 2 convex polygons (each with a different number of vertices >= 5)
        //   - variable `this.show_points` should be used to determine whether or not to render vertices
        
        
        // Following lines are example of drawing a single triangle
        // (this should be removed after you implement the polygon)
        let color = [0, 128, 128, 255];
        let p0 = {x:  300, y:  300};
        let p1 = {x: 500, y: 350};
        let p2 = {x: 450, y: 400};
        let p3 = {x: 400, y: 400};
        let p4 = {x: 350, y: 350};
        let p5 = {x: 300, y:325};
        let vs = [p0,p1,p2,p3,p4,p5];
        this.drawConvexPolygon(vs, color, framebuffer);
        p0 = {x:  250, y:  250};
        p1 = {x: 250, y: 200};
        p2 = {x: 300, y: 150};
        p3 = {x: 175, y: 100};
        p4 = {x: 100, y: 50};
        p5 = {x: 75, y: 100};
        vs = [p0,p1,p2,p3,p4,p5];
        this.drawConvexPolygon(vs, color, framebuffer);
       // this.drawTriangle(point_a, point_c, point_b,, framebuffer);
    }

    // framebuffer:  canvas ctx image data
    drawSlide3(framebuffer) {
        // TODO: draw your name!
        //   - variable `this.num_curve_sections` should be used for `num_edges`
        //   - variable `this.show_points` should be used to determine whether or not to render vertices
        let color = [0, 128, 128, 255];

        let p0 = {x: 100, y: 250};
        let p1 = {x: 125, y: 350};
        let p2 = {x: 150, y: 250}; 
        let p3 = {x: 175, y: 350};
        let p4 = {x: 200, y: 250};

        this.drawLine(p0, p1, color, framebuffer);
        this.drawLine(p1, p2, color, framebuffer);
        this.drawLine(p2, p3, color, framebuffer);
        this.drawLine(p3, p4, color, framebuffer);

        this.drawCircle({x: 260, y: 285}, 35, this.num_curve_sections, color, framebuffer);

        p0 = {x: 260, y: 320};
        p1 = {x: 290, y: 320};
        p2 = {x: 340, y: 275};
        p3 = {x: 320, y: 250};
        
        this.drawBezierCurve(p0, p1, p2, p3, this.num_curve_sections, color, framebuffer);


        let tVerticalVertexs = [{x: 365, y: 250}, {x: 365, y: 350}, {x: 360, y: 350}, {x: 360, y: 250}];
        let tHorizontalVertexs = [{x: 380, y: 325}, {x: 380, y: 330}, {x: 345, y: 330}, {x: 345, y: 325}];
        this.drawConvexPolygon(tVerticalVertexs, color, framebuffer);
        this.drawConvexPolygon(tHorizontalVertexs, color, framebuffer);

        tVerticalVertexs = [{x: 405, y: 250}, {x: 405, y: 350}, {x: 400, y: 350}, {x: 400, y: 250}];
        tHorizontalVertexs = [{x: 420, y: 325}, {x: 420, y: 330}, {x: 385, y: 330}, {x: 385, y: 325}];
        this.drawConvexPolygon(tVerticalVertexs, color, framebuffer);
        this.drawConvexPolygon(tHorizontalVertexs, color, framebuffer);
    }

    // p0:           object {x: __, y: __}
    // p1:           object {x: __, y: __}
    // p2:           object {x: __, y: __}
    // p3:           object {x: __, y: __}
    // num_edges:    int
    // color:        array of int [R, G, B, A]
    // framebuffer:  canvas ctx image data
    drawBezierCurve(p0, p1, p2, p3, num_edges, color, framebuffer) {
        // TODO: draw a sequence of straight lines to approximate a Bezier curve
        let p_i = p0;
        for(let i = 1; i <= num_edges; i++){
            if (this.show_points && i != num_edges){
                this.drawVertex(p_i, color, framebuffer);
            }
            let t = i/num_edges;
            let x_next = parseInt((1-t)**3 *p0.x + 3*(1-t)**2 * t * p1.x + 3*(1-t) *t**2 * p2.x + t**3 * p3.x);
            let y_next = parseInt((1-t)**3 *p0.y + 3*(1-t)**2 * t * p1.y + 3*(1-t) *t**2 * p2.y + t**3 * p3.y);
            let p_next = {x: x_next, y: y_next};
            this.drawLine(p_i, p_next, color, framebuffer);
            p_i = p_next;
        }
        if (this.show_points){
            color = [0, 0, 255, 255];
            this.drawVertex(p0, color, framebuffer);
            this.drawVertex(p1, color, framebuffer);
            this.drawVertex(p2, color, framebuffer);
            this.drawVertex(p3, color, framebuffer);
            this.drawLine({x: p0.x, y: p0.y - 4}, {x: p0.x, y: p0.y + 4}, color, framebuffer);
            this.drawLine({x: p1.x, y: p1.y - 4}, {x: p1.x, y: p1.y + 4}, color, framebuffer);
            this.drawLine({x: p2.x, y: p2.y - 4}, {x: p2.x, y: p2.y + 4}, color, framebuffer);
            this.drawLine({x: p3.x, y: p3.y - 4}, {x: p3.x, y: p3.y + 4}, color, framebuffer);
        }

        
    }

    // center:       object {x: __, y: __}
    // radius:       int
    // num_edges:    int
    // color:        array of int [R, G, B, A]
    // framebuffer:  canvas ctx image data
    drawCircle(center, radius, num_edges, color, framebuffer) {
        // TODO: draw a sequence of straight lines to approximate a circle
        let p_old = {x: center.x + radius, y: center.y};
        for (let i = 1; i <= num_edges; i++){
            let theta = (i*2*Math.PI)/num_edges;
            
            let x_new = parseInt(center.x + radius*Math.cos(theta));
            let y_new = parseInt(center.y + radius*Math.sin(theta));
            let p_new = {x: x_new, y: y_new};
            this.drawLine(p_old, p_new, color, framebuffer);
            if (this.show_points){
                this.drawVertex(p_old, color, framebuffer);
            }
            p_old = p_new;
        }
        
        
    }
    
    // vertex_list:  array of object [{x: __, y: __}, {x: __, y: __}, ..., {x: __, y: __}]
    // color:        array of int [R, G, B, A]
    // framebuffer:  canvas ctx image data
    drawConvexPolygon(vertex_list, color, framebuffer) {
        // TODO: draw a sequence of triangles to form a convex polygon
        if (this.show_points){
            vertex_list.forEach(v => {
                this.drawVertex(v, color, framebuffer); 
            });
        }
        let num_triangles = vertex_list.length-2;
        let p_source = vertex_list[0];
        for (let i = 1; i <= num_triangles; i++){
            let p1 = vertex_list[i];
            let p2 = vertex_list[i+1];
            this.drawTriangle(p_source, p1, p2, color, framebuffer);

        }
        
    }
    
    // v:            object {x: __, y: __}
    // color:        array of int [R, G, B, A]
    // framebuffer:  canvas ctx image data
    drawVertex(v, color, framebuffer) {
        let p0 = {x: v.x - 4, y: v.y + 4};
        let p1 = {x: v.x + 4, y: v.y - 4};
        let p2 = {x: v.x - 4, y: v.y - 4};
        let p3 = {x: v.x + 4, y: v.y + 4};

        this.drawLine(p0, p1, color, framebuffer);
        this.drawLine(p2, p3, color, framebuffer);


        // TODO: draw some symbol (e.g. small rectangle, two lines forming an X, ...) centered at position `v`
        
        
    }
    
    /***************************************************************
     ***       Basic Line and Triangle Drawing Routines          ***
     ***       (code provided from in-class activities)          ***
     ***************************************************************/
    pixelIndex(x, y, framebuffer) {
	    return 4 * y * framebuffer.width + 4 * x;
    }
    
    setFramebufferColor(framebuffer, px, color) {
	    framebuffer.data[px + 0] = color[0];
	    framebuffer.data[px + 1] = color[1];
	    framebuffer.data[px + 2] = color[2];
	    framebuffer.data[px + 3] = color[3];
    }
    
    swapPoints(a, b) {
        let tmp = {x: a.x, y: a.y};
        a.x = b.x;
        a.y = b.y;
        b.x = tmp.x;
        b.y = tmp.y;
    }

    drawLine(p0, p1, color, framebuffer) {
        if (Math.abs(p1.y - p0.y) <= Math.abs(p1.x - p0.x)) { // |m| <= 1
            if (p0.x < p1.x) {
                this.drawLineLow(p0.x, p0.y, p1.x, p1.y, color, framebuffer);
            }
            else {
                this.drawLineLow(p1.x, p1.y, p0.x, p0.y, color, framebuffer);
            }
        }
        else {                                        // |m| > 1
            if (p0.y < p1.y) {
                this.drawLineHigh(p0.x, p0.y, p1.x, p1.y, color, framebuffer);
            }
            else {
                this.drawLineHigh(p1.x, p1.y, p0.x, p0.y, color, framebuffer);
            }
        }
    }

    drawLineLow(x0, y0, x1, y1, color, framebuffer) {
        let A = y1 - y0;
        let B = x0 - x1;
        let iy = 1;
        if (A < 0) {
            iy = -1;
            A *= -1;
        }
        let D = 2 * A + B;
        let x = x0;
        let y = y0;
        let px;
        while (x <= x1)
        {
            px = this.pixelIndex(x, y, framebuffer);
            this.setFramebufferColor(framebuffer, px, color);
            x += 1;
            if (D <= 0)
            {
                D += 2 * A;
            }
            else
            {
                D += 2 * A + 2 * B;
                y += iy;
            }
        }
    }

    drawLineHigh(x0, y0, x1, y1, color, framebuffer) {
        let A = x1 - x0;
        let B = y0 - y1;
        let ix = 1;
        if (A < 0) {
            ix = -1;
            A *= -1;
        }
        let D = 2 * A + B;
        let x = x0;
        let y = y0;
        let px;
        while (y <= y1)
        {
            px = this.pixelIndex(x, y, framebuffer);
            this.setFramebufferColor(framebuffer, px, color);
            y += 1;
            if (D <= 0)
            {
                D += 2 * A;
            }
            else
            {
                D += 2 * A + 2 * B;
                x += ix;
            }
        }
    }
    
    drawTriangle(p0, p1, p2, color, framebuffer) {
        // Sort points in ascending y order
        if (p1.y < p0.y) this.swapPoints(p0, p1);
        if (p2.y < p0.y) this.swapPoints(p0, p2);
        if (p2.y < p1.y) this.swapPoints(p1, p2);
        
        // Edge coherence triangle algorithm
        // Create initial edge table
        let edge_table = [
            {x: p0.x, inv_slope: (p1.x - p0.x) / (p1.y - p0.y)}, // edge01
            {x: p0.x, inv_slope: (p2.x - p0.x) / (p2.y - p0.y)}, // edge02
            {x: p1.x, inv_slope: (p2.x - p1.x) / (p2.y - p1.y)}  // edge12
        ];
        
        // Do cross product to determine if pt1 is to the right/left of edge02
        let v01 = {x: p1.x - p0.x, y: p1.y - p0.y};
        let v02 = {x: p2.x - p0.x, y: p2.y - p0.y};
        let p1_right = ((v01.x * v02.y) - (v01.y * v02.x)) >= 0;
        
        // Get the left and right edges from the edge table (lower half of triangle)
        let left_edge, right_edge;
        if (p1_right) {
            left_edge = edge_table[1];
            right_edge = edge_table[0];
        }
        else {
            left_edge = edge_table[0];
            right_edge = edge_table[1];
        }
        // Draw horizontal lines (lower half of triangle)
        for (let y = p0.y; y < p1.y; y++) {
            let left_x = parseInt(left_edge.x) + 1;
            let right_x = parseInt(right_edge.x);
            if (left_x <= right_x) { 
                this.drawLine({x: left_x, y: y}, {x: right_x, y: y}, color, framebuffer);
            }
            left_edge.x += left_edge.inv_slope;
            right_edge.x += right_edge.inv_slope;
        }
        
        // Get the left and right edges from the edge table (upper half of triangle) - note only one edge changes
        if (p1_right) {
            right_edge = edge_table[2];
        }
        else {
            left_edge = edge_table[2];
        }
        // Draw horizontal lines (upper half of triangle)
        for (let y = p1.y; y < p2.y; y++) {
            let left_x = parseInt(left_edge.x) + 1;
            let right_x = parseInt(right_edge.x);
            if (left_x <= right_x) {
                this.drawLine({x: left_x, y: y}, {x: right_x, y: y}, color, framebuffer);
            }
            left_edge.x += left_edge.inv_slope;
            right_edge.x += right_edge.inv_slope;
        }
    }
};
