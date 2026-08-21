import{r as A,R as t}from"./iframe-CZFgSFnm.js";import{g as f}from"./utils-ePvtT4un.js";import{C}from"./ComposedChartArgs-CgvqQqFx.js";import{C as l}from"./ComposedChart-DvkJAhLc.js";import{A as E}from"./AreaChart-C5zWlRMp.js";import{p as d}from"./Page-Cj8EiXz7.js";import{C as b}from"./CartesianGrid-ZRP5AK6C.js";import{X as g}from"./XAxis-BfXelSpG.js";import{Y as h}from"./YAxis-DRz0mmf0.js";import{A as a}from"./Area-DtbnDJpx.js";import{T as u}from"./Tooltip-Co9qJeVv.js";import{R as k}from"./zIndexSlice-CTISp4tv.js";import{L as v}from"./Legend-D3th5Mpv.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-DvRLJ5Qk.js";import"./index-DYK-T1Xx.js";import"./index-CW1iMe2m.js";import"./index-DX3tFi2I.js";import"./index-BJs7iDzc.js";import"./throttle-DrSRHMPG.js";import"./get-C2VjdU0L.js";import"./axisSelectors-LF1AULtu.js";import"./resolveDefaultProps-e55Twtbt.js";import"./isWellBehavedNumber-DUdaibLy.js";import"./d3-scale-Brc85VvE.js";import"./renderedTicksSlice-D-MBTj4C.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-PmCypDgu.js";import"./chartDataContext-CvAeifx3.js";import"./CategoricalChart-dvJV-_Rh.js";import"./CartesianAxis-XGvO_fDW.js";import"./Layer-C6R-wMgD.js";import"./Text-Dna8Rnzv.js";import"./DOMUtils-Ba5sbmYY.js";import"./useId-C0SVDnoD.js";import"./useBackwardsCompatibleTheme-xKYPlRvL.js";import"./Label-CMeQeDmk.js";import"./ZIndexLayer-Xe1tLTY7.js";import"./types-C_Z_MS2b.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./AnimatedItems-DmVERa1o.js";import"./useAnimationId-DM0V1ULk.js";import"./ActivePoints-B418SJ-y.js";import"./Dot-CWSN_a_c.js";import"./RegisterGraphicalItemId-CA2MokDU.js";import"./GraphicalItemClipPath-BA_NbQWw.js";import"./SetGraphicalItem-DBiVF70L.js";import"./getRadiusAndStrokeWidthFromDot-195plUkS.js";import"./ActiveShapeUtils-CWrsW3HO.js";import"./Curve-BnTjqqkL.js";import"./step-CY8jqLlm.js";import"./path-DyVhHtw_.js";import"./graphicalItemIdentity-CdZfZkJ-.js";import"./graphicalItemSelectors-DlwaWh21.js";import"./useElementOffset-Dvg0rJ3O.js";import"./uniqBy-CbHkWAW5.js";import"./iteratee-BfOUB73k.js";import"./Cross-kBllAEvX.js";import"./Rectangle-DaKn8iZV.js";import"./util-Dxo8gN5i.js";import"./Sector-Dy81bP9C.js";import"./Symbols-Df8fkzhw.js";import"./symbol-zDkx850_.js";const Ft={component:l},r={render:e=>t.createElement(k,{width:"100%",height:300},t.createElement(l,{margin:{top:20,right:20,bottom:20,left:20},data:d},t.createElement(a,{isAnimationActive:!1,dataKey:"uv",...e}),t.createElement(v,null),t.createElement(g,{dataKey:"name"}),t.createElement(h,null),t.createElement(u,null))),args:f(C),parameters:{docs:{description:{story:"You can tab to this chart. From there, you can use the arrow keys to navigate along the chart."}}}},o={render:()=>{const[e,y]=A.useState(!0);return t.createElement("div",null,t.createElement("button",{type:"button",onClick:()=>y(!e)},"Toggle Tooltip"),t.createElement(E,{width:500,height:400,data:d,margin:{top:10,right:30,left:0,bottom:0}},t.createElement(b,{strokeDasharray:"3 3"}),t.createElement(g,{dataKey:"name"}),t.createElement(h,null),t.createElement(a,{type:"monotone",dataKey:"uv",stackId:"1",stroke:"#8884d8",fill:"#8884d8"}),t.createElement(a,{type:"monotone",dataKey:"pv",stackId:"1",stroke:"#82ca9d",fill:"#82ca9d"}),t.createElement(a,{type:"monotone",dataKey:"amt",stackId:"1",stroke:"#ffc658",fill:"#ffc658"}),e&&t.createElement(u,null)))},args:{}};var i,m,s;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
}`,...(c=(p=o.parameters)==null?void 0:p.docs)==null?void 0:c.source}}};const Wt=["AreaChartWithAccessibilityLayer","AccessibleWithButton"];export{o as AccessibleWithButton,r as AreaChartWithAccessibilityLayer,Wt as __namedExportsOrder,Ft as default};
