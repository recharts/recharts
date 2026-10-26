import{R as r}from"./iframe-BuTq1GDI.js";import{g as s}from"./utils-ePvtT4un.js";import{E as i}from"./ErrorBar-DZvYzjUg.js";import{R as p}from"./zIndexSlice-nFeNXjL9.js";import{S as l}from"./ScatterChart-D1Aa4AFF.js";import{C as u}from"./CartesianGrid-BWEWc9yo.js";import{X as y}from"./XAxis-DP0H9aj2.js";import{Y as c}from"./YAxis-CWQHnkYU.js";import{S as d}from"./Scatter-xN0LP7bJ.js";import"./preload-helper-Dp1pzeXC.js";import"./Layer-BRqC8U5C.js";import"./get-cF5BDHN6.js";import"./resolveDefaultProps-BvjC40ji.js";import"./ErrorBarContext-DxkrfkAD.js";import"./RechartsWrapper-tdUtbdK0.js";import"./axisSelectors-C8SZQKCy.js";import"./throttle-Bg_wxbeM.js";import"./index-BVmeVX9a.js";import"./index-C37pRckm.js";import"./polarAxisSelectors-DrJ1eC5o.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-B-VNUnVY.js";import"./index-CEj4l4tR.js";import"./index-Uz7QCUjK.js";import"./renderedTicksSlice-BeHs1Q1W.js";import"./index-CvYG7xEe.js";import"./RegisterGraphicalItemId-DoGvUQF1.js";import"./useId-haS85Qmm.js";import"./CSSTransitionAnimate-CTrT5c5D.js";import"./useAnimationId-PmZ8IQYc.js";import"./util-Dxo8gN5i.js";import"./ZIndexLayer-eqYDQc0b.js";import"./CartesianChart-BC3FDidD.js";import"./chartDataContext-DlVD7MBP.js";import"./CategoricalChart-DnThaA0e.js";import"./CartesianAxis-DubJAr-q.js";import"./Text-CBEIE7g5.js";import"./pageBackground-BebQB_1W.js";import"./Label-DQJj2wvU.js";import"./dataEntryStyles-Cr3Y7I5g.js";import"./types-CybiymHT.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./activeStyles-CQul6riI.js";import"./Curve-C8MCRMFW.js";import"./step-0wDi7QEY.js";import"./path-DyVhHtw_.js";import"./tooltipContext-DQPd87t6.js";import"./Symbols-B1k2vOqr.js";import"./symbol-HuKWM0tX.js";import"./ActiveShapeUtils-6CQyjc5t.js";import"./SetGraphicalItem-B6ig3Thz.js";import"./useEffectiveDataKey-BAtZCpA-.js";const h=[{x:45,y:100,z:150,errorY:[30,20],errorX:5},{x:100,y:200,z:200,errorY:[20,30],errorX:3},{x:120,y:100,z:260,errorY:20,errorX:[5,3]},{x:170,y:300,z:400,errorY:[15,18],errorX:4},{x:140,y:250,z:280,errorY:23,errorX:[6,7]},{x:150,y:400,z:500,errorY:[21,10],errorX:4},{x:110,y:280,z:200,errorY:21,errorX:[5,6]}],n={animationBegin:{control:{type:"number"},table:{type:{summary:"number"},category:"Animation",defaultValue:{summary:"0"}},defaultValue:0},animationDuration:{control:{type:"number"},table:{type:{summary:"number"},category:"Animation",defaultValue:{summary:"400"}},defaultValue:400},animationEasing:{table:{type:{summary:'"ease" | "ease-in" | "ease-in-out" | "ease-out" | "linear" | "spring" | EasingFunction | `cubic-bezier(${number},${number},${number},${number})`'},category:"Animation",defaultValue:{summary:"ease-in-out"}},defaultValue:"ease-in-out"},dataKey:{description:"Decides how to extract the value of this ErrorBar from the data:\n- `string`: the name of the field in the data object;\n- `number`: the index of the field in the data;\n- `function`: a function that receives the data object and returns the value of this ErrorBar.\n\nThe error values can be a single value for symmetric error bars;\nor an array of a lower and upper error value for asymmetric error bars.",table:{type:{summary:"DataKey<DataPointType, DataValueType>"},category:"General"}},direction:{description:`Direction of the error bar. Usually determined by chart layout, except in Scatter chart.
In Scatter chart, "x" means horizontal error bars, "y" means vertical error bars.`,table:{type:{summary:"number | string"},category:"General"}},isAnimationActive:{control:{type:"boolean"},table:{type:{summary:"boolean"},category:"Animation",defaultValue:{summary:"true"}},defaultValue:!0},stroke:{description:'The stroke color. If "none", no line will be drawn.',control:{type:"color"},table:{type:{summary:"string"},category:"Style"}},strokeWidth:{description:"The width of the stroke",table:{type:{summary:"number | string"},category:"Style"}},width:{description:`Width of the error bar ends (the serifs) in pixels.
This is not the total width of the error bar, but just the width of the little lines at the ends.

The total width of the error bar is determined by the data value plus/minus the error value.`,table:{type:{summary:"number | string"},category:"General",defaultValue:{summary:"5"}},defaultValue:5},zIndex:{control:{type:"number"},table:{type:{summary:"number"},category:"General",defaultValue:{summary:"400"}},defaultValue:400}},hr={component:i,argTypes:n},e={render:m=>r.createElement(p,{width:"100%",height:500},r.createElement(l,{margin:{top:5,right:30,left:20,bottom:5},width:730,height:250},r.createElement(u,null),r.createElement(y,{dataKey:"x",type:"number"}),r.createElement(c,{dataKey:"y",type:"number"}),r.createElement(d,{data:h,fill:"#ff7300"},r.createElement(i,{dataKey:"errorY",...m})))),args:{...s(n),width:4,strokeWidth:2,stroke:"green",direction:"y",dataKey:"errorY"}},br=["API"];var t,a,o;e.parameters={...e.parameters,docs:{...(t=e.parameters)==null?void 0:t.docs,source:{originalSource:`{
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
}`,...(o=(a=e.parameters)==null?void 0:a.docs)==null?void 0:o.source}}};export{e as API,br as __namedExportsOrder,hr as default};
