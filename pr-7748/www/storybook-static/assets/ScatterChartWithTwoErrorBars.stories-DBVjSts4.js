import{R as r}from"./iframe-B5lEY8zD.js";import{g as l}from"./utils-ePvtT4un.js";import{S as m}from"./ScatterChartArgs-BpaDSsyX.js";import{S as p}from"./ScatterChart-x7vFw9IQ.js";import{C as d}from"./CartesianGrid-DEJZ4SeJ.js";import{X as c}from"./XAxis-DFQPNyZu.js";import{Y as y}from"./YAxis-B84b5tRH.js";import{S as h}from"./Scatter-BT8as_sB.js";import{E as e}from"./ErrorBar-H-QaCBuW.js";import{T as u}from"./Tooltip-Bywq2Krs.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-Dry7ZWQ8.js";import"./zIndexSlice-BgROAb6p.js";import"./get-cF5BDHN6.js";import"./resolveDefaultProps-Bw4esZyQ.js";import"./throttle-B3jfQssg.js";import"./index-DOD6pO5N.js";import"./index-CrxBt4o0.js";import"./axisSelectors-BghrQiEU.js";import"./polarAxisSelectors-CnEvxLcF.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-Be2MBhun.js";import"./index-DK10suvB.js";import"./index-C_OJiFXB.js";import"./renderedTicksSlice-BBBAmkst.js";import"./index-DxvEKk7O.js";import"./fillDefinitions-BYW3BXfQ.js";import"./CartesianChart-BJrH5JsN.js";import"./chartDataContext-BJNaOkd4.js";import"./CategoricalChart-DELNesLI.js";import"./CartesianAxis-C5RmfnOa.js";import"./Layer-DvqCln2S.js";import"./Text-Bpx0HJU1.js";import"./ZIndexLayer-BKjofHlF.js";import"./Label-BcoGvPAa.js";import"./types-DtlUuq-f.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./dataEntryStyles-XQ5o-AIv.js";import"./activeStyles-CCUgVOTa.js";import"./useAnimationId-BR63270P.js";import"./Curve-Be0fUfaD.js";import"./step-C6UNokWX.js";import"./path-BBMZd4YL.js";import"./tooltipContext-BuWKvB93.js";import"./Symbols-CpkCeDJ9.js";import"./symbol-CumbrPds.js";import"./ActiveShapeUtils-BtGosP0P.js";import"./ErrorBarContext-BW17ZVEc.js";import"./SetGraphicalItem-BlbgEltH.js";import"./useEffectiveDataKey-TbJa30kz.js";import"./CSSTransitionAnimate-C3lrGmVX.js";import"./util-Dxo8gN5i.js";import"./useElementOffset-DI0jf-H9.js";import"./uniqBy-w7Bk0idQ.js";import"./iteratee-DlqZpNBR.js";import"./isArguments-yB-y1yaH.js";import"./Cross-CuapKUiT.js";import"./Rectangle-DrSOMoM_.js";import"./Sector-pZI3lBm7.js";const Yr={component:p,argTypes:m,docs:{autodocs:!1}},t={render:o=>{const s=[{x:100,y:200,errorY:30,errorX:30},{x:120,y:100,errorY:[500,30],errorX:[200,30]},{x:170,y:300,errorY:[10,20],errorX:20},{x:140,y:250,errorY:30,errorX:20},{x:150,y:400,errorY:[20,300],errorX:30},{x:110,y:280,errorY:40,errorX:40}];return r.createElement(p,{width:400,height:400,margin:{top:20,right:20,bottom:20,left:20},layout:o.layout},r.createElement(d,null),r.createElement(c,{type:"number",dataKey:"x",name:"stature",unit:"cm",allowDataOverflow:o.allowDataOverflow}),r.createElement(y,{type:"number",dataKey:"y",name:"weight",unit:"kg",allowDataOverflow:o.allowDataOverflow}),r.createElement(h,{name:"A school",data:s,fill:"blue"},r.createElement(e,{dataKey:"errorX",width:2,strokeWidth:3,stroke:"green",direction:"x"}),r.createElement(e,{dataKey:"errorY",width:4,strokeWidth:2,stroke:"red",direction:"y"})),r.createElement(u,{cursor:{strokeDasharray:"3 3"}}))},args:l(m),parameters:{controls:{include:["layout","allowDataOverflow"]}}},Ar=["WithErrorBarsAndExtendedDomain"];var a,n,i;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
