import{e as r}from"./iframe-BjsnxMFa.js";import{g as n}from"./utils-ePvtT4un.js";import{S as s}from"./ScatterChartArgs-Bxm12dUp.js";import{S as p}from"./ScatterChart-B_PnABeN.js";import{C as d}from"./CartesianGrid-CHzDGc-u.js";import{X as c}from"./XAxis-CLgGW7JB.js";import{Y as y}from"./YAxis-BVFVddBL.js";import{S as h}from"./Scatter-C26-hBio.js";import{E as e}from"./ErrorBar-B5TQ42BZ.js";import{T as u}from"./Tooltip-Teok_3qe.js";import{R as f}from"./RechartsHookInspector-BHBsN4Jq.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-CW1Hf6N5.js";import"./arrayEqualityCheck-D79Z1Ft6.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-C6oA156h.js";import"./immer-Be7tY_HI.js";import"./PolarUtils-CTnnDHZv.js";import"./index-jIvfCkDE.js";import"./hooks-CrPS60z-.js";import"./axisSelectors-DQ8vP1dP.js";import"./d3-scale-DFeGtgyL.js";import"./zIndexSlice-CqY4Aros.js";import"./renderedTicksSlice-BRzJlOTm.js";import"./CartesianChart-D_ZObIBU.js";import"./chartDataContext-CN9xXS5D.js";import"./CategoricalChart-CTcIqTOw.js";import"./CartesianAxis-CEeDfojt.js";import"./Layer-iA63SD1n.js";import"./Text-B0WMAGdM.js";import"./DOMUtils-BmB9R95C.js";import"./Label-j2useUX0.js";import"./ZIndexLayer-DSdMaSo2.js";import"./types-BiDeCyZf.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./ReactUtils-BGdgbQc7.js";import"./Curve-DKq8m8L2.js";import"./step-CB61oaUG.js";import"./tooltipContext-iEjEd1F2.js";import"./Symbols-D6JP1e2h.js";import"./symbol-GAGGshWY.js";import"./ActiveShapeUtils-BjYnAn6x.js";import"./isPlainObject-OzrxZJ1P.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-CAvBODoh.js";import"./useAnimationId-B32Lfo5E.js";import"./Trapezoid-BhCHPlaL.js";import"./Sector-Dfr3Hfmg.js";import"./RegisterGraphicalItemId-BPn4ir3H.js";import"./ErrorBarContext-BeXR1TDd.js";import"./GraphicalItemClipPath-DdpuzGUU.js";import"./SetGraphicalItem-CNGahdfh.js";import"./CSSTransitionAnimate-B9ZNWqYg.js";import"./useElementOffset-CRjg3G-v.js";import"./uniqBy-D7WiUy_u.js";import"./iteratee-C_gnpoXw.js";import"./Cross-Dsisec-w.js";import"./index-Drwbgjrj.js";import"./ChartSizeDimensions-DSkMKFoU.js";import"./OffsetShower-DDkKAXZs.js";import"./PlotAreaShower-DJQQHQ-f.js";const Sr={component:p,argTypes:s,docs:{autodocs:!1}},t={render:o=>{const l=[{x:100,y:200,errorY:30,errorX:30},{x:120,y:100,errorY:[500,30],errorX:[200,30]},{x:170,y:300,errorY:[10,20],errorX:20},{x:140,y:250,errorY:30,errorX:20},{x:150,y:400,errorY:[20,300],errorX:30},{x:110,y:280,errorY:40,errorX:40}];return r.createElement(p,{width:400,height:400,margin:{top:20,right:20,bottom:20,left:20},layout:o.layout},r.createElement(d,null),r.createElement(c,{type:"number",dataKey:"x",name:"stature",unit:"cm",allowDataOverflow:o.allowDataOverflow}),r.createElement(y,{type:"number",dataKey:"y",name:"weight",unit:"kg",allowDataOverflow:o.allowDataOverflow}),r.createElement(h,{name:"A school",data:l,fill:"blue"},r.createElement(e,{dataKey:"errorX",width:2,strokeWidth:3,stroke:"green",direction:"x"}),r.createElement(e,{dataKey:"errorY",width:4,strokeWidth:2,stroke:"red",direction:"y"})),r.createElement(u,{cursor:{strokeDasharray:"3 3"}}),r.createElement(f,null))},args:n(s),parameters:{controls:{include:["layout","allowDataOverflow"]}}};var a,i,m;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
