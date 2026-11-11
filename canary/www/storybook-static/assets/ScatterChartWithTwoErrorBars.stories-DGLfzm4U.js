import{R as r}from"./iframe-DnaR6K_4.js";import{g as l}from"./utils-ePvtT4un.js";import{S as m}from"./ScatterChartArgs-BpaDSsyX.js";import{S as p}from"./ScatterChart-B_8NpyyD.js";import{C as d}from"./CartesianGrid-Ihil0ESz.js";import{X as c}from"./XAxis-JXd9qzo8.js";import{Y as y}from"./YAxis-wlK6hgFu.js";import{S as h}from"./Scatter-DefvuHap.js";import{E as e}from"./ErrorBar-zSOQPIZd.js";import{T as u}from"./Tooltip-Gq9KpMi8.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-CRNPPXNH.js";import"./zIndexSlice-HRkrVJ9X.js";import"./get-cF5BDHN6.js";import"./resolveDefaultProps-xcCt7KB7.js";import"./throttle-CmS6TmXS.js";import"./index-DMJIF8QV.js";import"./index-BgXLdz_X.js";import"./axisSelectors-BZT-kfpn.js";import"./polarAxisSelectors-vWLUjf8B.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-BgvfK_mE.js";import"./index-DmfGSg0J.js";import"./index-D5D7Mpig.js";import"./renderedTicksSlice-C__KIq2D.js";import"./index-CnPRymSo.js";import"./fillDefinitions-BLgrfcm8.js";import"./CartesianChart-DnaM71J4.js";import"./chartDataContext-aWkBfLLJ.js";import"./CategoricalChart-CBGPntpg.js";import"./CartesianAxis-CAMeCfaf.js";import"./Layer-BH_fCpBP.js";import"./Text-Lh_HZPYn.js";import"./ZIndexLayer-B1l-eSb9.js";import"./Label-BEN9LI2d.js";import"./types-Dnad10Cx.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./dataEntryStyles-BUjHKeGu.js";import"./activeStyles-WfyfS5co.js";import"./useAnimationId-DvJiKZIl.js";import"./Curve-nkhv6z3O.js";import"./step-CWTcW_Xz.js";import"./path-DyVhHtw_.js";import"./tooltipContext-t-yh_HfE.js";import"./Symbols-ClvwSwOZ.js";import"./symbol-QpFOfTRN.js";import"./ActiveShapeUtils-jyclsiEg.js";import"./ErrorBarContext-Bc_t8m9L.js";import"./SetGraphicalItem-DJe9VMWh.js";import"./useEffectiveDataKey-BtEPyz6t.js";import"./CSSTransitionAnimate-Df2d6ROx.js";import"./util-Dxo8gN5i.js";import"./useElementOffset-1fsM2BLX.js";import"./uniqBy-BerQeZ6C.js";import"./iteratee-BOqKd5kc.js";import"./isArguments-yB-y1yaH.js";import"./Cross-BzVInf1h.js";import"./Rectangle-Dgg35g8F.js";import"./Sector-C-O6fWmF.js";const Yr={component:p,argTypes:m,docs:{autodocs:!1}},t={render:o=>{const s=[{x:100,y:200,errorY:30,errorX:30},{x:120,y:100,errorY:[500,30],errorX:[200,30]},{x:170,y:300,errorY:[10,20],errorX:20},{x:140,y:250,errorY:30,errorX:20},{x:150,y:400,errorY:[20,300],errorX:30},{x:110,y:280,errorY:40,errorX:40}];return r.createElement(p,{width:400,height:400,margin:{top:20,right:20,bottom:20,left:20},layout:o.layout},r.createElement(d,null),r.createElement(c,{type:"number",dataKey:"x",name:"stature",unit:"cm",allowDataOverflow:o.allowDataOverflow}),r.createElement(y,{type:"number",dataKey:"y",name:"weight",unit:"kg",allowDataOverflow:o.allowDataOverflow}),r.createElement(h,{name:"A school",data:s,fill:"blue"},r.createElement(e,{dataKey:"errorX",width:2,strokeWidth:3,stroke:"green",direction:"x"}),r.createElement(e,{dataKey:"errorY",width:4,strokeWidth:2,stroke:"red",direction:"y"})),r.createElement(u,{cursor:{strokeDasharray:"3 3"}}))},args:l(m),parameters:{controls:{include:["layout","allowDataOverflow"]}}},Ar=["WithErrorBarsAndExtendedDomain"];var a,n,i;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
}`,...(i=(n=t.parameters)==null?void 0:n.docs)==null?void 0:i.source}}};export{t as WithErrorBarsAndExtendedDomain,Ar as __namedExportsOrder,Yr as default};
