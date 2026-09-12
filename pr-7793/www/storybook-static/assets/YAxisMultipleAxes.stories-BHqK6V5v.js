import{R as t}from"./iframe-CkRErbX3.js";import{g as d}from"./utils-ePvtT4un.js";import{Y as p}from"./YAxisArgs-CwatvU9z.js";import{Y as r}from"./YAxis-CAzXCAfe.js";import{R as l}from"./zIndexSlice-DTmbH2kM.js";import{C as x}from"./ComposedChart-NwFDWpH0.js";import{p as A}from"./Page-Cj8EiXz7.js";import{B as o}from"./Bar-Dxc2BRnb.js";import{L as a}from"./Line-DO9_PgIv.js";import{X as c}from"./XAxis-B1jTgdYR.js";import{T as g}from"./Tooltip-B3kOWmGC.js";import"./preload-helper-Dp1pzeXC.js";import"./get-C2VjdU0L.js";import"./Label-Cbc3sDLG.js";import"./Text-CcsMLAiM.js";import"./resolveDefaultProps-D0XcYrnY.js";import"./DOMUtils-ysvCMZ9n.js";import"./isWellBehavedNumber-D_Km0wQV.js";import"./useId-BiQAXzmn.js";import"./useBackwardsCompatibleTheme-Z-DwFZxL.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-mbz94-CG.js";import"./index-lTKqLNY2.js";import"./index-8q2B2E2Y.js";import"./RechartsWrapper-LX80ZVpP.js";import"./axisSelectors-BQZb9AEv.js";import"./throttle-BUNP2xt_.js";import"./d3-scale-CAyfIE8L.js";import"./index-Cj3PhY3N.js";import"./index-DPOnfHKZ.js";import"./renderedTicksSlice-BTBGPftx.js";import"./index-CHvbSDPi.js";import"./CartesianAxis-BGltcbGd.js";import"./Layer-eVqkjfjk.js";import"./types-ByxJ_946.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./CartesianChart-D7JoZRAe.js";import"./chartDataContext-C9978EDJ.js";import"./CategoricalChart-BNOSmnxT.js";import"./AnimatedItems-BXDAeM5O.js";import"./useAnimationId-B20w_W1l.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-IH7PyD6Z.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-B8wUCaOd.js";import"./tooltipContext-DPVrNbtr.js";import"./RegisterGraphicalItemId-DwpGnQ-i.js";import"./ErrorBarContext-LdHiwwFE.js";import"./GraphicalItemClipPath-osbFejbO.js";import"./SetGraphicalItem-7qiiWKdg.js";import"./getZIndexFromUnknown-B621kbKb.js";import"./useGraphicalItemIdentity-kWkqpE_r.js";import"./Curve-DD6HoqKB.js";import"./step-ZsLkjyrm.js";import"./path-DyVhHtw_.js";import"./ActivePoints-DWOGb-Xm.js";import"./Dot-2hkZUwyy.js";import"./getRadiusAndStrokeWidthFromDot-B41JQ_h1.js";import"./useElementOffset-DggOv2T5.js";import"./uniqBy-BwaEYqQz.js";import"./iteratee-BG9CjH6Z.js";import"./Cross-ComRXYT8.js";import"./Sector-DfkCo5uI.js";const Mt={component:r,argTypes:p,title:"Examples/cartesian/YAxis/WithLeftAndRightAxes"},e={render:i=>t.createElement("article",{style:{display:"flex",flexDirection:"column"}},t.createElement("div",{style:{width:"100%"}},t.createElement(l,{width:"100%",height:500},t.createElement(x,{data:A},t.createElement(o,{dataKey:"pv",fill:"red",yAxisId:"right"}),t.createElement(o,{dataKey:"uv",fill:"red",yAxisId:"right-mirror"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left-mirror"}),t.createElement(c,{padding:{left:50,right:50},dataKey:"name",scale:"band"}),t.createElement(r,{...i,yAxisId:"left",orientation:"left",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"left-mirror",orientation:"left",mirror:!0,tickCount:8}),t.createElement(r,{...i,yAxisId:"right",orientation:"right",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"right-mirror",orientation:"right",mirror:!0,tickCount:20}),t.createElement(g,null)))),t.createElement("h4",null,`When an AxisId is specified on all provided axes of one type (XAxis, YAxis, ZAxis), recharts requires a
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
