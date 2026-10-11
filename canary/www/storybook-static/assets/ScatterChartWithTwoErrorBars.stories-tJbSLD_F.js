import{R as r}from"./iframe-Bsj5zL9n.js";import{g as l}from"./utils-ePvtT4un.js";import{S as m}from"./ScatterChartArgs-BpaDSsyX.js";import{S as p}from"./ScatterChart-2qzS6epO.js";import{C as d}from"./CartesianGrid-Cs0CKkTD.js";import{X as c}from"./XAxis-BgzuwsrB.js";import{Y as y}from"./YAxis-CbZ6bfr6.js";import{S as h}from"./Scatter-j0UBqZPv.js";import{E as e}from"./ErrorBar-SsiwXSer.js";import{T as u}from"./Tooltip-HUdUk_4w.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-CfIRZAky.js";import"./zIndexSlice-Cq8HAqW-.js";import"./throttle-CrEblMxD.js";import"./index-BnI-_qMA.js";import"./index-DrTVWANE.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-Uluvm9qq.js";import"./isWellBehavedNumber-DfaPS7hR.js";import"./PolarUtils-CTnnDHZv.js";import"./axisSelectors-mMRcbn7f.js";import"./d3-scale-CbB2Llqp.js";import"./index-DOYtr8yv.js";import"./index-g6-HhHC-.js";import"./renderedTicksSlice-BMu61fLT.js";import"./index-Kh3nyu4O.js";import"./CartesianChart-CeBBXviU.js";import"./chartDataContext-TTvcivZZ.js";import"./CategoricalChart-CEEokRev.js";import"./CartesianAxis-BFozoP5y.js";import"./Layer-yetTMzBX.js";import"./Text-EdZq5d5T.js";import"./pageBackground-B9aaE2P3.js";import"./useId-oX3CQwQj.js";import"./useBackwardsCompatibleTheme-CCerMO7Q.js";import"./Label-Dh346ivy.js";import"./ZIndexLayer-BdEpN6P8.js";import"./types-Bb-qVITL.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./activeStyles-C6E3VGh0.js";import"./useAnimationId-HXoQj9d3.js";import"./dataEntryStyles-5zRGCxG2.js";import"./Curve-DfVRmOpg.js";import"./step-DdZLdhts.js";import"./path-DyVhHtw_.js";import"./tooltipContext-Bu8eY-DR.js";import"./Symbols-DRNmlrBI.js";import"./symbol-DjYhybRJ.js";import"./ActiveShapeUtils-Ca0VK3Nb.js";import"./ErrorBarContext-HZLs1nsG.js";import"./GraphicalItemClipPath-BHCzBPU9.js";import"./SetGraphicalItem-CgedTelm.js";import"./useGraphicalItemIdentity-BJYihGV1.js";import"./CSSTransitionAnimate-DuijAoSK.js";import"./util-Dxo8gN5i.js";import"./useElementOffset-DZSLckyW.js";import"./uniqBy-DpsGABHA.js";import"./iteratee-t29Xx_gs.js";import"./Cross-DFL3271i.js";import"./Rectangle-DCJ2slUs.js";import"./Sector-zFZXOIWg.js";const Sr={component:p,argTypes:m,docs:{autodocs:!1}},t={render:o=>{const s=[{x:100,y:200,errorY:30,errorX:30},{x:120,y:100,errorY:[500,30],errorX:[200,30]},{x:170,y:300,errorY:[10,20],errorX:20},{x:140,y:250,errorY:30,errorX:20},{x:150,y:400,errorY:[20,300],errorX:30},{x:110,y:280,errorY:40,errorX:40}];return r.createElement(p,{width:400,height:400,margin:{top:20,right:20,bottom:20,left:20},layout:o.layout},r.createElement(d,null),r.createElement(c,{type:"number",dataKey:"x",name:"stature",unit:"cm",allowDataOverflow:o.allowDataOverflow}),r.createElement(y,{type:"number",dataKey:"y",name:"weight",unit:"kg",allowDataOverflow:o.allowDataOverflow}),r.createElement(h,{name:"A school",data:s,fill:"blue"},r.createElement(e,{dataKey:"errorX",width:2,strokeWidth:3,stroke:"green",direction:"x"}),r.createElement(e,{dataKey:"errorY",width:4,strokeWidth:2,stroke:"red",direction:"y"})),r.createElement(u,{cursor:{strokeDasharray:"3 3"}}))},args:l(m),parameters:{controls:{include:["layout","allowDataOverflow"]}}},Dr=["WithErrorBarsAndExtendedDomain"];var a,n,i;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
