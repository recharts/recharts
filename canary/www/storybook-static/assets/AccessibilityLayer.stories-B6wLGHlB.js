import{r as A,R as t}from"./iframe-6ekSSt-5.js";import{g as f}from"./utils-ePvtT4un.js";import{C}from"./ComposedChartArgs-CgvqQqFx.js";import{C as l}from"./ComposedChart-D9BCUJr7.js";import{A as E}from"./AreaChart-uAVLAfBc.js";import{p as d}from"./Page-Cj8EiXz7.js";import{C as b}from"./CartesianGrid-Dl1eo7hp.js";import{X as g}from"./XAxis-XZmr7u64.js";import{Y as h}from"./YAxis-wEhmuCU5.js";import{A as a}from"./Area-HOT_Q012.js";import{T as u}from"./Tooltip-rwE03Y8s.js";import{R as k}from"./zIndexSlice-R_KvTYBp.js";import{L as v}from"./Legend-C1ysC4Gb.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-CJruUjAs.js";import"./index-Lx5OR-Dl.js";import"./index-CgnFSl-7.js";import"./index-DAO7DwMJ.js";import"./index-CsVDbkb5.js";import"./throttle-JjZtg2oI.js";import"./get-C2VjdU0L.js";import"./axisSelectors-CsclQRZu.js";import"./resolveDefaultProps-DA4rmZEN.js";import"./isWellBehavedNumber-CkJkZDTh.js";import"./d3-scale-DlyN1fPO.js";import"./renderedTicksSlice-CnpgwNhL.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-zH-5NwZD.js";import"./chartDataContext-DyyXPF9l.js";import"./CategoricalChart-DlA58TNH.js";import"./CartesianAxis-2ij8iPYj.js";import"./Layer-Caxtj8I7.js";import"./Text-9v-pfzjR.js";import"./DOMUtils-Crf9cx0d.js";import"./useId-BG9tPgK7.js";import"./useBackwardsCompatibleTheme-KnGuWCfH.js";import"./Label-CehMIv0c.js";import"./ZIndexLayer-CpjFLORN.js";import"./types-Bt2KWWGx.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./AnimatedItems-BWGnpjqe.js";import"./useAnimationId-C9PEopr_.js";import"./ActivePoints-u_x_Ht3b.js";import"./Dot-BivbT2Yg.js";import"./RegisterGraphicalItemId-CARor3cI.js";import"./GraphicalItemClipPath-Bt-KQwU_.js";import"./SetGraphicalItem-BztnRzJW.js";import"./getRadiusAndStrokeWidthFromDot-BMubedKq.js";import"./ActiveShapeUtils-BiTIzsLo.js";import"./Curve-C0RUZ2Dw.js";import"./step-bqZc_R0E.js";import"./path-DyVhHtw_.js";import"./graphicalItemIdentity-CdZfZkJ-.js";import"./graphicalItemSelectors-DWfDvKAL.js";import"./useElementOffset-BXgReAxv.js";import"./uniqBy-DbEkBBx0.js";import"./iteratee-BQZK94-Y.js";import"./Cross-D-y2QGWc.js";import"./Rectangle-K4g02Igp.js";import"./util-Dxo8gN5i.js";import"./Sector-DPGkEKQH.js";import"./Symbols-Bl5jMSR1.js";import"./symbol-Bwlr4IgF.js";const Ft={component:l},r={render:e=>t.createElement(k,{width:"100%",height:300},t.createElement(l,{margin:{top:20,right:20,bottom:20,left:20},data:d},t.createElement(a,{isAnimationActive:!1,dataKey:"uv",...e}),t.createElement(v,null),t.createElement(g,{dataKey:"name"}),t.createElement(h,null),t.createElement(u,null))),args:f(C),parameters:{docs:{description:{story:"You can tab to this chart. From there, you can use the arrow keys to navigate along the chart."}}}},o={render:()=>{const[e,y]=A.useState(!0);return t.createElement("div",null,t.createElement("button",{type:"button",onClick:()=>y(!e)},"Toggle Tooltip"),t.createElement(E,{width:500,height:400,data:d,margin:{top:10,right:30,left:0,bottom:0}},t.createElement(b,{strokeDasharray:"3 3"}),t.createElement(g,{dataKey:"name"}),t.createElement(h,null),t.createElement(a,{type:"monotone",dataKey:"uv",stackId:"1",stroke:"#8884d8",fill:"#8884d8"}),t.createElement(a,{type:"monotone",dataKey:"pv",stackId:"1",stroke:"#82ca9d",fill:"#82ca9d"}),t.createElement(a,{type:"monotone",dataKey:"amt",stackId:"1",stroke:"#ffc658",fill:"#ffc658"}),e&&t.createElement(u,null)))},args:{}};var i,m,s;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
