import{e as r}from"./iframe-m8q5t3md.js";import{g as s}from"./utils-ePvtT4un.js";import{E as i}from"./ErrorBar-B3hs0pgW.js";import{R as l}from"./arrayEqualityCheck-DrSDqkLD.js";import{S as p}from"./ScatterChart-p5WQhNjI.js";import{C as u}from"./CartesianGrid-DiF0WVwX.js";import{X as y}from"./XAxis-D9s1UdL9.js";import{Y as c}from"./YAxis-3rVJTeb7.js";import{S as d}from"./Scatter-BIXKZsGh.js";import{R as h}from"./RechartsHookInspector-BuC1LeAm.js";import"./preload-helper-Dp1pzeXC.js";import"./Layer-C2TdqJIe.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-CRYHZjsP.js";import"./ErrorBarContext-ExRYnIf4.js";import"./RechartsWrapper-CZ3jmele.js";import"./index-BL9S6rdM.js";import"./immer-DMxbvvOq.js";import"./hooks-nzhcMf4x.js";import"./axisSelectors-DSejHMOb.js";import"./d3-scale-CmP5dk1L.js";import"./zIndexSlice-BFsJzxfG.js";import"./renderedTicksSlice-2vEKdn9I.js";import"./PolarUtils-CTnnDHZv.js";import"./RegisterGraphicalItemId-QDXXrpkb.js";import"./CSSTransitionAnimate-CXk8ZMNI.js";import"./useAnimationId-Cp-1L-xj.js";import"./ZIndexLayer-BMbN4Jmp.js";import"./CartesianChart-B3HJKIVC.js";import"./chartDataContext-CB7kvdLo.js";import"./CategoricalChart-CgU5MazA.js";import"./CartesianAxis-B_P6O2DK.js";import"./Text-CGYPmi9L.js";import"./DOMUtils-BVQX-RMY.js";import"./Label-JUKbE3JW.js";import"./types-C2IIvjb3.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./ReactUtils-Dcz365jx.js";import"./Curve-Clnct1hH.js";import"./step-BQd-JXh1.js";import"./tooltipContext-BoRlh4FZ.js";import"./Symbols-Dl-fcwHF.js";import"./symbol-Cmq7mipq.js";import"./ActiveShapeUtils-BuaI6NWG.js";import"./isPlainObject-glNQFXom.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-HTdxKaWE.js";import"./Trapezoid-YBhqI0fM.js";import"./Sector-CqOCHMeq.js";import"./GraphicalItemClipPath-JhKOKnEz.js";import"./SetGraphicalItem-DTrTlaD3.js";import"./index-B_d56yGA.js";import"./ChartSizeDimensions-IBUPmonY.js";import"./OffsetShower-qDjcRr8n.js";import"./PlotAreaShower-CM2PEioy.js";const f=[{x:45,y:100,z:150,errorY:[30,20],errorX:5},{x:100,y:200,z:200,errorY:[20,30],errorX:3},{x:120,y:100,z:260,errorY:20,errorX:[5,3]},{x:170,y:300,z:400,errorY:[15,18],errorX:4},{x:140,y:250,z:280,errorY:23,errorX:[6,7]},{x:150,y:400,z:500,errorY:[21,10],errorX:4},{x:110,y:280,z:200,errorY:21,errorX:[5,6]}],m={animationBegin:{control:{type:"number"},table:{type:{summary:"number"},category:"Animation",defaultValue:{summary:"0"}},defaultValue:0},animationDuration:{control:{type:"number"},table:{type:{summary:"number"},category:"Animation",defaultValue:{summary:"400"}},defaultValue:400},animationEasing:{control:{type:"select"},options:["linear","ease","ease-in","ease-out","ease-in-out"],table:{type:{summary:'"ease" | "ease-in" | "ease-in-out" | "ease-out" | "linear"'},category:"Animation",defaultValue:{summary:"ease-in-out"}},defaultValue:"ease-in-out"},dataKey:{description:"Decides how to extract the value of this ErrorBar from the data:\n- `string`: the name of the field in the data object;\n- `number`: the index of the field in the data;\n- `function`: a function that receives the data object and returns the value of this ErrorBar.\n\nThe error values can be a single value for symmetric error bars;\nor an array of a lower and upper error value for asymmetric error bars.",table:{type:{summary:"DataKey<DataPointType, DataValueType>"},category:"General"}},direction:{description:`Direction of the error bar. Usually determined by chart layout, except in Scatter chart.
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
