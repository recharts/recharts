import{R as t}from"./iframe-h_l55m_t.js";import{g as d}from"./utils-ePvtT4un.js";import{Y as p}from"./YAxisArgs-CS8VIEtE.js";import{Y as r}from"./YAxis-Db6yYFWM.js";import{R as l}from"./zIndexSlice-DtOJxrcv.js";import{C as x}from"./ComposedChart-BAup3dHc.js";import{p as A}from"./Page-Cj8EiXz7.js";import{B as o}from"./Bar-DCo8gD3I.js";import{L as a}from"./Line-7LYQCCSG.js";import{X as c}from"./XAxis-CsptUwef.js";import{T as g}from"./Tooltip-CGR9o2kK.js";import"./preload-helper-Dp1pzeXC.js";import"./get-DBMd4dxk.js";import"./CartesianAxis-CTJIWXoj.js";import"./Layer-rrxq_JkN.js";import"./resolveDefaultProps-D8-0lbpZ.js";import"./Text-Cm107LG_.js";import"./DOMUtils-CG_MvRCE.js";import"./isWellBehavedNumber-B1Li3gr_.js";import"./Label-Biqo5Eli.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-D7uTd8cS.js";import"./index-BdQ12acY.js";import"./index-wHKnWgSU.js";import"./types-7ZgAaUHx.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-CmHU-lei.js";import"./immer-3kgM1Yrm.js";import"./RechartsWrapper-GmtYc35d.js";import"./index-CCMntdAh.js";import"./index-CY3OpiR2.js";import"./axisSelectors-DWvAkDEO.js";import"./d3-scale-D1BOaHId.js";import"./string-B6fdYHAA.js";import"./CartesianChart-BQCaFT7C.js";import"./chartDataContext-Bq9tVFqt.js";import"./CategoricalChart-sP3BCXGi.js";import"./tooltipContext-DbtRsXiM.js";import"./AnimatedItems-BMyeCqfp.js";import"./useAnimationId-Dn6PcdJm.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-DY_Adz4k.js";import"./ActiveShapeUtils-DIPFKhPu.js";import"./RegisterGraphicalItemId-MWElRUOD.js";import"./ErrorBarContext-BL5qoR-W.js";import"./GraphicalItemClipPath-BwjhPGOP.js";import"./SetGraphicalItem-tyshoNX9.js";import"./getZIndexFromUnknown-BMmURIsG.js";import"./graphicalItemSelectors-DqNX1XFY.js";import"./Curve-BUDj-vjw.js";import"./step-D8_8cE93.js";import"./path-DyVhHtw_.js";import"./ActivePoints-BgXP9QSv.js";import"./Dot-CN1BxqM7.js";import"./getRadiusAndStrokeWidthFromDot-BDAvmvPt.js";import"./useElementOffset-DAfE9lYr.js";import"./uniqBy-g-J-Oe_O.js";import"./iteratee-C8gdJKoW.js";import"./Cross-BMwWEkSs.js";import"./Sector-DUqpwzKo.js";const Ct={component:r,argTypes:p,title:"Examples/cartesian/YAxis/WithLeftAndRightAxes"},e={render:i=>t.createElement("article",{style:{display:"flex",flexDirection:"column"}},t.createElement("div",{style:{width:"100%"}},t.createElement(l,{width:"100%",height:500},t.createElement(x,{data:A},t.createElement(o,{dataKey:"pv",fill:"red",yAxisId:"right"}),t.createElement(o,{dataKey:"uv",fill:"red",yAxisId:"right-mirror"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left-mirror"}),t.createElement(c,{padding:{left:50,right:50},dataKey:"name",scale:"band"}),t.createElement(r,{...i,yAxisId:"left",orientation:"left",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"left-mirror",orientation:"left",mirror:!0,tickCount:8}),t.createElement(r,{...i,yAxisId:"right",orientation:"right",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"right-mirror",orientation:"right",mirror:!0,tickCount:20}),t.createElement(g,null)))),t.createElement("h4",null,`When an AxisId is specified on all provided axes of one type (XAxis, YAxis, ZAxis), recharts requires a
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
}`,...(n=(s=e.parameters)==null?void 0:s.docs)==null?void 0:n.source}}};const Yt=["WithLeftAndRightAxes"];export{e as WithLeftAndRightAxes,Yt as __namedExportsOrder,Ct as default};
