import{R as r}from"./iframe-DsuaRm2b.js";import{g as l}from"./utils-ePvtT4un.js";import{S as m}from"./ScatterChartArgs-BpaDSsyX.js";import{S as p}from"./ScatterChart-C9hI_twv.js";import{C as d}from"./CartesianGrid-C4KbAzbG.js";import{X as c}from"./XAxis-DLqBMq0Q.js";import{Y as y}from"./YAxis-dn2GRGzH.js";import{S as h}from"./Scatter-C0ULmb5c.js";import{E as e}from"./ErrorBar-CwsyP4xG.js";import{T as u}from"./Tooltip-e9xtskO3.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-B7rLRibb.js";import"./zIndexSlice-BHCK5tg8.js";import"./get-cF5BDHN6.js";import"./resolveDefaultProps-tBmiBd0v.js";import"./throttle-CuCThFR3.js";import"./index-BjBwgNd2.js";import"./index-DLanYFve.js";import"./axisSelectors-CXh7ZK0v.js";import"./polarAxisSelectors-ZY9QidmG.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-D1FvEoQ3.js";import"./index-BqhjsQ14.js";import"./index-vSo2F5h4.js";import"./renderedTicksSlice-W2QLd4az.js";import"./index-C0CHU-c7.js";import"./CartesianChart-CFB_Qy3A.js";import"./ZIndexPortal-DYBSHocn.js";import"./CategoricalChart-Do18W6-M.js";import"./CartesianAxis-BCG5Rps_.js";import"./Layer-Bvg1MEF5.js";import"./Text-7KEzSR95.js";import"./pageBackground-gwgMpjOQ.js";import"./ZIndexLayer-FbasJJ13.js";import"./Label-Bg_SjTDz.js";import"./dataEntryStyles-CVVg9ITz.js";import"./types-BVjfEegt.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./LabelList-B1g8Cfod.js";import"./activeStyles-BEbyAFUN.js";import"./useAnimationId-BDMFeBiK.js";import"./Curve-B54D09ht.js";import"./step-CnnXSPZn.js";import"./path-DyVhHtw_.js";import"./tooltipContext-DDBQkYgW.js";import"./Symbols-Sb1I6V5y.js";import"./symbol-DiPBPxxC.js";import"./ActiveShapeUtils-z3i_FVcp.js";import"./RegisterGraphicalItemId-ovNP-fPN.js";import"./ErrorBarContext-BJw3_1Vq.js";import"./SetGraphicalItem-DN4Prq4p.js";import"./useEffectiveDataKey-DBOtZYxA.js";import"./CSSTransitionAnimate-HNIqkotj.js";import"./util-Dxo8gN5i.js";import"./useElementOffset-BH16anoB.js";import"./uniqBy-BvBJ9JSl.js";import"./iteratee-D6J9B8SK.js";import"./isArguments-yB-y1yaH.js";import"./Cross-CHnu3AiU.js";import"./Rectangle-Dz3Crc0K.js";import"./Sector-jsLncyAA.js";const Sr={component:p,argTypes:m,docs:{autodocs:!1}},t={render:o=>{const s=[{x:100,y:200,errorY:30,errorX:30},{x:120,y:100,errorY:[500,30],errorX:[200,30]},{x:170,y:300,errorY:[10,20],errorX:20},{x:140,y:250,errorY:30,errorX:20},{x:150,y:400,errorY:[20,300],errorX:30},{x:110,y:280,errorY:40,errorX:40}];return r.createElement(p,{width:400,height:400,margin:{top:20,right:20,bottom:20,left:20},layout:o.layout},r.createElement(d,null),r.createElement(c,{type:"number",dataKey:"x",name:"stature",unit:"cm",allowDataOverflow:o.allowDataOverflow}),r.createElement(y,{type:"number",dataKey:"y",name:"weight",unit:"kg",allowDataOverflow:o.allowDataOverflow}),r.createElement(h,{name:"A school",data:s,fill:"blue"},r.createElement(e,{dataKey:"errorX",width:2,strokeWidth:3,stroke:"green",direction:"x"}),r.createElement(e,{dataKey:"errorY",width:4,strokeWidth:2,stroke:"red",direction:"y"})),r.createElement(u,{cursor:{strokeDasharray:"3 3"}}))},args:l(m),parameters:{controls:{include:["layout","allowDataOverflow"]}}},Dr=["WithErrorBarsAndExtendedDomain"];var a,n,i;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
