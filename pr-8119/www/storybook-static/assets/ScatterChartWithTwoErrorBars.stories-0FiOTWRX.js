import{R as r}from"./iframe-C3rzwJQL.js";import{g as l}from"./utils-ePvtT4un.js";import{S as m}from"./ScatterChartArgs-BpaDSsyX.js";import{S as p}from"./ScatterChart-CPjxYuGv.js";import{C as d}from"./CartesianGrid-B6Ohn97n.js";import{X as c}from"./XAxis-DiB8sdSh.js";import{Y as y}from"./YAxis-Bi88dWrW.js";import{S as h}from"./Scatter-B1XOpNQN.js";import{E as e}from"./ErrorBar-BRsILOkf.js";import{T as u}from"./Tooltip-2DujJhc4.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper--Ro5bVbm.js";import"./zIndexSlice-6U0v4l7r.js";import"./get-cF5BDHN6.js";import"./resolveDefaultProps-BMfVJcK1.js";import"./throttle-B7FABENa.js";import"./index-CqOvaYTW.js";import"./index-PmjQNdGh.js";import"./axisSelectors-_YduxGmH.js";import"./polarAxisSelectors-BUo1SW6c.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-C-_ks2ZK.js";import"./index-BmfKzQXT.js";import"./index-Bhn-1pm4.js";import"./renderedTicksSlice-D3LNjura.js";import"./index-Dht9kxea.js";import"./CartesianChart-DMkGZMTo.js";import"./ZIndexPortal-x0Q6q0h0.js";import"./CategoricalChart-DxpiyG_I.js";import"./CartesianAxis-CD4CCpjb.js";import"./Layer-B6-xlzoZ.js";import"./Text-X-wYRMmx.js";import"./DOMUtils-PuY_kSj_.js";import"./ZIndexLayer-NyRG-f9x.js";import"./Label-CBpcK4i6.js";import"./types-BKor_cCv.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./LabelList-CqZcLqEs.js";import"./activeStyles-DlQJ4xNs.js";import"./useAnimationId-Dn06_oTK.js";import"./dataEntryStyles-CekGYxzv.js";import"./Curve-NLRniG8O.js";import"./step-B3ivcKoR.js";import"./path-DyVhHtw_.js";import"./tooltipContext-BO2FOIgQ.js";import"./Symbols-53MnXipr.js";import"./symbol-C4d-r7qM.js";import"./ActiveShapeUtils-C4p3bqvh.js";import"./ErrorBarContext-BUzY2WBc.js";import"./SetGraphicalItem-CPBOF30a.js";import"./useEffectiveDataKey-CP5SXjqP.js";import"./CSSTransitionAnimate-crW10syt.js";import"./util-Dxo8gN5i.js";import"./useElementOffset-CADieQbP.js";import"./uniqBy-rOz66M2B.js";import"./iteratee-DVf-SFr-.js";import"./isArguments-yB-y1yaH.js";import"./Cross-BzTKK6a0.js";import"./Rectangle-CRaBEnAs.js";import"./Sector-CTZzADJH.js";const Ar={component:p,argTypes:m,docs:{autodocs:!1}},t={render:o=>{const s=[{x:100,y:200,errorY:30,errorX:30},{x:120,y:100,errorY:[500,30],errorX:[200,30]},{x:170,y:300,errorY:[10,20],errorX:20},{x:140,y:250,errorY:30,errorX:20},{x:150,y:400,errorY:[20,300],errorX:30},{x:110,y:280,errorY:40,errorX:40}];return r.createElement(p,{width:400,height:400,margin:{top:20,right:20,bottom:20,left:20},layout:o.layout},r.createElement(d,null),r.createElement(c,{type:"number",dataKey:"x",name:"stature",unit:"cm",allowDataOverflow:o.allowDataOverflow}),r.createElement(y,{type:"number",dataKey:"y",name:"weight",unit:"kg",allowDataOverflow:o.allowDataOverflow}),r.createElement(h,{name:"A school",data:s,fill:"blue"},r.createElement(e,{dataKey:"errorX",width:2,strokeWidth:3,stroke:"green",direction:"x"}),r.createElement(e,{dataKey:"errorY",width:4,strokeWidth:2,stroke:"red",direction:"y"})),r.createElement(u,{cursor:{strokeDasharray:"3 3"}}))},args:l(m),parameters:{controls:{include:["layout","allowDataOverflow"]}}},Sr=["WithErrorBarsAndExtendedDomain"];var a,n,i;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
}`,...(i=(n=t.parameters)==null?void 0:n.docs)==null?void 0:i.source}}};export{t as WithErrorBarsAndExtendedDomain,Sr as __namedExportsOrder,Ar as default};
