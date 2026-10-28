import{R as t}from"./iframe-v0-Os2yM.js";import{g as d}from"./utils-ePvtT4un.js";import{Y as p}from"./YAxisArgs-CwatvU9z.js";import{Y as r}from"./YAxis-CgkQKIAn.js";import{R as l}from"./zIndexSlice-_iZ3OTIR.js";import{C as x}from"./ComposedChart-COVjVMYb.js";import{p as A}from"./Page-Cj8EiXz7.js";import{B as o}from"./Bar-D9eXHCrx.js";import{L as a}from"./Line-CMP1V8O2.js";import{X as c}from"./XAxis-DNiYKSvx.js";import{T as g}from"./Tooltip-B21ab-pA.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./Label-DI0UjsSd.js";import"./Text-CJd7Lo81.js";import"./resolveDefaultProps-BcTNVKvX.js";import"./pageBackground-BMquVDd2.js";import"./ZIndexLayer-CZxM3zqX.js";import"./index-CjGezUyu.js";import"./index-DwxXslvM.js";import"./PolarUtils-CTnnDHZv.js";import"./polarAxisSelectors-Bp8G6CJB.js";import"./throttle-CSC07CA1.js";import"./axisSelectors-Db_FhKX_.js";import"./d3-scale-Dv-uHWFd.js";import"./CartesianAxis-BkO3xjcX.js";import"./Layer--oy12MjQ.js";import"./types-BJeT-aZk.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-Z7zIrOC1.js";import"./index-DjMmN7uR.js";import"./index-COci_OUD.js";import"./isBuffer-AZzsDYE7.js";import"./RechartsWrapper-DpMxjJPI.js";import"./index-ClZJ5H50.js";import"./CartesianChart-CSMk8NrA.js";import"./ZIndexPortal-IUufwUyf.js";import"./CategoricalChart-DUPn6ZbT.js";import"./LabelList-lSE4rpjb.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-C4C7r0Pi.js";import"./useAnimationId-CXPH24GZ.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-BRXSym3E.js";import"./tooltipContext-DyQkeChB.js";import"./dataEntryStyles-DfwnSxIB.js";import"./ErrorBarContext-Dj2syV2g.js";import"./activeStyles-CbGGlVk2.js";import"./SetGraphicalItem-C-WANBtu.js";import"./getZIndexFromUnknown-8apXNn5a.js";import"./useEffectiveDataKey-DAI_6E1U.js";import"./omit-B2I6_VFk.js";import"./isArguments-yB-y1yaH.js";import"./Curve-NJea3yIB.js";import"./step-DpC9Q9rs.js";import"./path-DyVhHtw_.js";import"./ActivePoints-B5HER2Lt.js";import"./Dot-D0cTKtS9.js";import"./Symbols-Cw6oiD0A.js";import"./symbol-DlOomsec.js";import"./getRadiusAndStrokeWidthFromDot-BkVmaDqw.js";import"./useElementOffset-C7YVK8J4.js";import"./uniqBy-l27jBtp-.js";import"./iteratee-C2U1tTrM.js";import"./Cross-I_CZgQpk.js";import"./Sector-BBv4yBun.js";const Lt={component:r,argTypes:p,title:"Examples/cartesian/YAxis/WithLeftAndRightAxes"},e={render:i=>t.createElement("article",{style:{display:"flex",flexDirection:"column"}},t.createElement("div",{style:{width:"100%"}},t.createElement(l,{width:"100%",height:500},t.createElement(x,{data:A},t.createElement(o,{dataKey:"pv",fill:"red",yAxisId:"right"}),t.createElement(o,{dataKey:"uv",fill:"red",yAxisId:"right-mirror"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left-mirror"}),t.createElement(c,{padding:{left:50,right:50},dataKey:"name",scale:"band"}),t.createElement(r,{...i,yAxisId:"left",orientation:"left",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"left-mirror",orientation:"left",mirror:!0,tickCount:8}),t.createElement(r,{...i,yAxisId:"right",orientation:"right",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"right-mirror",orientation:"right",mirror:!0,tickCount:20}),t.createElement(g,null)))),t.createElement("h4",null,`When an AxisId is specified on all provided axes of one type (XAxis, YAxis, ZAxis), recharts requires a
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
