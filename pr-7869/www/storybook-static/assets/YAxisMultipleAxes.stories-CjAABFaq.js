import{R as t}from"./iframe-B0ZE5sWn.js";import{g as d}from"./utils-ePvtT4un.js";import{Y as p}from"./YAxisArgs-CwatvU9z.js";import{Y as r}from"./YAxis-CIOXXUEI.js";import{R as l}from"./zIndexSlice-CRYD7Kkj.js";import{C as x}from"./ComposedChart-B-9abW7J.js";import{p as A}from"./Page-Cj8EiXz7.js";import{B as o}from"./Bar-BrR17MzW.js";import{L as a}from"./Line-ChohRp9N.js";import{X as c}from"./XAxis-DxhJhgqY.js";import{T as g}from"./Tooltip-BXGXDnda.js";import"./preload-helper-Dp1pzeXC.js";import"./get-C2VjdU0L.js";import"./Label-CDRY23He.js";import"./Text-hT0G9UKp.js";import"./resolveDefaultProps-DkU3qXBk.js";import"./DOMUtils-BtIen-TW.js";import"./isWellBehavedNumber-c-pVuqcz.js";import"./useId-CIOpxIEE.js";import"./useBackwardsCompatibleTheme-C9hE96Ha.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-COO7NwIi.js";import"./index-DSEHXiiH.js";import"./index-CVaJFnop.js";import"./RechartsWrapper-D_J70Kvy.js";import"./axisSelectors-CmZ6PEb7.js";import"./throttle-D8bbTBc2.js";import"./d3-scale-BSLND3-m.js";import"./index-CUIhphZ8.js";import"./index-CrLSWODu.js";import"./renderedTicksSlice-2DEyX82P.js";import"./index-x3K7igv_.js";import"./CartesianAxis-Cze39DWA.js";import"./Layer-B5uUwgDJ.js";import"./types-CvLOqkZ2.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./CartesianChart-DEyr3eWS.js";import"./chartDataContext-C_Y-GQC5.js";import"./CategoricalChart-BW6OVLWc.js";import"./AnimatedItems-DDDw_SSj.js";import"./useAnimationId-xIPnyE2V.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-DRbsFhhP.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-DW159Z87.js";import"./tooltipContext-DrA9G3kc.js";import"./RegisterGraphicalItemId-DvHsssZk.js";import"./ErrorBarContext-DIoqVk5E.js";import"./GraphicalItemClipPath-CP8DwxaV.js";import"./SetGraphicalItem-AgCaMkoB.js";import"./getZIndexFromUnknown-1kGl4LQy.js";import"./useGraphicalItemIdentity-DKLRMGU-.js";import"./Curve-DHsBKDuU.js";import"./step-CGkCO3y3.js";import"./path-DyVhHtw_.js";import"./ActivePoints-jrQT7wQp.js";import"./Dot-BuzDkghy.js";import"./getRadiusAndStrokeWidthFromDot-fsgEyTwP.js";import"./useElementOffset-DRtIxZBy.js";import"./uniqBy-MZlHu-wY.js";import"./iteratee-2ZaQLBwO.js";import"./Cross-CjsxhdWW.js";import"./Sector-BQd_gsPl.js";const Mt={component:r,argTypes:p,title:"Examples/cartesian/YAxis/WithLeftAndRightAxes"},e={render:i=>t.createElement("article",{style:{display:"flex",flexDirection:"column"}},t.createElement("div",{style:{width:"100%"}},t.createElement(l,{width:"100%",height:500},t.createElement(x,{data:A},t.createElement(o,{dataKey:"pv",fill:"red",yAxisId:"right"}),t.createElement(o,{dataKey:"uv",fill:"red",yAxisId:"right-mirror"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left-mirror"}),t.createElement(c,{padding:{left:50,right:50},dataKey:"name",scale:"band"}),t.createElement(r,{...i,yAxisId:"left",orientation:"left",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"left-mirror",orientation:"left",mirror:!0,tickCount:8}),t.createElement(r,{...i,yAxisId:"right",orientation:"right",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"right-mirror",orientation:"right",mirror:!0,tickCount:20}),t.createElement(g,null)))),t.createElement("h4",null,`When an AxisId is specified on all provided axes of one type (XAxis, YAxis, ZAxis), recharts requires a
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
