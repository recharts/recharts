import{R as r}from"./iframe-CqZM7-m_.js";import{g as s}from"./utils-ePvtT4un.js";import{E as i}from"./ErrorBar-OU7frax2.js";import{R as p}from"./zIndexSlice-C2bhYwAU.js";import{S as l}from"./ScatterChart-B0CLXgTe.js";import{C as u}from"./CartesianGrid-Br8mHJsN.js";import{X as y}from"./XAxis-KlRKQHwy.js";import{Y as c}from"./YAxis-ae7SlnFd.js";import{S as d}from"./Scatter-C_96aWDj.js";import"./preload-helper-Dp1pzeXC.js";import"./Layer--KWigSyO.js";import"./get-cF5BDHN6.js";import"./resolveDefaultProps-DIo2Sl-P.js";import"./ErrorBarContext-CF_mHvca.js";import"./RechartsWrapper-C-tKczMb.js";import"./axisSelectors-CU7asiQ5.js";import"./throttle-BMiHfZwg.js";import"./index-C-aUkLsy.js";import"./index-DpXM8lGR.js";import"./polarAxisSelectors-DaUnHX5G.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-CaJTA9nk.js";import"./index-CztSWwc1.js";import"./index-NyV8lhCm.js";import"./renderedTicksSlice-D_esDvci.js";import"./index-DtqG7I3W.js";import"./dataEntryStyles-Df1iMIlW.js";import"./fillDefinitions-1X04y-fM.js";import"./pageBackground-Bhwi_Yxq.js";import"./themeFill-CUygaBJV.js";import"./CSSTransitionAnimate-BVIJSq1t.js";import"./useAnimationId-Bff8cv61.js";import"./util-Dxo8gN5i.js";import"./ZIndexLayer-CcqTqnO7.js";import"./CartesianChart-g7znHwgk.js";import"./ZIndexPortal-xTgrkJOp.js";import"./CategoricalChart-CjJTDTQz.js";import"./CartesianAxis-F_8zYdOn.js";import"./Text-D-XPvK3p.js";import"./DOMUtils-xk6ID9X9.js";import"./Label-CFulNYa4.js";import"./types-vIB-y3qp.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./LabelList-DhQNMiPW.js";import"./activeStyles-cNHowlQL.js";import"./Curve-Drzcx3Ud.js";import"./step-v_r5NIvy.js";import"./path-DyVhHtw_.js";import"./tooltipContext-C3dWHiK2.js";import"./Symbols-DzjBnU_i.js";import"./symbol-B1C_m7FV.js";import"./ActiveShapeUtils-Dat3aOlo.js";import"./SetGraphicalItem-BGa3ruh5.js";import"./useEffectiveDataKey-B0QeK97Q.js";const h=[{x:45,y:100,z:150,errorY:[30,20],errorX:5},{x:100,y:200,z:200,errorY:[20,30],errorX:3},{x:120,y:100,z:260,errorY:20,errorX:[5,3]},{x:170,y:300,z:400,errorY:[15,18],errorX:4},{x:140,y:250,z:280,errorY:23,errorX:[6,7]},{x:150,y:400,z:500,errorY:[21,10],errorX:4},{x:110,y:280,z:200,errorY:21,errorX:[5,6]}],n={animationBegin:{control:{type:"number"},table:{type:{summary:"number"},category:"Animation",defaultValue:{summary:"0"}},defaultValue:0},animationDuration:{control:{type:"number"},table:{type:{summary:"number"},category:"Animation",defaultValue:{summary:"400"}},defaultValue:400},animationEasing:{table:{type:{summary:'"ease" | "ease-in" | "ease-in-out" | "ease-out" | "linear" | "spring" | EasingFunction | `cubic-bezier(${number},${number},${number},${number})`'},category:"Animation",defaultValue:{summary:"ease-in-out"}},defaultValue:"ease-in-out"},dataKey:{description:"Decides how to extract the value of this ErrorBar from the data:\n- `string`: the name of the field in the data object;\n- `number`: the index of the field in the data;\n- `function`: a function that receives the data object and returns the value of this ErrorBar.\n\nThe error values can be a single value for symmetric error bars;\nor an array of a lower and upper error value for asymmetric error bars.",table:{type:{summary:"DataKey<DataPointType, DataValueType>"},category:"General"}},direction:{description:`Direction of the error bar. Usually determined by chart layout, except in Scatter chart.
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
