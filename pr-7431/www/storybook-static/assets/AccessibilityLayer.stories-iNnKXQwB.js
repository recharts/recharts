import{r as A,R as t}from"./iframe-CuVm1Ncb.js";import{g as f}from"./utils-ePvtT4un.js";import{C}from"./ComposedChartArgs-CgvqQqFx.js";import{C as l}from"./ComposedChart-Jqs4ulRL.js";import{A as E}from"./AreaChart-C8MVXY5U.js";import{p as d}from"./Page-Cj8EiXz7.js";import{C as b}from"./CartesianGrid-C3fOygfX.js";import{X as g}from"./XAxis-JtvtAXXy.js";import{Y as h}from"./YAxis-BIy4mhNn.js";import{A as a}from"./Area-BsQCDNsO.js";import{T as u}from"./Tooltip-DBLd4KtR.js";import{R as k}from"./zIndexSlice-BZOjM71k.js";import{L as v}from"./Legend-imVRhXb7.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-DT5GAsrf.js";import"./index-2Eta-fPv.js";import"./index-CIKLroCx.js";import"./index-DS-VAELW.js";import"./index-ezvYWD77.js";import"./immer-qI_Lx1cT.js";import"./get-mh9AHsYH.js";import"./renderedTicksSlice-Cq4cXI7l.js";import"./axisSelectors-BqRugZOv.js";import"./d3-scale-DhSEg32F.js";import"./string-B6fdYHAA.js";import"./resolveDefaultProps-DXODA9k0.js";import"./isWellBehavedNumber-Cs5mv3EE.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-BLDYaQ2w.js";import"./chartDataContext-CM4lnGiM.js";import"./CategoricalChart-BJmxSqzB.js";import"./CartesianAxis-COqdKxvc.js";import"./Layer-CQ8j0Llf.js";import"./Text-LNz2FUpv.js";import"./DOMUtils-C4aU1diQ.js";import"./Label-CyUXMRAJ.js";import"./ZIndexLayer-HG2Tdc6L.js";import"./types-DjM_wMjP.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./AnimatedItems-D-7ryyyq.js";import"./useAnimationId-DGicD8fh.js";import"./ActivePoints-rNykwE9f.js";import"./Dot-Dt98x6dx.js";import"./RegisterGraphicalItemId-Ji3BKNxF.js";import"./GraphicalItemClipPath-BofgE1jJ.js";import"./SetGraphicalItem-DDjVRXYZ.js";import"./getRadiusAndStrokeWidthFromDot-DDhP_K7H.js";import"./ActiveShapeUtils-ClNcGcwL.js";import"./Curve-CK2N7RgZ.js";import"./step-BGKZVTtP.js";import"./path-DyVhHtw_.js";import"./graphicalItemSelectors-C83oLtwe.js";import"./useElementOffset-WvcCUeh1.js";import"./uniqBy-DQgue2C1.js";import"./iteratee-CrZQWday.js";import"./Cross-DTx7UCxu.js";import"./Rectangle-fz3Cheh_.js";import"./Sector-CAZA4MrW.js";import"./Symbols-Cc3MwC4A.js";import"./symbol-DsUPOcEP.js";const Rt={component:l},r={render:e=>t.createElement(k,{width:"100%",height:300},t.createElement(l,{margin:{top:20,right:20,bottom:20,left:20},data:d},t.createElement(a,{isAnimationActive:!1,dataKey:"uv",...e}),t.createElement(v,null),t.createElement(g,{dataKey:"name"}),t.createElement(h,null),t.createElement(u,null))),args:f(C),parameters:{docs:{description:{story:"You can tab to this chart. From there, you can use the arrow keys to navigate along the chart."}}}},o={render:()=>{const[e,y]=A.useState(!0);return t.createElement("div",null,t.createElement("button",{type:"button",onClick:()=>y(!e)},"Toggle Tooltip"),t.createElement(E,{width:500,height:400,data:d,margin:{top:10,right:30,left:0,bottom:0}},t.createElement(b,{strokeDasharray:"3 3"}),t.createElement(g,{dataKey:"name"}),t.createElement(h,null),t.createElement(a,{type:"monotone",dataKey:"uv",stackId:"1",stroke:"#8884d8",fill:"#8884d8"}),t.createElement(a,{type:"monotone",dataKey:"pv",stackId:"1",stroke:"#82ca9d",fill:"#82ca9d"}),t.createElement(a,{type:"monotone",dataKey:"amt",stackId:"1",stroke:"#ffc658",fill:"#ffc658"}),e&&t.createElement(u,null)))},args:{}};var i,m,s;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
