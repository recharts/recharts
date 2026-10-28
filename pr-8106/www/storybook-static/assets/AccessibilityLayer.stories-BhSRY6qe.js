import{r as A,R as t}from"./iframe-C82DQHN8.js";import{g as f}from"./utils-ePvtT4un.js";import{C}from"./ComposedChartArgs-CZCIiHke.js";import{C as l}from"./ComposedChart-CYmsodFg.js";import{A as E}from"./AreaChart-CBZ37L_M.js";import{p as d}from"./Page-Cj8EiXz7.js";import{C as b}from"./CartesianGrid-BguhZg3D.js";import{X as g}from"./XAxis-HS7HwOQV.js";import{Y as h}from"./YAxis-CY_V7IWg.js";import{A as a}from"./Area-Bc-6SUbq.js";import{T as u}from"./Tooltip-_4wsMkeZ.js";import{R as k}from"./zIndexSlice-KEmmKuiN.js";import{L as v}from"./Legend-CBS3sR82.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-C7FIcLUG.js";import"./resolveDefaultProps-VPX7RWl5.js";import"./get-cF5BDHN6.js";import"./axisSelectors-BBwIpa2g.js";import"./throttle-DrIjUdEi.js";import"./index-DS_o04pJ.js";import"./index-CrBCcUcr.js";import"./polarAxisSelectors-CI9V5B2f.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-YRVCFiEs.js";import"./index-Dxrl0h9V.js";import"./index-BzW5Id2r.js";import"./renderedTicksSlice-Dyzu-B2T.js";import"./index-Q0hLYzZW.js";import"./CartesianChart-DkUBM6DF.js";import"./ZIndexPortal-CwXxcVKW.js";import"./CategoricalChart-CSFGEuTa.js";import"./CartesianAxis-DKLzLHvo.js";import"./Layer-C-QkALxJ.js";import"./Text-BsKwg4yV.js";import"./pageBackground-fR40L72L.js";import"./ZIndexLayer-BbgqXMZY.js";import"./Label-Ckx9XYdx.js";import"./types-zIpyflln.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./LabelList-CqrMkTfo.js";import"./ActivePoints-BwyWhSZo.js";import"./Dot-BljD15xb.js";import"./activeStyles-BTVFwqk3.js";import"./useAnimationId-B8gyVu2h.js";import"./dataEntryStyles-Dn-nirF7.js";import"./Symbols-CFD8lW7l.js";import"./symbol-BmeELTCq.js";import"./path-DyVhHtw_.js";import"./SetGraphicalItem-Bgxm3FOo.js";import"./getRadiusAndStrokeWidthFromDot-LeBNisO_.js";import"./ActiveShapeUtils-DQaA7sJq.js";import"./Curve-DL-Hbuxt.js";import"./step-CNEvn2Wv.js";import"./useEffectiveDataKey-bWUuu12H.js";import"./useElementOffset-CVdUc2iG.js";import"./uniqBy-DXinuiHK.js";import"./iteratee-0NsStHsr.js";import"./isArguments-yB-y1yaH.js";import"./Cross-C-S5v_ih.js";import"./Rectangle-CZ-MIfgH.js";import"./util-Dxo8gN5i.js";import"./Sector-BJdx_vz4.js";const Dt={component:l},r={render:e=>t.createElement(k,{width:"100%",height:300},t.createElement(l,{margin:{top:20,right:20,bottom:20,left:20},data:d},t.createElement(a,{isAnimationActive:!1,dataKey:"uv",...e}),t.createElement(v,null),t.createElement(g,{dataKey:"name"}),t.createElement(h,null),t.createElement(u,null))),args:f(C),parameters:{docs:{description:{story:"You can tab to this chart. From there, you can use the arrow keys to navigate along the chart."}}}},o={render:()=>{const[e,y]=A.useState(!0);return t.createElement("div",null,t.createElement("button",{type:"button",onClick:()=>y(!e)},"Toggle Tooltip"),t.createElement(E,{width:500,height:400,data:d,margin:{top:10,right:30,left:0,bottom:0}},t.createElement(b,{strokeDasharray:"3 3"}),t.createElement(g,{dataKey:"name"}),t.createElement(h,null),t.createElement(a,{type:"monotone",dataKey:"uv",stackId:"1",stroke:"#8884d8",fill:"#8884d8"}),t.createElement(a,{type:"monotone",dataKey:"pv",stackId:"1",stroke:"#82ca9d",fill:"#82ca9d"}),t.createElement(a,{type:"monotone",dataKey:"amt",stackId:"1",stroke:"#ffc658",fill:"#ffc658"}),e&&t.createElement(u,null)))},args:{}},Ft=["AreaChartWithAccessibilityLayer","AccessibleWithButton"];var n,i,m;r.parameters={...r.parameters,docs:{...(n=r.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
}`,...(c=(p=o.parameters)==null?void 0:p.docs)==null?void 0:c.source}}};export{o as AccessibleWithButton,r as AreaChartWithAccessibilityLayer,Ft as __namedExportsOrder,Dt as default};
