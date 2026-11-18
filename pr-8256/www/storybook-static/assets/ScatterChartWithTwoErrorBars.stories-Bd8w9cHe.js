import{R as r}from"./iframe-Z3SayaVd.js";import{g as l}from"./utils-ePvtT4un.js";import{S as m}from"./ScatterChartArgs-BpaDSsyX.js";import{S as p}from"./ScatterChart-BRGO5wBL.js";import{C as d}from"./CartesianGrid-DGqJl6u1.js";import{X as c}from"./XAxis-BsEr8UIp.js";import{Y as y}from"./YAxis-PP-Vs1t2.js";import{S as h}from"./Scatter-D3yILysi.js";import{E as e}from"./ErrorBar-B05FOGnp.js";import{T as u}from"./Tooltip-CjSCnT_4.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-rHkMTZTL.js";import"./zIndexSlice-Dh2HMKB6.js";import"./get-cF5BDHN6.js";import"./resolveDefaultProps-DNiWcqg9.js";import"./throttle-Dxt6SGJ3.js";import"./index--orTKKd0.js";import"./index-wtNxUfyP.js";import"./axisSelectors--kuv0hpR.js";import"./polarAxisSelectors-DRpHoHNx.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-COX3gckA.js";import"./index-Byv9yEMF.js";import"./index-IODgrwVj.js";import"./renderedTicksSlice-B1QrN0Ft.js";import"./index-eVlhMApr.js";import"./fillDefinitions-YvUR7ZoJ.js";import"./CartesianChart-C0rkW4er.js";import"./chartDataContext-MZv5qjpR.js";import"./CategoricalChart-B9nlic4H.js";import"./CartesianAxis-CDmW-YMV.js";import"./Layer-R9bgEcMl.js";import"./Text-DdcAXxQ7.js";import"./ZIndexLayer-y38pl_-1.js";import"./Label-gVjZnKx0.js";import"./types-C7fTXY90.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./dataEntryStyles-CdjRVARh.js";import"./activeStyles-DoLNHT3-.js";import"./useAnimationId-CJJ1SFId.js";import"./Curve-5n5qGKoW.js";import"./step-BOsnLXQi.js";import"./path-DyVhHtw_.js";import"./tooltipContext-BhBWEJk9.js";import"./Symbols-D5F94Msa.js";import"./symbol-Cplhih6x.js";import"./ActiveShapeUtils-8h_kjkj8.js";import"./ErrorBarContext-CcYlyxVe.js";import"./SetGraphicalItem-na8KM_FV.js";import"./useEffectiveDataKey-COaHCNkR.js";import"./CSSTransitionAnimate-yao65f6T.js";import"./util-Dxo8gN5i.js";import"./useElementOffset-Bp-2_zay.js";import"./uniqBy-DSum8Wv6.js";import"./iteratee-JP_8kGzy.js";import"./isArguments-yB-y1yaH.js";import"./Cross-wXMY7t0N.js";import"./Rectangle-C9s6B2mt.js";import"./Sector-BC703UDw.js";const Yr={component:p,argTypes:m,docs:{autodocs:!1}},t={render:o=>{const s=[{x:100,y:200,errorY:30,errorX:30},{x:120,y:100,errorY:[500,30],errorX:[200,30]},{x:170,y:300,errorY:[10,20],errorX:20},{x:140,y:250,errorY:30,errorX:20},{x:150,y:400,errorY:[20,300],errorX:30},{x:110,y:280,errorY:40,errorX:40}];return r.createElement(p,{width:400,height:400,margin:{top:20,right:20,bottom:20,left:20},layout:o.layout},r.createElement(d,null),r.createElement(c,{type:"number",dataKey:"x",name:"stature",unit:"cm",allowDataOverflow:o.allowDataOverflow}),r.createElement(y,{type:"number",dataKey:"y",name:"weight",unit:"kg",allowDataOverflow:o.allowDataOverflow}),r.createElement(h,{name:"A school",data:s,fill:"blue"},r.createElement(e,{dataKey:"errorX",width:2,strokeWidth:3,stroke:"green",direction:"x"}),r.createElement(e,{dataKey:"errorY",width:4,strokeWidth:2,stroke:"red",direction:"y"})),r.createElement(u,{cursor:{strokeDasharray:"3 3"}}))},args:l(m),parameters:{controls:{include:["layout","allowDataOverflow"]}}},Ar=["WithErrorBarsAndExtendedDomain"];var a,n,i;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
