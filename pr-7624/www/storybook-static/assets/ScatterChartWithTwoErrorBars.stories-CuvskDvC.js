import{R as r}from"./iframe-DQ5pdRpT.js";import{g as n}from"./utils-ePvtT4un.js";import{S as s}from"./ScatterChartArgs-DVckGNEz.js";import{S as p}from"./ScatterChart-D9gCs1jW.js";import{C as d}from"./CartesianGrid-2P83tjAO.js";import{X as c}from"./XAxis-BbDJVinv.js";import{Y as y}from"./YAxis-B3S1-9pB.js";import{S as h}from"./Scatter-BFrVPRsh.js";import{E as e}from"./ErrorBar-BgMo4SKK.js";import{T as u}from"./Tooltip-CTEkWRqt.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper--EivWNjp.js";import"./zIndexSlice-DQojUU3D.js";import"./throttle-j7vxqIWJ.js";import"./index-B42gFx1y.js";import"./index-CKPKUGRw.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-C2j2eShk.js";import"./isWellBehavedNumber-DO3SFpF7.js";import"./PolarUtils-CTnnDHZv.js";import"./index-CUdIWJWE.js";import"./index-CUVFW2Mq.js";import"./axisSelectors-BLoeM8Ql.js";import"./d3-scale-CzelId51.js";import"./renderedTicksSlice-DZuwhgdB.js";import"./CartesianChart-DCEWo6vx.js";import"./chartDataContext-BANEa2Gn.js";import"./CategoricalChart-DmEP8iSm.js";import"./CartesianAxis-9E3w2iOb.js";import"./Layer-BrLbSCb2.js";import"./Text-BbwznCj8.js";import"./DOMUtils-3opGu7KJ.js";import"./Label-ogcMQvX_.js";import"./ZIndexLayer-LAqpTUNY.js";import"./types-DwD8FSIs.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./RechartsThemeContext-DYFm3WDH.js";import"./isBuffer-BG75eWKN.js";import"./AnimatedItems-Bmg4d13Y.js";import"./useAnimationId-Bjim9SiW.js";import"./Curve-Co2BFljk.js";import"./step-BcS8HbZG.js";import"./path-DyVhHtw_.js";import"./tooltipContext-B3UCEZjV.js";import"./Symbols-CEQie_2C.js";import"./symbol-CBHGzcW_.js";import"./ActiveShapeUtils-ZRRc_Clb.js";import"./RegisterGraphicalItemId-gNTwGCiB.js";import"./ErrorBarContext-PCXvp0W_.js";import"./GraphicalItemClipPath-Cbyv8QGz.js";import"./SetGraphicalItem-BopL2iik.js";import"./CSSTransitionAnimate-ZkObvedC.js";import"./util-Dxo8gN5i.js";import"./useElementOffset-DXvuwe-z.js";import"./uniqBy-Ccyf9NaN.js";import"./iteratee-DbAGhbRW.js";import"./Cross-mqWdaTzN.js";import"./Rectangle-BmXaPyvq.js";import"./Sector-CZrHPxfX.js";const Xr={component:p,argTypes:s,docs:{autodocs:!1}},t={render:o=>{const l=[{x:100,y:200,errorY:30,errorX:30},{x:120,y:100,errorY:[500,30],errorX:[200,30]},{x:170,y:300,errorY:[10,20],errorX:20},{x:140,y:250,errorY:30,errorX:20},{x:150,y:400,errorY:[20,300],errorX:30},{x:110,y:280,errorY:40,errorX:40}];return r.createElement(p,{width:400,height:400,margin:{top:20,right:20,bottom:20,left:20},layout:o.layout},r.createElement(d,null),r.createElement(c,{type:"number",dataKey:"x",name:"stature",unit:"cm",allowDataOverflow:o.allowDataOverflow}),r.createElement(y,{type:"number",dataKey:"y",name:"weight",unit:"kg",allowDataOverflow:o.allowDataOverflow}),r.createElement(h,{name:"A school",data:l,fill:"blue"},r.createElement(e,{dataKey:"errorX",width:2,strokeWidth:3,stroke:"green",direction:"x"}),r.createElement(e,{dataKey:"errorY",width:4,strokeWidth:2,stroke:"red",direction:"y"})),r.createElement(u,{cursor:{strokeDasharray:"3 3"}}))},args:n(s),parameters:{controls:{include:["layout","allowDataOverflow"]}}};var a,i,m;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
}`,...(m=(i=t.parameters)==null?void 0:i.docs)==null?void 0:m.source}}};const Yr=["WithErrorBarsAndExtendedDomain"];export{t as WithErrorBarsAndExtendedDomain,Yr as __namedExportsOrder,Xr as default};
