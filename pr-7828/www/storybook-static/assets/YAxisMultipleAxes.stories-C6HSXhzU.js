import{R as t}from"./iframe-yFYT_zN7.js";import{g as d}from"./utils-ePvtT4un.js";import{Y as p}from"./YAxisArgs-CwatvU9z.js";import{Y as r}from"./YAxis-BT6AeQik.js";import{R as l}from"./zIndexSlice-D0SqWiCA.js";import{C as x}from"./ComposedChart-DxJEOi6H.js";import{p as A}from"./Page-Cj8EiXz7.js";import{B as o}from"./Bar-CbKyvXNg.js";import{L as a}from"./Line-CH7nYjYy.js";import{X as c}from"./XAxis-CLVPgrfg.js";import{T as g}from"./Tooltip-k51Qbtbr.js";import"./preload-helper-Dp1pzeXC.js";import"./get-C2VjdU0L.js";import"./Label-99DUDCMD.js";import"./Text-CYbp4Bob.js";import"./resolveDefaultProps-CTg3N4RV.js";import"./DOMUtils-6VQmbUCR.js";import"./isWellBehavedNumber-CbA6SpN0.js";import"./useId-CBpR1fpo.js";import"./useBackwardsCompatibleTheme-BN2mwgRc.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-CHhs3r11.js";import"./index-CuJJm_Tn.js";import"./index-Du7yNjke.js";import"./RechartsWrapper-BK2Nqghc.js";import"./axisSelectors-Cz3aPbz8.js";import"./throttle-B6GNdBpm.js";import"./d3-scale--DHWqn1j.js";import"./index-DMtch-zH.js";import"./index-DrQda-y9.js";import"./renderedTicksSlice-DwWtQ1Di.js";import"./index-DI6gPrhu.js";import"./CartesianAxis-DGDqWvXT.js";import"./Layer-Dy_GX6yW.js";import"./types-B35KvzC0.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./CartesianChart-Ck9zKM_U.js";import"./chartDataContext-CrNdyu-C.js";import"./CategoricalChart-DBil3fX0.js";import"./AnimatedItems-Ck-1wErl.js";import"./useAnimationId-DeDzp5yx.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-juKcDyre.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-liUtTmHf.js";import"./tooltipContext-BQlTy0XF.js";import"./RegisterGraphicalItemId-CaKRVAB3.js";import"./ErrorBarContext-BZhrM93k.js";import"./GraphicalItemClipPath-StVjduOg.js";import"./SetGraphicalItem-DwYip7WF.js";import"./getZIndexFromUnknown-Bkxaq85c.js";import"./useGraphicalItemIdentity-CrfN38Fv.js";import"./Curve-BBFKRsTK.js";import"./step-Dfa3kdsE.js";import"./path-DyVhHtw_.js";import"./ActivePoints-BrgN9jKH.js";import"./Dot-UFOmxDS-.js";import"./getRadiusAndStrokeWidthFromDot-B44_s7et.js";import"./useElementOffset-BM0KkVoV.js";import"./uniqBy-CM-zGjqN.js";import"./iteratee-DzYgEjfZ.js";import"./Cross-CnTASDln.js";import"./Sector-nfz0sPyA.js";const Mt={component:r,argTypes:p,title:"Examples/cartesian/YAxis/WithLeftAndRightAxes"},e={render:i=>t.createElement("article",{style:{display:"flex",flexDirection:"column"}},t.createElement("div",{style:{width:"100%"}},t.createElement(l,{width:"100%",height:500},t.createElement(x,{data:A},t.createElement(o,{dataKey:"pv",fill:"red",yAxisId:"right"}),t.createElement(o,{dataKey:"uv",fill:"red",yAxisId:"right-mirror"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left-mirror"}),t.createElement(c,{padding:{left:50,right:50},dataKey:"name",scale:"band"}),t.createElement(r,{...i,yAxisId:"left",orientation:"left",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"left-mirror",orientation:"left",mirror:!0,tickCount:8}),t.createElement(r,{...i,yAxisId:"right",orientation:"right",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"right-mirror",orientation:"right",mirror:!0,tickCount:20}),t.createElement(g,null)))),t.createElement("h4",null,`When an AxisId is specified on all provided axes of one type (XAxis, YAxis, ZAxis), recharts requires a
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
