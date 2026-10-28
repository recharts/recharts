import{R as r}from"./iframe-Bzny_MYO.js";import{g as l}from"./utils-ePvtT4un.js";import{S as m}from"./ScatterChartArgs-BpaDSsyX.js";import{S as p}from"./ScatterChart-C9YnG5KD.js";import{C as d}from"./CartesianGrid-BU--jY8B.js";import{X as c}from"./XAxis-D652bNH-.js";import{Y as y}from"./YAxis-CJm4ZJgn.js";import{S as h}from"./Scatter-DJSmjgqM.js";import{E as e}from"./ErrorBar-G3-C-7aL.js";import{T as u}from"./Tooltip-foEeq-Dg.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-DwCbU-k0.js";import"./zIndexSlice-MTgyOxcR.js";import"./get-cF5BDHN6.js";import"./resolveDefaultProps-DhnFRoYZ.js";import"./throttle-GvTGKSCT.js";import"./index-BR-DuKD2.js";import"./index-BNanU6AD.js";import"./axisSelectors-BEccdncb.js";import"./polarAxisSelectors-Cax9tCz_.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-CLm70OA6.js";import"./index-B1Bw8GV_.js";import"./index-BO70CSrb.js";import"./renderedTicksSlice-IHCqVqCy.js";import"./index-BGYmHh9L.js";import"./CartesianChart-8QUHmRpr.js";import"./ZIndexPortal-CcFwSb_x.js";import"./CategoricalChart-BS5ujOqF.js";import"./CartesianAxis-CF7trjb7.js";import"./Layer-DwImaMiy.js";import"./Text-fNDWB5Io.js";import"./pageBackground-3hrs4YVX.js";import"./ZIndexLayer-5vWyPJ-H.js";import"./Label-DTuGlMPs.js";import"./types-DppBMtwl.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./LabelList-DP5qLQcH.js";import"./activeStyles-D4lYsebj.js";import"./useAnimationId-DPjHdwMC.js";import"./dataEntryStyles-Dmke5Kqf.js";import"./Curve-DvxHsU-S.js";import"./step-Ck4pU_CH.js";import"./path-DyVhHtw_.js";import"./tooltipContext-Iz_t1CFH.js";import"./Symbols-Dt4jbT5_.js";import"./symbol-BKCm_Bj0.js";import"./ActiveShapeUtils-cjVk6ERl.js";import"./ErrorBarContext-B5xatTad.js";import"./SetGraphicalItem-C8_kNIod.js";import"./useEffectiveDataKey-D9i-sft6.js";import"./CSSTransitionAnimate-BgZlmw89.js";import"./util-Dxo8gN5i.js";import"./useElementOffset-ZYBSOkTe.js";import"./uniqBy-CmMRn8Xg.js";import"./iteratee-DzeYmEiw.js";import"./isArguments-yB-y1yaH.js";import"./Cross-DaNX623z.js";import"./Rectangle-BIffJDOA.js";import"./Sector-0HEjef0D.js";const Ar={component:p,argTypes:m,docs:{autodocs:!1}},t={render:o=>{const s=[{x:100,y:200,errorY:30,errorX:30},{x:120,y:100,errorY:[500,30],errorX:[200,30]},{x:170,y:300,errorY:[10,20],errorX:20},{x:140,y:250,errorY:30,errorX:20},{x:150,y:400,errorY:[20,300],errorX:30},{x:110,y:280,errorY:40,errorX:40}];return r.createElement(p,{width:400,height:400,margin:{top:20,right:20,bottom:20,left:20},layout:o.layout},r.createElement(d,null),r.createElement(c,{type:"number",dataKey:"x",name:"stature",unit:"cm",allowDataOverflow:o.allowDataOverflow}),r.createElement(y,{type:"number",dataKey:"y",name:"weight",unit:"kg",allowDataOverflow:o.allowDataOverflow}),r.createElement(h,{name:"A school",data:s,fill:"blue"},r.createElement(e,{dataKey:"errorX",width:2,strokeWidth:3,stroke:"green",direction:"x"}),r.createElement(e,{dataKey:"errorY",width:4,strokeWidth:2,stroke:"red",direction:"y"})),r.createElement(u,{cursor:{strokeDasharray:"3 3"}}))},args:l(m),parameters:{controls:{include:["layout","allowDataOverflow"]}}},Sr=["WithErrorBarsAndExtendedDomain"];var a,n,i;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
