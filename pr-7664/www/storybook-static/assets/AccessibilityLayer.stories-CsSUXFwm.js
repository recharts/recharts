import{r as A,R as t}from"./iframe-BB2cSF8T.js";import{g as f}from"./utils-ePvtT4un.js";import{C}from"./ComposedChartArgs-CgvqQqFx.js";import{C as l}from"./ComposedChart-D7ONXqhe.js";import{A as E}from"./AreaChart-RAsoYfzV.js";import{p as d}from"./Page-Cj8EiXz7.js";import{C as b}from"./CartesianGrid-BkpWEDC_.js";import{X as g}from"./XAxis-DwBzx4b3.js";import{Y as h}from"./YAxis-CMkp761K.js";import{A as a}from"./Area-N_DUzB9P.js";import{T as u}from"./Tooltip-rc2r0gI0.js";import{R as k}from"./zIndexSlice-Ck0CRfK_.js";import{L as v}from"./Legend-Bg34nPWt.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-DkB_KEzo.js";import"./index-MTvadirX.js";import"./index-DyAmptVd.js";import"./index-EzV7mwgL.js";import"./index-DofPxVLY.js";import"./throttle-nMA59eYs.js";import"./get-C2VjdU0L.js";import"./axisSelectors-BurdOGu6.js";import"./resolveDefaultProps-DjeWZstQ.js";import"./isWellBehavedNumber-BQXiM-z-.js";import"./d3-scale-C3zxZmRj.js";import"./renderedTicksSlice-lUF_NPm1.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-ChdkOd-C.js";import"./chartDataContext-CB4jnkAv.js";import"./CategoricalChart-DAFEAISl.js";import"./CartesianAxis-BWqAGBTh.js";import"./Layer-LVpAC3_2.js";import"./Text-Bwx_fWQU.js";import"./DOMUtils-yFTvziLR.js";import"./useId-D4zb9cEW.js";import"./useBackwardsCompatibleTheme-g8RWGYmo.js";import"./Label-BZkQksct.js";import"./ZIndexLayer-DbM1bO0L.js";import"./types-ChWRaT57.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./AnimatedItems-0WotYsMt.js";import"./useAnimationId-C8wX-p7z.js";import"./ActivePoints-CuAhK7lR.js";import"./Dot-byNEGz8Q.js";import"./RegisterGraphicalItemId-Bts6fFM2.js";import"./GraphicalItemClipPath-CT1W7nLy.js";import"./SetGraphicalItem-Ct2uSDpP.js";import"./getRadiusAndStrokeWidthFromDot-eavX8tOz.js";import"./ActiveShapeUtils-Uvcq9QCX.js";import"./Curve-C11_GYZZ.js";import"./step-BWHrm9dE.js";import"./path-DyVhHtw_.js";import"./graphicalItemIdentity-CdZfZkJ-.js";import"./graphicalItemSelectors-mqpyqc4p.js";import"./useElementOffset-Mg-Nq6uP.js";import"./uniqBy-CkqXGP9K.js";import"./iteratee-DMriX-zr.js";import"./Cross-D7-z2vjD.js";import"./Rectangle-D-ZdRLCN.js";import"./util-Dxo8gN5i.js";import"./Sector-DR9-vfw9.js";import"./Symbols-CyMSTzZI.js";import"./symbol-D3j02ylc.js";const Ft={component:l},r={render:e=>t.createElement(k,{width:"100%",height:300},t.createElement(l,{margin:{top:20,right:20,bottom:20,left:20},data:d},t.createElement(a,{isAnimationActive:!1,dataKey:"uv",...e}),t.createElement(v,null),t.createElement(g,{dataKey:"name"}),t.createElement(h,null),t.createElement(u,null))),args:f(C),parameters:{docs:{description:{story:"You can tab to this chart. From there, you can use the arrow keys to navigate along the chart."}}}},o={render:()=>{const[e,y]=A.useState(!0);return t.createElement("div",null,t.createElement("button",{type:"button",onClick:()=>y(!e)},"Toggle Tooltip"),t.createElement(E,{width:500,height:400,data:d,margin:{top:10,right:30,left:0,bottom:0}},t.createElement(b,{strokeDasharray:"3 3"}),t.createElement(g,{dataKey:"name"}),t.createElement(h,null),t.createElement(a,{type:"monotone",dataKey:"uv",stackId:"1",stroke:"#8884d8",fill:"#8884d8"}),t.createElement(a,{type:"monotone",dataKey:"pv",stackId:"1",stroke:"#82ca9d",fill:"#82ca9d"}),t.createElement(a,{type:"monotone",dataKey:"amt",stackId:"1",stroke:"#ffc658",fill:"#ffc658"}),e&&t.createElement(u,null)))},args:{}};var i,m,s;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
}`,...(c=(p=o.parameters)==null?void 0:p.docs)==null?void 0:c.source}}};const Wt=["AreaChartWithAccessibilityLayer","AccessibleWithButton"];export{o as AccessibleWithButton,r as AreaChartWithAccessibilityLayer,Wt as __namedExportsOrder,Ft as default};
