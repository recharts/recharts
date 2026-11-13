import{r as A,R as t}from"./iframe-CXZlrf2U.js";import{g as f}from"./utils-ePvtT4un.js";import{C}from"./ComposedChartArgs-CZCIiHke.js";import{C as l}from"./ComposedChart-Cd7Rssjf.js";import{A as E}from"./AreaChart-Bsdmq1M1.js";import{p as d}from"./Page-Cj8EiXz7.js";import{C as b}from"./CartesianGrid-BvL82dRH.js";import{X as g}from"./XAxis-CiwCXYrG.js";import{Y as h}from"./YAxis-DfNp35yd.js";import{A as a}from"./Area-DhWYjEGJ.js";import{T as u}from"./Tooltip-Cyx-4zKK.js";import{R as k}from"./zIndexSlice-BjX2jCNd.js";import{L as v}from"./Legend-B1ZRCfGH.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-DH-5ZOsj.js";import"./resolveDefaultProps-DzsDYtS8.js";import"./get-cF5BDHN6.js";import"./axisSelectors-CXSRT8oe.js";import"./throttle-CeMcgCrB.js";import"./index-BXews0N3.js";import"./index-BQ37V211.js";import"./polarAxisSelectors-C9d2CYxT.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-BmN7CMF4.js";import"./index-CPNldOVQ.js";import"./index-Dwq43-hP.js";import"./renderedTicksSlice-CNKxG0p9.js";import"./index-B6CEgg-5.js";import"./fillDefinitions-CXni0F_U.js";import"./CartesianChart-BF67_Mbn.js";import"./chartDataContext-Cr6H1IFD.js";import"./CategoricalChart-C5S6zTyC.js";import"./CartesianAxis-BaftQfIs.js";import"./Layer-cEFsn6Cd.js";import"./Text-ypQmpcnA.js";import"./ZIndexLayer-oMBe6LXA.js";import"./Label-DMZfCKi2.js";import"./types-BoOwr3-k.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./dataEntryStyles-CAbAzZrW.js";import"./ActivePoints-BSxRgFzT.js";import"./Dot-jYZs8or3.js";import"./activeStyles-guaYkALv.js";import"./useAnimationId-Bvdrz9cO.js";import"./Symbols-BDMCO_-i.js";import"./symbol-BZ1H3BIy.js";import"./path-DyVhHtw_.js";import"./SetGraphicalItem-GFUHKXGI.js";import"./getRadiusAndStrokeWidthFromDot-CwxjjF24.js";import"./ActiveShapeUtils-DAjhd_ui.js";import"./Curve-DIPpxfHS.js";import"./step-CMXLmVWU.js";import"./useEffectiveDataKey-ojW0Z0fn.js";import"./useElementOffset-Cf7KVjqL.js";import"./uniqBy--p3p2aBD.js";import"./iteratee-BIhFTfdN.js";import"./isArguments-yB-y1yaH.js";import"./Cross-FM7UdSZS.js";import"./Rectangle-C40_qBeq.js";import"./util-Dxo8gN5i.js";import"./Sector-C8LqmJ0g.js";const Yt={component:l},r={render:e=>t.createElement(k,{width:"100%",height:300},t.createElement(l,{margin:{top:20,right:20,bottom:20,left:20},data:d},t.createElement(a,{isAnimationActive:!1,dataKey:"uv",...e}),t.createElement(v,null),t.createElement(g,{dataKey:"name"}),t.createElement(h,null),t.createElement(u,null))),args:f(C),parameters:{docs:{description:{story:"You can tab to this chart. From there, you can use the arrow keys to navigate along the chart."}}}},o={render:()=>{const[e,y]=A.useState(!0);return t.createElement("div",null,t.createElement("button",{type:"button",onClick:()=>y(!e)},"Toggle Tooltip"),t.createElement(E,{width:500,height:400,data:d,margin:{top:10,right:30,left:0,bottom:0}},t.createElement(b,{strokeDasharray:"3 3"}),t.createElement(g,{dataKey:"name"}),t.createElement(h,null),t.createElement(a,{type:"monotone",dataKey:"uv",stackId:"1",stroke:"#8884d8",fill:"#8884d8"}),t.createElement(a,{type:"monotone",dataKey:"pv",stackId:"1",stroke:"#82ca9d",fill:"#82ca9d"}),t.createElement(a,{type:"monotone",dataKey:"amt",stackId:"1",stroke:"#ffc658",fill:"#ffc658"}),e&&t.createElement(u,null)))},args:{}},Dt=["AreaChartWithAccessibilityLayer","AccessibleWithButton"];var n,i,m;r.parameters={...r.parameters,docs:{...(n=r.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
