import{r as A,R as t}from"./iframe-CKQALtMh.js";import{g as f}from"./utils-ePvtT4un.js";import{C}from"./ComposedChartArgs-CZCIiHke.js";import{C as l}from"./ComposedChart-B57mEn44.js";import{A as E}from"./AreaChart-DFYDv9eQ.js";import{p as d}from"./Page-Cj8EiXz7.js";import{C as b}from"./CartesianGrid-Bj0blnOP.js";import{X as g}from"./XAxis-B1w-DAje.js";import{Y as h}from"./YAxis-qP5Po20_.js";import{A as a}from"./Area-DQ7uqUZC.js";import{T as u}from"./Tooltip-DBFe6s2m.js";import{R as k}from"./zIndexSlice-DfJvDCP6.js";import{L as v}from"./Legend-BN-SMuns.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-C-mneK7p.js";import"./resolveDefaultProps-Bte-Mlhe.js";import"./get-C2VjdU0L.js";import"./axisSelectors-BxBnek0X.js";import"./throttle-CNY-gU5B.js";import"./index-DtLHkBI_.js";import"./index-D_AzU2dp.js";import"./isWellBehavedNumber-B4yKamKp.js";import"./d3-scale-CKl8FJgi.js";import"./index-DzcUKgoB.js";import"./index-B2SRoqlS.js";import"./renderedTicksSlice-CPhSvJpG.js";import"./index-YCl9Eg2B.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-RyjjLogs.js";import"./chartDataContext-DKpOqV2G.js";import"./CategoricalChart-BidV4bcI.js";import"./CartesianAxis-D4n_YP7-.js";import"./Layer-B9JOU9_x.js";import"./Text-DyEflBvv.js";import"./DOMUtils-CBXByqiO.js";import"./useId-DvyhJk_e.js";import"./useBackwardsCompatibleTheme-Bv93_XfL.js";import"./Label-CkbIGog0.js";import"./ZIndexLayer-Crva3HCE.js";import"./types-CDJ3ls6u.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./AnimatedItems-DTXdR5ab.js";import"./useAnimationId-CKMmFYBQ.js";import"./ActivePoints-B_BVBzV5.js";import"./Dot-Bwc0vAX6.js";import"./RegisterGraphicalItemId-C8MFR-IS.js";import"./GraphicalItemClipPath-CinvHRPZ.js";import"./SetGraphicalItem-DsCqUb4K.js";import"./getRadiusAndStrokeWidthFromDot-DxuuP8od.js";import"./ActiveShapeUtils-CE5-o2on.js";import"./Curve-BfhgeL_q.js";import"./step-D4hLR-8L.js";import"./path-DyVhHtw_.js";import"./useGraphicalItemIdentity-DFDwkf_7.js";import"./useElementOffset-DRkOZJXl.js";import"./uniqBy-9yJLU1-D.js";import"./iteratee-jIVZW5Io.js";import"./Cross-r29ZOzL2.js";import"./Rectangle-CY_2zxpD.js";import"./util-Dxo8gN5i.js";import"./Sector-Bemb-3hf.js";import"./Symbols-DPTV3bc9.js";import"./symbol-3Q6SdgaO.js";const Ft={component:l},r={render:e=>t.createElement(k,{width:"100%",height:300},t.createElement(l,{margin:{top:20,right:20,bottom:20,left:20},data:d},t.createElement(a,{isAnimationActive:!1,dataKey:"uv",...e}),t.createElement(v,null),t.createElement(g,{dataKey:"name"}),t.createElement(h,null),t.createElement(u,null))),args:f(C),parameters:{docs:{description:{story:"You can tab to this chart. From there, you can use the arrow keys to navigate along the chart."}}}},o={render:()=>{const[e,y]=A.useState(!0);return t.createElement("div",null,t.createElement("button",{type:"button",onClick:()=>y(!e)},"Toggle Tooltip"),t.createElement(E,{width:500,height:400,data:d,margin:{top:10,right:30,left:0,bottom:0}},t.createElement(b,{strokeDasharray:"3 3"}),t.createElement(g,{dataKey:"name"}),t.createElement(h,null),t.createElement(a,{type:"monotone",dataKey:"uv",stackId:"1",stroke:"#8884d8",fill:"#8884d8"}),t.createElement(a,{type:"monotone",dataKey:"pv",stackId:"1",stroke:"#82ca9d",fill:"#82ca9d"}),t.createElement(a,{type:"monotone",dataKey:"amt",stackId:"1",stroke:"#ffc658",fill:"#ffc658"}),e&&t.createElement(u,null)))},args:{}},Wt=["AreaChartWithAccessibilityLayer","AccessibleWithButton"];var n,i,m;r.parameters={...r.parameters,docs:{...(n=r.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
