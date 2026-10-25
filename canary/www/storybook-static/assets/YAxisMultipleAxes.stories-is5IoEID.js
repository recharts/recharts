import{R as t}from"./iframe-aKV-O9MJ.js";import{g as d}from"./utils-ePvtT4un.js";import{Y as p}from"./YAxisArgs-CwatvU9z.js";import{Y as r}from"./YAxis-Ch3CqHid.js";import{R as l}from"./zIndexSlice-BKaqyajB.js";import{C as x}from"./ComposedChart-DApYnnbw.js";import{p as A}from"./Page-Cj8EiXz7.js";import{B as o}from"./Bar-CTfxUez8.js";import{L as a}from"./Line-Cnh90x2U.js";import{X as c}from"./XAxis-lhBNyzg_.js";import{T as g}from"./Tooltip-DRM63UrI.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./Label-zwi5-GQg.js";import"./Text-CopK1C24.js";import"./resolveDefaultProps-HqSLYtX8.js";import"./pageBackground-D0AIP4to.js";import"./isWellBehavedNumber-DhfM3JhV.js";import"./useId-CnmqgkQl.js";import"./useBackwardsCompatibleTheme-w5mekw_9.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-A9-ipKwv.js";import"./index-CgdfyZHj.js";import"./index-CpNUBple.js";import"./dataEntryStyles-BzKYf-di.js";import"./axisSelectors-MbFPBavU.js";import"./throttle-Be3j2pw2.js";import"./d3-scale-CsyBOG8O.js";import"./CartesianAxis-Dm5On8Gk.js";import"./Layer-07gJ6FIr.js";import"./types-DTpzWv6l.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-WTymoNbk.js";import"./index-D1DeZs1S.js";import"./index-HoQ8qajG.js";import"./isBuffer-AZzsDYE7.js";import"./RechartsWrapper-CMYKJCfZ.js";import"./index-C12TwcvC.js";import"./CartesianChart-C2vgDwW7.js";import"./chartDataContext-DB9-FPl4.js";import"./CategoricalChart-CDZMqsPI.js";import"./activeStyles-BvRJtjMn.js";import"./useAnimationId-Cb-3p2b2.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-Bpv-EdUE.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-CDtOvQ0I.js";import"./tooltipContext-B4EHNace.js";import"./RegisterGraphicalItemId-CFnb1OFM.js";import"./ErrorBarContext-Bqn6HxNU.js";import"./SetGraphicalItem-BtHSeMoh.js";import"./getZIndexFromUnknown-CDEqKyca.js";import"./useEffectiveDataKey-B3-MKjEu.js";import"./omit-DTcIMCrv.js";import"./isArguments-yB-y1yaH.js";import"./Curve-3H4HQJme.js";import"./step-Bv994rc2.js";import"./path-DyVhHtw_.js";import"./ActivePoints-DBGJodJk.js";import"./Dot-0Wdau4CC.js";import"./getRadiusAndStrokeWidthFromDot-B6-r-w_v.js";import"./useElementOffset-BKf5VsK_.js";import"./uniqBy-BTRGg67Z.js";import"./iteratee-BvKBaWIX.js";import"./Cross-DrnR6mil.js";import"./Sector-CizdX0d-.js";const Lt={component:r,argTypes:p,title:"Examples/cartesian/YAxis/WithLeftAndRightAxes"},e={render:i=>t.createElement("article",{style:{display:"flex",flexDirection:"column"}},t.createElement("div",{style:{width:"100%"}},t.createElement(l,{width:"100%",height:500},t.createElement(x,{data:A},t.createElement(o,{dataKey:"pv",fill:"red",yAxisId:"right"}),t.createElement(o,{dataKey:"uv",fill:"red",yAxisId:"right-mirror"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left-mirror"}),t.createElement(c,{padding:{left:50,right:50},dataKey:"name",scale:"band"}),t.createElement(r,{...i,yAxisId:"left",orientation:"left",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"left-mirror",orientation:"left",mirror:!0,tickCount:8}),t.createElement(r,{...i,yAxisId:"right",orientation:"right",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"right-mirror",orientation:"right",mirror:!0,tickCount:20}),t.createElement(g,null)))),t.createElement("h4",null,`When an AxisId is specified on all provided axes of one type (XAxis, YAxis, ZAxis), recharts requires a
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
