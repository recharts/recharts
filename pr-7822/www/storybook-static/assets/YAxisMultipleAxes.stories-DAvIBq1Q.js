import{R as t}from"./iframe-W65oqx8q.js";import{g as d}from"./utils-ePvtT4un.js";import{Y as p}from"./YAxisArgs-CwatvU9z.js";import{Y as r}from"./YAxis-C8LbyJnB.js";import{R as l}from"./zIndexSlice-9l_Vrwwa.js";import{C as x}from"./ComposedChart-Dg02pqp1.js";import{p as A}from"./Page-Cj8EiXz7.js";import{B as o}from"./Bar-D6jWDsY1.js";import{L as a}from"./Line-BfwQZfLz.js";import{X as c}from"./XAxis-CsMm9ERi.js";import{T as g}from"./Tooltip-Dgk-6D6x.js";import"./preload-helper-Dp1pzeXC.js";import"./get-C2VjdU0L.js";import"./Label-Be3blqiA.js";import"./Text-C9pLMK0A.js";import"./resolveDefaultProps-CwFz2OMw.js";import"./DOMUtils-CakF13Ql.js";import"./isWellBehavedNumber-BObY9Idx.js";import"./useId-BxDXx6uj.js";import"./useBackwardsCompatibleTheme-uDuKMgEe.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-C3J7XzqC.js";import"./index-6OGByTjb.js";import"./index-Cot536dN.js";import"./RechartsWrapper-ClDY-hB5.js";import"./axisSelectors-cQBo3spf.js";import"./throttle-JXtXSY4E.js";import"./d3-scale-BnWVEuzd.js";import"./index-BoHv5hv2.js";import"./index-DKR6QUcv.js";import"./renderedTicksSlice-QXgti3JC.js";import"./index-B3pQb6na.js";import"./CartesianAxis-CClqdcGJ.js";import"./Layer-CHct5fsC.js";import"./types-DGC2KXCF.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./CartesianChart-ouG1NDpR.js";import"./chartDataContext-f_o9cnw9.js";import"./CategoricalChart-BwdQTjaO.js";import"./AnimatedItems-FyFUBU19.js";import"./useAnimationId-CZj4ZR7y.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-CD8-QDsq.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-8OE4Q_dK.js";import"./tooltipContext-BGglIBe5.js";import"./RegisterGraphicalItemId-pvmrnM3x.js";import"./ErrorBarContext-B0GH1zEy.js";import"./GraphicalItemClipPath-CegTcjor.js";import"./SetGraphicalItem-I8O9Dd_O.js";import"./getZIndexFromUnknown-D1VfbAcI.js";import"./useGraphicalItemIdentity-CZ9WsBDJ.js";import"./Curve-DBfMZQpl.js";import"./step-DIoBi2CN.js";import"./path-DyVhHtw_.js";import"./ActivePoints-GiGlS0gl.js";import"./Dot-aLSP80WO.js";import"./getRadiusAndStrokeWidthFromDot-D_6Md5To.js";import"./useElementOffset-CGAEjhf0.js";import"./uniqBy-bQIzI03X.js";import"./iteratee-2Iqaw7xV.js";import"./Cross-BrqZ4Oz9.js";import"./Sector-BNbNkFNt.js";const Mt={component:r,argTypes:p,title:"Examples/cartesian/YAxis/WithLeftAndRightAxes"},e={render:i=>t.createElement("article",{style:{display:"flex",flexDirection:"column"}},t.createElement("div",{style:{width:"100%"}},t.createElement(l,{width:"100%",height:500},t.createElement(x,{data:A},t.createElement(o,{dataKey:"pv",fill:"red",yAxisId:"right"}),t.createElement(o,{dataKey:"uv",fill:"red",yAxisId:"right-mirror"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left-mirror"}),t.createElement(c,{padding:{left:50,right:50},dataKey:"name",scale:"band"}),t.createElement(r,{...i,yAxisId:"left",orientation:"left",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"left-mirror",orientation:"left",mirror:!0,tickCount:8}),t.createElement(r,{...i,yAxisId:"right",orientation:"right",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"right-mirror",orientation:"right",mirror:!0,tickCount:20}),t.createElement(g,null)))),t.createElement("h4",null,`When an AxisId is specified on all provided axes of one type (XAxis, YAxis, ZAxis), recharts requires a
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
