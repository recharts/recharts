import{R as r}from"./iframe-DVTI7asB.js";import{g as l}from"./utils-ePvtT4un.js";import{S as m}from"./ScatterChartArgs-BpaDSsyX.js";import{S as p}from"./ScatterChart-COTNpVrg.js";import{C as d}from"./CartesianGrid-DnLnRX8G.js";import{X as c}from"./XAxis-B8cGJGN2.js";import{Y as y}from"./YAxis-B0eGMGZi.js";import{S as h}from"./Scatter-wHWMQNgZ.js";import{E as e}from"./ErrorBar-DUqgMs6j.js";import{T as u}from"./Tooltip-B8SR9jQq.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-0XjKEbs7.js";import"./zIndexSlice-VrE65LwJ.js";import"./throttle-BWtzmmFP.js";import"./index-CBeOLa_K.js";import"./index-x2lkdleK.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-Brh9VJsQ.js";import"./isWellBehavedNumber-D3Ee2F4O.js";import"./PolarUtils-CTnnDHZv.js";import"./axisSelectors-BpjWm-Lu.js";import"./d3-scale-CTgt3q-T.js";import"./index-Dxlfd81A.js";import"./index-BME0E5Ea.js";import"./renderedTicksSlice-Dm0DClKF.js";import"./index-B1fyioQZ.js";import"./CartesianChart-TlzU5q-y.js";import"./chartDataContext-5tueJF_N.js";import"./CategoricalChart-DDdawTFM.js";import"./CartesianAxis-B7c0SFW_.js";import"./Layer-CKEADoVi.js";import"./Text-XQRKlDnX.js";import"./DOMUtils--MlKRlg5.js";import"./useId-D-envRVe.js";import"./useBackwardsCompatibleTheme-CTYeO19p.js";import"./Label-C5sDum5_.js";import"./ZIndexLayer-MKguLFMj.js";import"./types-BbyfnRjt.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./AnimatedItems-DqWEvMcn.js";import"./useAnimationId-CwgRschT.js";import"./Curve-ad1Bykff.js";import"./step-BVPKFfuD.js";import"./path-DyVhHtw_.js";import"./tooltipContext-BxZtXLsC.js";import"./Symbols-BiOVdGD0.js";import"./symbol-ESR152s0.js";import"./ActiveShapeUtils-DaFsN-Ec.js";import"./RegisterGraphicalItemId-BCvN7nSY.js";import"./ErrorBarContext-BzIynu6X.js";import"./GraphicalItemClipPath-DpsQ0BRT.js";import"./SetGraphicalItem-Co1iXM8q.js";import"./useGraphicalItemIdentity-Bs2hvtnA.js";import"./dataEntryStyles-Cddtf00Q.js";import"./CSSTransitionAnimate-CEhu2ijP.js";import"./util-Dxo8gN5i.js";import"./useElementOffset-rrBJTLuZ.js";import"./uniqBy-BgA3F1Vh.js";import"./iteratee-BvFp8pOf.js";import"./Cross-BhJTE66h.js";import"./Rectangle-DR9uOGHN.js";import"./Sector-C58FB1jO.js";const Dr={component:p,argTypes:m,docs:{autodocs:!1}},t={render:o=>{const s=[{x:100,y:200,errorY:30,errorX:30},{x:120,y:100,errorY:[500,30],errorX:[200,30]},{x:170,y:300,errorY:[10,20],errorX:20},{x:140,y:250,errorY:30,errorX:20},{x:150,y:400,errorY:[20,300],errorX:30},{x:110,y:280,errorY:40,errorX:40}];return r.createElement(p,{width:400,height:400,margin:{top:20,right:20,bottom:20,left:20},layout:o.layout},r.createElement(d,null),r.createElement(c,{type:"number",dataKey:"x",name:"stature",unit:"cm",allowDataOverflow:o.allowDataOverflow}),r.createElement(y,{type:"number",dataKey:"y",name:"weight",unit:"kg",allowDataOverflow:o.allowDataOverflow}),r.createElement(h,{name:"A school",data:s,fill:"blue"},r.createElement(e,{dataKey:"errorX",width:2,strokeWidth:3,stroke:"green",direction:"x"}),r.createElement(e,{dataKey:"errorY",width:4,strokeWidth:2,stroke:"red",direction:"y"})),r.createElement(u,{cursor:{strokeDasharray:"3 3"}}))},args:l(m),parameters:{controls:{include:["layout","allowDataOverflow"]}}},Or=["WithErrorBarsAndExtendedDomain"];var a,n,i;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
}`,...(i=(n=t.parameters)==null?void 0:n.docs)==null?void 0:i.source}}};export{t as WithErrorBarsAndExtendedDomain,Or as __namedExportsOrder,Dr as default};
