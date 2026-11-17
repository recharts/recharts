import{r as A,R as t}from"./iframe-DgA6x1az.js";import{g as f}from"./utils-ePvtT4un.js";import{C}from"./ComposedChartArgs-CZCIiHke.js";import{C as l}from"./ComposedChart-ByKzrUfc.js";import{A as E}from"./AreaChart-rXPsWmjJ.js";import{p as d}from"./Page-Cj8EiXz7.js";import{C as b}from"./CartesianGrid-obB5dC-e.js";import{X as g}from"./XAxis-COtnzKrI.js";import{Y as h}from"./YAxis-Bq2KiL_g.js";import{A as a}from"./Area-acXJaVUK.js";import{T as u}from"./Tooltip-CbixLulH.js";import{R as k}from"./zIndexSlice-BFMaekmq.js";import{L as v}from"./Legend-Ck_IYBzg.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-DDZDydJY.js";import"./resolveDefaultProps-WkX6zUQT.js";import"./get-cF5BDHN6.js";import"./axisSelectors-BWYipoBl.js";import"./throttle-BeFzmqAe.js";import"./index-TMkZxmcU.js";import"./index-D3kvvSt0.js";import"./polarAxisSelectors-FlPJLKCl.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-CFWCEDhR.js";import"./index-hmFEHNSs.js";import"./index-DfxP2LJH.js";import"./renderedTicksSlice-Cbzlud4G.js";import"./index-Bhp_Ctpy.js";import"./fillDefinitions-D7cR_ZXA.js";import"./CartesianChart-xScX7k_y.js";import"./chartDataContext-BQDV-mFo.js";import"./CategoricalChart-925-SQc0.js";import"./CartesianAxis-RM9TiRUv.js";import"./Layer-4UauM4-I.js";import"./Text-5b15Y2Dk.js";import"./ZIndexLayer-CKzh_iFN.js";import"./Label-SeLMQAdg.js";import"./types-BWKVAmkC.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./getRadiusAndStrokeWidthFromDot-9ffd66xL.js";import"./dataEntryStyles-C5svgbWd.js";import"./ActivePoints-D6pOQsPw.js";import"./Dot-DDXn63wb.js";import"./activeStyles-CoM8kTSe.js";import"./useAnimationId-DOzFiRYM.js";import"./Symbols-DrLVelb5.js";import"./symbol-CCLUbilH.js";import"./path-DyVhHtw_.js";import"./SetGraphicalItem-B9ymtMOj.js";import"./ActiveShapeUtils-CCImj5PR.js";import"./Curve-C1ngk-4z.js";import"./step-CeJDq7tp.js";import"./useEffectiveDataKey-B9lYa-g7.js";import"./useElementOffset-CAQy_pe4.js";import"./uniqBy-BFi66pIj.js";import"./iteratee-B8NyNZ1U.js";import"./isArguments-yB-y1yaH.js";import"./Cross-CEcV7W6E.js";import"./Rectangle-DYgSAKaQ.js";import"./util-Dxo8gN5i.js";import"./Sector-C4f4mMlC.js";const Yt={component:l},r={render:e=>t.createElement(k,{width:"100%",height:300},t.createElement(l,{margin:{top:20,right:20,bottom:20,left:20},data:d},t.createElement(a,{isAnimationActive:!1,dataKey:"uv",...e}),t.createElement(v,null),t.createElement(g,{dataKey:"name"}),t.createElement(h,null),t.createElement(u,null))),args:f(C),parameters:{docs:{description:{story:"You can tab to this chart. From there, you can use the arrow keys to navigate along the chart."}}}},o={render:()=>{const[e,y]=A.useState(!0);return t.createElement("div",null,t.createElement("button",{type:"button",onClick:()=>y(!e)},"Toggle Tooltip"),t.createElement(E,{width:500,height:400,data:d,margin:{top:10,right:30,left:0,bottom:0}},t.createElement(b,{strokeDasharray:"3 3"}),t.createElement(g,{dataKey:"name"}),t.createElement(h,null),t.createElement(a,{type:"monotone",dataKey:"uv",stackId:"1",stroke:"#8884d8",fill:"#8884d8"}),t.createElement(a,{type:"monotone",dataKey:"pv",stackId:"1",stroke:"#82ca9d",fill:"#82ca9d"}),t.createElement(a,{type:"monotone",dataKey:"amt",stackId:"1",stroke:"#ffc658",fill:"#ffc658"}),e&&t.createElement(u,null)))},args:{}},Dt=["AreaChartWithAccessibilityLayer","AccessibleWithButton"];var n,i,m;r.parameters={...r.parameters,docs:{...(n=r.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
}`,...(c=(p=o.parameters)==null?void 0:p.docs)==null?void 0:c.source}}};export{o as AccessibleWithButton,r as AreaChartWithAccessibilityLayer,Dt as __namedExportsOrder,Yt as default};
