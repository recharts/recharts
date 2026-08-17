import{R as r}from"./iframe-5rlHu5E0.js";import{g as n}from"./utils-ePvtT4un.js";import{S as p}from"./ScatterChartArgs-DVckGNEz.js";import{S as s}from"./ScatterChart-CaiNsoB2.js";import{C as d}from"./CartesianGrid-DMyXnhkI.js";import{X as c}from"./XAxis-QaJfpBkQ.js";import{Y as y}from"./YAxis-tXVCruoC.js";import{S as h}from"./Scatter-Co1xbx9T.js";import{E as e}from"./ErrorBar-Dxzrv6Ps.js";import{T as u}from"./Tooltip-CA8byynu.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-B_1S-WX9.js";import"./zIndexSlice-Dvv9j-PL.js";import"./throttle-BEcUjoVL.js";import"./index-De9KIq3f.js";import"./index-CPjGkxRF.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-DMzoBuFc.js";import"./isWellBehavedNumber-CtQc_19S.js";import"./PolarUtils-CTnnDHZv.js";import"./index-CRexnrp9.js";import"./index-CgDVIgvd.js";import"./axisSelectors-XpGDVkFI.js";import"./d3-scale-DQPeDNzN.js";import"./renderedTicksSlice-BU2rLD4L.js";import"./CartesianChart-CTBAwDjg.js";import"./chartDataContext-_d8W5FBB.js";import"./CategoricalChart-fg3LMOIt.js";import"./CartesianAxis-C1R_DLLS.js";import"./Layer-B7qTvwXJ.js";import"./Text-BWBZmFaQ.js";import"./DOMUtils-Cgsp7qZK.js";import"./useBackwardsCompatibleTheme-CU4QNWlg.js";import"./Label-dTTzfWAl.js";import"./ZIndexLayer-CC4VGBXC.js";import"./types-_FdMQlV7.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./AnimatedItems-CcRowb6W.js";import"./useAnimationId-9v2us4V5.js";import"./Curve-D7O-jO1k.js";import"./step-BcoQtodi.js";import"./path-DyVhHtw_.js";import"./tooltipContext-DQG3ys6L.js";import"./Symbols-1osrxW7y.js";import"./symbol-tLvvDe7R.js";import"./ActiveShapeUtils-DcbSHq-a.js";import"./RegisterGraphicalItemId-DiVn-hPt.js";import"./ErrorBarContext-B7azcaum.js";import"./GraphicalItemClipPath-BY5WrhEA.js";import"./SetGraphicalItem-B4wCJH3k.js";import"./graphicalItemIdentity-CdZfZkJ-.js";import"./CSSTransitionAnimate-y9kjk98h.js";import"./util-Dxo8gN5i.js";import"./useElementOffset-BaEggssM.js";import"./uniqBy-DHtefDuc.js";import"./iteratee-Ckui7P-a.js";import"./Cross-BmUo9Dmn.js";import"./Rectangle-asU9eCg1.js";import"./Sector-Czfvu02u.js";const Yr={component:s,argTypes:p,docs:{autodocs:!1}},t={render:o=>{const l=[{x:100,y:200,errorY:30,errorX:30},{x:120,y:100,errorY:[500,30],errorX:[200,30]},{x:170,y:300,errorY:[10,20],errorX:20},{x:140,y:250,errorY:30,errorX:20},{x:150,y:400,errorY:[20,300],errorX:30},{x:110,y:280,errorY:40,errorX:40}];return r.createElement(s,{width:400,height:400,margin:{top:20,right:20,bottom:20,left:20},layout:o.layout},r.createElement(d,null),r.createElement(c,{type:"number",dataKey:"x",name:"stature",unit:"cm",allowDataOverflow:o.allowDataOverflow}),r.createElement(y,{type:"number",dataKey:"y",name:"weight",unit:"kg",allowDataOverflow:o.allowDataOverflow}),r.createElement(h,{name:"A school",data:l,fill:"blue"},r.createElement(e,{dataKey:"errorX",width:2,strokeWidth:3,stroke:"green",direction:"x"}),r.createElement(e,{dataKey:"errorY",width:4,strokeWidth:2,stroke:"red",direction:"y"})),r.createElement(u,{cursor:{strokeDasharray:"3 3"}}))},args:n(p),parameters:{controls:{include:["layout","allowDataOverflow"]}}};var a,i,m;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
}`,...(m=(i=t.parameters)==null?void 0:i.docs)==null?void 0:m.source}}};const Ar=["WithErrorBarsAndExtendedDomain"];export{t as WithErrorBarsAndExtendedDomain,Ar as __namedExportsOrder,Yr as default};
