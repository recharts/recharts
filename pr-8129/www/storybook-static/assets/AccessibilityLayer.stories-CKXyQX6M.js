import{r as A,R as t}from"./iframe-qOFEdJsq.js";import{g as f}from"./utils-ePvtT4un.js";import{C}from"./ComposedChartArgs-CZCIiHke.js";import{C as l}from"./ComposedChart-CIu6IO4X.js";import{A as E}from"./AreaChart-DFIbtfQ2.js";import{p as d}from"./Page-Cj8EiXz7.js";import{C as b}from"./CartesianGrid-BF4MkUzS.js";import{X as g}from"./XAxis-BLPVblQP.js";import{Y as h}from"./YAxis-W_URYSZS.js";import{A as a}from"./Area-BUYi3-DC.js";import{T as u}from"./Tooltip-DXk_gFAc.js";import{R as k}from"./zIndexSlice-4ZilFo_n.js";import{L as v}from"./Legend-D_RLPDIv.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-BNMPtHnU.js";import"./resolveDefaultProps-CFXMkGAW.js";import"./get-cF5BDHN6.js";import"./axisSelectors-CB4lGYL3.js";import"./throttle-Bx7bNNV1.js";import"./index-DTQZl9pi.js";import"./index-BeFiGwAW.js";import"./polarAxisSelectors-Dp5ZHRD4.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-DLjhRaU2.js";import"./index-BDT2LzEy.js";import"./index-DBlkQQbr.js";import"./renderedTicksSlice-ZmKsBH6-.js";import"./index-CBaY9CWO.js";import"./CartesianChart-D-SoV7is.js";import"./ZIndexPortal-BLQG9CdF.js";import"./CategoricalChart-BGKiqihk.js";import"./CartesianAxis-B9ZixuFu.js";import"./Layer-p7tl0Obh.js";import"./Text-D4Or0m3K.js";import"./DOMUtils-DGwlz8Fh.js";import"./pageBackground-BIUVtVt0.js";import"./ZIndexLayer-18sgIJKw.js";import"./Label-Cllq2PGv.js";import"./types-vee7x0Qx.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./fillDefinitions-C8MPZPAo.js";import"./LabelList-CNqM2k92.js";import"./ActivePoints-B9VIFtI9.js";import"./Dot-Cx_dxYvu.js";import"./activeStyles-B7bZlFHp.js";import"./useAnimationId-DRvHP31x.js";import"./dataEntryStyles-BpwMOC9F.js";import"./Symbols-DU4y3lGd.js";import"./symbol-Cc7ZDpSQ.js";import"./path-DyVhHtw_.js";import"./SetGraphicalItem-BZaIjsVo.js";import"./getRadiusAndStrokeWidthFromDot-B-7643QY.js";import"./ActiveShapeUtils-BJhecgQK.js";import"./Curve-DB3f0x8T.js";import"./step-5jiFn3Gv.js";import"./useEffectiveDataKey-Y8Iowmfi.js";import"./useElementOffset-DVIKzI6S.js";import"./uniqBy-Bo2q91U8.js";import"./iteratee-bC8XKX9j.js";import"./isArguments-yB-y1yaH.js";import"./Cross-B7ynVVFH.js";import"./Rectangle-BIPq25kq.js";import"./util-Dxo8gN5i.js";import"./Sector-CAtsCAlR.js";const Wt={component:l},r={render:e=>t.createElement(k,{width:"100%",height:300},t.createElement(l,{margin:{top:20,right:20,bottom:20,left:20},data:d},t.createElement(a,{isAnimationActive:!1,dataKey:"uv",...e}),t.createElement(v,null),t.createElement(g,{dataKey:"name"}),t.createElement(h,null),t.createElement(u,null))),args:f(C),parameters:{docs:{description:{story:"You can tab to this chart. From there, you can use the arrow keys to navigate along the chart."}}}},o={render:()=>{const[e,y]=A.useState(!0);return t.createElement("div",null,t.createElement("button",{type:"button",onClick:()=>y(!e)},"Toggle Tooltip"),t.createElement(E,{width:500,height:400,data:d,margin:{top:10,right:30,left:0,bottom:0}},t.createElement(b,{strokeDasharray:"3 3"}),t.createElement(g,{dataKey:"name"}),t.createElement(h,null),t.createElement(a,{type:"monotone",dataKey:"uv",stackId:"1",stroke:"#8884d8",fill:"#8884d8"}),t.createElement(a,{type:"monotone",dataKey:"pv",stackId:"1",stroke:"#82ca9d",fill:"#82ca9d"}),t.createElement(a,{type:"monotone",dataKey:"amt",stackId:"1",stroke:"#ffc658",fill:"#ffc658"}),e&&t.createElement(u,null)))},args:{}},Xt=["AreaChartWithAccessibilityLayer","AccessibleWithButton"];var i,n,m;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
