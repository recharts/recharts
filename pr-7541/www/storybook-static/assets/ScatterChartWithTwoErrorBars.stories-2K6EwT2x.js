import{R as r}from"./iframe-B_vrQl8R.js";import{g as n}from"./utils-ePvtT4un.js";import{S as s}from"./ScatterChartArgs-DVckGNEz.js";import{S as p}from"./ScatterChart-BrIYfJug.js";import{C as d}from"./CartesianGrid-2-NeYVAl.js";import{X as c}from"./XAxis-Ci68TUER.js";import{Y as y}from"./YAxis-BnsZeISF.js";import{S as h}from"./Scatter-BD-M28FI.js";import{E as e}from"./ErrorBar-B72EFgO6.js";import{T as u}from"./Tooltip-DIEWHamE.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-6qr9rM4_.js";import"./zIndexSlice-Cxwz8Tl-.js";import"./throttle-Dyk5owXH.js";import"./index-C_xOR2HM.js";import"./index-D5WptIo8.js";import"./get-DJ3830uQ.js";import"./resolveDefaultProps-I1lUK0_w.js";import"./isWellBehavedNumber-CBzBJL74.js";import"./PolarUtils-CTnnDHZv.js";import"./index-DskW-dUs.js";import"./index-HEwSZYID.js";import"./renderedTicksSlice-BE8z1LZo.js";import"./axisSelectors-DWL2EjSK.js";import"./d3-scale-ByBkJlb2.js";import"./CartesianChart-48RP5Lhn.js";import"./chartDataContext-sXI4Ore6.js";import"./CategoricalChart-C5bYZX9f.js";import"./CartesianAxis-BAwOMXAP.js";import"./Layer-Gd_R9sAX.js";import"./Text-DHNSM_o8.js";import"./DOMUtils-BvPkU0IV.js";import"./Label-CvVA6TIG.js";import"./ZIndexLayer-DUE9jsMX.js";import"./types-B9Larr1k.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./AnimatedItems-CSL9mSPk.js";import"./useAnimationId-DAjnsWww.js";import"./Curve-4ICuXbwR.js";import"./step-Ct9Ha3sC.js";import"./path-DyVhHtw_.js";import"./tooltipContext-B3E0RZ-k.js";import"./Symbols-CPIDLIMe.js";import"./symbol-BCVeltSM.js";import"./ActiveShapeUtils-a0kgZEBq.js";import"./RegisterGraphicalItemId-Be581UAk.js";import"./ErrorBarContext-DjPqL-MC.js";import"./GraphicalItemClipPath-Bv2rP4gQ.js";import"./SetGraphicalItem-BqgYDJXb.js";import"./CSSTransitionAnimate-BbRSVwVE.js";import"./util-Dxo8gN5i.js";import"./useElementOffset-B_HGDiJC.js";import"./uniqBy-DUbYgYPG.js";import"./iteratee-D-mRmhpM.js";import"./Cross-DyfvovC6.js";import"./Rectangle-q-Ta0Kiu.js";import"./Sector-C1IR77hT.js";const xr={component:p,argTypes:s,docs:{autodocs:!1}},t={render:o=>{const l=[{x:100,y:200,errorY:30,errorX:30},{x:120,y:100,errorY:[500,30],errorX:[200,30]},{x:170,y:300,errorY:[10,20],errorX:20},{x:140,y:250,errorY:30,errorX:20},{x:150,y:400,errorY:[20,300],errorX:30},{x:110,y:280,errorY:40,errorX:40}];return r.createElement(p,{width:400,height:400,margin:{top:20,right:20,bottom:20,left:20},layout:o.layout},r.createElement(d,null),r.createElement(c,{type:"number",dataKey:"x",name:"stature",unit:"cm",allowDataOverflow:o.allowDataOverflow}),r.createElement(y,{type:"number",dataKey:"y",name:"weight",unit:"kg",allowDataOverflow:o.allowDataOverflow}),r.createElement(h,{name:"A school",data:l,fill:"blue"},r.createElement(e,{dataKey:"errorX",width:2,strokeWidth:3,stroke:"green",direction:"x"}),r.createElement(e,{dataKey:"errorY",width:4,strokeWidth:2,stroke:"red",direction:"y"})),r.createElement(u,{cursor:{strokeDasharray:"3 3"}}))},args:n(s),parameters:{controls:{include:["layout","allowDataOverflow"]}}};var a,i,m;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
}`,...(m=(i=t.parameters)==null?void 0:i.docs)==null?void 0:m.source}}};const Er=["WithErrorBarsAndExtendedDomain"];export{t as WithErrorBarsAndExtendedDomain,Er as __namedExportsOrder,xr as default};
