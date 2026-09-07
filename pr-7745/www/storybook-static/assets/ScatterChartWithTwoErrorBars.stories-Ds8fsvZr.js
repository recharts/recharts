import{R as r}from"./iframe-BkeN00Xj.js";import{g as l}from"./utils-ePvtT4un.js";import{S as m}from"./ScatterChartArgs-DVckGNEz.js";import{S as p}from"./ScatterChart-DbKpRFpV.js";import{C as d}from"./CartesianGrid-jpY6hevw.js";import{X as c}from"./XAxis-CtkFJuG7.js";import{Y as y}from"./YAxis-DJRwhJXR.js";import{S as h}from"./Scatter-DRhep_fR.js";import{E as e}from"./ErrorBar-CwP9xfID.js";import{T as u}from"./Tooltip-VC28gVlA.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-C3Vxgl3Z.js";import"./zIndexSlice-B-x7pTGs.js";import"./throttle-DVvQgSvv.js";import"./index-Ssjmhn91.js";import"./index-Doqq19He.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-DZDkJdvH.js";import"./isWellBehavedNumber-DpaF5Qbq.js";import"./PolarUtils-CTnnDHZv.js";import"./axisSelectors-CdQeSFob.js";import"./d3-scale-59I2Ahhc.js";import"./index-Bp16jrAu.js";import"./index-CzDQGSqQ.js";import"./renderedTicksSlice-EekJT0xr.js";import"./index-BW_MIuEw.js";import"./CartesianChart-HYPnZu6o.js";import"./chartDataContext-BeegK0cj.js";import"./CategoricalChart-acAC1yFW.js";import"./CartesianAxis-LtwF5IC-.js";import"./Layer-CQvSRJEy.js";import"./Text-B4YmNBvy.js";import"./DOMUtils-BtNtGSBk.js";import"./useId-CoUZj2D9.js";import"./useBackwardsCompatibleTheme-CO7BXTf3.js";import"./Label-C5oKPJnD.js";import"./ZIndexLayer-BM7jKjXD.js";import"./types-CHY5UDxi.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./AnimatedItems-D-Ov5Ds2.js";import"./useAnimationId-DIIcOQR8.js";import"./Curve-CqZmQlC4.js";import"./step-6rSS0kJE.js";import"./path-DyVhHtw_.js";import"./tooltipContext-ztpyaTwC.js";import"./Symbols-AyonCz9c.js";import"./symbol-D8YHtFfZ.js";import"./ActiveShapeUtils-KH5PmLPO.js";import"./RegisterGraphicalItemId-SBK7zBb4.js";import"./ErrorBarContext-CjOXvaZb.js";import"./GraphicalItemClipPath-BVRs7DWi.js";import"./SetGraphicalItem-BLpQqeaN.js";import"./graphicalItemIdentity-CdZfZkJ-.js";import"./CSSTransitionAnimate-C5dWEk-q.js";import"./util-Dxo8gN5i.js";import"./useElementOffset-B7hTb3Ey.js";import"./uniqBy-CPVlAjhe.js";import"./iteratee-xMasKDoT.js";import"./Cross-DDcONwgE.js";import"./Rectangle-DByb3FOE.js";import"./Sector-DAcF8V-6.js";const Sr={component:p,argTypes:m,docs:{autodocs:!1}},t={render:o=>{const s=[{x:100,y:200,errorY:30,errorX:30},{x:120,y:100,errorY:[500,30],errorX:[200,30]},{x:170,y:300,errorY:[10,20],errorX:20},{x:140,y:250,errorY:30,errorX:20},{x:150,y:400,errorY:[20,300],errorX:30},{x:110,y:280,errorY:40,errorX:40}];return r.createElement(p,{width:400,height:400,margin:{top:20,right:20,bottom:20,left:20},layout:o.layout},r.createElement(d,null),r.createElement(c,{type:"number",dataKey:"x",name:"stature",unit:"cm",allowDataOverflow:o.allowDataOverflow}),r.createElement(y,{type:"number",dataKey:"y",name:"weight",unit:"kg",allowDataOverflow:o.allowDataOverflow}),r.createElement(h,{name:"A school",data:s,fill:"blue"},r.createElement(e,{dataKey:"errorX",width:2,strokeWidth:3,stroke:"green",direction:"x"}),r.createElement(e,{dataKey:"errorY",width:4,strokeWidth:2,stroke:"red",direction:"y"})),r.createElement(u,{cursor:{strokeDasharray:"3 3"}}))},args:l(m),parameters:{controls:{include:["layout","allowDataOverflow"]}}},Dr=["WithErrorBarsAndExtendedDomain"];var a,n,i;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
