import{R as t}from"./iframe-Dckhh8TP.js";import{g as d}from"./utils-ePvtT4un.js";import{Y as p}from"./YAxisArgs-CwatvU9z.js";import{Y as r}from"./YAxis-C2iUlU97.js";import{R as l}from"./zIndexSlice-DvqxU_fJ.js";import{C as x}from"./ComposedChart-CwkBXCx2.js";import{p as A}from"./Page-Cj8EiXz7.js";import{B as o}from"./Bar-Bt74CXWa.js";import{L as a}from"./Line-B8-PDDhu.js";import{X as c}from"./XAxis-DZSKVUHO.js";import{T as g}from"./Tooltip-Biuxj1Al.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./Label-BPfiwVrc.js";import"./Text-ixAKnQea.js";import"./resolveDefaultProps-DoWt88Bk.js";import"./pageBackground-Bsi5t8mD.js";import"./useId-BAdhA99P.js";import"./ZIndexLayer-DYLMgu3X.js";import"./index-BTZnO4jD.js";import"./index-BZ7EiUeE.js";import"./PolarUtils-CTnnDHZv.js";import"./polarAxisSelectors-ClcX1Sfv.js";import"./throttle-nSMGIYBk.js";import"./dataEntryStyles-C1y9indW.js";import"./axisSelectors-iU-8zlMU.js";import"./d3-scale-CVKSBoJ3.js";import"./CartesianAxis-B8NfN4oe.js";import"./Layer-Gqc-Z-cf.js";import"./types-orR6Wh5t.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-BoRV-MuC.js";import"./index-Bf6cRldK.js";import"./index-DfEyCTx4.js";import"./isBuffer-AZzsDYE7.js";import"./RechartsWrapper-DN3bSeN0.js";import"./index-BEi4ZfWK.js";import"./CartesianChart-ds3qEH6n.js";import"./chartDataContext-CqDlrvyh.js";import"./CategoricalChart-DiJWdssm.js";import"./activeStyles-DNDVPQVu.js";import"./useAnimationId-DwypxVGS.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-BCB0dWGj.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-CZclTza4.js";import"./tooltipContext-C_c7dwWf.js";import"./RegisterGraphicalItemId-jdQ-nkDB.js";import"./ErrorBarContext-D50rt7ip.js";import"./SetGraphicalItem-B5R69AhG.js";import"./getZIndexFromUnknown-BiGZnT5a.js";import"./useEffectiveDataKey-Dh_S8XsG.js";import"./omit-D41nXwZ-.js";import"./isArguments-yB-y1yaH.js";import"./Curve-CPC4BdrH.js";import"./step-Be2Z97Jg.js";import"./path-DyVhHtw_.js";import"./ActivePoints-DqM_7cwl.js";import"./Dot-DLFfnKNz.js";import"./Symbols-CuFQCUW8.js";import"./symbol-DC65CFDy.js";import"./getRadiusAndStrokeWidthFromDot-BPZD6QvL.js";import"./useElementOffset-CkmVvcV5.js";import"./uniqBy-DzK7VybD.js";import"./iteratee-NdqP5HqK.js";import"./Cross-DHf5MgcB.js";import"./Sector-DakbPoQS.js";const Tt={component:r,argTypes:p,title:"Examples/cartesian/YAxis/WithLeftAndRightAxes"},e={render:i=>t.createElement("article",{style:{display:"flex",flexDirection:"column"}},t.createElement("div",{style:{width:"100%"}},t.createElement(l,{width:"100%",height:500},t.createElement(x,{data:A},t.createElement(o,{dataKey:"pv",fill:"red",yAxisId:"right"}),t.createElement(o,{dataKey:"uv",fill:"red",yAxisId:"right-mirror"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left-mirror"}),t.createElement(c,{padding:{left:50,right:50},dataKey:"name",scale:"band"}),t.createElement(r,{...i,yAxisId:"left",orientation:"left",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"left-mirror",orientation:"left",mirror:!0,tickCount:8}),t.createElement(r,{...i,yAxisId:"right",orientation:"right",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"right-mirror",orientation:"right",mirror:!0,tickCount:20}),t.createElement(g,null)))),t.createElement("h4",null,`When an AxisId is specified on all provided axes of one type (XAxis, YAxis, ZAxis), recharts requires a
      {x,y,z}AxisId on the corresponding graphical element`)),args:d(p)},Wt=["WithLeftAndRightAxes"];var n,m,s;e.parameters={...e.parameters,docs:{...(n=e.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
}`,...(s=(m=e.parameters)==null?void 0:m.docs)==null?void 0:s.source}}};export{e as WithLeftAndRightAxes,Wt as __namedExportsOrder,Tt as default};
