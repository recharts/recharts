import{R as r}from"./iframe-BEU0VEzj.js";import{g as n}from"./utils-ePvtT4un.js";import{S as p}from"./ScatterChartArgs-DVckGNEz.js";import{S as s}from"./ScatterChart-BvpCt0Gp.js";import{C as d}from"./CartesianGrid-DLMroFrg.js";import{X as c}from"./XAxis-DHuUhI2Z.js";import{Y as y}from"./YAxis-Bwob8VzU.js";import{S as h}from"./Scatter-Cf7h6ljA.js";import{E as e}from"./ErrorBar-C-J5NJyo.js";import{T as u}from"./Tooltip-fDadjpQf.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-BgY8CE2w.js";import"./zIndexSlice-mhTpFGis.js";import"./throttle-BnTbmX16.js";import"./index-C8ohCoZb.js";import"./index-DaENtIET.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-3wYQv28v.js";import"./isWellBehavedNumber-C2k8qIGv.js";import"./PolarUtils-CTnnDHZv.js";import"./index-C2ItmsS3.js";import"./index-urNlcYtz.js";import"./axisSelectors-X6Iztzs2.js";import"./d3-scale-D-iBl5g_.js";import"./renderedTicksSlice-xgVkluQT.js";import"./CartesianChart-SjLeJZWR.js";import"./chartDataContext-DlMENguP.js";import"./CategoricalChart-venkO3Qs.js";import"./CartesianAxis-I3SN0dPC.js";import"./Layer-BxzS3V_h.js";import"./Text-1VnO-5nk.js";import"./DOMUtils-B3nT0fft.js";import"./useId-DlO5xKwO.js";import"./useBackwardsCompatibleTheme-DbNZLS-G.js";import"./Label-ChFEzAZk.js";import"./ZIndexLayer-nwUJ9Z8I.js";import"./types-BcpteXUs.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./AnimatedItems-C1OsdHSy.js";import"./useAnimationId-BpSAAbQy.js";import"./Curve-DRodi9QH.js";import"./step-B0HdwPOl.js";import"./path-DyVhHtw_.js";import"./tooltipContext-DHu5iVhe.js";import"./Symbols-BStY3Nch.js";import"./symbol-ByyL1C9a.js";import"./ActiveShapeUtils-DJPjSqHL.js";import"./RegisterGraphicalItemId-C3EeC43L.js";import"./ErrorBarContext-OH4Zfmtr.js";import"./GraphicalItemClipPath-DWoEZRp9.js";import"./SetGraphicalItem-BO4L7W4Z.js";import"./graphicalItemIdentity-CdZfZkJ-.js";import"./CSSTransitionAnimate-BoX6j91n.js";import"./util-Dxo8gN5i.js";import"./useElementOffset-kyh44B3q.js";import"./uniqBy-ClPneOeo.js";import"./iteratee-BNBpiK-0.js";import"./Cross-CQdePycd.js";import"./Rectangle-BBifCncj.js";import"./Sector-DYrzJMn1.js";const Ar={component:s,argTypes:p,docs:{autodocs:!1}},t={render:o=>{const l=[{x:100,y:200,errorY:30,errorX:30},{x:120,y:100,errorY:[500,30],errorX:[200,30]},{x:170,y:300,errorY:[10,20],errorX:20},{x:140,y:250,errorY:30,errorX:20},{x:150,y:400,errorY:[20,300],errorX:30},{x:110,y:280,errorY:40,errorX:40}];return r.createElement(s,{width:400,height:400,margin:{top:20,right:20,bottom:20,left:20},layout:o.layout},r.createElement(d,null),r.createElement(c,{type:"number",dataKey:"x",name:"stature",unit:"cm",allowDataOverflow:o.allowDataOverflow}),r.createElement(y,{type:"number",dataKey:"y",name:"weight",unit:"kg",allowDataOverflow:o.allowDataOverflow}),r.createElement(h,{name:"A school",data:l,fill:"blue"},r.createElement(e,{dataKey:"errorX",width:2,strokeWidth:3,stroke:"green",direction:"x"}),r.createElement(e,{dataKey:"errorY",width:4,strokeWidth:2,stroke:"red",direction:"y"})),r.createElement(u,{cursor:{strokeDasharray:"3 3"}}))},args:n(p),parameters:{controls:{include:["layout","allowDataOverflow"]}}};var a,i,m;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
}`,...(m=(i=t.parameters)==null?void 0:i.docs)==null?void 0:m.source}}};const Sr=["WithErrorBarsAndExtendedDomain"];export{t as WithErrorBarsAndExtendedDomain,Sr as __namedExportsOrder,Ar as default};
