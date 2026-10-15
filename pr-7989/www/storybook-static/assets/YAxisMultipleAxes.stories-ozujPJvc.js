import{R as t}from"./iframe-B0yo2V4n.js";import{g as d}from"./utils-ePvtT4un.js";import{Y as p}from"./YAxisArgs-CwatvU9z.js";import{Y as r}from"./YAxis-DL4kDslF.js";import{R as l}from"./zIndexSlice-B7uClMUs.js";import{C as x}from"./ComposedChart-B_AnK-ab.js";import{p as A}from"./Page-Cj8EiXz7.js";import{B as o}from"./Bar-D4kwm2yp.js";import{L as a}from"./Line-DfLePWXM.js";import{X as c}from"./XAxis-DsnV8ZqK.js";import{T as g}from"./Tooltip-SGyxNqGE.js";import"./preload-helper-Dp1pzeXC.js";import"./get-C2VjdU0L.js";import"./Label-CnUHNStt.js";import"./Text-CHF9ypYR.js";import"./resolveDefaultProps-C_-4-Tqn.js";import"./pageBackground-0wikHvI2.js";import"./isWellBehavedNumber-CZXpTiYT.js";import"./useId-BnV_tbx_.js";import"./useBackwardsCompatibleTheme-DI9J0y19.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-DLG58JCm.js";import"./index-CksSbcNy.js";import"./index-CCtvozBT.js";import"./axisSelectors-CMjYVwhk.js";import"./throttle-CrsZu1Ef.js";import"./d3-scale-B4crR7Dq.js";import"./CartesianAxis-DRTEDz7X.js";import"./Layer-BkWM3RIH.js";import"./types-L-bd4Nc-.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-Boaz1NGF.js";import"./index-T1a_0V0g.js";import"./index-DKVx0AFW.js";import"./isBuffer-BG75eWKN.js";import"./RechartsWrapper-CQikX2jp.js";import"./index-2BBeHhTL.js";import"./CartesianChart-DjmfdwhX.js";import"./chartDataContext-B2JeciGL.js";import"./CategoricalChart-BCaNllRk.js";import"./activeStyles-_C6RQVwk.js";import"./useAnimationId-DO-aK-tu.js";import"./dataEntryStyles-CjubJGLE.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-xNB1EmnK.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-C0F7emTJ.js";import"./tooltipContext-CBxtMnXL.js";import"./ErrorBarContext-DwnKv10Z.js";import"./GraphicalItemClipPath-CMzZysYx.js";import"./SetGraphicalItem-Z-H48Tbu.js";import"./getZIndexFromUnknown-BNXeUExr.js";import"./useEffectiveDataKey-Bupc-s0s.js";import"./Curve-DRU8kykY.js";import"./step-BoSTRipl.js";import"./path-DyVhHtw_.js";import"./ActivePoints-ohc9ZXCs.js";import"./Dot-OL_y42KN.js";import"./getRadiusAndStrokeWidthFromDot-BzPG4IYK.js";import"./useElementOffset-LYUTAlL5.js";import"./uniqBy-B2CtqIKi.js";import"./iteratee-DxT84tDG.js";import"./Cross-CNuYU_Rf.js";import"./Sector-4SkZuanz.js";const Mt={component:r,argTypes:p,title:"Examples/cartesian/YAxis/WithLeftAndRightAxes"},e={render:i=>t.createElement("article",{style:{display:"flex",flexDirection:"column"}},t.createElement("div",{style:{width:"100%"}},t.createElement(l,{width:"100%",height:500},t.createElement(x,{data:A},t.createElement(o,{dataKey:"pv",fill:"red",yAxisId:"right"}),t.createElement(o,{dataKey:"uv",fill:"red",yAxisId:"right-mirror"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left-mirror"}),t.createElement(c,{padding:{left:50,right:50},dataKey:"name",scale:"band"}),t.createElement(r,{...i,yAxisId:"left",orientation:"left",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"left-mirror",orientation:"left",mirror:!0,tickCount:8}),t.createElement(r,{...i,yAxisId:"right",orientation:"right",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"right-mirror",orientation:"right",mirror:!0,tickCount:20}),t.createElement(g,null)))),t.createElement("h4",null,`When an AxisId is specified on all provided axes of one type (XAxis, YAxis, ZAxis), recharts requires a
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
