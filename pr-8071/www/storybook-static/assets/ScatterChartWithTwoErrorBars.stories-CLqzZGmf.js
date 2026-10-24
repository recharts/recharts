import{R as r}from"./iframe-B1_QfljJ.js";import{g as l}from"./utils-ePvtT4un.js";import{S as m}from"./ScatterChartArgs-BpaDSsyX.js";import{S as p}from"./ScatterChart-CiU9hy2N.js";import{C as d}from"./CartesianGrid-cTwLu2NQ.js";import{X as c}from"./XAxis-C5w_o036.js";import{Y as y}from"./YAxis-BOlbfRR9.js";import{S as h}from"./Scatter-DKRdk9QB.js";import{E as e}from"./ErrorBar-CkvrJZXN.js";import{T as u}from"./Tooltip-wOLs8XdN.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-eNWWZf5L.js";import"./zIndexSlice-Cb-_WhSJ.js";import"./throttle-D7IvOyg1.js";import"./index-C0R_VbD9.js";import"./index-C4Bv3TLI.js";import"./get-cF5BDHN6.js";import"./resolveDefaultProps-BKBpJeVO.js";import"./isWellBehavedNumber-CjzDakCh.js";import"./PolarUtils-CTnnDHZv.js";import"./axisSelectors-7XQKMXbV.js";import"./d3-scale-Ch4lSu5M.js";import"./index-DrIBMx-a.js";import"./index-PfBmA6Mj.js";import"./renderedTicksSlice-QhE759w-.js";import"./index-D_5ex_s0.js";import"./CartesianChart-0PUgz-fD.js";import"./chartDataContext-W36SsBCK.js";import"./CategoricalChart-Bnl3KIy2.js";import"./CartesianAxis-Bufnbb1Y.js";import"./Layer-B_0rxCBF.js";import"./Text-l_2w-j-6.js";import"./pageBackground-C2L5RPBY.js";import"./useId-5cvDRGiM.js";import"./useBackwardsCompatibleTheme-Cn0U0gME.js";import"./Label-Dq-PRmXE.js";import"./ZIndexLayer-DCJHrufs.js";import"./dataEntryStyles-DFEzHfWh.js";import"./types-DbTvfnZ9.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./activeStyles-Cj23hm4O.js";import"./useAnimationId-g_gs6Adq.js";import"./Curve-BRi-m77E.js";import"./step-CRnCkLM-.js";import"./path-DyVhHtw_.js";import"./tooltipContext-Bae-_IL0.js";import"./Symbols-7PX4GXAg.js";import"./symbol-CpjRZqaq.js";import"./ActiveShapeUtils-DhsBwk0C.js";import"./RegisterGraphicalItemId-nMZsofRB.js";import"./ErrorBarContext-teR4Ylft.js";import"./SetGraphicalItem-BVP4iL4X.js";import"./useEffectiveDataKey-FDkhhmBo.js";import"./CSSTransitionAnimate-0QO2qq4I.js";import"./util-Dxo8gN5i.js";import"./useElementOffset-Bo0SdiMk.js";import"./uniqBy-LQrir7c7.js";import"./iteratee-B9ldopPv.js";import"./isArguments-yB-y1yaH.js";import"./Cross-Zt2D04Zu.js";import"./Rectangle-CLSVVjg0.js";import"./Sector-Bm0U5Ptd.js";const Dr={component:p,argTypes:m,docs:{autodocs:!1}},t={render:o=>{const s=[{x:100,y:200,errorY:30,errorX:30},{x:120,y:100,errorY:[500,30],errorX:[200,30]},{x:170,y:300,errorY:[10,20],errorX:20},{x:140,y:250,errorY:30,errorX:20},{x:150,y:400,errorY:[20,300],errorX:30},{x:110,y:280,errorY:40,errorX:40}];return r.createElement(p,{width:400,height:400,margin:{top:20,right:20,bottom:20,left:20},layout:o.layout},r.createElement(d,null),r.createElement(c,{type:"number",dataKey:"x",name:"stature",unit:"cm",allowDataOverflow:o.allowDataOverflow}),r.createElement(y,{type:"number",dataKey:"y",name:"weight",unit:"kg",allowDataOverflow:o.allowDataOverflow}),r.createElement(h,{name:"A school",data:s,fill:"blue"},r.createElement(e,{dataKey:"errorX",width:2,strokeWidth:3,stroke:"green",direction:"x"}),r.createElement(e,{dataKey:"errorY",width:4,strokeWidth:2,stroke:"red",direction:"y"})),r.createElement(u,{cursor:{strokeDasharray:"3 3"}}))},args:l(m),parameters:{controls:{include:["layout","allowDataOverflow"]}}},Or=["WithErrorBarsAndExtendedDomain"];var a,n,i;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
}`,...(i=(n=t.parameters)==null?void 0:n.docs)==null?void 0:i.source}}};export{t as WithErrorBarsAndExtendedDomain,Or as __namedExportsOrder,Dr as default};
