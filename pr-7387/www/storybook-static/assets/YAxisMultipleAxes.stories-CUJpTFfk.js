import{c as t}from"./iframe-C5MHh42j.js";import{g as d}from"./utils-ePvtT4un.js";import{Y as p}from"./YAxisArgs-CS8VIEtE.js";import{Y as r}from"./YAxis-BesflX3C.js";import{g as l}from"./zIndexSlice-BAxAD9Hd.js";import{C as x}from"./ComposedChart-WRhT-Z7E.js";import{p as c}from"./Page-DPte-9pC.js";import{B as o}from"./Bar-OdA0Uymu.js";import{L as a}from"./Line-Das4hafc.js";import{X as A}from"./XAxis-Dv4taIi_.js";import{T as g}from"./Tooltip-O--widbV.js";import"./preload-helper-Dp1pzeXC.js";import"./get-w_pNkTrF.js";import"./CartesianAxis-hicrxO07.js";import"./Layer-BTdnKXgq.js";import"./resolveDefaultProps-50eaHBP1.js";import"./Text-Dd3m04ll.js";import"./DOMUtils-DPyYMl93.js";import"./isWellBehavedNumber-Fry2DCdR.js";import"./Label-DPuGsfIc.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-BqFMND8v.js";import"./index-BtGgX82p.js";import"./index-CtWdDAnJ.js";import"./types-DIsFNNUR.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-DJahilIk.js";import"./immer-BEKu5nAB.js";import"./RechartsWrapper-BXiQbHg3.js";import"./index-DTHX5ifG.js";import"./index-Ddmpcm8d.js";import"./axisSelectors-l2EEhLAN.js";import"./d3-scale-DROX3YQd.js";import"./CartesianChart-DdDBbaWH.js";import"./chartDataContext-B3IBL15G.js";import"./CategoricalChart-iSFUJ3mM.js";import"./tooltipContext-CC-43_y7.js";import"./ReactUtils-BVj-7vfo.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-Hfg__8px.js";import"./useAnimationId-D3rbPHOS.js";import"./ActiveShapeUtils-B0TwIl-q.js";import"./RegisterGraphicalItemId-D7dR1c0l.js";import"./ErrorBarContext-BqD49I1j.js";import"./GraphicalItemClipPath-D6R49ofK.js";import"./SetGraphicalItem-3zA0iFCt.js";import"./getZIndexFromUnknown-BPhdYG3N.js";import"./graphicalItemSelectors-CXCIX9f6.js";import"./Curve-thevB7o-.js";import"./step-CW5jkV_V.js";import"./path-DyVhHtw_.js";import"./ActivePoints-hHK0AETy.js";import"./Dot-C9bGlN1x.js";import"./getRadiusAndStrokeWidthFromDot-Om5tnWtK.js";import"./useElementOffset-CwximdNT.js";import"./uniqBy-Ba9KhnrU.js";import"./iteratee-CTywduMo.js";import"./Cross-DeACoSyY.js";import"./Sector-B-A7jX2D.js";const Et={component:r,argTypes:p,title:"Examples/cartesian/YAxis/WithLeftAndRightAxes"},e={render:i=>t.createElement("article",{style:{display:"flex",flexDirection:"column"}},t.createElement("div",{style:{width:"100%"}},t.createElement(l,{width:"100%",height:500},t.createElement(x,{data:c},t.createElement(o,{dataKey:"pv",fill:"red",yAxisId:"right"}),t.createElement(o,{dataKey:"uv",fill:"red",yAxisId:"right-mirror"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left-mirror"}),t.createElement(A,{padding:{left:50,right:50},dataKey:"name",scale:"band"}),t.createElement(r,{...i,yAxisId:"left",orientation:"left",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"left-mirror",orientation:"left",mirror:!0,tickCount:8}),t.createElement(r,{...i,yAxisId:"right",orientation:"right",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"right-mirror",orientation:"right",mirror:!0,tickCount:20}),t.createElement(g,null)))),t.createElement("h4",null,`When an AxisId is specified on all provided axes of one type (XAxis, YAxis, ZAxis), recharts requires a
      {x,y,z}AxisId on the corresponding graphical element`)),args:d(p)};var m,s,n;e.parameters={...e.parameters,docs:{...(m=e.parameters)==null?void 0:m.docs,source:{originalSource:`{
  render: (args: Args) => {
    return <article style={{
      display: 'flex',
      flexDirection: 'column'
    }}>
        <div style={{
        width: '100%'
      }}>
          <ResponsiveContainer width="100%" height={500}>
            <ComposedChart data={pageData}>
              <Bar dataKey="pv" fill="red" yAxisId="right" />
              <Bar dataKey="uv" fill="red" yAxisId="right-mirror" />
              <Line dataKey="amt" fill="green" yAxisId="left" />
              <Line dataKey="amt" fill="green" yAxisId="left-mirror" />

              <XAxis padding={{
              left: 50,
              right: 50
            }} dataKey="name" scale="band" />
              <YAxis {...args} yAxisId="left" orientation="left" domain={['dataMin-20', 'dataMax']} />
              <YAxis {...args} yAxisId="left-mirror" orientation="left" mirror tickCount={8} />
              <YAxis {...args} yAxisId="right" orientation="right" domain={['dataMin-20', 'dataMax']} />
              <YAxis {...args} yAxisId="right-mirror" orientation="right" mirror tickCount={20} />

              <Tooltip />
            </ComposedChart>
          </ResponsiveContainer>
        </div>
        <h4>
          {\`When an AxisId is specified on all provided axes of one type (XAxis, YAxis, ZAxis), recharts requires a
      {x,y,z}AxisId on the corresponding graphical element\`}
        </h4>
      </article>;
  },
  args: getStoryArgsFromArgsTypesObject(YAxisArgs)
}`,...(n=(s=e.parameters)==null?void 0:s.docs)==null?void 0:n.source}}};const Ct=["WithLeftAndRightAxes"];export{e as WithLeftAndRightAxes,Ct as __namedExportsOrder,Et as default};
