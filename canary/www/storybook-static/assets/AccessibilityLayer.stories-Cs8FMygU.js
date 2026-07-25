import{r as A,R as t}from"./iframe-DX-hRh6v.js";import{g as f}from"./utils-ePvtT4un.js";import{C}from"./ComposedChartArgs-CgvqQqFx.js";import{C as l}from"./ComposedChart-C2X6i1Aj.js";import{A as E}from"./AreaChart-DkKZcL-E.js";import{p as d}from"./Page-Cj8EiXz7.js";import{C as b}from"./CartesianGrid-CMJ9x5i5.js";import{X as g}from"./XAxis-CYn79B9K.js";import{Y as h}from"./YAxis-DIovWrSv.js";import{A as a}from"./Area-B2tosbFN.js";import{T as u}from"./Tooltip-BJGeDUzS.js";import{R as k}from"./zIndexSlice-CF9qsbsG.js";import{L as v}from"./Legend-JB80EPRp.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-Ccwce-LO.js";import"./index-BkRrDgeK.js";import"./index-BityOqCw.js";import"./index-C_co4uh9.js";import"./index-qEhkJMvm.js";import"./throttle-C3bKSARL.js";import"./get-DJ3830uQ.js";import"./renderedTicksSlice-Cdw3MVyO.js";import"./axisSelectors-CnUP3J5o.js";import"./resolveDefaultProps-Dl_-nEqR.js";import"./isWellBehavedNumber-B2WkM8vL.js";import"./d3-scale-CyRwSV0J.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-nrO7ZyU0.js";import"./chartDataContext-BrdpOtNY.js";import"./CategoricalChart-wLfPHTeT.js";import"./CartesianAxis-D-d2ZuWG.js";import"./Layer-CI3urb_2.js";import"./Text-DrQewChW.js";import"./DOMUtils-DdDZ08pJ.js";import"./Label-C_1G92on.js";import"./ZIndexLayer-BUVc2LfK.js";import"./types-B5ssIei3.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-Crkas5dz.js";import"./AnimatedItems-D1fsZDjw.js";import"./useAnimationId-oXOpEwNt.js";import"./ActivePoints-C0NUOkGZ.js";import"./Dot-Dn04Kjs0.js";import"./RegisterGraphicalItemId-CpEpaHjk.js";import"./GraphicalItemClipPath-DgEtuK8_.js";import"./SetGraphicalItem-BVTByb6H.js";import"./getRadiusAndStrokeWidthFromDot-k00jkWeK.js";import"./ActiveShapeUtils-CgP8l6zk.js";import"./Curve-DBTqjj17.js";import"./step-ghZz1pkQ.js";import"./path-DyVhHtw_.js";import"./graphicalItemSelectors-ag16I1EJ.js";import"./useElementOffset-Tj-Qp8PQ.js";import"./uniqBy-BOqCl2hX.js";import"./iteratee-QMX4YEQu.js";import"./Cross-ipAmTQrY.js";import"./Rectangle-C4fEhR5i.js";import"./util-Dxo8gN5i.js";import"./Sector-she__mVB.js";import"./Symbols-Bm5DempA.js";import"./symbol-5pOLizhZ.js";const St={component:l},r={render:e=>t.createElement(k,{width:"100%",height:300},t.createElement(l,{margin:{top:20,right:20,bottom:20,left:20},data:d},t.createElement(a,{isAnimationActive:!1,dataKey:"uv",...e}),t.createElement(v,null),t.createElement(g,{dataKey:"name"}),t.createElement(h,null),t.createElement(u,null))),args:f(C),parameters:{docs:{description:{story:"You can tab to this chart. From there, you can use the arrow keys to navigate along the chart."}}}},o={render:()=>{const[e,y]=A.useState(!0);return t.createElement("div",null,t.createElement("button",{type:"button",onClick:()=>y(!e)},"Toggle Tooltip"),t.createElement(E,{width:500,height:400,data:d,margin:{top:10,right:30,left:0,bottom:0}},t.createElement(b,{strokeDasharray:"3 3"}),t.createElement(g,{dataKey:"name"}),t.createElement(h,null),t.createElement(a,{type:"monotone",dataKey:"uv",stackId:"1",stroke:"#8884d8",fill:"#8884d8"}),t.createElement(a,{type:"monotone",dataKey:"pv",stackId:"1",stroke:"#82ca9d",fill:"#82ca9d"}),t.createElement(a,{type:"monotone",dataKey:"amt",stackId:"1",stroke:"#ffc658",fill:"#ffc658"}),e&&t.createElement(u,null)))},args:{}};var i,m,s;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`{
  render: (args: Args) => {
    return <ResponsiveContainer width="100%" height={300}>
        <ComposedChart margin={{
        top: 20,
        right: 20,
        bottom: 20,
        left: 20
      }} data={pageData}>
          <Area isAnimationActive={false} dataKey="uv" {...args} />
          {/* All further components are added to show the interaction with the Area properties */}
          <Legend />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
        </ComposedChart>
      </ResponsiveContainer>;
  },
  args: getStoryArgsFromArgsTypesObject(ComposedChartArgs),
  parameters: {
    docs: {
      description: {
        story: 'You can tab to this chart. From there, you can use the arrow keys to navigate along the chart.'
      }
    }
  }
}`,...(s=(m=r.parameters)==null?void 0:m.docs)==null?void 0:s.source}}};var n,p,c;o.parameters={...o.parameters,docs:{...(n=o.parameters)==null?void 0:n.docs,source:{originalSource:`{
  render: () => {
    const [toggle, setToggle] = useState(true);
    return <div>
        <button type="button" onClick={() => setToggle(!toggle)}>
          Toggle Tooltip
        </button>

        <AreaChart width={500} height={400} data={pageData} margin={{
        top: 10,
        right: 30,
        left: 0,
        bottom: 0
      }}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Area type="monotone" dataKey="uv" stackId="1" stroke="#8884d8" fill="#8884d8" />
          <Area type="monotone" dataKey="pv" stackId="1" stroke="#82ca9d" fill="#82ca9d" />
          <Area type="monotone" dataKey="amt" stackId="1" stroke="#ffc658" fill="#ffc658" />
          {toggle && <Tooltip />}
        </AreaChart>
      </div>;
  },
  args: {}
}`,...(c=(p=o.parameters)==null?void 0:p.docs)==null?void 0:c.source}}};const Yt=["AreaChartWithAccessibilityLayer","AccessibleWithButton"];export{o as AccessibleWithButton,r as AreaChartWithAccessibilityLayer,Yt as __namedExportsOrder,St as default};
