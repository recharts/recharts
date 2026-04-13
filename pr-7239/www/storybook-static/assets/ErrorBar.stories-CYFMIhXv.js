import{e as r}from"./iframe-CQz6-rqU.js";import{g as s}from"./utils-ePvtT4un.js";import{E as i}from"./ErrorBar-CwXfdhOS.js";import{R as l}from"./arrayEqualityCheck-B3hp3dy1.js";import{S as p}from"./ScatterChart-C5um7FDV.js";import{C as u}from"./CartesianGrid-CR6vgPuV.js";import{X as y}from"./XAxis-CbqTpJSy.js";import{Y as c}from"./YAxis-BQnCi2Gr.js";import{S as d}from"./Scatter-B7g4sGs0.js";import{R as h}from"./RechartsHookInspector-B2GPukyV.js";import"./preload-helper-Dp1pzeXC.js";import"./Layer-aJdiXKbK.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-Bsy3ef9f.js";import"./ErrorBarContext-DgfGrsqm.js";import"./RechartsWrapper-0t3ed1JS.js";import"./index-DcdNEEYJ.js";import"./immer-C1Ef071P.js";import"./hooks-Cv8BoRyK.js";import"./axisSelectors-bV92EhmM.js";import"./d3-scale-Dy1NrWss.js";import"./zIndexSlice-jdolFKYR.js";import"./renderedTicksSlice-D_gYaTKe.js";import"./PolarUtils-CTnnDHZv.js";import"./RegisterGraphicalItemId-Ch1pO7WV.js";import"./CSSTransitionAnimate-BBgiecji.js";import"./useAnimationId-DfRjeBwp.js";import"./ZIndexLayer-D5ngjIV-.js";import"./CartesianChart-KdDR_fN8.js";import"./chartDataContext-BrSsmPTw.js";import"./CategoricalChart-Cya9ekS6.js";import"./CartesianAxis-BA0-wFGi.js";import"./Text-JvXAfe8A.js";import"./DOMUtils-2zTsLgWC.js";import"./Label-D5a5ehTh.js";import"./types-XpdbXnbU.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./ReactUtils-BqVg2WmD.js";import"./Curve-3nz25txP.js";import"./step-DP79CAdJ.js";import"./tooltipContext-Al2JbnC6.js";import"./Symbols-BXHTL0iF.js";import"./symbol-BurpkDKi.js";import"./ActiveShapeUtils-DN6LeKsQ.js";import"./isPlainObject-rkdQ43EP.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-Cna_W9G7.js";import"./Trapezoid-dmc5_bkF.js";import"./Sector-D8lvqTTS.js";import"./GraphicalItemClipPath-CPeTkZJp.js";import"./SetGraphicalItem-DB6-mG_s.js";import"./index-BGBLB-6R.js";import"./ChartSizeDimensions-CkcmSnfk.js";import"./OffsetShower-D1GSKoft.js";import"./PlotAreaShower-L499Q96k.js";const f=[{x:45,y:100,z:150,errorY:[30,20],errorX:5},{x:100,y:200,z:200,errorY:[20,30],errorX:3},{x:120,y:100,z:260,errorY:20,errorX:[5,3]},{x:170,y:300,z:400,errorY:[15,18],errorX:4},{x:140,y:250,z:280,errorY:23,errorX:[6,7]},{x:150,y:400,z:500,errorY:[21,10],errorX:4},{x:110,y:280,z:200,errorY:21,errorX:[5,6]}],n={animationBegin:{control:{type:"number"},table:{type:{summary:"number"},category:"Animation",defaultValue:{summary:"0"}},defaultValue:0},animationDuration:{control:{type:"number"},table:{type:{summary:"number"},category:"Animation",defaultValue:{summary:"400"}},defaultValue:400},animationEasing:{table:{type:{summary:'"ease" | "ease-in" | "ease-in-out" | "ease-out" | "linear" | "spring" | BezierEasingFunction | SpringEasingFunction | `cubic-bezier(${number},${number},${number},${number})`'},category:"Animation",defaultValue:{summary:"ease-in-out"}},defaultValue:"ease-in-out"},dataKey:{description:"Decides how to extract the value of this ErrorBar from the data:\n- `string`: the name of the field in the data object;\n- `number`: the index of the field in the data;\n- `function`: a function that receives the data object and returns the value of this ErrorBar.\n\nThe error values can be a single value for symmetric error bars;\nor an array of a lower and upper error value for asymmetric error bars.",table:{type:{summary:"DataKey<DataPointType, DataValueType>"},category:"General"}},direction:{description:`Direction of the error bar. Usually determined by chart layout, except in Scatter chart.
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
