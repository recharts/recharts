import{R as r}from"./iframe-BjoWmD_2.js";import{g as l}from"./utils-ePvtT4un.js";import{S as m}from"./ScatterChartArgs-BpaDSsyX.js";import{S as p}from"./ScatterChart-DidBusxR.js";import{C as d}from"./CartesianGrid-1Qi909jy.js";import{X as c}from"./XAxis-D-7vKTCU.js";import{Y as y}from"./YAxis-DcA2RCuj.js";import{S as h}from"./Scatter-sRL1wnC5.js";import{E as e}from"./ErrorBar-easUniDV.js";import{T as u}from"./Tooltip-GIBef5dA.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-B-Xj9Vy5.js";import"./zIndexSlice-QxL2_XNr.js";import"./throttle-h3rYfSBM.js";import"./index-BRU_7ROE.js";import"./index-rOX-JMdH.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-CRUAWeqy.js";import"./isWellBehavedNumber-BxmTrUsM.js";import"./PolarUtils-CTnnDHZv.js";import"./axisSelectors-CTjcoI_o.js";import"./d3-scale-kKJuS5hm.js";import"./index-Ctb1uOPb.js";import"./index-Cd4gA8VB.js";import"./renderedTicksSlice-9uvUqonz.js";import"./index-BiJeeMkw.js";import"./CartesianChart-ALqDRU4y.js";import"./chartDataContext-D2tEsWQI.js";import"./CategoricalChart-CU8xgSqQ.js";import"./CartesianAxis-CuhpEa5Q.js";import"./Layer-BETohxRY.js";import"./Text-DoJy0Hms.js";import"./pageBackground-B2WnjK3P.js";import"./useId-CxEr69Iu.js";import"./useBackwardsCompatibleTheme-lRDO5kA2.js";import"./Label-Cqr17CGT.js";import"./ZIndexLayer-DQXgAxZP.js";import"./types-CwctOhA4.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./activeStyles-pw12H8S5.js";import"./useAnimationId-CvgGu5_L.js";import"./dataEntryStyles-M6AZ3Vkx.js";import"./Curve-Bi87Df9h.js";import"./step-DbGei3uZ.js";import"./path-DyVhHtw_.js";import"./tooltipContext-C1vSZW3p.js";import"./Symbols-9svYQiWP.js";import"./symbol-CtXXRm84.js";import"./ActiveShapeUtils-Ba7sfaWC.js";import"./ErrorBarContext-hA9ACwOL.js";import"./GraphicalItemClipPath-CJpx4uWZ.js";import"./SetGraphicalItem-BNR-CUWR.js";import"./useGraphicalItemIdentity-D7aL1WKh.js";import"./CSSTransitionAnimate-fNrRZI-o.js";import"./util-Dxo8gN5i.js";import"./useElementOffset-CXh5WHLo.js";import"./uniqBy-BaadcAvx.js";import"./iteratee-B_XLmPV3.js";import"./Cross-DKdj81XQ.js";import"./Rectangle-uRJgPy0Q.js";import"./Sector-BRxC4KNY.js";const Sr={component:p,argTypes:m,docs:{autodocs:!1}},t={render:o=>{const s=[{x:100,y:200,errorY:30,errorX:30},{x:120,y:100,errorY:[500,30],errorX:[200,30]},{x:170,y:300,errorY:[10,20],errorX:20},{x:140,y:250,errorY:30,errorX:20},{x:150,y:400,errorY:[20,300],errorX:30},{x:110,y:280,errorY:40,errorX:40}];return r.createElement(p,{width:400,height:400,margin:{top:20,right:20,bottom:20,left:20},layout:o.layout},r.createElement(d,null),r.createElement(c,{type:"number",dataKey:"x",name:"stature",unit:"cm",allowDataOverflow:o.allowDataOverflow}),r.createElement(y,{type:"number",dataKey:"y",name:"weight",unit:"kg",allowDataOverflow:o.allowDataOverflow}),r.createElement(h,{name:"A school",data:s,fill:"blue"},r.createElement(e,{dataKey:"errorX",width:2,strokeWidth:3,stroke:"green",direction:"x"}),r.createElement(e,{dataKey:"errorY",width:4,strokeWidth:2,stroke:"red",direction:"y"})),r.createElement(u,{cursor:{strokeDasharray:"3 3"}}))},args:l(m),parameters:{controls:{include:["layout","allowDataOverflow"]}}},Dr=["WithErrorBarsAndExtendedDomain"];var a,n,i;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
