import{e as t,r as A}from"./iframe-DPPC5LCd.js";import{g as C}from"./utils-ePvtT4un.js";import{C as k}from"./ComposedChartArgs-DXKkF88H.js";import{C as l}from"./ComposedChart-Ds3ekokY.js";import{R as E}from"./arrayEqualityCheck-Dvk8KT0D.js";import{A as a}from"./Area-LKaQD5Ma.js";import{L as b}from"./Legend-CqiGLNsX.js";import{X as d}from"./XAxis-BG2Y_xwU.js";import{Y as g}from"./YAxis-BkVN0NTj.js";import{T as h}from"./Tooltip-Vhvc3XfR.js";import{R as u}from"./RechartsHookInspector-Blp8PL-4.js";import{A as v}from"./AreaChart-BDH0-Eqc.js";import{C as T}from"./CartesianGrid-CvB-qYbV.js";import{p as y}from"./Page-Cj8EiXz7.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-PEDxF674.js";import"./hooks-D7d6b41a.js";import"./axisSelectors-Y4qCzWsU.js";import"./zIndexSlice-Cyke5ZAj.js";import"./resolveDefaultProps-LOA1Y3L5.js";import"./PolarUtils-DdS5KPsI.js";import"./CartesianChart-CLhvhGCa.js";import"./chartDataContext-CBM88NXk.js";import"./CategoricalChart-DSnyIdqz.js";import"./Curve-Bys-PvMV.js";import"./types-BtZeuRvc.js";import"./Layer-l1Ju_rpU.js";import"./ReactUtils-Dpo3QY29.js";import"./Label-CyOEca1T.js";import"./Text-CskNyNSq.js";import"./DOMUtils-BagiRLWz.js";import"./ZIndexLayer-BYs5zm3k.js";import"./ActivePoints-bzJzis_r.js";import"./Dot-DGBsmHFR.js";import"./RegisterGraphicalItemId-CQrbIdXT.js";import"./GraphicalItemClipPath-npaeuZne.js";import"./SetGraphicalItem-WBUrf2m8.js";import"./useAnimationId-BL1JszpL.js";import"./getRadiusAndStrokeWidthFromDot-r3LToZRM.js";import"./graphicalItemSelectors-Civiv12A.js";import"./Symbols-BVjVO6PI.js";import"./useElementOffset-C9FgqAtz.js";import"./iteratee-CxRByJ3f.js";import"./CartesianAxis-CbeAAhwj.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./Cross-WWtM8EO7.js";import"./Rectangle-CdGsT6u6.js";import"./Sector-6q_tG2Nj.js";import"./index-vC2xkEJs.js";import"./ChartSizeDimensions-CMyfGdJP.js";import"./OffsetShower-B4IN2vD-.js";import"./PlotAreaShower-P_z3LqUB.js";const vt={component:l},r={render:e=>t.createElement(E,{width:"100%",height:300},t.createElement(l,{margin:{top:20,right:20,bottom:20,left:20},data:y},t.createElement(a,{isAnimationActive:!1,dataKey:"uv",...e}),t.createElement(b,null),t.createElement(d,{dataKey:"name"}),t.createElement(g,null),t.createElement(h,null),t.createElement(u,null))),args:C(k),parameters:{docs:{description:{story:"You can tab to this chart. From there, you can use the arrow keys to navigate along the chart."}}}},o={render:()=>{const[e,f]=A.useState(!0);return t.createElement("div",null,t.createElement("button",{type:"button",onClick:()=>f(!e)},"Toggle Tooltip"),t.createElement(v,{width:500,height:400,data:y,margin:{top:10,right:30,left:0,bottom:0}},t.createElement(T,{strokeDasharray:"3 3"}),t.createElement(d,{dataKey:"name"}),t.createElement(g,null),t.createElement(a,{type:"monotone",dataKey:"uv",stackId:"1",stroke:"#8884d8",fill:"#8884d8"}),t.createElement(a,{type:"monotone",dataKey:"pv",stackId:"1",stroke:"#82ca9d",fill:"#82ca9d"}),t.createElement(a,{type:"monotone",dataKey:"amt",stackId:"1",stroke:"#ffc658",fill:"#ffc658"}),e&&t.createElement(h,null),t.createElement(u,null)))},args:{}};var i,n,s;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
}`,...(s=(n=r.parameters)==null?void 0:n.docs)==null?void 0:s.source}}};var m,p,c;o.parameters={...o.parameters,docs:{...(m=o.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
}`,...(c=(p=o.parameters)==null?void 0:p.docs)==null?void 0:c.source}}};const Tt=["AreaChartWithAccessibilityLayer","AccessibleWithButton"];export{o as AccessibleWithButton,r as AreaChartWithAccessibilityLayer,Tt as __namedExportsOrder,vt as default};
