import{r as A,R as t}from"./iframe-D4oHTXd2.js";import{g as f}from"./utils-ePvtT4un.js";import{C}from"./ComposedChartArgs-CZCIiHke.js";import{C as l}from"./ComposedChart-D_8jOcv5.js";import{A as E}from"./AreaChart-CnCnuAD2.js";import{p as d}from"./Page-Cj8EiXz7.js";import{C as b}from"./CartesianGrid-rvbRojsQ.js";import{X as g}from"./XAxis--JtbYt43.js";import{Y as h}from"./YAxis-BYtNm8pH.js";import{A as a}from"./Area-BPNpLJrF.js";import{T as u}from"./Tooltip-V4ocUqZm.js";import{R as k}from"./zIndexSlice-FaOQzDXI.js";import{L as v}from"./Legend-Dw8wxeVg.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-DDz0Qovh.js";import"./resolveDefaultProps-56IWAvtJ.js";import"./get-cF5BDHN6.js";import"./axisSelectors-CDRP_sNf.js";import"./throttle-IWj5GY0g.js";import"./index-8QB0C-JA.js";import"./index-BcDiyi9x.js";import"./polarAxisSelectors-DA0Sn49S.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-C56RpY6Y.js";import"./index-CN0lIDDr.js";import"./index-BEOZMuKY.js";import"./renderedTicksSlice-9pxfuVSu.js";import"./index-CCJYRnuL.js";import"./CartesianChart-DqtOCB7I.js";import"./ZIndexPortal-BwTgdPOx.js";import"./CategoricalChart-BGUOI4WC.js";import"./CartesianAxis-Ck0BSfZw.js";import"./Layer-Cc-amHQh.js";import"./Text-CD7lZJQl.js";import"./pageBackground-ClBhdff4.js";import"./ZIndexLayer-CtwITcxK.js";import"./Label-DP7jFvS8.js";import"./dataEntryStyles-CDeLNDqG.js";import"./types-D44DYR1l.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./LabelList-hm91Y5t7.js";import"./ActivePoints-D0g5NkQl.js";import"./Dot-7MN5UfYI.js";import"./activeStyles-BnisSvy3.js";import"./useAnimationId-DDFQzbLJ.js";import"./Symbols-Dayf-cZG.js";import"./symbol-Cv4qssrt.js";import"./path-DyVhHtw_.js";import"./RegisterGraphicalItemId-D_uZK7cP.js";import"./SetGraphicalItem-3CIjS8yi.js";import"./getRadiusAndStrokeWidthFromDot-jULpS_BY.js";import"./ActiveShapeUtils-CKRVzd2S.js";import"./Curve-B88JiAwJ.js";import"./step-hZT5qMl0.js";import"./useEffectiveDataKey-56V2wZBO.js";import"./useElementOffset-DyenIFMf.js";import"./uniqBy-DxBxaEGL.js";import"./iteratee-B-_7egyo.js";import"./isArguments-yB-y1yaH.js";import"./Cross-BTVpfL3S.js";import"./Rectangle-DUbFm90a.js";import"./util-Dxo8gN5i.js";import"./Sector-B5EL7_ii.js";const Ft={component:l},r={render:e=>t.createElement(k,{width:"100%",height:300},t.createElement(l,{margin:{top:20,right:20,bottom:20,left:20},data:d},t.createElement(a,{isAnimationActive:!1,dataKey:"uv",...e}),t.createElement(v,null),t.createElement(g,{dataKey:"name"}),t.createElement(h,null),t.createElement(u,null))),args:f(C),parameters:{docs:{description:{story:"You can tab to this chart. From there, you can use the arrow keys to navigate along the chart."}}}},o={render:()=>{const[e,y]=A.useState(!0);return t.createElement("div",null,t.createElement("button",{type:"button",onClick:()=>y(!e)},"Toggle Tooltip"),t.createElement(E,{width:500,height:400,data:d,margin:{top:10,right:30,left:0,bottom:0}},t.createElement(b,{strokeDasharray:"3 3"}),t.createElement(g,{dataKey:"name"}),t.createElement(h,null),t.createElement(a,{type:"monotone",dataKey:"uv",stackId:"1",stroke:"#8884d8",fill:"#8884d8"}),t.createElement(a,{type:"monotone",dataKey:"pv",stackId:"1",stroke:"#82ca9d",fill:"#82ca9d"}),t.createElement(a,{type:"monotone",dataKey:"amt",stackId:"1",stroke:"#ffc658",fill:"#ffc658"}),e&&t.createElement(u,null)))},args:{}},Wt=["AreaChartWithAccessibilityLayer","AccessibleWithButton"];var n,i,m;r.parameters={...r.parameters,docs:{...(n=r.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
