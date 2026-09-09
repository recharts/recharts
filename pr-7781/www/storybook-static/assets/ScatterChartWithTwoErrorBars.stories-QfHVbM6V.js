import{R as r}from"./iframe-CS_l3HPs.js";import{g as l}from"./utils-ePvtT4un.js";import{S as m}from"./ScatterChartArgs-DVckGNEz.js";import{S as p}from"./ScatterChart-BzktQlbr.js";import{C as d}from"./CartesianGrid-CrAmDQR5.js";import{X as c}from"./XAxis-VVNKgX_Z.js";import{Y as y}from"./YAxis-CfLQ1gwS.js";import{S as h}from"./Scatter-B8DDgdoV.js";import{E as e}from"./ErrorBar-UA4DCwAO.js";import{T as u}from"./Tooltip-ROqQkToA.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-CLBKD2Mb.js";import"./zIndexSlice-DOZPSD3i.js";import"./throttle-BXJlRBBH.js";import"./index-BYA5dZMw.js";import"./index-Ao7KBTFd.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-CgtyltQG.js";import"./isWellBehavedNumber-BSl6HisW.js";import"./PolarUtils-CTnnDHZv.js";import"./axisSelectors-wY7xrwqz.js";import"./d3-scale-DavGDXTG.js";import"./index-DjQwq7Uw.js";import"./index-7kMAhgqw.js";import"./renderedTicksSlice-Bg0DMs51.js";import"./index-P2WiDCym.js";import"./CartesianChart-CDuUV78h.js";import"./chartDataContext-Ud-Nnz0C.js";import"./CategoricalChart-DOE0boxd.js";import"./CartesianAxis-DcHbl7Yp.js";import"./Layer-ClmpeZAQ.js";import"./Text-Cft38Vb6.js";import"./DOMUtils-Ufje3btQ.js";import"./useId-DZgN2ji4.js";import"./useBackwardsCompatibleTheme-D2bkWM8o.js";import"./Label-CLB3gtSD.js";import"./ZIndexLayer-DIN_R5pI.js";import"./types-Bij1NlAO.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./AnimatedItems-CucVzI_L.js";import"./useAnimationId-BcraNq1p.js";import"./Curve-Bkeet_Vy.js";import"./step-D4hiIBbL.js";import"./path-DyVhHtw_.js";import"./tooltipContext-nEVLmucK.js";import"./Symbols-BmB__XbX.js";import"./symbol-K873wObj.js";import"./ActiveShapeUtils-Bf2foGWX.js";import"./RegisterGraphicalItemId-Cqgmus52.js";import"./ErrorBarContext-CU42u084.js";import"./GraphicalItemClipPath-CdBhe4zV.js";import"./SetGraphicalItem-HfAHgXq7.js";import"./useGraphicalItemIdentity-CWB4Q7Cn.js";import"./CSSTransitionAnimate-Ch82ZIIO.js";import"./util-Dxo8gN5i.js";import"./useElementOffset-DFm-Hwrm.js";import"./uniqBy-DAztU44K.js";import"./iteratee-CgfSsQVK.js";import"./Cross-BP5n_dYi.js";import"./Rectangle-DPMGAmez.js";import"./Sector-CvZ-EAmB.js";const Sr={component:p,argTypes:m,docs:{autodocs:!1}},t={render:o=>{const s=[{x:100,y:200,errorY:30,errorX:30},{x:120,y:100,errorY:[500,30],errorX:[200,30]},{x:170,y:300,errorY:[10,20],errorX:20},{x:140,y:250,errorY:30,errorX:20},{x:150,y:400,errorY:[20,300],errorX:30},{x:110,y:280,errorY:40,errorX:40}];return r.createElement(p,{width:400,height:400,margin:{top:20,right:20,bottom:20,left:20},layout:o.layout},r.createElement(d,null),r.createElement(c,{type:"number",dataKey:"x",name:"stature",unit:"cm",allowDataOverflow:o.allowDataOverflow}),r.createElement(y,{type:"number",dataKey:"y",name:"weight",unit:"kg",allowDataOverflow:o.allowDataOverflow}),r.createElement(h,{name:"A school",data:s,fill:"blue"},r.createElement(e,{dataKey:"errorX",width:2,strokeWidth:3,stroke:"green",direction:"x"}),r.createElement(e,{dataKey:"errorY",width:4,strokeWidth:2,stroke:"red",direction:"y"})),r.createElement(u,{cursor:{strokeDasharray:"3 3"}}))},args:l(m),parameters:{controls:{include:["layout","allowDataOverflow"]}}},Dr=["WithErrorBarsAndExtendedDomain"];var a,n,i;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
