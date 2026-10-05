import{R as r}from"./iframe-BfMFh77x.js";import{g as l}from"./utils-ePvtT4un.js";import{S as m}from"./ScatterChartArgs-BpaDSsyX.js";import{S as p}from"./ScatterChart-B5AvcF63.js";import{C as d}from"./CartesianGrid-Bl5FKjDT.js";import{X as c}from"./XAxis-k9LTsr7W.js";import{Y as y}from"./YAxis-KlCpPZpc.js";import{S as h}from"./Scatter-DxstTrOc.js";import{E as e}from"./ErrorBar-jBLH1GMe.js";import{T as u}from"./Tooltip-BFWrEaqv.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-C0SS5kvR.js";import"./zIndexSlice-Cztpg_sh.js";import"./throttle-BwatAsiE.js";import"./index-DROOMzyH.js";import"./index-B4iccN4g.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-B4G3dz_P.js";import"./isWellBehavedNumber-MC_-4Sz8.js";import"./PolarUtils-CTnnDHZv.js";import"./axisSelectors-DoWmjLIh.js";import"./d3-scale-DZONVDEO.js";import"./index-D4qjDIL1.js";import"./index-3-96IZAO.js";import"./renderedTicksSlice-BnDYFPsi.js";import"./index-DX1BsebK.js";import"./CartesianChart-nK5Jsuas.js";import"./chartDataContext-icTGDudH.js";import"./CategoricalChart-CD0F4PlX.js";import"./CartesianAxis-BFOn3Dtf.js";import"./Layer-ckuwG36h.js";import"./Text-DEsVSfke.js";import"./DOMUtils-CakfvwTP.js";import"./useId-DVFEoxf5.js";import"./useBackwardsCompatibleTheme-DnqD941W.js";import"./Label-D2fJdiFl.js";import"./ZIndexLayer-DqwLDNFX.js";import"./types-Ccphz-V5.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./AnimatedItems-DBTQ-7wC.js";import"./useAnimationId-DwVIllah.js";import"./Curve-QoN7k3_4.js";import"./step-DXJqGD70.js";import"./path-DyVhHtw_.js";import"./tooltipContext-CccmVbNZ.js";import"./Symbols-DKR4yZKi.js";import"./symbol-C9lvVV-5.js";import"./ActiveShapeUtils-PP0TbsoH.js";import"./RegisterGraphicalItemId-CyLRpybL.js";import"./ErrorBarContext-CANgFbqT.js";import"./GraphicalItemClipPath-D-McSxMj.js";import"./SetGraphicalItem-BkQyU4p0.js";import"./useGraphicalItemIdentity-CFRBZ7j4.js";import"./dataEntryStyles-D_xHI-do.js";import"./CSSTransitionAnimate-Dwojm6-z.js";import"./util-Dxo8gN5i.js";import"./useElementOffset-CVbgoa7K.js";import"./uniqBy-ZtJmq_p1.js";import"./iteratee-Blwx8XDY.js";import"./Cross-DbVxZsyn.js";import"./Rectangle-r3IYiQGz.js";import"./Sector-DFGMbU-S.js";const Dr={component:p,argTypes:m,docs:{autodocs:!1}},t={render:o=>{const s=[{x:100,y:200,errorY:30,errorX:30},{x:120,y:100,errorY:[500,30],errorX:[200,30]},{x:170,y:300,errorY:[10,20],errorX:20},{x:140,y:250,errorY:30,errorX:20},{x:150,y:400,errorY:[20,300],errorX:30},{x:110,y:280,errorY:40,errorX:40}];return r.createElement(p,{width:400,height:400,margin:{top:20,right:20,bottom:20,left:20},layout:o.layout},r.createElement(d,null),r.createElement(c,{type:"number",dataKey:"x",name:"stature",unit:"cm",allowDataOverflow:o.allowDataOverflow}),r.createElement(y,{type:"number",dataKey:"y",name:"weight",unit:"kg",allowDataOverflow:o.allowDataOverflow}),r.createElement(h,{name:"A school",data:s,fill:"blue"},r.createElement(e,{dataKey:"errorX",width:2,strokeWidth:3,stroke:"green",direction:"x"}),r.createElement(e,{dataKey:"errorY",width:4,strokeWidth:2,stroke:"red",direction:"y"})),r.createElement(u,{cursor:{strokeDasharray:"3 3"}}))},args:l(m),parameters:{controls:{include:["layout","allowDataOverflow"]}}},Or=["WithErrorBarsAndExtendedDomain"];var a,n,i;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
