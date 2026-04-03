import{e as r}from"./iframe-Bw8DjNMK.js";import{g as s}from"./utils-ePvtT4un.js";import{E as i}from"./ErrorBar-CiCuj4WU.js";import{R as l}from"./arrayEqualityCheck-RqErd5pi.js";import{S as p}from"./ScatterChart-BEJq6-qF.js";import{C as u}from"./CartesianGrid-QdqFE8Kt.js";import{X as y}from"./XAxis-DXXKhKWM.js";import{Y as c}from"./YAxis-DdDXncps.js";import{S as d}from"./Scatter-DuK0N7qe.js";import{R as h}from"./RechartsHookInspector-Dkw7rNs4.js";import"./preload-helper-Dp1pzeXC.js";import"./Layer-DM0-BU9E.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-CZAfNVom.js";import"./ErrorBarContext-Ds7SXBSd.js";import"./RechartsWrapper-78h_uQ3C.js";import"./index-BrpMLpeL.js";import"./immer-D8iSY20c.js";import"./hooks-DIsqzK2K.js";import"./axisSelectors-BE5DsmIW.js";import"./d3-scale-D3xSJxj4.js";import"./zIndexSlice-DyW-bn5P.js";import"./renderedTicksSlice-BK1GDE8h.js";import"./PolarUtils-CTnnDHZv.js";import"./RegisterGraphicalItemId-Bd8mrNJF.js";import"./CSSTransitionAnimate-uSDZx8lq.js";import"./useAnimationId-EQy0eofc.js";import"./ZIndexLayer-DWrSmtv7.js";import"./CartesianChart-D3IHNwey.js";import"./chartDataContext-Dz8istsE.js";import"./CategoricalChart-D7TuKkne.js";import"./CartesianAxis-vRL28WoM.js";import"./Text-e8mIqlAu.js";import"./DOMUtils-D0bDfEmn.js";import"./Label-E6zUfHhJ.js";import"./types-BIXu7WCc.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./ReactUtils-lXsqpfha.js";import"./Curve-DtKt2A2q.js";import"./step-DLR3mlGm.js";import"./tooltipContext-CU2FJye_.js";import"./Symbols-ZPRqUnx6.js";import"./symbol-DGPSkh8h.js";import"./ActiveShapeUtils-DUc-QBSd.js";import"./isPlainObject-B10acXuk.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-cql93QQN.js";import"./Trapezoid-Q5mzP7fr.js";import"./Sector-DbOLYdsA.js";import"./GraphicalItemClipPath-Kk-xgOZj.js";import"./SetGraphicalItem-BPCW0ywk.js";import"./index-BAnsiokJ.js";import"./ChartSizeDimensions-BVLi1gDh.js";import"./OffsetShower-CGTxNqXv.js";import"./PlotAreaShower-Bs-62jbH.js";const f=[{x:45,y:100,z:150,errorY:[30,20],errorX:5},{x:100,y:200,z:200,errorY:[20,30],errorX:3},{x:120,y:100,z:260,errorY:20,errorX:[5,3]},{x:170,y:300,z:400,errorY:[15,18],errorX:4},{x:140,y:250,z:280,errorY:23,errorX:[6,7]},{x:150,y:400,z:500,errorY:[21,10],errorX:4},{x:110,y:280,z:200,errorY:21,errorX:[5,6]}],n={animationBegin:{control:{type:"number"},table:{type:{summary:"number"},category:"Animation",defaultValue:{summary:"0"}},defaultValue:0},animationDuration:{control:{type:"number"},table:{type:{summary:"number"},category:"Animation",defaultValue:{summary:"400"}},defaultValue:400},animationEasing:{table:{type:{summary:'"ease" | "ease-in" | "ease-in-out" | "ease-out" | "linear" | "spring" | BezierEasingFunction | SpringEasingFunction | `cubic-bezier(${number},${number},${number},${number})`'},category:"Animation",defaultValue:{summary:"ease-in-out"}},defaultValue:"ease-in-out"},dataKey:{description:"Decides how to extract the value of this ErrorBar from the data:\n- `string`: the name of the field in the data object;\n- `number`: the index of the field in the data;\n- `function`: a function that receives the data object and returns the value of this ErrorBar.\n\nThe error values can be a single value for symmetric error bars;\nor an array of a lower and upper error value for asymmetric error bars.",table:{type:{summary:"DataKey<DataPointType, DataValueType>"},category:"General"}},direction:{description:`Direction of the error bar. Usually determined by chart layout, except in Scatter chart.
In Scatter chart, "x" means horizontal error bars, "y" means vertical error bars.`,table:{type:{summary:"number | string"},category:"General"}},isAnimationActive:{control:{type:"boolean"},table:{type:{summary:"boolean"},category:"Animation",defaultValue:{summary:"true"}},defaultValue:!0},stroke:{description:'The stroke color. If "none", no line will be drawn.',control:{type:"color"},table:{type:{summary:"string"},category:"Style",defaultValue:{summary:"black"}},defaultValue:"black"},strokeWidth:{description:"The width of the stroke",table:{type:{summary:"number | string"},category:"Style",defaultValue:{summary:"1.5"}},defaultValue:1.5},width:{description:`Width of the error bar ends (the serifs) in pixels.
This is not the total width of the error bar, but just the width of the little lines at the ends.

The total width of the error bar is determined by the data value plus/minus the error value.`,table:{type:{summary:"number | string"},category:"General",defaultValue:{summary:"5"}},defaultValue:5},zIndex:{control:{type:"number"},table:{type:{summary:"number"},category:"General",defaultValue:{summary:"400"}},defaultValue:400}},gr={component:i,argTypes:n},e={render:m=>r.createElement(l,{width:"100%",height:500},r.createElement(p,{margin:{top:5,right:30,left:20,bottom:5},width:730,height:250},r.createElement(u,null),r.createElement(y,{dataKey:"x",type:"number"}),r.createElement(c,{dataKey:"y",type:"number"}),r.createElement(d,{data:f,fill:"#ff7300"},r.createElement(i,{dataKey:"errorY",...m})),r.createElement(h,null))),args:{...s(n),width:4,strokeWidth:2,stroke:"green",direction:"y",dataKey:"errorY"}};var t,a,o;e.parameters={...e.parameters,docs:{...(t=e.parameters)==null?void 0:t.docs,source:{originalSource:`{
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
          <RechartsHookInspector />
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
}`,...(o=(a=e.parameters)==null?void 0:a.docs)==null?void 0:o.source}}};const xr=["API"];export{e as API,xr as __namedExportsOrder,gr as default};
