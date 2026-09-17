import{r as A,R as t}from"./iframe-DbHNynaQ.js";import{g as f}from"./utils-ePvtT4un.js";import{C}from"./ComposedChartArgs-CZCIiHke.js";import{C as l}from"./ComposedChart-OopH4fQy.js";import{A as E}from"./AreaChart-CEAJo7-m.js";import{p as d}from"./Page-Cj8EiXz7.js";import{C as b}from"./CartesianGrid-CbQ3J_0K.js";import{X as g}from"./XAxis-IVt4eUDa.js";import{Y as h}from"./YAxis-BKqQ4P5e.js";import{A as a}from"./Area-ge0dHe0o.js";import{T as u}from"./Tooltip-Bh5NqKKB.js";import{R as k}from"./zIndexSlice-seYPsfER.js";import{L as v}from"./Legend-DTb60GHo.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-B8ljz37p.js";import"./resolveDefaultProps-BxCdwk1t.js";import"./get-C2VjdU0L.js";import"./axisSelectors-DuRw_22M.js";import"./throttle-BLg26bcw.js";import"./index-CRIpJa5f.js";import"./index-BGBt4hW8.js";import"./isWellBehavedNumber-B8EuhNZV.js";import"./d3-scale-ChODOj9m.js";import"./index-C6ClRwPj.js";import"./index-C0g1ZRMH.js";import"./renderedTicksSlice-BqyFHlMV.js";import"./index-uIcexEpZ.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-B7Bt3OSw.js";import"./chartDataContext-EUMNNHrQ.js";import"./CategoricalChart-D9jf8lgu.js";import"./CartesianAxis-BKzDRc2K.js";import"./Layer-McKs3jBR.js";import"./Text-CnT4LfU-.js";import"./DOMUtils-W_YN1JiB.js";import"./useId-JKbSdXmU.js";import"./useBackwardsCompatibleTheme-BrfbM-bw.js";import"./Label-CahCPYhY.js";import"./ZIndexLayer-DLZyPL-y.js";import"./types-Dtr2g2lR.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./AnimatedItems-DQqNxpCY.js";import"./useAnimationId-aseG17e8.js";import"./ActivePoints-C-6wZqrA.js";import"./Dot-CnXT2FP3.js";import"./RegisterGraphicalItemId-CTY00hAi.js";import"./GraphicalItemClipPath-GbTn8y2C.js";import"./SetGraphicalItem-eyDqIX5L.js";import"./getRadiusAndStrokeWidthFromDot-K22oepzJ.js";import"./ActiveShapeUtils-FJemOztc.js";import"./Curve-DSpvGQJR.js";import"./step-DpeM9sZC.js";import"./path-DyVhHtw_.js";import"./useGraphicalItemIdentity-Ox7A1s1f.js";import"./useElementOffset-DsZ5J3Ev.js";import"./uniqBy-B46YDIdh.js";import"./iteratee-DXP-yn47.js";import"./Cross-B86aT3hY.js";import"./Rectangle-BiI27SKD.js";import"./util-Dxo8gN5i.js";import"./Sector-CYz6hNF2.js";import"./Symbols-p0vpfpIB.js";import"./symbol-C6icU8fd.js";const Ft={component:l},r={render:e=>t.createElement(k,{width:"100%",height:300},t.createElement(l,{margin:{top:20,right:20,bottom:20,left:20},data:d},t.createElement(a,{isAnimationActive:!1,dataKey:"uv",...e}),t.createElement(v,null),t.createElement(g,{dataKey:"name"}),t.createElement(h,null),t.createElement(u,null))),args:f(C),parameters:{docs:{description:{story:"You can tab to this chart. From there, you can use the arrow keys to navigate along the chart."}}}},o={render:()=>{const[e,y]=A.useState(!0);return t.createElement("div",null,t.createElement("button",{type:"button",onClick:()=>y(!e)},"Toggle Tooltip"),t.createElement(E,{width:500,height:400,data:d,margin:{top:10,right:30,left:0,bottom:0}},t.createElement(b,{strokeDasharray:"3 3"}),t.createElement(g,{dataKey:"name"}),t.createElement(h,null),t.createElement(a,{type:"monotone",dataKey:"uv",stackId:"1",stroke:"#8884d8",fill:"#8884d8"}),t.createElement(a,{type:"monotone",dataKey:"pv",stackId:"1",stroke:"#82ca9d",fill:"#82ca9d"}),t.createElement(a,{type:"monotone",dataKey:"amt",stackId:"1",stroke:"#ffc658",fill:"#ffc658"}),e&&t.createElement(u,null)))},args:{}},Wt=["AreaChartWithAccessibilityLayer","AccessibleWithButton"];var n,i,m;r.parameters={...r.parameters,docs:{...(n=r.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
