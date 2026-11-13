import{R as r}from"./iframe-DhvgJ3Tw.js";import{g as s}from"./utils-ePvtT4un.js";import{E as i}from"./ErrorBar-CpdGajMY.js";import{R as p}from"./zIndexSlice-DT7jNbQo.js";import{S as l}from"./ScatterChart-D-5M5nEI.js";import{C as u}from"./CartesianGrid-BO8o_HK3.js";import{X as y}from"./XAxis-DydSoLLm.js";import{Y as c}from"./YAxis-BAhPmXz7.js";import{S as d}from"./Scatter-j_qrINFW.js";import"./preload-helper-Dp1pzeXC.js";import"./Layer-B7fk7F56.js";import"./get-cF5BDHN6.js";import"./resolveDefaultProps-CKLGeLep.js";import"./ErrorBarContext-rAqCLm-Y.js";import"./RechartsWrapper-683IwuKd.js";import"./axisSelectors-aIh5be-p.js";import"./throttle-BWeAvDIL.js";import"./index-CU5o85y3.js";import"./index-CQNEDz1o.js";import"./polarAxisSelectors-AqVQ4mq9.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-DUY8Yxll.js";import"./index-BtmI4qTy.js";import"./index-D2OmVz2d.js";import"./renderedTicksSlice-Bh9hRh5k.js";import"./index-D8T5pADG.js";import"./fillDefinitions-Ckysr9fo.js";import"./dataEntryStyles-CJFnAm-4.js";import"./Label-lswEF7zo.js";import"./Text-oQHtFAiE.js";import"./ZIndexLayer-jkdgENMR.js";import"./CSSTransitionAnimate-LXP4FEs9.js";import"./useAnimationId-DBeWeQl6.js";import"./util-Dxo8gN5i.js";import"./CartesianChart-BOsacCQH.js";import"./chartDataContext-OAAhd7eo.js";import"./CategoricalChart-C0ZN3rz5.js";import"./CartesianAxis-CudRQX5X.js";import"./types-L33J7ZDL.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./activeStyles-Dbg52UlV.js";import"./Curve-CM-2NJGX.js";import"./step-IHXDW0UX.js";import"./path-DyVhHtw_.js";import"./tooltipContext-B9Aw5mks.js";import"./Symbols-BU6SDWGm.js";import"./symbol-Dj9V0gE5.js";import"./ActiveShapeUtils-pVPcv2XP.js";import"./SetGraphicalItem-FYK4izOM.js";import"./useEffectiveDataKey-NorWb4gC.js";const h=[{x:45,y:100,z:150,errorY:[30,20],errorX:5},{x:100,y:200,z:200,errorY:[20,30],errorX:3},{x:120,y:100,z:260,errorY:20,errorX:[5,3]},{x:170,y:300,z:400,errorY:[15,18],errorX:4},{x:140,y:250,z:280,errorY:23,errorX:[6,7]},{x:150,y:400,z:500,errorY:[21,10],errorX:4},{x:110,y:280,z:200,errorY:21,errorX:[5,6]}],n={animationBegin:{control:{type:"number"},table:{type:{summary:"number"},category:"Animation",defaultValue:{summary:"0"}},defaultValue:0},animationDuration:{control:{type:"number"},table:{type:{summary:"number"},category:"Animation",defaultValue:{summary:"400"}},defaultValue:400},animationEasing:{table:{type:{summary:'"ease" | "ease-in" | "ease-in-out" | "ease-out" | "linear" | "spring" | EasingFunction | `cubic-bezier(${number},${number},${number},${number})`'},category:"Animation",defaultValue:{summary:"ease-in-out"}},defaultValue:"ease-in-out"},dataKey:{description:"Decides how to extract the value of this ErrorBar from the data:\n- `string`: the name of the field in the data object;\n- `number`: the index of the field in the data;\n- `function`: a function that receives the data object and returns the value of this ErrorBar.\n\nThe error values can be a single value for symmetric error bars;\nor an array of a lower and upper error value for asymmetric error bars.",table:{type:{summary:"DataKey<DataPointType, DataValueType>"},category:"General"}},direction:{description:`Direction of the error bar. Usually determined by chart layout, except in Scatter chart.
In Scatter chart, "x" means horizontal error bars, "y" means vertical error bars.`,table:{type:{summary:"number | string"},category:"General"}},isAnimationActive:{control:{type:"boolean"},table:{type:{summary:"boolean"},category:"Animation",defaultValue:{summary:"true"}},defaultValue:!0},stroke:{description:'The stroke color. If "none", no line will be drawn.',control:{type:"color"},table:{type:{summary:"string"},category:"Style"}},strokeWidth:{description:"The width of the stroke",table:{type:{summary:"number | string"},category:"Style"}},width:{description:`Width of the error bar ends (the serifs) in pixels.
This is not the total width of the error bar, but just the width of the little lines at the ends.

The total width of the error bar is determined by the data value plus/minus the error value.`,table:{type:{summary:"number | string"},category:"General",defaultValue:{summary:"5"}},defaultValue:5},zIndex:{control:{type:"number"},table:{type:{summary:"number"},category:"General",defaultValue:{summary:"400"}},defaultValue:400}},cr={component:i,argTypes:n},e={render:m=>r.createElement(p,{width:"100%",height:500},r.createElement(l,{margin:{top:5,right:30,left:20,bottom:5},width:730,height:250},r.createElement(u,null),r.createElement(y,{dataKey:"x",type:"number"}),r.createElement(c,{dataKey:"y",type:"number"}),r.createElement(d,{data:h,fill:"#ff7300"},r.createElement(i,{dataKey:"errorY",...m})))),args:{...s(n),width:4,strokeWidth:2,stroke:"green",direction:"y",dataKey:"errorY"}},dr=["API"];var t,a,o;e.parameters={...e.parameters,docs:{...(t=e.parameters)==null?void 0:t.docs,source:{originalSource:`{
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
}`,...(o=(a=e.parameters)==null?void 0:a.docs)==null?void 0:o.source}}};export{e as API,dr as __namedExportsOrder,cr as default};
