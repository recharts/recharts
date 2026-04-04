import{e as r}from"./iframe-C2tGGjcA.js";import{g as n}from"./utils-ePvtT4un.js";import{S as s}from"./ScatterChartArgs-Bxm12dUp.js";import{S as p}from"./ScatterChart-DbqTt64S.js";import{C as d}from"./CartesianGrid-CCLgVJuJ.js";import{X as c}from"./XAxis-B3stUdiP.js";import{Y as y}from"./YAxis-BWTDEGMA.js";import{S as h}from"./Scatter-BzDRKFrL.js";import{E as e}from"./ErrorBar-BguauJxm.js";import{T as u}from"./Tooltip-BTf40Vva.js";import{R as f}from"./RechartsHookInspector-OVWL5RuZ.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-D3vVxtfU.js";import"./arrayEqualityCheck-BU-juwUe.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-B8hWxOXb.js";import"./immer-_oM2zjxd.js";import"./PolarUtils-CTnnDHZv.js";import"./index-D-_8hcei.js";import"./hooks-BZM1IfiG.js";import"./axisSelectors-hCgVeVzv.js";import"./d3-scale-BwpTFf5Z.js";import"./zIndexSlice-C7QkOMmM.js";import"./renderedTicksSlice-DflWSLZG.js";import"./CartesianChart-JwGyw0GC.js";import"./chartDataContext-Mxcb3X27.js";import"./CategoricalChart-CloeZ4Py.js";import"./CartesianAxis-C6X8qFWR.js";import"./Layer-DkBbKCaQ.js";import"./Text-Bh-qeukp.js";import"./DOMUtils-CeJzVK9F.js";import"./Label-CR6_Nrr4.js";import"./ZIndexLayer-CwH7lvHt.js";import"./types-BqNjVw0B.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./ReactUtils-DgRasAzu.js";import"./Curve-3ofIPf5W.js";import"./step-CB6j9muh.js";import"./tooltipContext-B__M27xF.js";import"./Symbols-BW2J6Sn7.js";import"./symbol-CsNNy4jV.js";import"./ActiveShapeUtils-EmfZ6gwX.js";import"./isPlainObject-BG4W1lTc.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-jZnK6OPy.js";import"./useAnimationId-BPqjt2CS.js";import"./Trapezoid-Cl-OWzTg.js";import"./Sector-IdhW6Sh6.js";import"./RegisterGraphicalItemId-CvlZwjiz.js";import"./ErrorBarContext-VVzEJg2g.js";import"./GraphicalItemClipPath-DE_aTN3O.js";import"./SetGraphicalItem-DZyDJnZv.js";import"./CSSTransitionAnimate-BR4se8LC.js";import"./useElementOffset-B3k4jRRT.js";import"./uniqBy-Ct-WozvE.js";import"./iteratee-CXSu4ZJt.js";import"./Cross-ClCChjxn.js";import"./index-BLdpS26r.js";import"./ChartSizeDimensions-DbZPdrpK.js";import"./OffsetShower-CCVPYATS.js";import"./PlotAreaShower-p59PN-FQ.js";const Sr={component:p,argTypes:s,docs:{autodocs:!1}},t={render:o=>{const l=[{x:100,y:200,errorY:30,errorX:30},{x:120,y:100,errorY:[500,30],errorX:[200,30]},{x:170,y:300,errorY:[10,20],errorX:20},{x:140,y:250,errorY:30,errorX:20},{x:150,y:400,errorY:[20,300],errorX:30},{x:110,y:280,errorY:40,errorX:40}];return r.createElement(p,{width:400,height:400,margin:{top:20,right:20,bottom:20,left:20},layout:o.layout},r.createElement(d,null),r.createElement(c,{type:"number",dataKey:"x",name:"stature",unit:"cm",allowDataOverflow:o.allowDataOverflow}),r.createElement(y,{type:"number",dataKey:"y",name:"weight",unit:"kg",allowDataOverflow:o.allowDataOverflow}),r.createElement(h,{name:"A school",data:l,fill:"blue"},r.createElement(e,{dataKey:"errorX",width:2,strokeWidth:3,stroke:"green",direction:"x"}),r.createElement(e,{dataKey:"errorY",width:4,strokeWidth:2,stroke:"red",direction:"y"})),r.createElement(u,{cursor:{strokeDasharray:"3 3"}}),r.createElement(f,null))},args:n(s),parameters:{controls:{include:["layout","allowDataOverflow"]}}};var a,i,m;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
