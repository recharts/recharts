import{e as t,r as A}from"./iframe-DltNrMbJ.js";import{g as C}from"./utils-ePvtT4un.js";import{C as k}from"./ComposedChartArgs-vbwTFmCk.js";import{C as l}from"./ComposedChart-8YXYxTJ4.js";import{R as E}from"./arrayEqualityCheck-LkDVdEVg.js";import{A as a}from"./Area-Bkh-usE-.js";import{L as b}from"./Legend-nJk7JtSm.js";import{X as d}from"./XAxis-CERTAhrM.js";import{Y as g}from"./YAxis-CJYvma9k.js";import{T as h}from"./Tooltip-Nwyb4wI1.js";import{R as u}from"./RechartsHookInspector-CkUV0TxE.js";import{A as v}from"./AreaChart-DCyvnMML.js";import{C as T}from"./CartesianGrid-Dc_J0SIm.js";import{p as y}from"./Page-Cj8EiXz7.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-BkNkb6Gi.js";import"./hooks-BprzVDZg.js";import"./axisSelectors-CKIz14Qs.js";import"./zIndexSlice-BY2OfmK4.js";import"./resolveDefaultProps-DUSmftLt.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-DYne5FJP.js";import"./chartDataContext-DyMLSiHH.js";import"./CategoricalChart-B77eIce_.js";import"./Curve-DQJoehXa.js";import"./types-ByzPfmmH.js";import"./Layer-CESBlQPf.js";import"./ReactUtils-q-DWoBEq.js";import"./Label-WGWSnZjZ.js";import"./Text-Dh_cvCOq.js";import"./DOMUtils-xzfmDO5R.js";import"./ZIndexLayer-BSXb5mnX.js";import"./ActivePoints-DLrkoeVF.js";import"./Dot-ClGJHhN-.js";import"./RegisterGraphicalItemId-BssAkKZ1.js";import"./GraphicalItemClipPath-BbPDXtNe.js";import"./SetGraphicalItem-BwO0NZge.js";import"./useAnimationId-BKMwNFd7.js";import"./getRadiusAndStrokeWidthFromDot-dG2TYa7y.js";import"./graphicalItemSelectors-JpKVhF4p.js";import"./Symbols-VYn2rLNF.js";import"./useElementOffset-BISJ-SQc.js";import"./iteratee-1VRBEyg4.js";import"./CartesianAxis-DfRV_-M5.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./Cross-BGIAn8Oc.js";import"./Rectangle-BEufvsiJ.js";import"./Sector-CucAHJS5.js";import"./index-DSMvm7PG.js";import"./ChartSizeDimensions-D5hH2uJv.js";import"./OffsetShower-DW4GTDS2.js";import"./PlotAreaShower-DOQKbeSs.js";const vt={component:l},r={render:e=>t.createElement(E,{width:"100%",height:300},t.createElement(l,{margin:{top:20,right:20,bottom:20,left:20},data:y},t.createElement(a,{isAnimationActive:!1,dataKey:"uv",...e}),t.createElement(b,null),t.createElement(d,{dataKey:"name"}),t.createElement(g,null),t.createElement(h,null),t.createElement(u,null))),args:C(k),parameters:{docs:{description:{story:"You can tab to this chart. From there, you can use the arrow keys to navigate along the chart."}}}},o={render:()=>{const[e,f]=A.useState(!0);return t.createElement("div",null,t.createElement("button",{type:"button",onClick:()=>f(!e)},"Toggle Tooltip"),t.createElement(v,{width:500,height:400,data:y,margin:{top:10,right:30,left:0,bottom:0}},t.createElement(T,{strokeDasharray:"3 3"}),t.createElement(d,{dataKey:"name"}),t.createElement(g,null),t.createElement(a,{type:"monotone",dataKey:"uv",stackId:"1",stroke:"#8884d8",fill:"#8884d8"}),t.createElement(a,{type:"monotone",dataKey:"pv",stackId:"1",stroke:"#82ca9d",fill:"#82ca9d"}),t.createElement(a,{type:"monotone",dataKey:"amt",stackId:"1",stroke:"#ffc658",fill:"#ffc658"}),e&&t.createElement(h,null),t.createElement(u,null)))},args:{}};var i,n,s;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
