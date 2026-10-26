import{R as r}from"./iframe-CrWtoPAX.js";import{g as l}from"./utils-ePvtT4un.js";import{S as m}from"./ScatterChartArgs-BpaDSsyX.js";import{S as p}from"./ScatterChart-CfKedhQ7.js";import{C as d}from"./CartesianGrid-CHkEHHdY.js";import{X as c}from"./XAxis-6CbcM3Se.js";import{Y as y}from"./YAxis-xU-pi3Qa.js";import{S as h}from"./Scatter-kL8AG2QB.js";import{E as e}from"./ErrorBar-BpTNO5_4.js";import{T as u}from"./Tooltip-CZyZKcRt.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-MJk6C7sG.js";import"./zIndexSlice-DMPrIjTD.js";import"./get-cF5BDHN6.js";import"./resolveDefaultProps-Cl_vq3lE.js";import"./throttle-ByP8enHW.js";import"./index-CQ_XqvtJ.js";import"./index-D6uwIsxD.js";import"./axisSelectors-B0-aB2Y5.js";import"./polarAxisSelectors-DnnAPhgk.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-Pq_E9xXF.js";import"./index-gHXYJ75j.js";import"./index-BbFlaPL7.js";import"./renderedTicksSlice-CetFWcek.js";import"./index-IYAiXkdd.js";import"./CartesianChart--l1pMg4t.js";import"./chartDataContext-BATi9LfG.js";import"./CategoricalChart-CRgz8QMs.js";import"./CartesianAxis-D6bXO0ci.js";import"./Layer-Bc-8Aj4A.js";import"./Text-CyQrUZZg.js";import"./pageBackground-B_OyKJz4.js";import"./useId-CevBbkmx.js";import"./ZIndexLayer-mnQ0PTjZ.js";import"./Label-9ANtnaX1.js";import"./dataEntryStyles-CcroDQaP.js";import"./types-sEVDNypc.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./activeStyles-D8qfovJq.js";import"./useAnimationId-DIVMX3ZS.js";import"./Curve-QjHrFrYT.js";import"./step-xie03U5d.js";import"./path-DyVhHtw_.js";import"./tooltipContext-DgMOrrVJ.js";import"./Symbols-BmauIne2.js";import"./symbol-C4lC381C.js";import"./ActiveShapeUtils-BHD3PSWQ.js";import"./RegisterGraphicalItemId-DIduc0Gm.js";import"./ErrorBarContext-BGhx7PeS.js";import"./SetGraphicalItem-B4ZcrH9I.js";import"./useEffectiveDataKey-DRFzjTt4.js";import"./CSSTransitionAnimate-DqjvdQEs.js";import"./util-Dxo8gN5i.js";import"./useElementOffset-VqEKxajU.js";import"./uniqBy-CQj06pFN.js";import"./iteratee-DXOgM9Ce.js";import"./isArguments-yB-y1yaH.js";import"./Cross-Nl2ZcA6z.js";import"./Rectangle-CNbdX1IY.js";import"./Sector-D_zKCeqT.js";const Sr={component:p,argTypes:m,docs:{autodocs:!1}},t={render:o=>{const s=[{x:100,y:200,errorY:30,errorX:30},{x:120,y:100,errorY:[500,30],errorX:[200,30]},{x:170,y:300,errorY:[10,20],errorX:20},{x:140,y:250,errorY:30,errorX:20},{x:150,y:400,errorY:[20,300],errorX:30},{x:110,y:280,errorY:40,errorX:40}];return r.createElement(p,{width:400,height:400,margin:{top:20,right:20,bottom:20,left:20},layout:o.layout},r.createElement(d,null),r.createElement(c,{type:"number",dataKey:"x",name:"stature",unit:"cm",allowDataOverflow:o.allowDataOverflow}),r.createElement(y,{type:"number",dataKey:"y",name:"weight",unit:"kg",allowDataOverflow:o.allowDataOverflow}),r.createElement(h,{name:"A school",data:s,fill:"blue"},r.createElement(e,{dataKey:"errorX",width:2,strokeWidth:3,stroke:"green",direction:"x"}),r.createElement(e,{dataKey:"errorY",width:4,strokeWidth:2,stroke:"red",direction:"y"})),r.createElement(u,{cursor:{strokeDasharray:"3 3"}}))},args:l(m),parameters:{controls:{include:["layout","allowDataOverflow"]}}},Dr=["WithErrorBarsAndExtendedDomain"];var a,n,i;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
