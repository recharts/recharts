import{R as r}from"./iframe-Bzny_MYO.js";import{g as s}from"./utils-ePvtT4un.js";import{E as i}from"./ErrorBar-G3-C-7aL.js";import{R as p}from"./zIndexSlice-MTgyOxcR.js";import{S as l}from"./ScatterChart-C9YnG5KD.js";import{C as u}from"./CartesianGrid-BU--jY8B.js";import{X as y}from"./XAxis-D652bNH-.js";import{Y as c}from"./YAxis-CJm4ZJgn.js";import{S as d}from"./Scatter-DJSmjgqM.js";import"./preload-helper-Dp1pzeXC.js";import"./Layer-DwImaMiy.js";import"./get-cF5BDHN6.js";import"./resolveDefaultProps-DhnFRoYZ.js";import"./ErrorBarContext-B5xatTad.js";import"./RechartsWrapper-DwCbU-k0.js";import"./axisSelectors-BEccdncb.js";import"./throttle-GvTGKSCT.js";import"./index-BR-DuKD2.js";import"./index-BNanU6AD.js";import"./polarAxisSelectors-Cax9tCz_.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-CLm70OA6.js";import"./index-B1Bw8GV_.js";import"./index-BO70CSrb.js";import"./renderedTicksSlice-IHCqVqCy.js";import"./index-BGYmHh9L.js";import"./dataEntryStyles-Dmke5Kqf.js";import"./pageBackground-3hrs4YVX.js";import"./CSSTransitionAnimate-BgZlmw89.js";import"./useAnimationId-DPjHdwMC.js";import"./util-Dxo8gN5i.js";import"./ZIndexLayer-5vWyPJ-H.js";import"./CartesianChart-8QUHmRpr.js";import"./ZIndexPortal-CcFwSb_x.js";import"./CategoricalChart-BS5ujOqF.js";import"./CartesianAxis-CF7trjb7.js";import"./Text-fNDWB5Io.js";import"./Label-DTuGlMPs.js";import"./types-DppBMtwl.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./LabelList-DP5qLQcH.js";import"./activeStyles-D4lYsebj.js";import"./Curve-DvxHsU-S.js";import"./step-Ck4pU_CH.js";import"./path-DyVhHtw_.js";import"./tooltipContext-Iz_t1CFH.js";import"./Symbols-Dt4jbT5_.js";import"./symbol-BKCm_Bj0.js";import"./ActiveShapeUtils-cjVk6ERl.js";import"./SetGraphicalItem-C8_kNIod.js";import"./useEffectiveDataKey-D9i-sft6.js";const h=[{x:45,y:100,z:150,errorY:[30,20],errorX:5},{x:100,y:200,z:200,errorY:[20,30],errorX:3},{x:120,y:100,z:260,errorY:20,errorX:[5,3]},{x:170,y:300,z:400,errorY:[15,18],errorX:4},{x:140,y:250,z:280,errorY:23,errorX:[6,7]},{x:150,y:400,z:500,errorY:[21,10],errorX:4},{x:110,y:280,z:200,errorY:21,errorX:[5,6]}],n={animationBegin:{control:{type:"number"},table:{type:{summary:"number"},category:"Animation",defaultValue:{summary:"0"}},defaultValue:0},animationDuration:{control:{type:"number"},table:{type:{summary:"number"},category:"Animation",defaultValue:{summary:"400"}},defaultValue:400},animationEasing:{table:{type:{summary:'"ease" | "ease-in" | "ease-in-out" | "ease-out" | "linear" | "spring" | EasingFunction | `cubic-bezier(${number},${number},${number},${number})`'},category:"Animation",defaultValue:{summary:"ease-in-out"}},defaultValue:"ease-in-out"},dataKey:{description:"Decides how to extract the value of this ErrorBar from the data:\n- `string`: the name of the field in the data object;\n- `number`: the index of the field in the data;\n- `function`: a function that receives the data object and returns the value of this ErrorBar.\n\nThe error values can be a single value for symmetric error bars;\nor an array of a lower and upper error value for asymmetric error bars.",table:{type:{summary:"DataKey<DataPointType, DataValueType>"},category:"General"}},direction:{description:`Direction of the error bar. Usually determined by chart layout, except in Scatter chart.
In Scatter chart, "x" means horizontal error bars, "y" means vertical error bars.`,table:{type:{summary:"number | string"},category:"General"}},isAnimationActive:{control:{type:"boolean"},table:{type:{summary:"boolean"},category:"Animation",defaultValue:{summary:"true"}},defaultValue:!0},stroke:{description:'The stroke color. If "none", no line will be drawn.',control:{type:"color"},table:{type:{summary:"string"},category:"Style"}},strokeWidth:{description:"The width of the stroke",table:{type:{summary:"number | string"},category:"Style"}},width:{description:`Width of the error bar ends (the serifs) in pixels.
This is not the total width of the error bar, but just the width of the little lines at the ends.

The total width of the error bar is determined by the data value plus/minus the error value.`,table:{type:{summary:"number | string"},category:"General",defaultValue:{summary:"5"}},defaultValue:5},zIndex:{control:{type:"number"},table:{type:{summary:"number"},category:"General",defaultValue:{summary:"400"}},defaultValue:400}},dr={component:i,argTypes:n},e={render:m=>r.createElement(p,{width:"100%",height:500},r.createElement(l,{margin:{top:5,right:30,left:20,bottom:5},width:730,height:250},r.createElement(u,null),r.createElement(y,{dataKey:"x",type:"number"}),r.createElement(c,{dataKey:"y",type:"number"}),r.createElement(d,{data:h,fill:"#ff7300"},r.createElement(i,{dataKey:"errorY",...m})))),args:{...s(n),width:4,strokeWidth:2,stroke:"green",direction:"y",dataKey:"errorY"}},hr=["API"];var t,a,o;e.parameters={...e.parameters,docs:{...(t=e.parameters)==null?void 0:t.docs,source:{originalSource:`{
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
}`,...(o=(a=e.parameters)==null?void 0:a.docs)==null?void 0:o.source}}};export{e as API,hr as __namedExportsOrder,dr as default};
