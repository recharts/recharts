import{R as t}from"./iframe-ZxfiIiWi.js";import{g as d}from"./utils-ePvtT4un.js";import{Y as p}from"./YAxisArgs-CwatvU9z.js";import{Y as r}from"./YAxis-Ce1Cc64q.js";import{R as l}from"./zIndexSlice-By0bZmpT.js";import{C as x}from"./ComposedChart-B6tALutk.js";import{p as A}from"./Page-Cj8EiXz7.js";import{B as o}from"./Bar-DFj184HY.js";import{L as a}from"./Line-DdCEipwX.js";import{X as c}from"./XAxis-8M4LuTq0.js";import{T as g}from"./Tooltip-DRa829Qg.js";import"./preload-helper-Dp1pzeXC.js";import"./get-C2VjdU0L.js";import"./Label-C08NNQeO.js";import"./Text-BxPrjmzo.js";import"./resolveDefaultProps-1Uan2Hnp.js";import"./DOMUtils-CTcVRqQO.js";import"./isWellBehavedNumber-DX24GKSm.js";import"./useId-DbFmynHI.js";import"./useBackwardsCompatibleTheme-iH09SwpV.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-MDZol7np.js";import"./index-DZp6XoEo.js";import"./index-DLRIqKjc.js";import"./RechartsWrapper-UKbeDROs.js";import"./axisSelectors-DMQ84IJA.js";import"./throttle-CfDYUS1N.js";import"./d3-scale-Np9PFIYo.js";import"./index-DRuu78hr.js";import"./index-6NV0E9go.js";import"./renderedTicksSlice-nc0b0sSE.js";import"./index-BgcSxEKm.js";import"./CartesianAxis-DHTAgCml.js";import"./Layer-SD6n1FzC.js";import"./types-DfGxKHCw.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./CartesianChart-v34KMzUV.js";import"./chartDataContext-D2b6BjfF.js";import"./CategoricalChart-Ls_A9xeg.js";import"./AnimatedItems-C7ik5li4.js";import"./useAnimationId-Bd76uFLI.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-XQRP3xav.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-O5hE5x5h.js";import"./tooltipContext-w_X85LNY.js";import"./RegisterGraphicalItemId-BglnUmW_.js";import"./ErrorBarContext-lXhQP1y7.js";import"./GraphicalItemClipPath-D7uJY0ae.js";import"./SetGraphicalItem-DfXzBFI9.js";import"./getZIndexFromUnknown-0F5egofR.js";import"./useGraphicalItemIdentity-Cy74xmM1.js";import"./Curve-DPtlKYb4.js";import"./step-BSgEqbWI.js";import"./path-DyVhHtw_.js";import"./ActivePoints--DLJoCCT.js";import"./Dot-DBOOUc-e.js";import"./getRadiusAndStrokeWidthFromDot-CERp_c72.js";import"./useElementOffset-CtPYwSuY.js";import"./uniqBy-BC78fxA5.js";import"./iteratee-CPoLBgS5.js";import"./Cross-CZB0PSDR.js";import"./Sector-DztahhQ8.js";const Mt={component:r,argTypes:p,title:"Examples/cartesian/YAxis/WithLeftAndRightAxes"},e={render:i=>t.createElement("article",{style:{display:"flex",flexDirection:"column"}},t.createElement("div",{style:{width:"100%"}},t.createElement(l,{width:"100%",height:500},t.createElement(x,{data:A},t.createElement(o,{dataKey:"pv",fill:"red",yAxisId:"right"}),t.createElement(o,{dataKey:"uv",fill:"red",yAxisId:"right-mirror"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left-mirror"}),t.createElement(c,{padding:{left:50,right:50},dataKey:"name",scale:"band"}),t.createElement(r,{...i,yAxisId:"left",orientation:"left",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"left-mirror",orientation:"left",mirror:!0,tickCount:8}),t.createElement(r,{...i,yAxisId:"right",orientation:"right",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"right-mirror",orientation:"right",mirror:!0,tickCount:20}),t.createElement(g,null)))),t.createElement("h4",null,`When an AxisId is specified on all provided axes of one type (XAxis, YAxis, ZAxis), recharts requires a
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
