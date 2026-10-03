import{R as r}from"./iframe-DeUe7xmC.js";import{g as s}from"./utils-ePvtT4un.js";import{E as i}from"./ErrorBar-BtGgYz2l.js";import{R as p}from"./zIndexSlice-B-kuFUwH.js";import{S as l}from"./ScatterChart-CMBRw1Ay.js";import{C as u}from"./CartesianGrid-CGQ_T7Vg.js";import{X as y}from"./XAxis-DZewVXuj.js";import{Y as c}from"./YAxis-EaFvavHr.js";import{S as d}from"./Scatter-Ddnhll4j.js";import"./preload-helper-Dp1pzeXC.js";import"./Layer-CuQjvvoN.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-VBNHpirQ.js";import"./ErrorBarContext-CCYjOK6U.js";import"./RechartsWrapper-ClGwO2Ez.js";import"./axisSelectors-L5D3YGAp.js";import"./throttle-D8_Vf5-y.js";import"./index-B3VftlGk.js";import"./index-CS0BzYwB.js";import"./isWellBehavedNumber-XmFYrAHS.js";import"./d3-scale-CKlOT7Hq.js";import"./index-D9wuu4lj.js";import"./index-CLX85w7H.js";import"./renderedTicksSlice-zQGjoh1b.js";import"./index-Cegj0e_Y.js";import"./PolarUtils-CTnnDHZv.js";import"./RegisterGraphicalItemId-CVA94A2X.js";import"./useId-lxxddI0G.js";import"./CSSTransitionAnimate-BSRJSgQi.js";import"./useAnimationId-sq-3c3no.js";import"./util-Dxo8gN5i.js";import"./ZIndexLayer-qWMWnECq.js";import"./useBackwardsCompatibleTheme-JgYEE_gV.js";import"./CartesianChart-BRUE9SRS.js";import"./chartDataContext-CBR6ctH_.js";import"./CategoricalChart-DXh-O_P4.js";import"./CartesianAxis-DhJE-g8f.js";import"./Text-A2KhxUAH.js";import"./DOMUtils-BjCFSCOp.js";import"./Label-CJwVVqdY.js";import"./types-BQuMJRU5.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./AnimatedItems-BsztCZc7.js";import"./Curve-DmgBVGdH.js";import"./step-CZi2V8Uw.js";import"./path-DyVhHtw_.js";import"./tooltipContext-CQr26Kth.js";import"./Symbols-CkxsfOUs.js";import"./symbol-C9rKeJ3L.js";import"./ActiveShapeUtils-Cd6LbszL.js";import"./GraphicalItemClipPath-CO2IN5Qd.js";import"./SetGraphicalItem-DeV-JbkH.js";import"./useGraphicalItemIdentity-DKt9Ij8h.js";import"./dataEntryStyles-BdqrCNw4.js";const h=[{x:45,y:100,z:150,errorY:[30,20],errorX:5},{x:100,y:200,z:200,errorY:[20,30],errorX:3},{x:120,y:100,z:260,errorY:20,errorX:[5,3]},{x:170,y:300,z:400,errorY:[15,18],errorX:4},{x:140,y:250,z:280,errorY:23,errorX:[6,7]},{x:150,y:400,z:500,errorY:[21,10],errorX:4},{x:110,y:280,z:200,errorY:21,errorX:[5,6]}],n={animationBegin:{control:{type:"number"},table:{type:{summary:"number"},category:"Animation",defaultValue:{summary:"0"}},defaultValue:0},animationDuration:{control:{type:"number"},table:{type:{summary:"number"},category:"Animation",defaultValue:{summary:"400"}},defaultValue:400},animationEasing:{table:{type:{summary:'"ease" | "ease-in" | "ease-in-out" | "ease-out" | "linear" | "spring" | EasingFunction | `cubic-bezier(${number},${number},${number},${number})`'},category:"Animation",defaultValue:{summary:"ease-in-out"}},defaultValue:"ease-in-out"},dataKey:{description:"Decides how to extract the value of this ErrorBar from the data:\n- `string`: the name of the field in the data object;\n- `number`: the index of the field in the data;\n- `function`: a function that receives the data object and returns the value of this ErrorBar.\n\nThe error values can be a single value for symmetric error bars;\nor an array of a lower and upper error value for asymmetric error bars.",table:{type:{summary:"DataKey<DataPointType, DataValueType>"},category:"General"}},direction:{description:`Direction of the error bar. Usually determined by chart layout, except in Scatter chart.
In Scatter chart, "x" means horizontal error bars, "y" means vertical error bars.`,table:{type:{summary:"number | string"},category:"General"}},isAnimationActive:{control:{type:"boolean"},table:{type:{summary:"boolean"},category:"Animation",defaultValue:{summary:"true"}},defaultValue:!0},stroke:{description:'The stroke color. If "none", no line will be drawn.',control:{type:"color"},table:{type:{summary:"string"},category:"Style"}},strokeWidth:{description:"The width of the stroke",table:{type:{summary:"number | string"},category:"Style"}},width:{description:`Width of the error bar ends (the serifs) in pixels.
This is not the total width of the error bar, but just the width of the little lines at the ends.

The total width of the error bar is determined by the data value plus/minus the error value.`,table:{type:{summary:"number | string"},category:"General",defaultValue:{summary:"5"}},defaultValue:5},zIndex:{control:{type:"number"},table:{type:{summary:"number"},category:"General",defaultValue:{summary:"400"}},defaultValue:400}},fr={component:i,argTypes:n},e={render:m=>r.createElement(p,{width:"100%",height:500},r.createElement(l,{margin:{top:5,right:30,left:20,bottom:5},width:730,height:250},r.createElement(u,null),r.createElement(y,{dataKey:"x",type:"number"}),r.createElement(c,{dataKey:"y",type:"number"}),r.createElement(d,{data:h,fill:"#ff7300"},r.createElement(i,{dataKey:"errorY",...m})))),args:{...s(n),width:4,strokeWidth:2,stroke:"green",direction:"y",dataKey:"errorY"}},gr=["API"];var t,a,o;e.parameters={...e.parameters,docs:{...(t=e.parameters)==null?void 0:t.docs,source:{originalSource:`{
  render: (args: Args) => {
    return <ResponsiveContainer width="100%" height={500}>
        <ScatterChart margin={{
        top: 5,
        right: 30,
        left: 20,
        bottom: 5
      }} width={730} height={250}>
          <CartesianGrid />
          <XAxis dataKey="x" type="number" />
          <YAxis dataKey="y" type="number" />
          <Scatter data={errorData} fill="#ff7300">
            <ErrorBar dataKey="errorY" {...args} />
          </Scatter>
        </ScatterChart>
      </ResponsiveContainer>;
  },
  args: {
    ...getStoryArgsFromArgsTypesObject(ErrorBarArgs),
    width: 4,
    strokeWidth: 2,
    stroke: 'green',
    direction: 'y',
    dataKey: 'errorY'
  }
}`,...(o=(a=e.parameters)==null?void 0:a.docs)==null?void 0:o.source}}};export{e as API,gr as __namedExportsOrder,fr as default};
