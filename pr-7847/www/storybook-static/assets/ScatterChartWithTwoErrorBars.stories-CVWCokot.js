import{R as r}from"./iframe-hd_pfHvo.js";import{g as l}from"./utils-ePvtT4un.js";import{S as m}from"./ScatterChartArgs-BpaDSsyX.js";import{S as p}from"./ScatterChart-BKwhzIXW.js";import{C as d}from"./CartesianGrid-CjQhUT8W.js";import{X as c}from"./XAxis-DIhH_NdP.js";import{Y as y}from"./YAxis-Bfby8-tG.js";import{S as h}from"./Scatter-DF5c7JII.js";import{E as e}from"./ErrorBar-B8GWPK4r.js";import{T as u}from"./Tooltip-CNZscDqQ.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-CyksNjdk.js";import"./zIndexSlice-Dp2BKzs8.js";import"./throttle-C2q4COo1.js";import"./index-v0QewD8A.js";import"./index-SCBhOffb.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-drD7xYIQ.js";import"./isWellBehavedNumber-C1tuJPSP.js";import"./PolarUtils-CTnnDHZv.js";import"./axisSelectors-eHIx7hMS.js";import"./d3-scale-CciOkO_z.js";import"./index-C3NZEEPx.js";import"./index-Dl1k2Uag.js";import"./renderedTicksSlice-CD7ArbZx.js";import"./index-zFom7GTd.js";import"./CartesianChart-lsa6cjfM.js";import"./chartDataContext-BzYnwGm5.js";import"./CategoricalChart-DK0H-Nig.js";import"./CartesianAxis-Bczd13d5.js";import"./Layer-egOiXfr6.js";import"./Text-C6732HHA.js";import"./DOMUtils-B5fqbFU1.js";import"./useId-_Yta7G-c.js";import"./useBackwardsCompatibleTheme-SiYIdPDZ.js";import"./Label-DeYie9Lh.js";import"./ZIndexLayer-BHjO29Bs.js";import"./types-B1tRcN2v.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./AnimatedItems-DCH1YBa_.js";import"./useAnimationId-D0lfWmyy.js";import"./Curve-MYVJeGQI.js";import"./step-C33N2LGT.js";import"./path-DyVhHtw_.js";import"./tooltipContext-NM9A8S-z.js";import"./Symbols-CB0dVqBg.js";import"./symbol-7gumIrmR.js";import"./ActiveShapeUtils-BDpXGuZx.js";import"./RegisterGraphicalItemId-_fhB3pIC.js";import"./ErrorBarContext-BU3wkqbx.js";import"./GraphicalItemClipPath-Bsg-Zi-D.js";import"./SetGraphicalItem-CYmPmGcd.js";import"./useGraphicalItemIdentity-hHj77cNE.js";import"./CSSTransitionAnimate-CSxaSQ6S.js";import"./util-Dxo8gN5i.js";import"./useElementOffset-Bjp7QiHs.js";import"./uniqBy-4GbLHGYo.js";import"./iteratee-BHWq50Tg.js";import"./Cross-DdXKijQJ.js";import"./Rectangle-DOvVk1du.js";import"./Sector-CFinmXte.js";const Sr={component:p,argTypes:m,docs:{autodocs:!1}},t={render:o=>{const s=[{x:100,y:200,errorY:30,errorX:30},{x:120,y:100,errorY:[500,30],errorX:[200,30]},{x:170,y:300,errorY:[10,20],errorX:20},{x:140,y:250,errorY:30,errorX:20},{x:150,y:400,errorY:[20,300],errorX:30},{x:110,y:280,errorY:40,errorX:40}];return r.createElement(p,{width:400,height:400,margin:{top:20,right:20,bottom:20,left:20},layout:o.layout},r.createElement(d,null),r.createElement(c,{type:"number",dataKey:"x",name:"stature",unit:"cm",allowDataOverflow:o.allowDataOverflow}),r.createElement(y,{type:"number",dataKey:"y",name:"weight",unit:"kg",allowDataOverflow:o.allowDataOverflow}),r.createElement(h,{name:"A school",data:s,fill:"blue"},r.createElement(e,{dataKey:"errorX",width:2,strokeWidth:3,stroke:"green",direction:"x"}),r.createElement(e,{dataKey:"errorY",width:4,strokeWidth:2,stroke:"red",direction:"y"})),r.createElement(u,{cursor:{strokeDasharray:"3 3"}}))},args:l(m),parameters:{controls:{include:["layout","allowDataOverflow"]}}},Dr=["WithErrorBarsAndExtendedDomain"];var a,n,i;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
