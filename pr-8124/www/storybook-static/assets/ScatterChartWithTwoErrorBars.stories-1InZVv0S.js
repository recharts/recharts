import{R as r}from"./iframe-CO2wyIFg.js";import{g as l}from"./utils-ePvtT4un.js";import{S as m}from"./ScatterChartArgs-BpaDSsyX.js";import{S as p}from"./ScatterChart-Dk1kE2sf.js";import{C as d}from"./CartesianGrid-Bb7vcvcF.js";import{X as c}from"./XAxis-CTUf16qw.js";import{Y as y}from"./YAxis-DxlVhyz4.js";import{S as h}from"./Scatter-D9mnxVTo.js";import{E as e}from"./ErrorBar-CQVlMzSP.js";import{T as u}from"./Tooltip-D1nNQVkK.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-BPn-EIY7.js";import"./zIndexSlice-B1dwy21o.js";import"./get-cF5BDHN6.js";import"./resolveDefaultProps-WHnVIT2p.js";import"./throttle-Bs5LuV_m.js";import"./index-jOLD2CcF.js";import"./index-Ctoi-28y.js";import"./axisSelectors-6mrCXm_L.js";import"./polarAxisSelectors-BTrk53y9.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-CG4Qydf0.js";import"./index-DihKhs0V.js";import"./index-Bz0Oikv7.js";import"./renderedTicksSlice-BUJ996QC.js";import"./index-Bf8x0XIR.js";import"./CartesianChart-Bz4eFVMM.js";import"./ZIndexPortal-Ca53grIf.js";import"./CategoricalChart-hTdn61VM.js";import"./CartesianAxis-yYNPW19G.js";import"./Layer-3FBX9WCC.js";import"./Text-9LTzebQz.js";import"./DOMUtils-BcfmvW5B.js";import"./ZIndexLayer-Bvl6Rs1y.js";import"./Label-DwmonuSB.js";import"./types-l0n7UaRD.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./themeFill-BkM1x4hA.js";import"./LabelList-ZxVwNU5Y.js";import"./activeStyles-C1uCXth5.js";import"./useAnimationId-80VZwTZw.js";import"./dataEntryStyles-DJf9CEZB.js";import"./Curve-Bk39tyeQ.js";import"./step-DLHEgf4y.js";import"./path-DyVhHtw_.js";import"./tooltipContext-fUkgDlwS.js";import"./Symbols-CiaG31nz.js";import"./symbol-DdfWm2fk.js";import"./ActiveShapeUtils-CJm59VzC.js";import"./ErrorBarContext-BwMCHjXJ.js";import"./SetGraphicalItem-DzHXsKbf.js";import"./useEffectiveDataKey-0oKoD9E-.js";import"./fillDefinitions-BgaObCNr.js";import"./CSSTransitionAnimate-2vU2z2qv.js";import"./util-Dxo8gN5i.js";import"./useElementOffset-Dv8qg2LV.js";import"./uniqBy-DNvTgJdx.js";import"./iteratee-0AEmZrhj.js";import"./isArguments-yB-y1yaH.js";import"./Cross-Cqm6penG.js";import"./Rectangle-BQZYhZHi.js";import"./Sector-CAlOeohk.js";const Dr={component:p,argTypes:m,docs:{autodocs:!1}},t={render:o=>{const s=[{x:100,y:200,errorY:30,errorX:30},{x:120,y:100,errorY:[500,30],errorX:[200,30]},{x:170,y:300,errorY:[10,20],errorX:20},{x:140,y:250,errorY:30,errorX:20},{x:150,y:400,errorY:[20,300],errorX:30},{x:110,y:280,errorY:40,errorX:40}];return r.createElement(p,{width:400,height:400,margin:{top:20,right:20,bottom:20,left:20},layout:o.layout},r.createElement(d,null),r.createElement(c,{type:"number",dataKey:"x",name:"stature",unit:"cm",allowDataOverflow:o.allowDataOverflow}),r.createElement(y,{type:"number",dataKey:"y",name:"weight",unit:"kg",allowDataOverflow:o.allowDataOverflow}),r.createElement(h,{name:"A school",data:s,fill:"blue"},r.createElement(e,{dataKey:"errorX",width:2,strokeWidth:3,stroke:"green",direction:"x"}),r.createElement(e,{dataKey:"errorY",width:4,strokeWidth:2,stroke:"red",direction:"y"})),r.createElement(u,{cursor:{strokeDasharray:"3 3"}}))},args:l(m),parameters:{controls:{include:["layout","allowDataOverflow"]}}},Or=["WithErrorBarsAndExtendedDomain"];var a,n,i;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
