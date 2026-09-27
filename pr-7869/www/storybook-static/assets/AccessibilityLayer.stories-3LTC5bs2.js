import{r as A,R as t}from"./iframe-DjMXRMWw.js";import{g as f}from"./utils-ePvtT4un.js";import{C}from"./ComposedChartArgs-CZCIiHke.js";import{C as l}from"./ComposedChart-BWguOzjW.js";import{A as E}from"./AreaChart-CiRUI97m.js";import{p as d}from"./Page-Cj8EiXz7.js";import{C as b}from"./CartesianGrid-PpUdbw0t.js";import{X as g}from"./XAxis-CEqdRxfv.js";import{Y as h}from"./YAxis-CsW9B0iy.js";import{A as a}from"./Area-CUZlXnUw.js";import{T as u}from"./Tooltip-DMwQL-tp.js";import{R as k}from"./zIndexSlice-CtOSUbKS.js";import{L as v}from"./Legend-afF_4FYA.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-BnIn7gPv.js";import"./resolveDefaultProps-B1XIyHIw.js";import"./get-C2VjdU0L.js";import"./axisSelectors-CNz5a2R6.js";import"./throttle-inystY2z.js";import"./index-DVy8JuJj.js";import"./index-C8KOxsb8.js";import"./isWellBehavedNumber-umHPGaL1.js";import"./d3-scale-CRgYiiwr.js";import"./index-DYIYCqg3.js";import"./index-Bhr5x-9R.js";import"./renderedTicksSlice-DVXswGI9.js";import"./index-BD7yu4TT.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-CDSIXDAD.js";import"./chartDataContext-DOQrMEHc.js";import"./CategoricalChart-DvjYEnPS.js";import"./CartesianAxis-CyNRu8rC.js";import"./Layer-CXKDxib5.js";import"./Text-BAKQyfL2.js";import"./DOMUtils-C8lW23C1.js";import"./useId-_ZeDNFzq.js";import"./useBackwardsCompatibleTheme-nOUNGopJ.js";import"./Label-bBUf40Mc.js";import"./ZIndexLayer-BeupKQ39.js";import"./types-CHoZYlJ3.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./AnimatedItems-B8zijpSk.js";import"./useAnimationId-DqHnZ7Fe.js";import"./ActivePoints-D8eJWPdK.js";import"./Dot-DcNcFyGg.js";import"./RegisterGraphicalItemId-Dt04SWfb.js";import"./GraphicalItemClipPath-BWZ1AOYB.js";import"./SetGraphicalItem-7PkPViNi.js";import"./getRadiusAndStrokeWidthFromDot-D039ugpa.js";import"./ActiveShapeUtils-B380iXXR.js";import"./Curve-OU_i7PV7.js";import"./step-Cub6k3wO.js";import"./path-DyVhHtw_.js";import"./useGraphicalItemIdentity-CLXu1wVJ.js";import"./useElementOffset-jSBsXjkO.js";import"./uniqBy-l_xI2UHC.js";import"./iteratee-D1sHNf4H.js";import"./Cross-DCRf1ebt.js";import"./Rectangle-MaeOvePl.js";import"./util-Dxo8gN5i.js";import"./Sector-B2ibbG-s.js";import"./Symbols-D7EyCHsi.js";import"./symbol-CBruGsGe.js";const Ft={component:l},r={render:e=>t.createElement(k,{width:"100%",height:300},t.createElement(l,{margin:{top:20,right:20,bottom:20,left:20},data:d},t.createElement(a,{isAnimationActive:!1,dataKey:"uv",...e}),t.createElement(v,null),t.createElement(g,{dataKey:"name"}),t.createElement(h,null),t.createElement(u,null))),args:f(C),parameters:{docs:{description:{story:"You can tab to this chart. From there, you can use the arrow keys to navigate along the chart."}}}},o={render:()=>{const[e,y]=A.useState(!0);return t.createElement("div",null,t.createElement("button",{type:"button",onClick:()=>y(!e)},"Toggle Tooltip"),t.createElement(E,{width:500,height:400,data:d,margin:{top:10,right:30,left:0,bottom:0}},t.createElement(b,{strokeDasharray:"3 3"}),t.createElement(g,{dataKey:"name"}),t.createElement(h,null),t.createElement(a,{type:"monotone",dataKey:"uv",stackId:"1",stroke:"#8884d8",fill:"#8884d8"}),t.createElement(a,{type:"monotone",dataKey:"pv",stackId:"1",stroke:"#82ca9d",fill:"#82ca9d"}),t.createElement(a,{type:"monotone",dataKey:"amt",stackId:"1",stroke:"#ffc658",fill:"#ffc658"}),e&&t.createElement(u,null)))},args:{}},Wt=["AreaChartWithAccessibilityLayer","AccessibleWithButton"];var n,i,m;r.parameters={...r.parameters,docs:{...(n=r.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
