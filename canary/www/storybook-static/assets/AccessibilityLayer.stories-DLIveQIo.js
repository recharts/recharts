import{r as A,R as t}from"./iframe-DILeTPtB.js";import{g as f}from"./utils-ePvtT4un.js";import{C}from"./ComposedChartArgs-CgvqQqFx.js";import{C as l}from"./ComposedChart-BoZ_CD1T.js";import{A as E}from"./AreaChart-CxICdttY.js";import{p as d}from"./Page-Cj8EiXz7.js";import{C as b}from"./CartesianGrid-DUiZQV-v.js";import{X as g}from"./XAxis-Bwnro3mN.js";import{Y as h}from"./YAxis-CISpCaOe.js";import{A as a}from"./Area-CuyrbfSt.js";import{T as u}from"./Tooltip-DCCDzLC0.js";import{R as k}from"./zIndexSlice-JhTumx9T.js";import{L as v}from"./Legend-BN9_ZKW0.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-CzFpnRvL.js";import"./index-Bb_kPu6Y.js";import"./index-CID3BdEk.js";import"./index-NDv3w53H.js";import"./index-CUbE2YyD.js";import"./throttle-CSfx3U2Q.js";import"./get-DJ3830uQ.js";import"./renderedTicksSlice-Ds2fOQ5P.js";import"./axisSelectors-BJN0i2Z4.js";import"./resolveDefaultProps--lUhC_MY.js";import"./isWellBehavedNumber-OeMbA9Vy.js";import"./d3-scale-C6hgYXhG.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-CU1CulZs.js";import"./chartDataContext-BAm5Wg7P.js";import"./CategoricalChart-ChRNm6Kp.js";import"./CartesianAxis-sqhBuaGO.js";import"./Layer-DqGeYGqQ.js";import"./Text-DNGNK59q.js";import"./DOMUtils-_37cMB0k.js";import"./Label-RUjb4LlC.js";import"./ZIndexLayer-DKm5_jWO.js";import"./types-0cBFLGxq.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./AnimatedItems-BB2N4cgm.js";import"./useAnimationId-oe-1YumM.js";import"./ActivePoints-BZxYxGPD.js";import"./Dot-j0bVABcw.js";import"./RegisterGraphicalItemId-CxyqVt25.js";import"./GraphicalItemClipPath-ElTOcYVI.js";import"./SetGraphicalItem-DVaXC3-E.js";import"./getRadiusAndStrokeWidthFromDot-Cp2-QPpj.js";import"./ActiveShapeUtils-CEry7zbZ.js";import"./Curve-BAtIGC1F.js";import"./step-DZcEBBZm.js";import"./path-DyVhHtw_.js";import"./graphicalItemSelectors-DfWYsBhB.js";import"./useElementOffset-CqP9UHOF.js";import"./uniqBy-AzisH7Oj.js";import"./iteratee-CzwrkfQ7.js";import"./Cross-ne17vnNJ.js";import"./Rectangle-B6-5Ey9v.js";import"./util-Dxo8gN5i.js";import"./Sector-C8V5mkCQ.js";import"./Symbols-CmeRWJgf.js";import"./symbol-DRpE_auN.js";const Rt={component:l},r={render:e=>t.createElement(k,{width:"100%",height:300},t.createElement(l,{margin:{top:20,right:20,bottom:20,left:20},data:d},t.createElement(a,{isAnimationActive:!1,dataKey:"uv",...e}),t.createElement(v,null),t.createElement(g,{dataKey:"name"}),t.createElement(h,null),t.createElement(u,null))),args:f(C),parameters:{docs:{description:{story:"You can tab to this chart. From there, you can use the arrow keys to navigate along the chart."}}}},o={render:()=>{const[e,y]=A.useState(!0);return t.createElement("div",null,t.createElement("button",{type:"button",onClick:()=>y(!e)},"Toggle Tooltip"),t.createElement(E,{width:500,height:400,data:d,margin:{top:10,right:30,left:0,bottom:0}},t.createElement(b,{strokeDasharray:"3 3"}),t.createElement(g,{dataKey:"name"}),t.createElement(h,null),t.createElement(a,{type:"monotone",dataKey:"uv",stackId:"1",stroke:"#8884d8",fill:"#8884d8"}),t.createElement(a,{type:"monotone",dataKey:"pv",stackId:"1",stroke:"#82ca9d",fill:"#82ca9d"}),t.createElement(a,{type:"monotone",dataKey:"amt",stackId:"1",stroke:"#ffc658",fill:"#ffc658"}),e&&t.createElement(u,null)))},args:{}};var i,m,s;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
