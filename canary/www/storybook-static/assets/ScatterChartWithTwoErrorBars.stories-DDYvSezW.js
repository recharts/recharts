import{e as r}from"./iframe-BC-5LcYb.js";import{g as n}from"./utils-ePvtT4un.js";import{S as s}from"./ScatterChartArgs-CaeXznmO.js";import{S as p}from"./ScatterChart-79HQgRBx.js";import{C as d}from"./CartesianGrid-fHF5ZW2a.js";import{X as c}from"./XAxis-c4svWBsh.js";import{Y as y}from"./YAxis-DdqcUQaJ.js";import{S as h}from"./Scatter-Dy4A1FdJ.js";import{E as e}from"./ErrorBar-ZboIvN4Z.js";import{T as u}from"./Tooltip-CRf-8OOa.js";import{R as f}from"./RechartsHookInspector-B75ZFa4B.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-B8Da5X0m.js";import"./arrayEqualityCheck-ChXaihMZ.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-CZYO2Ka-.js";import"./immer-ZiBWKhHb.js";import"./PolarUtils-CTnnDHZv.js";import"./index-DddLbDqU.js";import"./hooks-rB50_RV3.js";import"./axisSelectors-CxQAx9lZ.js";import"./d3-scale-PqmOg0fe.js";import"./zIndexSlice-BntL5RH1.js";import"./renderedTicksSlice-D9tlxui6.js";import"./CartesianChart-B_l4BcVo.js";import"./chartDataContext-w--Sw2J9.js";import"./CategoricalChart-CIq8dObJ.js";import"./CartesianAxis-B0mR8vIz.js";import"./Layer-DTseK4B8.js";import"./Text-BCKsJQhx.js";import"./DOMUtils-BFDtjzpb.js";import"./Label-DpYIsLw2.js";import"./ZIndexLayer-Dl-ZMGAP.js";import"./types-DPX13aC-.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./ReactUtils-DTBTVl0S.js";import"./Curve-28zddxeA.js";import"./step-CVSHTaSO.js";import"./tooltipContext-D_ugRJhv.js";import"./Symbols-CjqMpyW7.js";import"./symbol-BKo09A-g.js";import"./ActiveShapeUtils-i3MObavq.js";import"./isPlainObject-CJKJH7Oc.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-BjlfkU01.js";import"./useAnimationId-1buHKKGB.js";import"./Trapezoid-JczkhOAH.js";import"./Sector-BhUjloQr.js";import"./RegisterGraphicalItemId-Bcc7KsZV.js";import"./ErrorBarContext-B8bfqZ6V.js";import"./GraphicalItemClipPath-DkytICF2.js";import"./SetGraphicalItem--aBLcxY1.js";import"./CSSTransitionAnimate-DA6RTtqB.js";import"./useElementOffset-BxrTFY18.js";import"./uniqBy-EzjyjqXa.js";import"./iteratee-DiuVQ9oe.js";import"./Cross-Ba7Nru0r.js";import"./index-D_pdBQCR.js";import"./ChartSizeDimensions-DlGGqx96.js";import"./OffsetShower-vrKiwX_5.js";import"./PlotAreaShower-D4359Ub-.js";const Sr={component:p,argTypes:s,docs:{autodocs:!1}},t={render:o=>{const l=[{x:100,y:200,errorY:30,errorX:30},{x:120,y:100,errorY:[500,30],errorX:[200,30]},{x:170,y:300,errorY:[10,20],errorX:20},{x:140,y:250,errorY:30,errorX:20},{x:150,y:400,errorY:[20,300],errorX:30},{x:110,y:280,errorY:40,errorX:40}];return r.createElement(p,{width:400,height:400,margin:{top:20,right:20,bottom:20,left:20},layout:o.layout},r.createElement(d,null),r.createElement(c,{type:"number",dataKey:"x",name:"stature",unit:"cm",allowDataOverflow:o.allowDataOverflow}),r.createElement(y,{type:"number",dataKey:"y",name:"weight",unit:"kg",allowDataOverflow:o.allowDataOverflow}),r.createElement(h,{name:"A school",data:l,fill:"blue"},r.createElement(e,{dataKey:"errorX",width:2,strokeWidth:3,stroke:"green",direction:"x"}),r.createElement(e,{dataKey:"errorY",width:4,strokeWidth:2,stroke:"red",direction:"y"})),r.createElement(u,{cursor:{strokeDasharray:"3 3"}}),r.createElement(f,null))},args:n(s),parameters:{controls:{include:["layout","allowDataOverflow"]}}};var a,i,m;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
  render: (args: Args) => {
    const data = [{
      x: 100,
      y: 200,
      errorY: 30,
      errorX: 30
    }, {
      x: 120,
      y: 100,
      errorY: [500, 30],
      errorX: [200, 30]
    }, {
      x: 170,
      y: 300,
      errorY: [10, 20],
      errorX: 20
    }, {
      x: 140,
      y: 250,
      errorY: 30,
      errorX: 20
    }, {
      x: 150,
      y: 400,
      errorY: [20, 300],
      errorX: 30
    }, {
      x: 110,
      y: 280,
      errorY: 40,
      errorX: 40
    }];
    return <ScatterChart width={400} height={400} margin={{
      top: 20,
      right: 20,
      bottom: 20,
      left: 20
    }} layout={args.layout}>
        <CartesianGrid />
        <XAxis type="number" dataKey="x" name="stature" unit="cm" allowDataOverflow={args.allowDataOverflow} />
        <YAxis type="number" dataKey="y" name="weight" unit="kg" allowDataOverflow={args.allowDataOverflow} />
        <Scatter name="A school" data={data} fill="blue">
          {/* This ErrorBar does render, but it does not extend the domain of XAxis unfortunately */}
          <ErrorBar dataKey="errorX" width={2} strokeWidth={3} stroke="green" direction="x" />
          <ErrorBar dataKey="errorY" width={4} strokeWidth={2} stroke="red" direction="y" />
        </Scatter>
        <Tooltip cursor={{
        strokeDasharray: '3 3'
      }} />
        <RechartsHookInspector />
      </ScatterChart>;
  },
  args: getStoryArgsFromArgsTypesObject(ScatterChartArgs),
  parameters: {
    controls: {
      include: ['layout', 'allowDataOverflow']
    }
  }
}`,...(m=(i=t.parameters)==null?void 0:i.docs)==null?void 0:m.source}}};const kr=["WithErrorBarsAndExtendedDomain"];export{t as WithErrorBarsAndExtendedDomain,kr as __namedExportsOrder,Sr as default};
