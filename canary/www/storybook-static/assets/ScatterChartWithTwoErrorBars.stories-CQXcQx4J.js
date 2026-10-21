import{R as r}from"./iframe-CQZPQf4O.js";import{g as l}from"./utils-ePvtT4un.js";import{S as m}from"./ScatterChartArgs-BpaDSsyX.js";import{S as p}from"./ScatterChart-VZb-lfWA.js";import{C as d}from"./CartesianGrid-9KogdII6.js";import{X as c}from"./XAxis-vMRVH8Ao.js";import{Y as y}from"./YAxis-BXIOSjAZ.js";import{S as h}from"./Scatter-2ah-Cxt8.js";import{E as e}from"./ErrorBar-C7kjo3H1.js";import{T as u}from"./Tooltip-EX89F-vs.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-CKHlp-Rt.js";import"./zIndexSlice-BxTiYWdU.js";import"./throttle-AnGuXVWW.js";import"./index-CHepiqPh.js";import"./index-D3lB8fDF.js";import"./get-cF5BDHN6.js";import"./resolveDefaultProps-DgVJwWbR.js";import"./isWellBehavedNumber-BVjPIj2C.js";import"./PolarUtils-CTnnDHZv.js";import"./axisSelectors-Or82bYZb.js";import"./d3-scale-Dh160Q_7.js";import"./index-CEP5bmmA.js";import"./index-BCncLH8b.js";import"./renderedTicksSlice-DwLtgLm9.js";import"./index-XXc_9p_2.js";import"./CartesianChart-BGmWQkFH.js";import"./chartDataContext-BFYg2JX8.js";import"./CategoricalChart-DpdoG3FY.js";import"./CartesianAxis-CO8voLuT.js";import"./Layer-C-YS-hE0.js";import"./Text-FG9LsITf.js";import"./pageBackground-VSL8VAH8.js";import"./useId-CKB20m-R.js";import"./useBackwardsCompatibleTheme-DinZCZAi.js";import"./Label-CwpPaPRc.js";import"./ZIndexLayer-BKLTAFCk.js";import"./types-Q9Uebpou.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./activeStyles-CbDR06hO.js";import"./useAnimationId-C5Lal4Ku.js";import"./dataEntryStyles-CEFXctA4.js";import"./Curve-CEf8Z_wT.js";import"./step-B5PbnVsw.js";import"./path-DyVhHtw_.js";import"./tooltipContext-1FAnzwfo.js";import"./Symbols-C7CdNj5F.js";import"./symbol-OvqjbrCm.js";import"./ActiveShapeUtils-Dx4Ozko3.js";import"./ErrorBarContext-nT97Ooaq.js";import"./GraphicalItemClipPath-BdCokK_0.js";import"./SetGraphicalItem-LkBJ9I3O.js";import"./useEffectiveDataKey-CCE12RzB.js";import"./CSSTransitionAnimate-DvQZMZPC.js";import"./util-Dxo8gN5i.js";import"./useElementOffset-CNsQVFGU.js";import"./uniqBy-CT-lLGIP.js";import"./iteratee-rt63w_5K.js";import"./isArguments-yB-y1yaH.js";import"./Cross-BVgaSCxL.js";import"./Rectangle-DRkwNU_p.js";import"./Sector-B8sO8x4j.js";const Dr={component:p,argTypes:m,docs:{autodocs:!1}},t={render:o=>{const s=[{x:100,y:200,errorY:30,errorX:30},{x:120,y:100,errorY:[500,30],errorX:[200,30]},{x:170,y:300,errorY:[10,20],errorX:20},{x:140,y:250,errorY:30,errorX:20},{x:150,y:400,errorY:[20,300],errorX:30},{x:110,y:280,errorY:40,errorX:40}];return r.createElement(p,{width:400,height:400,margin:{top:20,right:20,bottom:20,left:20},layout:o.layout},r.createElement(d,null),r.createElement(c,{type:"number",dataKey:"x",name:"stature",unit:"cm",allowDataOverflow:o.allowDataOverflow}),r.createElement(y,{type:"number",dataKey:"y",name:"weight",unit:"kg",allowDataOverflow:o.allowDataOverflow}),r.createElement(h,{name:"A school",data:s,fill:"blue"},r.createElement(e,{dataKey:"errorX",width:2,strokeWidth:3,stroke:"green",direction:"x"}),r.createElement(e,{dataKey:"errorY",width:4,strokeWidth:2,stroke:"red",direction:"y"})),r.createElement(u,{cursor:{strokeDasharray:"3 3"}}))},args:l(m),parameters:{controls:{include:["layout","allowDataOverflow"]}}},Or=["WithErrorBarsAndExtendedDomain"];var a,n,i;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
}`,...(i=(n=t.parameters)==null?void 0:n.docs)==null?void 0:i.source}}};export{t as WithErrorBarsAndExtendedDomain,Or as __namedExportsOrder,Dr as default};
