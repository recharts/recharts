import{R as r}from"./iframe-DkIbxCKI.js";import{g as l}from"./utils-ePvtT4un.js";import{S as m}from"./ScatterChartArgs-DVckGNEz.js";import{S as p}from"./ScatterChart-D52KhJ5o.js";import{C as d}from"./CartesianGrid-BN9lk_W5.js";import{X as c}from"./XAxis-BPLEkIZ2.js";import{Y as y}from"./YAxis-CwdPxCpD.js";import{S as h}from"./Scatter-C2k3FRuf.js";import{E as e}from"./ErrorBar-DIMJqPvf.js";import{T as u}from"./Tooltip-C95UPDi7.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-CqxFYmG2.js";import"./zIndexSlice-CHbZzwgN.js";import"./throttle-CWb9XQe7.js";import"./index-yECzrrEn.js";import"./index-B09gEsNA.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-BevWDyyN.js";import"./isWellBehavedNumber-fyAAr-BE.js";import"./PolarUtils-CTnnDHZv.js";import"./axisSelectors-B_cE3_9l.js";import"./d3-scale-8ot6xaxi.js";import"./index-CgyukL1G.js";import"./index-x7Df9KyH.js";import"./renderedTicksSlice-DyBDLYr8.js";import"./index-BccjzSMV.js";import"./CartesianChart-CLeTDcJ1.js";import"./chartDataContext-CWOneN2n.js";import"./CategoricalChart-De8d0Fqy.js";import"./CartesianAxis-5Nq6xx1I.js";import"./Layer-D7vk6n2M.js";import"./Text-BbOUDRzF.js";import"./DOMUtils-BUKWldcd.js";import"./useId-8qRrdFWs.js";import"./useBackwardsCompatibleTheme-BwQOOq4w.js";import"./Label-DXoCOeOg.js";import"./ZIndexLayer-BJyXs-Ro.js";import"./types-CwHWliOY.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./AnimatedItems-CIN2lrWw.js";import"./useAnimationId-DMHPZlQv.js";import"./Curve-D-aQyXcF.js";import"./step-DQQJ3aEt.js";import"./path-DyVhHtw_.js";import"./tooltipContext-D_1DAJCL.js";import"./Symbols-HotSIVb8.js";import"./symbol-IDRMsfhc.js";import"./ActiveShapeUtils-CMEDiyrE.js";import"./RegisterGraphicalItemId-lA-3F1_K.js";import"./ErrorBarContext-C70mMVNC.js";import"./GraphicalItemClipPath-DKslCQDi.js";import"./SetGraphicalItem-CEswJxM0.js";import"./useGraphicalItemIdentity-BZv1ZQCF.js";import"./CSSTransitionAnimate-B0wS2oiH.js";import"./util-Dxo8gN5i.js";import"./useElementOffset-Br7ppT_A.js";import"./uniqBy-BUgSc2Cm.js";import"./iteratee-DkJdq8oi.js";import"./Cross-CIdlY32l.js";import"./Rectangle-CcvMQD5l.js";import"./Sector-ZXLenKXH.js";const Sr={component:p,argTypes:m,docs:{autodocs:!1}},t={render:o=>{const s=[{x:100,y:200,errorY:30,errorX:30},{x:120,y:100,errorY:[500,30],errorX:[200,30]},{x:170,y:300,errorY:[10,20],errorX:20},{x:140,y:250,errorY:30,errorX:20},{x:150,y:400,errorY:[20,300],errorX:30},{x:110,y:280,errorY:40,errorX:40}];return r.createElement(p,{width:400,height:400,margin:{top:20,right:20,bottom:20,left:20},layout:o.layout},r.createElement(d,null),r.createElement(c,{type:"number",dataKey:"x",name:"stature",unit:"cm",allowDataOverflow:o.allowDataOverflow}),r.createElement(y,{type:"number",dataKey:"y",name:"weight",unit:"kg",allowDataOverflow:o.allowDataOverflow}),r.createElement(h,{name:"A school",data:s,fill:"blue"},r.createElement(e,{dataKey:"errorX",width:2,strokeWidth:3,stroke:"green",direction:"x"}),r.createElement(e,{dataKey:"errorY",width:4,strokeWidth:2,stroke:"red",direction:"y"})),r.createElement(u,{cursor:{strokeDasharray:"3 3"}}))},args:l(m),parameters:{controls:{include:["layout","allowDataOverflow"]}}},Dr=["WithErrorBarsAndExtendedDomain"];var a,n,i;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
}`,...(i=(n=t.parameters)==null?void 0:n.docs)==null?void 0:i.source}}};export{t as WithErrorBarsAndExtendedDomain,Dr as __namedExportsOrder,Sr as default};
