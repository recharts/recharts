import{R as t}from"./iframe-CLlZb5WL.js";import{g as d}from"./utils-ePvtT4un.js";import{Y as p}from"./YAxisArgs-CwatvU9z.js";import{Y as r}from"./YAxis-BLqAl2VU.js";import{R as l}from"./zIndexSlice-C-cLRtN4.js";import{C as x}from"./ComposedChart-S27VwcuA.js";import{p as A}from"./Page-Cj8EiXz7.js";import{B as o}from"./Bar-CT8HYe9B.js";import{L as a}from"./Line-D7zCIp9R.js";import{X as c}from"./XAxis-DBuW-REH.js";import{T as g}from"./Tooltip-BnCF42xd.js";import"./preload-helper-Dp1pzeXC.js";import"./get-C2VjdU0L.js";import"./Label-yyQZOpZ1.js";import"./Text-B9EUqwyc.js";import"./resolveDefaultProps-CUiHCny8.js";import"./pageBackground-2CAg07jP.js";import"./isWellBehavedNumber-BwmlGv0Y.js";import"./useId-kcUEvBg4.js";import"./useBackwardsCompatibleTheme-Bfo5Qe72.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-Buoz0PG0.js";import"./index-BdtMEJny.js";import"./index-DCzwXD2o.js";import"./axisSelectors-CGMVEYME.js";import"./throttle--RnCkAem.js";import"./d3-scale-ehl80MUm.js";import"./CartesianAxis-CxGxQBTe.js";import"./Layer-BuwGQM2R.js";import"./types-nJd33CGk.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-DFlg4CzS.js";import"./index-BYYf9lpv.js";import"./index-Do3i96_1.js";import"./isBuffer-BG75eWKN.js";import"./RechartsWrapper-BEo8N9ka.js";import"./index-BIUIHb15.js";import"./CartesianChart-CHomC56b.js";import"./chartDataContext-CuhB7l0S.js";import"./CategoricalChart-v23si-Wq.js";import"./activeStyles-BadvgHow.js";import"./useAnimationId-DDy-DT0X.js";import"./dataEntryStyles-DY-TrJ76.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-Coa83haY.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-_yNwwF4x.js";import"./tooltipContext-DM4tfHae.js";import"./ErrorBarContext-Bdt01u1A.js";import"./GraphicalItemClipPath-DZFjU2Jb.js";import"./SetGraphicalItem-B9oKhYwJ.js";import"./getZIndexFromUnknown-BfULm-LP.js";import"./useEffectiveDataKey-DITcK2E7.js";import"./Curve-ByIUmGlM.js";import"./step-CBmZmkcc.js";import"./path-DyVhHtw_.js";import"./ActivePoints-2Ikh-s4p.js";import"./Dot-6T6__7vw.js";import"./getRadiusAndStrokeWidthFromDot-DNx2I_LV.js";import"./useElementOffset-Po4dJUCP.js";import"./uniqBy-Cz2J3eef.js";import"./iteratee-CPLYA7dn.js";import"./Cross-8FBDoCgf.js";import"./Sector-CUA1u2vb.js";const Mt={component:r,argTypes:p,title:"Examples/cartesian/YAxis/WithLeftAndRightAxes"},e={render:i=>t.createElement("article",{style:{display:"flex",flexDirection:"column"}},t.createElement("div",{style:{width:"100%"}},t.createElement(l,{width:"100%",height:500},t.createElement(x,{data:A},t.createElement(o,{dataKey:"pv",fill:"red",yAxisId:"right"}),t.createElement(o,{dataKey:"uv",fill:"red",yAxisId:"right-mirror"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left-mirror"}),t.createElement(c,{padding:{left:50,right:50},dataKey:"name",scale:"band"}),t.createElement(r,{...i,yAxisId:"left",orientation:"left",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"left-mirror",orientation:"left",mirror:!0,tickCount:8}),t.createElement(r,{...i,yAxisId:"right",orientation:"right",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"right-mirror",orientation:"right",mirror:!0,tickCount:20}),t.createElement(g,null)))),t.createElement("h4",null,`When an AxisId is specified on all provided axes of one type (XAxis, YAxis, ZAxis), recharts requires a
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
