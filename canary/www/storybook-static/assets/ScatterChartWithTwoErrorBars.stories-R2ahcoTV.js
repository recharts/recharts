import{R as r}from"./iframe-DfmqqqCr.js";import{g as l}from"./utils-ePvtT4un.js";import{S as m}from"./ScatterChartArgs-BpaDSsyX.js";import{S as p}from"./ScatterChart-BwGFe0cl.js";import{C as d}from"./CartesianGrid-CRNF13y_.js";import{X as c}from"./XAxis-B0knr_7L.js";import{Y as y}from"./YAxis-b9ABcoaF.js";import{S as h}from"./Scatter-BUE4lORO.js";import{E as e}from"./ErrorBar-CTAdsus2.js";import{T as u}from"./Tooltip-C6TAD7LP.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-D6KUw4si.js";import"./zIndexSlice-d0YHK6xw.js";import"./get-cF5BDHN6.js";import"./resolveDefaultProps-ComwQ6WC.js";import"./throttle-DAA8X2l5.js";import"./index-Lp2jcwfG.js";import"./index-CSO17-J0.js";import"./axisSelectors-DWglHHAi.js";import"./polarAxisSelectors-DpDn-hFD.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-Ci_zYY1V.js";import"./index-pJqwg3_d.js";import"./index-hdUN889v.js";import"./renderedTicksSlice-C4mLmnSQ.js";import"./index-CQMOT26p.js";import"./CartesianChart-LSHb6JPq.js";import"./ZIndexPortal-BDrojabW.js";import"./CategoricalChart-BsBaBvnF.js";import"./CartesianAxis-CYll20RU.js";import"./Layer-BrcDHHcB.js";import"./Text-CG3VrxOm.js";import"./pageBackground-dHeomk-I.js";import"./ZIndexLayer-Cvk6PIs7.js";import"./Label-C130jv2t.js";import"./dataEntryStyles-CeCkFK1K.js";import"./types-9Kx7AXVb.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./LabelList-C0IeivS9.js";import"./activeStyles-CHOILxkP.js";import"./useAnimationId-RNI69aEn.js";import"./Curve-DdFuR-cZ.js";import"./step-pAgvwVo8.js";import"./path-DyVhHtw_.js";import"./tooltipContext-BKMUBK5C.js";import"./Symbols-BOmwAADp.js";import"./symbol-CvaR8Ff4.js";import"./ActiveShapeUtils-Csx1hMVo.js";import"./RegisterGraphicalItemId-CzjpJBeg.js";import"./ErrorBarContext-C3AKnlrm.js";import"./SetGraphicalItem-41fol6Y1.js";import"./useEffectiveDataKey-Ri-wD3JN.js";import"./CSSTransitionAnimate-DuJMAxdM.js";import"./util-Dxo8gN5i.js";import"./useElementOffset-BIpV4hkj.js";import"./uniqBy-B-Zb9oWg.js";import"./iteratee-KP65sc9-.js";import"./isArguments-yB-y1yaH.js";import"./Cross-I7yLc-X5.js";import"./Rectangle-CCmTs9GK.js";import"./Sector-BnHkZCan.js";const Sr={component:p,argTypes:m,docs:{autodocs:!1}},t={render:o=>{const s=[{x:100,y:200,errorY:30,errorX:30},{x:120,y:100,errorY:[500,30],errorX:[200,30]},{x:170,y:300,errorY:[10,20],errorX:20},{x:140,y:250,errorY:30,errorX:20},{x:150,y:400,errorY:[20,300],errorX:30},{x:110,y:280,errorY:40,errorX:40}];return r.createElement(p,{width:400,height:400,margin:{top:20,right:20,bottom:20,left:20},layout:o.layout},r.createElement(d,null),r.createElement(c,{type:"number",dataKey:"x",name:"stature",unit:"cm",allowDataOverflow:o.allowDataOverflow}),r.createElement(y,{type:"number",dataKey:"y",name:"weight",unit:"kg",allowDataOverflow:o.allowDataOverflow}),r.createElement(h,{name:"A school",data:s,fill:"blue"},r.createElement(e,{dataKey:"errorX",width:2,strokeWidth:3,stroke:"green",direction:"x"}),r.createElement(e,{dataKey:"errorY",width:4,strokeWidth:2,stroke:"red",direction:"y"})),r.createElement(u,{cursor:{strokeDasharray:"3 3"}}))},args:l(m),parameters:{controls:{include:["layout","allowDataOverflow"]}}},Dr=["WithErrorBarsAndExtendedDomain"];var a,n,i;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
