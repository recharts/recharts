import{r as A,e as t}from"./iframe-kEab-1de.js";import{g as C}from"./utils-ePvtT4un.js";import{C as k}from"./ComposedChartArgs-vbwTFmCk.js";import{C as l}from"./ComposedChart-CBB2EZz-.js";import{A as E}from"./AreaChart-3-uiqMvI.js";import{C as b}from"./CartesianGrid-Dz-jm-Oh.js";import{X as d}from"./XAxis-B2e8gJVO.js";import{Y as g}from"./YAxis-C_wTf9xH.js";import{A as a}from"./Area-DItUNVIV.js";import{T as h}from"./Tooltip-TX44mn0w.js";import{R as u}from"./RechartsHookInspector-CC5UoVXz.js";import{R as v}from"./arrayEqualityCheck-CYrh2cjl.js";import{L as T}from"./Legend-DdWnIPN0.js";import{p as y}from"./Page-Cj8EiXz7.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-CML9BKQL.js";import"./index-D1RE61xO.js";import"./immer-C4eWxQIR.js";import"./hooks-CJ2fHPGA.js";import"./axisSelectors-Tp_fxU6n.js";import"./d3-scale-sz-3qxpi.js";import"./zIndexSlice-BaIw-MhD.js";import"./renderedTicksSlice-BrUKQsnm.js";import"./clsx-B-dksMZM.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-BAMega6b.js";import"./chartDataContext-DvTCGmxA.js";import"./CategoricalChart-C5mOLgQl.js";import"./resolveDefaultProps-D3Hyj-pA.js";import"./CartesianAxis-3YcfdTBf.js";import"./Layer-Dvp9QxpM.js";import"./Text-DdI2ODY4.js";import"./DOMUtils-WUqQkZq5.js";import"./Label-CVjBmkuR.js";import"./ZIndexLayer-DOe9AOBU.js";import"./types-B8qtknYP.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./Curve-B815kJjs.js";import"./step-BiRjne67.js";import"./ReactUtils-BiGj3rxx.js";import"./ActivePoints-E55BUQ9b.js";import"./Dot-oRWifsYs.js";import"./RegisterGraphicalItemId-Z8hxEYqU.js";import"./GraphicalItemClipPath-CrzbaPUK.js";import"./SetGraphicalItem-D6ZVSQU1.js";import"./useAnimationId-DmziQOA2.js";import"./getRadiusAndStrokeWidthFromDot-CUkSAeld.js";import"./graphicalItemSelectors-DOfr2KS6.js";import"./useElementOffset-D67KLAg1.js";import"./uniqBy-fOXykw6h.js";import"./iteratee-DB8hmdOG.js";import"./Cross-Cu4bh41C.js";import"./Rectangle-Bb8G2Q0h.js";import"./Sector-DyyTlWTh.js";import"./index-DRJo_4d4.js";import"./ChartSizeDimensions-D96mYFyL.js";import"./OffsetShower-Db9WbllM.js";import"./PlotAreaShower-_gQbuJS1.js";import"./Symbols-eEknJRPm.js";import"./symbol-Mwvb6Rn8.js";const St={component:l},r={render:e=>t.createElement(v,{width:"100%",height:300},t.createElement(l,{margin:{top:20,right:20,bottom:20,left:20},data:y},t.createElement(a,{isAnimationActive:!1,dataKey:"uv",...e}),t.createElement(T,null),t.createElement(d,{dataKey:"name"}),t.createElement(g,null),t.createElement(h,null),t.createElement(u,null))),args:C(k),parameters:{docs:{description:{story:"You can tab to this chart. From there, you can use the arrow keys to navigate along the chart."}}}},o={render:()=>{const[e,f]=A.useState(!0);return t.createElement("div",null,t.createElement("button",{type:"button",onClick:()=>f(!e)},"Toggle Tooltip"),t.createElement(E,{width:500,height:400,data:y,margin:{top:10,right:30,left:0,bottom:0}},t.createElement(b,{strokeDasharray:"3 3"}),t.createElement(d,{dataKey:"name"}),t.createElement(g,null),t.createElement(a,{type:"monotone",dataKey:"uv",stackId:"1",stroke:"#8884d8",fill:"#8884d8"}),t.createElement(a,{type:"monotone",dataKey:"pv",stackId:"1",stroke:"#82ca9d",fill:"#82ca9d"}),t.createElement(a,{type:"monotone",dataKey:"amt",stackId:"1",stroke:"#ffc658",fill:"#ffc658"}),e&&t.createElement(h,null),t.createElement(u,null)))},args:{}};var i,m,n;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
