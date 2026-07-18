import{r as A,R as t}from"./iframe-Bv6Dcd9T.js";import{g as f}from"./utils-ePvtT4un.js";import{C}from"./ComposedChartArgs-CgvqQqFx.js";import{C as l}from"./ComposedChart-C2bRBn5w.js";import{A as E}from"./AreaChart-CqH7SRu9.js";import{p as d}from"./Page-Cj8EiXz7.js";import{C as b}from"./CartesianGrid-AKWKW_lS.js";import{X as g}from"./XAxis-CSpcOKY2.js";import{Y as h}from"./YAxis-DHQaIYZw.js";import{A as a}from"./Area-C9QfIHRy.js";import{T as u}from"./Tooltip-CYnE240g.js";import{R as k}from"./zIndexSlice-DGhXPr-9.js";import{L as v}from"./Legend-A0cX5XEa.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-DTS_6Eoq.js";import"./index-DdiL_HAM.js";import"./index-DzmElQg1.js";import"./index-CcYReNCh.js";import"./index-CxI2Eqca.js";import"./throttle-BcQ01sX8.js";import"./get-DJ3830uQ.js";import"./renderedTicksSlice-CJ-EtdQM.js";import"./axisSelectors-BcVMUp1z.js";import"./resolveDefaultProps-D_NqfWCM.js";import"./isWellBehavedNumber-CU7VWJn9.js";import"./d3-scale-CClsGt0Z.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-DBwo_mBR.js";import"./chartDataContext-BjtAcLZf.js";import"./CategoricalChart-BwO0IaNH.js";import"./CartesianAxis-COkD_qks.js";import"./Layer-DlkJXe1G.js";import"./Text-00C33NA5.js";import"./DOMUtils-C-FPV1O8.js";import"./Label-CQaeTHfg.js";import"./ZIndexLayer-DxBey86b.js";import"./types-CAucql9k.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./AnimatedItems-xeFS2cCQ.js";import"./useAnimationId-K5YFgJBV.js";import"./ActivePoints-DNi94Mhe.js";import"./Dot-BE-61l3v.js";import"./RegisterGraphicalItemId-9ZN-jgk_.js";import"./GraphicalItemClipPath-BS-sqKFj.js";import"./SetGraphicalItem-BQ96Q1Zd.js";import"./getRadiusAndStrokeWidthFromDot-BICVUXTz.js";import"./ActiveShapeUtils-BPmEcXgb.js";import"./Curve-DpXmJzZj.js";import"./step-CRpvhJpW.js";import"./path-DyVhHtw_.js";import"./graphicalItemSelectors-DtfFeKs3.js";import"./useElementOffset-DCBd45Il.js";import"./uniqBy-BjtflDCk.js";import"./iteratee-BrcS1bci.js";import"./Cross-BWGMhy9D.js";import"./Rectangle-CtFCyLS0.js";import"./util-Dxo8gN5i.js";import"./Sector-CUkcaSYD.js";import"./Symbols-B944ltIA.js";import"./symbol-BDYSoGh9.js";const Rt={component:l},r={render:e=>t.createElement(k,{width:"100%",height:300},t.createElement(l,{margin:{top:20,right:20,bottom:20,left:20},data:d},t.createElement(a,{isAnimationActive:!1,dataKey:"uv",...e}),t.createElement(v,null),t.createElement(g,{dataKey:"name"}),t.createElement(h,null),t.createElement(u,null))),args:f(C),parameters:{docs:{description:{story:"You can tab to this chart. From there, you can use the arrow keys to navigate along the chart."}}}},o={render:()=>{const[e,y]=A.useState(!0);return t.createElement("div",null,t.createElement("button",{type:"button",onClick:()=>y(!e)},"Toggle Tooltip"),t.createElement(E,{width:500,height:400,data:d,margin:{top:10,right:30,left:0,bottom:0}},t.createElement(b,{strokeDasharray:"3 3"}),t.createElement(g,{dataKey:"name"}),t.createElement(h,null),t.createElement(a,{type:"monotone",dataKey:"uv",stackId:"1",stroke:"#8884d8",fill:"#8884d8"}),t.createElement(a,{type:"monotone",dataKey:"pv",stackId:"1",stroke:"#82ca9d",fill:"#82ca9d"}),t.createElement(a,{type:"monotone",dataKey:"amt",stackId:"1",stroke:"#ffc658",fill:"#ffc658"}),e&&t.createElement(u,null)))},args:{}};var i,m,s;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
