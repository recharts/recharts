import{R as r}from"./iframe-BV4BJT-m.js";import{g as l}from"./utils-ePvtT4un.js";import{S as m}from"./ScatterChartArgs-BpaDSsyX.js";import{S as p}from"./ScatterChart--QRXxIs1.js";import{C as d}from"./CartesianGrid-6YUfnSB7.js";import{X as c}from"./XAxis-Dddiy3kS.js";import{Y as y}from"./YAxis-DrgVb9Ay.js";import{S as h}from"./Scatter-D6SBnmMb.js";import{E as e}from"./ErrorBar-Bm_Unuqw.js";import{T as u}from"./Tooltip-BZU_FemD.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-BCKkTVf1.js";import"./zIndexSlice-B-lthx1D.js";import"./get-cF5BDHN6.js";import"./resolveDefaultProps-cT9z_f7M.js";import"./throttle-2G-03cGC.js";import"./index-BWsZwQHL.js";import"./index-BMMrxHO4.js";import"./axisSelectors-DnTNEhev.js";import"./polarAxisSelectors-CB1xu3bt.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-9I0ClQu9.js";import"./index-Cwzrr77V.js";import"./index-CwDo1ygF.js";import"./renderedTicksSlice-un3BJh88.js";import"./index-BO-EQm5K.js";import"./fillDefinitions-CsvVa8gn.js";import"./CartesianChart-D730y8QU.js";import"./ZIndexPortal-DvrYxin1.js";import"./CategoricalChart-BPH2EWzV.js";import"./CartesianAxis-D1XYtW-z.js";import"./Layer-C4zlYTAs.js";import"./Text-CO85_-F3.js";import"./DOMUtils-CzRokdgO.js";import"./ZIndexLayer-B03KVd1Z.js";import"./Label-xll97smN.js";import"./types-CgGLncla.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./LabelList-B3uF9y0j.js";import"./activeStyles-DPABJUlt.js";import"./useAnimationId-BaOUwCNw.js";import"./dataEntryStyles-Bs_-V5Jc.js";import"./Curve-BxOKje4W.js";import"./step-CflYfM9D.js";import"./path-DyVhHtw_.js";import"./tooltipContext-GDisYEj5.js";import"./Symbols-D8__1CQa.js";import"./symbol-CNlre4TP.js";import"./ActiveShapeUtils-DdIRCGmC.js";import"./ErrorBarContext-CgppqQDQ.js";import"./SetGraphicalItem-BojvnrYu.js";import"./useEffectiveDataKey-ydzJPEOM.js";import"./CSSTransitionAnimate-DbUJDTPg.js";import"./util-Dxo8gN5i.js";import"./useElementOffset-DOPUcnVK.js";import"./uniqBy-D2Xk11H0.js";import"./iteratee-BIIV1qIF.js";import"./isArguments-yB-y1yaH.js";import"./Cross-Bnmd-8yp.js";import"./Rectangle-CtlT2XYk.js";import"./Sector-B6aReDRK.js";const Sr={component:p,argTypes:m,docs:{autodocs:!1}},t={render:o=>{const s=[{x:100,y:200,errorY:30,errorX:30},{x:120,y:100,errorY:[500,30],errorX:[200,30]},{x:170,y:300,errorY:[10,20],errorX:20},{x:140,y:250,errorY:30,errorX:20},{x:150,y:400,errorY:[20,300],errorX:30},{x:110,y:280,errorY:40,errorX:40}];return r.createElement(p,{width:400,height:400,margin:{top:20,right:20,bottom:20,left:20},layout:o.layout},r.createElement(d,null),r.createElement(c,{type:"number",dataKey:"x",name:"stature",unit:"cm",allowDataOverflow:o.allowDataOverflow}),r.createElement(y,{type:"number",dataKey:"y",name:"weight",unit:"kg",allowDataOverflow:o.allowDataOverflow}),r.createElement(h,{name:"A school",data:s,fill:"blue"},r.createElement(e,{dataKey:"errorX",width:2,strokeWidth:3,stroke:"green",direction:"x"}),r.createElement(e,{dataKey:"errorY",width:4,strokeWidth:2,stroke:"red",direction:"y"})),r.createElement(u,{cursor:{strokeDasharray:"3 3"}}))},args:l(m),parameters:{controls:{include:["layout","allowDataOverflow"]}}},Dr=["WithErrorBarsAndExtendedDomain"];var a,n,i;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
