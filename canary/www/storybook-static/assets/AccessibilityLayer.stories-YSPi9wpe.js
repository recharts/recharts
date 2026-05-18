import{u as A,e as t}from"./iframe-BmdG6Yuj.js";import{g as C}from"./utils-ePvtT4un.js";import{C as k}from"./ComposedChartArgs-_dvL9nac.js";import{C as l}from"./ComposedChart-CzsBStAV.js";import{A as E}from"./AreaChart-CZEo0Ssi.js";import{p as d}from"./Page-DPte-9pC.js";import{C as b}from"./CartesianGrid-CUho8OhZ.js";import{X as g}from"./XAxis-yj9kgQkK.js";import{Y as h}from"./YAxis-BmW1MgwT.js";import{A as a}from"./Area-CZLw4CPE.js";import{T as u}from"./Tooltip-zfMIy2Sl.js";import{R as y}from"./RechartsHookInspector-C9gdculA.js";import{g as v}from"./arrayEqualityCheck-Cs0ODbAq.js";import{L as T}from"./Legend-CpBE1ZRT.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-BRt9rj0a.js";import"./index-emtiH1OM.js";import"./immer-r1hs1aui.js";import"./hooks-DLMhcoxZ.js";import"./axisSelectors-B5YNmqFl.js";import"./d3-scale-BCNqbAE1.js";import"./zIndexSlice-CernrlT2.js";import"./renderedTicksSlice-BiizQght.js";import"./clsx-B-dksMZM.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-n72JXqS8.js";import"./chartDataContext-DC8YgnRR.js";import"./CategoricalChart-mKbdU8Ir.js";import"./resolveDefaultProps-CzKMDris.js";import"./CartesianAxis-DQoe1nv2.js";import"./Layer-CTqkrp1s.js";import"./Text-DqTFRyGd.js";import"./DOMUtils-Cpgve9lL.js";import"./Label-BahHfmoK.js";import"./ZIndexLayer-BALln1nu.js";import"./types-HBeXaxhb.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./Curve-o1yfXHk1.js";import"./step-B9kksXJi.js";import"./ReactUtils-BDG3-ZiE.js";import"./ActivePoints-3tH4QPDb.js";import"./Dot-C-X-bkP7.js";import"./RegisterGraphicalItemId-Bh3Gr8bc.js";import"./GraphicalItemClipPath-CCzofO3U.js";import"./SetGraphicalItem-A_fx4pfl.js";import"./useAnimationId-DYvcKDoo.js";import"./getRadiusAndStrokeWidthFromDot-DMLzSi-R.js";import"./graphicalItemSelectors-NT01alJS.js";import"./useElementOffset-DqYBnuYB.js";import"./uniqBy-cB4yLFVg.js";import"./iteratee-Cn99cyAf.js";import"./Cross-Djvw-tyz.js";import"./Rectangle-Dr2ikaiy.js";import"./Sector-CrLZSk6O.js";import"./index-C_lgB8BG.js";import"./ChartSizeDimensions-DqzMb5LP.js";import"./OffsetShower-DFfLZ4K8.js";import"./PlotAreaShower-CawkEE7f.js";import"./Symbols-iO_juYq8.js";import"./symbol-Dl25fcAc.js";const St={component:l},r={render:e=>t.createElement(v,{width:"100%",height:300},t.createElement(l,{margin:{top:20,right:20,bottom:20,left:20},data:d},t.createElement(a,{isAnimationActive:!1,dataKey:"uv",...e}),t.createElement(T,null),t.createElement(g,{dataKey:"name"}),t.createElement(h,null),t.createElement(u,null),t.createElement(y,null))),args:C(k),parameters:{docs:{description:{story:"You can tab to this chart. From there, you can use the arrow keys to navigate along the chart."}}}},o={render:()=>{const[e,f]=A.useState(!0);return t.createElement("div",null,t.createElement("button",{type:"button",onClick:()=>f(!e)},"Toggle Tooltip"),t.createElement(E,{width:500,height:400,data:d,margin:{top:10,right:30,left:0,bottom:0}},t.createElement(b,{strokeDasharray:"3 3"}),t.createElement(g,{dataKey:"name"}),t.createElement(h,null),t.createElement(a,{type:"monotone",dataKey:"uv",stackId:"1",stroke:"#8884d8",fill:"#8884d8"}),t.createElement(a,{type:"monotone",dataKey:"pv",stackId:"1",stroke:"#82ca9d",fill:"#82ca9d"}),t.createElement(a,{type:"monotone",dataKey:"amt",stackId:"1",stroke:"#ffc658",fill:"#ffc658"}),e&&t.createElement(u,null),t.createElement(y,null)))},args:{}};var i,m,n;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
