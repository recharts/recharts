import{r as A,R as t}from"./iframe-mx_m0Bbx.js";import{g as f}from"./utils-ePvtT4un.js";import{C}from"./ComposedChartArgs-CgvqQqFx.js";import{C as l}from"./ComposedChart-BENGvYsD.js";import{A as E}from"./AreaChart-RiiXBcF2.js";import{p as d}from"./Page-Cj8EiXz7.js";import{C as b}from"./CartesianGrid-DzoraW6O.js";import{X as g}from"./XAxis-e2aIYDeC.js";import{Y as h}from"./YAxis-D0miqhdY.js";import{A as a}from"./Area-D2pbrDB5.js";import{T as u}from"./Tooltip-BgyVG5YZ.js";import{R as k}from"./zIndexSlice-DzRj0O2j.js";import{L as v}from"./Legend-LU7nsQg3.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-BGo6HJcU.js";import"./index-DRxhjL8G.js";import"./index-DfXqfQfJ.js";import"./index-VyciUKje.js";import"./index-D6L8-6uP.js";import"./throttle-C4NetDSi.js";import"./get-DJ3830uQ.js";import"./renderedTicksSlice-Dbw1NMhi.js";import"./axisSelectors-BCNbmsqC.js";import"./resolveDefaultProps-DbkTAdx2.js";import"./isWellBehavedNumber-DNgXwIS7.js";import"./d3-scale-Dkhn0JVn.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-CI1Yx8pO.js";import"./chartDataContext-DbyvTQIy.js";import"./CategoricalChart-CaTs9Dwm.js";import"./CartesianAxis-uqQC2EBI.js";import"./Layer-CIGRgmJf.js";import"./Text-BRqwcuo5.js";import"./DOMUtils-CxMZUWXo.js";import"./Label-CTtz2nFH.js";import"./ZIndexLayer-DoWBLOas.js";import"./types-CGXKV1tr.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./AnimatedItems-CxqbLrvD.js";import"./useAnimationId-B1RQqc1z.js";import"./ActivePoints-p8w8Ckwa.js";import"./Dot-CG3pFr9Q.js";import"./RegisterGraphicalItemId-A-L91Q74.js";import"./GraphicalItemClipPath-DdGvz8Ok.js";import"./SetGraphicalItem-_D-u02tv.js";import"./getRadiusAndStrokeWidthFromDot-e5MUZgSd.js";import"./ActiveShapeUtils-BNcmVmA7.js";import"./Curve-8KyVkyQb.js";import"./step-DzD8K2Hy.js";import"./path-DyVhHtw_.js";import"./graphicalItemSelectors-CIKPVBBJ.js";import"./useElementOffset-B1ENHzAZ.js";import"./uniqBy-CP0rnImt.js";import"./iteratee-Cu1e9zHo.js";import"./Cross-TN21c1kX.js";import"./Rectangle-KZcqepmk.js";import"./util-Dxo8gN5i.js";import"./Sector-D6oqAW5N.js";import"./Symbols-CHdplG38.js";import"./symbol-2gV0br5j.js";const Rt={component:l},r={render:e=>t.createElement(k,{width:"100%",height:300},t.createElement(l,{margin:{top:20,right:20,bottom:20,left:20},data:d},t.createElement(a,{isAnimationActive:!1,dataKey:"uv",...e}),t.createElement(v,null),t.createElement(g,{dataKey:"name"}),t.createElement(h,null),t.createElement(u,null))),args:f(C),parameters:{docs:{description:{story:"You can tab to this chart. From there, you can use the arrow keys to navigate along the chart."}}}},o={render:()=>{const[e,y]=A.useState(!0);return t.createElement("div",null,t.createElement("button",{type:"button",onClick:()=>y(!e)},"Toggle Tooltip"),t.createElement(E,{width:500,height:400,data:d,margin:{top:10,right:30,left:0,bottom:0}},t.createElement(b,{strokeDasharray:"3 3"}),t.createElement(g,{dataKey:"name"}),t.createElement(h,null),t.createElement(a,{type:"monotone",dataKey:"uv",stackId:"1",stroke:"#8884d8",fill:"#8884d8"}),t.createElement(a,{type:"monotone",dataKey:"pv",stackId:"1",stroke:"#82ca9d",fill:"#82ca9d"}),t.createElement(a,{type:"monotone",dataKey:"amt",stackId:"1",stroke:"#ffc658",fill:"#ffc658"}),e&&t.createElement(u,null)))},args:{}};var i,m,s;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
}`,...(c=(p=o.parameters)==null?void 0:p.docs)==null?void 0:c.source}}};const St=["AreaChartWithAccessibilityLayer","AccessibleWithButton"];export{o as AccessibleWithButton,r as AreaChartWithAccessibilityLayer,St as __namedExportsOrder,Rt as default};
