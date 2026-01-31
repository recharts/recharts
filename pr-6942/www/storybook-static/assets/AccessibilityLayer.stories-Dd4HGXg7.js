import{e as t,r as A}from"./iframe-BsuuU2ac.js";import{g as C}from"./utils-ePvtT4un.js";import{C as k}from"./ComposedChartArgs-vbwTFmCk.js";import{C as l}from"./ComposedChart-CPJ4puZ0.js";import{R as E}from"./arrayEqualityCheck-BjO3Er2E.js";import{A as a}from"./Area-CcDVrUOz.js";import{L as b}from"./Legend-BeaGcWNT.js";import{X as d}from"./XAxis-CsIw1iGz.js";import{Y as g}from"./YAxis-BTKigBpk.js";import{T as h}from"./Tooltip-Cku2Xirq.js";import{R as u}from"./RechartsHookInspector-BGkLBTS7.js";import{A as v}from"./AreaChart-DrriOLtg.js";import{C as T}from"./CartesianGrid-CmOXpYee.js";import{p as y}from"./Page-Cj8EiXz7.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-BH32z_Kk.js";import"./hooks-k3ZaWThG.js";import"./axisSelectors-jwf3irWh.js";import"./zIndexSlice-Bir2u6Kx.js";import"./resolveDefaultProps-saNtUn-1.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-CfWYFhMG.js";import"./chartDataContext-C2F3ksi1.js";import"./CategoricalChart-nOJreIrp.js";import"./Curve-C6_JEQin.js";import"./types-DmRJx57M.js";import"./Layer-DM57kvBs.js";import"./ReactUtils-D7uw0LSD.js";import"./Label-DXc_GGWc.js";import"./Text-Bg2YicUS.js";import"./DOMUtils-oSkPNF4I.js";import"./ZIndexLayer-DAoCiEXG.js";import"./ActivePoints-C8qSTMe2.js";import"./Dot-C89l6B9O.js";import"./RegisterGraphicalItemId-DrCtvza9.js";import"./GraphicalItemClipPath-CSReekSQ.js";import"./SetGraphicalItem-asJ_Ikn_.js";import"./useAnimationId-WGg8-jRM.js";import"./getRadiusAndStrokeWidthFromDot-Dsdre15A.js";import"./graphicalItemSelectors-BbeNwNaj.js";import"./Symbols-CcIdb3bs.js";import"./useElementOffset-HAHdxBZO.js";import"./iteratee-DhvHonxm.js";import"./CartesianAxis-CECRCtr2.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./Cross-y83n1l5B.js";import"./Rectangle-D5Cka5hS.js";import"./Sector-CZIlwJfI.js";import"./index-BhAql3N3.js";import"./ChartSizeDimensions-DrD8f1Su.js";import"./OffsetShower-BRn6lv3J.js";import"./PlotAreaShower-C1V0JDKa.js";const vt={component:l},r={render:e=>t.createElement(E,{width:"100%",height:300},t.createElement(l,{margin:{top:20,right:20,bottom:20,left:20},data:y},t.createElement(a,{isAnimationActive:!1,dataKey:"uv",...e}),t.createElement(b,null),t.createElement(d,{dataKey:"name"}),t.createElement(g,null),t.createElement(h,null),t.createElement(u,null))),args:C(k),parameters:{docs:{description:{story:"You can tab to this chart. From there, you can use the arrow keys to navigate along the chart."}}}},o={render:()=>{const[e,f]=A.useState(!0);return t.createElement("div",null,t.createElement("button",{type:"button",onClick:()=>f(!e)},"Toggle Tooltip"),t.createElement(v,{width:500,height:400,data:y,margin:{top:10,right:30,left:0,bottom:0}},t.createElement(T,{strokeDasharray:"3 3"}),t.createElement(d,{dataKey:"name"}),t.createElement(g,null),t.createElement(a,{type:"monotone",dataKey:"uv",stackId:"1",stroke:"#8884d8",fill:"#8884d8"}),t.createElement(a,{type:"monotone",dataKey:"pv",stackId:"1",stroke:"#82ca9d",fill:"#82ca9d"}),t.createElement(a,{type:"monotone",dataKey:"amt",stackId:"1",stroke:"#ffc658",fill:"#ffc658"}),e&&t.createElement(h,null),t.createElement(u,null)))},args:{}};var i,n,s;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
