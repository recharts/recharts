import{R as r}from"./iframe-CRWpOW02.js";import{g as l}from"./utils-ePvtT4un.js";import{S as m}from"./ScatterChartArgs-BpaDSsyX.js";import{S as p}from"./ScatterChart-B1Sa7TwL.js";import{C as d}from"./CartesianGrid-C-9gYDrC.js";import{X as c}from"./XAxis-D1dQPR-6.js";import{Y as y}from"./YAxis-DHYidPrE.js";import{S as h}from"./Scatter-9mjHwbGq.js";import{E as e}from"./ErrorBar-3xlY4uuc.js";import{T as u}from"./Tooltip-BgvFandc.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-BIU9TwkO.js";import"./zIndexSlice-BeAe48-I.js";import"./throttle-CYPAZ-oY.js";import"./index-CqqjX4mb.js";import"./index-BtZZPVlj.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-BGJ-s5wM.js";import"./isWellBehavedNumber-DnvCGmEU.js";import"./PolarUtils-CTnnDHZv.js";import"./axisSelectors-CEaTU0uL.js";import"./d3-scale-d-dAzt7l.js";import"./index-Br2LofN0.js";import"./index-D_MdTA2d.js";import"./renderedTicksSlice-D6XZoNOx.js";import"./index-CqBbZHkF.js";import"./CartesianChart-BKIvGl2K.js";import"./chartDataContext-BIcAjQe6.js";import"./CategoricalChart-DHoPXZtk.js";import"./CartesianAxis-BjJPyt3G.js";import"./Layer-CNbUO4cy.js";import"./Text-159WNhne.js";import"./pageBackground-CeS3kx1x.js";import"./useId-ECIur30B.js";import"./useBackwardsCompatibleTheme-4poegSRB.js";import"./Label-C0mxneHa.js";import"./ZIndexLayer-CE46bnfu.js";import"./types-VHH142lq.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./activeStyles-qMzt72fn.js";import"./useAnimationId-D92beKJG.js";import"./dataEntryStyles-BglHhD-H.js";import"./Curve-DSopOTRT.js";import"./step-VbmBsaRU.js";import"./path-DyVhHtw_.js";import"./tooltipContext-CRdtwP7J.js";import"./Symbols-DjxJ3Hgq.js";import"./symbol-9pDsxG4i.js";import"./ActiveShapeUtils-CJ3uGwKk.js";import"./ErrorBarContext-Bq-5TM9D.js";import"./GraphicalItemClipPath-Baz6IWCm.js";import"./SetGraphicalItem-CHlvRlHN.js";import"./useEffectiveDataKey-BpgvrKzX.js";import"./CSSTransitionAnimate-DUIenLBA.js";import"./util-Dxo8gN5i.js";import"./useElementOffset-B4u2V-V0.js";import"./uniqBy-hsCh7ews.js";import"./iteratee-B8ts1Ce8.js";import"./Cross-Du1xWbjF.js";import"./Rectangle-5Ov4WxTU.js";import"./Sector-WsHTbLWJ.js";const Sr={component:p,argTypes:m,docs:{autodocs:!1}},t={render:o=>{const s=[{x:100,y:200,errorY:30,errorX:30},{x:120,y:100,errorY:[500,30],errorX:[200,30]},{x:170,y:300,errorY:[10,20],errorX:20},{x:140,y:250,errorY:30,errorX:20},{x:150,y:400,errorY:[20,300],errorX:30},{x:110,y:280,errorY:40,errorX:40}];return r.createElement(p,{width:400,height:400,margin:{top:20,right:20,bottom:20,left:20},layout:o.layout},r.createElement(d,null),r.createElement(c,{type:"number",dataKey:"x",name:"stature",unit:"cm",allowDataOverflow:o.allowDataOverflow}),r.createElement(y,{type:"number",dataKey:"y",name:"weight",unit:"kg",allowDataOverflow:o.allowDataOverflow}),r.createElement(h,{name:"A school",data:s,fill:"blue"},r.createElement(e,{dataKey:"errorX",width:2,strokeWidth:3,stroke:"green",direction:"x"}),r.createElement(e,{dataKey:"errorY",width:4,strokeWidth:2,stroke:"red",direction:"y"})),r.createElement(u,{cursor:{strokeDasharray:"3 3"}}))},args:l(m),parameters:{controls:{include:["layout","allowDataOverflow"]}}},Dr=["WithErrorBarsAndExtendedDomain"];var a,n,i;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
