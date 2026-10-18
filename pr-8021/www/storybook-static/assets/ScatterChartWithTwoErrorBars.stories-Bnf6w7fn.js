import{R as r}from"./iframe-wnwgjoCj.js";import{g as l}from"./utils-ePvtT4un.js";import{S as m}from"./ScatterChartArgs-BpaDSsyX.js";import{S as p}from"./ScatterChart-BRaZ1Xhv.js";import{C as d}from"./CartesianGrid-CFsinw1N.js";import{X as c}from"./XAxis-OfYaBnId.js";import{Y as y}from"./YAxis-DhrqAxya.js";import{S as h}from"./Scatter-BmpESbzY.js";import{E as e}from"./ErrorBar-Br-Vxoz5.js";import{T as u}from"./Tooltip-Dk8i1M-5.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-DrgosUQO.js";import"./zIndexSlice-BfQZJe7w.js";import"./throttle-Bu0PLbpB.js";import"./index--oPyKjHy.js";import"./index-B1dVEDKi.js";import"./get-cF5BDHN6.js";import"./resolveDefaultProps-CdGDq9Vj.js";import"./isWellBehavedNumber-DvYM1ftp.js";import"./PolarUtils-CTnnDHZv.js";import"./axisSelectors-Dv0Cy_aQ.js";import"./d3-scale-n5yhpKoa.js";import"./index-C6zbwdmq.js";import"./index-2cwaP_WN.js";import"./renderedTicksSlice-Cn46HOnO.js";import"./index-Cq1ZqvVj.js";import"./CartesianChart-9oQUjO4z.js";import"./chartDataContext-CoZTTCWp.js";import"./CategoricalChart-CFXgb39d.js";import"./CartesianAxis-CUGdPJVD.js";import"./Layer-BgNSosTV.js";import"./Text-ObnDDpE8.js";import"./pageBackground-BTX1FgdM.js";import"./useId-Bld63G6d.js";import"./useBackwardsCompatibleTheme-CSSDROrC.js";import"./Label-BPPVHUQ9.js";import"./ZIndexLayer-BcVUzqGJ.js";import"./types-D9qqzEWR.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./activeStyles-eWYsa4HP.js";import"./useAnimationId-B2QPH2im.js";import"./dataEntryStyles-_WoJg0hd.js";import"./Curve-Cxo9gi5h.js";import"./step-DmpFhtYe.js";import"./path-DyVhHtw_.js";import"./tooltipContext-BVMH7WYj.js";import"./Symbols-CtP0pqPx.js";import"./symbol-DPKZCZYD.js";import"./ActiveShapeUtils-YpG0tVZY.js";import"./ErrorBarContext-cvkea_Ls.js";import"./GraphicalItemClipPath-B95PfJCu.js";import"./SetGraphicalItem-CAbcIlZe.js";import"./useEffectiveDataKey-D9X2vego.js";import"./CSSTransitionAnimate-BRPkVdDc.js";import"./util-Dxo8gN5i.js";import"./useElementOffset-yolstnoz.js";import"./uniqBy-CW7TvLNO.js";import"./iteratee-CpII3xDe.js";import"./isArguments-yB-y1yaH.js";import"./Cross-Cim55ibn.js";import"./Rectangle-P3uT3dWy.js";import"./Sector-N_gwCLB7.js";const Dr={component:p,argTypes:m,docs:{autodocs:!1}},t={render:o=>{const s=[{x:100,y:200,errorY:30,errorX:30},{x:120,y:100,errorY:[500,30],errorX:[200,30]},{x:170,y:300,errorY:[10,20],errorX:20},{x:140,y:250,errorY:30,errorX:20},{x:150,y:400,errorY:[20,300],errorX:30},{x:110,y:280,errorY:40,errorX:40}];return r.createElement(p,{width:400,height:400,margin:{top:20,right:20,bottom:20,left:20},layout:o.layout},r.createElement(d,null),r.createElement(c,{type:"number",dataKey:"x",name:"stature",unit:"cm",allowDataOverflow:o.allowDataOverflow}),r.createElement(y,{type:"number",dataKey:"y",name:"weight",unit:"kg",allowDataOverflow:o.allowDataOverflow}),r.createElement(h,{name:"A school",data:s,fill:"blue"},r.createElement(e,{dataKey:"errorX",width:2,strokeWidth:3,stroke:"green",direction:"x"}),r.createElement(e,{dataKey:"errorY",width:4,strokeWidth:2,stroke:"red",direction:"y"})),r.createElement(u,{cursor:{strokeDasharray:"3 3"}}))},args:l(m),parameters:{controls:{include:["layout","allowDataOverflow"]}}},Or=["WithErrorBarsAndExtendedDomain"];var a,n,i;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
