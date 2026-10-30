import{R as r}from"./iframe-C9f0XnT9.js";import{g as l}from"./utils-ePvtT4un.js";import{S as m}from"./ScatterChartArgs-BpaDSsyX.js";import{S as p}from"./ScatterChart-qRN_vxhe.js";import{C as d}from"./CartesianGrid-C2FtvAJs.js";import{X as c}from"./XAxis-C5bj5GgQ.js";import{Y as y}from"./YAxis-D9OAInhW.js";import{S as h}from"./Scatter-DVfOfXJg.js";import{E as e}from"./ErrorBar-DYF8k1yO.js";import{T as u}from"./Tooltip-DluwIS9N.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-DtDu-9p6.js";import"./zIndexSlice-CHa-NfW0.js";import"./get-cF5BDHN6.js";import"./resolveDefaultProps-OglZgdvE.js";import"./throttle-KQYU95ys.js";import"./index-lRcOI8Cy.js";import"./index-Dd8czCIR.js";import"./axisSelectors-DJl001RI.js";import"./polarAxisSelectors-DnDsCJfT.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-BRci95pZ.js";import"./index-Bf7Rq1hF.js";import"./index-C_QD7AAh.js";import"./renderedTicksSlice-CaUdmayY.js";import"./index-DJqYT1Am.js";import"./CartesianChart-CjAW9dlX.js";import"./ZIndexPortal-DsfmsICI.js";import"./CategoricalChart-C4AmyGV7.js";import"./CartesianAxis-C2y0lK-Z.js";import"./Layer-BGqt9quM.js";import"./Text-BBa2fCF5.js";import"./DOMUtils-CkdhxU4H.js";import"./ZIndexLayer-Dk9V8YH1.js";import"./Label-HDB1mOS9.js";import"./types-Cq0tVQAG.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./LabelList-CjS5fbS8.js";import"./activeStyles-BitiIAzx.js";import"./useAnimationId-BNUZJ-Q8.js";import"./dataEntryStyles-Bof1DRSv.js";import"./Curve-BuH0ARbV.js";import"./step-D2_GuXTT.js";import"./path-DyVhHtw_.js";import"./tooltipContext-DUeYh7_A.js";import"./Symbols-CSFO1ejf.js";import"./symbol-BFxxKdiv.js";import"./ActiveShapeUtils-IcXhTV6f.js";import"./ErrorBarContext-BjUzcwSB.js";import"./SetGraphicalItem-BKb40hJg.js";import"./useEffectiveDataKey-B2_fgQbM.js";import"./CSSTransitionAnimate-vdyJamKc.js";import"./util-Dxo8gN5i.js";import"./useElementOffset-BPNvSWcg.js";import"./uniqBy-DOejL97I.js";import"./iteratee-Bq0h_QlS.js";import"./isArguments-yB-y1yaH.js";import"./Cross-o-VimJqX.js";import"./Rectangle-DGCSZqUI.js";import"./Sector-CaH0HsK_.js";const Ar={component:p,argTypes:m,docs:{autodocs:!1}},t={render:o=>{const s=[{x:100,y:200,errorY:30,errorX:30},{x:120,y:100,errorY:[500,30],errorX:[200,30]},{x:170,y:300,errorY:[10,20],errorX:20},{x:140,y:250,errorY:30,errorX:20},{x:150,y:400,errorY:[20,300],errorX:30},{x:110,y:280,errorY:40,errorX:40}];return r.createElement(p,{width:400,height:400,margin:{top:20,right:20,bottom:20,left:20},layout:o.layout},r.createElement(d,null),r.createElement(c,{type:"number",dataKey:"x",name:"stature",unit:"cm",allowDataOverflow:o.allowDataOverflow}),r.createElement(y,{type:"number",dataKey:"y",name:"weight",unit:"kg",allowDataOverflow:o.allowDataOverflow}),r.createElement(h,{name:"A school",data:s,fill:"blue"},r.createElement(e,{dataKey:"errorX",width:2,strokeWidth:3,stroke:"green",direction:"x"}),r.createElement(e,{dataKey:"errorY",width:4,strokeWidth:2,stroke:"red",direction:"y"})),r.createElement(u,{cursor:{strokeDasharray:"3 3"}}))},args:l(m),parameters:{controls:{include:["layout","allowDataOverflow"]}}},Sr=["WithErrorBarsAndExtendedDomain"];var a,n,i;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
