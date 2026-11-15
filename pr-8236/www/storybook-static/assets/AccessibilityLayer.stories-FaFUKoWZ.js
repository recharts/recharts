import{r as A,R as t}from"./iframe-BhLunS0i.js";import{g as f}from"./utils-ePvtT4un.js";import{C}from"./ComposedChartArgs-CZCIiHke.js";import{C as l}from"./ComposedChart-prDwTclO.js";import{A as E}from"./AreaChart-DyQyihyV.js";import{p as d}from"./Page-Cj8EiXz7.js";import{C as b}from"./CartesianGrid-jJH8HMQK.js";import{X as g}from"./XAxis-gG48cTvb.js";import{Y as h}from"./YAxis-D6-PxaVK.js";import{A as a}from"./Area-DCghXefF.js";import{T as u}from"./Tooltip-BdCJK4dj.js";import{R as k}from"./zIndexSlice-DSPJCLFE.js";import{L as v}from"./Legend-CXDoxvwS.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-wQ1gT1I0.js";import"./resolveDefaultProps-DXAJRd9k.js";import"./get-cF5BDHN6.js";import"./axisSelectors-D1ydZeah.js";import"./throttle-CRN4ZNKA.js";import"./index-H7oJ2m7W.js";import"./index-CcZqU02h.js";import"./polarAxisSelectors-BbkwWyBS.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-DitufHHw.js";import"./index-D0rCwL5o.js";import"./index-DIg_N1nK.js";import"./renderedTicksSlice-R-_VMDVC.js";import"./index-CFjbQa5l.js";import"./fillDefinitions-CiiNJPEd.js";import"./CartesianChart-Bh_JRPa2.js";import"./chartDataContext-BNqwthL0.js";import"./CategoricalChart-D-9XLz-N.js";import"./CartesianAxis-D8zKHO5C.js";import"./Layer-BM8-5uQX.js";import"./Text-DaAfyhaD.js";import"./ZIndexLayer-DT0AmS3A.js";import"./Label-BKkx1Yqi.js";import"./types-CT83QobA.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./dataEntryStyles-V8RFTVJZ.js";import"./ActivePoints-B_P37ke-.js";import"./Dot-5madfp2A.js";import"./activeStyles-CJzsRDKh.js";import"./useAnimationId-Xa81ZCl9.js";import"./Symbols-DZ9QCbQ8.js";import"./symbol-C4ewZ54u.js";import"./path-DyVhHtw_.js";import"./SetGraphicalItem-DMPKHwhz.js";import"./getRadiusAndStrokeWidthFromDot-DJtKm8XN.js";import"./ActiveShapeUtils-DTLaa-AG.js";import"./Curve-LlXUYE-L.js";import"./step-C270rjWW.js";import"./useEffectiveDataKey-0h-gJoNJ.js";import"./useElementOffset-CqLb8czN.js";import"./uniqBy-BLbM-jB1.js";import"./iteratee-BGzKQzLt.js";import"./isArguments-yB-y1yaH.js";import"./Cross-BYYJ1ucY.js";import"./Rectangle-Ioyw2VQ4.js";import"./util-Dxo8gN5i.js";import"./Sector-CwkUIIQR.js";const Yt={component:l},r={render:e=>t.createElement(k,{width:"100%",height:300},t.createElement(l,{margin:{top:20,right:20,bottom:20,left:20},data:d},t.createElement(a,{isAnimationActive:!1,dataKey:"uv",...e}),t.createElement(v,null),t.createElement(g,{dataKey:"name"}),t.createElement(h,null),t.createElement(u,null))),args:f(C),parameters:{docs:{description:{story:"You can tab to this chart. From there, you can use the arrow keys to navigate along the chart."}}}},o={render:()=>{const[e,y]=A.useState(!0);return t.createElement("div",null,t.createElement("button",{type:"button",onClick:()=>y(!e)},"Toggle Tooltip"),t.createElement(E,{width:500,height:400,data:d,margin:{top:10,right:30,left:0,bottom:0}},t.createElement(b,{strokeDasharray:"3 3"}),t.createElement(g,{dataKey:"name"}),t.createElement(h,null),t.createElement(a,{type:"monotone",dataKey:"uv",stackId:"1",stroke:"#8884d8",fill:"#8884d8"}),t.createElement(a,{type:"monotone",dataKey:"pv",stackId:"1",stroke:"#82ca9d",fill:"#82ca9d"}),t.createElement(a,{type:"monotone",dataKey:"amt",stackId:"1",stroke:"#ffc658",fill:"#ffc658"}),e&&t.createElement(u,null)))},args:{}},Dt=["AreaChartWithAccessibilityLayer","AccessibleWithButton"];var n,i,m;r.parameters={...r.parameters,docs:{...(n=r.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
