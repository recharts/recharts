import{e as r}from"./iframe-Bv9A2uSW.js";import{g as s}from"./utils-ePvtT4un.js";import{E as i}from"./ErrorBar-DI6Kid5d.js";import{R as l}from"./arrayEqualityCheck-40Pjb_0H.js";import{S as p}from"./ScatterChart-CtXhRh9j.js";import{C as u}from"./CartesianGrid-B4a0JVAf.js";import{X as y}from"./XAxis-CDoYxb3o.js";import{Y as c}from"./YAxis-Czr7awDd.js";import{S as d}from"./Scatter-DDjlvZsw.js";import{R as h}from"./RechartsHookInspector-gKybnL4n.js";import"./preload-helper-Dp1pzeXC.js";import"./Layer-BOAumolw.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-Y5jGROg-.js";import"./ErrorBarContext-PQzMtlLN.js";import"./RechartsWrapper-BINnaSWf.js";import"./index-CYS6IjLh.js";import"./immer-Ch1CAK4c.js";import"./hooks-BFXhp1mb.js";import"./axisSelectors-C-Y5dRy9.js";import"./d3-scale-B-GeqdsZ.js";import"./zIndexSlice-BDVZwdE1.js";import"./renderedTicksSlice-fUxzen-N.js";import"./PolarUtils-CTnnDHZv.js";import"./RegisterGraphicalItemId-Dztj5ea7.js";import"./CSSTransitionAnimate-BCOrfVil.js";import"./useAnimationId-5b7iZFah.js";import"./ZIndexLayer-DOKoEx6m.js";import"./CartesianChart-DVCnbG_A.js";import"./chartDataContext-Cx-F6gwT.js";import"./CategoricalChart-BfArJY5o.js";import"./CartesianAxis-CiclrdFg.js";import"./Text-ByTWddCc.js";import"./DOMUtils-DLZp3yaw.js";import"./Label-Dk_EOWAk.js";import"./types-BNfpUJFf.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./ReactUtils-Be8qMHP_.js";import"./Curve-g-TKkld0.js";import"./step-Dhxu0QC9.js";import"./tooltipContext-B0ApYPZV.js";import"./Symbols-DSA8vyEc.js";import"./symbol-gFXZdrDQ.js";import"./ActiveShapeUtils-__oljrAQ.js";import"./isPlainObject-CgUr2901.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-C9QMG00E.js";import"./Trapezoid-WLRjMuUY.js";import"./Sector-S-QnBLP2.js";import"./GraphicalItemClipPath-Ce74-Utf.js";import"./SetGraphicalItem-CrMe5qpl.js";import"./index-B_DT_wU1.js";import"./ChartSizeDimensions-DOZqpgqC.js";import"./OffsetShower-CWVYqkue.js";import"./PlotAreaShower-DuXT_1jY.js";const f=[{x:45,y:100,z:150,errorY:[30,20],errorX:5},{x:100,y:200,z:200,errorY:[20,30],errorX:3},{x:120,y:100,z:260,errorY:20,errorX:[5,3]},{x:170,y:300,z:400,errorY:[15,18],errorX:4},{x:140,y:250,z:280,errorY:23,errorX:[6,7]},{x:150,y:400,z:500,errorY:[21,10],errorX:4},{x:110,y:280,z:200,errorY:21,errorX:[5,6]}],m={animationBegin:{control:{type:"number"},table:{type:{summary:"number"},category:"Animation",defaultValue:{summary:"0"}},defaultValue:0},animationDuration:{control:{type:"number"},table:{type:{summary:"number"},category:"Animation",defaultValue:{summary:"400"}},defaultValue:400},animationEasing:{control:{type:"select"},options:["linear","ease","ease-in","ease-out","ease-in-out"],table:{type:{summary:'"ease" | "ease-in" | "ease-in-out" | "ease-out" | "linear"'},category:"Animation",defaultValue:{summary:"ease-in-out"}},defaultValue:"ease-in-out"},dataKey:{description:"Decides how to extract the value of this ErrorBar from the data:\n- `string`: the name of the field in the data object;\n- `number`: the index of the field in the data;\n- `function`: a function that receives the data object and returns the value of this ErrorBar.\n\nThe error values can be a single value for symmetric error bars;\nor an array of a lower and upper error value for asymmetric error bars.",table:{type:{summary:"DataKey<DataPointType, DataValueType>"},category:"General"}},direction:{description:`Direction of the error bar. Usually determined by chart layout, except in Scatter chart.
In Scatter chart, "x" means horizontal error bars, "y" means vertical error bars.`,table:{type:{summary:"number | string"},category:"General"}},isAnimationActive:{control:{type:"boolean"},table:{type:{summary:"boolean"},category:"Animation",defaultValue:{summary:"true"}},defaultValue:!0},stroke:{description:'The stroke color. If "none", no line will be drawn.',control:{type:"color"},table:{type:{summary:"string"},category:"Style",defaultValue:{summary:"black"}},defaultValue:"black"},strokeWidth:{description:"The width of the stroke",table:{type:{summary:"number | string"},category:"Style",defaultValue:{summary:"1.5"}},defaultValue:1.5},width:{description:`Width of the error bar ends (the serifs) in pixels.
This is not the total width of the error bar, but just the width of the little lines at the ends.

The total width of the error bar is determined by the data value plus/minus the error value.`,table:{type:{summary:"number | string"},category:"General",defaultValue:{summary:"5"}},defaultValue:5},zIndex:{control:{type:"number"},table:{type:{summary:"number"},category:"General",defaultValue:{summary:"400"}},defaultValue:400}},gr={component:i,argTypes:m},e={render:n=>r.createElement(l,{width:"100%",height:500},r.createElement(p,{margin:{top:5,right:30,left:20,bottom:5},width:730,height:250},r.createElement(u,null),r.createElement(y,{dataKey:"x",type:"number"}),r.createElement(c,{dataKey:"y",type:"number"}),r.createElement(d,{data:f,fill:"#ff7300"},r.createElement(i,{dataKey:"errorY",...n})),r.createElement(h,null))),args:{...s(m),width:4,strokeWidth:2,stroke:"green",direction:"y",dataKey:"errorY"}};var t,a,o;e.parameters={...e.parameters,docs:{...(t=e.parameters)==null?void 0:t.docs,source:{originalSource:`{
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
