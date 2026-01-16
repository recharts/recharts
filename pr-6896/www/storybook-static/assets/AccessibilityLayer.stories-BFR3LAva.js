import{e as t,r as A}from"./iframe-C-3BuwuQ.js";import{g as C}from"./utils-ePvtT4un.js";import{C as k}from"./ComposedChartArgs-C2i17Xi4.js";import{C as l}from"./ComposedChart-BKINFeBC.js";import{R as E}from"./arrayEqualityCheck-FeQgOIOo.js";import{A as a}from"./Area-DRkgprMm.js";import{L as b}from"./Legend-B8xiXcn8.js";import{X as d}from"./XAxis-C5T_Hme-.js";import{Y as g}from"./YAxis-BdnZ6VvH.js";import{T as h}from"./Tooltip-DBF9JwRu.js";import{R as u}from"./RechartsHookInspector-_jP1ustk.js";import{A as v}from"./AreaChart-4AC842pH.js";import{C as T}from"./CartesianGrid-BjcHRlcY.js";import{p as y}from"./Page-Cj8EiXz7.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-Bcu3XnIN.js";import"./hooks-DEo8Vj_c.js";import"./axisSelectors-TDNCuVG_.js";import"./zIndexSlice-CFeEDpl4.js";import"./resolveDefaultProps-B8KPX6JC.js";import"./PolarUtils-C0kEye-G.js";import"./CartesianChart-DDw6NmdK.js";import"./chartDataContext-CCRblB7F.js";import"./CategoricalChart-E0yZOneU.js";import"./Curve-DOZfooTf.js";import"./types-CX-GD2h3.js";import"./Layer-BtreNavR.js";import"./ReactUtils-DhVfiJt6.js";import"./Label-C_nqqcnR.js";import"./Text-DQ4MnNVk.js";import"./DOMUtils-g9jP34sD.js";import"./ZIndexLayer-cK31z4E4.js";import"./ActivePoints-CWUIUowx.js";import"./Dot-DyDE0Uuu.js";import"./RegisterGraphicalItemId-CC6kQy01.js";import"./GraphicalItemClipPath-4wjIziT0.js";import"./SetGraphicalItem-wdcyb_2X.js";import"./useAnimationId-0OWcJ5q4.js";import"./getRadiusAndStrokeWidthFromDot-BnVuhiTb.js";import"./graphicalItemSelectors-CJGM5f5x.js";import"./Symbols-mlCUJH03.js";import"./useElementOffset-EnpVvfdz.js";import"./iteratee-Qha-Yhcf.js";import"./CartesianAxis-CtyApd07.js";import"./Cross-DbyTsFp8.js";import"./Rectangle-BYl-A-mY.js";import"./Sector-Dgl5Ps14.js";import"./index-DWdef0jv.js";import"./ChartSizeDimensions-B8NVQVZ1.js";import"./OffsetShower-g_YOgmWj.js";import"./PlotAreaShower-CrDYc66T.js";const bt={component:l},r={render:e=>t.createElement(E,{width:"100%",height:300},t.createElement(l,{margin:{top:20,right:20,bottom:20,left:20},data:y},t.createElement(a,{isAnimationActive:!1,dataKey:"uv",...e}),t.createElement(b,null),t.createElement(d,{dataKey:"name"}),t.createElement(g,null),t.createElement(h,null),t.createElement(u,null))),args:C(k),parameters:{docs:{description:{story:"You can tab to this chart. From there, you can use the arrow keys to navigate along the chart."}}}},o={render:()=>{const[e,f]=A.useState(!0);return t.createElement("div",null,t.createElement("button",{type:"button",onClick:()=>f(!e)},"Toggle Tooltip"),t.createElement(v,{width:500,height:400,data:y,margin:{top:10,right:30,left:0,bottom:0}},t.createElement(T,{strokeDasharray:"3 3"}),t.createElement(d,{dataKey:"name"}),t.createElement(g,null),t.createElement(a,{type:"monotone",dataKey:"uv",stackId:"1",stroke:"#8884d8",fill:"#8884d8"}),t.createElement(a,{type:"monotone",dataKey:"pv",stackId:"1",stroke:"#82ca9d",fill:"#82ca9d"}),t.createElement(a,{type:"monotone",dataKey:"amt",stackId:"1",stroke:"#ffc658",fill:"#ffc658"}),e&&t.createElement(h,null),t.createElement(u,null)))},args:{}};var i,n,s;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
}`,...(c=(p=o.parameters)==null?void 0:p.docs)==null?void 0:c.source}}};const vt=["AreaChartWithAccessibilityLayer","AccessibleWithButton"];export{o as AccessibleWithButton,r as AreaChartWithAccessibilityLayer,vt as __namedExportsOrder,bt as default};
