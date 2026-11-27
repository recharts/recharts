import{R as t}from"./iframe-DP6zAp54.js";import{g as d}from"./utils-ePvtT4un.js";import{Y as p}from"./YAxisArgs-I2w3cHIn.js";import{Y as r}from"./YAxis-CRTIqg01.js";import{R as l}from"./zIndexSlice-CdFbAgG_.js";import{C as x}from"./ComposedChart-Djbyfnt-.js";import{p as A}from"./Page-Cj8EiXz7.js";import{B as o}from"./Bar-D3Ep8y64.js";import{L as a}from"./Line-CatZrMVF.js";import{X as c}from"./XAxis-wrPg27KZ.js";import{T as g}from"./Tooltip-aHvmiEwK.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-CSMJ250z.js";import"./get-CjriyByo.js";import"./Label-DIQKMqhX.js";import"./Text-DGNAB76g.js";import"./ZIndexLayer-DcCIRQcN.js";import"./index-XgfMJOXy.js";import"./index-CYR3TkYm.js";import"./PolarUtils-CTnnDHZv.js";import"./polarAxisSelectors-DrRxC45o.js";import"./throttle-D7lh8v3-.js";import"./axisSelectors-Rm4q15PI.js";import"./diverging-Ct01c8MP.js";import"./CartesianAxis-BW9v8-VT.js";import"./Layer-44h3-wN_.js";import"./types-DNQC58zt.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-BhuX61Ra.js";import"./index-DFp-_Wbz.js";import"./index-yomVPEkO.js";import"./isBuffer-AZzsDYE7.js";import"./RechartsWrapper-DOH9cWj9.js";import"./index-BfoEz1rZ.js";import"./fillDefinitions-BqFRhPDs.js";import"./CartesianChart-DMNhl37Y.js";import"./chartDataContext-Dgk8EHkE.js";import"./CategoricalChart-C4A4gzgw.js";import"./dataEntryStyles-DojbuA9r.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-Cg7APWAF.js";import"./useAnimationId-EekDlSpG.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-DYM7TwK-.js";import"./tooltipContext-DK0-RXb9.js";import"./ErrorBarContext-CmnSonHd.js";import"./activeStyles-B0VCWO8T.js";import"./SetGraphicalItem-CNROvnrS.js";import"./getZIndexFromUnknown-DNrX2x-5.js";import"./useEffectiveDataKey-DdiUIHde.js";import"./omit-3dXj1SBX.js";import"./isArguments-yB-y1yaH.js";import"./getRadiusAndStrokeWidthFromDot-DHwNW-IB.js";import"./Curve-DQP2JLjt.js";import"./step-DvtT47Gl.js";import"./path-BBMZd4YL.js";import"./ActivePoints-C-GzPRnQ.js";import"./Dot-P3TO-0hC.js";import"./Symbols-D-J-NUlP.js";import"./symbol-CoNKi1UW.js";import"./useElementOffset-CL3Lm6d5.js";import"./uniqBy-BNdjw3X0.js";import"./iteratee-BHwSZVIk.js";import"./Cross-B1K9Yltn.js";import"./Sector-0McMm1EY.js";const Rt={component:r,argTypes:p,title:"Examples/cartesian/YAxis/WithLeftAndRightAxes"},e={render:i=>t.createElement("article",{style:{display:"flex",flexDirection:"column"}},t.createElement("div",{style:{width:"100%"}},t.createElement(l,{width:"100%",height:500},t.createElement(x,{data:A},t.createElement(o,{dataKey:"pv",fill:"red",yAxisId:"right"}),t.createElement(o,{dataKey:"uv",fill:"red",yAxisId:"right-mirror"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left-mirror"}),t.createElement(c,{padding:{left:50,right:50},dataKey:"name",scale:"band"}),t.createElement(r,{...i,yAxisId:"left",orientation:"left",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"left-mirror",orientation:"left",mirror:!0,tickCount:8}),t.createElement(r,{...i,yAxisId:"right",orientation:"right",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"right-mirror",orientation:"right",mirror:!0,tickCount:20}),t.createElement(g,null)))),t.createElement("h4",null,`When an AxisId is specified on all provided axes of one type (XAxis, YAxis, ZAxis), recharts requires a
      {x,y,z}AxisId on the corresponding graphical element`)),args:d(p)},Lt=["WithLeftAndRightAxes"];var n,m,s;e.parameters={...e.parameters,docs:{...(n=e.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
}`,...(s=(m=e.parameters)==null?void 0:m.docs)==null?void 0:s.source}}};export{e as WithLeftAndRightAxes,Lt as __namedExportsOrder,Rt as default};
