import{r as A,R as t}from"./iframe-D3n-qa3v.js";import{g as f}from"./utils-ePvtT4un.js";import{C}from"./ComposedChartArgs-CgvqQqFx.js";import{C as l}from"./ComposedChart-IfzjzOLd.js";import{A as E}from"./AreaChart-BBU86X_Z.js";import{p as d}from"./Page-Cj8EiXz7.js";import{C as b}from"./CartesianGrid-DdfvKh4X.js";import{X as g}from"./XAxis-BvFg4s2o.js";import{Y as h}from"./YAxis-B-l06g0y.js";import{A as a}from"./Area-CynjbIr5.js";import{T as u}from"./Tooltip-D8w_jK1y.js";import{R as k}from"./zIndexSlice-URMJGlQl.js";import{L as v}from"./Legend-CGP__KEG.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-DDHIckB2.js";import"./resolveDefaultProps-Cvq-kyHH.js";import"./get-C2VjdU0L.js";import"./axisSelectors-DaB7yAHm.js";import"./throttle-DN7vm2uB.js";import"./index-C_ri2ApK.js";import"./index-Dd3rxVYb.js";import"./isWellBehavedNumber-CrERG1s-.js";import"./d3-scale-CaZKGVIZ.js";import"./index-C_Wrm-XW.js";import"./index-CZCnJbjp.js";import"./renderedTicksSlice-CPTSo4fz.js";import"./index-C1lTKvWo.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-DUso81Db.js";import"./chartDataContext-CZa0hGfr.js";import"./CategoricalChart-CGaW84Rd.js";import"./CartesianAxis-Cx3S-3lL.js";import"./Layer-oKfk3hYA.js";import"./Text-70ucIKSF.js";import"./DOMUtils-CcpQZ2_k.js";import"./useId-B_N_AB1U.js";import"./useBackwardsCompatibleTheme-BAQfNZQf.js";import"./Label-CpaVgYY8.js";import"./ZIndexLayer-hb7j23f9.js";import"./types-DvyNYfPW.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./AnimatedItems-CRkuoQfP.js";import"./useAnimationId-CKWjvm6q.js";import"./ActivePoints-BFpUc-QU.js";import"./Dot-DbNEtbef.js";import"./RegisterGraphicalItemId-DsY94qP2.js";import"./GraphicalItemClipPath-Ch9sm1k7.js";import"./SetGraphicalItem-BmMhxnaz.js";import"./getRadiusAndStrokeWidthFromDot-0WjElrhg.js";import"./ActiveShapeUtils-0ntRQ4Qt.js";import"./Curve-5zGakvVQ.js";import"./step-CxhIdSSF.js";import"./path-DyVhHtw_.js";import"./graphicalItemIdentity-CdZfZkJ-.js";import"./graphicalItemSelectors-DH8vxCD6.js";import"./useElementOffset-E97WR8Kk.js";import"./uniqBy-DeyvTwgR.js";import"./iteratee-CJAX1ry0.js";import"./Cross-DUS7QXUz.js";import"./Rectangle-BIHrotSs.js";import"./util-Dxo8gN5i.js";import"./Sector-B1HZ_hCy.js";import"./Symbols-BdsIUlir.js";import"./symbol-ePdn19-e.js";const Wt={component:l},r={render:e=>t.createElement(k,{width:"100%",height:300},t.createElement(l,{margin:{top:20,right:20,bottom:20,left:20},data:d},t.createElement(a,{isAnimationActive:!1,dataKey:"uv",...e}),t.createElement(v,null),t.createElement(g,{dataKey:"name"}),t.createElement(h,null),t.createElement(u,null))),args:f(C),parameters:{docs:{description:{story:"You can tab to this chart. From there, you can use the arrow keys to navigate along the chart."}}}},o={render:()=>{const[e,y]=A.useState(!0);return t.createElement("div",null,t.createElement("button",{type:"button",onClick:()=>y(!e)},"Toggle Tooltip"),t.createElement(E,{width:500,height:400,data:d,margin:{top:10,right:30,left:0,bottom:0}},t.createElement(b,{strokeDasharray:"3 3"}),t.createElement(g,{dataKey:"name"}),t.createElement(h,null),t.createElement(a,{type:"monotone",dataKey:"uv",stackId:"1",stroke:"#8884d8",fill:"#8884d8"}),t.createElement(a,{type:"monotone",dataKey:"pv",stackId:"1",stroke:"#82ca9d",fill:"#82ca9d"}),t.createElement(a,{type:"monotone",dataKey:"amt",stackId:"1",stroke:"#ffc658",fill:"#ffc658"}),e&&t.createElement(u,null)))},args:{}};var i,m,s;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
}`,...(c=(p=o.parameters)==null?void 0:p.docs)==null?void 0:c.source}}};const Xt=["AreaChartWithAccessibilityLayer","AccessibleWithButton"];export{o as AccessibleWithButton,r as AreaChartWithAccessibilityLayer,Xt as __namedExportsOrder,Wt as default};
