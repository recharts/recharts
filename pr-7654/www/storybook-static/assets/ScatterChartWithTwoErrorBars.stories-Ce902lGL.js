import{R as r}from"./iframe-BqyXYbfO.js";import{g as n}from"./utils-ePvtT4un.js";import{S as p}from"./ScatterChartArgs-DVckGNEz.js";import{S as s}from"./ScatterChart-Dn8iXUcR.js";import{C as d}from"./CartesianGrid-Cx0cizls.js";import{X as c}from"./XAxis-0w0QIVSx.js";import{Y as y}from"./YAxis-CPeQqwFp.js";import{S as h}from"./Scatter-BB3mFgH1.js";import{E as e}from"./ErrorBar-CmAswTdO.js";import{T as u}from"./Tooltip-DfxM-Zzf.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-D3v9xwCM.js";import"./zIndexSlice-B01GboJR.js";import"./throttle-CuHL7VMX.js";import"./index-Bv49Pgrm.js";import"./index-B9uHeZTZ.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-B3i-Tg0K.js";import"./isWellBehavedNumber-BRVst2EZ.js";import"./PolarUtils-CTnnDHZv.js";import"./index-CVfSI7O7.js";import"./index-bCeEKDHC.js";import"./axisSelectors-DpUYmlyC.js";import"./d3-scale-YUujBWq4.js";import"./renderedTicksSlice-7sTJiycY.js";import"./CartesianChart-0syXRV9F.js";import"./chartDataContext-D6yTmy2l.js";import"./CategoricalChart-RVKqvA7y.js";import"./CartesianAxis-DueGTPVP.js";import"./Layer-cG34Tdrq.js";import"./Text-DOHx7LgO.js";import"./DOMUtils-btZL_iKn.js";import"./useBackwardsCompatibleTheme-BlCAIHy1.js";import"./Label-oragi0Kj.js";import"./ZIndexLayer-rhqIudSr.js";import"./types-B7ADV__L.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./AnimatedItems-CpV-NRBb.js";import"./useAnimationId-CK12bq4f.js";import"./Curve-B6fu5Ruc.js";import"./step-B3dTMrU0.js";import"./path-DyVhHtw_.js";import"./tooltipContext-fOshULGt.js";import"./Symbols-DnBmXhc1.js";import"./symbol-IA9FIS8n.js";import"./ActiveShapeUtils-1I6X1s88.js";import"./RegisterGraphicalItemId-Ck8ajZX3.js";import"./ErrorBarContext-BGgmDGm5.js";import"./GraphicalItemClipPath-DDxOeQm3.js";import"./SetGraphicalItem-DNxW0R1P.js";import"./graphicalItemIdentity-CdZfZkJ-.js";import"./CSSTransitionAnimate-xumBcxJj.js";import"./util-Dxo8gN5i.js";import"./useElementOffset-DExtgCNc.js";import"./uniqBy-DKsxBLj8.js";import"./iteratee-I9oDQ_jw.js";import"./Cross-4aVT25Mq.js";import"./Rectangle-CftrBWbD.js";import"./Sector-B2YMZGu7.js";const Yr={component:s,argTypes:p,docs:{autodocs:!1}},t={render:o=>{const l=[{x:100,y:200,errorY:30,errorX:30},{x:120,y:100,errorY:[500,30],errorX:[200,30]},{x:170,y:300,errorY:[10,20],errorX:20},{x:140,y:250,errorY:30,errorX:20},{x:150,y:400,errorY:[20,300],errorX:30},{x:110,y:280,errorY:40,errorX:40}];return r.createElement(s,{width:400,height:400,margin:{top:20,right:20,bottom:20,left:20},layout:o.layout},r.createElement(d,null),r.createElement(c,{type:"number",dataKey:"x",name:"stature",unit:"cm",allowDataOverflow:o.allowDataOverflow}),r.createElement(y,{type:"number",dataKey:"y",name:"weight",unit:"kg",allowDataOverflow:o.allowDataOverflow}),r.createElement(h,{name:"A school",data:l,fill:"blue"},r.createElement(e,{dataKey:"errorX",width:2,strokeWidth:3,stroke:"green",direction:"x"}),r.createElement(e,{dataKey:"errorY",width:4,strokeWidth:2,stroke:"red",direction:"y"})),r.createElement(u,{cursor:{strokeDasharray:"3 3"}}))},args:n(p),parameters:{controls:{include:["layout","allowDataOverflow"]}}};var a,i,m;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
}`,...(m=(i=t.parameters)==null?void 0:i.docs)==null?void 0:m.source}}};const Ar=["WithErrorBarsAndExtendedDomain"];export{t as WithErrorBarsAndExtendedDomain,Ar as __namedExportsOrder,Yr as default};
