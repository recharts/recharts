import{r as A,R as t}from"./iframe-BS2EKBCb.js";import{g as f}from"./utils-ePvtT4un.js";import{C}from"./ComposedChartArgs-CgvqQqFx.js";import{C as l}from"./ComposedChart-B5I1ESDC.js";import{A as E}from"./AreaChart-Do12Cit6.js";import{p as d}from"./Page-Cj8EiXz7.js";import{C as b}from"./CartesianGrid-B1O4jZ2O.js";import{X as g}from"./XAxis-BjDgsza5.js";import{Y as h}from"./YAxis-BOuW76NE.js";import{A as a}from"./Area-BHDuqaWX.js";import{T as u}from"./Tooltip-DLem5YaG.js";import{R as k}from"./zIndexSlice-DgCHBsPF.js";import{L as v}from"./Legend-CrwIU00e.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-BMyz7hVE.js";import"./resolveDefaultProps-TcviW97c.js";import"./get-C2VjdU0L.js";import"./axisSelectors-CyWNF9Af.js";import"./throttle-N5ne0m8p.js";import"./index-DqlRD72w.js";import"./index-CV_3LUuL.js";import"./isWellBehavedNumber-DC3UycXE.js";import"./d3-scale-Weld_qs_.js";import"./index-Bzi9FVcX.js";import"./index-CzKnnb1A.js";import"./renderedTicksSlice-F9VbCDyF.js";import"./index-D5fLjVxw.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-qCzL_6hu.js";import"./chartDataContext-CO5JDURO.js";import"./CategoricalChart-C5K9SC6Q.js";import"./CartesianAxis-CKj7lC_q.js";import"./Layer-GWt7eqqf.js";import"./Text-mzbpVVI1.js";import"./DOMUtils-WOBZE1NB.js";import"./useId-caAF7v61.js";import"./useBackwardsCompatibleTheme-qcvR2xn0.js";import"./Label-DXa6-y8E.js";import"./ZIndexLayer-B7lLwLGi.js";import"./types-BQYuG1d5.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./AnimatedItems-CyRMeM58.js";import"./useAnimationId-DT-PTug0.js";import"./ActivePoints-Cjbzc0M8.js";import"./Dot-DU7ZcKmK.js";import"./RegisterGraphicalItemId-B1R9LLxS.js";import"./GraphicalItemClipPath-1wc1zrjW.js";import"./SetGraphicalItem-0zivWSPx.js";import"./getRadiusAndStrokeWidthFromDot-B5PCEdLb.js";import"./ActiveShapeUtils-ZcrlVc5g.js";import"./Curve-B-5JJSds.js";import"./step-C_EYK6G6.js";import"./path-DyVhHtw_.js";import"./useGraphicalItemIdentity-D12-TlkG.js";import"./useElementOffset-4jPhR6y6.js";import"./uniqBy-Cq54zJ4p.js";import"./iteratee-BrmxT3n3.js";import"./Cross-Bo_a7FVO.js";import"./Rectangle-DEzYnzUI.js";import"./util-Dxo8gN5i.js";import"./Sector-D8P6kuRr.js";import"./Symbols-VAmn91XB.js";import"./symbol-CEiHj79c.js";const Ft={component:l},r={render:e=>t.createElement(k,{width:"100%",height:300},t.createElement(l,{margin:{top:20,right:20,bottom:20,left:20},data:d},t.createElement(a,{isAnimationActive:!1,dataKey:"uv",...e}),t.createElement(v,null),t.createElement(g,{dataKey:"name"}),t.createElement(h,null),t.createElement(u,null))),args:f(C),parameters:{docs:{description:{story:"You can tab to this chart. From there, you can use the arrow keys to navigate along the chart."}}}},o={render:()=>{const[e,y]=A.useState(!0);return t.createElement("div",null,t.createElement("button",{type:"button",onClick:()=>y(!e)},"Toggle Tooltip"),t.createElement(E,{width:500,height:400,data:d,margin:{top:10,right:30,left:0,bottom:0}},t.createElement(b,{strokeDasharray:"3 3"}),t.createElement(g,{dataKey:"name"}),t.createElement(h,null),t.createElement(a,{type:"monotone",dataKey:"uv",stackId:"1",stroke:"#8884d8",fill:"#8884d8"}),t.createElement(a,{type:"monotone",dataKey:"pv",stackId:"1",stroke:"#82ca9d",fill:"#82ca9d"}),t.createElement(a,{type:"monotone",dataKey:"amt",stackId:"1",stroke:"#ffc658",fill:"#ffc658"}),e&&t.createElement(u,null)))},args:{}},Wt=["AreaChartWithAccessibilityLayer","AccessibleWithButton"];var n,i,m;r.parameters={...r.parameters,docs:{...(n=r.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
