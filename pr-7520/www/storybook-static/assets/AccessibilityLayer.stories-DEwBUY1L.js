import{r as A,R as t}from"./iframe-D-BXEDkQ.js";import{g as f}from"./utils-ePvtT4un.js";import{C}from"./ComposedChartArgs-CgvqQqFx.js";import{C as l}from"./ComposedChart-DggYfUEi.js";import{A as E}from"./AreaChart-qghWk6H6.js";import{p as d}from"./Page-Cj8EiXz7.js";import{C as b}from"./CartesianGrid-B1yDuSfR.js";import{X as g}from"./XAxis-CsYsIQZ3.js";import{Y as h}from"./YAxis-CY9nfIzq.js";import{A as a}from"./Area-BHtYnfcV.js";import{T as u}from"./Tooltip-DLESUsdO.js";import{R as k}from"./zIndexSlice-CNOaqOPA.js";import{L as v}from"./Legend-DTUE0otA.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-DAPlnek-.js";import"./index-CSvF-BDD.js";import"./index-Dzr30MxI.js";import"./index-G9DZGzqS.js";import"./index-DyZMLGLF.js";import"./throttle-DcYZZCS9.js";import"./get-DJ3830uQ.js";import"./renderedTicksSlice-BW0B_yyu.js";import"./axisSelectors-DbolJrr5.js";import"./resolveDefaultProps-BCmCl_HK.js";import"./isWellBehavedNumber-DG1BXq00.js";import"./d3-scale-Cw0gW9iZ.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-B9gu2iu_.js";import"./chartDataContext-Drjp45TO.js";import"./CategoricalChart-Dffh87Ow.js";import"./CartesianAxis-BPou2DWk.js";import"./Layer-DZ4WZEl1.js";import"./Text-DKRb_pWs.js";import"./DOMUtils-BtYPMtse.js";import"./Label-BXssQtMI.js";import"./ZIndexLayer-BMtWXslr.js";import"./types-CKqvof5k.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./AnimatedItems-Bb-goO_2.js";import"./useAnimationId-BbJgISg4.js";import"./ActivePoints-C16wOqeD.js";import"./Dot-JDsRBdmy.js";import"./RegisterGraphicalItemId-D4LQkijr.js";import"./GraphicalItemClipPath-CpDe9sQE.js";import"./SetGraphicalItem-DFCa6_Km.js";import"./getRadiusAndStrokeWidthFromDot-BimxZCtp.js";import"./ActiveShapeUtils-D6NCpbS5.js";import"./Curve-BiodO3IJ.js";import"./step-O6juOnPn.js";import"./path-DyVhHtw_.js";import"./graphicalItemSelectors-DgXVbdYn.js";import"./useElementOffset-DxoNRjwJ.js";import"./uniqBy-Bq10x9oa.js";import"./iteratee-V8Uwp1qB.js";import"./Cross-Dx3XzPYb.js";import"./Rectangle-DhH6fWaa.js";import"./util-Dxo8gN5i.js";import"./Sector-B5fL-Syb.js";import"./Symbols-B9FyNMJt.js";import"./symbol-Bk2j1MEP.js";const Rt={component:l},r={render:e=>t.createElement(k,{width:"100%",height:300},t.createElement(l,{margin:{top:20,right:20,bottom:20,left:20},data:d},t.createElement(a,{isAnimationActive:!1,dataKey:"uv",...e}),t.createElement(v,null),t.createElement(g,{dataKey:"name"}),t.createElement(h,null),t.createElement(u,null))),args:f(C),parameters:{docs:{description:{story:"You can tab to this chart. From there, you can use the arrow keys to navigate along the chart."}}}},o={render:()=>{const[e,y]=A.useState(!0);return t.createElement("div",null,t.createElement("button",{type:"button",onClick:()=>y(!e)},"Toggle Tooltip"),t.createElement(E,{width:500,height:400,data:d,margin:{top:10,right:30,left:0,bottom:0}},t.createElement(b,{strokeDasharray:"3 3"}),t.createElement(g,{dataKey:"name"}),t.createElement(h,null),t.createElement(a,{type:"monotone",dataKey:"uv",stackId:"1",stroke:"#8884d8",fill:"#8884d8"}),t.createElement(a,{type:"monotone",dataKey:"pv",stackId:"1",stroke:"#82ca9d",fill:"#82ca9d"}),t.createElement(a,{type:"monotone",dataKey:"amt",stackId:"1",stroke:"#ffc658",fill:"#ffc658"}),e&&t.createElement(u,null)))},args:{}};var i,m,s;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
