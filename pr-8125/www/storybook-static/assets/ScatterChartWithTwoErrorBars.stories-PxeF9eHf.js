import{R as r}from"./iframe-CGtTT9aO.js";import{g as l}from"./utils-ePvtT4un.js";import{S as m}from"./ScatterChartArgs-BpaDSsyX.js";import{S as p}from"./ScatterChart-_hj_Y7gm.js";import{C as d}from"./CartesianGrid-BdfxyveL.js";import{X as c}from"./XAxis-Cs9YVmSO.js";import{Y as y}from"./YAxis-CPZ41WbR.js";import{S as h}from"./Scatter-CjSviL17.js";import{E as e}from"./ErrorBar-B4cpMJ8D.js";import{T as u}from"./Tooltip-D20fn4S1.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-Bg-qxCCU.js";import"./zIndexSlice-DkqERUsC.js";import"./get-cF5BDHN6.js";import"./resolveDefaultProps-BOjz-2GT.js";import"./throttle-Cpyd11_g.js";import"./index-D5qFyhva.js";import"./index-BaBVYkzg.js";import"./axisSelectors-B4GsvVbU.js";import"./polarAxisSelectors-C5R6EJHs.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-HCxTFMcs.js";import"./index-DFHlfpO_.js";import"./index-oOofm89c.js";import"./renderedTicksSlice-CvmQK_hy.js";import"./index-fDgmIFeX.js";import"./CartesianChart-BOnMx4gA.js";import"./ZIndexPortal-CtHFHKQR.js";import"./CategoricalChart-BhkaiiYp.js";import"./CartesianAxis-DK3VbMKT.js";import"./Layer-BOfjEgNF.js";import"./Text-CPcXRBKa.js";import"./DOMUtils-Lkl9NNxk.js";import"./ZIndexLayer-BNZ9nAXZ.js";import"./Label-CdpdsstW.js";import"./types-Do3ps9Vj.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./themeFill-BkM1x4hA.js";import"./LabelList-bhGj16_R.js";import"./activeStyles-Dtv8ZhnZ.js";import"./useAnimationId-C_28wM0V.js";import"./dataEntryStyles-CQ5H-98B.js";import"./Curve-BOBD875w.js";import"./step-BRhFbrj_.js";import"./path-DyVhHtw_.js";import"./tooltipContext-rKTBIOtb.js";import"./Symbols-OSdQxEEJ.js";import"./symbol-BfL8oXc2.js";import"./ActiveShapeUtils-BNWigvv2.js";import"./ErrorBarContext-9FDAfVa2.js";import"./SetGraphicalItem-8Ajtlbfj.js";import"./useEffectiveDataKey-DHKFzj0x.js";import"./CSSTransitionAnimate-Cj3xnUEK.js";import"./util-Dxo8gN5i.js";import"./useElementOffset-BatF9isV.js";import"./uniqBy-CZnu9ysp.js";import"./iteratee-BkG8OlH1.js";import"./isArguments-yB-y1yaH.js";import"./Cross-wQd5zFbJ.js";import"./Rectangle-8kMMZYHv.js";import"./Sector-q7bxLxmm.js";const Sr={component:p,argTypes:m,docs:{autodocs:!1}},t={render:o=>{const s=[{x:100,y:200,errorY:30,errorX:30},{x:120,y:100,errorY:[500,30],errorX:[200,30]},{x:170,y:300,errorY:[10,20],errorX:20},{x:140,y:250,errorY:30,errorX:20},{x:150,y:400,errorY:[20,300],errorX:30},{x:110,y:280,errorY:40,errorX:40}];return r.createElement(p,{width:400,height:400,margin:{top:20,right:20,bottom:20,left:20},layout:o.layout},r.createElement(d,null),r.createElement(c,{type:"number",dataKey:"x",name:"stature",unit:"cm",allowDataOverflow:o.allowDataOverflow}),r.createElement(y,{type:"number",dataKey:"y",name:"weight",unit:"kg",allowDataOverflow:o.allowDataOverflow}),r.createElement(h,{name:"A school",data:s,fill:"blue"},r.createElement(e,{dataKey:"errorX",width:2,strokeWidth:3,stroke:"green",direction:"x"}),r.createElement(e,{dataKey:"errorY",width:4,strokeWidth:2,stroke:"red",direction:"y"})),r.createElement(u,{cursor:{strokeDasharray:"3 3"}}))},args:l(m),parameters:{controls:{include:["layout","allowDataOverflow"]}}},Dr=["WithErrorBarsAndExtendedDomain"];var a,n,i;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
