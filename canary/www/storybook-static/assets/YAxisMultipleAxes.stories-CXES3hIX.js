import{R as t}from"./iframe-DKDUQR4e.js";import{g as d}from"./utils-ePvtT4un.js";import{Y as p}from"./YAxisArgs-CwatvU9z.js";import{Y as r}from"./YAxis-CBJKZQVh.js";import{R as l}from"./zIndexSlice-aRYQG5Yn.js";import{C as x}from"./ComposedChart-CCmbfoN3.js";import{p as A}from"./Page-Cj8EiXz7.js";import{B as o}from"./Bar-DLuduoKz.js";import{L as a}from"./Line-BsvL8Xz1.js";import{X as c}from"./XAxis-CjF_jX-F.js";import{T as g}from"./Tooltip-OelYScKS.js";import"./preload-helper-Dp1pzeXC.js";import"./get-C2VjdU0L.js";import"./Label-CIwsUObl.js";import"./Text-BiZmy8Q_.js";import"./resolveDefaultProps-CoYFUk2l.js";import"./DOMUtils-DdCdIfAV.js";import"./isWellBehavedNumber-CmolPL3d.js";import"./useId-CIh7gguH.js";import"./useBackwardsCompatibleTheme-CrqKBooM.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-Cdmw8GXd.js";import"./index-aMLVbRVP.js";import"./index-DFSigqQi.js";import"./RechartsWrapper-CFbHWja9.js";import"./axisSelectors-CByMsFVX.js";import"./throttle-CZQWytra.js";import"./d3-scale-D08aSlXl.js";import"./index-DYLqyLpB.js";import"./index-DKbxb5pM.js";import"./renderedTicksSlice-C672n-_-.js";import"./index-gqnOst7j.js";import"./CartesianAxis-8Yu2eTD6.js";import"./Layer-4AR486QQ.js";import"./types-D2xbrN5O.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./CartesianChart-C3BMrTr-.js";import"./chartDataContext-BTH-lGko.js";import"./CategoricalChart-DNyG6Cdr.js";import"./AnimatedItems-BsWKOVBJ.js";import"./useAnimationId-DdSCrHov.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-Gul8C8Yn.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-DNb4gSFX.js";import"./tooltipContext-CS7mZnqj.js";import"./RegisterGraphicalItemId-DuhR9Fep.js";import"./ErrorBarContext-BEPlSBFO.js";import"./GraphicalItemClipPath-BZD6-JFP.js";import"./SetGraphicalItem-BnsQpP5e.js";import"./getZIndexFromUnknown-CApI803N.js";import"./useGraphicalItemIdentity-Dy2kZYij.js";import"./Curve-CN5kBDOi.js";import"./step-C6ZJXuGC.js";import"./path-DyVhHtw_.js";import"./ActivePoints-CCt2MIZg.js";import"./Dot-D2dES3Mc.js";import"./getRadiusAndStrokeWidthFromDot-RqSgqbxV.js";import"./useElementOffset-Cff6A36e.js";import"./uniqBy-DiNvI5qK.js";import"./iteratee-Bk_n-BJ4.js";import"./Cross-UchZgXDl.js";import"./Sector-BpcFQCNy.js";const Mt={component:r,argTypes:p,title:"Examples/cartesian/YAxis/WithLeftAndRightAxes"},e={render:i=>t.createElement("article",{style:{display:"flex",flexDirection:"column"}},t.createElement("div",{style:{width:"100%"}},t.createElement(l,{width:"100%",height:500},t.createElement(x,{data:A},t.createElement(o,{dataKey:"pv",fill:"red",yAxisId:"right"}),t.createElement(o,{dataKey:"uv",fill:"red",yAxisId:"right-mirror"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left-mirror"}),t.createElement(c,{padding:{left:50,right:50},dataKey:"name",scale:"band"}),t.createElement(r,{...i,yAxisId:"left",orientation:"left",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"left-mirror",orientation:"left",mirror:!0,tickCount:8}),t.createElement(r,{...i,yAxisId:"right",orientation:"right",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"right-mirror",orientation:"right",mirror:!0,tickCount:20}),t.createElement(g,null)))),t.createElement("h4",null,`When an AxisId is specified on all provided axes of one type (XAxis, YAxis, ZAxis), recharts requires a
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
