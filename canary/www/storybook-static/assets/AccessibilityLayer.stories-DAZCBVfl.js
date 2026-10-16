import{r as A,R as t}from"./iframe-Cuc-3wmn.js";import{g as f}from"./utils-ePvtT4un.js";import{C}from"./ComposedChartArgs-CZCIiHke.js";import{C as l}from"./ComposedChart-CD6T7lY1.js";import{A as E}from"./AreaChart-DiXrVdqj.js";import{p as d}from"./Page-Cj8EiXz7.js";import{C as b}from"./CartesianGrid-Bym8S3Fv.js";import{X as g}from"./XAxis-BqOzDVbT.js";import{Y as h}from"./YAxis-D3vkb_pr.js";import{A as a}from"./Area-Cw7Ikwl_.js";import{T as u}from"./Tooltip-BOZ61CcI.js";import{R as k}from"./zIndexSlice-BsVN3Oy1.js";import{L as v}from"./Legend-BR4IrO2g.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-3cu-hXPY.js";import"./resolveDefaultProps-DeE8fKkX.js";import"./get-C2VjdU0L.js";import"./axisSelectors-DM_2WB9O.js";import"./throttle-BHv1OzUd.js";import"./index-Dr1iXWUa.js";import"./index-DGxMJQlb.js";import"./isWellBehavedNumber-BQdzkgjM.js";import"./d3-scale-BS_R9TF_.js";import"./index-Dz3k4zem.js";import"./index-Do_NM7xQ.js";import"./renderedTicksSlice-BXySsU0c.js";import"./index-CYT75Ewh.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-C6H_Qcxl.js";import"./chartDataContext-B7_SZBh7.js";import"./CategoricalChart-DrO7g7YL.js";import"./CartesianAxis-D_D6u5e-.js";import"./Layer-D8rIily6.js";import"./Text-BXtcMZ2N.js";import"./pageBackground-DrpZqn_y.js";import"./useId-CpeFYMDs.js";import"./useBackwardsCompatibleTheme-Cg1iNggS.js";import"./Label-CIwD5k1e.js";import"./ZIndexLayer-LfSwjZQ4.js";import"./types-GMU9tJsf.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./activeStyles-CdxeGYpW.js";import"./useAnimationId-BpVC87C1.js";import"./dataEntryStyles-BJ1Gca6t.js";import"./ActivePoints-CVhx80tt.js";import"./Dot-DyPF6Lbp.js";import"./GraphicalItemClipPath-SJq0vZIV.js";import"./SetGraphicalItem-CaNq7kdy.js";import"./getRadiusAndStrokeWidthFromDot-iwqqPDMx.js";import"./ActiveShapeUtils-CkArj8ub.js";import"./Curve-DkDc-div.js";import"./step-DLRB17DG.js";import"./path-DyVhHtw_.js";import"./useEffectiveDataKey-rVy1qnot.js";import"./useElementOffset-DWSWPlh_.js";import"./uniqBy-miHMS1-h.js";import"./iteratee-DHIVVYG7.js";import"./Cross-Bh1B-flk.js";import"./Rectangle-jrOmvPnS.js";import"./util-Dxo8gN5i.js";import"./Sector-wjDHcoKV.js";import"./Symbols-DK1QeJ4B.js";import"./symbol-DzBkfLCR.js";const Ft={component:l},r={render:e=>t.createElement(k,{width:"100%",height:300},t.createElement(l,{margin:{top:20,right:20,bottom:20,left:20},data:d},t.createElement(a,{isAnimationActive:!1,dataKey:"uv",...e}),t.createElement(v,null),t.createElement(g,{dataKey:"name"}),t.createElement(h,null),t.createElement(u,null))),args:f(C),parameters:{docs:{description:{story:"You can tab to this chart. From there, you can use the arrow keys to navigate along the chart."}}}},o={render:()=>{const[e,y]=A.useState(!0);return t.createElement("div",null,t.createElement("button",{type:"button",onClick:()=>y(!e)},"Toggle Tooltip"),t.createElement(E,{width:500,height:400,data:d,margin:{top:10,right:30,left:0,bottom:0}},t.createElement(b,{strokeDasharray:"3 3"}),t.createElement(g,{dataKey:"name"}),t.createElement(h,null),t.createElement(a,{type:"monotone",dataKey:"uv",stackId:"1",stroke:"#8884d8",fill:"#8884d8"}),t.createElement(a,{type:"monotone",dataKey:"pv",stackId:"1",stroke:"#82ca9d",fill:"#82ca9d"}),t.createElement(a,{type:"monotone",dataKey:"amt",stackId:"1",stroke:"#ffc658",fill:"#ffc658"}),e&&t.createElement(u,null)))},args:{}},Wt=["AreaChartWithAccessibilityLayer","AccessibleWithButton"];var n,i,m;r.parameters={...r.parameters,docs:{...(n=r.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
