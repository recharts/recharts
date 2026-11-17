import{R as t}from"./iframe-SOI7ETqc.js";import{g as d}from"./utils-ePvtT4un.js";import{Y as p}from"./YAxisArgs-I2w3cHIn.js";import{Y as r}from"./YAxis-Du2dgY78.js";import{R as l}from"./zIndexSlice-BU6oUWx4.js";import{C as x}from"./ComposedChart-CZsCC2GL.js";import{p as A}from"./Page-Cj8EiXz7.js";import{B as o}from"./Bar-C9ihTEjc.js";import{L as a}from"./Line-DxuNXVKF.js";import{X as c}from"./XAxis-gIhRIlH1.js";import{T as g}from"./Tooltip-ouyy3uAo.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./Label-_MgncHEc.js";import"./Text-CVVDOvxk.js";import"./resolveDefaultProps-BpnJBtrD.js";import"./ZIndexLayer-uSStm6JU.js";import"./index-Code9Alh.js";import"./index-RwN-WdR-.js";import"./PolarUtils-CTnnDHZv.js";import"./polarAxisSelectors-C18_Wica.js";import"./throttle-BuYpA644.js";import"./axisSelectors-DhazdA5O.js";import"./d3-scale-3TBblIj9.js";import"./CartesianAxis-CkyCX2PR.js";import"./Layer-BdUzTy7V.js";import"./types-DLi1Gmf3.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-B4lGJD7y.js";import"./index-B7zG0fHt.js";import"./index-QpX9BTHL.js";import"./isBuffer-AZzsDYE7.js";import"./RechartsWrapper-2ihhOObz.js";import"./index-C2xwEmrx.js";import"./fillDefinitions-C3mr1Tm6.js";import"./CartesianChart-D5ZzAIe3.js";import"./chartDataContext-8RiMC0Sw.js";import"./CategoricalChart-D1aUY5yi.js";import"./dataEntryStyles-Dm-FbuH_.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-BKn3hEIk.js";import"./useAnimationId-C4SjfD_p.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-BXeGDetF.js";import"./tooltipContext-Cq5r6BX8.js";import"./ErrorBarContext-DHxWeWr-.js";import"./activeStyles--vF_fmID.js";import"./SetGraphicalItem-CGNGdUIc.js";import"./getZIndexFromUnknown-CXowfawV.js";import"./useEffectiveDataKey-B6JvOkpp.js";import"./omit-eSH-Qxde.js";import"./isArguments-yB-y1yaH.js";import"./getRadiusAndStrokeWidthFromDot-CdssLho3.js";import"./Curve-B541BDSp.js";import"./step-B7wEb5SP.js";import"./path-DyVhHtw_.js";import"./ActivePoints-D6TlCm2l.js";import"./Dot-QFOGovAa.js";import"./Symbols-D5dhbVXH.js";import"./symbol-D7DCXDTW.js";import"./useElementOffset-DtBbnSGS.js";import"./uniqBy-C8wr_V1k.js";import"./iteratee-BgCV5Vfx.js";import"./Cross-6WxxuO1-.js";import"./Sector-BOLNzO_s.js";const Rt={component:r,argTypes:p,title:"Examples/cartesian/YAxis/WithLeftAndRightAxes"},e={render:i=>t.createElement("article",{style:{display:"flex",flexDirection:"column"}},t.createElement("div",{style:{width:"100%"}},t.createElement(l,{width:"100%",height:500},t.createElement(x,{data:A},t.createElement(o,{dataKey:"pv",fill:"red",yAxisId:"right"}),t.createElement(o,{dataKey:"uv",fill:"red",yAxisId:"right-mirror"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left-mirror"}),t.createElement(c,{padding:{left:50,right:50},dataKey:"name",scale:"band"}),t.createElement(r,{...i,yAxisId:"left",orientation:"left",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"left-mirror",orientation:"left",mirror:!0,tickCount:8}),t.createElement(r,{...i,yAxisId:"right",orientation:"right",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"right-mirror",orientation:"right",mirror:!0,tickCount:20}),t.createElement(g,null)))),t.createElement("h4",null,`When an AxisId is specified on all provided axes of one type (XAxis, YAxis, ZAxis), recharts requires a
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
