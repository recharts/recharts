import{R as e}from"./iframe-tfhlM7RE.js";import{R as i}from"./zIndexSlice-B471v4Lb.js";import{C as n}from"./ComposedChart-CtzbjDUj.js";import{p as a}from"./Page-Cj8EiXz7.js";import{C as p}from"./CartesianGrid-nZ_SYEH5.js";import{X as s}from"./XAxis-B7I9Q0Cl.js";import{Y as c}from"./YAxis-h2SUOBLw.js";import{L as d}from"./Line-bh6qw2At.js";import{R as g}from"./ReferenceLine-DR90SP9O.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./resolveDefaultProps-DL75x_1S.js";import"./throttle-CXjKONS2.js";import"./index-BTN7W_Yl.js";import"./index-lTJQPG4X.js";import"./RechartsWrapper-DDpiUUXi.js";import"./axisSelectors-DJx7DAnJ.js";import"./polarAxisSelectors-BpOt7LI8.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-D6t4zM3P.js";import"./index-Dv3JWEH0.js";import"./index-HYmTeb2Q.js";import"./renderedTicksSlice-DbMZHvdq.js";import"./index-MeXGvWIN.js";import"./CartesianChart-DU4kdG2u.js";import"./chartDataContext-DaAlq-l7.js";import"./CategoricalChart-CUmY4tZ5.js";import"./CartesianAxis-DyvVeGzf.js";import"./Layer-BL0J2r_i.js";import"./Text-5W0Vtyw-.js";import"./pageBackground-0qhqc0cB.js";import"./useId-Bzzww67M.js";import"./ZIndexLayer-C-CGrvp9.js";import"./Label-Dc9_QYO6.js";import"./dataEntryStyles-D3tcZitS.js";import"./types-D9bKTCt9.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./Curve-BOSLFwGN.js";import"./step-B0V8T17V.js";import"./path-DyVhHtw_.js";import"./activeStyles-BEaPJgw0.js";import"./useAnimationId-BfuVUtmA.js";import"./ActivePoints-C0JmsTOw.js";import"./Dot-DqxCp5yP.js";import"./Symbols-B52ZExKH.js";import"./symbol-BSe1lArF.js";import"./RegisterGraphicalItemId-KBiFRx-Y.js";import"./ErrorBarContext-WVyXc6eb.js";import"./SetGraphicalItem-nKtDGPi3.js";import"./getRadiusAndStrokeWidthFromDot-DpOR5CEC.js";import"./ActiveShapeUtils-DJsr9xRk.js";import"./useEffectiveDataKey-Vj1bvM5G.js";import"./CartesianScaleHelper-C9Oze4oB.js";const fe={title:"Examples/cartesian/ReferenceLine/ReferenceLineSegment"},t={render:()=>e.createElement(i,{width:"100%",height:500},e.createElement(n,{data:a,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(p,{strokeDasharray:"3 3"}),e.createElement(s,{dataKey:"name"}),e.createElement(c,{type:"number"}),e.createElement(d,{dataKey:"uv"}),e.createElement(g,{segment:[{x:"Page A",y:0},{x:"Page E",y:1500}]})))},he=["Segment"];var r,o,m;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
  render: () => {
    return <ResponsiveContainer width="100%" height={500}>
        <ComposedChart data={pageData} margin={{
        top: 5,
        right: 30,
        left: 20,
        bottom: 5
      }}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis type="number" />
          <Line dataKey="uv" />
          <ReferenceLine segment={[{
          x: 'Page A',
          y: 0
        }, {
          x: 'Page E',
          y: 1500
        }]} />
        </ComposedChart>
      </ResponsiveContainer>;
  }
}`,...(m=(o=t.parameters)==null?void 0:o.docs)==null?void 0:m.source}}};export{t as Segment,he as __namedExportsOrder,fe as default};
