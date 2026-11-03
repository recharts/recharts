import{R as r}from"./iframe-Dveh6XC4.js";import{g as l}from"./utils-ePvtT4un.js";import{S as m}from"./ScatterChartArgs-BpaDSsyX.js";import{S as p}from"./ScatterChart-UqfBLleb.js";import{C as d}from"./CartesianGrid-DvW8Geav.js";import{X as c}from"./XAxis-CRKEYqOq.js";import{Y as y}from"./YAxis-w9pVccwz.js";import{S as h}from"./Scatter-8Kwkt4Lf.js";import{E as e}from"./ErrorBar-3EYQY8e6.js";import{T as u}from"./Tooltip-CFGvSGFT.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-BjJrVVo_.js";import"./zIndexSlice-CHGKLvUt.js";import"./get-cF5BDHN6.js";import"./resolveDefaultProps-DuxVF1QF.js";import"./throttle-CRxbwEvt.js";import"./index-Cbmt_wIf.js";import"./index-CG-oseCj.js";import"./axisSelectors-BNJiRWtc.js";import"./polarAxisSelectors-DOXrMTYm.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-XJHyjNta.js";import"./index-BC5sf_5c.js";import"./index-uMZJip00.js";import"./renderedTicksSlice-Cw-0pUCw.js";import"./index-Fu0XORfS.js";import"./fillDefinitions-BC_l7gtK.js";import"./CartesianChart-DPPEX1sp.js";import"./ZIndexPortal-yJs_hgSa.js";import"./CategoricalChart-BBllviTF.js";import"./CartesianAxis-DUZQMGP0.js";import"./Layer-BJKthE-c.js";import"./Text-DDi8tnpk.js";import"./DOMUtils-BsJwiviE.js";import"./ZIndexLayer-DbxRiqCY.js";import"./Label-Vwsx_sp3.js";import"./types-XJ7-EVuf.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./LabelList-C0azlQgx.js";import"./activeStyles-C0UNB_bG.js";import"./useAnimationId-ClkvXH7X.js";import"./dataEntryStyles-CX9qr7B-.js";import"./Curve-BFn8Gc1Y.js";import"./step-COK9gonL.js";import"./path-DyVhHtw_.js";import"./tooltipContext-CwdmFdSB.js";import"./Symbols-QXbi9vzZ.js";import"./symbol-CTWslb94.js";import"./ActiveShapeUtils-CXVbuCLN.js";import"./ErrorBarContext-DkBQ5rXz.js";import"./SetGraphicalItem-B2n4iSWY.js";import"./useEffectiveDataKey-CghzYeW7.js";import"./CSSTransitionAnimate-B_BihdQs.js";import"./util-Dxo8gN5i.js";import"./useElementOffset-Diqs6aNv.js";import"./uniqBy-r-8_JOan.js";import"./iteratee-F2t8nio4.js";import"./isArguments-yB-y1yaH.js";import"./Cross-CA-OBfX-.js";import"./Rectangle-L-kKC_mf.js";import"./Sector-DPSFgAWf.js";const Sr={component:p,argTypes:m,docs:{autodocs:!1}},t={render:o=>{const s=[{x:100,y:200,errorY:30,errorX:30},{x:120,y:100,errorY:[500,30],errorX:[200,30]},{x:170,y:300,errorY:[10,20],errorX:20},{x:140,y:250,errorY:30,errorX:20},{x:150,y:400,errorY:[20,300],errorX:30},{x:110,y:280,errorY:40,errorX:40}];return r.createElement(p,{width:400,height:400,margin:{top:20,right:20,bottom:20,left:20},layout:o.layout},r.createElement(d,null),r.createElement(c,{type:"number",dataKey:"x",name:"stature",unit:"cm",allowDataOverflow:o.allowDataOverflow}),r.createElement(y,{type:"number",dataKey:"y",name:"weight",unit:"kg",allowDataOverflow:o.allowDataOverflow}),r.createElement(h,{name:"A school",data:s,fill:"blue"},r.createElement(e,{dataKey:"errorX",width:2,strokeWidth:3,stroke:"green",direction:"x"}),r.createElement(e,{dataKey:"errorY",width:4,strokeWidth:2,stroke:"red",direction:"y"})),r.createElement(u,{cursor:{strokeDasharray:"3 3"}}))},args:l(m),parameters:{controls:{include:["layout","allowDataOverflow"]}}},Dr=["WithErrorBarsAndExtendedDomain"];var a,n,i;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
