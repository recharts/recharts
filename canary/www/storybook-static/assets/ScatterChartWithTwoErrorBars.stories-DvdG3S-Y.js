import{R as r}from"./iframe-D34TH6kS.js";import{g as l}from"./utils-ePvtT4un.js";import{S as m}from"./ScatterChartArgs-BpaDSsyX.js";import{S as p}from"./ScatterChart-DbDPGfp2.js";import{C as d}from"./CartesianGrid-BgbGVFlx.js";import{X as c}from"./XAxis-eUT57Vta.js";import{Y as y}from"./YAxis-BB2iGVHg.js";import{S as h}from"./Scatter-Brigyt9y.js";import{E as e}from"./ErrorBar-CWtqYGAz.js";import{T as u}from"./Tooltip-BZwHxVtU.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-Dd_PV6Ah.js";import"./zIndexSlice-DaIxnBgS.js";import"./get-cF5BDHN6.js";import"./resolveDefaultProps-C_e5Jx4S.js";import"./throttle-BpT9ifnU.js";import"./index-CbUl4qJT.js";import"./index-BdPMZI3x.js";import"./axisSelectors-Dy4Zn44Z.js";import"./polarAxisSelectors-CB23D7zz.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-DZnn2eaB.js";import"./index-DmQdJSj7.js";import"./index-x328HEKx.js";import"./renderedTicksSlice-BJ7Rgktl.js";import"./index-B0gBzv4y.js";import"./fillDefinitions-C7IVG_LK.js";import"./CartesianChart-DTsOd4db.js";import"./ZIndexPortal-DFRqCkn0.js";import"./CategoricalChart-DeDW5Ok8.js";import"./CartesianAxis-BM-PI8Qd.js";import"./Layer-Dwmoii2m.js";import"./Text-DnFfEMnn.js";import"./DOMUtils-CL7ddNNK.js";import"./ZIndexLayer-CjBSjq3C.js";import"./Label-Bmp2qp_V.js";import"./types-sVdhE-m7.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./LabelList-1IdMTUqF.js";import"./activeStyles-BhcCN1d0.js";import"./useAnimationId-B9qHmTzi.js";import"./dataEntryStyles-vZIv75R2.js";import"./Curve-DynZHvMF.js";import"./step-ClOyd6C_.js";import"./path-DyVhHtw_.js";import"./tooltipContext-DqSmtwC6.js";import"./Symbols-DvTMqivt.js";import"./symbol-CF9tVrFE.js";import"./ActiveShapeUtils--tE3PBa7.js";import"./ErrorBarContext-BpXycT31.js";import"./SetGraphicalItem-BAvkQ0nW.js";import"./useEffectiveDataKey-rXS-umfC.js";import"./CSSTransitionAnimate-SrbcLcuS.js";import"./util-Dxo8gN5i.js";import"./useElementOffset-Ipbyi-Tm.js";import"./uniqBy-HVU5otxv.js";import"./iteratee-P8VRTjFX.js";import"./isArguments-yB-y1yaH.js";import"./Cross-BL7_RzjB.js";import"./Rectangle-CkQXoZfZ.js";import"./Sector-d4TsYNLQ.js";const Sr={component:p,argTypes:m,docs:{autodocs:!1}},t={render:o=>{const s=[{x:100,y:200,errorY:30,errorX:30},{x:120,y:100,errorY:[500,30],errorX:[200,30]},{x:170,y:300,errorY:[10,20],errorX:20},{x:140,y:250,errorY:30,errorX:20},{x:150,y:400,errorY:[20,300],errorX:30},{x:110,y:280,errorY:40,errorX:40}];return r.createElement(p,{width:400,height:400,margin:{top:20,right:20,bottom:20,left:20},layout:o.layout},r.createElement(d,null),r.createElement(c,{type:"number",dataKey:"x",name:"stature",unit:"cm",allowDataOverflow:o.allowDataOverflow}),r.createElement(y,{type:"number",dataKey:"y",name:"weight",unit:"kg",allowDataOverflow:o.allowDataOverflow}),r.createElement(h,{name:"A school",data:s,fill:"blue"},r.createElement(e,{dataKey:"errorX",width:2,strokeWidth:3,stroke:"green",direction:"x"}),r.createElement(e,{dataKey:"errorY",width:4,strokeWidth:2,stroke:"red",direction:"y"})),r.createElement(u,{cursor:{strokeDasharray:"3 3"}}))},args:l(m),parameters:{controls:{include:["layout","allowDataOverflow"]}}},Dr=["WithErrorBarsAndExtendedDomain"];var a,n,i;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
