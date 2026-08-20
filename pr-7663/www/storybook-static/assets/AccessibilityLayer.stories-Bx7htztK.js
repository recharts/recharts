import{r as A,R as t}from"./iframe-T2vx_vOa.js";import{g as f}from"./utils-ePvtT4un.js";import{C}from"./ComposedChartArgs-CgvqQqFx.js";import{C as l}from"./ComposedChart-C1KMn7rC.js";import{A as E}from"./AreaChart-BxVu6JHA.js";import{p as d}from"./Page-Cj8EiXz7.js";import{C as b}from"./CartesianGrid-BVCRKHeO.js";import{X as g}from"./XAxis-BN7ADdXK.js";import{Y as h}from"./YAxis-BF1HUrTi.js";import{A as a}from"./Area-DRdRwdYB.js";import{T as u}from"./Tooltip-LDzoybih.js";import{R as k}from"./zIndexSlice-B-qj09MF.js";import{L as v}from"./Legend-QD-0owBx.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-B7E4P3q_.js";import"./index-BGfsg-y8.js";import"./index-BmiiKlQ3.js";import"./index-CKmP93dg.js";import"./index-C2g4etmg.js";import"./throttle-B2YWMMfN.js";import"./get-C2VjdU0L.js";import"./axisSelectors-Bwt_MWfh.js";import"./resolveDefaultProps-DDbhMM_B.js";import"./isWellBehavedNumber-CkczEaKC.js";import"./d3-scale-9Bwz5xwo.js";import"./renderedTicksSlice-BZDyTRdO.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-Bnxa5O6x.js";import"./chartDataContext-BRu0PEKp.js";import"./CategoricalChart-DZbNl6UN.js";import"./CartesianAxis-Bztsuorj.js";import"./Layer-BJSWtfPf.js";import"./Text-C_hpuPsU.js";import"./DOMUtils-DCQI-dAG.js";import"./useId-BgzgS8Mn.js";import"./useBackwardsCompatibleTheme-CPVLRTOy.js";import"./Label-AUPLS1jy.js";import"./ZIndexLayer-BwLVxIBn.js";import"./types-Bh_AGi1X.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./AnimatedItems-C9f8W2_c.js";import"./useAnimationId-w6GkkQqu.js";import"./ActivePoints-99dWxsTW.js";import"./Dot-BlclRNOF.js";import"./RegisterGraphicalItemId-DenhQzIU.js";import"./GraphicalItemClipPath-CBz4hBDX.js";import"./SetGraphicalItem-BV24eLVS.js";import"./getRadiusAndStrokeWidthFromDot-DJHAn0yp.js";import"./ActiveShapeUtils-jwMR0d8y.js";import"./Curve-B3Mj_t6F.js";import"./step-DPp_r08A.js";import"./path-DyVhHtw_.js";import"./graphicalItemIdentity-CdZfZkJ-.js";import"./graphicalItemSelectors-D3gv9YYw.js";import"./useElementOffset-DcABdze2.js";import"./uniqBy-BVVWdgld.js";import"./iteratee-B1adNlu2.js";import"./Cross-D0pU1Ik5.js";import"./Rectangle-CFnUwAZg.js";import"./util-Dxo8gN5i.js";import"./Sector-C6JSPpsQ.js";import"./Symbols-CV9T5Yu_.js";import"./symbol-BI3up_Yv.js";const Ft={component:l},r={render:e=>t.createElement(k,{width:"100%",height:300},t.createElement(l,{margin:{top:20,right:20,bottom:20,left:20},data:d},t.createElement(a,{isAnimationActive:!1,dataKey:"uv",...e}),t.createElement(v,null),t.createElement(g,{dataKey:"name"}),t.createElement(h,null),t.createElement(u,null))),args:f(C),parameters:{docs:{description:{story:"You can tab to this chart. From there, you can use the arrow keys to navigate along the chart."}}}},o={render:()=>{const[e,y]=A.useState(!0);return t.createElement("div",null,t.createElement("button",{type:"button",onClick:()=>y(!e)},"Toggle Tooltip"),t.createElement(E,{width:500,height:400,data:d,margin:{top:10,right:30,left:0,bottom:0}},t.createElement(b,{strokeDasharray:"3 3"}),t.createElement(g,{dataKey:"name"}),t.createElement(h,null),t.createElement(a,{type:"monotone",dataKey:"uv",stackId:"1",stroke:"#8884d8",fill:"#8884d8"}),t.createElement(a,{type:"monotone",dataKey:"pv",stackId:"1",stroke:"#82ca9d",fill:"#82ca9d"}),t.createElement(a,{type:"monotone",dataKey:"amt",stackId:"1",stroke:"#ffc658",fill:"#ffc658"}),e&&t.createElement(u,null)))},args:{}};var i,m,s;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
