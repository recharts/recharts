import{e as r}from"./iframe-Bcfp4gz2.js";import{g as n}from"./utils-ePvtT4un.js";import{S as s}from"./ScatterChartArgs-Bxm12dUp.js";import{S as p}from"./ScatterChart-BOZW76mS.js";import{C as d}from"./CartesianGrid-BqOAHNSB.js";import{X as c}from"./XAxis-vG8PL4e8.js";import{Y as y}from"./YAxis-B-SMb25K.js";import{S as h}from"./Scatter-B8vvA9Py.js";import{E as e}from"./ErrorBar-B-EgTW04.js";import{T as u}from"./Tooltip-Rmq9enFb.js";import{R as f}from"./RechartsHookInspector-BszpLvid.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-oIgYQ0Bc.js";import"./arrayEqualityCheck-C7nhyHTD.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-BFYcbhKc.js";import"./immer-BOB4YBM5.js";import"./PolarUtils-CTnnDHZv.js";import"./index-DWGu8Hbo.js";import"./hooks-BDG_pI4i.js";import"./axisSelectors-m2hcYKPS.js";import"./d3-scale-asomCCUw.js";import"./zIndexSlice-B4mf_ahs.js";import"./renderedTicksSlice-DoKS3HBz.js";import"./CartesianChart-DUoDAX5X.js";import"./chartDataContext-DRkSLvZO.js";import"./CategoricalChart-DMKrtdHX.js";import"./CartesianAxis-BD2FdChl.js";import"./Layer-dm3uY3ni.js";import"./Text-BwYljqkd.js";import"./DOMUtils-LPbE6vOu.js";import"./Label-CPi3yA0f.js";import"./ZIndexLayer-CN_pcG12.js";import"./types-CW3aex39.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./ReactUtils-CDQ4T4jj.js";import"./Curve-t8yIlp7a.js";import"./step-B9DAnMjl.js";import"./tooltipContext-BoMfuBa9.js";import"./Symbols-CWxW6NbL.js";import"./symbol-Blzy8oY_.js";import"./ActiveShapeUtils-CMXUA0Jt.js";import"./isPlainObject-Bh7-lls7.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-Cckl3Elf.js";import"./useAnimationId-DPbHG1Kj.js";import"./Trapezoid-BX_HaGLv.js";import"./Sector-B02xc5N3.js";import"./RegisterGraphicalItemId-CieNk-m4.js";import"./ErrorBarContext-DI9yyOgU.js";import"./GraphicalItemClipPath-DfLgheiY.js";import"./SetGraphicalItem-Brvtr_jy.js";import"./CSSTransitionAnimate-CKueD_Jj.js";import"./useElementOffset-Cby9FBWD.js";import"./uniqBy-CgNfi5CN.js";import"./iteratee-CeZG9EXp.js";import"./Cross-Cqp4KXbu.js";import"./index-CTn1De8H.js";import"./ChartSizeDimensions-BtWRNYOc.js";import"./OffsetShower-BUjaH3s6.js";import"./PlotAreaShower-B0TzAHKQ.js";const Sr={component:p,argTypes:s,docs:{autodocs:!1}},t={render:o=>{const l=[{x:100,y:200,errorY:30,errorX:30},{x:120,y:100,errorY:[500,30],errorX:[200,30]},{x:170,y:300,errorY:[10,20],errorX:20},{x:140,y:250,errorY:30,errorX:20},{x:150,y:400,errorY:[20,300],errorX:30},{x:110,y:280,errorY:40,errorX:40}];return r.createElement(p,{width:400,height:400,margin:{top:20,right:20,bottom:20,left:20},layout:o.layout},r.createElement(d,null),r.createElement(c,{type:"number",dataKey:"x",name:"stature",unit:"cm",allowDataOverflow:o.allowDataOverflow}),r.createElement(y,{type:"number",dataKey:"y",name:"weight",unit:"kg",allowDataOverflow:o.allowDataOverflow}),r.createElement(h,{name:"A school",data:l,fill:"blue"},r.createElement(e,{dataKey:"errorX",width:2,strokeWidth:3,stroke:"green",direction:"x"}),r.createElement(e,{dataKey:"errorY",width:4,strokeWidth:2,stroke:"red",direction:"y"})),r.createElement(u,{cursor:{strokeDasharray:"3 3"}}),r.createElement(f,null))},args:n(s),parameters:{controls:{include:["layout","allowDataOverflow"]}}};var a,i,m;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
