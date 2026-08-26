import{R as r}from"./iframe-Bzmu5HIk.js";import{g as n}from"./utils-ePvtT4un.js";import{S as p}from"./ScatterChartArgs-DVckGNEz.js";import{S as s}from"./ScatterChart-DkyQw5ny.js";import{C as d}from"./CartesianGrid-5aOGU1_u.js";import{X as c}from"./XAxis-jQ_CxXuQ.js";import{Y as y}from"./YAxis-CurDeKAa.js";import{S as h}from"./Scatter-D4LrcrRA.js";import{E as e}from"./ErrorBar-CKSYgfRT.js";import{T as u}from"./Tooltip-C0sYZp6-.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-DCfV64tZ.js";import"./zIndexSlice-DOqwIOxM.js";import"./throttle-By1_Q0f1.js";import"./index-CS9ypgyw.js";import"./index-BU2ca08W.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-CRF5GxOI.js";import"./isWellBehavedNumber-DCtTU4mD.js";import"./PolarUtils-CTnnDHZv.js";import"./index-Bs5Y62tp.js";import"./index-DuAK0LiD.js";import"./axisSelectors-CQE5C8Tc.js";import"./d3-scale-mcjvwMyE.js";import"./renderedTicksSlice-aIMhvrWq.js";import"./CartesianChart-D9cj75Uw.js";import"./chartDataContext-6ylcQe-7.js";import"./CategoricalChart-CH9SVF8Q.js";import"./CartesianAxis-ByUKa2Ph.js";import"./Layer-BIAwX0Ug.js";import"./Text-DqoobI6S.js";import"./DOMUtils-dt_U2Js1.js";import"./useId-CJJMgP-t.js";import"./useBackwardsCompatibleTheme-CmmFKQCY.js";import"./Label-BnPFFEHB.js";import"./ZIndexLayer-CHgZKeoE.js";import"./types-CP805D0F.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./AnimatedItems-C8pcPfP0.js";import"./useAnimationId-pFMJHbYK.js";import"./Curve-CKwGe3YB.js";import"./step-BOb3jDRZ.js";import"./path-DyVhHtw_.js";import"./tooltipContext-DBHmmRIt.js";import"./Symbols-BcIxh9hT.js";import"./symbol-D4r8CWDQ.js";import"./ActiveShapeUtils-ByjLSOPq.js";import"./RegisterGraphicalItemId-9b4sSDvA.js";import"./ErrorBarContext-BwVhmXYH.js";import"./GraphicalItemClipPath-DpslvBV-.js";import"./SetGraphicalItem-Xipmdhp5.js";import"./graphicalItemIdentity-CdZfZkJ-.js";import"./CSSTransitionAnimate-BGJWuy9D.js";import"./util-Dxo8gN5i.js";import"./useElementOffset-DUKr_KA9.js";import"./uniqBy-Bi1p8Whm.js";import"./iteratee-B9tCTKER.js";import"./Cross-xNO4Qo7l.js";import"./Rectangle-BwyZeyJ3.js";import"./Sector-DQtYiwR3.js";const Ar={component:s,argTypes:p,docs:{autodocs:!1}},t={render:o=>{const l=[{x:100,y:200,errorY:30,errorX:30},{x:120,y:100,errorY:[500,30],errorX:[200,30]},{x:170,y:300,errorY:[10,20],errorX:20},{x:140,y:250,errorY:30,errorX:20},{x:150,y:400,errorY:[20,300],errorX:30},{x:110,y:280,errorY:40,errorX:40}];return r.createElement(s,{width:400,height:400,margin:{top:20,right:20,bottom:20,left:20},layout:o.layout},r.createElement(d,null),r.createElement(c,{type:"number",dataKey:"x",name:"stature",unit:"cm",allowDataOverflow:o.allowDataOverflow}),r.createElement(y,{type:"number",dataKey:"y",name:"weight",unit:"kg",allowDataOverflow:o.allowDataOverflow}),r.createElement(h,{name:"A school",data:l,fill:"blue"},r.createElement(e,{dataKey:"errorX",width:2,strokeWidth:3,stroke:"green",direction:"x"}),r.createElement(e,{dataKey:"errorY",width:4,strokeWidth:2,stroke:"red",direction:"y"})),r.createElement(u,{cursor:{strokeDasharray:"3 3"}}))},args:n(p),parameters:{controls:{include:["layout","allowDataOverflow"]}}};var a,i,m;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
}`,...(m=(i=t.parameters)==null?void 0:i.docs)==null?void 0:m.source}}};const Sr=["WithErrorBarsAndExtendedDomain"];export{t as WithErrorBarsAndExtendedDomain,Sr as __namedExportsOrder,Ar as default};
