import{R as r}from"./iframe-Bp2XYb68.js";import{g as l}from"./utils-ePvtT4un.js";import{S as m}from"./ScatterChartArgs-BpaDSsyX.js";import{S as p}from"./ScatterChart-ClCST4sk.js";import{C as d}from"./CartesianGrid-iZT-826p.js";import{X as c}from"./XAxis-ts9--8Kg.js";import{Y as y}from"./YAxis-EIT5_cgk.js";import{S as h}from"./Scatter-BCj4xwdQ.js";import{E as e}from"./ErrorBar-D7Azs03t.js";import{T as u}from"./Tooltip-DefDQyy6.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-DFwXtpN1.js";import"./zIndexSlice-Cdn-Kk-M.js";import"./get-cF5BDHN6.js";import"./resolveDefaultProps-DKzL2Qxu.js";import"./throttle-DjpMRj7m.js";import"./index-D6Dz_bd_.js";import"./index-Cy8aa7S-.js";import"./axisSelectors-D7x9R07e.js";import"./polarAxisSelectors-B_7CHFJS.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-BystX3Ur.js";import"./index-BgEF2N6-.js";import"./index-BWzqc-Tl.js";import"./renderedTicksSlice-BEFESDc_.js";import"./index-BIZLi33-.js";import"./CartesianChart-B3KmVN-H.js";import"./ZIndexPortal-Dv9B-KcK.js";import"./CategoricalChart-DdepWN88.js";import"./CartesianAxis-BoCxaOyC.js";import"./Layer-BCuSbR8-.js";import"./Text-NUByGaeH.js";import"./DOMUtils-CRqOLD4o.js";import"./ZIndexLayer-CdRyST1N.js";import"./Label-BYixOdgi.js";import"./types-ChkwvJX7.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./fillDefinitions-ChX4QXi5.js";import"./LabelList-NX9sUv81.js";import"./activeStyles-BkNcOac3.js";import"./useAnimationId-BnLlvmFh.js";import"./dataEntryStyles-0iby4079.js";import"./Curve-L4y0Pw0M.js";import"./step-D6j5BM_X.js";import"./path-DyVhHtw_.js";import"./tooltipContext-BaE0Fb1H.js";import"./Symbols-BjKzRhG-.js";import"./symbol-AE1MCh3f.js";import"./ActiveShapeUtils-DNSxrQCm.js";import"./ErrorBarContext-C1RLIbYa.js";import"./SetGraphicalItem-C-JkmH8Z.js";import"./useEffectiveDataKey-DiX5XHUq.js";import"./CSSTransitionAnimate-BCEufeZc.js";import"./util-Dxo8gN5i.js";import"./useElementOffset-C0qZzXDV.js";import"./uniqBy-C0-xR335.js";import"./iteratee-B9Sxwtsj.js";import"./isArguments-yB-y1yaH.js";import"./Cross-dfK3CHkP.js";import"./Rectangle-M7CoQGRa.js";import"./Sector-Ml-EH-s8.js";const Sr={component:p,argTypes:m,docs:{autodocs:!1}},t={render:o=>{const s=[{x:100,y:200,errorY:30,errorX:30},{x:120,y:100,errorY:[500,30],errorX:[200,30]},{x:170,y:300,errorY:[10,20],errorX:20},{x:140,y:250,errorY:30,errorX:20},{x:150,y:400,errorY:[20,300],errorX:30},{x:110,y:280,errorY:40,errorX:40}];return r.createElement(p,{width:400,height:400,margin:{top:20,right:20,bottom:20,left:20},layout:o.layout},r.createElement(d,null),r.createElement(c,{type:"number",dataKey:"x",name:"stature",unit:"cm",allowDataOverflow:o.allowDataOverflow}),r.createElement(y,{type:"number",dataKey:"y",name:"weight",unit:"kg",allowDataOverflow:o.allowDataOverflow}),r.createElement(h,{name:"A school",data:s,fill:"blue"},r.createElement(e,{dataKey:"errorX",width:2,strokeWidth:3,stroke:"green",direction:"x"}),r.createElement(e,{dataKey:"errorY",width:4,strokeWidth:2,stroke:"red",direction:"y"})),r.createElement(u,{cursor:{strokeDasharray:"3 3"}}))},args:l(m),parameters:{controls:{include:["layout","allowDataOverflow"]}}},Dr=["WithErrorBarsAndExtendedDomain"];var a,n,i;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
