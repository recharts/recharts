import{r as A,R as t}from"./iframe-Cz3m2SJ3.js";import{g as f}from"./utils-ePvtT4un.js";import{C}from"./ComposedChartArgs-CgvqQqFx.js";import{C as l}from"./ComposedChart-CSmCvL3U.js";import{A as E}from"./AreaChart-8KgjL_nS.js";import{p as d}from"./Page-Cj8EiXz7.js";import{C as b}from"./CartesianGrid-D6CVlZsH.js";import{X as g}from"./XAxis-BOtH_Bb_.js";import{Y as h}from"./YAxis-DcGNi3Zk.js";import{A as a}from"./Area-BPbPJKrW.js";import{T as u}from"./Tooltip-C9yhbHaY.js";import{R as k}from"./zIndexSlice-Cjh-3nYc.js";import{L as v}from"./Legend-DUVvpxnh.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-B4Ii8FQX.js";import"./index-BaDzCXFV.js";import"./index-CMdFAdtp.js";import"./index-Ch8SxpQ7.js";import"./index-NxrJrzZn.js";import"./immer-BpZE7kkB.js";import"./get-DnJGsTBL.js";import"./renderedTicksSlice-CFzmMv1J.js";import"./axisSelectors-kRjEmRJx.js";import"./d3-scale-WEKEQNVu.js";import"./resolveDefaultProps-C8QIhMpF.js";import"./isWellBehavedNumber-CDOyudGY.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-BLcm5KGH.js";import"./chartDataContext-BYln8BgM.js";import"./CategoricalChart-DoGmIe9w.js";import"./CartesianAxis-C3-vjNSw.js";import"./Layer-DT2BS3Fo.js";import"./Text-CM8vLpAR.js";import"./DOMUtils-DZThnrL0.js";import"./Label-DtW8Frf2.js";import"./ZIndexLayer-dXuwT3rZ.js";import"./types-CfBB8f9x.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./AnimatedItems-BHx4y2NH.js";import"./useAnimationId-BTiOYTQB.js";import"./ActivePoints-CgF4v4_S.js";import"./Dot-D0XFaE4d.js";import"./RegisterGraphicalItemId-CDGD75SL.js";import"./GraphicalItemClipPath-Bz4IuZP3.js";import"./SetGraphicalItem-Ci_nDVmD.js";import"./getRadiusAndStrokeWidthFromDot-C8BKdMCZ.js";import"./ActiveShapeUtils-CXFbPlV-.js";import"./Curve-Bwoz_RSs.js";import"./step-Cw3d9gls.js";import"./path-DyVhHtw_.js";import"./graphicalItemSelectors-R8m2abgh.js";import"./useElementOffset-DWoELxA5.js";import"./uniqBy-C-5jUlDv.js";import"./iteratee-BYbJoUdv.js";import"./Cross-DTqDEQzI.js";import"./Rectangle-pvDgbZGd.js";import"./util-Dxo8gN5i.js";import"./Sector-BXolgb6h.js";import"./Symbols-BFmTZdyG.js";import"./symbol-CIafXP9T.js";const Rt={component:l},r={render:e=>t.createElement(k,{width:"100%",height:300},t.createElement(l,{margin:{top:20,right:20,bottom:20,left:20},data:d},t.createElement(a,{isAnimationActive:!1,dataKey:"uv",...e}),t.createElement(v,null),t.createElement(g,{dataKey:"name"}),t.createElement(h,null),t.createElement(u,null))),args:f(C),parameters:{docs:{description:{story:"You can tab to this chart. From there, you can use the arrow keys to navigate along the chart."}}}},o={render:()=>{const[e,y]=A.useState(!0);return t.createElement("div",null,t.createElement("button",{type:"button",onClick:()=>y(!e)},"Toggle Tooltip"),t.createElement(E,{width:500,height:400,data:d,margin:{top:10,right:30,left:0,bottom:0}},t.createElement(b,{strokeDasharray:"3 3"}),t.createElement(g,{dataKey:"name"}),t.createElement(h,null),t.createElement(a,{type:"monotone",dataKey:"uv",stackId:"1",stroke:"#8884d8",fill:"#8884d8"}),t.createElement(a,{type:"monotone",dataKey:"pv",stackId:"1",stroke:"#82ca9d",fill:"#82ca9d"}),t.createElement(a,{type:"monotone",dataKey:"amt",stackId:"1",stroke:"#ffc658",fill:"#ffc658"}),e&&t.createElement(u,null)))},args:{}};var i,m,s;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
}`,...(c=(p=o.parameters)==null?void 0:p.docs)==null?void 0:c.source}}};const St=["AreaChartWithAccessibilityLayer","AccessibleWithButton"];export{o as AccessibleWithButton,r as AreaChartWithAccessibilityLayer,St as __namedExportsOrder,Rt as default};
