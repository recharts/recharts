import{r as A,R as t}from"./iframe-CFlvYhwJ.js";import{g as f}from"./utils-ePvtT4un.js";import{C}from"./ComposedChartArgs-CgvqQqFx.js";import{C as l}from"./ComposedChart-B5QMSZu4.js";import{A as E}from"./AreaChart-CAHznjNX.js";import{p as d}from"./Page-Cj8EiXz7.js";import{C as b}from"./CartesianGrid-DxEsM2_F.js";import{X as g}from"./XAxis-BkEb723n.js";import{Y as h}from"./YAxis-HOrPhXMW.js";import{A as a}from"./Area-BMHl4n1a.js";import{T as u}from"./Tooltip-A5l7NwTV.js";import{R as k}from"./zIndexSlice-DsYga1t6.js";import{L as v}from"./Legend-Cf88ChVG.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-CRpfhqml.js";import"./index-CkY-i2Tp.js";import"./index-BETjCkd5.js";import"./index-CK40W1ET.js";import"./index-CMfIljZ8.js";import"./throttle-DGHHBzas.js";import"./get-C2VjdU0L.js";import"./renderedTicksSlice-1CrcAe52.js";import"./axisSelectors-CI91Gt8x.js";import"./resolveDefaultProps-D1HAFajw.js";import"./isWellBehavedNumber-CZKybQSl.js";import"./d3-scale-dVjou3RT.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-BaNzafos.js";import"./chartDataContext-C13UfWCq.js";import"./CategoricalChart-DdrlD6Qo.js";import"./CartesianAxis-CTp7B_-s.js";import"./Layer-CW0ll6KY.js";import"./Text-DN7KrSut.js";import"./DOMUtils-D9HWXXxc.js";import"./Label-QMoyFNov.js";import"./ZIndexLayer-CvEqpirx.js";import"./types-CdMLkiLP.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./RechartsThemeContext-DehnkZN_.js";import"./isBuffer-BG75eWKN.js";import"./AnimatedItems-DsKEiEFE.js";import"./useAnimationId-C-XOTnuE.js";import"./ActivePoints-7_4sir7A.js";import"./Dot-DikTEoY0.js";import"./RegisterGraphicalItemId-Dt1qkWl-.js";import"./GraphicalItemClipPath-CRnvGLDA.js";import"./SetGraphicalItem-BR7YSlkQ.js";import"./graphicalItemIdentity-D5gCgso6.js";import"./ActiveShapeUtils-CfzUyvN7.js";import"./Curve-C-oh9Gi7.js";import"./step-De1pGJyj.js";import"./path-DyVhHtw_.js";import"./graphicalItemSelectors-kYvFKoKv.js";import"./useElementOffset-CBycoxNA.js";import"./uniqBy-CdjrOVMj.js";import"./iteratee-gRbCXcE0.js";import"./Cross-BZfu-qo2.js";import"./Rectangle-D-gwz3zD.js";import"./util-Dxo8gN5i.js";import"./Sector-DXbenR2K.js";import"./Symbols-DCbX0jj1.js";import"./symbol-UZk0eoHb.js";const Yt={component:l},r={render:e=>t.createElement(k,{width:"100%",height:300},t.createElement(l,{margin:{top:20,right:20,bottom:20,left:20},data:d},t.createElement(a,{isAnimationActive:!1,dataKey:"uv",...e}),t.createElement(v,null),t.createElement(g,{dataKey:"name"}),t.createElement(h,null),t.createElement(u,null))),args:f(C),parameters:{docs:{description:{story:"You can tab to this chart. From there, you can use the arrow keys to navigate along the chart."}}}},o={render:()=>{const[e,y]=A.useState(!0);return t.createElement("div",null,t.createElement("button",{type:"button",onClick:()=>y(!e)},"Toggle Tooltip"),t.createElement(E,{width:500,height:400,data:d,margin:{top:10,right:30,left:0,bottom:0}},t.createElement(b,{strokeDasharray:"3 3"}),t.createElement(g,{dataKey:"name"}),t.createElement(h,null),t.createElement(a,{type:"monotone",dataKey:"uv",stackId:"1",stroke:"#8884d8",fill:"#8884d8"}),t.createElement(a,{type:"monotone",dataKey:"pv",stackId:"1",stroke:"#82ca9d",fill:"#82ca9d"}),t.createElement(a,{type:"monotone",dataKey:"amt",stackId:"1",stroke:"#ffc658",fill:"#ffc658"}),e&&t.createElement(u,null)))},args:{}};var i,m,s;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
