import{r as A,R as t}from"./iframe-blo479ea.js";import{g as f}from"./utils-ePvtT4un.js";import{C}from"./ComposedChartArgs-CgvqQqFx.js";import{C as l}from"./ComposedChart-CVG--YjL.js";import{A as E}from"./AreaChart-D_mExOnl.js";import{p as d}from"./Page-Cj8EiXz7.js";import{C as b}from"./CartesianGrid-D3R3TJGT.js";import{X as g}from"./XAxis-D2AMCCh6.js";import{Y as h}from"./YAxis-CbVMh33A.js";import{A as a}from"./Area-BWPCbCkS.js";import{T as u}from"./Tooltip-BDAfNzXY.js";import{R as k}from"./zIndexSlice-B-NboAfn.js";import{L as v}from"./Legend-DskkCuwn.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-DZW1xtMc.js";import"./index-Bk8DAVsF.js";import"./index-D98VNpy1.js";import"./index-5Xauv1a1.js";import"./index-DwOveEH0.js";import"./throttle-CAybpjPd.js";import"./get-DJ3830uQ.js";import"./renderedTicksSlice-DSEoRhRT.js";import"./axisSelectors-BsWadBKB.js";import"./resolveDefaultProps-d-c_EfmU.js";import"./isWellBehavedNumber-vMDquOd-.js";import"./d3-scale-D5iAOdDh.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-QYdWDySw.js";import"./chartDataContext-Dkqb0EXV.js";import"./CategoricalChart-B3UrSPAC.js";import"./CartesianAxis-Cbfv_t23.js";import"./Layer-C26T8E2g.js";import"./Text-CjpmWysE.js";import"./DOMUtils-Tw2iKYp4.js";import"./Label-CXH82xbV.js";import"./ZIndexLayer-2I4OO_bH.js";import"./types-CAFMP27K.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./AnimatedItems-Bj_FYwBV.js";import"./useAnimationId-NeumBkdx.js";import"./ActivePoints-y80Iu2pf.js";import"./Dot-BqQZbjFP.js";import"./RegisterGraphicalItemId-D8SJKJaD.js";import"./GraphicalItemClipPath-BMIU9EC2.js";import"./SetGraphicalItem-DxPgsw5M.js";import"./getRadiusAndStrokeWidthFromDot-Bz6_dvfT.js";import"./ActiveShapeUtils-DIyj0lNk.js";import"./Curve-2n5H6-9L.js";import"./step-D2-UZcK5.js";import"./path-DyVhHtw_.js";import"./graphicalItemSelectors-C7jPYBiH.js";import"./useElementOffset-BGtnydeq.js";import"./uniqBy-D6JbqUwU.js";import"./iteratee-BEFCGUB5.js";import"./Cross-Be4tHzb7.js";import"./Rectangle-Dw2-Tgnj.js";import"./util-Dxo8gN5i.js";import"./Sector-D9BNr1er.js";import"./Symbols-CwWjLN1R.js";import"./symbol-CKhYuu_e.js";const Rt={component:l},r={render:e=>t.createElement(k,{width:"100%",height:300},t.createElement(l,{margin:{top:20,right:20,bottom:20,left:20},data:d},t.createElement(a,{isAnimationActive:!1,dataKey:"uv",...e}),t.createElement(v,null),t.createElement(g,{dataKey:"name"}),t.createElement(h,null),t.createElement(u,null))),args:f(C),parameters:{docs:{description:{story:"You can tab to this chart. From there, you can use the arrow keys to navigate along the chart."}}}},o={render:()=>{const[e,y]=A.useState(!0);return t.createElement("div",null,t.createElement("button",{type:"button",onClick:()=>y(!e)},"Toggle Tooltip"),t.createElement(E,{width:500,height:400,data:d,margin:{top:10,right:30,left:0,bottom:0}},t.createElement(b,{strokeDasharray:"3 3"}),t.createElement(g,{dataKey:"name"}),t.createElement(h,null),t.createElement(a,{type:"monotone",dataKey:"uv",stackId:"1",stroke:"#8884d8",fill:"#8884d8"}),t.createElement(a,{type:"monotone",dataKey:"pv",stackId:"1",stroke:"#82ca9d",fill:"#82ca9d"}),t.createElement(a,{type:"monotone",dataKey:"amt",stackId:"1",stroke:"#ffc658",fill:"#ffc658"}),e&&t.createElement(u,null)))},args:{}};var i,m,s;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
