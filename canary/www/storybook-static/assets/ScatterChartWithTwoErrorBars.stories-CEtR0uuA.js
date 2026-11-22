import{R as r}from"./iframe-CGGZfnCV.js";import{g as l}from"./utils-ePvtT4un.js";import{S as m}from"./ScatterChartArgs-BpaDSsyX.js";import{S as p}from"./ScatterChart-QoirTQM6.js";import{C as d}from"./CartesianGrid-D4IW1LFi.js";import{X as c}from"./XAxis-D0RGLID7.js";import{Y as y}from"./YAxis-DBOKklMV.js";import{S as h}from"./Scatter-DI9HJK0D.js";import{E as e}from"./ErrorBar-DLEGOtss.js";import{T as u}from"./Tooltip-Dyy4ArfB.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-CBqoZXqJ.js";import"./zIndexSlice-BqswsCB2.js";import"./get-cF5BDHN6.js";import"./resolveDefaultProps-DB16si7p.js";import"./throttle-CPPktxFr.js";import"./index-hNRKJP-1.js";import"./index-BFvwi7Fr.js";import"./axisSelectors-ClqRDW4l.js";import"./polarAxisSelectors-BM3r_eW-.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-DH0gLY6W.js";import"./index-DZ2zDC6C.js";import"./index-gZNixUu0.js";import"./renderedTicksSlice-CQP8AqXM.js";import"./index-1Wp7cDto.js";import"./fillDefinitions-DVvVBqIn.js";import"./CartesianChart-Bh5zn2Cs.js";import"./chartDataContext-L797Ywu5.js";import"./CategoricalChart-DAMpVLQr.js";import"./CartesianAxis-BDMs3FLV.js";import"./Layer-BEhjTHM-.js";import"./Text-BWSViN8b.js";import"./ZIndexLayer-DLjlC1Ho.js";import"./Label-BodzTsEv.js";import"./types-D01_wvtH.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./dataEntryStyles-BLU3QW0Z.js";import"./activeStyles-C8mJMGZo.js";import"./useAnimationId-CKpnbEUf.js";import"./Curve-CCF7pO5F.js";import"./step-CUQPzItX.js";import"./path-BBMZd4YL.js";import"./tooltipContext-tytBYaal.js";import"./Symbols-BkuE8ueA.js";import"./symbol-CmPSaat-.js";import"./ActiveShapeUtils-Dr8eZSqA.js";import"./ErrorBarContext-C-uWWZZj.js";import"./SetGraphicalItem-CpKKIpFz.js";import"./useEffectiveDataKey-CaAnzbHC.js";import"./CSSTransitionAnimate-CeA5NoQQ.js";import"./util-Dxo8gN5i.js";import"./useElementOffset-BSU2Mggc.js";import"./uniqBy-awSaeX3A.js";import"./iteratee-CqSBOUYa.js";import"./isArguments-yB-y1yaH.js";import"./Cross-DqhWgWA8.js";import"./Rectangle-DdMdJi_F.js";import"./Sector-BLwaXQQU.js";const Yr={component:p,argTypes:m,docs:{autodocs:!1}},t={render:o=>{const s=[{x:100,y:200,errorY:30,errorX:30},{x:120,y:100,errorY:[500,30],errorX:[200,30]},{x:170,y:300,errorY:[10,20],errorX:20},{x:140,y:250,errorY:30,errorX:20},{x:150,y:400,errorY:[20,300],errorX:30},{x:110,y:280,errorY:40,errorX:40}];return r.createElement(p,{width:400,height:400,margin:{top:20,right:20,bottom:20,left:20},layout:o.layout},r.createElement(d,null),r.createElement(c,{type:"number",dataKey:"x",name:"stature",unit:"cm",allowDataOverflow:o.allowDataOverflow}),r.createElement(y,{type:"number",dataKey:"y",name:"weight",unit:"kg",allowDataOverflow:o.allowDataOverflow}),r.createElement(h,{name:"A school",data:s,fill:"blue"},r.createElement(e,{dataKey:"errorX",width:2,strokeWidth:3,stroke:"green",direction:"x"}),r.createElement(e,{dataKey:"errorY",width:4,strokeWidth:2,stroke:"red",direction:"y"})),r.createElement(u,{cursor:{strokeDasharray:"3 3"}}))},args:l(m),parameters:{controls:{include:["layout","allowDataOverflow"]}}},Ar=["WithErrorBarsAndExtendedDomain"];var a,n,i;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
