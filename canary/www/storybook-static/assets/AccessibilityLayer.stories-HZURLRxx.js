import{r as A,R as t}from"./iframe-DxMMLjq4.js";import{g as f}from"./utils-ePvtT4un.js";import{C}from"./ComposedChartArgs-CgvqQqFx.js";import{C as l}from"./ComposedChart-DIzopGUF.js";import{A as E}from"./AreaChart-DnBwMEF-.js";import{p as d}from"./Page-Cj8EiXz7.js";import{C as b}from"./CartesianGrid-BhIcGe65.js";import{X as g}from"./XAxis-ComdV9F0.js";import{Y as h}from"./YAxis-DlIt9IKA.js";import{A as a}from"./Area-DsucJ3Jn.js";import{T as u}from"./Tooltip-D_BAavcS.js";import{R as k}from"./zIndexSlice-Crg_yDni.js";import{L as v}from"./Legend-COCMtBSr.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-YibyDFYm.js";import"./index-BNQESuWt.js";import"./index-NKUE4uSN.js";import"./index-NaaaP08j.js";import"./index-BmvyjtDr.js";import"./throttle-BVIVorzK.js";import"./get-DJ3830uQ.js";import"./renderedTicksSlice-R0A9XcRf.js";import"./axisSelectors-CtMsP7E5.js";import"./resolveDefaultProps-Bl28FH2f.js";import"./isWellBehavedNumber-C1o8zvOf.js";import"./d3-scale-DNwZMBjH.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-eEIqhBYs.js";import"./chartDataContext-CPgowj6N.js";import"./CategoricalChart-CkjssiaG.js";import"./CartesianAxis-Bt1NAYMU.js";import"./Layer-HeMPI1c4.js";import"./Text-BCYIz8FY.js";import"./DOMUtils-BdIlOhpH.js";import"./Label-BzF2Z4Ph.js";import"./ZIndexLayer-YMn514XV.js";import"./types-CGS0Nool.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-Crkas5dz.js";import"./AnimatedItems-DZU2dyQ0.js";import"./useAnimationId-todkGmix.js";import"./ActivePoints-Cydr7Ilr.js";import"./Dot-BEKU9-XN.js";import"./RegisterGraphicalItemId-fNF2iW9l.js";import"./GraphicalItemClipPath-BcLAlpwf.js";import"./SetGraphicalItem-C5-E1Ui2.js";import"./getRadiusAndStrokeWidthFromDot-Dkjblrfo.js";import"./ActiveShapeUtils-CzKC_ySI.js";import"./Curve-HWwjIPPZ.js";import"./step-57b6j_Mi.js";import"./path-DyVhHtw_.js";import"./graphicalItemSelectors-0HI_0GLa.js";import"./useElementOffset-BRu_GPPq.js";import"./uniqBy-CzRSAfde.js";import"./iteratee-B6VWD8nr.js";import"./Cross-DUh7a5ft.js";import"./Rectangle-D__daQdm.js";import"./util-Dxo8gN5i.js";import"./Sector-rVQPkNAb.js";import"./Symbols-BM5DG4aB.js";import"./symbol-CdP8S3iM.js";const St={component:l},r={render:e=>t.createElement(k,{width:"100%",height:300},t.createElement(l,{margin:{top:20,right:20,bottom:20,left:20},data:d},t.createElement(a,{isAnimationActive:!1,dataKey:"uv",...e}),t.createElement(v,null),t.createElement(g,{dataKey:"name"}),t.createElement(h,null),t.createElement(u,null))),args:f(C),parameters:{docs:{description:{story:"You can tab to this chart. From there, you can use the arrow keys to navigate along the chart."}}}},o={render:()=>{const[e,y]=A.useState(!0);return t.createElement("div",null,t.createElement("button",{type:"button",onClick:()=>y(!e)},"Toggle Tooltip"),t.createElement(E,{width:500,height:400,data:d,margin:{top:10,right:30,left:0,bottom:0}},t.createElement(b,{strokeDasharray:"3 3"}),t.createElement(g,{dataKey:"name"}),t.createElement(h,null),t.createElement(a,{type:"monotone",dataKey:"uv",stackId:"1",stroke:"#8884d8",fill:"#8884d8"}),t.createElement(a,{type:"monotone",dataKey:"pv",stackId:"1",stroke:"#82ca9d",fill:"#82ca9d"}),t.createElement(a,{type:"monotone",dataKey:"amt",stackId:"1",stroke:"#ffc658",fill:"#ffc658"}),e&&t.createElement(u,null)))},args:{}};var i,m,s;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
