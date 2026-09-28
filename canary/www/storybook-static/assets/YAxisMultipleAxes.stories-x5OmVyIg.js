import{R as t}from"./iframe-B-FpQGVE.js";import{g as d}from"./utils-ePvtT4un.js";import{Y as p}from"./YAxisArgs-CwatvU9z.js";import{Y as r}from"./YAxis-BmhJWmSw.js";import{R as l}from"./zIndexSlice-Be4STqbb.js";import{C as x}from"./ComposedChart-1tjyas2t.js";import{p as A}from"./Page-Cj8EiXz7.js";import{B as o}from"./Bar-CMgdfZkX.js";import{L as a}from"./Line-D-uQwQl5.js";import{X as c}from"./XAxis-BLmB4Uxb.js";import{T as g}from"./Tooltip-aVmuAa7U.js";import"./preload-helper-Dp1pzeXC.js";import"./get-C2VjdU0L.js";import"./Label-CsGEr2R8.js";import"./Text-Djuu9tRj.js";import"./resolveDefaultProps-Dtl_SfnV.js";import"./DOMUtils-miVyGpMZ.js";import"./isWellBehavedNumber-DgH__KwF.js";import"./useId-DAIuZYFe.js";import"./useBackwardsCompatibleTheme-CLDALELV.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-BnTzkaQy.js";import"./index-Bwqm2cxX.js";import"./index-zzhJWva7.js";import"./RechartsWrapper-D1D1pk27.js";import"./axisSelectors-BKBkYNOt.js";import"./throttle-fO2SI_hD.js";import"./d3-scale-BVd2nsAD.js";import"./index-BOg1JrYi.js";import"./index-DrqVEo4b.js";import"./renderedTicksSlice-C87TKpMP.js";import"./index-BSKvdyte.js";import"./CartesianAxis-AFvQJOoy.js";import"./Layer-CC5u66Wi.js";import"./types-DD3qZx3A.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./CartesianChart-CZbjQu0s.js";import"./chartDataContext-BgCxNtXs.js";import"./CategoricalChart-DYpdXtUy.js";import"./AnimatedItems-e1etCO8j.js";import"./useAnimationId-BcCVwFd_.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-BiqGpkxr.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-DC9lclqW.js";import"./tooltipContext-BsSoT0gm.js";import"./RegisterGraphicalItemId-1yR8tuVZ.js";import"./ErrorBarContext-BYOHAx31.js";import"./GraphicalItemClipPath-Cm6Nokyc.js";import"./SetGraphicalItem-Bih-NG2S.js";import"./getZIndexFromUnknown-BewXohwm.js";import"./useGraphicalItemIdentity-DhhteXck.js";import"./dataEntryStyles-CWDGc5BF.js";import"./Curve-CAoBmZPA.js";import"./step-C2pk31G8.js";import"./path-DyVhHtw_.js";import"./ActivePoints-DdCBd2pZ.js";import"./Dot-B9Hx6qjI.js";import"./getRadiusAndStrokeWidthFromDot-DjdOmN1y.js";import"./useElementOffset-4G7IjkNE.js";import"./uniqBy-Ddgi9D3Q.js";import"./iteratee-mgHFghyh.js";import"./Cross-B69nvR11.js";import"./Sector-CEqLBkmr.js";const Rt={component:r,argTypes:p,title:"Examples/cartesian/YAxis/WithLeftAndRightAxes"},e={render:i=>t.createElement("article",{style:{display:"flex",flexDirection:"column"}},t.createElement("div",{style:{width:"100%"}},t.createElement(l,{width:"100%",height:500},t.createElement(x,{data:A},t.createElement(o,{dataKey:"pv",fill:"red",yAxisId:"right"}),t.createElement(o,{dataKey:"uv",fill:"red",yAxisId:"right-mirror"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left-mirror"}),t.createElement(c,{padding:{left:50,right:50},dataKey:"name",scale:"band"}),t.createElement(r,{...i,yAxisId:"left",orientation:"left",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"left-mirror",orientation:"left",mirror:!0,tickCount:8}),t.createElement(r,{...i,yAxisId:"right",orientation:"right",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"right-mirror",orientation:"right",mirror:!0,tickCount:20}),t.createElement(g,null)))),t.createElement("h4",null,`When an AxisId is specified on all provided axes of one type (XAxis, YAxis, ZAxis), recharts requires a
      {x,y,z}AxisId on the corresponding graphical element`)),args:d(p)},Lt=["WithLeftAndRightAxes"];var n,m,s;e.parameters={...e.parameters,docs:{...(n=e.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
}`,...(s=(m=e.parameters)==null?void 0:m.docs)==null?void 0:s.source}}};export{e as WithLeftAndRightAxes,Lt as __namedExportsOrder,Rt as default};
