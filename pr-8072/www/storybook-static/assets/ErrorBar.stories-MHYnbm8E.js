import{R as r}from"./iframe-z3NgSViZ.js";import{g as s}from"./utils-ePvtT4un.js";import{E as i}from"./ErrorBar-By1I4wbC.js";import{R as p}from"./zIndexSlice-BX0CZtnZ.js";import{S as l}from"./ScatterChart-CvLveWz-.js";import{C as u}from"./CartesianGrid-BlkW-CCM.js";import{X as y}from"./XAxis-6HQNOcHb.js";import{Y as c}from"./YAxis-Cq1FHamq.js";import{S as d}from"./Scatter-Bq96dEjS.js";import"./preload-helper-Dp1pzeXC.js";import"./Layer-DIcps5If.js";import"./get-cF5BDHN6.js";import"./resolveDefaultProps-DKxZJqnD.js";import"./ErrorBarContext-Cu9qYyvb.js";import"./RechartsWrapper-D_oQRH40.js";import"./axisSelectors-CgbkNJhz.js";import"./throttle-CwdrNliT.js";import"./index-B3bVO830.js";import"./index-h-xMeUpP.js";import"./isWellBehavedNumber-B9JEbcQX.js";import"./d3-scale-CwYOu9hN.js";import"./index-CZd_v0hL.js";import"./index-gkGbSS0A.js";import"./renderedTicksSlice-DYq8RKWJ.js";import"./index-bcahlE0Z.js";import"./PolarUtils-CTnnDHZv.js";import"./RegisterGraphicalItemId-BSkjC-ao.js";import"./useId-BBfhtQXH.js";import"./CSSTransitionAnimate-DHdme1Kk.js";import"./useAnimationId-Cz2G0J8W.js";import"./util-Dxo8gN5i.js";import"./ZIndexLayer-B4GmRtpr.js";import"./useBackwardsCompatibleTheme-DpJUriCO.js";import"./CartesianChart-BZn7jg65.js";import"./chartDataContext-rha9Z1YY.js";import"./CategoricalChart-DXqdBwWs.js";import"./CartesianAxis-aatvopbC.js";import"./Text-Bf3Z0ESX.js";import"./pageBackground-SSHR1dqO.js";import"./Label-Cv5DkZGS.js";import"./dataEntryStyles-C3z4X2RS.js";import"./types-2rYpOkQj.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./activeStyles-CeGdwWio.js";import"./Curve-CyxMxsdR.js";import"./step-BrvgHvKB.js";import"./path-DyVhHtw_.js";import"./tooltipContext-ByiR1jPw.js";import"./Symbols-Jw1F6xH7.js";import"./symbol-BJRaGT2z.js";import"./ActiveShapeUtils-CBpakVvV.js";import"./SetGraphicalItem-C6QUze-d.js";import"./useEffectiveDataKey-CRDGSrQh.js";const h=[{x:45,y:100,z:150,errorY:[30,20],errorX:5},{x:100,y:200,z:200,errorY:[20,30],errorX:3},{x:120,y:100,z:260,errorY:20,errorX:[5,3]},{x:170,y:300,z:400,errorY:[15,18],errorX:4},{x:140,y:250,z:280,errorY:23,errorX:[6,7]},{x:150,y:400,z:500,errorY:[21,10],errorX:4},{x:110,y:280,z:200,errorY:21,errorX:[5,6]}],n={animationBegin:{control:{type:"number"},table:{type:{summary:"number"},category:"Animation",defaultValue:{summary:"0"}},defaultValue:0},animationDuration:{control:{type:"number"},table:{type:{summary:"number"},category:"Animation",defaultValue:{summary:"400"}},defaultValue:400},animationEasing:{table:{type:{summary:'"ease" | "ease-in" | "ease-in-out" | "ease-out" | "linear" | "spring" | EasingFunction | `cubic-bezier(${number},${number},${number},${number})`'},category:"Animation",defaultValue:{summary:"ease-in-out"}},defaultValue:"ease-in-out"},dataKey:{description:"Decides how to extract the value of this ErrorBar from the data:\n- `string`: the name of the field in the data object;\n- `number`: the index of the field in the data;\n- `function`: a function that receives the data object and returns the value of this ErrorBar.\n\nThe error values can be a single value for symmetric error bars;\nor an array of a lower and upper error value for asymmetric error bars.",table:{type:{summary:"DataKey<DataPointType, DataValueType>"},category:"General"}},direction:{description:`Direction of the error bar. Usually determined by chart layout, except in Scatter chart.
In Scatter chart, "x" means horizontal error bars, "y" means vertical error bars.`,table:{type:{summary:"number | string"},category:"General"}},isAnimationActive:{control:{type:"boolean"},table:{type:{summary:"boolean"},category:"Animation",defaultValue:{summary:"true"}},defaultValue:!0},stroke:{description:'The stroke color. If "none", no line will be drawn.',control:{type:"color"},table:{type:{summary:"string"},category:"Style"}},strokeWidth:{description:"The width of the stroke",table:{type:{summary:"number | string"},category:"Style"}},width:{description:`Width of the error bar ends (the serifs) in pixels.
This is not the total width of the error bar, but just the width of the little lines at the ends.

The total width of the error bar is determined by the data value plus/minus the error value.`,table:{type:{summary:"number | string"},category:"General",defaultValue:{summary:"5"}},defaultValue:5},zIndex:{control:{type:"number"},table:{type:{summary:"number"},category:"General",defaultValue:{summary:"400"}},defaultValue:400}},br={component:i,argTypes:n},e={render:m=>r.createElement(p,{width:"100%",height:500},r.createElement(l,{margin:{top:5,right:30,left:20,bottom:5},width:730,height:250},r.createElement(u,null),r.createElement(y,{dataKey:"x",type:"number"}),r.createElement(c,{dataKey:"y",type:"number"}),r.createElement(d,{data:h,fill:"#ff7300"},r.createElement(i,{dataKey:"errorY",...m})))),args:{...s(n),width:4,strokeWidth:2,stroke:"green",direction:"y",dataKey:"errorY"}},fr=["API"];var t,a,o;e.parameters={...e.parameters,docs:{...(t=e.parameters)==null?void 0:t.docs,source:{originalSource:`{
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
}`,...(o=(a=e.parameters)==null?void 0:a.docs)==null?void 0:o.source}}};export{e as API,fr as __namedExportsOrder,br as default};
