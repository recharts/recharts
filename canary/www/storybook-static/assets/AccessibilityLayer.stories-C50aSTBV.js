import{r as A,R as t}from"./iframe-DLS25dHQ.js";import{g as f}from"./utils-ePvtT4un.js";import{C}from"./ComposedChartArgs-CgvqQqFx.js";import{C as l}from"./ComposedChart-3ReoGfqO.js";import{A as E}from"./AreaChart-_TlrfH93.js";import{p as d}from"./Page-Cj8EiXz7.js";import{C as b}from"./CartesianGrid-DNrP8kgM.js";import{X as g}from"./XAxis-ZvceRVhD.js";import{Y as h}from"./YAxis-BYgagr7S.js";import{A as a}from"./Area-CCdXmiix.js";import{T as u}from"./Tooltip-B2aShKax.js";import{R as k}from"./zIndexSlice-l2YZmfJm.js";import{L as v}from"./Legend-CMw0PR8-.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-B_GPZUKV.js";import"./index-CfSfkQYu.js";import"./index-CbCT7aty.js";import"./index-ByCW5xID.js";import"./index-Dq9FB6TB.js";import"./throttle-Hx_xB1Pu.js";import"./get-C2VjdU0L.js";import"./axisSelectors-L-RJvPIw.js";import"./resolveDefaultProps-C31rpRZv.js";import"./isWellBehavedNumber-oc6n5G8D.js";import"./d3-scale-BGUeNoA2.js";import"./renderedTicksSlice-CvT_UYhE.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-D13Xcxp2.js";import"./chartDataContext-D70kksUU.js";import"./CategoricalChart-C6ulcIic.js";import"./CartesianAxis-ByLvjEbn.js";import"./Layer-DThhki4j.js";import"./Text-DoJs4GjF.js";import"./DOMUtils-B4V2lSh1.js";import"./Label-Bs5nvBdN.js";import"./ZIndexLayer-CVnRsL__.js";import"./types-BNikxk5Q.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./RechartsThemeContext-DQBBH2gy.js";import"./isBuffer-BG75eWKN.js";import"./AnimatedItems-C-FlKGX8.js";import"./useAnimationId-BwYkYmq-.js";import"./ActivePoints-CxfQZGg2.js";import"./Dot-DrvJzzI1.js";import"./RegisterGraphicalItemId-DMMtsE5T.js";import"./graphicalItemIdentity-COzJlxtu.js";import"./SetGraphicalItem-B5zc41tl.js";import"./getRadiusAndStrokeWidthFromDot-BcCKN7uZ.js";import"./ActiveShapeUtils-CZHkl0hJ.js";import"./Curve-D-nKyO-x.js";import"./step-CSyDwz3m.js";import"./path-DyVhHtw_.js";import"./graphicalItemSelectors-Ca1NR3-_.js";import"./useElementOffset-DOuGmOFv.js";import"./uniqBy-CkpvLjjt.js";import"./iteratee-BC57QjIY.js";import"./Cross-DTxuUisw.js";import"./Rectangle-DyGyBKmJ.js";import"./util-Dxo8gN5i.js";import"./Sector-D2pai5wO.js";import"./Symbols-BghUztBR.js";import"./symbol-DJn7TpAb.js";const Yt={component:l},r={render:e=>t.createElement(k,{width:"100%",height:300},t.createElement(l,{margin:{top:20,right:20,bottom:20,left:20},data:d},t.createElement(a,{isAnimationActive:!1,dataKey:"uv",...e}),t.createElement(v,null),t.createElement(g,{dataKey:"name"}),t.createElement(h,null),t.createElement(u,null))),args:f(C),parameters:{docs:{description:{story:"You can tab to this chart. From there, you can use the arrow keys to navigate along the chart."}}}},o={render:()=>{const[e,y]=A.useState(!0);return t.createElement("div",null,t.createElement("button",{type:"button",onClick:()=>y(!e)},"Toggle Tooltip"),t.createElement(E,{width:500,height:400,data:d,margin:{top:10,right:30,left:0,bottom:0}},t.createElement(b,{strokeDasharray:"3 3"}),t.createElement(g,{dataKey:"name"}),t.createElement(h,null),t.createElement(a,{type:"monotone",dataKey:"uv",stackId:"1",stroke:"#8884d8",fill:"#8884d8"}),t.createElement(a,{type:"monotone",dataKey:"pv",stackId:"1",stroke:"#82ca9d",fill:"#82ca9d"}),t.createElement(a,{type:"monotone",dataKey:"amt",stackId:"1",stroke:"#ffc658",fill:"#ffc658"}),e&&t.createElement(u,null)))},args:{}};var i,m,s;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
