import{R as t}from"./iframe-DNsV3xvw.js";import{g as d}from"./utils-ePvtT4un.js";import{Y as p}from"./YAxisArgs-CwatvU9z.js";import{Y as r}from"./YAxis-B4nJYauW.js";import{R as l}from"./zIndexSlice-BkDmHlXx.js";import{C as x}from"./ComposedChart-DUPDtyKq.js";import{p as A}from"./Page-Cj8EiXz7.js";import{B as o}from"./Bar-BDG2sPRV.js";import{L as a}from"./Line-Dt-wl3vw.js";import{X as c}from"./XAxis-BbuAR6XK.js";import{T as g}from"./Tooltip-dsGCuWUX.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./Label-DxEHX6q3.js";import"./Text-D6nhI6eC.js";import"./resolveDefaultProps-DaIQaOsN.js";import"./pageBackground-DcwhSKr2.js";import"./ZIndexLayer-B29GXU_O.js";import"./index-Dztf8_-N.js";import"./index-CvtjAZLm.js";import"./PolarUtils-CTnnDHZv.js";import"./polarAxisSelectors-wmmlw52W.js";import"./throttle-CpyfnSH3.js";import"./dataEntryStyles-BPFhmlnt.js";import"./axisSelectors-DtPl2Lwd.js";import"./d3-scale-Y31MRKoT.js";import"./CartesianAxis-BNXXsiE3.js";import"./Layer-CxNpu0Gw.js";import"./types-En29vQtS.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-gGubTrlw.js";import"./index-DpSt1MRy.js";import"./index-Byk9LK8-.js";import"./isBuffer-AZzsDYE7.js";import"./RechartsWrapper-BitdsUuz.js";import"./index-HmVV84Ak.js";import"./CartesianChart-CQXK8dPk.js";import"./ZIndexPortal-D_VHs3j1.js";import"./CategoricalChart-Dkljh1MP.js";import"./LabelList-Dxbb0X28.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-DYTWCfMr.js";import"./useAnimationId-BFFnWfJy.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-DHdP5lJT.js";import"./tooltipContext-DuKUy6BV.js";import"./RegisterGraphicalItemId-0BinVrEN.js";import"./ErrorBarContext-BojgDOr6.js";import"./activeStyles-BmYbBsXF.js";import"./SetGraphicalItem-BMxaBFjY.js";import"./getZIndexFromUnknown-DqcYMWif.js";import"./useEffectiveDataKey-BlrFpRwa.js";import"./omit-DQEsgukW.js";import"./isArguments-yB-y1yaH.js";import"./Curve-CuwsmGsN.js";import"./step-Bt130Gb4.js";import"./path-DyVhHtw_.js";import"./ActivePoints-Wn9kmDE8.js";import"./Dot-2Y-Kuv4T.js";import"./Symbols-CXxyrJ-f.js";import"./symbol-Da48TnzF.js";import"./getRadiusAndStrokeWidthFromDot-DYbmzRmX.js";import"./useElementOffset-D3m42K-G.js";import"./uniqBy-C1A792zL.js";import"./iteratee-D19tejeG.js";import"./Cross-BZdzCkxq.js";import"./Sector-C0Y8jgkt.js";const Tt={component:r,argTypes:p,title:"Examples/cartesian/YAxis/WithLeftAndRightAxes"},e={render:i=>t.createElement("article",{style:{display:"flex",flexDirection:"column"}},t.createElement("div",{style:{width:"100%"}},t.createElement(l,{width:"100%",height:500},t.createElement(x,{data:A},t.createElement(o,{dataKey:"pv",fill:"red",yAxisId:"right"}),t.createElement(o,{dataKey:"uv",fill:"red",yAxisId:"right-mirror"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left-mirror"}),t.createElement(c,{padding:{left:50,right:50},dataKey:"name",scale:"band"}),t.createElement(r,{...i,yAxisId:"left",orientation:"left",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"left-mirror",orientation:"left",mirror:!0,tickCount:8}),t.createElement(r,{...i,yAxisId:"right",orientation:"right",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"right-mirror",orientation:"right",mirror:!0,tickCount:20}),t.createElement(g,null)))),t.createElement("h4",null,`When an AxisId is specified on all provided axes of one type (XAxis, YAxis, ZAxis), recharts requires a
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
