import{e as t,r as A}from"./iframe-BJE3gYiz.js";import{g as C}from"./utils-ePvtT4un.js";import{C as k}from"./ComposedChartArgs-C2i17Xi4.js";import{C as l}from"./ComposedChart-CjmpYIzW.js";import{R as E}from"./arrayEqualityCheck-DOpOKb7k.js";import{A as a}from"./Area-BzJrHxJ9.js";import{L as b}from"./Legend-DeQPVjIj.js";import{X as d}from"./XAxis-CiUlidyy.js";import{Y as g}from"./YAxis-DFb5sVBj.js";import{T as h}from"./Tooltip-DvJ-I219.js";import{R as u}from"./RechartsHookInspector-CmJjyPOL.js";import{A as v}from"./AreaChart-BcEo294U.js";import{C as T}from"./CartesianGrid-IzZGbxwv.js";import{p as y}from"./Page-Cj8EiXz7.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-6YVSs0X2.js";import"./hooks-CzpWgTi2.js";import"./axisSelectors-BAfv6-Wm.js";import"./zIndexSlice-CPc0PYoJ.js";import"./resolveDefaultProps-BKNlGFt8.js";import"./PolarUtils-DdS5KPsI.js";import"./CartesianChart-Dvfq7kHx.js";import"./chartDataContext-dCefmzkT.js";import"./CategoricalChart-BCQDahMf.js";import"./Curve-9wsGsorR.js";import"./types-BgpWyLLK.js";import"./Layer-BpHZQDe5.js";import"./ReactUtils-DpOzmnGs.js";import"./Label-8Du7WhKH.js";import"./Text-CV7Ey6jK.js";import"./DOMUtils-DGjslG0U.js";import"./ZIndexLayer-PGry8EqE.js";import"./ActivePoints-B4GG4aUL.js";import"./Dot-ELwl5DRr.js";import"./RegisterGraphicalItemId-DDZY4GcH.js";import"./GraphicalItemClipPath-VPQqj0Oy.js";import"./SetGraphicalItem-Bs3LcTS6.js";import"./useAnimationId-xUHk75MJ.js";import"./getRadiusAndStrokeWidthFromDot-T6tgT4MC.js";import"./graphicalItemSelectors-SX_V_YVq.js";import"./Symbols-CA9SXzw3.js";import"./useElementOffset-AxHRwjYB.js";import"./iteratee-CDq5lI64.js";import"./CartesianAxis-DYQqdQ0S.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./Cross-B75I7rUJ.js";import"./Rectangle-oe8iNjEY.js";import"./Sector-D1swSw6R.js";import"./index-BZmliZtD.js";import"./ChartSizeDimensions-kmApRxRi.js";import"./OffsetShower-Cu7vEAUz.js";import"./PlotAreaShower-3gxA0MT2.js";const vt={component:l},r={render:e=>t.createElement(E,{width:"100%",height:300},t.createElement(l,{margin:{top:20,right:20,bottom:20,left:20},data:y},t.createElement(a,{isAnimationActive:!1,dataKey:"uv",...e}),t.createElement(b,null),t.createElement(d,{dataKey:"name"}),t.createElement(g,null),t.createElement(h,null),t.createElement(u,null))),args:C(k),parameters:{docs:{description:{story:"You can tab to this chart. From there, you can use the arrow keys to navigate along the chart."}}}},o={render:()=>{const[e,f]=A.useState(!0);return t.createElement("div",null,t.createElement("button",{type:"button",onClick:()=>f(!e)},"Toggle Tooltip"),t.createElement(v,{width:500,height:400,data:y,margin:{top:10,right:30,left:0,bottom:0}},t.createElement(T,{strokeDasharray:"3 3"}),t.createElement(d,{dataKey:"name"}),t.createElement(g,null),t.createElement(a,{type:"monotone",dataKey:"uv",stackId:"1",stroke:"#8884d8",fill:"#8884d8"}),t.createElement(a,{type:"monotone",dataKey:"pv",stackId:"1",stroke:"#82ca9d",fill:"#82ca9d"}),t.createElement(a,{type:"monotone",dataKey:"amt",stackId:"1",stroke:"#ffc658",fill:"#ffc658"}),e&&t.createElement(h,null),t.createElement(u,null)))},args:{}};var i,n,s;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
