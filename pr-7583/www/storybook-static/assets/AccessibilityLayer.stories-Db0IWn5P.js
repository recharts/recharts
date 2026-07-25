import{r as A,R as t}from"./iframe-DtpJQkSw.js";import{g as f}from"./utils-ePvtT4un.js";import{C}from"./ComposedChartArgs-CgvqQqFx.js";import{C as l}from"./ComposedChart-oPCW50r4.js";import{A as E}from"./AreaChart-CZoDUxh_.js";import{p as d}from"./Page-Cj8EiXz7.js";import{C as b}from"./CartesianGrid-BRuRV5-q.js";import{X as g}from"./XAxis-BDLA9mvH.js";import{Y as h}from"./YAxis-7KC79Jwd.js";import{A as a}from"./Area-BmBbTw6H.js";import{T as u}from"./Tooltip-zaUriAhU.js";import{R as k}from"./zIndexSlice-Dy2ZfcaY.js";import{L as v}from"./Legend-Xcv6dTtn.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-GuBZSFZ_.js";import"./index-Vvo-Q6um.js";import"./index-CFRYfm15.js";import"./index-CVik1Y94.js";import"./index-qBeIIgbT.js";import"./throttle-CYLsUs0w.js";import"./get-DJ3830uQ.js";import"./renderedTicksSlice-C4FsNrs6.js";import"./axisSelectors-BtA0yFqg.js";import"./resolveDefaultProps-Cjc4ovdW.js";import"./isWellBehavedNumber-BvF_giMt.js";import"./d3-scale-BbQAu0RB.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-DwY-VUV4.js";import"./chartDataContext-CkSWHG6R.js";import"./CategoricalChart-B6Np4ceD.js";import"./CartesianAxis-xTL6XmTN.js";import"./Layer-A5fdUiAt.js";import"./Text-CTFoNHWc.js";import"./DOMUtils-Cb4JkhR_.js";import"./Label-C9iRyFHw.js";import"./ZIndexLayer-BnsLSc-b.js";import"./types-D6abfmrW.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-Crkas5dz.js";import"./AnimatedItems-EBWp9peZ.js";import"./useAnimationId-B_99W7UQ.js";import"./ActivePoints-G-h1IpPy.js";import"./Dot-DSt-WMWp.js";import"./RegisterGraphicalItemId-Bw3Bvi6g.js";import"./GraphicalItemClipPath-DeNzzcHV.js";import"./SetGraphicalItem-x1medb7e.js";import"./getRadiusAndStrokeWidthFromDot-N4R43LAE.js";import"./ActiveShapeUtils-DirzpQmC.js";import"./Curve-D1mPklqy.js";import"./step-WcxcGmzd.js";import"./path-DyVhHtw_.js";import"./graphicalItemSelectors-3hFJ8itx.js";import"./useElementOffset-C4-NwrTh.js";import"./uniqBy-BnEmKZKr.js";import"./iteratee-ySlvR2sc.js";import"./Cross-B0Cxc6Kn.js";import"./Rectangle-C0kyo6e1.js";import"./util-Dxo8gN5i.js";import"./Sector-SxN6jnjg.js";import"./Symbols-DDPwPNmK.js";import"./symbol-avOxhd6C.js";const St={component:l},r={render:e=>t.createElement(k,{width:"100%",height:300},t.createElement(l,{margin:{top:20,right:20,bottom:20,left:20},data:d},t.createElement(a,{isAnimationActive:!1,dataKey:"uv",...e}),t.createElement(v,null),t.createElement(g,{dataKey:"name"}),t.createElement(h,null),t.createElement(u,null))),args:f(C),parameters:{docs:{description:{story:"You can tab to this chart. From there, you can use the arrow keys to navigate along the chart."}}}},o={render:()=>{const[e,y]=A.useState(!0);return t.createElement("div",null,t.createElement("button",{type:"button",onClick:()=>y(!e)},"Toggle Tooltip"),t.createElement(E,{width:500,height:400,data:d,margin:{top:10,right:30,left:0,bottom:0}},t.createElement(b,{strokeDasharray:"3 3"}),t.createElement(g,{dataKey:"name"}),t.createElement(h,null),t.createElement(a,{type:"monotone",dataKey:"uv",stackId:"1",stroke:"#8884d8",fill:"#8884d8"}),t.createElement(a,{type:"monotone",dataKey:"pv",stackId:"1",stroke:"#82ca9d",fill:"#82ca9d"}),t.createElement(a,{type:"monotone",dataKey:"amt",stackId:"1",stroke:"#ffc658",fill:"#ffc658"}),e&&t.createElement(u,null)))},args:{}};var i,m,s;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
