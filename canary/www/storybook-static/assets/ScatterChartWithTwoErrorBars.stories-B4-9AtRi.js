import{R as r}from"./iframe-XShEXmHR.js";import{g as l}from"./utils-ePvtT4un.js";import{S as m}from"./ScatterChartArgs-BpaDSsyX.js";import{S as p}from"./ScatterChart-TYLb4tr-.js";import{C as d}from"./CartesianGrid-Cw58kur3.js";import{X as c}from"./XAxis-DWLQMeD5.js";import{Y as y}from"./YAxis-CC_fCC6K.js";import{S as h}from"./Scatter-dD6Yrr-m.js";import{E as e}from"./ErrorBar-CtAJU_X9.js";import{T as u}from"./Tooltip-Bgj8opTW.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-WU0hX8ZH.js";import"./zIndexSlice-BbKyzabk.js";import"./throttle-DGpDaXVx.js";import"./index-Bvkt8vSC.js";import"./index-B7mLrG61.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-DM0s23ft.js";import"./isWellBehavedNumber-D-ZqJjZ8.js";import"./PolarUtils-CTnnDHZv.js";import"./axisSelectors-CSJ2InJO.js";import"./d3-scale-DlV_OlJQ.js";import"./index-B0AN-0kz.js";import"./index-C8Ku-gFK.js";import"./renderedTicksSlice-CDzS9pio.js";import"./index-CNWPVzDl.js";import"./CartesianChart-CO72z_mS.js";import"./chartDataContext-CdQA1wIP.js";import"./CategoricalChart-D5nhR2iF.js";import"./CartesianAxis-DXjpiMVV.js";import"./Layer-C_-u4_qv.js";import"./Text-DdUz3atv.js";import"./pageBackground-Caz1wwpV.js";import"./useId-DooYhcnw.js";import"./useBackwardsCompatibleTheme-CMApgrjd.js";import"./Label-PHQocy7u.js";import"./ZIndexLayer-BjS9bgAg.js";import"./types-Du-HQFzW.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./activeStyles-JUu5k5N9.js";import"./useAnimationId-Dhnt88bC.js";import"./dataEntryStyles-BYJ6H9tg.js";import"./Curve-BLSppaDw.js";import"./step-DYrGddVY.js";import"./path-DyVhHtw_.js";import"./tooltipContext-BEGw6oth.js";import"./Symbols-CEnD6S3J.js";import"./symbol-BPoRGGbG.js";import"./ActiveShapeUtils-bxL5SxNf.js";import"./ErrorBarContext-D_UY1Ewg.js";import"./GraphicalItemClipPath-CSHX6ion.js";import"./SetGraphicalItem-DeDaE9OF.js";import"./useEffectiveDataKey-Ca_DBmdg.js";import"./CSSTransitionAnimate-CZzH-gwd.js";import"./util-Dxo8gN5i.js";import"./useElementOffset-CDXnga2p.js";import"./uniqBy-2p13vlX2.js";import"./iteratee-Dckbnh0N.js";import"./Cross-MJ9lCMTF.js";import"./Rectangle-3DMVp7GS.js";import"./Sector-CTPlL39z.js";const Sr={component:p,argTypes:m,docs:{autodocs:!1}},t={render:o=>{const s=[{x:100,y:200,errorY:30,errorX:30},{x:120,y:100,errorY:[500,30],errorX:[200,30]},{x:170,y:300,errorY:[10,20],errorX:20},{x:140,y:250,errorY:30,errorX:20},{x:150,y:400,errorY:[20,300],errorX:30},{x:110,y:280,errorY:40,errorX:40}];return r.createElement(p,{width:400,height:400,margin:{top:20,right:20,bottom:20,left:20},layout:o.layout},r.createElement(d,null),r.createElement(c,{type:"number",dataKey:"x",name:"stature",unit:"cm",allowDataOverflow:o.allowDataOverflow}),r.createElement(y,{type:"number",dataKey:"y",name:"weight",unit:"kg",allowDataOverflow:o.allowDataOverflow}),r.createElement(h,{name:"A school",data:s,fill:"blue"},r.createElement(e,{dataKey:"errorX",width:2,strokeWidth:3,stroke:"green",direction:"x"}),r.createElement(e,{dataKey:"errorY",width:4,strokeWidth:2,stroke:"red",direction:"y"})),r.createElement(u,{cursor:{strokeDasharray:"3 3"}}))},args:l(m),parameters:{controls:{include:["layout","allowDataOverflow"]}}},Dr=["WithErrorBarsAndExtendedDomain"];var a,n,i;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
