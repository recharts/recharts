import{r as A,R as t}from"./iframe-AkXMTiN1.js";import{g as f}from"./utils-ePvtT4un.js";import{C}from"./ComposedChartArgs-CgvqQqFx.js";import{C as l}from"./ComposedChart-CbcedsfM.js";import{A as E}from"./AreaChart-CS3Mlygf.js";import{p as d}from"./Page-Cj8EiXz7.js";import{C as b}from"./CartesianGrid-Dmrq6l5z.js";import{X as g}from"./XAxis-pJLX02b7.js";import{Y as h}from"./YAxis-oXwNoYI-.js";import{A as a}from"./Area-zkHVXtwS.js";import{T as u}from"./Tooltip-Dz6gQDMj.js";import{R as k}from"./zIndexSlice-D2IbpIG9.js";import{L as v}from"./Legend-CDcsegyl.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-BFfZ1OV4.js";import"./index-Dvk2Reae.js";import"./index-cd3KTdjN.js";import"./index-DO9nmyvc.js";import"./index-B7ESZsek.js";import"./immer-CGdqiLEl.js";import"./get-hfJl8nDX.js";import"./renderedTicksSlice-CIoFYl-j.js";import"./axisSelectors-DNRIweDw.js";import"./d3-scale-uKys2Prv.js";import"./string-B6fdYHAA.js";import"./resolveDefaultProps-Cb6CyAiD.js";import"./isWellBehavedNumber-BjHph-L0.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-DuevVog_.js";import"./chartDataContext-krnp3gzW.js";import"./CategoricalChart-Bbv_9Kq1.js";import"./CartesianAxis-nu48EpeM.js";import"./Layer-BbfEqMjd.js";import"./Text-B8TabNrv.js";import"./DOMUtils-tdyvfO_t.js";import"./Label-yi6vcZhu.js";import"./ZIndexLayer-2Zb-HEnP.js";import"./types-eY1LNeEN.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./AnimatedItems-DMUwO7tR.js";import"./useAnimationId-DnVrzYZK.js";import"./ActivePoints-CsE5DRnu.js";import"./Dot-CXwe2hvn.js";import"./RegisterGraphicalItemId-GDKh1K9_.js";import"./GraphicalItemClipPath-D9xbA8oG.js";import"./SetGraphicalItem-D-MN-a76.js";import"./getRadiusAndStrokeWidthFromDot-CXAjyQPs.js";import"./ActiveShapeUtils-cQX6UbLq.js";import"./Curve-DjnTfF-s.js";import"./step-Du2Dxzc7.js";import"./path-DyVhHtw_.js";import"./graphicalItemSelectors-B1qTcvDF.js";import"./useElementOffset-B-pwvrhw.js";import"./uniqBy-BLFid8pB.js";import"./iteratee-oc6mos4-.js";import"./Cross-BfpsE6cl.js";import"./Rectangle-C1CG4rUt.js";import"./Sector-CKPBKjPP.js";import"./Symbols-jueKSyNC.js";import"./symbol-CZDfixHm.js";const Rt={component:l},r={render:e=>t.createElement(k,{width:"100%",height:300},t.createElement(l,{margin:{top:20,right:20,bottom:20,left:20},data:d},t.createElement(a,{isAnimationActive:!1,dataKey:"uv",...e}),t.createElement(v,null),t.createElement(g,{dataKey:"name"}),t.createElement(h,null),t.createElement(u,null))),args:f(C),parameters:{docs:{description:{story:"You can tab to this chart. From there, you can use the arrow keys to navigate along the chart."}}}},o={render:()=>{const[e,y]=A.useState(!0);return t.createElement("div",null,t.createElement("button",{type:"button",onClick:()=>y(!e)},"Toggle Tooltip"),t.createElement(E,{width:500,height:400,data:d,margin:{top:10,right:30,left:0,bottom:0}},t.createElement(b,{strokeDasharray:"3 3"}),t.createElement(g,{dataKey:"name"}),t.createElement(h,null),t.createElement(a,{type:"monotone",dataKey:"uv",stackId:"1",stroke:"#8884d8",fill:"#8884d8"}),t.createElement(a,{type:"monotone",dataKey:"pv",stackId:"1",stroke:"#82ca9d",fill:"#82ca9d"}),t.createElement(a,{type:"monotone",dataKey:"amt",stackId:"1",stroke:"#ffc658",fill:"#ffc658"}),e&&t.createElement(u,null)))},args:{}};var i,m,s;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
