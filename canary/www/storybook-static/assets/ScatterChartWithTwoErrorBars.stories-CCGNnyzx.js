import{R as r}from"./iframe-CszBinxB.js";import{g as n}from"./utils-ePvtT4un.js";import{S as s}from"./ScatterChartArgs-DVckGNEz.js";import{S as p}from"./ScatterChart-CVzMkG37.js";import{C as d}from"./CartesianGrid-DXxJFn4V.js";import{X as c}from"./XAxis-oYdZhs_K.js";import{Y as y}from"./YAxis-Dcemgb8R.js";import{S as h}from"./Scatter-DBuA5OWI.js";import{E as e}from"./ErrorBar-ChywjIez.js";import{T as u}from"./Tooltip-D6DyKh1e.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-B9WMJT6y.js";import"./zIndexSlice-CutJbhUL.js";import"./throttle-D83-jpt2.js";import"./index-Dk3UIdqq.js";import"./index-CK8GAH5B.js";import"./get-Dkt-pB45.js";import"./resolveDefaultProps-Bibg6aom.js";import"./isWellBehavedNumber-CQgoIKii.js";import"./PolarUtils-CTnnDHZv.js";import"./index-CJ5FwB5R.js";import"./index-CqsgrxyY.js";import"./renderedTicksSlice-BApmRI5D.js";import"./axisSelectors-ChU_3Lvt.js";import"./d3-scale-8f-0eAbn.js";import"./CartesianChart-CKqsh66i.js";import"./chartDataContext-D1nSjPO9.js";import"./CategoricalChart-KozYfQM0.js";import"./CartesianAxis-BWqORJkK.js";import"./Layer-CbC5ZndY.js";import"./Text-BedxJwrY.js";import"./DOMUtils-BDWRPNb8.js";import"./Label-Dp0h3UHP.js";import"./ZIndexLayer-BWnK9pgn.js";import"./types-BcRZVSBA.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./AnimatedItems-dM5mhDfD.js";import"./useAnimationId-DACL8E3O.js";import"./Curve-BU7ZSeTV.js";import"./step-F1REG5Zy.js";import"./path-DyVhHtw_.js";import"./tooltipContext-DORuRmNv.js";import"./Symbols-zpUzwf6l.js";import"./symbol-CuwiIzpc.js";import"./ActiveShapeUtils-BBAZWV6w.js";import"./RegisterGraphicalItemId-BWZQesOM.js";import"./ErrorBarContext--gRpVtKO.js";import"./GraphicalItemClipPath-BrN2bI9m.js";import"./SetGraphicalItem-DWL3HNya.js";import"./CSSTransitionAnimate-BxTkujjA.js";import"./util-Dxo8gN5i.js";import"./useElementOffset-BXwdlwFe.js";import"./uniqBy-BCYeHSUY.js";import"./iteratee-zMs8qLuf.js";import"./Cross-Djz1b2yT.js";import"./Rectangle-3wzUTOWc.js";import"./Sector-QnOONA2W.js";const xr={component:p,argTypes:s,docs:{autodocs:!1}},t={render:o=>{const l=[{x:100,y:200,errorY:30,errorX:30},{x:120,y:100,errorY:[500,30],errorX:[200,30]},{x:170,y:300,errorY:[10,20],errorX:20},{x:140,y:250,errorY:30,errorX:20},{x:150,y:400,errorY:[20,300],errorX:30},{x:110,y:280,errorY:40,errorX:40}];return r.createElement(p,{width:400,height:400,margin:{top:20,right:20,bottom:20,left:20},layout:o.layout},r.createElement(d,null),r.createElement(c,{type:"number",dataKey:"x",name:"stature",unit:"cm",allowDataOverflow:o.allowDataOverflow}),r.createElement(y,{type:"number",dataKey:"y",name:"weight",unit:"kg",allowDataOverflow:o.allowDataOverflow}),r.createElement(h,{name:"A school",data:l,fill:"blue"},r.createElement(e,{dataKey:"errorX",width:2,strokeWidth:3,stroke:"green",direction:"x"}),r.createElement(e,{dataKey:"errorY",width:4,strokeWidth:2,stroke:"red",direction:"y"})),r.createElement(u,{cursor:{strokeDasharray:"3 3"}}))},args:n(s),parameters:{controls:{include:["layout","allowDataOverflow"]}}};var a,i,m;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
      </ScatterChart>;
  },
  args: getStoryArgsFromArgsTypesObject(ScatterChartArgs),
  parameters: {
    controls: {
      include: ['layout', 'allowDataOverflow']
    }
  }
}`,...(m=(i=t.parameters)==null?void 0:i.docs)==null?void 0:m.source}}};const Er=["WithErrorBarsAndExtendedDomain"];export{t as WithErrorBarsAndExtendedDomain,Er as __namedExportsOrder,xr as default};
