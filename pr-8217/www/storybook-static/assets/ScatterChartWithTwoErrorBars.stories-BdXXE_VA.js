import{R as r}from"./iframe-BH2TtHlY.js";import{g as l}from"./utils-ePvtT4un.js";import{S as m}from"./ScatterChartArgs-BpaDSsyX.js";import{S as p}from"./ScatterChart-HUsljIU4.js";import{C as d}from"./CartesianGrid-D8q2gGGF.js";import{X as c}from"./XAxis-COZT_uqw.js";import{Y as y}from"./YAxis-B0vif2kn.js";import{S as h}from"./Scatter-oPBQuPjB.js";import{E as e}from"./ErrorBar-D7apSQC0.js";import{T as u}from"./Tooltip-CdFMPcFV.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-DzLFc6RH.js";import"./zIndexSlice-BUPzf8FY.js";import"./get-cF5BDHN6.js";import"./resolveDefaultProps-BaFcvJtj.js";import"./throttle-Dx7o9_lY.js";import"./index-Sghl8E88.js";import"./index-C9KoigcN.js";import"./axisSelectors-DsRwL_k-.js";import"./polarAxisSelectors-CrYx-glo.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-CXj_dWXw.js";import"./index-DPzL1RFj.js";import"./index-TbzLaF3S.js";import"./renderedTicksSlice-DLQHvIeX.js";import"./index-DbFZkhWq.js";import"./fillDefinitions-BmoMSVON.js";import"./CartesianChart-CdAq2ZGm.js";import"./chartDataContext-CW5gEqv4.js";import"./CategoricalChart-3Oqm6Z_m.js";import"./CartesianAxis-0pfTl-hM.js";import"./Layer-IM2jrBt3.js";import"./Text-CevbSlGY.js";import"./ZIndexLayer-Doizp3A4.js";import"./Label-CIPQeI3a.js";import"./types-DOMxGpI2.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./dataEntryStyles-oNDiL7vD.js";import"./activeStyles-C4DAj0Um.js";import"./useAnimationId-CDSf-pzR.js";import"./Curve-CJ99zN7P.js";import"./step-ChPkaUxk.js";import"./path-DyVhHtw_.js";import"./tooltipContext-CxVj4CRN.js";import"./Symbols-CxGDxLq8.js";import"./symbol-Dum7koiK.js";import"./ActiveShapeUtils-CWwwV9zV.js";import"./ErrorBarContext-4rxkwyEB.js";import"./SetGraphicalItem-Cr0BjIMT.js";import"./useEffectiveDataKey-BXRZCQow.js";import"./CSSTransitionAnimate-lkP4YfgK.js";import"./util-Dxo8gN5i.js";import"./useElementOffset-BE_errrN.js";import"./uniqBy-BMu_3qtX.js";import"./iteratee-BjDUq9-x.js";import"./isArguments-yB-y1yaH.js";import"./Cross-KIhUVeNF.js";import"./Rectangle-D0BLzMMy.js";import"./Sector-jx2_J3sX.js";const Yr={component:p,argTypes:m,docs:{autodocs:!1}},t={render:o=>{const s=[{x:100,y:200,errorY:30,errorX:30},{x:120,y:100,errorY:[500,30],errorX:[200,30]},{x:170,y:300,errorY:[10,20],errorX:20},{x:140,y:250,errorY:30,errorX:20},{x:150,y:400,errorY:[20,300],errorX:30},{x:110,y:280,errorY:40,errorX:40}];return r.createElement(p,{width:400,height:400,margin:{top:20,right:20,bottom:20,left:20},layout:o.layout},r.createElement(d,null),r.createElement(c,{type:"number",dataKey:"x",name:"stature",unit:"cm",allowDataOverflow:o.allowDataOverflow}),r.createElement(y,{type:"number",dataKey:"y",name:"weight",unit:"kg",allowDataOverflow:o.allowDataOverflow}),r.createElement(h,{name:"A school",data:s,fill:"blue"},r.createElement(e,{dataKey:"errorX",width:2,strokeWidth:3,stroke:"green",direction:"x"}),r.createElement(e,{dataKey:"errorY",width:4,strokeWidth:2,stroke:"red",direction:"y"})),r.createElement(u,{cursor:{strokeDasharray:"3 3"}}))},args:l(m),parameters:{controls:{include:["layout","allowDataOverflow"]}}},Ar=["WithErrorBarsAndExtendedDomain"];var a,n,i;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
}`,...(i=(n=t.parameters)==null?void 0:n.docs)==null?void 0:i.source}}};export{t as WithErrorBarsAndExtendedDomain,Ar as __namedExportsOrder,Yr as default};
