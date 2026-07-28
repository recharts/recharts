import{r as A,R as t}from"./iframe-Byz0CZgU.js";import{g as f}from"./utils-ePvtT4un.js";import{C}from"./ComposedChartArgs-CgvqQqFx.js";import{C as l}from"./ComposedChart-C88qarp6.js";import{A as E}from"./AreaChart-BgN2xiv6.js";import{p as d}from"./Page-Cj8EiXz7.js";import{C as b}from"./CartesianGrid-BUrM0Lzp.js";import{X as g}from"./XAxis-BUPL4hjC.js";import{Y as h}from"./YAxis-jlA8Ias5.js";import{A as a}from"./Area-DYAbeSRQ.js";import{T as u}from"./Tooltip-DSf6lPPV.js";import{R as k}from"./zIndexSlice-DotL-Jp7.js";import{L as v}from"./Legend-D2dToN1F.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-D5qdTAip.js";import"./index-CNmE48Wz.js";import"./index-D4FuUZjH.js";import"./index-CK-fZH2A.js";import"./index-CQCdoqal.js";import"./throttle-4aokm5Ko.js";import"./get-DJ3830uQ.js";import"./renderedTicksSlice-BW0ZnHiJ.js";import"./axisSelectors-CN4g76wg.js";import"./resolveDefaultProps-DuQSjIkO.js";import"./isWellBehavedNumber-B1YKzF79.js";import"./d3-scale-D3FDPfRZ.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-QxAb7wSw.js";import"./chartDataContext-E1G0KTyW.js";import"./CategoricalChart-Dqx0x7Kl.js";import"./CartesianAxis-B3F7THN1.js";import"./Layer-jJo0ut9m.js";import"./Text-DEkD8bId.js";import"./DOMUtils-DwTCLKyl.js";import"./Label-DuUl9C5P.js";import"./ZIndexLayer-DaxIl4jI.js";import"./types-DE0YJD6S.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./RechartsThemeContext-DfGqi-Ay.js";import"./isBuffer-Crkas5dz.js";import"./AnimatedItems-2XdTa_Uh.js";import"./useAnimationId-CqGGvgKC.js";import"./ActivePoints-CwZhWFk3.js";import"./Dot-B1fpIP2w.js";import"./RegisterGraphicalItemId-CPoQFzzX.js";import"./GraphicalItemClipPath-CC2ibiyE.js";import"./SetGraphicalItem-D0qKavYL.js";import"./getRadiusAndStrokeWidthFromDot-BTyL3OgJ.js";import"./ActiveShapeUtils-RF04AL4M.js";import"./Curve-BcJaCZSu.js";import"./step-Cb3pk4Rp.js";import"./path-DyVhHtw_.js";import"./graphicalItemSelectors-CtWClP3j.js";import"./useElementOffset-Dpa0V5po.js";import"./uniqBy-BOokmjAX.js";import"./iteratee-JxZPr5ba.js";import"./Cross-LlvlF_v1.js";import"./Rectangle-lPqfXVFD.js";import"./util-Dxo8gN5i.js";import"./Sector-CGH0r-5N.js";import"./Symbols-BVpfILPu.js";import"./symbol-CS8b5as0.js";const Yt={component:l},r={render:e=>t.createElement(k,{width:"100%",height:300},t.createElement(l,{margin:{top:20,right:20,bottom:20,left:20},data:d},t.createElement(a,{isAnimationActive:!1,dataKey:"uv",...e}),t.createElement(v,null),t.createElement(g,{dataKey:"name"}),t.createElement(h,null),t.createElement(u,null))),args:f(C),parameters:{docs:{description:{story:"You can tab to this chart. From there, you can use the arrow keys to navigate along the chart."}}}},o={render:()=>{const[e,y]=A.useState(!0);return t.createElement("div",null,t.createElement("button",{type:"button",onClick:()=>y(!e)},"Toggle Tooltip"),t.createElement(E,{width:500,height:400,data:d,margin:{top:10,right:30,left:0,bottom:0}},t.createElement(b,{strokeDasharray:"3 3"}),t.createElement(g,{dataKey:"name"}),t.createElement(h,null),t.createElement(a,{type:"monotone",dataKey:"uv",stackId:"1",stroke:"#8884d8",fill:"#8884d8"}),t.createElement(a,{type:"monotone",dataKey:"pv",stackId:"1",stroke:"#82ca9d",fill:"#82ca9d"}),t.createElement(a,{type:"monotone",dataKey:"amt",stackId:"1",stroke:"#ffc658",fill:"#ffc658"}),e&&t.createElement(u,null)))},args:{}};var i,m,s;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
}`,...(c=(p=o.parameters)==null?void 0:p.docs)==null?void 0:c.source}}};const Dt=["AreaChartWithAccessibilityLayer","AccessibleWithButton"];export{o as AccessibleWithButton,r as AreaChartWithAccessibilityLayer,Dt as __namedExportsOrder,Yt as default};
