import{e as t,r as A}from"./iframe-DqbxrOnC.js";import{g as C}from"./utils-ePvtT4un.js";import{C as k}from"./ComposedChartArgs-vbwTFmCk.js";import{C as l}from"./ComposedChart-C4q1Unrm.js";import{R as E}from"./arrayEqualityCheck-DDnB3yQJ.js";import{A as a}from"./Area-CdfLkmhw.js";import{L as b}from"./Legend-Dom9mrOu.js";import{X as d}from"./XAxis-Clh3r3oa.js";import{Y as g}from"./YAxis-C1VoYxeB.js";import{T as h}from"./Tooltip-C4KAOnYt.js";import{R as u}from"./RechartsHookInspector-nEoOxjIA.js";import{A as v}from"./AreaChart-CfX7sj5c.js";import{C as T}from"./CartesianGrid-DDmVEjV6.js";import{p as y}from"./Page-Cj8EiXz7.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-CpGZSQIF.js";import"./hooks-Bh4iEl2l.js";import"./axisSelectors-BhsfxkUf.js";import"./zIndexSlice-Be92tzJW.js";import"./resolveDefaultProps-H2CuSuBD.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-BmQRqUeT.js";import"./chartDataContext-DOwFKY9v.js";import"./CategoricalChart-BDtAQzJe.js";import"./Curve-D1iAhDrw.js";import"./types-DYQm65dh.js";import"./Layer-DO_g1bne.js";import"./ReactUtils-CmTCn7uo.js";import"./Label-Dn_4yvvw.js";import"./Text-UMPVnpE1.js";import"./DOMUtils-DJjhPRNo.js";import"./ZIndexLayer-BLOQbcIf.js";import"./ActivePoints-DIeLUbLd.js";import"./Dot-CUa8yiZU.js";import"./RegisterGraphicalItemId-BknrU22d.js";import"./GraphicalItemClipPath-BvpOtW2w.js";import"./SetGraphicalItem-D6JZdLch.js";import"./useAnimationId-CZrzdjIq.js";import"./getRadiusAndStrokeWidthFromDot-CsEgUo-q.js";import"./graphicalItemSelectors-4b15-XDR.js";import"./Symbols-m2t7OCzL.js";import"./useElementOffset-DGNIXEDP.js";import"./iteratee-B2QshLL-.js";import"./CartesianAxis-CBS5lhtQ.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./Cross-DxueNroP.js";import"./Rectangle-DoZxp5Jb.js";import"./Sector-BHLa0ImP.js";import"./index-DM8LAuhA.js";import"./ChartSizeDimensions-D5VWiq-O.js";import"./OffsetShower-BGmawGzl.js";import"./PlotAreaShower-Cv1rJPUW.js";const vt={component:l},r={render:e=>t.createElement(E,{width:"100%",height:300},t.createElement(l,{margin:{top:20,right:20,bottom:20,left:20},data:y},t.createElement(a,{isAnimationActive:!1,dataKey:"uv",...e}),t.createElement(b,null),t.createElement(d,{dataKey:"name"}),t.createElement(g,null),t.createElement(h,null),t.createElement(u,null))),args:C(k),parameters:{docs:{description:{story:"You can tab to this chart. From there, you can use the arrow keys to navigate along the chart."}}}},o={render:()=>{const[e,f]=A.useState(!0);return t.createElement("div",null,t.createElement("button",{type:"button",onClick:()=>f(!e)},"Toggle Tooltip"),t.createElement(v,{width:500,height:400,data:y,margin:{top:10,right:30,left:0,bottom:0}},t.createElement(T,{strokeDasharray:"3 3"}),t.createElement(d,{dataKey:"name"}),t.createElement(g,null),t.createElement(a,{type:"monotone",dataKey:"uv",stackId:"1",stroke:"#8884d8",fill:"#8884d8"}),t.createElement(a,{type:"monotone",dataKey:"pv",stackId:"1",stroke:"#82ca9d",fill:"#82ca9d"}),t.createElement(a,{type:"monotone",dataKey:"amt",stackId:"1",stroke:"#ffc658",fill:"#ffc658"}),e&&t.createElement(h,null),t.createElement(u,null)))},args:{}};var i,n,s;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
