import{R as t}from"./iframe-B3Q9BieZ.js";import{g as d}from"./utils-ePvtT4un.js";import{Y as p}from"./YAxisArgs-I2w3cHIn.js";import{Y as r}from"./YAxis-DvVjGCkX.js";import{R as l}from"./zIndexSlice-sqFd1bzt.js";import{C as x}from"./ComposedChart-D1EiQGBZ.js";import{p as A}from"./Page-Cj8EiXz7.js";import{B as o}from"./Bar-D2P5vE9X.js";import{L as a}from"./Line-CqPtSHor.js";import{X as c}from"./XAxis-D2lT-EVr.js";import{T as g}from"./Tooltip-C3uuRk_U.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./Label-DqBOaUXK.js";import"./Text-vJxvkBMX.js";import"./resolveDefaultProps-BfktPE_A.js";import"./ZIndexLayer-D273i2uL.js";import"./index-BCJi3GJg.js";import"./index-vYqwVqCg.js";import"./PolarUtils-CTnnDHZv.js";import"./polarAxisSelectors-DPwJ5LbZ.js";import"./throttle-D7B_fzZD.js";import"./axisSelectors-DvTAFEOk.js";import"./d3-scale-C94aTEcE.js";import"./CartesianAxis-COGs4upa.js";import"./Layer-CM6IL6TI.js";import"./types-D4j33x05.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-1Ib_b5H5.js";import"./index-DcskzPeY.js";import"./index-orRyden8.js";import"./isBuffer-AZzsDYE7.js";import"./RechartsWrapper-Cfrbgio_.js";import"./index-CII0l-xa.js";import"./fillDefinitions-DFJ8_pt7.js";import"./CartesianChart-Cr3Ujgb_.js";import"./chartDataContext-BZMC5ZNk.js";import"./CategoricalChart-DW1p8FyC.js";import"./dataEntryStyles-DvvOVUEP.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-uE9FLPYH.js";import"./useAnimationId-2VJaNjeA.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-axs2zJFe.js";import"./tooltipContext-DrUQbg9p.js";import"./ErrorBarContext-B613I2F5.js";import"./activeStyles-BLYIXqri.js";import"./SetGraphicalItem-B51ay4rQ.js";import"./getZIndexFromUnknown-CaJBxPdw.js";import"./useEffectiveDataKey-CELfbHpr.js";import"./omit-DiesSGF7.js";import"./isArguments-yB-y1yaH.js";import"./getRadiusAndStrokeWidthFromDot-CVv--GX5.js";import"./Curve-1WEPDMRv.js";import"./step-CLCxHiga.js";import"./path-BBMZd4YL.js";import"./ActivePoints-tqDqo9N4.js";import"./Dot-ClUpNew-.js";import"./Symbols-CWY2nbRa.js";import"./symbol-MUjZPdnP.js";import"./useElementOffset-BjLkxFtO.js";import"./uniqBy-BY6j9O5X.js";import"./iteratee-CK_fQl9o.js";import"./Cross-D4GVRzZw.js";import"./Sector-C3a2lDVG.js";const Rt={component:r,argTypes:p,title:"Examples/cartesian/YAxis/WithLeftAndRightAxes"},e={render:i=>t.createElement("article",{style:{display:"flex",flexDirection:"column"}},t.createElement("div",{style:{width:"100%"}},t.createElement(l,{width:"100%",height:500},t.createElement(x,{data:A},t.createElement(o,{dataKey:"pv",fill:"red",yAxisId:"right"}),t.createElement(o,{dataKey:"uv",fill:"red",yAxisId:"right-mirror"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left-mirror"}),t.createElement(c,{padding:{left:50,right:50},dataKey:"name",scale:"band"}),t.createElement(r,{...i,yAxisId:"left",orientation:"left",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"left-mirror",orientation:"left",mirror:!0,tickCount:8}),t.createElement(r,{...i,yAxisId:"right",orientation:"right",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"right-mirror",orientation:"right",mirror:!0,tickCount:20}),t.createElement(g,null)))),t.createElement("h4",null,`When an AxisId is specified on all provided axes of one type (XAxis, YAxis, ZAxis), recharts requires a
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
