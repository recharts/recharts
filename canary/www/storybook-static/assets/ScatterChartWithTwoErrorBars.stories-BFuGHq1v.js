import{R as r}from"./iframe-GEWoEgYU.js";import{g as l}from"./utils-ePvtT4un.js";import{S as m}from"./ScatterChartArgs-DVckGNEz.js";import{S as p}from"./ScatterChart-JkVkrVRY.js";import{C as d}from"./CartesianGrid-ifwHriUt.js";import{X as c}from"./XAxis-BNnHyyR6.js";import{Y as y}from"./YAxis-Do1ezRev.js";import{S as h}from"./Scatter-DsZJsJaF.js";import{E as e}from"./ErrorBar-CLKqcl1Q.js";import{T as u}from"./Tooltip-BAVFGGcA.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-DUhcDKTP.js";import"./zIndexSlice-m50y9bt7.js";import"./throttle-DQWr01n7.js";import"./index-jF3_l_DR.js";import"./index-BmM7Rlr-.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-DpAlDskP.js";import"./isWellBehavedNumber-Btl-gf2F.js";import"./PolarUtils-CTnnDHZv.js";import"./axisSelectors-3BecUZh2.js";import"./d3-scale-DtRX2T9P.js";import"./index-BTro793U.js";import"./index-BkcefAXR.js";import"./renderedTicksSlice-Cm6mh1F9.js";import"./index-xNr63OGc.js";import"./CartesianChart-D7rp_ejt.js";import"./chartDataContext-BO36yNvS.js";import"./CategoricalChart-B9B91N22.js";import"./CartesianAxis-DN5o5nX3.js";import"./Layer-B28G2hIY.js";import"./Text-DisRgGpM.js";import"./DOMUtils-_s9ELKXC.js";import"./useId-CSqY47p_.js";import"./useBackwardsCompatibleTheme-CDx1dLi4.js";import"./Label-BrqW8KDJ.js";import"./ZIndexLayer-UqU4qgkO.js";import"./types-BibJ3Nmg.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./AnimatedItems-BGlMg_gS.js";import"./useAnimationId-DCtzAZ-Q.js";import"./Curve-BIh3ht4a.js";import"./step-CWzaE13R.js";import"./path-DyVhHtw_.js";import"./tooltipContext-Nw3ArW6V.js";import"./Symbols-BS2jIWeJ.js";import"./symbol-CcpcFect.js";import"./ActiveShapeUtils-Bfg_gjnw.js";import"./RegisterGraphicalItemId-oyNCw2MY.js";import"./ErrorBarContext-n9OrelsP.js";import"./GraphicalItemClipPath-CQvdMfqc.js";import"./SetGraphicalItem-CiQmIVfI.js";import"./useGraphicalItemIdentity-CuKg9Fcq.js";import"./CSSTransitionAnimate-C3Y8ZIHU.js";import"./util-Dxo8gN5i.js";import"./useElementOffset-sZ_quz8S.js";import"./uniqBy-D4LQ95gw.js";import"./iteratee-uHmSd5oe.js";import"./Cross-BeFe6Kls.js";import"./Rectangle-CjQE5fD5.js";import"./Sector-DKArG2GN.js";const Sr={component:p,argTypes:m,docs:{autodocs:!1}},t={render:o=>{const s=[{x:100,y:200,errorY:30,errorX:30},{x:120,y:100,errorY:[500,30],errorX:[200,30]},{x:170,y:300,errorY:[10,20],errorX:20},{x:140,y:250,errorY:30,errorX:20},{x:150,y:400,errorY:[20,300],errorX:30},{x:110,y:280,errorY:40,errorX:40}];return r.createElement(p,{width:400,height:400,margin:{top:20,right:20,bottom:20,left:20},layout:o.layout},r.createElement(d,null),r.createElement(c,{type:"number",dataKey:"x",name:"stature",unit:"cm",allowDataOverflow:o.allowDataOverflow}),r.createElement(y,{type:"number",dataKey:"y",name:"weight",unit:"kg",allowDataOverflow:o.allowDataOverflow}),r.createElement(h,{name:"A school",data:s,fill:"blue"},r.createElement(e,{dataKey:"errorX",width:2,strokeWidth:3,stroke:"green",direction:"x"}),r.createElement(e,{dataKey:"errorY",width:4,strokeWidth:2,stroke:"red",direction:"y"})),r.createElement(u,{cursor:{strokeDasharray:"3 3"}}))},args:l(m),parameters:{controls:{include:["layout","allowDataOverflow"]}}},Dr=["WithErrorBarsAndExtendedDomain"];var a,n,i;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
