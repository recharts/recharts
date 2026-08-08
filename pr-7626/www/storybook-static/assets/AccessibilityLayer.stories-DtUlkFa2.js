import{r as A,R as t}from"./iframe-rYRmlY_w.js";import{g as f}from"./utils-ePvtT4un.js";import{C}from"./ComposedChartArgs-CgvqQqFx.js";import{C as l}from"./ComposedChart-CJWWrFGv.js";import{A as E}from"./AreaChart-Bu0o9VBO.js";import{p as d}from"./Page-Cj8EiXz7.js";import{C as b}from"./CartesianGrid-B1mxfGL-.js";import{X as g}from"./XAxis-B2S1kxsc.js";import{Y as h}from"./YAxis-BWeWjLFg.js";import{A as a}from"./Area-DYNtPeeR.js";import{T as u}from"./Tooltip-BJy8LCx9.js";import{R as k}from"./zIndexSlice-CW9g3Df4.js";import{L as v}from"./Legend-DTUQ316l.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-Df0Nzpvc.js";import"./index-LHDP7ZRA.js";import"./index-mkET9CIq.js";import"./index-C9MyWVnc.js";import"./index-XYmaX6Gc.js";import"./throttle-DMLB0n1a.js";import"./get-C2VjdU0L.js";import"./axisSelectors-CawrvlcN.js";import"./resolveDefaultProps-BpsYi27l.js";import"./isWellBehavedNumber-I3Ct3Qx4.js";import"./d3-scale-C-FCD3Na.js";import"./renderedTicksSlice-BaDCcj0z.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-Di-wUoL0.js";import"./chartDataContext-CUzIUSSV.js";import"./CategoricalChart-BXI0eqUO.js";import"./CartesianAxis-BPXoMhkW.js";import"./Layer-Dpa7ZKP5.js";import"./Text-yyeh64ow.js";import"./DOMUtils-vuT3ag2A.js";import"./Label-C_0fnefy.js";import"./ZIndexLayer-DjuCBj9U.js";import"./types-B2Hj88Lf.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./RechartsThemeContext-C6kBHVPv.js";import"./isBuffer-BG75eWKN.js";import"./AnimatedItems-CIev447X.js";import"./useAnimationId-B08Ps5mJ.js";import"./ActivePoints-BM73sJ66.js";import"./Dot-BJyh6EJc.js";import"./RegisterGraphicalItemId-CgoQC8_y.js";import"./graphicalItemIdentity-CcyqkVrD.js";import"./SetGraphicalItem-BR2pwaBe.js";import"./getRadiusAndStrokeWidthFromDot-rFO_VTeN.js";import"./ActiveShapeUtils-CwtXXETb.js";import"./Curve-Dde8oLlo.js";import"./step-BmztjEzR.js";import"./path-DyVhHtw_.js";import"./graphicalItemSelectors-CX8YC0IP.js";import"./useElementOffset-BlBkdftn.js";import"./uniqBy-1Q7zCRmp.js";import"./iteratee-C2W6XbU2.js";import"./Cross-Ce6okpil.js";import"./Rectangle-B78Clo56.js";import"./util-Dxo8gN5i.js";import"./Sector-CY7poIyV.js";import"./Symbols-hfYUrlaK.js";import"./symbol-Bbig07af.js";const Yt={component:l},r={render:e=>t.createElement(k,{width:"100%",height:300},t.createElement(l,{margin:{top:20,right:20,bottom:20,left:20},data:d},t.createElement(a,{isAnimationActive:!1,dataKey:"uv",...e}),t.createElement(v,null),t.createElement(g,{dataKey:"name"}),t.createElement(h,null),t.createElement(u,null))),args:f(C),parameters:{docs:{description:{story:"You can tab to this chart. From there, you can use the arrow keys to navigate along the chart."}}}},o={render:()=>{const[e,y]=A.useState(!0);return t.createElement("div",null,t.createElement("button",{type:"button",onClick:()=>y(!e)},"Toggle Tooltip"),t.createElement(E,{width:500,height:400,data:d,margin:{top:10,right:30,left:0,bottom:0}},t.createElement(b,{strokeDasharray:"3 3"}),t.createElement(g,{dataKey:"name"}),t.createElement(h,null),t.createElement(a,{type:"monotone",dataKey:"uv",stackId:"1",stroke:"#8884d8",fill:"#8884d8"}),t.createElement(a,{type:"monotone",dataKey:"pv",stackId:"1",stroke:"#82ca9d",fill:"#82ca9d"}),t.createElement(a,{type:"monotone",dataKey:"amt",stackId:"1",stroke:"#ffc658",fill:"#ffc658"}),e&&t.createElement(u,null)))},args:{}};var i,m,s;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
}`,...(c=(p=o.parameters)==null?void 0:p.docs)==null?void 0:c.source}}};const Dt=["AreaChartWithAccessibilityLayer","AccessibleWithButton"];export{o as AccessibleWithButton,r as AreaChartWithAccessibilityLayer,Dt as __namedExportsOrder,Yt as default};
