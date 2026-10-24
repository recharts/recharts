import{R as t}from"./iframe-CwjnBdPJ.js";import{g as d}from"./utils-ePvtT4un.js";import{Y as p}from"./YAxisArgs-CwatvU9z.js";import{Y as r}from"./YAxis-BJPBUcLn.js";import{R as l}from"./zIndexSlice-DCK0oMjs.js";import{C as x}from"./ComposedChart-DEjJaHPL.js";import{p as A}from"./Page-Cj8EiXz7.js";import{B as o}from"./Bar-Bvkn-NeY.js";import{L as a}from"./Line-BtP8MguI.js";import{X as c}from"./XAxis-DGiS1jyS.js";import{T as g}from"./Tooltip-B0A_l91o.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./Label-DUPKJ4wq.js";import"./Text-CkJvnqMb.js";import"./resolveDefaultProps-CiT0yrYA.js";import"./pageBackground-CPZsdU6n.js";import"./isWellBehavedNumber-UCnnTJQS.js";import"./useId-LApi4aFA.js";import"./useBackwardsCompatibleTheme-BaLhcLyB.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-Cf72LToz.js";import"./index-Dd-h_ysm.js";import"./index-BjJumBGZ.js";import"./dataEntryStyles-MXIeXXjf.js";import"./axisSelectors-yVNmvCZQ.js";import"./throttle-NOTipQ48.js";import"./d3-scale-B8EUKI5D.js";import"./CartesianAxis-BCC92CcD.js";import"./Layer-mPZxMc5S.js";import"./types-Bf6WAwuG.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-dymauRC4.js";import"./index-CmMtCp92.js";import"./index-D5HInSgc.js";import"./isBuffer-AZzsDYE7.js";import"./RechartsWrapper-DssFoHZN.js";import"./index-Bgw_dChb.js";import"./CartesianChart-CAYSFbYO.js";import"./chartDataContext-Caz9nZMs.js";import"./CategoricalChart-C1fI2_Bl.js";import"./activeStyles-Dq37JbhA.js";import"./useAnimationId-CsReVCtf.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-CYb6tTOo.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-5uA1VhfG.js";import"./tooltipContext-CoqwBK9n.js";import"./RegisterGraphicalItemId-D_0UWgiO.js";import"./ErrorBarContext-Dx-lWvRW.js";import"./GraphicalItemClipPath-BaNkPOAO.js";import"./SetGraphicalItem-r-YteBa3.js";import"./getZIndexFromUnknown-ByNeKVDU.js";import"./useEffectiveDataKey-Cb7tOd6S.js";import"./omit-DD5rNiKZ.js";import"./isArguments-yB-y1yaH.js";import"./Curve-_mg3fY-T.js";import"./step-_ilYVkYV.js";import"./path-DyVhHtw_.js";import"./ActivePoints-B-LCBBeH.js";import"./Dot-j5DVnIjt.js";import"./getRadiusAndStrokeWidthFromDot-B0N-TNeB.js";import"./useElementOffset-BUBjRfVb.js";import"./uniqBy-DM5ILEe5.js";import"./iteratee-BCmgj2Iv.js";import"./Cross-CU2uWUVS.js";import"./Sector-BzlkSSva.js";const Tt={component:r,argTypes:p,title:"Examples/cartesian/YAxis/WithLeftAndRightAxes"},e={render:i=>t.createElement("article",{style:{display:"flex",flexDirection:"column"}},t.createElement("div",{style:{width:"100%"}},t.createElement(l,{width:"100%",height:500},t.createElement(x,{data:A},t.createElement(o,{dataKey:"pv",fill:"red",yAxisId:"right"}),t.createElement(o,{dataKey:"uv",fill:"red",yAxisId:"right-mirror"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left-mirror"}),t.createElement(c,{padding:{left:50,right:50},dataKey:"name",scale:"band"}),t.createElement(r,{...i,yAxisId:"left",orientation:"left",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"left-mirror",orientation:"left",mirror:!0,tickCount:8}),t.createElement(r,{...i,yAxisId:"right",orientation:"right",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"right-mirror",orientation:"right",mirror:!0,tickCount:20}),t.createElement(g,null)))),t.createElement("h4",null,`When an AxisId is specified on all provided axes of one type (XAxis, YAxis, ZAxis), recharts requires a
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
