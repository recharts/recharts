import{e as r}from"./iframe-Y_RGNuVZ.js";import{g as s}from"./utils-ePvtT4un.js";import{E as i}from"./ErrorBar-Bq1OdE3L.js";import{R as l}from"./arrayEqualityCheck-Ds7SKd67.js";import{S as p}from"./ScatterChart-CA3hnHTI.js";import{C as u}from"./CartesianGrid-CWpx_2-u.js";import{X as y}from"./XAxis-DOlhxeJx.js";import{Y as c}from"./YAxis-a000WLRS.js";import{S as d}from"./Scatter-CX8cJH4t.js";import{R as h}from"./RechartsHookInspector-BaDAEILC.js";import"./preload-helper-Dp1pzeXC.js";import"./Layer-B3aEjvUI.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-CNDGD4av.js";import"./ErrorBarContext-D2MsqZ2g.js";import"./RechartsWrapper-0AKdwcb0.js";import"./index-6zWqcpfE.js";import"./immer-CvMOMmfr.js";import"./hooks-D-ukaKl5.js";import"./axisSelectors-B08StVJi.js";import"./d3-scale-xMg1wH9a.js";import"./zIndexSlice-Ba0CiZj_.js";import"./renderedTicksSlice-BNYNUWgh.js";import"./PolarUtils-CTnnDHZv.js";import"./RegisterGraphicalItemId-DQOzlEQV.js";import"./CSSTransitionAnimate-CZTsWqK9.js";import"./useAnimationId-D3O-mVgt.js";import"./ZIndexLayer-BkWVTcKj.js";import"./CartesianChart-tAchdUZG.js";import"./chartDataContext-DLrhoiOn.js";import"./CategoricalChart-xZ700W9g.js";import"./CartesianAxis-UB1S8E_N.js";import"./Text-2I-RPtH4.js";import"./DOMUtils-Cmq9iEnp.js";import"./Label-C7BzYfbz.js";import"./types-DUF6Oaqa.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./ReactUtils-DW9WQHfP.js";import"./Curve-okqgdx-1.js";import"./step-BeTRk8e6.js";import"./tooltipContext-CkMbJ1vn.js";import"./Symbols-BkK6C4o8.js";import"./symbol-CHniFcTm.js";import"./ActiveShapeUtils-fVk6EKo1.js";import"./isPlainObject-1pSWT5Op.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-Dr0T3_ga.js";import"./Trapezoid-52KgDugC.js";import"./Sector-NVf3Jf9G.js";import"./GraphicalItemClipPath-DV3rsVOw.js";import"./SetGraphicalItem-Cr3Eh_Ii.js";import"./index-Bw2HFO2T.js";import"./ChartSizeDimensions-Kjtp9_ay.js";import"./OffsetShower-X1duxMkd.js";import"./PlotAreaShower-C08ktU3-.js";const f=[{x:45,y:100,z:150,errorY:[30,20],errorX:5},{x:100,y:200,z:200,errorY:[20,30],errorX:3},{x:120,y:100,z:260,errorY:20,errorX:[5,3]},{x:170,y:300,z:400,errorY:[15,18],errorX:4},{x:140,y:250,z:280,errorY:23,errorX:[6,7]},{x:150,y:400,z:500,errorY:[21,10],errorX:4},{x:110,y:280,z:200,errorY:21,errorX:[5,6]}],n={animationBegin:{control:{type:"number"},table:{type:{summary:"number"},category:"Animation",defaultValue:{summary:"0"}},defaultValue:0},animationDuration:{control:{type:"number"},table:{type:{summary:"number"},category:"Animation",defaultValue:{summary:"400"}},defaultValue:400},animationEasing:{table:{type:{summary:'"ease" | "ease-in" | "ease-in-out" | "ease-out" | "linear" | "spring" | BezierEasingFunction | SpringEasingFunction | `cubic-bezier(${number},${number},${number},${number})`'},category:"Animation",defaultValue:{summary:"ease-in-out"}},defaultValue:"ease-in-out"},dataKey:{description:"Decides how to extract the value of this ErrorBar from the data:\n- `string`: the name of the field in the data object;\n- `number`: the index of the field in the data;\n- `function`: a function that receives the data object and returns the value of this ErrorBar.\n\nThe error values can be a single value for symmetric error bars;\nor an array of a lower and upper error value for asymmetric error bars.",table:{type:{summary:"DataKey<DataPointType, DataValueType>"},category:"General"}},direction:{description:`Direction of the error bar. Usually determined by chart layout, except in Scatter chart.
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
