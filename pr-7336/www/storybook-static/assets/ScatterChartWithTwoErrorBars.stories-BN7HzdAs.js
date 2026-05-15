import{e as r}from"./iframe-C_AsYugi.js";import{g as n}from"./utils-ePvtT4un.js";import{S as s}from"./ScatterChartArgs-DWgqGcPH.js";import{S as p}from"./ScatterChart-BQPvGl42.js";import{C as d}from"./CartesianGrid-BCBuz4XX.js";import{X as c}from"./XAxis-DH_rN-kM.js";import{Y as y}from"./YAxis-gzpn2USg.js";import{S as h}from"./Scatter-C87sTqkn.js";import{E as e}from"./ErrorBar-3hgXeDIt.js";import{T as u}from"./Tooltip-B_ouAOy3.js";import{R as f}from"./RechartsHookInspector-BZMd9r0w.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-C0wr5dja.js";import"./arrayEqualityCheck-xvllERIt.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-CerPTbDf.js";import"./immer-BPZQF6xW.js";import"./PolarUtils-CTnnDHZv.js";import"./index-DBNDbbEj.js";import"./hooks-DRvuAM61.js";import"./axisSelectors-D6N9K5pJ.js";import"./d3-scale-bPIVgrq4.js";import"./zIndexSlice-CVos1qNt.js";import"./renderedTicksSlice-CULSuwf6.js";import"./CartesianChart-Bf-pcG1N.js";import"./chartDataContext-DxmOKRxG.js";import"./CategoricalChart-C3pZv0iV.js";import"./CartesianAxis-Qsc6tL7N.js";import"./Layer-Dz5BSX-y.js";import"./Text-CQ7cV61I.js";import"./DOMUtils-BnflEJNu.js";import"./Label-Ck2nWAbG.js";import"./ZIndexLayer-Dpd4MxoT.js";import"./types-DFzRwbJd.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./ReactUtils-BIcQ9LuG.js";import"./Curve-DqcNZQQ9.js";import"./step-BNGIjVY6.js";import"./tooltipContext-DCzuzxkg.js";import"./Symbols-BrylnLFr.js";import"./symbol-Cv3vZKNL.js";import"./ActiveShapeUtils-BW3KdMee.js";import"./isPlainObject-yome26yk.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-DSXX-_zw.js";import"./useAnimationId-GLik1JQl.js";import"./Trapezoid-BE4mHG6h.js";import"./Sector-RBT64hMb.js";import"./RegisterGraphicalItemId-Br_TTAem.js";import"./ErrorBarContext-Di7xd7Lk.js";import"./GraphicalItemClipPath-DUplZfGU.js";import"./SetGraphicalItem-DnFjb-ph.js";import"./CSSTransitionAnimate-BdZCXb26.js";import"./useElementOffset-CcesUvCf.js";import"./uniqBy-BwUTREYv.js";import"./iteratee-0Dlmk-XD.js";import"./Cross-GCMP8pM2.js";import"./index-DCPl85jO.js";import"./ChartSizeDimensions-Dh66BsMo.js";import"./OffsetShower-vaJOlCun.js";import"./PlotAreaShower-CMsAoFdB.js";const Sr={component:p,argTypes:s,docs:{autodocs:!1}},t={render:o=>{const l=[{x:100,y:200,errorY:30,errorX:30},{x:120,y:100,errorY:[500,30],errorX:[200,30]},{x:170,y:300,errorY:[10,20],errorX:20},{x:140,y:250,errorY:30,errorX:20},{x:150,y:400,errorY:[20,300],errorX:30},{x:110,y:280,errorY:40,errorX:40}];return r.createElement(p,{width:400,height:400,margin:{top:20,right:20,bottom:20,left:20},layout:o.layout},r.createElement(d,null),r.createElement(c,{type:"number",dataKey:"x",name:"stature",unit:"cm",allowDataOverflow:o.allowDataOverflow}),r.createElement(y,{type:"number",dataKey:"y",name:"weight",unit:"kg",allowDataOverflow:o.allowDataOverflow}),r.createElement(h,{name:"A school",data:l,fill:"blue"},r.createElement(e,{dataKey:"errorX",width:2,strokeWidth:3,stroke:"green",direction:"x"}),r.createElement(e,{dataKey:"errorY",width:4,strokeWidth:2,stroke:"red",direction:"y"})),r.createElement(u,{cursor:{strokeDasharray:"3 3"}}),r.createElement(f,null))},args:n(s),parameters:{controls:{include:["layout","allowDataOverflow"]}}};var a,i,m;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
