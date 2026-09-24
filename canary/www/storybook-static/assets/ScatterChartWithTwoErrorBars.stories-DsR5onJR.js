import{R as r}from"./iframe-B5g3I7ev.js";import{g as l}from"./utils-ePvtT4un.js";import{S as m}from"./ScatterChartArgs-BpaDSsyX.js";import{S as p}from"./ScatterChart-SiihEWWi.js";import{C as d}from"./CartesianGrid-C7KPRcbe.js";import{X as c}from"./XAxis-BhxgbA2b.js";import{Y as y}from"./YAxis-8glJaMk0.js";import{S as h}from"./Scatter-ChqQ9xXb.js";import{E as e}from"./ErrorBar-Cysc4xHo.js";import{T as u}from"./Tooltip-CHIKe2CP.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-Bo6Jfh5F.js";import"./zIndexSlice-DGvgy2X6.js";import"./throttle-DboQbEZw.js";import"./index-CUp993cz.js";import"./index-BAWIKs3X.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-CNWhfhMM.js";import"./isWellBehavedNumber-C-qAxBmX.js";import"./PolarUtils-CTnnDHZv.js";import"./axisSelectors-DjPo8MIe.js";import"./d3-scale-C7u8uwmP.js";import"./index-Z4LdU3de.js";import"./index-wrz3e8tU.js";import"./renderedTicksSlice-BmUG22gY.js";import"./index-DQOAurO-.js";import"./CartesianChart-CCYXF9ai.js";import"./chartDataContext-DiPBxGan.js";import"./CategoricalChart-BprHnfNJ.js";import"./CartesianAxis-CufURV0j.js";import"./Layer-BzSrPOIw.js";import"./Text-BYK6re_u.js";import"./DOMUtils-BBurC4Bd.js";import"./useId-BeJfkheV.js";import"./useBackwardsCompatibleTheme-BDfv2Eej.js";import"./Label-T3V6prm0.js";import"./ZIndexLayer-C61b4tvj.js";import"./types-4J1YdzxR.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./AnimatedItems-BAgU6T0J.js";import"./useAnimationId-E9ax1yjD.js";import"./Curve-CnFbZ5iA.js";import"./step-CCbudcDx.js";import"./path-DyVhHtw_.js";import"./tooltipContext-Cy6fvl5s.js";import"./Symbols-BArdl8gR.js";import"./symbol-BI5IrfIV.js";import"./ActiveShapeUtils-BHMUVdMS.js";import"./RegisterGraphicalItemId-B0kmn4VH.js";import"./ErrorBarContext-CUA3MPdo.js";import"./GraphicalItemClipPath-C2l89xTF.js";import"./SetGraphicalItem-B2TqdHsC.js";import"./useGraphicalItemIdentity-DeD0kRsv.js";import"./CSSTransitionAnimate-Cw7AQ3Fx.js";import"./util-Dxo8gN5i.js";import"./useElementOffset-9_pOD8zc.js";import"./uniqBy-3ryMdrvw.js";import"./iteratee-D8S9d83o.js";import"./Cross-9hgsawqu.js";import"./Rectangle-BtmGpz6E.js";import"./Sector-4FsQvLtK.js";const Sr={component:p,argTypes:m,docs:{autodocs:!1}},t={render:o=>{const s=[{x:100,y:200,errorY:30,errorX:30},{x:120,y:100,errorY:[500,30],errorX:[200,30]},{x:170,y:300,errorY:[10,20],errorX:20},{x:140,y:250,errorY:30,errorX:20},{x:150,y:400,errorY:[20,300],errorX:30},{x:110,y:280,errorY:40,errorX:40}];return r.createElement(p,{width:400,height:400,margin:{top:20,right:20,bottom:20,left:20},layout:o.layout},r.createElement(d,null),r.createElement(c,{type:"number",dataKey:"x",name:"stature",unit:"cm",allowDataOverflow:o.allowDataOverflow}),r.createElement(y,{type:"number",dataKey:"y",name:"weight",unit:"kg",allowDataOverflow:o.allowDataOverflow}),r.createElement(h,{name:"A school",data:s,fill:"blue"},r.createElement(e,{dataKey:"errorX",width:2,strokeWidth:3,stroke:"green",direction:"x"}),r.createElement(e,{dataKey:"errorY",width:4,strokeWidth:2,stroke:"red",direction:"y"})),r.createElement(u,{cursor:{strokeDasharray:"3 3"}}))},args:l(m),parameters:{controls:{include:["layout","allowDataOverflow"]}}},Dr=["WithErrorBarsAndExtendedDomain"];var a,n,i;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
