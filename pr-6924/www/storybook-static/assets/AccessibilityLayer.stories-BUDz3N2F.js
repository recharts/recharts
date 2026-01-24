import{e as t,r as A}from"./iframe-BMCIaxKG.js";import{g as C}from"./utils-ePvtT4un.js";import{C as k}from"./ComposedChartArgs-Cw5qin5N.js";import{C as l}from"./ComposedChart-BiUrjWP0.js";import{R as E}from"./arrayEqualityCheck--GVOH9-X.js";import{A as a}from"./Area-BaPv58WZ.js";import{L as b}from"./Legend-DFnGiCNO.js";import{X as d}from"./XAxis-CQh89uUR.js";import{Y as g}from"./YAxis-DfmH9Dom.js";import{T as h}from"./Tooltip-CGifnB1H.js";import{R as u}from"./RechartsHookInspector-BEE5VJHB.js";import{A as v}from"./AreaChart-N7Tagatn.js";import{C as T}from"./CartesianGrid-DT41IuTf.js";import{p as y}from"./Page-Cj8EiXz7.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-Bb1gDQXi.js";import"./hooks-DebnH94a.js";import"./axisSelectors-cgl3VJbu.js";import"./zIndexSlice-B9Z5B7ke.js";import"./resolveDefaultProps-DYzg8zSB.js";import"./PolarUtils-DdS5KPsI.js";import"./CartesianChart-B-ZCTtvW.js";import"./chartDataContext-oBen9I8F.js";import"./CategoricalChart-epx7zaIT.js";import"./Curve-B-WNVokC.js";import"./types-CjLOz-vL.js";import"./Layer-MWXbZbYh.js";import"./ReactUtils-5tDB8KCJ.js";import"./Label-DX5r6J7L.js";import"./Text-C3pNOBoN.js";import"./DOMUtils-Bqla5JdC.js";import"./ZIndexLayer-D3DglK0F.js";import"./ActivePoints-3VFSNx0Z.js";import"./Dot-Bk1pRUj2.js";import"./RegisterGraphicalItemId-oN7HBHom.js";import"./GraphicalItemClipPath-B2ari5YW.js";import"./SetGraphicalItem-CcB6KXss.js";import"./useAnimationId-BmU-cqjD.js";import"./getRadiusAndStrokeWidthFromDot-BdARBz_p.js";import"./graphicalItemSelectors-Doxgifoh.js";import"./Symbols-DwSHOnga.js";import"./useElementOffset-CqP1o4V0.js";import"./iteratee-C2T4gNsh.js";import"./CartesianAxis-BYfW_8DA.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./Cross-CMeEtOq-.js";import"./Rectangle-B1cropaK.js";import"./Sector-DluXzhdl.js";import"./index-a6yAW-au.js";import"./ChartSizeDimensions-B-pVWfha.js";import"./OffsetShower--s29U8Jg.js";import"./PlotAreaShower-CsN0ehbx.js";const vt={component:l},r={render:e=>t.createElement(E,{width:"100%",height:300},t.createElement(l,{margin:{top:20,right:20,bottom:20,left:20},data:y},t.createElement(a,{isAnimationActive:!1,dataKey:"uv",...e}),t.createElement(b,null),t.createElement(d,{dataKey:"name"}),t.createElement(g,null),t.createElement(h,null),t.createElement(u,null))),args:C(k),parameters:{docs:{description:{story:"You can tab to this chart. From there, you can use the arrow keys to navigate along the chart."}}}},o={render:()=>{const[e,f]=A.useState(!0);return t.createElement("div",null,t.createElement("button",{type:"button",onClick:()=>f(!e)},"Toggle Tooltip"),t.createElement(v,{width:500,height:400,data:y,margin:{top:10,right:30,left:0,bottom:0}},t.createElement(T,{strokeDasharray:"3 3"}),t.createElement(d,{dataKey:"name"}),t.createElement(g,null),t.createElement(a,{type:"monotone",dataKey:"uv",stackId:"1",stroke:"#8884d8",fill:"#8884d8"}),t.createElement(a,{type:"monotone",dataKey:"pv",stackId:"1",stroke:"#82ca9d",fill:"#82ca9d"}),t.createElement(a,{type:"monotone",dataKey:"amt",stackId:"1",stroke:"#ffc658",fill:"#ffc658"}),e&&t.createElement(h,null),t.createElement(u,null)))},args:{}};var i,n,s;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
