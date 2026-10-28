import{R as r}from"./iframe-CUml5YCN.js";import{g as l}from"./utils-ePvtT4un.js";import{S as m}from"./ScatterChartArgs-BpaDSsyX.js";import{S as p}from"./ScatterChart-iXypFvfa.js";import{C as d}from"./CartesianGrid-BG3A01XW.js";import{X as c}from"./XAxis-DS-AJg-5.js";import{Y as y}from"./YAxis-CGT5tGsT.js";import{S as h}from"./Scatter-Dn_ZZzAY.js";import{E as e}from"./ErrorBar-C29NDbQA.js";import{T as u}from"./Tooltip-DnZ-jfwM.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-jAZSY4Pq.js";import"./zIndexSlice-Duug8EOo.js";import"./get-cF5BDHN6.js";import"./resolveDefaultProps-bEvLqOBJ.js";import"./throttle-00pBoixS.js";import"./index-AklA9_0y.js";import"./index-DLBpPTx4.js";import"./axisSelectors-B2HI9EL2.js";import"./polarAxisSelectors-DMpK1CYb.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-CEanJ2qJ.js";import"./index-BI0kgcsn.js";import"./index-Bs8UXAbZ.js";import"./renderedTicksSlice-BxDeHuoS.js";import"./index-a6VaArhG.js";import"./CartesianChart-BkZTrO_H.js";import"./ZIndexPortal-C_VlO0o9.js";import"./CategoricalChart-BvHPlluA.js";import"./CartesianAxis-BVj8a-va.js";import"./Layer-BUAUs1E0.js";import"./Text-C-J7rFVH.js";import"./DOMUtils-BO2yqkFt.js";import"./ZIndexLayer-BY73hU8m.js";import"./Label-Co-nrknN.js";import"./types-BdRO-t6j.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./LabelList-1BV2-5OM.js";import"./activeStyles-DSIZcOzy.js";import"./useAnimationId-CTU-teyX.js";import"./dataEntryStyles-DqljzTne.js";import"./Curve-MMF3Mq57.js";import"./step-CbD7Fw7p.js";import"./path-DyVhHtw_.js";import"./tooltipContext-Bogx-4r_.js";import"./Symbols-IX5_Qg4V.js";import"./symbol-Ft1metgp.js";import"./ActiveShapeUtils-DWo-vRVn.js";import"./ErrorBarContext-Bo1VUNfm.js";import"./SetGraphicalItem-IwBxHE7j.js";import"./useEffectiveDataKey-11clGpT5.js";import"./CSSTransitionAnimate-Cr2QTujx.js";import"./util-Dxo8gN5i.js";import"./useElementOffset-CYLtSqO9.js";import"./uniqBy-wScc6s2S.js";import"./iteratee-BSvw-Q2D.js";import"./isArguments-yB-y1yaH.js";import"./Cross-boGLgjf_.js";import"./Rectangle-Ayj5uTYD.js";import"./Sector-B3hFZlEZ.js";const Ar={component:p,argTypes:m,docs:{autodocs:!1}},t={render:o=>{const s=[{x:100,y:200,errorY:30,errorX:30},{x:120,y:100,errorY:[500,30],errorX:[200,30]},{x:170,y:300,errorY:[10,20],errorX:20},{x:140,y:250,errorY:30,errorX:20},{x:150,y:400,errorY:[20,300],errorX:30},{x:110,y:280,errorY:40,errorX:40}];return r.createElement(p,{width:400,height:400,margin:{top:20,right:20,bottom:20,left:20},layout:o.layout},r.createElement(d,null),r.createElement(c,{type:"number",dataKey:"x",name:"stature",unit:"cm",allowDataOverflow:o.allowDataOverflow}),r.createElement(y,{type:"number",dataKey:"y",name:"weight",unit:"kg",allowDataOverflow:o.allowDataOverflow}),r.createElement(h,{name:"A school",data:s,fill:"blue"},r.createElement(e,{dataKey:"errorX",width:2,strokeWidth:3,stroke:"green",direction:"x"}),r.createElement(e,{dataKey:"errorY",width:4,strokeWidth:2,stroke:"red",direction:"y"})),r.createElement(u,{cursor:{strokeDasharray:"3 3"}}))},args:l(m),parameters:{controls:{include:["layout","allowDataOverflow"]}}},Sr=["WithErrorBarsAndExtendedDomain"];var a,n,i;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
}`,...(i=(n=t.parameters)==null?void 0:n.docs)==null?void 0:i.source}}};export{t as WithErrorBarsAndExtendedDomain,Sr as __namedExportsOrder,Ar as default};
