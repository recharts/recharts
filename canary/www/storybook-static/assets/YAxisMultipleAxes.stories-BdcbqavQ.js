import{R as t}from"./iframe-lJBwbutv.js";import{g as d}from"./utils-ePvtT4un.js";import{Y as p}from"./YAxisArgs-I2w3cHIn.js";import{Y as r}from"./YAxis-DzJ296_j.js";import{R as l}from"./zIndexSlice-DOZGt0Xc.js";import{C as x}from"./ComposedChart-Cxisz18M.js";import{p as A}from"./Page-Cj8EiXz7.js";import{B as o}from"./Bar-DCGMePyX.js";import{L as a}from"./Line-8wwXFnCl.js";import{X as c}from"./XAxis-eFYFTspd.js";import{T as g}from"./Tooltip-z5cfifSR.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./Label-C1XxCcqG.js";import"./Text-CH7ZTJa6.js";import"./resolveDefaultProps-CuoHmAis.js";import"./ZIndexLayer-DMFEoW6r.js";import"./index-D-yoUCLK.js";import"./index-DmjkyNBy.js";import"./PolarUtils-CTnnDHZv.js";import"./polarAxisSelectors-g2gwazbI.js";import"./throttle-BD4ZOoVc.js";import"./axisSelectors-CiZzV4Ua.js";import"./d3-scale-BrfLvVJ7.js";import"./CartesianAxis-DLyqJbpN.js";import"./Layer-CZzb4Onv.js";import"./types-BR2T4QCa.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-ChSQY0tz.js";import"./index-BjclV3iC.js";import"./index-Bgy6zka-.js";import"./isBuffer-AZzsDYE7.js";import"./RechartsWrapper-C4uciLnE.js";import"./index-CPSRkKHN.js";import"./fillDefinitions-DgzgNWUG.js";import"./CartesianChart-BDxnsR9l.js";import"./chartDataContext-CuRy23UW.js";import"./CategoricalChart-CWJpCYvL.js";import"./dataEntryStyles-BXXFCsKs.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-BLn-6YRh.js";import"./useAnimationId-Dj7sECHw.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-6HIsnjoS.js";import"./tooltipContext-rr--AtsR.js";import"./ErrorBarContext-CF700d8f.js";import"./activeStyles-C_lJCdGG.js";import"./SetGraphicalItem-BjwhNxsW.js";import"./getZIndexFromUnknown-DzuXgSkc.js";import"./useEffectiveDataKey-Bg5rFbYe.js";import"./omit-DwkGh_sW.js";import"./isArguments-yB-y1yaH.js";import"./Curve-Dazce3Yn.js";import"./step-CVKg82eE.js";import"./path-DyVhHtw_.js";import"./ActivePoints-De5xpIFf.js";import"./Dot-CHXRfIFb.js";import"./Symbols-BrRhqa2q.js";import"./symbol-CHsvlSO9.js";import"./getRadiusAndStrokeWidthFromDot-4zFCm6-q.js";import"./useElementOffset-zJJN7xLG.js";import"./uniqBy-DWWs0y9k.js";import"./iteratee-DkvjpvPG.js";import"./Cross-BIkVXlap.js";import"./Sector-D8arHEkn.js";const Rt={component:r,argTypes:p,title:"Examples/cartesian/YAxis/WithLeftAndRightAxes"},e={render:i=>t.createElement("article",{style:{display:"flex",flexDirection:"column"}},t.createElement("div",{style:{width:"100%"}},t.createElement(l,{width:"100%",height:500},t.createElement(x,{data:A},t.createElement(o,{dataKey:"pv",fill:"red",yAxisId:"right"}),t.createElement(o,{dataKey:"uv",fill:"red",yAxisId:"right-mirror"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left-mirror"}),t.createElement(c,{padding:{left:50,right:50},dataKey:"name",scale:"band"}),t.createElement(r,{...i,yAxisId:"left",orientation:"left",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"left-mirror",orientation:"left",mirror:!0,tickCount:8}),t.createElement(r,{...i,yAxisId:"right",orientation:"right",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"right-mirror",orientation:"right",mirror:!0,tickCount:20}),t.createElement(g,null)))),t.createElement("h4",null,`When an AxisId is specified on all provided axes of one type (XAxis, YAxis, ZAxis), recharts requires a
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
