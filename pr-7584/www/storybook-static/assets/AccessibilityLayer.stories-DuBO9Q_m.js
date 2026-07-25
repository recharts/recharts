import{r as A,R as t}from"./iframe-GS6tWWpF.js";import{g as f}from"./utils-ePvtT4un.js";import{C}from"./ComposedChartArgs-CgvqQqFx.js";import{C as l}from"./ComposedChart-Dl8H5i_v.js";import{A as E}from"./AreaChart-D3XPkGEf.js";import{p as d}from"./Page-Cj8EiXz7.js";import{C as b}from"./CartesianGrid-F-KU-36M.js";import{X as g}from"./XAxis-Bx65GQrC.js";import{Y as h}from"./YAxis-CUfaioHk.js";import{A as a}from"./Area-Dg6MocwD.js";import{T as u}from"./Tooltip-CRtp8_AT.js";import{R as k}from"./zIndexSlice-CiKhndgZ.js";import{L as v}from"./Legend-Ctt76U1g.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-Bqosr4xy.js";import"./index-C6xrf2-Z.js";import"./index-Di15QQ8x.js";import"./index-DfG20-Zs.js";import"./index-C2uAvHn9.js";import"./throttle-C-IXy7Zr.js";import"./get-DJ3830uQ.js";import"./renderedTicksSlice-BVCAtPIh.js";import"./axisSelectors-yfKyalbW.js";import"./resolveDefaultProps-BZjeTZ39.js";import"./isWellBehavedNumber-BW5zPDve.js";import"./d3-scale-CHW2xi3e.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-DRtNG600.js";import"./chartDataContext-BZ0W7ETA.js";import"./CategoricalChart-CsHskHmr.js";import"./CartesianAxis-DPqu1YVY.js";import"./Layer-C3MBqN5-.js";import"./Text-CUZPSeM8.js";import"./DOMUtils-cB85CLZU.js";import"./Label--UyVH_YZ.js";import"./ZIndexLayer-CvFwUsq0.js";import"./types-CDHFW4tQ.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-Crkas5dz.js";import"./AnimatedItems-DA4k4owl.js";import"./useAnimationId-ZFeP4ddJ.js";import"./ActivePoints-DIXN5qj6.js";import"./Dot-Bv3wAmgY.js";import"./RegisterGraphicalItemId-BRazAOV1.js";import"./GraphicalItemClipPath-fALP-Awj.js";import"./SetGraphicalItem-XvYC4EkM.js";import"./getRadiusAndStrokeWidthFromDot-Dd_icqpB.js";import"./ActiveShapeUtils-DTjXKb5y.js";import"./Curve-DDxJXFaA.js";import"./step-DCV2XceF.js";import"./path-DyVhHtw_.js";import"./graphicalItemSelectors-CfeuQ5do.js";import"./useElementOffset-DFy6UBvQ.js";import"./uniqBy-JuZLKXnX.js";import"./iteratee-BtotmXAq.js";import"./Cross-DDUawsZ9.js";import"./Rectangle-CdIuzb_S.js";import"./util-Dxo8gN5i.js";import"./Sector-eD6mDZA_.js";import"./Symbols-BhQRMxL7.js";import"./symbol-B6SQN_ex.js";const St={component:l},r={render:e=>t.createElement(k,{width:"100%",height:300},t.createElement(l,{margin:{top:20,right:20,bottom:20,left:20},data:d},t.createElement(a,{isAnimationActive:!1,dataKey:"uv",...e}),t.createElement(v,null),t.createElement(g,{dataKey:"name"}),t.createElement(h,null),t.createElement(u,null))),args:f(C),parameters:{docs:{description:{story:"You can tab to this chart. From there, you can use the arrow keys to navigate along the chart."}}}},o={render:()=>{const[e,y]=A.useState(!0);return t.createElement("div",null,t.createElement("button",{type:"button",onClick:()=>y(!e)},"Toggle Tooltip"),t.createElement(E,{width:500,height:400,data:d,margin:{top:10,right:30,left:0,bottom:0}},t.createElement(b,{strokeDasharray:"3 3"}),t.createElement(g,{dataKey:"name"}),t.createElement(h,null),t.createElement(a,{type:"monotone",dataKey:"uv",stackId:"1",stroke:"#8884d8",fill:"#8884d8"}),t.createElement(a,{type:"monotone",dataKey:"pv",stackId:"1",stroke:"#82ca9d",fill:"#82ca9d"}),t.createElement(a,{type:"monotone",dataKey:"amt",stackId:"1",stroke:"#ffc658",fill:"#ffc658"}),e&&t.createElement(u,null)))},args:{}};var i,m,s;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
}`,...(c=(p=o.parameters)==null?void 0:p.docs)==null?void 0:c.source}}};const Yt=["AreaChartWithAccessibilityLayer","AccessibleWithButton"];export{o as AccessibleWithButton,r as AreaChartWithAccessibilityLayer,Yt as __namedExportsOrder,St as default};
