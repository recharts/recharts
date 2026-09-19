import{R as r}from"./iframe-Bo_zsOWR.js";import{g as l}from"./utils-ePvtT4un.js";import{S as m}from"./ScatterChartArgs-BpaDSsyX.js";import{S as p}from"./ScatterChart-C3_LZChW.js";import{C as d}from"./CartesianGrid-Co37BqrF.js";import{X as c}from"./XAxis-D98tl-gx.js";import{Y as y}from"./YAxis-CKvuzz2c.js";import{S as h}from"./Scatter-CAGeHklZ.js";import{E as e}from"./ErrorBar-Bu4nMXJU.js";import{T as u}from"./Tooltip-CBfeQ_-p.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-DXOTGCmH.js";import"./zIndexSlice-OHt7JoW7.js";import"./throttle-BqQSOARz.js";import"./index-BFt4SfZr.js";import"./index-PR_8Seu8.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-BUDDeE56.js";import"./isWellBehavedNumber-DciPVP_A.js";import"./PolarUtils-CTnnDHZv.js";import"./axisSelectors-CoIK-Kuy.js";import"./d3-scale-CKJS4wTS.js";import"./index-krRAv2GK.js";import"./index-Mut52yxE.js";import"./renderedTicksSlice-CdFXeG0P.js";import"./index-DviWxMqn.js";import"./CartesianChart-CzEQA5tK.js";import"./chartDataContext-Cxr8uE5y.js";import"./CategoricalChart-fHgXn9UL.js";import"./CartesianAxis-CKvATVWA.js";import"./Layer-CAovhaI5.js";import"./Text-bwywBWWq.js";import"./DOMUtils-Bc-kV__a.js";import"./useId-DYywqoqR.js";import"./useBackwardsCompatibleTheme-Qf0ZXpAz.js";import"./Label-9TZrIdzh.js";import"./ZIndexLayer-BMSvUtDW.js";import"./types-BNv_Hlvb.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./AnimatedItems-Ctbn0EH3.js";import"./useAnimationId-D_pJ9jTl.js";import"./Curve-BhTc2Eo1.js";import"./step-CUJcIDHf.js";import"./path-DyVhHtw_.js";import"./tooltipContext-RpjNvuhP.js";import"./Symbols-BkWJsRQk.js";import"./symbol-C2HV_RAC.js";import"./ActiveShapeUtils-Bp87fl58.js";import"./RegisterGraphicalItemId-Cd8-cCZH.js";import"./ErrorBarContext-Dd08ywVQ.js";import"./GraphicalItemClipPath-Dbz5b6yM.js";import"./SetGraphicalItem-Drf2tYBV.js";import"./useGraphicalItemIdentity-jZjWs-3I.js";import"./CSSTransitionAnimate-Cg8IRa3a.js";import"./util-Dxo8gN5i.js";import"./useElementOffset-BUX1YZEU.js";import"./uniqBy-DNoDnVLW.js";import"./iteratee-Bt5_-zpO.js";import"./Cross-DWRwsjTl.js";import"./Rectangle-BjhkbRaf.js";import"./Sector-Ba2-1_MP.js";const Sr={component:p,argTypes:m,docs:{autodocs:!1}},t={render:o=>{const s=[{x:100,y:200,errorY:30,errorX:30},{x:120,y:100,errorY:[500,30],errorX:[200,30]},{x:170,y:300,errorY:[10,20],errorX:20},{x:140,y:250,errorY:30,errorX:20},{x:150,y:400,errorY:[20,300],errorX:30},{x:110,y:280,errorY:40,errorX:40}];return r.createElement(p,{width:400,height:400,margin:{top:20,right:20,bottom:20,left:20},layout:o.layout},r.createElement(d,null),r.createElement(c,{type:"number",dataKey:"x",name:"stature",unit:"cm",allowDataOverflow:o.allowDataOverflow}),r.createElement(y,{type:"number",dataKey:"y",name:"weight",unit:"kg",allowDataOverflow:o.allowDataOverflow}),r.createElement(h,{name:"A school",data:s,fill:"blue"},r.createElement(e,{dataKey:"errorX",width:2,strokeWidth:3,stroke:"green",direction:"x"}),r.createElement(e,{dataKey:"errorY",width:4,strokeWidth:2,stroke:"red",direction:"y"})),r.createElement(u,{cursor:{strokeDasharray:"3 3"}}))},args:l(m),parameters:{controls:{include:["layout","allowDataOverflow"]}}},Dr=["WithErrorBarsAndExtendedDomain"];var a,n,i;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
