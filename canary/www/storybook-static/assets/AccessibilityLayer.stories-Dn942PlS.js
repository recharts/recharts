import{r as A,R as t}from"./iframe-DwQ960mE.js";import{g as f}from"./utils-ePvtT4un.js";import{C}from"./ComposedChartArgs-CgvqQqFx.js";import{C as l}from"./ComposedChart-njiJAHmg.js";import{A as E}from"./AreaChart-DZPHqO-Q.js";import{p as d}from"./Page-Cj8EiXz7.js";import{C as b}from"./CartesianGrid-EseD34jE.js";import{X as g}from"./XAxis-C3ApfTuq.js";import{Y as h}from"./YAxis-BMPG6Jn9.js";import{A as a}from"./Area-ezIpQiDJ.js";import{T as u}from"./Tooltip-CFsSnKzW.js";import{R as k}from"./zIndexSlice-CRshAYou.js";import{L as v}from"./Legend-Br1vdSSz.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-CV7KCZiE.js";import"./resolveDefaultProps-yLRPEvQ6.js";import"./get-C2VjdU0L.js";import"./axisSelectors-BuM-hXsR.js";import"./throttle-CBpng8v-.js";import"./index-934SWzTj.js";import"./index-BoR0gZ14.js";import"./isWellBehavedNumber-C8IRNLp2.js";import"./d3-scale-CB-MSXXc.js";import"./index-D_T8BRhY.js";import"./index-Dhp6LnMJ.js";import"./renderedTicksSlice-ByN1eXqa.js";import"./index-Cfk5_Nje.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-D1gjFL-f.js";import"./chartDataContext-XXv1Y0Lr.js";import"./CategoricalChart-puUF4rGm.js";import"./CartesianAxis-B1j0Zzpr.js";import"./Layer-nbNG3urG.js";import"./Text-D31azkqa.js";import"./DOMUtils-jWrmId9V.js";import"./useId-Do6UThpj.js";import"./useBackwardsCompatibleTheme-1nd_EnAF.js";import"./Label-BnvMog58.js";import"./ZIndexLayer-CNwoXSbx.js";import"./types-BF5horUV.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./AnimatedItems--DCjDL7v.js";import"./useAnimationId-CgdCBqIf.js";import"./ActivePoints-Dl85NR7O.js";import"./Dot-B_Wd5Y7s.js";import"./RegisterGraphicalItemId-zN7Xc-Dd.js";import"./GraphicalItemClipPath-BwWJK4tk.js";import"./SetGraphicalItem-DQfhPOxL.js";import"./getRadiusAndStrokeWidthFromDot-Bgbvlm_y.js";import"./ActiveShapeUtils-DQGjc9Is.js";import"./Curve-DlR_mCFH.js";import"./step-fQiYLSQ2.js";import"./path-DyVhHtw_.js";import"./graphicalItemIdentity-CdZfZkJ-.js";import"./graphicalItemSelectors-DUZ2mI-D.js";import"./useElementOffset-Btc2x5AZ.js";import"./uniqBy-B5k5jdGw.js";import"./iteratee-C7BmF6bi.js";import"./Cross-Wbmju0Dn.js";import"./Rectangle-oko1PZRH.js";import"./util-Dxo8gN5i.js";import"./Sector-COcPp2JC.js";import"./Symbols-rsnYG1uV.js";import"./symbol-B7Cm16Cp.js";const Wt={component:l},r={render:e=>t.createElement(k,{width:"100%",height:300},t.createElement(l,{margin:{top:20,right:20,bottom:20,left:20},data:d},t.createElement(a,{isAnimationActive:!1,dataKey:"uv",...e}),t.createElement(v,null),t.createElement(g,{dataKey:"name"}),t.createElement(h,null),t.createElement(u,null))),args:f(C),parameters:{docs:{description:{story:"You can tab to this chart. From there, you can use the arrow keys to navigate along the chart."}}}},o={render:()=>{const[e,y]=A.useState(!0);return t.createElement("div",null,t.createElement("button",{type:"button",onClick:()=>y(!e)},"Toggle Tooltip"),t.createElement(E,{width:500,height:400,data:d,margin:{top:10,right:30,left:0,bottom:0}},t.createElement(b,{strokeDasharray:"3 3"}),t.createElement(g,{dataKey:"name"}),t.createElement(h,null),t.createElement(a,{type:"monotone",dataKey:"uv",stackId:"1",stroke:"#8884d8",fill:"#8884d8"}),t.createElement(a,{type:"monotone",dataKey:"pv",stackId:"1",stroke:"#82ca9d",fill:"#82ca9d"}),t.createElement(a,{type:"monotone",dataKey:"amt",stackId:"1",stroke:"#ffc658",fill:"#ffc658"}),e&&t.createElement(u,null)))},args:{}},Xt=["AreaChartWithAccessibilityLayer","AccessibleWithButton"];var i,n,m;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
