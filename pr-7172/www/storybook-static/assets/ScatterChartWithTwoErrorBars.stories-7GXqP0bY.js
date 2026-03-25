import{e as r}from"./iframe-E-WC41kJ.js";import{g as n}from"./utils-ePvtT4un.js";import{S as s}from"./ScatterChartArgs-Bxm12dUp.js";import{S as p}from"./ScatterChart-7MQMR-Ld.js";import{C as d}from"./CartesianGrid-D9oeCwlR.js";import{X as c}from"./XAxis-BaFlydz6.js";import{Y as y}from"./YAxis-CDciY-WX.js";import{S as h}from"./Scatter-mz17Chxt.js";import{E as e}from"./ErrorBar-DkMWeGQp.js";import{T as u}from"./Tooltip-Dz46u_n4.js";import{R as f}from"./RechartsHookInspector-DKk-8ET5.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-BIczAnOb.js";import"./arrayEqualityCheck-BqUzcRut.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-CZw5DbVo.js";import"./immer-B2AHHn8G.js";import"./PolarUtils-CTnnDHZv.js";import"./index-DZtbJ9Ut.js";import"./hooks-DQ5ZrLCC.js";import"./axisSelectors-BVUql3J4.js";import"./d3-scale-CSKw2yvo.js";import"./zIndexSlice-DkBOVcrD.js";import"./renderedTicksSlice-BqXsAF6I.js";import"./CartesianChart-B56zTdxs.js";import"./chartDataContext-CK93mzcE.js";import"./CategoricalChart-aHZNXhsF.js";import"./CartesianAxis-BOHEbUwD.js";import"./Layer-DOBdv7Ak.js";import"./Text-DTbX-dn1.js";import"./DOMUtils-CpAJnaA6.js";import"./Label-C5w0zLuo.js";import"./ZIndexLayer-DVYJjRDY.js";import"./types-CSLfd7k_.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./ReactUtils-BHUem0rc.js";import"./Curve-DYFm9WRY.js";import"./step-DU5CJrCT.js";import"./tooltipContext-DWBl8IuC.js";import"./Symbols-B0YB4VCR.js";import"./symbol-BSUu54iG.js";import"./ActiveShapeUtils-DBHiiMuo.js";import"./isPlainObject-CY-G0_BP.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-Bf3uqJQh.js";import"./useAnimationId-Kk3oGpCX.js";import"./Trapezoid-B6nQFknd.js";import"./Sector-BB0wVMAH.js";import"./RegisterGraphicalItemId-D0Yd-4hn.js";import"./ErrorBarContext-he9UG2nL.js";import"./GraphicalItemClipPath-CjeMVbHl.js";import"./SetGraphicalItem-FieAjGNP.js";import"./CSSTransitionAnimate-BXy_cyBt.js";import"./useElementOffset-5CxNRm_x.js";import"./uniqBy-DVG2w1vP.js";import"./iteratee-pGdcXVZ6.js";import"./Cross-3hJ5_ELa.js";import"./index-DcwfkASu.js";import"./ChartSizeDimensions-myNJ6iDJ.js";import"./OffsetShower-h4QuBQIC.js";import"./PlotAreaShower-ByNkN2fY.js";const Sr={component:p,argTypes:s,docs:{autodocs:!1}},t={render:o=>{const l=[{x:100,y:200,errorY:30,errorX:30},{x:120,y:100,errorY:[500,30],errorX:[200,30]},{x:170,y:300,errorY:[10,20],errorX:20},{x:140,y:250,errorY:30,errorX:20},{x:150,y:400,errorY:[20,300],errorX:30},{x:110,y:280,errorY:40,errorX:40}];return r.createElement(p,{width:400,height:400,margin:{top:20,right:20,bottom:20,left:20},layout:o.layout},r.createElement(d,null),r.createElement(c,{type:"number",dataKey:"x",name:"stature",unit:"cm",allowDataOverflow:o.allowDataOverflow}),r.createElement(y,{type:"number",dataKey:"y",name:"weight",unit:"kg",allowDataOverflow:o.allowDataOverflow}),r.createElement(h,{name:"A school",data:l,fill:"blue"},r.createElement(e,{dataKey:"errorX",width:2,strokeWidth:3,stroke:"green",direction:"x"}),r.createElement(e,{dataKey:"errorY",width:4,strokeWidth:2,stroke:"red",direction:"y"})),r.createElement(u,{cursor:{strokeDasharray:"3 3"}}),r.createElement(f,null))},args:n(s),parameters:{controls:{include:["layout","allowDataOverflow"]}}};var a,i,m;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
