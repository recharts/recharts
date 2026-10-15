import{R as r}from"./iframe-CjAZXmgk.js";import{g as s}from"./utils-ePvtT4un.js";import{E as i}from"./ErrorBar-BaYA2qMQ.js";import{R as p}from"./zIndexSlice-DZ6wU0kL.js";import{S as l}from"./ScatterChart-MQdRB9Y9.js";import{C as u}from"./CartesianGrid-Dv_tqLlh.js";import{X as y}from"./XAxis-XXYcX2bn.js";import{Y as c}from"./YAxis-CunYyPtb.js";import{S as d}from"./Scatter-YeE4f-fG.js";import"./preload-helper-Dp1pzeXC.js";import"./Layer-CMYvDThQ.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-B3dy_A6W.js";import"./ErrorBarContext-CzSreuRh.js";import"./RechartsWrapper-C1tX5Xq9.js";import"./axisSelectors-DVMe8D3h.js";import"./throttle-aHpS-uJF.js";import"./index-CXqdHhNs.js";import"./index-D72PX-EN.js";import"./isWellBehavedNumber-CbOfPh0Q.js";import"./d3-scale-Cdy5oRLL.js";import"./index-CgP4dGwF.js";import"./index-DoglCRE6.js";import"./renderedTicksSlice-DRvvM2hj.js";import"./index-jRxYEVM9.js";import"./PolarUtils-CTnnDHZv.js";import"./dataEntryStyles-BHBmvArk.js";import"./useId-UofRKXbz.js";import"./CSSTransitionAnimate-CkiL-cOK.js";import"./useAnimationId-BxmhNVS4.js";import"./util-Dxo8gN5i.js";import"./ZIndexLayer-maUeBX7p.js";import"./useBackwardsCompatibleTheme-C26HYKO8.js";import"./CartesianChart-Bi3Tf3h4.js";import"./chartDataContext-Brj1C6P1.js";import"./CategoricalChart-ChU13xsV.js";import"./CartesianAxis-CNPqH8LV.js";import"./Text-VSZhuuVN.js";import"./pageBackground-CYQU4eM8.js";import"./Label-DnpXC07H.js";import"./types-BUTy-eCs.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./activeStyles-BjWwonc4.js";import"./Curve-BAdd7Cc7.js";import"./step-DNHn4BEu.js";import"./path-DyVhHtw_.js";import"./tooltipContext-BjJ9NNny.js";import"./Symbols-uvqP7PSU.js";import"./symbol-DCSxYWeK.js";import"./ActiveShapeUtils-Lt_dXYUR.js";import"./GraphicalItemClipPath-uyo9nSDN.js";import"./SetGraphicalItem-D6iWzq9o.js";import"./useEffectiveDataKey-NmC8up5p.js";const h=[{x:45,y:100,z:150,errorY:[30,20],errorX:5},{x:100,y:200,z:200,errorY:[20,30],errorX:3},{x:120,y:100,z:260,errorY:20,errorX:[5,3]},{x:170,y:300,z:400,errorY:[15,18],errorX:4},{x:140,y:250,z:280,errorY:23,errorX:[6,7]},{x:150,y:400,z:500,errorY:[21,10],errorX:4},{x:110,y:280,z:200,errorY:21,errorX:[5,6]}],n={animationBegin:{control:{type:"number"},table:{type:{summary:"number"},category:"Animation",defaultValue:{summary:"0"}},defaultValue:0},animationDuration:{control:{type:"number"},table:{type:{summary:"number"},category:"Animation",defaultValue:{summary:"400"}},defaultValue:400},animationEasing:{table:{type:{summary:'"ease" | "ease-in" | "ease-in-out" | "ease-out" | "linear" | "spring" | EasingFunction | `cubic-bezier(${number},${number},${number},${number})`'},category:"Animation",defaultValue:{summary:"ease-in-out"}},defaultValue:"ease-in-out"},dataKey:{description:"Decides how to extract the value of this ErrorBar from the data:\n- `string`: the name of the field in the data object;\n- `number`: the index of the field in the data;\n- `function`: a function that receives the data object and returns the value of this ErrorBar.\n\nThe error values can be a single value for symmetric error bars;\nor an array of a lower and upper error value for asymmetric error bars.",table:{type:{summary:"DataKey<DataPointType, DataValueType>"},category:"General"}},direction:{description:`Direction of the error bar. Usually determined by chart layout, except in Scatter chart.
In Scatter chart, "x" means horizontal error bars, "y" means vertical error bars.`,table:{type:{summary:"number | string"},category:"General"}},isAnimationActive:{control:{type:"boolean"},table:{type:{summary:"boolean"},category:"Animation",defaultValue:{summary:"true"}},defaultValue:!0},stroke:{description:'The stroke color. If "none", no line will be drawn.',control:{type:"color"},table:{type:{summary:"string"},category:"Style"}},strokeWidth:{description:"The width of the stroke",table:{type:{summary:"number | string"},category:"Style"}},width:{description:`Width of the error bar ends (the serifs) in pixels.
This is not the total width of the error bar, but just the width of the little lines at the ends.

The total width of the error bar is determined by the data value plus/minus the error value.`,table:{type:{summary:"number | string"},category:"General",defaultValue:{summary:"5"}},defaultValue:5},zIndex:{control:{type:"number"},table:{type:{summary:"number"},category:"General",defaultValue:{summary:"400"}},defaultValue:400}},br={component:i,argTypes:n},e={render:m=>r.createElement(p,{width:"100%",height:500},r.createElement(l,{margin:{top:5,right:30,left:20,bottom:5},width:730,height:250},r.createElement(u,null),r.createElement(y,{dataKey:"x",type:"number"}),r.createElement(c,{dataKey:"y",type:"number"}),r.createElement(d,{data:h,fill:"#ff7300"},r.createElement(i,{dataKey:"errorY",...m})))),args:{...s(n),width:4,strokeWidth:2,stroke:"green",direction:"y",dataKey:"errorY"}},fr=["API"];var t,a,o;e.parameters={...e.parameters,docs:{...(t=e.parameters)==null?void 0:t.docs,source:{originalSource:`{
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
}`,...(o=(a=e.parameters)==null?void 0:a.docs)==null?void 0:o.source}}};export{e as API,fr as __namedExportsOrder,br as default};
