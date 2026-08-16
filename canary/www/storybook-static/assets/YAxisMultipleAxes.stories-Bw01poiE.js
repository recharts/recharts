import{R as t}from"./iframe-GNxtioUR.js";import{g as d}from"./utils-ePvtT4un.js";import{Y as p}from"./YAxisArgs-CwatvU9z.js";import{Y as r}from"./YAxis-CbYUO1fa.js";import{R as l}from"./zIndexSlice-D4haQxNn.js";import{C as x}from"./ComposedChart-Dx410X4q.js";import{p as A}from"./Page-Cj8EiXz7.js";import{B as o}from"./Bar-Cqz2JVPf.js";import{L as a}from"./Line-AV39YYrF.js";import{X as c}from"./XAxis-5j17aH8X.js";import{T as g}from"./Tooltip-Di5rr9qC.js";import"./preload-helper-Dp1pzeXC.js";import"./get-C2VjdU0L.js";import"./Label-C7cFT6-M.js";import"./Text-C79V-s10.js";import"./resolveDefaultProps-D5DCSoJx.js";import"./DOMUtils-UzZI-9_5.js";import"./isWellBehavedNumber-B1loF3DE.js";import"./RechartsThemeContext-BZnANilh.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-D7CqA8Uv.js";import"./index-CN1r47eQ.js";import"./index-DT7OqoJJ.js";import"./RechartsWrapper-5Lqdjjzz.js";import"./index-CV7IGYk1.js";import"./index-BJVo2ffI.js";import"./throttle-Du4Eduzv.js";import"./axisSelectors-CsnJkuOW.js";import"./d3-scale-CsslalFd.js";import"./renderedTicksSlice-BNEcUsku.js";import"./CartesianAxis-NbOP1W-o.js";import"./Layer-DR6S9zl-.js";import"./types-omsl4D4O.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./CartesianChart-B0x1kr2K.js";import"./chartDataContext-DEGQ_Aoe.js";import"./CategoricalChart-m_Ids5fk.js";import"./tooltipContext-DDY_vjIu.js";import"./AnimatedItems-Ct2IhasV.js";import"./useAnimationId-B4U03xNw.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-D_z4MU1Y.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-McNEEg_Y.js";import"./RegisterGraphicalItemId-BVyZPmQY.js";import"./ErrorBarContext-DSsXqNs7.js";import"./GraphicalItemClipPath-BK71gx_X.js";import"./SetGraphicalItem-vjMpKlni.js";import"./getZIndexFromUnknown--fn58SrP.js";import"./graphicalItemIdentity-CdZfZkJ-.js";import"./graphicalItemSelectors-BM42DxsS.js";import"./Curve-DKHt29i6.js";import"./step-b1TCH5-c.js";import"./path-DyVhHtw_.js";import"./ActivePoints-qyzQPqTK.js";import"./Dot-BaVZ6R7S.js";import"./getRadiusAndStrokeWidthFromDot-DMvsMn3-.js";import"./useElementOffset-nHeneq3D.js";import"./uniqBy-zsY9CiPb.js";import"./iteratee-C5pGeNoI.js";import"./Cross-afqebICI.js";import"./Sector-Bj0ATzCd.js";const Kt={component:r,argTypes:p,title:"Examples/cartesian/YAxis/WithLeftAndRightAxes"},e={render:i=>t.createElement("article",{style:{display:"flex",flexDirection:"column"}},t.createElement("div",{style:{width:"100%"}},t.createElement(l,{width:"100%",height:500},t.createElement(x,{data:A},t.createElement(o,{dataKey:"pv",fill:"red",yAxisId:"right"}),t.createElement(o,{dataKey:"uv",fill:"red",yAxisId:"right-mirror"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left-mirror"}),t.createElement(c,{padding:{left:50,right:50},dataKey:"name",scale:"band"}),t.createElement(r,{...i,yAxisId:"left",orientation:"left",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"left-mirror",orientation:"left",mirror:!0,tickCount:8}),t.createElement(r,{...i,yAxisId:"right",orientation:"right",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"right-mirror",orientation:"right",mirror:!0,tickCount:20}),t.createElement(g,null)))),t.createElement("h4",null,`When an AxisId is specified on all provided axes of one type (XAxis, YAxis, ZAxis), recharts requires a
      {x,y,z}AxisId on the corresponding graphical element`)),args:d(p)};var m,s,n;e.parameters={...e.parameters,docs:{...(m=e.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
}`,...(n=(s=e.parameters)==null?void 0:s.docs)==null?void 0:n.source}}};const Mt=["WithLeftAndRightAxes"];export{e as WithLeftAndRightAxes,Mt as __namedExportsOrder,Kt as default};
