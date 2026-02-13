import{e as t,r as A}from"./iframe-8rINPBCK.js";import{g as C}from"./utils-ePvtT4un.js";import{C as k}from"./ComposedChartArgs-vbwTFmCk.js";import{C as l}from"./ComposedChart-Uze9vmcd.js";import{R as E}from"./arrayEqualityCheck-C3wBHH11.js";import{A as a}from"./Area-BQaqNlPw.js";import{L as b}from"./Legend-6K_8fDBA.js";import{X as d}from"./XAxis-rjkohJgP.js";import{Y as g}from"./YAxis-CTYabjHl.js";import{T as h}from"./Tooltip-C0vCUnAp.js";import{R as u}from"./RechartsHookInspector-DhGNdH08.js";import{A as v}from"./AreaChart-BR_YPKKT.js";import{C as T}from"./CartesianGrid-jtKOKpn1.js";import{p as y}from"./Page-Cj8EiXz7.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-C_hkcN4D.js";import"./hooks-Bk__qHm-.js";import"./axisSelectors-CvWz5XTo.js";import"./zIndexSlice-DaWAVY1S.js";import"./resolveDefaultProps-wjmL_qr9.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-BO1mb6Fl.js";import"./chartDataContext-Djz4dVa4.js";import"./CategoricalChart-_BatnBQS.js";import"./Curve-D7sQ6QWi.js";import"./types-BtRlzhwr.js";import"./Layer-rS2qKox4.js";import"./ReactUtils-BygGLMXM.js";import"./Label-CPR5zbup.js";import"./Text-aD2aJQms.js";import"./DOMUtils-CWnqia8Q.js";import"./ZIndexLayer-BIlvRP3G.js";import"./ActivePoints-BLBDxNan.js";import"./Dot-DDl1biMb.js";import"./RegisterGraphicalItemId-BjvKjhdQ.js";import"./GraphicalItemClipPath-BLYpZTZk.js";import"./SetGraphicalItem-DdHorGvs.js";import"./useAnimationId-D141hJYN.js";import"./getRadiusAndStrokeWidthFromDot-K8DspZJi.js";import"./graphicalItemSelectors-eI3_Fu9E.js";import"./Symbols-CLShZ5Ps.js";import"./useElementOffset-XeKITz-u.js";import"./iteratee-CK2LdAr9.js";import"./CartesianAxis-DTB3wekJ.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./Cross-jTFVIBga.js";import"./Rectangle-CeeZo8YN.js";import"./Sector-C71MUP7Q.js";import"./index--Y6JWCN_.js";import"./ChartSizeDimensions-CAkoMsi5.js";import"./OffsetShower-CYXSrIBv.js";import"./PlotAreaShower-PTRY2LvG.js";const vt={component:l},r={render:e=>t.createElement(E,{width:"100%",height:300},t.createElement(l,{margin:{top:20,right:20,bottom:20,left:20},data:y},t.createElement(a,{isAnimationActive:!1,dataKey:"uv",...e}),t.createElement(b,null),t.createElement(d,{dataKey:"name"}),t.createElement(g,null),t.createElement(h,null),t.createElement(u,null))),args:C(k),parameters:{docs:{description:{story:"You can tab to this chart. From there, you can use the arrow keys to navigate along the chart."}}}},o={render:()=>{const[e,f]=A.useState(!0);return t.createElement("div",null,t.createElement("button",{type:"button",onClick:()=>f(!e)},"Toggle Tooltip"),t.createElement(v,{width:500,height:400,data:y,margin:{top:10,right:30,left:0,bottom:0}},t.createElement(T,{strokeDasharray:"3 3"}),t.createElement(d,{dataKey:"name"}),t.createElement(g,null),t.createElement(a,{type:"monotone",dataKey:"uv",stackId:"1",stroke:"#8884d8",fill:"#8884d8"}),t.createElement(a,{type:"monotone",dataKey:"pv",stackId:"1",stroke:"#82ca9d",fill:"#82ca9d"}),t.createElement(a,{type:"monotone",dataKey:"amt",stackId:"1",stroke:"#ffc658",fill:"#ffc658"}),e&&t.createElement(h,null),t.createElement(u,null)))},args:{}};var i,n,s;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
