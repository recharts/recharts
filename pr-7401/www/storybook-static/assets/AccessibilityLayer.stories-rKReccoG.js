import{P as A,c as t}from"./iframe-Bhg7B6nu.js";import{g as f}from"./utils-ePvtT4un.js";import{C}from"./ComposedChartArgs-_dvL9nac.js";import{C as l}from"./ComposedChart-BWL58mxx.js";import{A as E}from"./AreaChart-CyB3X5T6.js";import{p as d}from"./Page-DPte-9pC.js";import{C as b}from"./CartesianGrid-2VeWgHga.js";import{X as g}from"./XAxis-BaFC3En6.js";import{Y as h}from"./YAxis-CDnoamqb.js";import{A as a}from"./Area-I3jEoRhc.js";import{T as u}from"./Tooltip-uYtmtlnI.js";import{g as k}from"./zIndexSlice-CpfnlaY3.js";import{L as v}from"./Legend-BV6bfmU5.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-BO-9qVe8.js";import"./index-hZ-hNf3X.js";import"./index-LweJEeHr.js";import"./index-fTPSImHI.js";import"./index-BeLXdiSX.js";import"./immer-DB_z4hP2.js";import"./get-Bdfg8b7E.js";import"./renderedTicksSlice-BWF9zmW-.js";import"./axisSelectors-CdfzhIk0.js";import"./d3-scale-CZa5b7JS.js";import"./resolveDefaultProps-DYGylzt5.js";import"./isWellBehavedNumber-CRt7foTE.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-B_99cbzZ.js";import"./chartDataContext-CTHxBaCW.js";import"./CategoricalChart-Dr5hcJGP.js";import"./CartesianAxis-D1bYab0n.js";import"./Layer-CWtBt3tO.js";import"./Text-B3Epq4Nr.js";import"./DOMUtils-umXRQPav.js";import"./Label-g9fCGbFu.js";import"./ZIndexLayer-BLUBt3jh.js";import"./types-CBsC6Zml.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./Curve-CepT2fcB.js";import"./step-B9W3HLIp.js";import"./path-DyVhHtw_.js";import"./ReactUtils-BhSP1QaD.js";import"./ActivePoints-DopF7LMV.js";import"./Dot-DS4twGmw.js";import"./RegisterGraphicalItemId-BzH-PWzG.js";import"./GraphicalItemClipPath-BljaU2rV.js";import"./SetGraphicalItem-DpMnWL3z.js";import"./useAnimationId-CDEhZOSy.js";import"./getRadiusAndStrokeWidthFromDot-CR_o6rYy.js";import"./graphicalItemSelectors-g28FeUhA.js";import"./useElementOffset-ByWie8Pg.js";import"./uniqBy-DE9J9zXb.js";import"./iteratee-_s1w9D9m.js";import"./Cross-D5JF58Wa.js";import"./Rectangle-JbDXy-um.js";import"./Sector-C5Td0knX.js";import"./Symbols-D0IR3Ewb.js";import"./symbol-DtDt1tne.js";const It={component:l},r={render:e=>t.createElement(k,{width:"100%",height:300},t.createElement(l,{margin:{top:20,right:20,bottom:20,left:20},data:d},t.createElement(a,{isAnimationActive:!1,dataKey:"uv",...e}),t.createElement(v,null),t.createElement(g,{dataKey:"name"}),t.createElement(h,null),t.createElement(u,null))),args:f(C),parameters:{docs:{description:{story:"You can tab to this chart. From there, you can use the arrow keys to navigate along the chart."}}}},o={render:()=>{const[e,y]=A.useState(!0);return t.createElement("div",null,t.createElement("button",{type:"button",onClick:()=>y(!e)},"Toggle Tooltip"),t.createElement(E,{width:500,height:400,data:d,margin:{top:10,right:30,left:0,bottom:0}},t.createElement(b,{strokeDasharray:"3 3"}),t.createElement(g,{dataKey:"name"}),t.createElement(h,null),t.createElement(a,{type:"monotone",dataKey:"uv",stackId:"1",stroke:"#8884d8",fill:"#8884d8"}),t.createElement(a,{type:"monotone",dataKey:"pv",stackId:"1",stroke:"#82ca9d",fill:"#82ca9d"}),t.createElement(a,{type:"monotone",dataKey:"amt",stackId:"1",stroke:"#ffc658",fill:"#ffc658"}),e&&t.createElement(u,null)))},args:{}};var i,m,s;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
}`,...(c=(p=o.parameters)==null?void 0:p.docs)==null?void 0:c.source}}};const Lt=["AreaChartWithAccessibilityLayer","AccessibleWithButton"];export{o as AccessibleWithButton,r as AreaChartWithAccessibilityLayer,Lt as __namedExportsOrder,It as default};
