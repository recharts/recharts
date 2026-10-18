import{r as A,R as t}from"./iframe-Cs9VT9SX.js";import{g as f}from"./utils-ePvtT4un.js";import{C}from"./ComposedChartArgs-CZCIiHke.js";import{C as l}from"./ComposedChart-CBGO3KHX.js";import{A as E}from"./AreaChart-de0d8xAj.js";import{p as d}from"./Page-Cj8EiXz7.js";import{C as b}from"./CartesianGrid-CRWRpzt9.js";import{X as g}from"./XAxis-ZXwUP9Th.js";import{Y as h}from"./YAxis-vNX_kYng.js";import{A as a}from"./Area-BfIZZxI2.js";import{T as u}from"./Tooltip-DBB7x4xM.js";import{R as k}from"./zIndexSlice-BdtHtScS.js";import{L as v}from"./Legend-CdO2FU6H.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-C5YZJO9f.js";import"./resolveDefaultProps-BxA5_OWP.js";import"./get-cF5BDHN6.js";import"./axisSelectors-gCAVib4T.js";import"./throttle-DO7D3GPa.js";import"./index-xMFBNBU3.js";import"./index-Ccb8EBp4.js";import"./isWellBehavedNumber-CVBN0S-y.js";import"./d3-scale-B33rCp3E.js";import"./index-Co8WVvE-.js";import"./index-Cjg5XPAC.js";import"./renderedTicksSlice-CLNxhMWR.js";import"./index-iO7lXoIC.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-BoDGj9iP.js";import"./chartDataContext-neHnT-17.js";import"./CategoricalChart-D0wW8A9V.js";import"./CartesianAxis-CkxFyA6u.js";import"./Layer-DyApFY3D.js";import"./Text-NwXvdk36.js";import"./pageBackground-Oh548Gvn.js";import"./useId-pJJcLuGB.js";import"./useBackwardsCompatibleTheme-BWsBUWUZ.js";import"./Label-CtA6iQna.js";import"./ZIndexLayer-6baMIq5x.js";import"./types-BderJbki.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./activeStyles-CIXVWOxz.js";import"./useAnimationId-1jmYsVjg.js";import"./dataEntryStyles-Bogdu71F.js";import"./ActivePoints-zHs9ig4S.js";import"./Dot-D9tJW78F.js";import"./GraphicalItemClipPath-BhbyQIog.js";import"./SetGraphicalItem-Dqm-RVU6.js";import"./getRadiusAndStrokeWidthFromDot-CqwHrRi4.js";import"./ActiveShapeUtils-DP1vY-Az.js";import"./Curve-C5hSs_Mg.js";import"./step-C0n0sZGY.js";import"./path-DyVhHtw_.js";import"./useEffectiveDataKey-KP9u_G2c.js";import"./useElementOffset-Dsr0kKKf.js";import"./uniqBy-0hLfVEhM.js";import"./iteratee-DMBh3gc4.js";import"./isArguments-yB-y1yaH.js";import"./Cross-D-h4cxnd.js";import"./Rectangle-B7LH8v7V.js";import"./util-Dxo8gN5i.js";import"./Sector-D65AispO.js";import"./Symbols-DxmnmwzS.js";import"./symbol-in5fS4rD.js";const Wt={component:l},r={render:e=>t.createElement(k,{width:"100%",height:300},t.createElement(l,{margin:{top:20,right:20,bottom:20,left:20},data:d},t.createElement(a,{isAnimationActive:!1,dataKey:"uv",...e}),t.createElement(v,null),t.createElement(g,{dataKey:"name"}),t.createElement(h,null),t.createElement(u,null))),args:f(C),parameters:{docs:{description:{story:"You can tab to this chart. From there, you can use the arrow keys to navigate along the chart."}}}},o={render:()=>{const[e,y]=A.useState(!0);return t.createElement("div",null,t.createElement("button",{type:"button",onClick:()=>y(!e)},"Toggle Tooltip"),t.createElement(E,{width:500,height:400,data:d,margin:{top:10,right:30,left:0,bottom:0}},t.createElement(b,{strokeDasharray:"3 3"}),t.createElement(g,{dataKey:"name"}),t.createElement(h,null),t.createElement(a,{type:"monotone",dataKey:"uv",stackId:"1",stroke:"#8884d8",fill:"#8884d8"}),t.createElement(a,{type:"monotone",dataKey:"pv",stackId:"1",stroke:"#82ca9d",fill:"#82ca9d"}),t.createElement(a,{type:"monotone",dataKey:"amt",stackId:"1",stroke:"#ffc658",fill:"#ffc658"}),e&&t.createElement(u,null)))},args:{}},Xt=["AreaChartWithAccessibilityLayer","AccessibleWithButton"];var i,n,m;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
}`,...(m=(n=r.parameters)==null?void 0:n.docs)==null?void 0:m.source}}};var s,p,c;o.parameters={...o.parameters,docs:{...(s=o.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
}`,...(c=(p=o.parameters)==null?void 0:p.docs)==null?void 0:c.source}}};export{o as AccessibleWithButton,r as AreaChartWithAccessibilityLayer,Xt as __namedExportsOrder,Wt as default};
