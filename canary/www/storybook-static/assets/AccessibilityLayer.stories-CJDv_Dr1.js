import{r as A,R as t}from"./iframe-CWlxxFHy.js";import{g as f}from"./utils-ePvtT4un.js";import{C}from"./ComposedChartArgs-CZCIiHke.js";import{C as l}from"./ComposedChart-euduWCYe.js";import{A as E}from"./AreaChart-B4SJzP8B.js";import{p as d}from"./Page-Cj8EiXz7.js";import{C as b}from"./CartesianGrid-B69Jsf7O.js";import{X as g}from"./XAxis-CaG1n6yG.js";import{Y as h}from"./YAxis-DLav1J7f.js";import{A as a}from"./Area-1Rd9v__c.js";import{T as u}from"./Tooltip-CwU5-Ii7.js";import{R as k}from"./zIndexSlice-eChv8v5o.js";import{L as v}from"./Legend-C22flD7Y.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-B211gnQK.js";import"./resolveDefaultProps-CVJCZaPv.js";import"./get-C2VjdU0L.js";import"./axisSelectors-CY4U4PmW.js";import"./throttle-Cuwp_Om4.js";import"./index-COS8QMAe.js";import"./index-BmRJ-b8E.js";import"./isWellBehavedNumber-ChXHiBih.js";import"./d3-scale-OLXd5h8I.js";import"./index-CVuc-u2_.js";import"./index-uNGw9-ET.js";import"./renderedTicksSlice-BfstiInC.js";import"./index-C1WwnpLj.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-3sXmRDbR.js";import"./chartDataContext-tJUp4txc.js";import"./CategoricalChart-D5zBV6NM.js";import"./CartesianAxis-I-oV71yY.js";import"./Layer-bfSBtv71.js";import"./Text-th2Jn0HQ.js";import"./DOMUtils-Cr7AYV1x.js";import"./useId-pWQDKLmz.js";import"./useBackwardsCompatibleTheme-DcL_98G3.js";import"./Label-DN7T9GpD.js";import"./ZIndexLayer-C0s9Ohbn.js";import"./types-CjEkwpQR.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./AnimatedItems-mLTl2k4L.js";import"./useAnimationId-BVaZGbnp.js";import"./ActivePoints-DyM9bM1H.js";import"./Dot-CVl6koMA.js";import"./RegisterGraphicalItemId-C2KKr6Fw.js";import"./GraphicalItemClipPath-BZhOYfMs.js";import"./SetGraphicalItem-tjuShIDU.js";import"./getRadiusAndStrokeWidthFromDot-DJ40vw26.js";import"./ActiveShapeUtils-CN9JJwYa.js";import"./Curve-DlnhjhNv.js";import"./step-ClKKiZTa.js";import"./path-DyVhHtw_.js";import"./useGraphicalItemIdentity-BaE4xim7.js";import"./useElementOffset-CpS3sFWC.js";import"./uniqBy-C1aAohnG.js";import"./iteratee-CYY7QzLS.js";import"./Cross-DAaEgFzG.js";import"./Rectangle-F4SI3wJr.js";import"./util-Dxo8gN5i.js";import"./Sector-DYABfBoe.js";import"./Symbols-rlV4L3Ga.js";import"./symbol-ECeymSrI.js";const Ft={component:l},r={render:e=>t.createElement(k,{width:"100%",height:300},t.createElement(l,{margin:{top:20,right:20,bottom:20,left:20},data:d},t.createElement(a,{isAnimationActive:!1,dataKey:"uv",...e}),t.createElement(v,null),t.createElement(g,{dataKey:"name"}),t.createElement(h,null),t.createElement(u,null))),args:f(C),parameters:{docs:{description:{story:"You can tab to this chart. From there, you can use the arrow keys to navigate along the chart."}}}},o={render:()=>{const[e,y]=A.useState(!0);return t.createElement("div",null,t.createElement("button",{type:"button",onClick:()=>y(!e)},"Toggle Tooltip"),t.createElement(E,{width:500,height:400,data:d,margin:{top:10,right:30,left:0,bottom:0}},t.createElement(b,{strokeDasharray:"3 3"}),t.createElement(g,{dataKey:"name"}),t.createElement(h,null),t.createElement(a,{type:"monotone",dataKey:"uv",stackId:"1",stroke:"#8884d8",fill:"#8884d8"}),t.createElement(a,{type:"monotone",dataKey:"pv",stackId:"1",stroke:"#82ca9d",fill:"#82ca9d"}),t.createElement(a,{type:"monotone",dataKey:"amt",stackId:"1",stroke:"#ffc658",fill:"#ffc658"}),e&&t.createElement(u,null)))},args:{}},Wt=["AreaChartWithAccessibilityLayer","AccessibleWithButton"];var n,i,m;r.parameters={...r.parameters,docs:{...(n=r.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
}`,...(m=(i=r.parameters)==null?void 0:i.docs)==null?void 0:m.source}}};var s,p,c;o.parameters={...o.parameters,docs:{...(s=o.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
}`,...(c=(p=o.parameters)==null?void 0:p.docs)==null?void 0:c.source}}};export{o as AccessibleWithButton,r as AreaChartWithAccessibilityLayer,Wt as __namedExportsOrder,Ft as default};
