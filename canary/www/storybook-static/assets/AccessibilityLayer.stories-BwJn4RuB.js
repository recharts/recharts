import{e as t,r as A}from"./iframe-BlWijLqW.js";import{g as C}from"./utils-ePvtT4un.js";import{C as k}from"./ComposedChartArgs-CjquZQyc.js";import{C as l}from"./ComposedChart-Bvywwt59.js";import{R as E}from"./arrayEqualityCheck-wpbGPGp4.js";import{A as a}from"./Area-CMZWAoN1.js";import{L as b}from"./Legend-C9QWxv1R.js";import{X as d}from"./XAxis-OLUbmSHc.js";import{Y as g}from"./YAxis-DCz5GEme.js";import{T as h}from"./Tooltip-CvfY5XaH.js";import{R as u}from"./RechartsHookInspector-DmBYfqJt.js";import{A as v}from"./AreaChart-D5ZAs1H0.js";import{C as T}from"./CartesianGrid-DlT4qS99.js";import{p as y}from"./Page-Cj8EiXz7.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-DVoFofdD.js";import"./hooks-Bq9gEA3Y.js";import"./axisSelectors-BcyrPMqb.js";import"./zIndexSlice-CAH7mPZ1.js";import"./resolveDefaultProps-BXixkRdf.js";import"./PolarUtils-DdS5KPsI.js";import"./CartesianChart-B-NzXiwJ.js";import"./chartDataContext-Bi-RwErn.js";import"./CategoricalChart-yeAYRiqJ.js";import"./Curve-DR-_MvJg.js";import"./types-CMl5R0ed.js";import"./Layer-3MYXWHxJ.js";import"./ReactUtils-CbcjOK7p.js";import"./Label-Df_5RPeD.js";import"./Text-zHguMFUU.js";import"./DOMUtils-DB8eToSF.js";import"./ZIndexLayer-CJd84X-g.js";import"./ActivePoints-JWw26lZk.js";import"./Dot-D4efsgOa.js";import"./RegisterGraphicalItemId-CGPZoT1R.js";import"./GraphicalItemClipPath-C9wWAhjz.js";import"./SetGraphicalItem-UAqbhtt1.js";import"./useAnimationId-B1CL6Xpk.js";import"./getRadiusAndStrokeWidthFromDot-CWn6u2wW.js";import"./graphicalItemSelectors-BsNSgCuD.js";import"./Symbols-BEH-AFaJ.js";import"./useElementOffset-CyDDhNEE.js";import"./iteratee-DmHclTd9.js";import"./CartesianAxis-Bh0UbraM.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./Cross-BW--vN7Z.js";import"./Rectangle-IDnxfDb1.js";import"./Sector-BYlteXBh.js";import"./index-BlR-9DJp.js";import"./ChartSizeDimensions-CSi05Yh4.js";import"./OffsetShower-C6MwKWid.js";import"./PlotAreaShower-BWRdXOpl.js";const vt={component:l},r={render:e=>t.createElement(E,{width:"100%",height:300},t.createElement(l,{margin:{top:20,right:20,bottom:20,left:20},data:y},t.createElement(a,{isAnimationActive:!1,dataKey:"uv",...e}),t.createElement(b,null),t.createElement(d,{dataKey:"name"}),t.createElement(g,null),t.createElement(h,null),t.createElement(u,null))),args:C(k),parameters:{docs:{description:{story:"You can tab to this chart. From there, you can use the arrow keys to navigate along the chart."}}}},o={render:()=>{const[e,f]=A.useState(!0);return t.createElement("div",null,t.createElement("button",{type:"button",onClick:()=>f(!e)},"Toggle Tooltip"),t.createElement(v,{width:500,height:400,data:y,margin:{top:10,right:30,left:0,bottom:0}},t.createElement(T,{strokeDasharray:"3 3"}),t.createElement(d,{dataKey:"name"}),t.createElement(g,null),t.createElement(a,{type:"monotone",dataKey:"uv",stackId:"1",stroke:"#8884d8",fill:"#8884d8"}),t.createElement(a,{type:"monotone",dataKey:"pv",stackId:"1",stroke:"#82ca9d",fill:"#82ca9d"}),t.createElement(a,{type:"monotone",dataKey:"amt",stackId:"1",stroke:"#ffc658",fill:"#ffc658"}),e&&t.createElement(h,null),t.createElement(u,null)))},args:{}};var i,n,s;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
