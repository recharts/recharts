import{R as r}from"./iframe-BmKqhsPF.js";import{g as s}from"./utils-ePvtT4un.js";import{E as i}from"./ErrorBar-C2JhZr92.js";import{R as p}from"./zIndexSlice-CBQM2Gyg.js";import{S as l}from"./ScatterChart-tvygZBtN.js";import{C as u}from"./CartesianGrid-BfijQkmI.js";import{X as y}from"./XAxis-B1Y97cNG.js";import{Y as c}from"./YAxis-Bib3dbnh.js";import{S as d}from"./Scatter-DKu9bQqE.js";import"./preload-helper-Dp1pzeXC.js";import"./Layer-DFK8Q48P.js";import"./get-cF5BDHN6.js";import"./resolveDefaultProps-BDqp1YKl.js";import"./ErrorBarContext-DjFDtKDe.js";import"./RechartsWrapper-CdEiQwLq.js";import"./axisSelectors-De-QIQw0.js";import"./throttle-DFLwZbH7.js";import"./index-3u8XkdeO.js";import"./index-BGZm-V5p.js";import"./polarAxisSelectors-3J3j4TTi.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-66RSqjvR.js";import"./index-B3BeYDVW.js";import"./index-BlCA3-m5.js";import"./renderedTicksSlice-1_lrB1iK.js";import"./index-CBz7nTI3.js";import"./fillDefinitions-miIei5Ak.js";import"./dataEntryStyles-BYeCTEXf.js";import"./CSSTransitionAnimate-B9BYh2jE.js";import"./useAnimationId-Cw8-NrKa.js";import"./util-Dxo8gN5i.js";import"./ZIndexLayer-E2zC26PS.js";import"./CartesianChart-DwN6Hmpg.js";import"./ZIndexPortal-DFoHfC3q.js";import"./CategoricalChart-DDmHhC4k.js";import"./CartesianAxis-Ch4CXp2q.js";import"./Text-CrMJTYNw.js";import"./DOMUtils-DtycWmz8.js";import"./Label-DJuyIpr6.js";import"./types-8TEdLcfT.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./LabelList-Cw7YYHKY.js";import"./activeStyles-B9WkYOlU.js";import"./Curve--g8UutGF.js";import"./step-DxyJMaY2.js";import"./path-DyVhHtw_.js";import"./tooltipContext-qd_vPvGB.js";import"./Symbols-C1ZJFDve.js";import"./symbol-Cwivg1At.js";import"./ActiveShapeUtils-CmFmkU6o.js";import"./SetGraphicalItem-DaR9Vkxk.js";import"./useEffectiveDataKey-etJHmmHX.js";const h=[{x:45,y:100,z:150,errorY:[30,20],errorX:5},{x:100,y:200,z:200,errorY:[20,30],errorX:3},{x:120,y:100,z:260,errorY:20,errorX:[5,3]},{x:170,y:300,z:400,errorY:[15,18],errorX:4},{x:140,y:250,z:280,errorY:23,errorX:[6,7]},{x:150,y:400,z:500,errorY:[21,10],errorX:4},{x:110,y:280,z:200,errorY:21,errorX:[5,6]}],n={animationBegin:{control:{type:"number"},table:{type:{summary:"number"},category:"Animation",defaultValue:{summary:"0"}},defaultValue:0},animationDuration:{control:{type:"number"},table:{type:{summary:"number"},category:"Animation",defaultValue:{summary:"400"}},defaultValue:400},animationEasing:{table:{type:{summary:'"ease" | "ease-in" | "ease-in-out" | "ease-out" | "linear" | "spring" | EasingFunction | `cubic-bezier(${number},${number},${number},${number})`'},category:"Animation",defaultValue:{summary:"ease-in-out"}},defaultValue:"ease-in-out"},dataKey:{description:"Decides how to extract the value of this ErrorBar from the data:\n- `string`: the name of the field in the data object;\n- `number`: the index of the field in the data;\n- `function`: a function that receives the data object and returns the value of this ErrorBar.\n\nThe error values can be a single value for symmetric error bars;\nor an array of a lower and upper error value for asymmetric error bars.",table:{type:{summary:"DataKey<DataPointType, DataValueType>"},category:"General"}},direction:{description:`Direction of the error bar. Usually determined by chart layout, except in Scatter chart.
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
