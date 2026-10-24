import{R as t}from"./iframe-B4_QwD1D.js";import{g as d}from"./utils-ePvtT4un.js";import{Y as p}from"./YAxisArgs-CwatvU9z.js";import{Y as r}from"./YAxis-BXoC-zzw.js";import{R as l}from"./zIndexSlice-CBhoAbgS.js";import{C as x}from"./ComposedChart-BYrbpJyI.js";import{p as A}from"./Page-Cj8EiXz7.js";import{B as o}from"./Bar-CLApzcZQ.js";import{L as a}from"./Line-B7tq3Xvl.js";import{X as c}from"./XAxis-ClMwOqtx.js";import{T as g}from"./Tooltip-DXjxDqw5.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./Label-bs3lrZa-.js";import"./Text-D60EpHHD.js";import"./resolveDefaultProps-DIsbUszc.js";import"./pageBackground-BarjFxCc.js";import"./isWellBehavedNumber-D8aaIUAh.js";import"./useId-BGuiMtTj.js";import"./useBackwardsCompatibleTheme-Dg3tMWv0.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-DLJnSwwV.js";import"./index-D1txtwQs.js";import"./index-BIeiuwDH.js";import"./dataEntryStyles-C6hQpsCt.js";import"./axisSelectors-BPJ5zN30.js";import"./throttle-CoBiCp2n.js";import"./d3-scale-DbsLf6d-.js";import"./CartesianAxis-Bl0Fh-eW.js";import"./Layer-Bwh0wvH7.js";import"./types-OK8mrrgc.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-Wvzb8C7M.js";import"./index-DyH5gF1W.js";import"./index-BNmMl_IP.js";import"./isBuffer-AZzsDYE7.js";import"./RechartsWrapper-D2uM5dQm.js";import"./index-D5vd9j9o.js";import"./CartesianChart-CP9pEwgo.js";import"./chartDataContext-CzT92l_t.js";import"./CategoricalChart-B_jNXI9Q.js";import"./activeStyles-B6_AFvwr.js";import"./useAnimationId-Dxw2C04Y.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-QGBOtCIB.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-Db0-CW4c.js";import"./tooltipContext-Bj46R6VX.js";import"./RegisterGraphicalItemId-bXaHC85L.js";import"./ErrorBarContext-pg2dj6kz.js";import"./SetGraphicalItem-rmoRgud5.js";import"./getZIndexFromUnknown-Pownv5WE.js";import"./useEffectiveDataKey-CJ0a7aYn.js";import"./omit-DxP95b9-.js";import"./isArguments-yB-y1yaH.js";import"./Curve-BO_4liKv.js";import"./step-ChTc0MMg.js";import"./path-DyVhHtw_.js";import"./ActivePoints-BjOHnkRU.js";import"./Dot-5O5duGce.js";import"./getRadiusAndStrokeWidthFromDot-CaBRrUqE.js";import"./useElementOffset-BsVVqcI3.js";import"./uniqBy-Cr-9UYKs.js";import"./iteratee-HAqVuPyF.js";import"./Cross-CtxqpR8d.js";import"./Sector-CD-FBM6S.js";const Lt={component:r,argTypes:p,title:"Examples/cartesian/YAxis/WithLeftAndRightAxes"},e={render:i=>t.createElement("article",{style:{display:"flex",flexDirection:"column"}},t.createElement("div",{style:{width:"100%"}},t.createElement(l,{width:"100%",height:500},t.createElement(x,{data:A},t.createElement(o,{dataKey:"pv",fill:"red",yAxisId:"right"}),t.createElement(o,{dataKey:"uv",fill:"red",yAxisId:"right-mirror"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left-mirror"}),t.createElement(c,{padding:{left:50,right:50},dataKey:"name",scale:"band"}),t.createElement(r,{...i,yAxisId:"left",orientation:"left",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"left-mirror",orientation:"left",mirror:!0,tickCount:8}),t.createElement(r,{...i,yAxisId:"right",orientation:"right",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"right-mirror",orientation:"right",mirror:!0,tickCount:20}),t.createElement(g,null)))),t.createElement("h4",null,`When an AxisId is specified on all provided axes of one type (XAxis, YAxis, ZAxis), recharts requires a
      {x,y,z}AxisId on the corresponding graphical element`)),args:d(p)},Tt=["WithLeftAndRightAxes"];var n,m,s;e.parameters={...e.parameters,docs:{...(n=e.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
}`,...(s=(m=e.parameters)==null?void 0:m.docs)==null?void 0:s.source}}};export{e as WithLeftAndRightAxes,Tt as __namedExportsOrder,Lt as default};
