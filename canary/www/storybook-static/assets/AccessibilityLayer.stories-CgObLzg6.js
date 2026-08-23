import{r as A,R as t}from"./iframe-Bva2xGHH.js";import{g as f}from"./utils-ePvtT4un.js";import{C}from"./ComposedChartArgs-CgvqQqFx.js";import{C as l}from"./ComposedChart-CvLJWAQC.js";import{A as E}from"./AreaChart-D5QBwaO0.js";import{p as d}from"./Page-Cj8EiXz7.js";import{C as b}from"./CartesianGrid-TRCTuU41.js";import{X as g}from"./XAxis-CsoDjkEh.js";import{Y as h}from"./YAxis-B36u7uIT.js";import{A as a}from"./Area-DAFXQaWc.js";import{T as u}from"./Tooltip-CyiiC4QX.js";import{R as k}from"./zIndexSlice-DeikvbmU.js";import{L as v}from"./Legend-D6c_RVFa.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-DkrfE3IH.js";import"./index-VUoyG6xU.js";import"./index-EwtDjp0y.js";import"./index-Bo6z76Fs.js";import"./index-DT3MRaoS.js";import"./throttle-CFyzV36U.js";import"./get-C2VjdU0L.js";import"./axisSelectors-1RAYR2bl.js";import"./resolveDefaultProps-BuBoAocm.js";import"./isWellBehavedNumber-D9_2opJl.js";import"./d3-scale-CJSi8F9P.js";import"./renderedTicksSlice-CmjvxnPV.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-KP50bz7-.js";import"./chartDataContext-DHJzh3Cw.js";import"./CategoricalChart-DYOSFUHe.js";import"./CartesianAxis-aOVQqLXO.js";import"./Layer-PgPW5wj-.js";import"./Text-D8IJbXoV.js";import"./DOMUtils-CMvwzHzQ.js";import"./useId-Bwx6_eZW.js";import"./useBackwardsCompatibleTheme-3vkLTFmK.js";import"./Label-Dki1vWaX.js";import"./ZIndexLayer-B1sYnbf5.js";import"./types-CDHj9Y5Z.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./AnimatedItems-Dw2l639N.js";import"./useAnimationId-DDHow2US.js";import"./ActivePoints-DDTXKmxX.js";import"./Dot-TiF0MySe.js";import"./RegisterGraphicalItemId-CycuLbwA.js";import"./GraphicalItemClipPath-D8nHpKQ-.js";import"./SetGraphicalItem-482J7PRy.js";import"./getRadiusAndStrokeWidthFromDot-D-WW1Ids.js";import"./ActiveShapeUtils-zdhhOiSb.js";import"./Curve-C5PYz-5A.js";import"./step-C1KJzklo.js";import"./path-DyVhHtw_.js";import"./graphicalItemIdentity-CdZfZkJ-.js";import"./graphicalItemSelectors-CkKDZXGW.js";import"./useElementOffset-BC3T1f5H.js";import"./uniqBy-CeO9av7b.js";import"./iteratee-WIaZd5o8.js";import"./Cross-B1rL0P-F.js";import"./Rectangle-BGcjrFAk.js";import"./util-Dxo8gN5i.js";import"./Sector-D3aaUf6J.js";import"./Symbols-D9JQNcnZ.js";import"./symbol-8Tla0VKV.js";const Ft={component:l},r={render:e=>t.createElement(k,{width:"100%",height:300},t.createElement(l,{margin:{top:20,right:20,bottom:20,left:20},data:d},t.createElement(a,{isAnimationActive:!1,dataKey:"uv",...e}),t.createElement(v,null),t.createElement(g,{dataKey:"name"}),t.createElement(h,null),t.createElement(u,null))),args:f(C),parameters:{docs:{description:{story:"You can tab to this chart. From there, you can use the arrow keys to navigate along the chart."}}}},o={render:()=>{const[e,y]=A.useState(!0);return t.createElement("div",null,t.createElement("button",{type:"button",onClick:()=>y(!e)},"Toggle Tooltip"),t.createElement(E,{width:500,height:400,data:d,margin:{top:10,right:30,left:0,bottom:0}},t.createElement(b,{strokeDasharray:"3 3"}),t.createElement(g,{dataKey:"name"}),t.createElement(h,null),t.createElement(a,{type:"monotone",dataKey:"uv",stackId:"1",stroke:"#8884d8",fill:"#8884d8"}),t.createElement(a,{type:"monotone",dataKey:"pv",stackId:"1",stroke:"#82ca9d",fill:"#82ca9d"}),t.createElement(a,{type:"monotone",dataKey:"amt",stackId:"1",stroke:"#ffc658",fill:"#ffc658"}),e&&t.createElement(u,null)))},args:{}};var i,m,s;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
}`,...(c=(p=o.parameters)==null?void 0:p.docs)==null?void 0:c.source}}};const Wt=["AreaChartWithAccessibilityLayer","AccessibleWithButton"];export{o as AccessibleWithButton,r as AreaChartWithAccessibilityLayer,Wt as __namedExportsOrder,Ft as default};
