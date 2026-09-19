import{R as r}from"./iframe-BrTyBnwX.js";import{g as l}from"./utils-ePvtT4un.js";import{S as m}from"./ScatterChartArgs-BpaDSsyX.js";import{S as p}from"./ScatterChart-BuEbPov0.js";import{C as d}from"./CartesianGrid-BQngezzC.js";import{X as c}from"./XAxis-D80iBJd5.js";import{Y as y}from"./YAxis-7FQTDhMx.js";import{S as h}from"./Scatter-CIP2aClH.js";import{E as e}from"./ErrorBar-D9s3Sj-l.js";import{T as u}from"./Tooltip-CnYao60F.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-BNiYksGw.js";import"./zIndexSlice-fCAjIC-s.js";import"./throttle-DoecO86t.js";import"./index-Bv6_RxtD.js";import"./index-COio-J2v.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-pdBcEa5m.js";import"./isWellBehavedNumber-yFPwar6M.js";import"./PolarUtils-CTnnDHZv.js";import"./axisSelectors-CsVFdpc7.js";import"./d3-scale-BBCERD4_.js";import"./index-6bvANrWw.js";import"./index-CY5SFnak.js";import"./renderedTicksSlice-BfFRGBwT.js";import"./index-DWzY76B7.js";import"./CartesianChart-C4EYf5JO.js";import"./chartDataContext-C8snCbmL.js";import"./CategoricalChart-C8btz5qd.js";import"./CartesianAxis-MCmd_z9-.js";import"./Layer-DXlWYKjQ.js";import"./Text-BiFKA33F.js";import"./DOMUtils-DAEkqOho.js";import"./useId-DsdbKPS3.js";import"./useBackwardsCompatibleTheme-DZwZ5sQ-.js";import"./Label-BmV3H-Sw.js";import"./ZIndexLayer-CRDOSP7u.js";import"./types-CIyrEG5X.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./AnimatedItems-Cw_YQpsP.js";import"./useAnimationId-CQ1-fLBA.js";import"./Curve-C0Njno5j.js";import"./step-DqmVBTvC.js";import"./path-DyVhHtw_.js";import"./tooltipContext-ljtSCTLF.js";import"./Symbols-DavR_s6k.js";import"./symbol-BTnBPnGa.js";import"./ActiveShapeUtils-DenUl92R.js";import"./RegisterGraphicalItemId-NAciwQoL.js";import"./ErrorBarContext-ESvWnAE_.js";import"./GraphicalItemClipPath-DJrsjfnr.js";import"./SetGraphicalItem-eWJRfUVz.js";import"./useGraphicalItemIdentity-CTGe8VwY.js";import"./CSSTransitionAnimate-DnYsJlAu.js";import"./util-Dxo8gN5i.js";import"./useElementOffset--cAF1-jX.js";import"./uniqBy-Du3jwSkV.js";import"./iteratee-D1qs-y5A.js";import"./Cross-Cf32k8Oy.js";import"./Rectangle-CTkuHm2X.js";import"./Sector-ypcmG6Bl.js";const Sr={component:p,argTypes:m,docs:{autodocs:!1}},t={render:o=>{const s=[{x:100,y:200,errorY:30,errorX:30},{x:120,y:100,errorY:[500,30],errorX:[200,30]},{x:170,y:300,errorY:[10,20],errorX:20},{x:140,y:250,errorY:30,errorX:20},{x:150,y:400,errorY:[20,300],errorX:30},{x:110,y:280,errorY:40,errorX:40}];return r.createElement(p,{width:400,height:400,margin:{top:20,right:20,bottom:20,left:20},layout:o.layout},r.createElement(d,null),r.createElement(c,{type:"number",dataKey:"x",name:"stature",unit:"cm",allowDataOverflow:o.allowDataOverflow}),r.createElement(y,{type:"number",dataKey:"y",name:"weight",unit:"kg",allowDataOverflow:o.allowDataOverflow}),r.createElement(h,{name:"A school",data:s,fill:"blue"},r.createElement(e,{dataKey:"errorX",width:2,strokeWidth:3,stroke:"green",direction:"x"}),r.createElement(e,{dataKey:"errorY",width:4,strokeWidth:2,stroke:"red",direction:"y"})),r.createElement(u,{cursor:{strokeDasharray:"3 3"}}))},args:l(m),parameters:{controls:{include:["layout","allowDataOverflow"]}}},Dr=["WithErrorBarsAndExtendedDomain"];var a,n,i;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
