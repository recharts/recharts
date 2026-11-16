import{R as r}from"./iframe-ChMBHEXU.js";import{g as l}from"./utils-ePvtT4un.js";import{S as m}from"./ScatterChartArgs-BpaDSsyX.js";import{S as p}from"./ScatterChart-DTHQXoU5.js";import{C as d}from"./CartesianGrid-CdPJwPLH.js";import{X as c}from"./XAxis-BEcsoff8.js";import{Y as y}from"./YAxis-CnSUrpEe.js";import{S as h}from"./Scatter-y1EQ5bB2.js";import{E as e}from"./ErrorBar-BK5WqA5j.js";import{T as u}from"./Tooltip-Dx4yH64z.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-DPxS5GGe.js";import"./zIndexSlice-Cd2z3Eer.js";import"./get-cF5BDHN6.js";import"./resolveDefaultProps-X_3NC_87.js";import"./throttle-Cnp_ppL_.js";import"./index-hGd76TNN.js";import"./index-SyLToHDG.js";import"./axisSelectors-CyYfX19F.js";import"./polarAxisSelectors-D-ZNarpI.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-B_LSdR1o.js";import"./index-DyVFOlJ7.js";import"./index-B193mqnD.js";import"./renderedTicksSlice-BLUfpxyl.js";import"./index-Dyev39ZM.js";import"./fillDefinitions-BXMuCbY2.js";import"./CartesianChart-AmmyZjSo.js";import"./chartDataContext-Q7_H0Fyo.js";import"./CategoricalChart-mubfvuGW.js";import"./CartesianAxis-8eiEJoC1.js";import"./Layer-Db_exIRl.js";import"./Text-BiLv0S0Y.js";import"./ZIndexLayer-OHuleK-j.js";import"./Label-ZGXU1are.js";import"./types-DgDe6MQb.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./dataEntryStyles-BARWQZ2-.js";import"./activeStyles-BxZootHE.js";import"./useAnimationId-CSNfiiSW.js";import"./Curve-C_M0JkPD.js";import"./step-BAe_ZTJZ.js";import"./path-DyVhHtw_.js";import"./tooltipContext-D3BNOiAv.js";import"./Symbols-DH6a8AH_.js";import"./symbol-CSHS3Q6e.js";import"./ActiveShapeUtils-Dx41DMd2.js";import"./ErrorBarContext-BeNGW58S.js";import"./SetGraphicalItem-RJE-RN3x.js";import"./useEffectiveDataKey-Djw6ESIG.js";import"./CSSTransitionAnimate-dSzBQzS2.js";import"./util-Dxo8gN5i.js";import"./useElementOffset-CendnaSI.js";import"./uniqBy-CLumAGO5.js";import"./iteratee-B1mbQ6FI.js";import"./isArguments-yB-y1yaH.js";import"./Cross-DCShNf2L.js";import"./Rectangle-CRyPjtQg.js";import"./Sector-P1tYRqCr.js";const Yr={component:p,argTypes:m,docs:{autodocs:!1}},t={render:o=>{const s=[{x:100,y:200,errorY:30,errorX:30},{x:120,y:100,errorY:[500,30],errorX:[200,30]},{x:170,y:300,errorY:[10,20],errorX:20},{x:140,y:250,errorY:30,errorX:20},{x:150,y:400,errorY:[20,300],errorX:30},{x:110,y:280,errorY:40,errorX:40}];return r.createElement(p,{width:400,height:400,margin:{top:20,right:20,bottom:20,left:20},layout:o.layout},r.createElement(d,null),r.createElement(c,{type:"number",dataKey:"x",name:"stature",unit:"cm",allowDataOverflow:o.allowDataOverflow}),r.createElement(y,{type:"number",dataKey:"y",name:"weight",unit:"kg",allowDataOverflow:o.allowDataOverflow}),r.createElement(h,{name:"A school",data:s,fill:"blue"},r.createElement(e,{dataKey:"errorX",width:2,strokeWidth:3,stroke:"green",direction:"x"}),r.createElement(e,{dataKey:"errorY",width:4,strokeWidth:2,stroke:"red",direction:"y"})),r.createElement(u,{cursor:{strokeDasharray:"3 3"}}))},args:l(m),parameters:{controls:{include:["layout","allowDataOverflow"]}}},Ar=["WithErrorBarsAndExtendedDomain"];var a,n,i;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
