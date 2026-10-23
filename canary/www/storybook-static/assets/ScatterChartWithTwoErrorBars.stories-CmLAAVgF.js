import{R as r}from"./iframe-D54unYLy.js";import{g as l}from"./utils-ePvtT4un.js";import{S as m}from"./ScatterChartArgs-BpaDSsyX.js";import{S as p}from"./ScatterChart-CRHe3Wba.js";import{C as d}from"./CartesianGrid-iXe5GTLd.js";import{X as c}from"./XAxis-R4jdjMJ5.js";import{Y as y}from"./YAxis-akurfq85.js";import{S as h}from"./Scatter-DJsqQ5Hs.js";import{E as e}from"./ErrorBar-xyFJzSbr.js";import{T as u}from"./Tooltip-5_e256fX.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-Sp30bFVi.js";import"./zIndexSlice-Cm3b7ejj.js";import"./throttle-DMkP6nmZ.js";import"./index-DTKKzB_q.js";import"./index-DJM2R3WX.js";import"./get-cF5BDHN6.js";import"./resolveDefaultProps-CJCAn8xn.js";import"./isWellBehavedNumber-BRWfHs55.js";import"./PolarUtils-CTnnDHZv.js";import"./axisSelectors-CGx4lpK1.js";import"./d3-scale-izKDfaZA.js";import"./index-C9p80rQK.js";import"./index-DILyQNHS.js";import"./renderedTicksSlice-D7aoxSus.js";import"./index-BNdKzrH5.js";import"./CartesianChart-CcD5rs5o.js";import"./chartDataContext-Coa6LtBf.js";import"./CategoricalChart-Bg1dkEg1.js";import"./CartesianAxis-UtS4SURK.js";import"./Layer-crHiZgAm.js";import"./Text-CRGGbb6_.js";import"./pageBackground-CsysAoq2.js";import"./useId-B4uqruq9.js";import"./useBackwardsCompatibleTheme-BSJdofEh.js";import"./Label-A3PRHVZO.js";import"./ZIndexLayer-DfUYfUZg.js";import"./types-BmPqNA2a.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./activeStyles-qzo8AQBX.js";import"./useAnimationId-C7SuCt1Q.js";import"./dataEntryStyles-CsFYoURq.js";import"./Curve-leEdGdAp.js";import"./step-C309cuJU.js";import"./path-DyVhHtw_.js";import"./tooltipContext-DTng4SL3.js";import"./Symbols-BPVu9Joj.js";import"./symbol-A2VrwPOA.js";import"./ActiveShapeUtils-DPaRxWi8.js";import"./ErrorBarContext-m85c5O32.js";import"./GraphicalItemClipPath-DDtxOsTL.js";import"./SetGraphicalItem-Y9oO0QZg.js";import"./useEffectiveDataKey-BB9JnQ0o.js";import"./CSSTransitionAnimate-CG8IyMnb.js";import"./util-Dxo8gN5i.js";import"./useElementOffset-COT3eBVz.js";import"./uniqBy-DUhvtwBb.js";import"./iteratee-D8iCn3Rd.js";import"./isArguments-yB-y1yaH.js";import"./Cross-CyqJOPur.js";import"./Rectangle-BjxF51Ga.js";import"./Sector-MvPs0y-3.js";const Dr={component:p,argTypes:m,docs:{autodocs:!1}},t={render:o=>{const s=[{x:100,y:200,errorY:30,errorX:30},{x:120,y:100,errorY:[500,30],errorX:[200,30]},{x:170,y:300,errorY:[10,20],errorX:20},{x:140,y:250,errorY:30,errorX:20},{x:150,y:400,errorY:[20,300],errorX:30},{x:110,y:280,errorY:40,errorX:40}];return r.createElement(p,{width:400,height:400,margin:{top:20,right:20,bottom:20,left:20},layout:o.layout},r.createElement(d,null),r.createElement(c,{type:"number",dataKey:"x",name:"stature",unit:"cm",allowDataOverflow:o.allowDataOverflow}),r.createElement(y,{type:"number",dataKey:"y",name:"weight",unit:"kg",allowDataOverflow:o.allowDataOverflow}),r.createElement(h,{name:"A school",data:s,fill:"blue"},r.createElement(e,{dataKey:"errorX",width:2,strokeWidth:3,stroke:"green",direction:"x"}),r.createElement(e,{dataKey:"errorY",width:4,strokeWidth:2,stroke:"red",direction:"y"})),r.createElement(u,{cursor:{strokeDasharray:"3 3"}}))},args:l(m),parameters:{controls:{include:["layout","allowDataOverflow"]}}},Or=["WithErrorBarsAndExtendedDomain"];var a,n,i;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
}`,...(i=(n=t.parameters)==null?void 0:n.docs)==null?void 0:i.source}}};export{t as WithErrorBarsAndExtendedDomain,Or as __namedExportsOrder,Dr as default};
