import{r as A,R as t}from"./iframe-BSWUJvVD.js";import{g as f}from"./utils-ePvtT4un.js";import{C}from"./ComposedChartArgs-CgvqQqFx.js";import{C as l}from"./ComposedChart-CU9OL2HY.js";import{A as E}from"./AreaChart-yr40ujwn.js";import{p as d}from"./Page-Cj8EiXz7.js";import{C as b}from"./CartesianGrid-DZaQ-sHd.js";import{X as g}from"./XAxis-CjaWOmHo.js";import{Y as h}from"./YAxis-CPNRWSYb.js";import{A as a}from"./Area-CmUOwi7c.js";import{T as u}from"./Tooltip-uFYXTgrh.js";import{R as k}from"./zIndexSlice-Dodw6VBB.js";import{L as v}from"./Legend-DWAZHCCC.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-DTzsDh4q.js";import"./index-CvaVBha6.js";import"./index-C2hfqVYs.js";import"./index-Dvw34fMT.js";import"./index-B3tdJtlF.js";import"./throttle-DttCRvoG.js";import"./get-Vl9hB9kE.js";import"./renderedTicksSlice-DqZNOnEy.js";import"./axisSelectors-DyTmTh7D.js";import"./d3-scale-C12KvtOu.js";import"./resolveDefaultProps-BmihZEmA.js";import"./isWellBehavedNumber-BmaIQTH1.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-DPI5HXtq.js";import"./chartDataContext-DSlpgtsU.js";import"./CategoricalChart-DIaxl7pb.js";import"./CartesianAxis-CVEh4tt_.js";import"./Layer-Cf5OzKEI.js";import"./Text-AXOyatW-.js";import"./DOMUtils-BQwhIlov.js";import"./Label-DXe68yB0.js";import"./ZIndexLayer-Cq8G8FQO.js";import"./types-Dnz1a-tR.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./AnimatedItems-Z4j2jX_N.js";import"./useAnimationId-DQFk0Too.js";import"./ActivePoints-DxQISI2r.js";import"./Dot-B2jNwAb4.js";import"./RegisterGraphicalItemId-C0E0VwJr.js";import"./GraphicalItemClipPath-BiLMWHLg.js";import"./SetGraphicalItem-DXqqCptu.js";import"./getRadiusAndStrokeWidthFromDot-Bc40o6k6.js";import"./ActiveShapeUtils-CLmLa7pa.js";import"./Curve-DsJVJiVT.js";import"./step-n-r0mMGx.js";import"./path-DyVhHtw_.js";import"./graphicalItemSelectors-CSHTXu_A.js";import"./useElementOffset-CYaTUNRm.js";import"./uniqBy-BgH0Yxrn.js";import"./iteratee-Dfdp0kkr.js";import"./Cross-D8os7VLI.js";import"./Rectangle-BwGjqEA9.js";import"./util-Dxo8gN5i.js";import"./Sector-k8eS64ue.js";import"./Symbols-Bya0QLqm.js";import"./symbol-2I3qt-S_.js";const Rt={component:l},r={render:e=>t.createElement(k,{width:"100%",height:300},t.createElement(l,{margin:{top:20,right:20,bottom:20,left:20},data:d},t.createElement(a,{isAnimationActive:!1,dataKey:"uv",...e}),t.createElement(v,null),t.createElement(g,{dataKey:"name"}),t.createElement(h,null),t.createElement(u,null))),args:f(C),parameters:{docs:{description:{story:"You can tab to this chart. From there, you can use the arrow keys to navigate along the chart."}}}},o={render:()=>{const[e,y]=A.useState(!0);return t.createElement("div",null,t.createElement("button",{type:"button",onClick:()=>y(!e)},"Toggle Tooltip"),t.createElement(E,{width:500,height:400,data:d,margin:{top:10,right:30,left:0,bottom:0}},t.createElement(b,{strokeDasharray:"3 3"}),t.createElement(g,{dataKey:"name"}),t.createElement(h,null),t.createElement(a,{type:"monotone",dataKey:"uv",stackId:"1",stroke:"#8884d8",fill:"#8884d8"}),t.createElement(a,{type:"monotone",dataKey:"pv",stackId:"1",stroke:"#82ca9d",fill:"#82ca9d"}),t.createElement(a,{type:"monotone",dataKey:"amt",stackId:"1",stroke:"#ffc658",fill:"#ffc658"}),e&&t.createElement(u,null)))},args:{}};var i,m,s;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
