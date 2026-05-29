import{P as A,c as t}from"./iframe-ayfxMcMc.js";import{g as f}from"./utils-ePvtT4un.js";import{C}from"./ComposedChartArgs-_dvL9nac.js";import{C as l}from"./ComposedChart-DzAczIPs.js";import{A as E}from"./AreaChart-BPzw8ay9.js";import{p as d}from"./Page-DPte-9pC.js";import{C as b}from"./CartesianGrid-Cu2hXhNs.js";import{X as g}from"./XAxis-CQCosfOX.js";import{Y as h}from"./YAxis-CboDD1HN.js";import{A as a}from"./Area-G3vN3bbV.js";import{T as u}from"./Tooltip-C25Z0DnF.js";import{g as k}from"./zIndexSlice-CBS9H6Fq.js";import{L as v}from"./Legend-BXnax1a-.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-Dt3ctKzU.js";import"./index-CnDnhuhh.js";import"./index-qYP6YSZE.js";import"./index-ChfXHuaM.js";import"./index-uB2AF80P.js";import"./immer-CvfGnc1k.js";import"./get-DE-GTO8K.js";import"./renderedTicksSlice-kyxhp8XW.js";import"./axisSelectors-DiADRWeJ.js";import"./d3-scale-DvksmR-t.js";import"./resolveDefaultProps-DUvm9h9z.js";import"./isWellBehavedNumber-0ySD8Cyp.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-asOappaa.js";import"./chartDataContext-ncJihXoM.js";import"./CategoricalChart-YvgC-s3M.js";import"./CartesianAxis-CJYfwd48.js";import"./Layer-DRx_WgZU.js";import"./Text-D472vA6a.js";import"./DOMUtils-DhrlxvLL.js";import"./Label-ii_PgfeB.js";import"./ZIndexLayer-ChQFeTnT.js";import"./types-DKuO6oNB.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./Curve-CTFqdp98.js";import"./step-C4Edu8du.js";import"./path-DyVhHtw_.js";import"./ReactUtils-D4TRRjvu.js";import"./ActivePoints-BHkOA6iP.js";import"./Dot-DTml05Ju.js";import"./RegisterGraphicalItemId-B5JbPzoa.js";import"./GraphicalItemClipPath-D8mHMzmD.js";import"./SetGraphicalItem-B-R5cRe6.js";import"./useAnimationId-CPZ6UJKm.js";import"./getRadiusAndStrokeWidthFromDot-CyMjRM5q.js";import"./graphicalItemSelectors-3LsDXjJv.js";import"./useElementOffset-fSKqZFJ1.js";import"./uniqBy-CZ1HKjdU.js";import"./iteratee-CKfwSilq.js";import"./Cross-DZhq8NsE.js";import"./Rectangle-BlYO1MRZ.js";import"./Sector-B7K_t6uS.js";import"./Symbols-O67rkH-4.js";import"./symbol-DsIeXTTT.js";const It={component:l},r={render:e=>t.createElement(k,{width:"100%",height:300},t.createElement(l,{margin:{top:20,right:20,bottom:20,left:20},data:d},t.createElement(a,{isAnimationActive:!1,dataKey:"uv",...e}),t.createElement(v,null),t.createElement(g,{dataKey:"name"}),t.createElement(h,null),t.createElement(u,null))),args:f(C),parameters:{docs:{description:{story:"You can tab to this chart. From there, you can use the arrow keys to navigate along the chart."}}}},o={render:()=>{const[e,y]=A.useState(!0);return t.createElement("div",null,t.createElement("button",{type:"button",onClick:()=>y(!e)},"Toggle Tooltip"),t.createElement(E,{width:500,height:400,data:d,margin:{top:10,right:30,left:0,bottom:0}},t.createElement(b,{strokeDasharray:"3 3"}),t.createElement(g,{dataKey:"name"}),t.createElement(h,null),t.createElement(a,{type:"monotone",dataKey:"uv",stackId:"1",stroke:"#8884d8",fill:"#8884d8"}),t.createElement(a,{type:"monotone",dataKey:"pv",stackId:"1",stroke:"#82ca9d",fill:"#82ca9d"}),t.createElement(a,{type:"monotone",dataKey:"amt",stackId:"1",stroke:"#ffc658",fill:"#ffc658"}),e&&t.createElement(u,null)))},args:{}};var i,m,s;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
}`,...(c=(p=o.parameters)==null?void 0:p.docs)==null?void 0:c.source}}};const Lt=["AreaChartWithAccessibilityLayer","AccessibleWithButton"];export{o as AccessibleWithButton,r as AreaChartWithAccessibilityLayer,Lt as __namedExportsOrder,It as default};
