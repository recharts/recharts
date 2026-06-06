import{r as A,R as t}from"./iframe-BGobxEKW.js";import{g as f}from"./utils-ePvtT4un.js";import{C}from"./ComposedChartArgs-CgvqQqFx.js";import{C as l}from"./ComposedChart-DjHiGhAq.js";import{A as E}from"./AreaChart-B291IqAd.js";import{p as d}from"./Page-Cj8EiXz7.js";import{C as b}from"./CartesianGrid-9OYld4Av.js";import{X as g}from"./XAxis-BN4bg1E5.js";import{Y as h}from"./YAxis-DeGZa5pQ.js";import{A as a}from"./Area-BIsdpiY2.js";import{T as u}from"./Tooltip-IDbbWrV0.js";import{R as k}from"./zIndexSlice-Eu6i6ngN.js";import{L as v}from"./Legend-BLtjhTaF.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-BSKC20h7.js";import"./index-DIRQu93S.js";import"./index-BKAHzbDT.js";import"./index-DrKSi3Lf.js";import"./index-rlB0YW8A.js";import"./immer-xIHjc1iX.js";import"./get-HFqD6QO2.js";import"./renderedTicksSlice-Cvi-Ak0I.js";import"./axisSelectors-DVavIP4x.js";import"./d3-scale-CR1rssfZ.js";import"./string-B6fdYHAA.js";import"./resolveDefaultProps-By8puQcs.js";import"./isWellBehavedNumber-MDkpYIMl.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-M1doCtPT.js";import"./chartDataContext-CbiQTE76.js";import"./CategoricalChart-DpAQLfUl.js";import"./CartesianAxis-DURAvNcs.js";import"./Layer-CV9gulhQ.js";import"./Text-BJ-a4d_f.js";import"./DOMUtils-DfSC9jQB.js";import"./Label-DtowT6Ci.js";import"./ZIndexLayer-BPvrQw9D.js";import"./types-C3BGlWt6.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./AnimatedItems-D2o6LGbd.js";import"./useAnimationId-Q5RNzbJv.js";import"./ActivePoints-BB52StyY.js";import"./Dot-UipfwxJ_.js";import"./RegisterGraphicalItemId-DzMyHwfr.js";import"./GraphicalItemClipPath-CnUHFn7e.js";import"./SetGraphicalItem-DJfCNytO.js";import"./getRadiusAndStrokeWidthFromDot-Bt-t8NsX.js";import"./ActiveShapeUtils-CpkaJLOn.js";import"./Curve-DlsAp4d1.js";import"./step-DH6ooie3.js";import"./path-DyVhHtw_.js";import"./graphicalItemSelectors-CWW8cA9B.js";import"./useElementOffset-DNdtPX45.js";import"./uniqBy-BThSMkgd.js";import"./iteratee-DFK6dMUl.js";import"./Cross-C4Ll_PXx.js";import"./Rectangle-fEK7HoKB.js";import"./Sector-CkilBTnh.js";import"./Symbols-C06owXf-.js";import"./symbol-Bi7TCHx3.js";const Rt={component:l},r={render:e=>t.createElement(k,{width:"100%",height:300},t.createElement(l,{margin:{top:20,right:20,bottom:20,left:20},data:d},t.createElement(a,{isAnimationActive:!1,dataKey:"uv",...e}),t.createElement(v,null),t.createElement(g,{dataKey:"name"}),t.createElement(h,null),t.createElement(u,null))),args:f(C),parameters:{docs:{description:{story:"You can tab to this chart. From there, you can use the arrow keys to navigate along the chart."}}}},o={render:()=>{const[e,y]=A.useState(!0);return t.createElement("div",null,t.createElement("button",{type:"button",onClick:()=>y(!e)},"Toggle Tooltip"),t.createElement(E,{width:500,height:400,data:d,margin:{top:10,right:30,left:0,bottom:0}},t.createElement(b,{strokeDasharray:"3 3"}),t.createElement(g,{dataKey:"name"}),t.createElement(h,null),t.createElement(a,{type:"monotone",dataKey:"uv",stackId:"1",stroke:"#8884d8",fill:"#8884d8"}),t.createElement(a,{type:"monotone",dataKey:"pv",stackId:"1",stroke:"#82ca9d",fill:"#82ca9d"}),t.createElement(a,{type:"monotone",dataKey:"amt",stackId:"1",stroke:"#ffc658",fill:"#ffc658"}),e&&t.createElement(u,null)))},args:{}};var i,m,s;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
