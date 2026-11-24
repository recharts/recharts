import{R as t}from"./iframe-3nQ-xZag.js";import{g as d}from"./utils-ePvtT4un.js";import{Y as p}from"./YAxisArgs-I2w3cHIn.js";import{Y as r}from"./YAxis-D3gPtNIE.js";import{R as l}from"./zIndexSlice-Dm-AMY-R.js";import{C as x}from"./ComposedChart-BTAIT8TE.js";import{p as A}from"./Page-Cj8EiXz7.js";import{B as o}from"./Bar-itO9ecMI.js";import{L as a}from"./Line-BaS7SehX.js";import{X as c}from"./XAxis-DaNCZ6NZ.js";import{T as g}from"./Tooltip-DBycVl39.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-CB2UEG-j.js";import"./get-CjriyByo.js";import"./Label-CjKwBg5w.js";import"./Text-DQIY-xVt.js";import"./ZIndexLayer-5jwQGiTj.js";import"./index-GNDyZ-zm.js";import"./index-ByeDIwBG.js";import"./PolarUtils-CTnnDHZv.js";import"./polarAxisSelectors-dCOIGnCj.js";import"./throttle-VgoIbkK-.js";import"./axisSelectors-fNaznWMp.js";import"./d3-scale-Nv905U8s.js";import"./CartesianAxis-Bro405i1.js";import"./Layer-B7hf8wrq.js";import"./types-CveBZAlv.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-BwWN8huf.js";import"./index-BQJ2UTdx.js";import"./index-D4meeqfk.js";import"./isBuffer-AZzsDYE7.js";import"./RechartsWrapper-CLBNIVU_.js";import"./index-Diug9bjW.js";import"./fillDefinitions-BLnlF0KU.js";import"./CartesianChart-D8wOEODK.js";import"./chartDataContext-CxxFWOOm.js";import"./CategoricalChart-D8F0hlwY.js";import"./dataEntryStyles-31cxgZsa.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-BmKAL7wU.js";import"./useAnimationId-JHyqMuIo.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-CPk9lbeK.js";import"./tooltipContext-66QdrRb8.js";import"./ErrorBarContext-BrChGa93.js";import"./activeStyles-BALJdcO7.js";import"./SetGraphicalItem-CcSizHOA.js";import"./getZIndexFromUnknown-BYEJIr6H.js";import"./useEffectiveDataKey-DHnfGJ84.js";import"./omit-DPFHmdEz.js";import"./isArguments-yB-y1yaH.js";import"./getRadiusAndStrokeWidthFromDot-DqipViX9.js";import"./Curve-D3218arp.js";import"./step-nf1yL9aW.js";import"./path-BBMZd4YL.js";import"./ActivePoints-Ba3qB0HE.js";import"./Dot-B0shGOFT.js";import"./Symbols-tD_4MAA2.js";import"./symbol-34ANNL6v.js";import"./useElementOffset-C7XMmhpG.js";import"./uniqBy-qypsR_Io.js";import"./iteratee-Oqe1JUBW.js";import"./Cross-B8qZszvR.js";import"./Sector-DMIO8Iyd.js";const Rt={component:r,argTypes:p,title:"Examples/cartesian/YAxis/WithLeftAndRightAxes"},e={render:i=>t.createElement("article",{style:{display:"flex",flexDirection:"column"}},t.createElement("div",{style:{width:"100%"}},t.createElement(l,{width:"100%",height:500},t.createElement(x,{data:A},t.createElement(o,{dataKey:"pv",fill:"red",yAxisId:"right"}),t.createElement(o,{dataKey:"uv",fill:"red",yAxisId:"right-mirror"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left-mirror"}),t.createElement(c,{padding:{left:50,right:50},dataKey:"name",scale:"band"}),t.createElement(r,{...i,yAxisId:"left",orientation:"left",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"left-mirror",orientation:"left",mirror:!0,tickCount:8}),t.createElement(r,{...i,yAxisId:"right",orientation:"right",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"right-mirror",orientation:"right",mirror:!0,tickCount:20}),t.createElement(g,null)))),t.createElement("h4",null,`When an AxisId is specified on all provided axes of one type (XAxis, YAxis, ZAxis), recharts requires a
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
