import{R as r}from"./iframe-BcoARvhY.js";import{g as l}from"./utils-ePvtT4un.js";import{S as m}from"./ScatterChartArgs-BpaDSsyX.js";import{S as p}from"./ScatterChart-QzOPBeMr.js";import{C as d}from"./CartesianGrid-Dqts8x-j.js";import{X as c}from"./XAxis-CW4XRUun.js";import{Y as y}from"./YAxis-BR79w2P2.js";import{S as h}from"./Scatter-D9hJdlro.js";import{E as e}from"./ErrorBar-rOAidGfn.js";import{T as u}from"./Tooltip-4lPV6aA7.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-Cwmh20d2.js";import"./zIndexSlice-Cap7bOGW.js";import"./get-cF5BDHN6.js";import"./resolveDefaultProps-DgaC_Lp9.js";import"./throttle-DozmwBSC.js";import"./index-DVE_dPhD.js";import"./index-BIq0I_KS.js";import"./axisSelectors-CF6rFxXt.js";import"./polarAxisSelectors-C4L0U3vA.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-BLsEuD7O.js";import"./index-SzPYUv7o.js";import"./index-DvX40RdG.js";import"./renderedTicksSlice-Dsox9MKA.js";import"./index-BhqvlJ2k.js";import"./fillDefinitions-D74AVg8N.js";import"./CartesianChart-C4x2bsCb.js";import"./ZIndexPortal-CGHsRqD4.js";import"./CategoricalChart-DUIKL0FO.js";import"./CartesianAxis-Dfmzj1DX.js";import"./Layer-BMBcyrHw.js";import"./Text-DEB5NFXE.js";import"./DOMUtils-BwQh9Mln.js";import"./ZIndexLayer-e5VNMC6H.js";import"./Label-Db4oLrbv.js";import"./types-CjeLalhs.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./LabelList-DqQuwlzD.js";import"./activeStyles-Bdk5Xw9p.js";import"./useAnimationId-DZvEuqRY.js";import"./dataEntryStyles-oli1U5SG.js";import"./Curve-hSwQe_mn.js";import"./step-BV4gh9k1.js";import"./path-DyVhHtw_.js";import"./tooltipContext-DlMmvww2.js";import"./Symbols-DvLknyR9.js";import"./symbol-D2mHl5_S.js";import"./ActiveShapeUtils-CvEqRJU-.js";import"./ErrorBarContext-BGCJ_sZx.js";import"./SetGraphicalItem-D7kHQmaa.js";import"./useEffectiveDataKey-1O9VfdX1.js";import"./CSSTransitionAnimate-BuwylefX.js";import"./util-Dxo8gN5i.js";import"./useElementOffset-KsdSYS8B.js";import"./uniqBy-CzEHPKx1.js";import"./iteratee-CEqHQ8un.js";import"./isArguments-yB-y1yaH.js";import"./Cross-BYGgjkzq.js";import"./Rectangle-C_t9hqFj.js";import"./Sector-DAFfY2-U.js";const Sr={component:p,argTypes:m,docs:{autodocs:!1}},t={render:o=>{const s=[{x:100,y:200,errorY:30,errorX:30},{x:120,y:100,errorY:[500,30],errorX:[200,30]},{x:170,y:300,errorY:[10,20],errorX:20},{x:140,y:250,errorY:30,errorX:20},{x:150,y:400,errorY:[20,300],errorX:30},{x:110,y:280,errorY:40,errorX:40}];return r.createElement(p,{width:400,height:400,margin:{top:20,right:20,bottom:20,left:20},layout:o.layout},r.createElement(d,null),r.createElement(c,{type:"number",dataKey:"x",name:"stature",unit:"cm",allowDataOverflow:o.allowDataOverflow}),r.createElement(y,{type:"number",dataKey:"y",name:"weight",unit:"kg",allowDataOverflow:o.allowDataOverflow}),r.createElement(h,{name:"A school",data:s,fill:"blue"},r.createElement(e,{dataKey:"errorX",width:2,strokeWidth:3,stroke:"green",direction:"x"}),r.createElement(e,{dataKey:"errorY",width:4,strokeWidth:2,stroke:"red",direction:"y"})),r.createElement(u,{cursor:{strokeDasharray:"3 3"}}))},args:l(m),parameters:{controls:{include:["layout","allowDataOverflow"]}}},Dr=["WithErrorBarsAndExtendedDomain"];var a,n,i;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
