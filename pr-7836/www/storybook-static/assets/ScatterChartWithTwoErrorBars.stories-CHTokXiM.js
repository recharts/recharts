import{R as r}from"./iframe-Dpvc5Yjz.js";import{g as l}from"./utils-ePvtT4un.js";import{S as m}from"./ScatterChartArgs-BpaDSsyX.js";import{S as p}from"./ScatterChart-CCco3s3s.js";import{C as d}from"./CartesianGrid-Bmc5nWGG.js";import{X as c}from"./XAxis-DH81C7oh.js";import{Y as y}from"./YAxis-CRJBTUK4.js";import{S as h}from"./Scatter-D0Mri091.js";import{E as e}from"./ErrorBar-CVH2sbCF.js";import{T as u}from"./Tooltip-BQAbbeVI.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-Y3ZAzA3v.js";import"./zIndexSlice-Dho3i8T5.js";import"./throttle-ChqzHVQ0.js";import"./index-Bl2eW-CY.js";import"./index-CVG-Xgr5.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-CRYxfVCI.js";import"./isWellBehavedNumber-C1q3yIjs.js";import"./PolarUtils-CTnnDHZv.js";import"./axisSelectors-B0MCU6bk.js";import"./d3-scale-B7bmEbYw.js";import"./index-D1MAn6gI.js";import"./index-BGJHRM8B.js";import"./renderedTicksSlice-oAd8rZHP.js";import"./index-hEOzvS9k.js";import"./CartesianChart-AKEzFsPm.js";import"./chartDataContext-BXOKjidD.js";import"./CategoricalChart-kI0T_bBx.js";import"./CartesianAxis-6_XALvtr.js";import"./Layer-DB4rVtgq.js";import"./Text-DV8ChouY.js";import"./DOMUtils-B1JUaPdm.js";import"./useId-BTdNu9Gm.js";import"./useBackwardsCompatibleTheme-CtPFlS3s.js";import"./Label-DIzmtP1_.js";import"./ZIndexLayer-BroloYIp.js";import"./types-PTwxeL9Y.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./AnimatedItems-Dqknvwue.js";import"./useAnimationId-8x9555ZS.js";import"./Curve-D8gKKjbw.js";import"./step-CbGZbdjm.js";import"./path-DyVhHtw_.js";import"./tooltipContext-S2LkvAh-.js";import"./Symbols-BEaJ5bek.js";import"./symbol-CoOSEH1J.js";import"./ActiveShapeUtils-B4yE9O3b.js";import"./RegisterGraphicalItemId-BrxaJpgc.js";import"./ErrorBarContext-DgnCQmwB.js";import"./GraphicalItemClipPath-DoYX_rje.js";import"./SetGraphicalItem-WpaZzJ--.js";import"./useGraphicalItemIdentity-B6UUBA8h.js";import"./CSSTransitionAnimate-B7h4-fi1.js";import"./util-Dxo8gN5i.js";import"./useElementOffset-DFxcHkws.js";import"./uniqBy-DPOJBwGI.js";import"./iteratee-BEgn-_6q.js";import"./Cross-DAmovQ-J.js";import"./Rectangle-DMGyTNc0.js";import"./Sector-DZDoxeje.js";const Sr={component:p,argTypes:m,docs:{autodocs:!1}},t={render:o=>{const s=[{x:100,y:200,errorY:30,errorX:30},{x:120,y:100,errorY:[500,30],errorX:[200,30]},{x:170,y:300,errorY:[10,20],errorX:20},{x:140,y:250,errorY:30,errorX:20},{x:150,y:400,errorY:[20,300],errorX:30},{x:110,y:280,errorY:40,errorX:40}];return r.createElement(p,{width:400,height:400,margin:{top:20,right:20,bottom:20,left:20},layout:o.layout},r.createElement(d,null),r.createElement(c,{type:"number",dataKey:"x",name:"stature",unit:"cm",allowDataOverflow:o.allowDataOverflow}),r.createElement(y,{type:"number",dataKey:"y",name:"weight",unit:"kg",allowDataOverflow:o.allowDataOverflow}),r.createElement(h,{name:"A school",data:s,fill:"blue"},r.createElement(e,{dataKey:"errorX",width:2,strokeWidth:3,stroke:"green",direction:"x"}),r.createElement(e,{dataKey:"errorY",width:4,strokeWidth:2,stroke:"red",direction:"y"})),r.createElement(u,{cursor:{strokeDasharray:"3 3"}}))},args:l(m),parameters:{controls:{include:["layout","allowDataOverflow"]}}},Dr=["WithErrorBarsAndExtendedDomain"];var a,n,i;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
