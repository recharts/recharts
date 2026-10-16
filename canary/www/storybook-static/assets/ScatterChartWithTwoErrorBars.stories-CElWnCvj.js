import{R as r}from"./iframe-D9OaE0-D.js";import{g as l}from"./utils-ePvtT4un.js";import{S as m}from"./ScatterChartArgs-BpaDSsyX.js";import{S as p}from"./ScatterChart-DQunQhtu.js";import{C as d}from"./CartesianGrid-k2q49IQD.js";import{X as c}from"./XAxis-jEEi2ah-.js";import{Y as y}from"./YAxis-B27MwDT8.js";import{S as h}from"./Scatter-CyyvkUfs.js";import{E as e}from"./ErrorBar-DX44hlU0.js";import{T as u}from"./Tooltip-D5KEPQtn.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-2JOV4OxH.js";import"./zIndexSlice-C6kYgFGy.js";import"./throttle-C2SndTCZ.js";import"./index-CPbI-VNQ.js";import"./index-Dk0thkU_.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-BdEIFooo.js";import"./isWellBehavedNumber-BGqhKh1u.js";import"./PolarUtils-CTnnDHZv.js";import"./axisSelectors-D_Wp4SpS.js";import"./d3-scale-C7A9n28f.js";import"./index-BY4SHn_n.js";import"./index-Bvh82Xr6.js";import"./renderedTicksSlice-PaBI4ux9.js";import"./index-Dd8asFuH.js";import"./CartesianChart-FZa6BBKS.js";import"./chartDataContext-Cp5Fg0uV.js";import"./CategoricalChart-CEVp6apd.js";import"./CartesianAxis-piiyQKSw.js";import"./Layer-D4toxw-K.js";import"./Text-BzPsoW0G.js";import"./pageBackground-Cv-86bVo.js";import"./useId-DeYBD4I8.js";import"./useBackwardsCompatibleTheme-ClikVWmk.js";import"./Label-DM3WzLWy.js";import"./ZIndexLayer-D_H7NPBA.js";import"./types-CXdLVzsF.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./activeStyles-8VQiBHQs.js";import"./useAnimationId-D-wfB7qE.js";import"./dataEntryStyles-Bho6MXC7.js";import"./Curve-BeWRx8o8.js";import"./step-BNV5-s-4.js";import"./path-DyVhHtw_.js";import"./tooltipContext-xzp5Odnb.js";import"./Symbols-CbfWA2CL.js";import"./symbol-Cw1fMt1F.js";import"./ActiveShapeUtils-Dsfqnr6i.js";import"./ErrorBarContext-CIfQ1Dv4.js";import"./GraphicalItemClipPath-DMgrRmW6.js";import"./SetGraphicalItem-jAe7eVS9.js";import"./useEffectiveDataKey-B44sET-2.js";import"./CSSTransitionAnimate-CaozM-S1.js";import"./util-Dxo8gN5i.js";import"./useElementOffset-ZfP2Owcx.js";import"./uniqBy-yYv24bjR.js";import"./iteratee-4GlLraWT.js";import"./Cross-BGSaT5oq.js";import"./Rectangle-BseNEmt0.js";import"./Sector-OwaEg4iu.js";const Sr={component:p,argTypes:m,docs:{autodocs:!1}},t={render:o=>{const s=[{x:100,y:200,errorY:30,errorX:30},{x:120,y:100,errorY:[500,30],errorX:[200,30]},{x:170,y:300,errorY:[10,20],errorX:20},{x:140,y:250,errorY:30,errorX:20},{x:150,y:400,errorY:[20,300],errorX:30},{x:110,y:280,errorY:40,errorX:40}];return r.createElement(p,{width:400,height:400,margin:{top:20,right:20,bottom:20,left:20},layout:o.layout},r.createElement(d,null),r.createElement(c,{type:"number",dataKey:"x",name:"stature",unit:"cm",allowDataOverflow:o.allowDataOverflow}),r.createElement(y,{type:"number",dataKey:"y",name:"weight",unit:"kg",allowDataOverflow:o.allowDataOverflow}),r.createElement(h,{name:"A school",data:s,fill:"blue"},r.createElement(e,{dataKey:"errorX",width:2,strokeWidth:3,stroke:"green",direction:"x"}),r.createElement(e,{dataKey:"errorY",width:4,strokeWidth:2,stroke:"red",direction:"y"})),r.createElement(u,{cursor:{strokeDasharray:"3 3"}}))},args:l(m),parameters:{controls:{include:["layout","allowDataOverflow"]}}},Dr=["WithErrorBarsAndExtendedDomain"];var a,n,i;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
