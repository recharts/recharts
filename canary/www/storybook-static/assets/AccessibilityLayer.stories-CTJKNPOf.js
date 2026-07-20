import{r as A,R as t}from"./iframe-vOLnYXOZ.js";import{g as f}from"./utils-ePvtT4un.js";import{C}from"./ComposedChartArgs-CgvqQqFx.js";import{C as l}from"./ComposedChart-CHIk5yi2.js";import{A as E}from"./AreaChart-BmWo8SM4.js";import{p as d}from"./Page-Cj8EiXz7.js";import{C as b}from"./CartesianGrid-BHd5fEEF.js";import{X as g}from"./XAxis-DZdEV9rv.js";import{Y as h}from"./YAxis-jgbh3-iB.js";import{A as a}from"./Area-BaWs6fMn.js";import{T as u}from"./Tooltip-Bb3rvUwP.js";import{R as k}from"./zIndexSlice-Mv0cm5Fz.js";import{L as v}from"./Legend-BgZ9uuiC.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-cdIriNtS.js";import"./index-C_GLmlAa.js";import"./index-loUlOQAQ.js";import"./index-Ccx6Fn8x.js";import"./index-Bno8px0F.js";import"./throttle-H6UrPiO3.js";import"./get-DJ3830uQ.js";import"./renderedTicksSlice-zOvani6W.js";import"./axisSelectors-9pB8uUjg.js";import"./resolveDefaultProps-DMvU9hKF.js";import"./isWellBehavedNumber-TyK-Q9bs.js";import"./d3-scale-CXVWvw2_.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-6FCR2qTV.js";import"./chartDataContext-CdBeAXiw.js";import"./CategoricalChart-BHtJtaWL.js";import"./CartesianAxis-B04tnKne.js";import"./Layer-BzdlA6Ig.js";import"./Text-FiyA8tGX.js";import"./DOMUtils-Di4Ni1ZE.js";import"./Label-D2t7QHPj.js";import"./ZIndexLayer-DaGlu0J6.js";import"./types-DL_lANQl.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-Crkas5dz.js";import"./AnimatedItems-M5yh8SZt.js";import"./useAnimationId-J9bbR3c6.js";import"./ActivePoints-DMSGIjaa.js";import"./Dot-BOZyGCoc.js";import"./RegisterGraphicalItemId-YQ-tZiZG.js";import"./GraphicalItemClipPath-CSPsls6A.js";import"./SetGraphicalItem-Dz9FndIn.js";import"./getRadiusAndStrokeWidthFromDot-DaL3Xp1Q.js";import"./ActiveShapeUtils-CX_xtPwj.js";import"./Curve-DpB1TURa.js";import"./step-DBkijEka.js";import"./path-DyVhHtw_.js";import"./graphicalItemSelectors-Das7x7Jz.js";import"./useElementOffset-BxXr0q4n.js";import"./uniqBy-B-zSRekl.js";import"./iteratee-BhNLOt-G.js";import"./Cross-_eiJhukN.js";import"./Rectangle-DGmUUWeF.js";import"./util-Dxo8gN5i.js";import"./Sector-aoDqeOQX.js";import"./Symbols-BwMlZ9Li.js";import"./symbol-B3MWu_Fr.js";const St={component:l},r={render:e=>t.createElement(k,{width:"100%",height:300},t.createElement(l,{margin:{top:20,right:20,bottom:20,left:20},data:d},t.createElement(a,{isAnimationActive:!1,dataKey:"uv",...e}),t.createElement(v,null),t.createElement(g,{dataKey:"name"}),t.createElement(h,null),t.createElement(u,null))),args:f(C),parameters:{docs:{description:{story:"You can tab to this chart. From there, you can use the arrow keys to navigate along the chart."}}}},o={render:()=>{const[e,y]=A.useState(!0);return t.createElement("div",null,t.createElement("button",{type:"button",onClick:()=>y(!e)},"Toggle Tooltip"),t.createElement(E,{width:500,height:400,data:d,margin:{top:10,right:30,left:0,bottom:0}},t.createElement(b,{strokeDasharray:"3 3"}),t.createElement(g,{dataKey:"name"}),t.createElement(h,null),t.createElement(a,{type:"monotone",dataKey:"uv",stackId:"1",stroke:"#8884d8",fill:"#8884d8"}),t.createElement(a,{type:"monotone",dataKey:"pv",stackId:"1",stroke:"#82ca9d",fill:"#82ca9d"}),t.createElement(a,{type:"monotone",dataKey:"amt",stackId:"1",stroke:"#ffc658",fill:"#ffc658"}),e&&t.createElement(u,null)))},args:{}};var i,m,s;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
