import{r as A,R as t}from"./iframe-CZEQ_wjd.js";import{g as f}from"./utils-ePvtT4un.js";import{C}from"./ComposedChartArgs-CZCIiHke.js";import{C as l}from"./ComposedChart-DVaTaaXl.js";import{A as E}from"./AreaChart-BXJXpuR7.js";import{p as d}from"./Page-Cj8EiXz7.js";import{C as b}from"./CartesianGrid-BDIBIFV-.js";import{X as g}from"./XAxis-GN6jnA3k.js";import{Y as h}from"./YAxis-BLT7Ik9Z.js";import{A as a}from"./Area-Cdn0x40L.js";import{T as u}from"./Tooltip-CcoS3c4T.js";import{R as k}from"./zIndexSlice-CGZbBTjh.js";import{L as v}from"./Legend-CBZkI5K2.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-CLkKKSWb.js";import"./resolveDefaultProps-CHpCBz4P.js";import"./get-cF5BDHN6.js";import"./axisSelectors-BfF4ImUe.js";import"./throttle-DA2J31XT.js";import"./index-BbxbGDW7.js";import"./index-CRdNX2-K.js";import"./isWellBehavedNumber-B8rPL1qd.js";import"./d3-scale-er3AEJAE.js";import"./index-B-hyiig3.js";import"./index-JtUUyrZR.js";import"./renderedTicksSlice-BMpJvFdR.js";import"./index-C8Xv27VY.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-BSz7TA42.js";import"./chartDataContext-BAAQoJGX.js";import"./CategoricalChart-DuqmwY6B.js";import"./CartesianAxis-DTwSBZEB.js";import"./Layer-D6WM8pRX.js";import"./Text-Dsq3-wjY.js";import"./pageBackground-CKNOMxYJ.js";import"./useId-rjEqgZ2X.js";import"./useBackwardsCompatibleTheme-Bh5QeLej.js";import"./Label-COoLstIf.js";import"./ZIndexLayer-Dn2bo3WS.js";import"./types-CKK75Clx.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./activeStyles-BfHlsJSZ.js";import"./useAnimationId-Eb1qMFFs.js";import"./dataEntryStyles-y-eKYJRz.js";import"./ActivePoints-DAIZAef7.js";import"./Dot-D8BQdXw6.js";import"./GraphicalItemClipPath-iEKWMFl6.js";import"./SetGraphicalItem-DS-LfVWp.js";import"./getRadiusAndStrokeWidthFromDot-CEOY72lw.js";import"./ActiveShapeUtils-Dfohsprr.js";import"./Curve-XL3ybND_.js";import"./step-BKPm417p.js";import"./path-DyVhHtw_.js";import"./useEffectiveDataKey-BUx5XxQj.js";import"./useElementOffset-Cbe50vsH.js";import"./uniqBy-CMc1aoPt.js";import"./iteratee-mBcul4dm.js";import"./isArguments-yB-y1yaH.js";import"./Cross-eg_rGi3i.js";import"./Rectangle-C6Hc5hiS.js";import"./util-Dxo8gN5i.js";import"./Sector-D5lUlDQq.js";import"./Symbols-ptZJXXcr.js";import"./symbol-m8ordAaR.js";const Wt={component:l},r={render:e=>t.createElement(k,{width:"100%",height:300},t.createElement(l,{margin:{top:20,right:20,bottom:20,left:20},data:d},t.createElement(a,{isAnimationActive:!1,dataKey:"uv",...e}),t.createElement(v,null),t.createElement(g,{dataKey:"name"}),t.createElement(h,null),t.createElement(u,null))),args:f(C),parameters:{docs:{description:{story:"You can tab to this chart. From there, you can use the arrow keys to navigate along the chart."}}}},o={render:()=>{const[e,y]=A.useState(!0);return t.createElement("div",null,t.createElement("button",{type:"button",onClick:()=>y(!e)},"Toggle Tooltip"),t.createElement(E,{width:500,height:400,data:d,margin:{top:10,right:30,left:0,bottom:0}},t.createElement(b,{strokeDasharray:"3 3"}),t.createElement(g,{dataKey:"name"}),t.createElement(h,null),t.createElement(a,{type:"monotone",dataKey:"uv",stackId:"1",stroke:"#8884d8",fill:"#8884d8"}),t.createElement(a,{type:"monotone",dataKey:"pv",stackId:"1",stroke:"#82ca9d",fill:"#82ca9d"}),t.createElement(a,{type:"monotone",dataKey:"amt",stackId:"1",stroke:"#ffc658",fill:"#ffc658"}),e&&t.createElement(u,null)))},args:{}},Xt=["AreaChartWithAccessibilityLayer","AccessibleWithButton"];var i,n,m;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
