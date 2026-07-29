import{r as A,R as t}from"./iframe-VZ2aM8fP.js";import{g as f}from"./utils-ePvtT4un.js";import{C}from"./ComposedChartArgs-CgvqQqFx.js";import{C as l}from"./ComposedChart-BflrR0gu.js";import{A as E}from"./AreaChart-B2mjc8Yx.js";import{p as d}from"./Page-Cj8EiXz7.js";import{C as b}from"./CartesianGrid-B2ElzWSV.js";import{X as g}from"./XAxis-wYdPJJmK.js";import{Y as h}from"./YAxis-BnAL0SHr.js";import{A as a}from"./Area-C4E6QKY3.js";import{T as u}from"./Tooltip-DwRvR9mJ.js";import{R as k}from"./zIndexSlice-CQOPOcrz.js";import{L as v}from"./Legend-sDzFO5rA.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-BgtBwIWT.js";import"./index-B8NmJaJc.js";import"./index-BdOpZNUA.js";import"./index-RAnsrEyk.js";import"./index-5JKLnMLz.js";import"./throttle-CpHch1iP.js";import"./get-C2VjdU0L.js";import"./renderedTicksSlice-BWvg2Uuk.js";import"./axisSelectors-BuT92BdO.js";import"./resolveDefaultProps-_p4e6Off.js";import"./isWellBehavedNumber-B1YHMHRX.js";import"./d3-scale-2P7n4BrN.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-Bc8fypAa.js";import"./chartDataContext-Ci6amljO.js";import"./CategoricalChart-CxsxsIbU.js";import"./CartesianAxis-C1YtHz_V.js";import"./Layer-D5KpKuLh.js";import"./Text-BxYT9j-0.js";import"./DOMUtils-D8EYtam3.js";import"./Label-Bcx9yaip.js";import"./ZIndexLayer-BQK00jlT.js";import"./types-BixaCUGO.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./RechartsThemeContext-CWQxd3mi.js";import"./isBuffer-BG75eWKN.js";import"./AnimatedItems-B1Uj1Gzk.js";import"./useAnimationId-BWSvDpI-.js";import"./ActivePoints-oAKWC-6n.js";import"./Dot-CNR-wtas.js";import"./RegisterGraphicalItemId-C7us6vqj.js";import"./GraphicalItemClipPath-BhbKOYCd.js";import"./SetGraphicalItem-BqP4f3rQ.js";import"./getRadiusAndStrokeWidthFromDot-D2NN5p-Y.js";import"./ActiveShapeUtils-C3jZ13_H.js";import"./Curve-B5MshFyr.js";import"./step-DBa2Myk3.js";import"./path-DyVhHtw_.js";import"./graphicalItemSelectors-BD0xBJsD.js";import"./useElementOffset-B7H5s1sG.js";import"./uniqBy-D-VFpCI_.js";import"./iteratee-BrJ0nONF.js";import"./Cross-QAFKi9OG.js";import"./Rectangle-BHt9-SY3.js";import"./util-Dxo8gN5i.js";import"./Sector-CTuxRXvD.js";import"./Symbols-DVumFTK6.js";import"./symbol-CUlD2-5A.js";const Yt={component:l},r={render:e=>t.createElement(k,{width:"100%",height:300},t.createElement(l,{margin:{top:20,right:20,bottom:20,left:20},data:d},t.createElement(a,{isAnimationActive:!1,dataKey:"uv",...e}),t.createElement(v,null),t.createElement(g,{dataKey:"name"}),t.createElement(h,null),t.createElement(u,null))),args:f(C),parameters:{docs:{description:{story:"You can tab to this chart. From there, you can use the arrow keys to navigate along the chart."}}}},o={render:()=>{const[e,y]=A.useState(!0);return t.createElement("div",null,t.createElement("button",{type:"button",onClick:()=>y(!e)},"Toggle Tooltip"),t.createElement(E,{width:500,height:400,data:d,margin:{top:10,right:30,left:0,bottom:0}},t.createElement(b,{strokeDasharray:"3 3"}),t.createElement(g,{dataKey:"name"}),t.createElement(h,null),t.createElement(a,{type:"monotone",dataKey:"uv",stackId:"1",stroke:"#8884d8",fill:"#8884d8"}),t.createElement(a,{type:"monotone",dataKey:"pv",stackId:"1",stroke:"#82ca9d",fill:"#82ca9d"}),t.createElement(a,{type:"monotone",dataKey:"amt",stackId:"1",stroke:"#ffc658",fill:"#ffc658"}),e&&t.createElement(u,null)))},args:{}};var i,m,s;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
}`,...(c=(p=o.parameters)==null?void 0:p.docs)==null?void 0:c.source}}};const Dt=["AreaChartWithAccessibilityLayer","AccessibleWithButton"];export{o as AccessibleWithButton,r as AreaChartWithAccessibilityLayer,Dt as __namedExportsOrder,Yt as default};
