import{r as A,e as t}from"./iframe-C3UZ-t_V.js";import{g as C}from"./utils-ePvtT4un.js";import{C as k}from"./ComposedChartArgs-DM6BExtw.js";import{C as l}from"./ComposedChart-C4m1Eygp.js";import{A as E}from"./AreaChart-B1RguGbP.js";import{p as d}from"./Page-Cj8EiXz7.js";import{C as b}from"./CartesianGrid-D2p0Ir6T.js";import{X as g}from"./XAxis-DMAObJwa.js";import{Y as h}from"./YAxis-B5LKtkqe.js";import{A as a}from"./Area-B3JJgYaC.js";import{T as u}from"./Tooltip-BtNIb_6F.js";import{R as y}from"./RechartsHookInspector-BFtfPmXC.js";import{R as v}from"./arrayEqualityCheck-DIL50JWa.js";import{L as T}from"./Legend-BAX1K06t.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-Bsvy-j69.js";import"./index-ClWM-yv2.js";import"./immer-Bf7Gcqi0.js";import"./hooks-DPl2sBv5.js";import"./axisSelectors-DmOEhaOy.js";import"./d3-scale-UHw6FirY.js";import"./zIndexSlice-Dx4k4ZlJ.js";import"./renderedTicksSlice-CLnyFrSg.js";import"./clsx-B-dksMZM.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-BmK7YYly.js";import"./chartDataContext-BmElG8Xh.js";import"./CategoricalChart-DaGR7SKz.js";import"./resolveDefaultProps-aaXGpNRZ.js";import"./CartesianAxis-CYGD0r1r.js";import"./Layer-CI6sC4Pl.js";import"./Text-DPTsyd0A.js";import"./DOMUtils-BUXVBs_y.js";import"./Label-BrcoQVek.js";import"./ZIndexLayer-D78RDR2e.js";import"./types-5hKD9RW5.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./Curve-C7Xh0Uh3.js";import"./step-mUeGDqfh.js";import"./ReactUtils-BnJyydkM.js";import"./ActivePoints-Donj28kx.js";import"./Dot-CQmFG6vz.js";import"./RegisterGraphicalItemId-CRHVW6BC.js";import"./GraphicalItemClipPath-CM4WNw68.js";import"./SetGraphicalItem-aZjM1KWs.js";import"./useAnimationId-DB48Qg13.js";import"./getRadiusAndStrokeWidthFromDot-Cj9gBiC7.js";import"./graphicalItemSelectors-tC7p4u8m.js";import"./useElementOffset-Ck5QmzIm.js";import"./uniqBy-Bm8Zesxj.js";import"./iteratee-tmynXvCY.js";import"./Cross-WoMoQ1i4.js";import"./Rectangle-DGuVg7wO.js";import"./Sector-BhwWS5u1.js";import"./index-iiKok6sI.js";import"./ChartSizeDimensions-C9L6kdtQ.js";import"./OffsetShower-DbJZQebV.js";import"./PlotAreaShower-B5C3jvki.js";import"./Symbols-DCi2amY7.js";import"./symbol-DGgXQDAi.js";const St={component:l},r={render:e=>t.createElement(v,{width:"100%",height:300},t.createElement(l,{margin:{top:20,right:20,bottom:20,left:20},data:d},t.createElement(a,{isAnimationActive:!1,dataKey:"uv",...e}),t.createElement(T,null),t.createElement(g,{dataKey:"name"}),t.createElement(h,null),t.createElement(u,null),t.createElement(y,null))),args:C(k),parameters:{docs:{description:{story:"You can tab to this chart. From there, you can use the arrow keys to navigate along the chart."}}}},o={render:()=>{const[e,f]=A.useState(!0);return t.createElement("div",null,t.createElement("button",{type:"button",onClick:()=>f(!e)},"Toggle Tooltip"),t.createElement(E,{width:500,height:400,data:d,margin:{top:10,right:30,left:0,bottom:0}},t.createElement(b,{strokeDasharray:"3 3"}),t.createElement(g,{dataKey:"name"}),t.createElement(h,null),t.createElement(a,{type:"monotone",dataKey:"uv",stackId:"1",stroke:"#8884d8",fill:"#8884d8"}),t.createElement(a,{type:"monotone",dataKey:"pv",stackId:"1",stroke:"#82ca9d",fill:"#82ca9d"}),t.createElement(a,{type:"monotone",dataKey:"amt",stackId:"1",stroke:"#ffc658",fill:"#ffc658"}),e&&t.createElement(u,null),t.createElement(y,null)))},args:{}};var i,m,n;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
          <RechartsHookInspector />
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
}`,...(n=(m=r.parameters)==null?void 0:m.docs)==null?void 0:n.source}}};var s,p,c;o.parameters={...o.parameters,docs:{...(s=o.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
          <RechartsHookInspector />
        </AreaChart>
      </div>;
  },
  args: {}
}`,...(c=(p=o.parameters)==null?void 0:p.docs)==null?void 0:c.source}}};const Yt=["AreaChartWithAccessibilityLayer","AccessibleWithButton"];export{o as AccessibleWithButton,r as AreaChartWithAccessibilityLayer,Yt as __namedExportsOrder,St as default};
