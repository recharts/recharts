import{e as r}from"./iframe-Ct0PK1iZ.js";import{g as s}from"./utils-ePvtT4un.js";import{E as i}from"./ErrorBar-DYa1NWEt.js";import{R as l}from"./arrayEqualityCheck-cSrg192z.js";import{S as p}from"./ScatterChart-3JM19EEH.js";import{C as u}from"./CartesianGrid-CZTL1fO6.js";import{X as y}from"./XAxis-ZfaBuFta.js";import{Y as c}from"./YAxis-CMvF26TK.js";import{S as d}from"./Scatter-Bpe-vgV6.js";import{R as h}from"./RechartsHookInspector-Ct0UJLxA.js";import"./preload-helper-Dp1pzeXC.js";import"./Layer-BFqbkghr.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-CkDZ6rk0.js";import"./ErrorBarContext-C_IVi_zE.js";import"./RechartsWrapper-JBNrYn90.js";import"./index-e5TdOq0j.js";import"./immer-C_0hot5p.js";import"./hooks-B5ECIQG0.js";import"./axisSelectors-DfI31pZt.js";import"./d3-scale-BIuiM5G6.js";import"./zIndexSlice-C0pIss81.js";import"./renderedTicksSlice-Xed-5Uzt.js";import"./PolarUtils-CTnnDHZv.js";import"./RegisterGraphicalItemId-DG67JJW9.js";import"./CSSTransitionAnimate-BK9Li_Yj.js";import"./useAnimationId-DhoQEmEH.js";import"./ZIndexLayer-CPK1fMG2.js";import"./CartesianChart-F11oHMFT.js";import"./chartDataContext-Be_hCN-X.js";import"./CategoricalChart-DBM3lb6I.js";import"./CartesianAxis-DpFipx6Q.js";import"./Text-D7gtJPhg.js";import"./DOMUtils-DZtY6UXL.js";import"./Label-kZgIL_LG.js";import"./types-B_QiL_OE.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./ReactUtils-C9XhBs7w.js";import"./Curve-BtTKqNeq.js";import"./step-CfNjb2F4.js";import"./tooltipContext-DtkZLYWw.js";import"./Symbols-Cz5Eatoq.js";import"./symbol-ORh8C_38.js";import"./ActiveShapeUtils-UwLXsB-I.js";import"./isPlainObject-B12Z6ZLF.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-Bk1l59Or.js";import"./Trapezoid-BzWb9o7I.js";import"./Sector-6TbuA5HM.js";import"./GraphicalItemClipPath-DIAe0jt7.js";import"./SetGraphicalItem-BiB1viSJ.js";import"./index-DoqQxHuh.js";import"./ChartSizeDimensions-Blj7cX2O.js";import"./OffsetShower-kOurDMwT.js";import"./PlotAreaShower-CxG6J2wp.js";const f=[{x:45,y:100,z:150,errorY:[30,20],errorX:5},{x:100,y:200,z:200,errorY:[20,30],errorX:3},{x:120,y:100,z:260,errorY:20,errorX:[5,3]},{x:170,y:300,z:400,errorY:[15,18],errorX:4},{x:140,y:250,z:280,errorY:23,errorX:[6,7]},{x:150,y:400,z:500,errorY:[21,10],errorX:4},{x:110,y:280,z:200,errorY:21,errorX:[5,6]}],m={animationBegin:{control:{type:"number"},table:{type:{summary:"number"},category:"Animation",defaultValue:{summary:"0"}},defaultValue:0},animationDuration:{control:{type:"number"},table:{type:{summary:"number"},category:"Animation",defaultValue:{summary:"400"}},defaultValue:400},animationEasing:{control:{type:"select"},options:["linear","ease","ease-in","ease-out","ease-in-out"],table:{type:{summary:'"ease" | "ease-in" | "ease-in-out" | "ease-out" | "linear"'},category:"Animation",defaultValue:{summary:"ease-in-out"}},defaultValue:"ease-in-out"},dataKey:{description:"Decides how to extract the value of this ErrorBar from the data:\n- `string`: the name of the field in the data object;\n- `number`: the index of the field in the data;\n- `function`: a function that receives the data object and returns the value of this ErrorBar.\n\nThe error values can be a single value for symmetric error bars;\nor an array of a lower and upper error value for asymmetric error bars.",table:{type:{summary:"DataKey<DataPointType, DataValueType>"},category:"General"}},direction:{description:`Direction of the error bar. Usually determined by chart layout, except in Scatter chart.
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
