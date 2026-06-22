import{R as r}from"./iframe-D_SaqINW.js";import{g as n}from"./utils-ePvtT4un.js";import{S as s}from"./ScatterChartArgs-DVckGNEz.js";import{S as p}from"./ScatterChart-DTUsLfFz.js";import{C as d}from"./CartesianGrid-BBgyOF2-.js";import{X as c}from"./XAxis-6wdck5XJ.js";import{Y as y}from"./YAxis-DBPcER2k.js";import{S as h}from"./Scatter-ugHguFrL.js";import{E as e}from"./ErrorBar-CLUnzFVr.js";import{T as u}from"./Tooltip-CiiLOeCs.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-BOxkh1KP.js";import"./zIndexSlice-Nr9A9_cH.js";import"./immer-4i53sgvd.js";import"./index-BiWBdnkZ.js";import"./index-TyDw8B7P.js";import"./get-DRtBRZ7g.js";import"./resolveDefaultProps-DUbefueE.js";import"./isWellBehavedNumber-BFJTu4EN.js";import"./PolarUtils-CTnnDHZv.js";import"./index-SZXFPM2d.js";import"./index-C5cOlUnK.js";import"./renderedTicksSlice-nvcrqMwf.js";import"./axisSelectors-KbW_RdYB.js";import"./d3-scale-CQIw_skn.js";import"./CartesianChart-CZi0Hd-v.js";import"./chartDataContext-FaAlL944.js";import"./CategoricalChart-DmnISPC2.js";import"./CartesianAxis-DWHYepa6.js";import"./Layer-CLMd0CrH.js";import"./Text-CDbXravB.js";import"./DOMUtils-olWBsR_G.js";import"./Label-D8rwziA9.js";import"./ZIndexLayer-CNKQ_WkY.js";import"./types-L0YqXeC-.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./AnimatedItems-DrX1vaEn.js";import"./useAnimationId-DJVHCfAF.js";import"./Curve-Sg8XUuU0.js";import"./step-DyxZJeHE.js";import"./path-DyVhHtw_.js";import"./tooltipContext-BQt3eLti.js";import"./Symbols-DP2bcCbb.js";import"./symbol-BugtV-aR.js";import"./ActiveShapeUtils-8phtwrmk.js";import"./RegisterGraphicalItemId-CDtWnv6Z.js";import"./ErrorBarContext-Cv8g9Tm4.js";import"./GraphicalItemClipPath-ClsDcJaX.js";import"./SetGraphicalItem-HY1vpJNM.js";import"./CSSTransitionAnimate-Cf4QJCUY.js";import"./util-Dxo8gN5i.js";import"./useElementOffset-B0pep8Bt.js";import"./uniqBy-DfSS1ssL.js";import"./iteratee-tTd3ivbf.js";import"./Cross-DFz5-w3s.js";import"./Rectangle-CaUfvzDJ.js";import"./Sector-CthNfgJi.js";const xr={component:p,argTypes:s,docs:{autodocs:!1}},t={render:o=>{const l=[{x:100,y:200,errorY:30,errorX:30},{x:120,y:100,errorY:[500,30],errorX:[200,30]},{x:170,y:300,errorY:[10,20],errorX:20},{x:140,y:250,errorY:30,errorX:20},{x:150,y:400,errorY:[20,300],errorX:30},{x:110,y:280,errorY:40,errorX:40}];return r.createElement(p,{width:400,height:400,margin:{top:20,right:20,bottom:20,left:20},layout:o.layout},r.createElement(d,null),r.createElement(c,{type:"number",dataKey:"x",name:"stature",unit:"cm",allowDataOverflow:o.allowDataOverflow}),r.createElement(y,{type:"number",dataKey:"y",name:"weight",unit:"kg",allowDataOverflow:o.allowDataOverflow}),r.createElement(h,{name:"A school",data:l,fill:"blue"},r.createElement(e,{dataKey:"errorX",width:2,strokeWidth:3,stroke:"green",direction:"x"}),r.createElement(e,{dataKey:"errorY",width:4,strokeWidth:2,stroke:"red",direction:"y"})),r.createElement(u,{cursor:{strokeDasharray:"3 3"}}))},args:n(s),parameters:{controls:{include:["layout","allowDataOverflow"]}}};var a,i,m;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
}`,...(m=(i=t.parameters)==null?void 0:i.docs)==null?void 0:m.source}}};const Er=["WithErrorBarsAndExtendedDomain"];export{t as WithErrorBarsAndExtendedDomain,Er as __namedExportsOrder,xr as default};
