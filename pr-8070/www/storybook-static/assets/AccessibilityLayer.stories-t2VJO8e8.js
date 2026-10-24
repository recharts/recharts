import{r as A,R as t}from"./iframe-DIZ3O37q.js";import{g as f}from"./utils-ePvtT4un.js";import{C}from"./ComposedChartArgs-CZCIiHke.js";import{C as l}from"./ComposedChart-D39bvl9W.js";import{A as E}from"./AreaChart-Bs3IH15l.js";import{p as d}from"./Page-Cj8EiXz7.js";import{C as b}from"./CartesianGrid-ssYqflAW.js";import{X as g}from"./XAxis-B7HByjhZ.js";import{Y as h}from"./YAxis-DKMrz6bp.js";import{A as a}from"./Area-DbDXXgfX.js";import{T as u}from"./Tooltip-DcLqp7mQ.js";import{R as k}from"./zIndexSlice-BQzkuVGb.js";import{L as v}from"./Legend-CAnLgOej.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-DCqN-I2W.js";import"./resolveDefaultProps-CZ7A5O_B.js";import"./get-cF5BDHN6.js";import"./axisSelectors-CgxEqo8X.js";import"./throttle-CmJg4BXK.js";import"./index-v0zH_vno.js";import"./index-eN1sdWPw.js";import"./isWellBehavedNumber-C03WQupV.js";import"./d3-scale-BsLoKPkH.js";import"./index-Cmvub_uM.js";import"./index-ywKEni0y.js";import"./renderedTicksSlice-dPbGmcjH.js";import"./index-DJHqlgJe.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-BArvePMg.js";import"./chartDataContext-DHk2uxah.js";import"./CategoricalChart-C-yl_Evz.js";import"./CartesianAxis-DyfvpSiZ.js";import"./Layer-dog9ZdZ9.js";import"./Text-CxShOurV.js";import"./pageBackground-RtZmpZCV.js";import"./useId-JbG4rdAV.js";import"./useBackwardsCompatibleTheme-BOuG0K82.js";import"./Label-BKiGyQaq.js";import"./ZIndexLayer-DpnduxRR.js";import"./dataEntryStyles-DEoRHL3P.js";import"./types-DIw8xebl.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./activeStyles-heSOU5tv.js";import"./useAnimationId-1Ju_H0cm.js";import"./ActivePoints-CKzWXL41.js";import"./Dot-CFyjFdrS.js";import"./RegisterGraphicalItemId-CU20DwEk.js";import"./SetGraphicalItem-BH1Y0jBy.js";import"./getRadiusAndStrokeWidthFromDot-DM7-yOyB.js";import"./ActiveShapeUtils-CU9aD14w.js";import"./Curve-BKoNYh1Q.js";import"./step-Bx5ie7RH.js";import"./path-DyVhHtw_.js";import"./useEffectiveDataKey-CsQCtOFi.js";import"./useElementOffset-BA2R_9BV.js";import"./uniqBy-CLXI3ykK.js";import"./iteratee-BTyFVxv_.js";import"./isArguments-yB-y1yaH.js";import"./Cross-C52amwue.js";import"./Rectangle-CN_u7Ffv.js";import"./util-Dxo8gN5i.js";import"./Sector-J0pHaKij.js";import"./Symbols-D8Nhv3CR.js";import"./symbol-D49ZxeF-.js";const Wt={component:l},r={render:e=>t.createElement(k,{width:"100%",height:300},t.createElement(l,{margin:{top:20,right:20,bottom:20,left:20},data:d},t.createElement(a,{isAnimationActive:!1,dataKey:"uv",...e}),t.createElement(v,null),t.createElement(g,{dataKey:"name"}),t.createElement(h,null),t.createElement(u,null))),args:f(C),parameters:{docs:{description:{story:"You can tab to this chart. From there, you can use the arrow keys to navigate along the chart."}}}},o={render:()=>{const[e,y]=A.useState(!0);return t.createElement("div",null,t.createElement("button",{type:"button",onClick:()=>y(!e)},"Toggle Tooltip"),t.createElement(E,{width:500,height:400,data:d,margin:{top:10,right:30,left:0,bottom:0}},t.createElement(b,{strokeDasharray:"3 3"}),t.createElement(g,{dataKey:"name"}),t.createElement(h,null),t.createElement(a,{type:"monotone",dataKey:"uv",stackId:"1",stroke:"#8884d8",fill:"#8884d8"}),t.createElement(a,{type:"monotone",dataKey:"pv",stackId:"1",stroke:"#82ca9d",fill:"#82ca9d"}),t.createElement(a,{type:"monotone",dataKey:"amt",stackId:"1",stroke:"#ffc658",fill:"#ffc658"}),e&&t.createElement(u,null)))},args:{}},Xt=["AreaChartWithAccessibilityLayer","AccessibleWithButton"];var i,n,m;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
