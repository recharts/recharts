import{R as r}from"./iframe-KBGw0lyx.js";import{g as l}from"./utils-ePvtT4un.js";import{S as m}from"./ScatterChartArgs-BpaDSsyX.js";import{S as p}from"./ScatterChart-lOMGFMcr.js";import{C as d}from"./CartesianGrid-DDCTjppq.js";import{X as c}from"./XAxis-ok9FfAxX.js";import{Y as y}from"./YAxis-Bs_I5rsO.js";import{S as h}from"./Scatter-BseSNli8.js";import{E as e}from"./ErrorBar-BC8-O2gG.js";import{T as u}from"./Tooltip-DP-3tpm7.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-CcktegzB.js";import"./zIndexSlice-C-xeYs44.js";import"./get-cF5BDHN6.js";import"./resolveDefaultProps-kFtONSvK.js";import"./throttle-BjGPoFhQ.js";import"./index-Db-AaMwI.js";import"./index-EF7AV5IJ.js";import"./axisSelectors-CEjenqk6.js";import"./polarAxisSelectors-BG_XMkul.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-CcHRZEud.js";import"./index-DVqUNpUf.js";import"./index-BSom5vyx.js";import"./renderedTicksSlice-DZXVMt_J.js";import"./index-DTImZAxQ.js";import"./fillDefinitions-CJnfgvsJ.js";import"./CartesianChart-DKU75UBR.js";import"./ZIndexPortal-CLKXKALr.js";import"./CategoricalChart-ByWn7DI3.js";import"./CartesianAxis-ZwQJNcj_.js";import"./Layer-Du8JdPXM.js";import"./Text-CUmSOGFL.js";import"./DOMUtils-plVJ3xwD.js";import"./ZIndexLayer-BNAbNRIQ.js";import"./Label-B98IZvVF.js";import"./types-BKfndQQ3.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./LabelList-DauBxbTi.js";import"./activeStyles-C4Umy--5.js";import"./useAnimationId-BAlrP4Yc.js";import"./dataEntryStyles-DZFUHLoQ.js";import"./Curve-r2B0eutN.js";import"./step-BbiIrKZ6.js";import"./path-DyVhHtw_.js";import"./tooltipContext-WqOTR5lK.js";import"./Symbols-BD33ILFX.js";import"./symbol-BJV2xy5y.js";import"./ActiveShapeUtils-CKM6jbR2.js";import"./ErrorBarContext-CuOMSbvd.js";import"./SetGraphicalItem-eP4w3gdT.js";import"./useEffectiveDataKey-ycUHTwlw.js";import"./CSSTransitionAnimate-BjUUa14I.js";import"./util-Dxo8gN5i.js";import"./useElementOffset-BvetthWK.js";import"./uniqBy-T0ABjzXx.js";import"./iteratee-CiEcwEiU.js";import"./isArguments-yB-y1yaH.js";import"./Cross-BxQg94Oo.js";import"./Rectangle-D6IFr9AJ.js";import"./Sector-BaKJKGrn.js";const Sr={component:p,argTypes:m,docs:{autodocs:!1}},t={render:o=>{const s=[{x:100,y:200,errorY:30,errorX:30},{x:120,y:100,errorY:[500,30],errorX:[200,30]},{x:170,y:300,errorY:[10,20],errorX:20},{x:140,y:250,errorY:30,errorX:20},{x:150,y:400,errorY:[20,300],errorX:30},{x:110,y:280,errorY:40,errorX:40}];return r.createElement(p,{width:400,height:400,margin:{top:20,right:20,bottom:20,left:20},layout:o.layout},r.createElement(d,null),r.createElement(c,{type:"number",dataKey:"x",name:"stature",unit:"cm",allowDataOverflow:o.allowDataOverflow}),r.createElement(y,{type:"number",dataKey:"y",name:"weight",unit:"kg",allowDataOverflow:o.allowDataOverflow}),r.createElement(h,{name:"A school",data:s,fill:"blue"},r.createElement(e,{dataKey:"errorX",width:2,strokeWidth:3,stroke:"green",direction:"x"}),r.createElement(e,{dataKey:"errorY",width:4,strokeWidth:2,stroke:"red",direction:"y"})),r.createElement(u,{cursor:{strokeDasharray:"3 3"}}))},args:l(m),parameters:{controls:{include:["layout","allowDataOverflow"]}}},Dr=["WithErrorBarsAndExtendedDomain"];var a,n,i;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
