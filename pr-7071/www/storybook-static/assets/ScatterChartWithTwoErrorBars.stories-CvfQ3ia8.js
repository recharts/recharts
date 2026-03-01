import{e as r}from"./iframe-KIGRIIb5.js";import{g as n}from"./utils-ePvtT4un.js";import{S as s}from"./ScatterChartArgs-CaeXznmO.js";import{S as p}from"./ScatterChart-D8caA4eU.js";import{C as d}from"./CartesianGrid-BTfYvi-X.js";import{X as c}from"./XAxis-CSvpHUvr.js";import{Y as y}from"./YAxis-Bh8V8qj-.js";import{S as h}from"./Scatter-Dc3wnezn.js";import{E as e}from"./ErrorBar-DqiflZC3.js";import{T as u}from"./Tooltip-BeR3kpzv.js";import{R as f}from"./RechartsHookInspector-Bt2WJDB1.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-DHe9ZVa4.js";import"./arrayEqualityCheck-BpdZ7hwi.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-D_adPZ-8.js";import"./immer-WG6U2D_d.js";import"./PolarUtils-CTnnDHZv.js";import"./index-ClQqk-oX.js";import"./hooks-CB3QlvSf.js";import"./axisSelectors-BkzxsiaE.js";import"./d3-scale-DgRq4lUU.js";import"./zIndexSlice-_VCrDw0P.js";import"./renderedTicksSlice-eT4Ivs1b.js";import"./CartesianChart-qCsQp1Vm.js";import"./chartDataContext-D4pNrPnz.js";import"./CategoricalChart-e7-cm4mq.js";import"./CartesianAxis-Cra0xsE5.js";import"./Layer-DuIzwjaR.js";import"./Text-BoAeRYTN.js";import"./DOMUtils-CBEI-OH0.js";import"./Label-CkUDjV7L.js";import"./ZIndexLayer-CBYmGw4W.js";import"./types-w2IwZ3Nn.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./ReactUtils-CkQKUzGb.js";import"./Curve-BndPQnOp.js";import"./step-CQsLqeZl.js";import"./tooltipContext-bsfh6YT_.js";import"./Symbols-B6R2DiC2.js";import"./symbol-C10mZUN3.js";import"./ActiveShapeUtils-BbMpDdiq.js";import"./isPlainObject-CCJRIfQY.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-BcYcowey.js";import"./useAnimationId-Bv85JSPp.js";import"./Trapezoid-6-PW5Hrl.js";import"./Sector-Dsu6XmgC.js";import"./RegisterGraphicalItemId-DsmENlGz.js";import"./ErrorBarContext-Dm4Pi7GF.js";import"./GraphicalItemClipPath-CZoI5FBE.js";import"./SetGraphicalItem-DmMr7UzB.js";import"./CSSTransitionAnimate-CUsmN00X.js";import"./useElementOffset-D6WzauAM.js";import"./uniqBy-Cw44ZgZs.js";import"./iteratee-8JDIDxH7.js";import"./Cross-DWTFUcaP.js";import"./index-CoeeyBxi.js";import"./ChartSizeDimensions-BY9JAKDy.js";import"./OffsetShower-DhxtKv-n.js";import"./PlotAreaShower-DjAl-bbb.js";const Sr={component:p,argTypes:s,docs:{autodocs:!1}},t={render:o=>{const l=[{x:100,y:200,errorY:30,errorX:30},{x:120,y:100,errorY:[500,30],errorX:[200,30]},{x:170,y:300,errorY:[10,20],errorX:20},{x:140,y:250,errorY:30,errorX:20},{x:150,y:400,errorY:[20,300],errorX:30},{x:110,y:280,errorY:40,errorX:40}];return r.createElement(p,{width:400,height:400,margin:{top:20,right:20,bottom:20,left:20},layout:o.layout},r.createElement(d,null),r.createElement(c,{type:"number",dataKey:"x",name:"stature",unit:"cm",allowDataOverflow:o.allowDataOverflow}),r.createElement(y,{type:"number",dataKey:"y",name:"weight",unit:"kg",allowDataOverflow:o.allowDataOverflow}),r.createElement(h,{name:"A school",data:l,fill:"blue"},r.createElement(e,{dataKey:"errorX",width:2,strokeWidth:3,stroke:"green",direction:"x"}),r.createElement(e,{dataKey:"errorY",width:4,strokeWidth:2,stroke:"red",direction:"y"})),r.createElement(u,{cursor:{strokeDasharray:"3 3"}}),r.createElement(f,null))},args:n(s),parameters:{controls:{include:["layout","allowDataOverflow"]}}};var a,i,m;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
