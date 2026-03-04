import{e as r}from"./iframe-BDLVz6Jf.js";import{g as n}from"./utils-ePvtT4un.js";import{S as s}from"./ScatterChartArgs-CaeXznmO.js";import{S as p}from"./ScatterChart-Di1fJFNd.js";import{C as d}from"./CartesianGrid-C_vcoOOS.js";import{X as c}from"./XAxis-rGGZujHk.js";import{Y as y}from"./YAxis-DhrJBh1G.js";import{S as h}from"./Scatter-CWoaVGD4.js";import{E as e}from"./ErrorBar-Bb5g38FD.js";import{T as u}from"./Tooltip-Zg6smBq5.js";import{R as f}from"./RechartsHookInspector-DdlV-82E.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-BNGXTKCd.js";import"./arrayEqualityCheck-CUwHcVyI.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-CAE8a2S7.js";import"./immer-D7ppHI2d.js";import"./PolarUtils-CTnnDHZv.js";import"./index-B5IfmkK5.js";import"./hooks-Ko0NVQx4.js";import"./axisSelectors-BoSmHer2.js";import"./d3-scale-DrvOhfRi.js";import"./zIndexSlice-Dba-j24Y.js";import"./renderedTicksSlice-DzYlWn1c.js";import"./CartesianChart-DHmZ3TGF.js";import"./chartDataContext-DTy_zcLY.js";import"./CategoricalChart-D0nQYz7Q.js";import"./CartesianAxis-DpZWUA10.js";import"./Layer-E90Uxi_N.js";import"./Text-Dnj_UFsP.js";import"./DOMUtils-C38zHxQe.js";import"./Label-BpAHaxyT.js";import"./ZIndexLayer-CeMtlwqL.js";import"./types-eu_lG70M.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./ReactUtils-Z_uY6BWT.js";import"./Curve-BkotQ_Ul.js";import"./step-BVw-sImN.js";import"./tooltipContext-CoKMvDHF.js";import"./Symbols-UHZicULa.js";import"./symbol-DWU8_PrF.js";import"./ActiveShapeUtils-1odowpJ3.js";import"./isPlainObject-D6WBWEYO.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-MA5abZlf.js";import"./useAnimationId-DiGR44lM.js";import"./Trapezoid-B0zvPW8H.js";import"./Sector-Bzk7xgyA.js";import"./RegisterGraphicalItemId-DgsZoNJO.js";import"./ErrorBarContext-CHqnPMdC.js";import"./GraphicalItemClipPath-52erAg5v.js";import"./SetGraphicalItem-D-MDoVx7.js";import"./CSSTransitionAnimate-BPSd2N_O.js";import"./useElementOffset-CP3IlWVh.js";import"./uniqBy-CYBnIEgM.js";import"./iteratee-Uscb-axC.js";import"./Cross-tyX5lzXH.js";import"./index-B1g-GKPY.js";import"./ChartSizeDimensions-Cz26FwCM.js";import"./OffsetShower-Dsw4B39y.js";import"./PlotAreaShower-BsznV7xN.js";const Sr={component:p,argTypes:s,docs:{autodocs:!1}},t={render:o=>{const l=[{x:100,y:200,errorY:30,errorX:30},{x:120,y:100,errorY:[500,30],errorX:[200,30]},{x:170,y:300,errorY:[10,20],errorX:20},{x:140,y:250,errorY:30,errorX:20},{x:150,y:400,errorY:[20,300],errorX:30},{x:110,y:280,errorY:40,errorX:40}];return r.createElement(p,{width:400,height:400,margin:{top:20,right:20,bottom:20,left:20},layout:o.layout},r.createElement(d,null),r.createElement(c,{type:"number",dataKey:"x",name:"stature",unit:"cm",allowDataOverflow:o.allowDataOverflow}),r.createElement(y,{type:"number",dataKey:"y",name:"weight",unit:"kg",allowDataOverflow:o.allowDataOverflow}),r.createElement(h,{name:"A school",data:l,fill:"blue"},r.createElement(e,{dataKey:"errorX",width:2,strokeWidth:3,stroke:"green",direction:"x"}),r.createElement(e,{dataKey:"errorY",width:4,strokeWidth:2,stroke:"red",direction:"y"})),r.createElement(u,{cursor:{strokeDasharray:"3 3"}}),r.createElement(f,null))},args:n(s),parameters:{controls:{include:["layout","allowDataOverflow"]}}};var a,i,m;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
        <RechartsHookInspector />
      </ScatterChart>;
  },
  args: getStoryArgsFromArgsTypesObject(ScatterChartArgs),
  parameters: {
    controls: {
      include: ['layout', 'allowDataOverflow']
    }
  }
}`,...(m=(i=t.parameters)==null?void 0:i.docs)==null?void 0:m.source}}};const kr=["WithErrorBarsAndExtendedDomain"];export{t as WithErrorBarsAndExtendedDomain,kr as __namedExportsOrder,Sr as default};
