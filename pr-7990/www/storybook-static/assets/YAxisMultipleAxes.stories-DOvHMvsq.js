import{R as t}from"./iframe--dVKNbCw.js";import{g as d}from"./utils-ePvtT4un.js";import{Y as p}from"./YAxisArgs-CwatvU9z.js";import{Y as r}from"./YAxis-dK_EcPxW.js";import{R as l}from"./zIndexSlice-CpZXb3K1.js";import{C as x}from"./ComposedChart-BWbHkL8w.js";import{p as A}from"./Page-Cj8EiXz7.js";import{B as o}from"./Bar-D5txjAak.js";import{L as a}from"./Line-C0IgQdK8.js";import{X as c}from"./XAxis-CO1xFj8-.js";import{T as g}from"./Tooltip-CUr8_T9Y.js";import"./preload-helper-Dp1pzeXC.js";import"./get-C2VjdU0L.js";import"./Label-BMbpqhNX.js";import"./Text-ah79KUdU.js";import"./resolveDefaultProps-19MGuD5L.js";import"./pageBackground-BuDL1xc_.js";import"./isWellBehavedNumber-D1RSe1xb.js";import"./useId--mgRrHy6.js";import"./useBackwardsCompatibleTheme-D4D1b67A.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-BW0svFjl.js";import"./index-BwEVofa3.js";import"./index-vo2of-1-.js";import"./axisSelectors-asW4dLtq.js";import"./throttle-Vdk2BIuN.js";import"./d3-scale-Daiirif0.js";import"./CartesianAxis-DUU6iCh1.js";import"./Layer-DfItUnsr.js";import"./types-CJbJ0IDT.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-DVZBX-9w.js";import"./index-11dfO-im.js";import"./index-Bm7T0tPh.js";import"./isBuffer-BG75eWKN.js";import"./RechartsWrapper-DRzg3fGD.js";import"./index-BXnIb1gt.js";import"./CartesianChart-H_ULY9r1.js";import"./chartDataContext-BbvPlaK7.js";import"./CategoricalChart-D868Clfo.js";import"./activeStyles-Kpuk4WPq.js";import"./useAnimationId-Rf69jy07.js";import"./dataEntryStyles-Cq_oAnz_.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-60MF1n22.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-DZz0A4i8.js";import"./tooltipContext-D2BfM0X_.js";import"./ErrorBarContext-C4YeRw8_.js";import"./GraphicalItemClipPath-CTsg__fe.js";import"./SetGraphicalItem-BLl6tKFV.js";import"./getZIndexFromUnknown-DqBcyogf.js";import"./useEffectiveDataKey-DluS1fAA.js";import"./Curve-goXmosWw.js";import"./step-Cg-bszWe.js";import"./path-DyVhHtw_.js";import"./ActivePoints-DkHKRT6s.js";import"./Dot-SmgdmdqO.js";import"./getRadiusAndStrokeWidthFromDot-CZD0qUAD.js";import"./useElementOffset-Bk-O-pyy.js";import"./uniqBy--toTvk6J.js";import"./iteratee-DuvGNWXG.js";import"./Cross-D5_gCULz.js";import"./Sector-BY6auqMT.js";const Mt={component:r,argTypes:p,title:"Examples/cartesian/YAxis/WithLeftAndRightAxes"},e={render:i=>t.createElement("article",{style:{display:"flex",flexDirection:"column"}},t.createElement("div",{style:{width:"100%"}},t.createElement(l,{width:"100%",height:500},t.createElement(x,{data:A},t.createElement(o,{dataKey:"pv",fill:"red",yAxisId:"right"}),t.createElement(o,{dataKey:"uv",fill:"red",yAxisId:"right-mirror"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left-mirror"}),t.createElement(c,{padding:{left:50,right:50},dataKey:"name",scale:"band"}),t.createElement(r,{...i,yAxisId:"left",orientation:"left",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"left-mirror",orientation:"left",mirror:!0,tickCount:8}),t.createElement(r,{...i,yAxisId:"right",orientation:"right",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"right-mirror",orientation:"right",mirror:!0,tickCount:20}),t.createElement(g,null)))),t.createElement("h4",null,`When an AxisId is specified on all provided axes of one type (XAxis, YAxis, ZAxis), recharts requires a
      {x,y,z}AxisId on the corresponding graphical element`)),args:d(p)},Rt=["WithLeftAndRightAxes"];var n,m,s;e.parameters={...e.parameters,docs:{...(n=e.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
}`,...(s=(m=e.parameters)==null?void 0:m.docs)==null?void 0:s.source}}};export{e as WithLeftAndRightAxes,Rt as __namedExportsOrder,Mt as default};
