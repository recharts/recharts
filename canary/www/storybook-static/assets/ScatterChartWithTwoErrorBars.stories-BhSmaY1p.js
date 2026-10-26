import{R as r}from"./iframe-D3XpTouC.js";import{g as l}from"./utils-ePvtT4un.js";import{S as m}from"./ScatterChartArgs-BpaDSsyX.js";import{S as p}from"./ScatterChart-DeiPTD8n.js";import{C as d}from"./CartesianGrid-BLCGW2dx.js";import{X as c}from"./XAxis-gmDKzFC9.js";import{Y as y}from"./YAxis-FbLbV3M6.js";import{S as h}from"./Scatter-9MVkFrlH.js";import{E as e}from"./ErrorBar-DNSaJ67d.js";import{T as u}from"./Tooltip-DAiSkgfh.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-sYdg_-aY.js";import"./zIndexSlice-nnBmRw_5.js";import"./get-cF5BDHN6.js";import"./resolveDefaultProps-DlZqYg6P.js";import"./throttle-B0HYRial.js";import"./index-DHhgNiiB.js";import"./index-DTv10PLm.js";import"./axisSelectors-DLLpPrx1.js";import"./polarAxisSelectors-C3Rr3kNg.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-k39_yHUv.js";import"./index-CSVEFX3e.js";import"./index-nr8cRX1L.js";import"./renderedTicksSlice-BzU7dsOB.js";import"./index-BIeNSbTD.js";import"./CartesianChart-DoW6CJ46.js";import"./chartDataContext-BRwGn-1-.js";import"./CategoricalChart-C7DNEYYD.js";import"./CartesianAxis-DzZUDYVE.js";import"./Layer-D4bzgnBD.js";import"./Text-B7A0Zl2p.js";import"./pageBackground-BB2_LToU.js";import"./useId-2hxDKCu1.js";import"./ZIndexLayer-DtbAElLD.js";import"./Label-C-8XXSAc.js";import"./dataEntryStyles-lBmwmj-v.js";import"./types-BmT-ScX1.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./activeStyles-CSOHGyzI.js";import"./useAnimationId-SaX7cxM4.js";import"./Curve-CryrSNFf.js";import"./step-Bc6BB28K.js";import"./path-DyVhHtw_.js";import"./tooltipContext-CoMR-16p.js";import"./Symbols-5OvotseX.js";import"./symbol-B5dDdDnm.js";import"./ActiveShapeUtils-DcUYSyXw.js";import"./RegisterGraphicalItemId-BJwNChl_.js";import"./ErrorBarContext-6Mnl7Bdn.js";import"./SetGraphicalItem-9ERbeIZR.js";import"./useEffectiveDataKey-BFS5aOAm.js";import"./CSSTransitionAnimate-8WTDxXH1.js";import"./util-Dxo8gN5i.js";import"./useElementOffset-BeSSiUDx.js";import"./uniqBy-CG2_XuPj.js";import"./iteratee-CyT4hR1F.js";import"./isArguments-yB-y1yaH.js";import"./Cross-BUhjZEN3.js";import"./Rectangle-pIaUnyaB.js";import"./Sector-DmvTpGH_.js";const Sr={component:p,argTypes:m,docs:{autodocs:!1}},t={render:o=>{const s=[{x:100,y:200,errorY:30,errorX:30},{x:120,y:100,errorY:[500,30],errorX:[200,30]},{x:170,y:300,errorY:[10,20],errorX:20},{x:140,y:250,errorY:30,errorX:20},{x:150,y:400,errorY:[20,300],errorX:30},{x:110,y:280,errorY:40,errorX:40}];return r.createElement(p,{width:400,height:400,margin:{top:20,right:20,bottom:20,left:20},layout:o.layout},r.createElement(d,null),r.createElement(c,{type:"number",dataKey:"x",name:"stature",unit:"cm",allowDataOverflow:o.allowDataOverflow}),r.createElement(y,{type:"number",dataKey:"y",name:"weight",unit:"kg",allowDataOverflow:o.allowDataOverflow}),r.createElement(h,{name:"A school",data:s,fill:"blue"},r.createElement(e,{dataKey:"errorX",width:2,strokeWidth:3,stroke:"green",direction:"x"}),r.createElement(e,{dataKey:"errorY",width:4,strokeWidth:2,stroke:"red",direction:"y"})),r.createElement(u,{cursor:{strokeDasharray:"3 3"}}))},args:l(m),parameters:{controls:{include:["layout","allowDataOverflow"]}}},Dr=["WithErrorBarsAndExtendedDomain"];var a,n,i;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
