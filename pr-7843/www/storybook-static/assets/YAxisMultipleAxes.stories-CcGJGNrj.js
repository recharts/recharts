import{R as t}from"./iframe-DgWro0Cb.js";import{g as d}from"./utils-ePvtT4un.js";import{Y as p}from"./YAxisArgs-CwatvU9z.js";import{Y as r}from"./YAxis-D4vSwiu5.js";import{R as l}from"./zIndexSlice-kqW7224Y.js";import{C as x}from"./ComposedChart-BkLdUaFI.js";import{p as A}from"./Page-Cj8EiXz7.js";import{B as o}from"./Bar-DPwHEJww.js";import{L as a}from"./Line-BHp2SfN2.js";import{X as c}from"./XAxis-CkB5HD-K.js";import{T as g}from"./Tooltip-Ck6C8jgV.js";import"./preload-helper-Dp1pzeXC.js";import"./get-C2VjdU0L.js";import"./Label-CAU1RuQf.js";import"./Text-waGCJknf.js";import"./resolveDefaultProps-BhS12mAV.js";import"./DOMUtils-D88jtPAc.js";import"./isWellBehavedNumber-DwM6ebKF.js";import"./useId-BFsrAK1l.js";import"./useBackwardsCompatibleTheme-VKMGBrP2.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-DpP2thTP.js";import"./index-DztsUb_g.js";import"./index-D3He7cmP.js";import"./RechartsWrapper-h6y9B5zn.js";import"./axisSelectors-CZ13_oVc.js";import"./throttle-BP62aThC.js";import"./d3-scale-BfkfHoGl.js";import"./index-BDglQEHq.js";import"./index-CTaoAsOx.js";import"./renderedTicksSlice-gL8A1NDh.js";import"./index-DaYKny0o.js";import"./CartesianAxis-CA5xaS56.js";import"./Layer-XFlq6LCH.js";import"./types-pVUrsENP.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./CartesianChart-DA39YynM.js";import"./chartDataContext-CGD2iDmQ.js";import"./CategoricalChart-u8OOiycT.js";import"./AnimatedItems-DqXJhGnM.js";import"./useAnimationId-NxEFQxZ2.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-wXrqsCXj.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-BxIddtsB.js";import"./tooltipContext-DTlpCDdB.js";import"./RegisterGraphicalItemId-9cmkZE1J.js";import"./ErrorBarContext-8rr3nTdF.js";import"./GraphicalItemClipPath-D8FUo4fb.js";import"./SetGraphicalItem-DPr6Abv8.js";import"./getZIndexFromUnknown-CcGuHQGB.js";import"./useGraphicalItemIdentity-DUrbqVuJ.js";import"./Curve-BxTMDs4y.js";import"./step-JFePqLTA.js";import"./path-DyVhHtw_.js";import"./ActivePoints-CrJTvJjI.js";import"./Dot-BcllKm9J.js";import"./getRadiusAndStrokeWidthFromDot-C1GKzwpP.js";import"./useElementOffset-BsSXBjhh.js";import"./uniqBy-PhKVtvXH.js";import"./iteratee-88r513BQ.js";import"./Cross-D31abjDh.js";import"./Sector-rt7PmnOp.js";const Mt={component:r,argTypes:p,title:"Examples/cartesian/YAxis/WithLeftAndRightAxes"},e={render:i=>t.createElement("article",{style:{display:"flex",flexDirection:"column"}},t.createElement("div",{style:{width:"100%"}},t.createElement(l,{width:"100%",height:500},t.createElement(x,{data:A},t.createElement(o,{dataKey:"pv",fill:"red",yAxisId:"right"}),t.createElement(o,{dataKey:"uv",fill:"red",yAxisId:"right-mirror"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left-mirror"}),t.createElement(c,{padding:{left:50,right:50},dataKey:"name",scale:"band"}),t.createElement(r,{...i,yAxisId:"left",orientation:"left",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"left-mirror",orientation:"left",mirror:!0,tickCount:8}),t.createElement(r,{...i,yAxisId:"right",orientation:"right",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"right-mirror",orientation:"right",mirror:!0,tickCount:20}),t.createElement(g,null)))),t.createElement("h4",null,`When an AxisId is specified on all provided axes of one type (XAxis, YAxis, ZAxis), recharts requires a
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
