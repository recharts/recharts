import{R as t}from"./iframe-CcEsDsPt.js";import{g as d}from"./utils-ePvtT4un.js";import{Y as p}from"./YAxisArgs-I2w3cHIn.js";import{Y as r}from"./YAxis-ioZsuscH.js";import{R as l}from"./zIndexSlice-B6RUMmkk.js";import{C as x}from"./ComposedChart-D0JJ5S5k.js";import{p as A}from"./Page-Cj8EiXz7.js";import{B as o}from"./Bar-DMdUcgyA.js";import{L as a}from"./Line-ZQuSY82j.js";import{X as c}from"./XAxis-BYDL1VAX.js";import{T as g}from"./Tooltip-DUQqGxJ6.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./Label-CMmdEaqf.js";import"./Text-wPKGoZhq.js";import"./resolveDefaultProps-CG7EywaD.js";import"./ZIndexLayer-DOqZSl62.js";import"./index-BtX-QQGe.js";import"./index-BVtuMGKw.js";import"./PolarUtils-CTnnDHZv.js";import"./polarAxisSelectors-DR_PitVn.js";import"./throttle-DZ4rLUZb.js";import"./axisSelectors-CKb6nzHd.js";import"./d3-scale-CJ6MxznC.js";import"./CartesianAxis-BUPldUtv.js";import"./Layer-fXDLQXYt.js";import"./types-DELOeU-O.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-ModyArOC.js";import"./index-SbP6Yowi.js";import"./index--ncHqsRr.js";import"./isBuffer-AZzsDYE7.js";import"./RechartsWrapper-Clhdkuph.js";import"./index-Cos4qCXe.js";import"./fillDefinitions-C6z_LMZM.js";import"./CartesianChart-C019ixZ1.js";import"./chartDataContext-DMXCxnSO.js";import"./CategoricalChart-BMAmMdOt.js";import"./dataEntryStyles-frn6yaTB.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-ZV4Rn0ty.js";import"./useAnimationId-qpAzE9JI.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-CMoHIOd4.js";import"./tooltipContext-CGOWsEmb.js";import"./ErrorBarContext-CPIS3FDy.js";import"./activeStyles-CiUshd_8.js";import"./SetGraphicalItem-CHwZeAHG.js";import"./getZIndexFromUnknown-BuuOwQKA.js";import"./useEffectiveDataKey-B9tlhySB.js";import"./omit-DY-nh95c.js";import"./isArguments-yB-y1yaH.js";import"./Curve-D2q8IfYm.js";import"./step-BQxy8stc.js";import"./path-DyVhHtw_.js";import"./ActivePoints-IAr-p6xM.js";import"./Dot-VbU1fpiG.js";import"./Symbols-CB4LXAVB.js";import"./symbol-CBgh6xJV.js";import"./getRadiusAndStrokeWidthFromDot-D--XkPxF.js";import"./useElementOffset-Btojr813.js";import"./uniqBy-BwAyAD40.js";import"./iteratee-D7dhGHWZ.js";import"./Cross-BMKmbwoc.js";import"./Sector-BTsPAMVx.js";const Rt={component:r,argTypes:p,title:"Examples/cartesian/YAxis/WithLeftAndRightAxes"},e={render:i=>t.createElement("article",{style:{display:"flex",flexDirection:"column"}},t.createElement("div",{style:{width:"100%"}},t.createElement(l,{width:"100%",height:500},t.createElement(x,{data:A},t.createElement(o,{dataKey:"pv",fill:"red",yAxisId:"right"}),t.createElement(o,{dataKey:"uv",fill:"red",yAxisId:"right-mirror"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left-mirror"}),t.createElement(c,{padding:{left:50,right:50},dataKey:"name",scale:"band"}),t.createElement(r,{...i,yAxisId:"left",orientation:"left",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"left-mirror",orientation:"left",mirror:!0,tickCount:8}),t.createElement(r,{...i,yAxisId:"right",orientation:"right",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"right-mirror",orientation:"right",mirror:!0,tickCount:20}),t.createElement(g,null)))),t.createElement("h4",null,`When an AxisId is specified on all provided axes of one type (XAxis, YAxis, ZAxis), recharts requires a
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
